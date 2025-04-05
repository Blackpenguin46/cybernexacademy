-- Add onboarding fields to profiles table
ALTER TABLE public.profiles 
ADD COLUMN IF NOT EXISTS experience_level text,
ADD COLUMN IF NOT EXISTS goals text[],
ADD COLUMN IF NOT EXISTS onboarding_completed boolean DEFAULT false,
ADD COLUMN IF NOT EXISTS recommended_resources jsonb[];

-- Add recommended resources table
CREATE TABLE public.recommended_resources (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  title text NOT NULL,
  description text NOT NULL,
  url text NOT NULL,
  resource_type text NOT NULL,
  interests text[] NOT NULL,
  experience_levels text[] NOT NULL,
  goals text[] NOT NULL,
  created_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Enable RLS
ALTER TABLE public.recommended_resources ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Anyone can view recommended resources"
  ON public.recommended_resources FOR SELECT
  USING (true);

-- Insert sample recommended resources
INSERT INTO public.recommended_resources (title, description, url, resource_type, interests, experience_levels, goals) VALUES
-- Web Security Resources
('Web Security Academy', 'Interactive labs for learning web security', 'https://portswigger.net/web-security', 'interactive', ARRAY['web_security'], ARRAY['beginner', 'intermediate'], ARRAY['learn_basics', 'skill_development']),
('OWASP Top 10', 'Guide to the most critical web security risks', 'https://owasp.org/www-project-top-ten/', 'guide', ARRAY['web_security'], ARRAY['beginner', 'intermediate'], ARRAY['learn_basics']),
('Web Hacking 101', 'Introduction to finding and exploiting web vulnerabilities', 'https://leanpub.com/web-hacking-101', 'book', ARRAY['web_security'], ARRAY['beginner'], ARRAY['learn_basics', 'career_transition']),

-- Network Security Resources
('Practical Packet Analysis', 'Guide to packet analysis with Wireshark', 'https://nostarch.com/packet3', 'book', ARRAY['network_security'], ARRAY['beginner', 'intermediate'], ARRAY['skill_development']),
('TryHackMe - Network Security Path', 'Interactive network security challenges', 'https://tryhackme.com/paths', 'interactive', ARRAY['network_security'], ARRAY['beginner', 'intermediate'], ARRAY['learn_basics', 'skill_development']),
('Cisco Networking Academy', 'Comprehensive network security courses', 'https://www.netacad.com/', 'course', ARRAY['network_security'], ARRAY['beginner', 'intermediate', 'advanced'], ARRAY['certification', 'skill_development']),

-- Malware Analysis Resources
('Practical Malware Analysis', 'Guide to analyzing malicious software', 'https://nostarch.com/malware', 'book', ARRAY['malware_analysis'], ARRAY['intermediate', 'advanced'], ARRAY['skill_development']),
('ANY.RUN', 'Interactive malware analysis service', 'https://any.run/', 'tool', ARRAY['malware_analysis'], ARRAY['intermediate', 'advanced'], ARRAY['skill_development', 'stay_updated']),
('SANS FOR610', 'Reverse engineering malware course', 'https://www.sans.org/cyber-security-courses/reverse-engineering-malware/', 'course', ARRAY['malware_analysis'], ARRAY['advanced'], ARRAY['certification', 'skill_development']),

-- Cloud Security Resources
('AWS Security Fundamentals', 'Introduction to AWS security', 'https://aws.amazon.com/training/classroom/aws-security-fundamentals/', 'course', ARRAY['cloud_security'], ARRAY['beginner', 'intermediate'], ARRAY['learn_basics', 'certification']),
('Azure Security Center', 'Microsoft Azure security documentation', 'https://docs.microsoft.com/en-us/azure/security-center/', 'guide', ARRAY['cloud_security'], ARRAY['beginner', 'intermediate'], ARRAY['learn_basics', 'skill_development']),
('Cloud Security Alliance', 'Best practices for cloud security', 'https://cloudsecurityalliance.org/', 'guide', ARRAY['cloud_security'], ARRAY['intermediate', 'advanced'], ARRAY['stay_updated', 'certification']),

-- Cryptography Resources
('Cryptography I', 'Stanford University cryptography course', 'https://www.coursera.org/learn/crypto', 'course', ARRAY['cryptography'], ARRAY['beginner', 'intermediate'], ARRAY['learn_basics', 'skill_development']),
('Crypto 101', 'Introductory cryptography book', 'https://www.crypto101.io/', 'book', ARRAY['cryptography'], ARRAY['beginner'], ARRAY['learn_basics']),
('CryptoHack', 'Interactive cryptography challenges', 'https://cryptohack.org/', 'interactive', ARRAY['cryptography'], ARRAY['intermediate', 'advanced'], ARRAY['skill_development']),

-- Threat Intelligence Resources
('MITRE ATT&CK Framework', 'Knowledge base of adversary tactics and techniques', 'https://attack.mitre.org/', 'guide', ARRAY['threat_intelligence'], ARRAY['beginner', 'intermediate', 'advanced'], ARRAY['learn_basics', 'stay_updated']),
('SANS FOR578', 'Cyber threat intelligence course', 'https://www.sans.org/cyber-security-courses/cyber-threat-intelligence/', 'course', ARRAY['threat_intelligence'], ARRAY['intermediate', 'advanced'], ARRAY['certification', 'skill_development']),
('ThreatConnect Academy', 'Free threat intelligence training', 'https://academy.threatconnect.com/', 'course', ARRAY['threat_intelligence'], ARRAY['beginner', 'intermediate'], ARRAY['learn_basics', 'skill_development']),

-- Digital Forensics Resources
('DFIR Training', 'Digital forensics training resources', 'https://www.dfir.training/', 'guide', ARRAY['digital_forensics'], ARRAY['beginner', 'intermediate', 'advanced'], ARRAY['learn_basics', 'skill_development']),
('Autopsy', 'Digital forensics platform', 'https://www.autopsy.com/', 'tool', ARRAY['digital_forensics'], ARRAY['intermediate', 'advanced'], ARRAY['skill_development']),
('SANS FOR500', 'Windows forensic analysis course', 'https://www.sans.org/cyber-security-courses/windows-forensic-analysis/', 'course', ARRAY['digital_forensics'], ARRAY['intermediate', 'advanced'], ARRAY['certification', 'skill_development']),

-- Certification Resources
('CompTIA Security+ Guide', 'Study guide for Security+ certification', 'https://www.comptia.org/certifications/security', 'guide', ARRAY['certifications'], ARRAY['beginner'], ARRAY['certification', 'career_transition']),
('CISSP Official Study Guide', 'Study guide for CISSP certification', 'https://www.isc2.org/Certifications/CISSP', 'book', ARRAY['certifications'], ARRAY['advanced'], ARRAY['certification']),
('Offensive Security OSCP', 'Penetration testing certification', 'https://www.offensive-security.com/pwk-oscp/', 'course', ARRAY['certifications'], ARRAY['intermediate', 'advanced'], ARRAY['certification', 'skill_development']),

-- Career Development Resources
('Cybersecurity Career Roadmap', 'Guide to cybersecurity career paths', 'https://www.cyberseek.org/pathway.html', 'guide', ARRAY['career_development'], ARRAY['beginner', 'intermediate'], ARRAY['career_transition', 'learn_basics']),
('Cybersecurity Job Interview Questions', 'Common interview questions and answers', 'https://insights.dice.com/cybersecurity-interview-questions/', 'guide', ARRAY['career_development'], ARRAY['beginner', 'intermediate', 'advanced'], ARRAY['career_transition']),
('CyberVista', 'Cybersecurity training and career development', 'https://www.cybervista.net/', 'course', ARRAY['career_development'], ARRAY['beginner', 'intermediate', 'advanced'], ARRAY['career_transition', 'certification']); 