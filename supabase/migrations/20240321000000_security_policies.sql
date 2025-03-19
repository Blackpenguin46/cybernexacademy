-- Enable Row Level Security for all tables
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE courses ENABLE ROW LEVEL SECURITY;
ALTER TABLE course_progress ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_settings ENABLE ROW LEVEL SECURITY;

-- Users table policies
CREATE POLICY "Users can view their own data"
    ON users
    FOR SELECT
    USING (auth.uid() = id);

CREATE POLICY "Users can update their own data"
    ON users
    FOR UPDATE
    USING (auth.uid() = id);

-- Profiles table policies
CREATE POLICY "Profiles are viewable by owner"
    ON profiles
    FOR SELECT
    USING (auth.uid() = user_id);

CREATE POLICY "Profiles are editable by owner"
    ON profiles
    FOR UPDATE
    USING (auth.uid() = user_id);

CREATE POLICY "Users can create their own profile"
    ON profiles
    FOR INSERT
    WITH CHECK (auth.uid() = user_id);

-- Courses table policies
CREATE POLICY "Courses are viewable by all authenticated users"
    ON courses
    FOR SELECT
    USING (auth.role() = 'authenticated');

CREATE POLICY "Only admins can modify courses"
    ON courses
    FOR ALL
    USING (auth.uid() IN (
        SELECT user_id 
        FROM user_roles 
        WHERE role = 'admin'
    ));

-- Course progress policies
CREATE POLICY "Users can view their own course progress"
    ON course_progress
    FOR SELECT
    USING (auth.uid() = user_id);

CREATE POLICY "Users can update their own course progress"
    ON course_progress
    FOR UPDATE
    USING (auth.uid() = user_id);

CREATE POLICY "Users can create their own course progress"
    ON course_progress
    FOR INSERT
    WITH CHECK (auth.uid() = user_id);

-- User settings policies
CREATE POLICY "Users can view their own settings"
    ON user_settings
    FOR SELECT
    USING (auth.uid() = user_id);

CREATE POLICY "Users can update their own settings"
    ON user_settings
    FOR UPDATE
    USING (auth.uid() = user_id);

-- Add security definer functions for sensitive operations
CREATE OR REPLACE FUNCTION get_secure_user_data(user_id UUID)
RETURNS TABLE (
    id UUID,
    email TEXT,
    created_at TIMESTAMPTZ
)
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
    IF auth.uid() = user_id THEN
        RETURN QUERY
        SELECT u.id, u.email, u.created_at
        FROM users u
        WHERE u.id = user_id;
    ELSE
        RAISE EXCEPTION 'Not authorized';
    END IF;
END;
$$;

-- Add audit logging
CREATE TABLE audit_logs (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES auth.users(id),
    action TEXT NOT NULL,
    table_name TEXT NOT NULL,
    record_id UUID,
    old_data JSONB,
    new_data JSONB,
    ip_address INET,
    created_at TIMESTAMPTZ DEFAULT now()
);

-- Create audit logging function
CREATE OR REPLACE FUNCTION audit_log_trigger()
RETURNS TRIGGER AS $$
BEGIN
    INSERT INTO audit_logs (
        user_id,
        action,
        table_name,
        record_id,
        old_data,
        new_data,
        ip_address
    )
    VALUES (
        auth.uid(),
        TG_OP,
        TG_TABLE_NAME,
        COALESCE(NEW.id, OLD.id),
        CASE WHEN TG_OP = 'DELETE' THEN row_to_json(OLD) ELSE NULL END,
        CASE WHEN TG_OP IN ('INSERT', 'UPDATE') THEN row_to_json(NEW) ELSE NULL END,
        inet_client_addr()
    );
    RETURN COALESCE(NEW, OLD);
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Apply audit trigger to important tables
CREATE TRIGGER users_audit
    AFTER INSERT OR UPDATE OR DELETE ON users
    FOR EACH ROW EXECUTE FUNCTION audit_log_trigger();

CREATE TRIGGER profiles_audit
    AFTER INSERT OR UPDATE OR DELETE ON profiles
    FOR EACH ROW EXECUTE FUNCTION audit_log_trigger();

-- Add rate limiting function
CREATE OR REPLACE FUNCTION check_rate_limit(
    user_id UUID,
    action_type TEXT,
    max_requests INTEGER,
    window_minutes INTEGER
) RETURNS BOOLEAN
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
    request_count INTEGER;
BEGIN
    SELECT COUNT(*)
    INTO request_count
    FROM audit_logs
    WHERE user_id = user_id
    AND action = action_type
    AND created_at > now() - (window_minutes || ' minutes')::interval;

    RETURN request_count < max_requests;
END;
$$; 