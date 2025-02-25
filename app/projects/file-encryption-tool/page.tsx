import ProjectWalkthrough from '@/app/components/ProjectWalkthrough'

export default function FileEncryptionToolProject() {
  return (
    <ProjectWalkthrough
      title="Secure File Encryption Tool"
      description="Build a tool to encrypt and decrypt files using strong encryption algorithms. This project will teach you about file handling, cryptography, and key management."
      difficulty="Beginner"
      category="Cryptography"
      steps={[
        {
          title: "Set Up Environment",
          description: "Install Python and required libraries: cryptography."
        },
        {
          title: "Implement Encryption",
          description: "Use AES encryption to encrypt files using the Fernet class from the cryptography library."
        },
        {
          title: "Implement Decryption",
          description: "Use the same key to decrypt files, reversing the encryption process."
        },
        {
          title: "Add Key Management",
          description: "Implement secure storage and management of encryption keys."
        },
        {
          title: "Build User Interface",
          description: "Create a simple command-line interface for users to encrypt and decrypt files."
        }
      ]}
      videoTutorial="https://www.youtube.com/embed/dQw4w9WgXcQ"
      onlineResources={[
        {
          title: "Cryptography Library Documentation",
          url: "https://cryptography.io/en/latest/"
        },
        {
          title: "Python File Handling Tutorial",
          url: "https://docs.python.org/3/tutorial/inputoutput.html#reading-and-writing-files"
        },
        {
          title: "AES Encryption Explained",
          url: "https://www.youtube.com/watch?v=O4xNJsjtN6E"
        }
      ]}
    />
  )
}

