"use client"

import ProjectWalkthrough from "@/components/ProjectWalkthrough"

export default function FileEncryptionToolPage() {
  const projectData = {
    title: "File Encryption Tool",
    description:
      "Build a secure file encryption and decryption tool using modern cryptographic algorithms to protect sensitive files with password-based encryption.",
    difficulty: "beginner" as const,
    duration: "1-2 weeks",
    prerequisites: [
      "Basic programming knowledge",
      "Understanding of command-line interfaces",
      "Familiarity with file operations",
    ],
    steps: [
      {
        title: "Project Setup and Planning",
        content: `
          <p>In this step, you'll set up your development environment and plan your encryption tool:</p>
          <ul>
            <li>Choose a programming language (Python recommended for beginners)</li>
            <li>Install necessary libraries (cryptography, argparse, etc.)</li>
            <li>Create a basic project structure</li>
            <li>Define the user interface and workflow</li>
          </ul>
          <pre><code>
# Install required packages
pip install cryptography argparse

# Create project structure
mkdir secure_file_encryptor
cd secure_file_encryptor
touch encryptor.py
          </code></pre>
        `,
      },
      {
        title: "Implementing Core Encryption Functions",
        content: `
          <p>Develop the core encryption and decryption functionality:</p>
          <ul>
            <li>Implement password-based key derivation (PBKDF2)</li>
            <li>Create functions for file encryption using AES-256-GCM</li>
            <li>Implement secure file decryption with authentication</li>
            <li>Add proper error handling for cryptographic operations</li>
          </ul>
          <pre><code>
# encryptor.py
import os
import base64
from cryptography.hazmat.primitives import hashes
from cryptography.hazmat.primitives.kdf.pbkdf2 import PBKDF2HMAC
from cryptography.hazmat.primitives.ciphers.aead import AESGCM

def derive_key(password, salt):
    """Derive a key from a password using PBKDF2."""
    kdf = PBKDF2HMAC(
        algorithm=hashes.SHA256(),
        length=32,  # 32 bytes = 256 bits
        salt=salt,
        iterations=100000,
    )
    return kdf.derive(password.encode())

def encrypt_file(file_path, password):
    """Encrypt a file using AES-256-GCM with a password-derived key."""
    # Generate a random salt
    salt = os.urandom(16)
    
    # Derive key from password
    key = derive_key(password, salt)
    
    # Generate a random nonce
    nonce = os.urandom(12)
    
    # Create cipher
    cipher = AESGCM(key)
    
    # Read file content
    with open(file_path, 'rb') as f:
        plaintext = f.read()
    
    # Encrypt the file content
    ciphertext = cipher.encrypt(nonce, plaintext, None)
    
    # Create the encrypted file path
    encrypted_file_path = file_path + '.encrypted'
    
    # Write the encrypted data with metadata
    with open(encrypted_file_path, 'wb') as f:
        f.write(salt)  # First 16 bytes: salt
        f.write(nonce)  # Next 12 bytes: nonce
        f.write(ciphertext)  # Rest: ciphertext
    
    return encrypted_file_path

def decrypt_file(encrypted_file_path, password):
    """Decrypt a file encrypted with encrypt_file function."""
    try:
        # Read the encrypted file
        with open(encrypted_file_path, 'rb') as f:
            data = f.read()
        
        # Extract salt, nonce, and ciphertext
        salt = data[:16]
        nonce = data[16:28]
        ciphertext = data[28:]
        
        # Derive key from password and salt
        key = derive_key(password, salt)
        
        # Create cipher
        cipher = AESGCM(key)
        
        # Decrypt the ciphertext
        plaintext = cipher.decrypt(nonce, ciphertext, None)
        
        # Create the decrypted file path
        decrypted_file_path = encrypted_file_path.replace('.encrypted', '.decrypted')
        
        # Write the decrypted data
        with open(decrypted_file_path, 'wb') as f:
            f.write(plaintext)
        
        return decrypted_file_path
    except Exception as e:
        raise ValueError("Decryption failed. Incorrect password or corrupted file.") from e
          </code></pre>
        `,
      },
      {
        title: "Building the Command-Line Interface",
        content: `
          <p>Create a user-friendly command-line interface for your tool:</p>
          <ul>
            <li>Implement argument parsing for encrypt/decrypt commands</li>
            <li>Add options for input/output file paths</li>
            <li>Create secure password input handling</li>
            <li>Add help documentation and usage examples</li>
          </ul>
          <pre><code>
# Add to encryptor.py
import argparse
import getpass
import sys

def main():
    parser = argparse.ArgumentParser(description='Secure File Encryptor/Decryptor')
    parser.add_argument('action', choices=['encrypt', 'decrypt'], help='Action to perform')
    parser.add_argument('file', help='File to encrypt or decrypt')
    parser.add_argument('-o', '--output', help='Output file path (optional)')
    
    args = parser.parse_args()
    
    # Get password securely
    password = getpass.getpass('Enter password: ')
    
    if args.action == 'encrypt':
        try:
            encrypted_file = encrypt_file(args.file, password)
            print(f"File encrypted successfully: {encrypted_file}")
        except Exception as e:
            print(f"Encryption failed: {str(e)}", file=sys.stderr)
            sys.exit(1)
    else:  # decrypt
        try:
            decrypted_file = decrypt_file(args.file, password)
            print(f"File decrypted successfully: {decrypted_file}")
        except Exception as e:
            print(f"Decryption failed: {str(e)}", file=sys.stderr)
            sys.exit(1)

if __name__ == "__main__":
    main()
          </code></pre>
        `,
      },
      {
        title: "Adding Advanced Features",
        content: `
          <p>Enhance your tool with additional security features:</p>
          <ul>
            <li>Implement file integrity verification</li>
            <li>Add secure file deletion after encryption</li>
            <li>Create a directory encryption mode for encrypting multiple files</li>
            <li>Implement file compression before encryption</li>
          </ul>
        `,
      },
      {
        title: "Testing and Security Validation",
        content: `
          <p>Test your encryption tool thoroughly to ensure it's secure and reliable:</p>
          <ul>
            <li>Create unit tests for encryption/decryption functions</li>
            <li>Test with various file types and sizes</li>
            <li>Verify that encrypted files cannot be decrypted without the correct password</li>
            <li>Check for potential security vulnerabilities</li>
          </ul>
          <pre><code>
# test_encryptor.py
import unittest
import os
import tempfile
from encryptor import encrypt_file, decrypt_file

class TestEncryptor(unittest.TestCase):
    def setUp(self):
        # Create a temporary file for testing
        self.test_dir = tempfile.mkdtemp()
        self.test_file = os.path.join(self.test_dir, 'test_file.txt')
        with open(self.test_file, 'w') as f:
            f.write('This is test content for encryption and decryption.')
        
        self.password = 'test_password123'
    
    def tearDown(self):
        # Clean up temporary files
        for file in os.listdir(self.test_dir):
            os.remove(os.path.join(self.test_dir, file))
        os.rmdir(self.test_dir)
    
    def test_encryption_decryption(self):
        # Test that a file can be encrypted and then decrypted
        encrypted_file = encrypt_file(self.test_file, self.password)
        self.assertTrue(os.path.exists(encrypted_file))
        
        decrypted_file = decrypt_file(encrypted_file, self.password)
        self.assertTrue(os.path.exists(decrypted_file))
        
        # Check that the decrypted content matches the original
        with open(decrypted_file, 'r') as f:
            content = f.read()
        
        self.assertEqual(content, 'This is test content for encryption and decryption.')
    
    def test_wrong_password(self):
        # Test that decryption fails with wrong password
        encrypted_file = encrypt_file(self.test_file, self.password)
        
        with self.assertRaises(ValueError):
            decrypt_file(encrypted_file, 'wrong_password')

if __name__ == '__main__':
    unittest.main()
          </code></pre>
        `,
      },
    ],
    resources: [
      {
        title: "Cryptography Package Documentation",
        url: "https://cryptography.io/en/latest/",
      },
      {
        title: "NIST Guidelines for Password-Based Key Derivation",
        url: "https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-132.pdf",
      },
      {
        title: "AES-GCM Encryption Explained",
        url: "https://en.wikipedia.org/wiki/Galois/Counter_Mode",
      },
      {
        title: "Python argparse Tutorial",
        url: "https://docs.python.org/3/howto/argparse.html",
      },
      {
        title: "Secure Coding Practices",
        url: "https://owasp.org/www-project-secure-coding-practices-quick-reference-guide/",
      },
    ],
  }

  return <ProjectWalkthrough {...projectData} />
}

