import ProjectWalkthrough from '@/app/components/ProjectWalkthrough'

export default function SecureFileSharingSystemProject() {
  return (
    <ProjectWalkthrough
      title="Secure File Sharing System"
      description="Create a secure system for sharing files with end-to-end encryption and access controls. Explore cryptography, secure data transfer, and user authentication."
      difficulty="Advanced"
      category="Application Security"
      steps={[
        {
          title: "Set Up Environment",
          description: "Install Python and required libraries: flask, cryptography, sqlalchemy."
        },
        {
          title: "Implement User Authentication",
          description: "Create a secure user authentication system using bcrypt for password hashing and JWT for session management."
        },
        {
          title: "Design File Encryption",
          description: "Implement end-to-end encryption for files using AES encryption: from cryptography.fernet import Fernet"
        },
        {
          title: "Develop File Upload and Download",
          description: "Create secure routes for file upload and download, ensuring proper access controls and encryption/decryption."
        },
        {
          title: "Implement Access Controls",
          description: "Design and implement a system for managing file permissions and sharing settings."
        },
        {
          title: "Create User Interface",
          description: "Develop a user-friendly web interface for file management, sharing, and access control."
        }
      ]}
      videoTutorial="https://www.youtube.com/watch?v=example_secure_file_sharing_system"
      onlineResources={[
        {
          title: "Flask Documentation",
          url: "https://flask.palletsprojects.com/"
        },
        {
          title: "Cryptography Library Documentation",
          url: "https://cryptography.io/en/latest/"
        },
        {
          title: "OWASP File Upload Security",
          url: "https://owasp.org/www-community/vulnerabilities/Unrestricted_File_Upload"
        }
      ]}
    />
  )
}

