import ProjectWalkthrough from '@/app/components/ProjectWalkthrough'

export default function SecureChatAppProject() {
  return (
    <ProjectWalkthrough
      title="Secure Chat Application"
      description="Develop an end-to-end encrypted chat application. Explore secure communication protocols, real-time data transfer, and user privacy."
      difficulty="Advanced"
      category="Application Security"
      steps={[
        {
          title: "Set Up Environment",
          description: "Install Python and required libraries: socket, cryptography."
        },
        {
          title: "Implement Encryption",
          description: "Use AES encryption for secure communication: from cryptography.fernet import Fernet; key = Fernet.generate_key(); cipher = Fernet(key); encrypted_message = cipher.encrypt(b'Hello, World!')"
        },
        {
          title: "Build Server and Client",
          description: "Use Python's socket library to create a server and client for real-time communication."
        },
        {
          title: "Add GUI",
          description: "Use tkinter to create a user-friendly interface for the chat application."
        },
        {
          title: "Implement User Authentication",
          description: "Add a secure login system to protect user identities and conversations."
        }
      ]}
      videoTutorial="https://www.youtube.com/watch?v=example_secure_chat_app"
      onlineResources={[
        {
          title: "Python Socket Programming Tutorial",
          url: "https://realpython.com/python-sockets/"
        },
        {
          title: "Cryptography Library Documentation",
          url: "https://cryptography.io/en/latest/"
        },
        {
          title: "Tkinter GUI Programming",
          url: "https://docs.python.org/3/library/tkinter.html"
        }
      ]}
    />
  )
}

