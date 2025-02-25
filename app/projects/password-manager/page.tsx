import ProjectWalkthrough from '@/app/components/ProjectWalkthrough'

export default function PasswordManagerProject() {
  return (
    <ProjectWalkthrough
      title="Develop a Password Manager"
      description="Build a secure password manager application with encryption. Learn about cryptography, secure storage, and user authentication while creating a practical tool."
      difficulty="Intermediate"
      category="Application Security"
      steps={[
        {
          title: "Set Up Environment",
          description: "Install Python and required libraries: cryptography (pip install cryptography)."
        },
        {
          title: "Implement Encryption",
          description: "Use AES encryption to secure passwords using the cryptography library."
        },
        {
          title: "Store Passwords Securely",
          description: "Use SQLite to store encrypted passwords in a database."
        },
        {
          title: "Add User Authentication",
          description: "Implement a master password system using hashing for user authentication."
        },
        {
          title: "Build a User Interface",
          description: "Use tkinter to create a simple GUI for managing passwords."
        }
      ]}
      videoTutorial="https://www.youtube.com/embed/dQw4w9WgXcQ"
      onlineResources={[
        {
          title: "Cryptography Library Documentation",
          url: "https://cryptography.io/en/latest/"
        },
        {
          title: "SQLite Python Tutorial",
          url: "https://docs.python.org/3/library/sqlite3.html"
        },
        {
          title: "Tkinter GUI Programming",
          url: "https://docs.python.org/3/library/tkinter.html"
        }
      ]}
    />
  )
}

