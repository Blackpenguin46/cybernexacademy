import { useAuth } from '../lib/AuthContext';

export default function UserProfile() {
  const { user, loading } = useAuth();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return <div>Please sign in to view your profile</div>;
  }

  // Only access user properties when we're sure user exists
  return (
    <div>
      <h2>User Profile</h2>
      <p>Email: {user.email}</p>
      {/* Other user properties */}
    </div>
  );
} 