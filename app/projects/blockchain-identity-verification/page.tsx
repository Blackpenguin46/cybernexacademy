"use client"

import ProjectWalkthrough from "@/components/ProjectWalkthrough"

export default function BlockchainIdentityVerificationPage() {
  const projectData = {
    title: "Blockchain Identity Verification System",
    description:
      "Build a decentralized identity verification system using blockchain technology to securely store and verify digital identities without relying on centralized authorities.",
    difficulty: "advanced" as const,
    duration: "4-6 weeks",
    prerequisites: [
      "Understanding of blockchain concepts",
      "Experience with smart contracts (Solidity)",
      "JavaScript/TypeScript knowledge",
      "Familiarity with web3.js or ethers.js",
    ],
    steps: [
      {
        title: "Project Setup and Planning",
        content: `
          <p>In this step, you'll set up your development environment and plan the architecture of your blockchain identity system.</p>
          <ul>
            <li>Install Node.js, npm, and Hardhat for Ethereum development</li>
            <li>Set up a local blockchain for testing (Hardhat Network)</li>
            <li>Create a project structure with contracts, tests, and frontend directories</li>
            <li>Design the system architecture, including smart contracts and user flows</li>
          </ul>
        `,
      },
      {
        title: "Smart Contract Development",
        content: `
          <p>Develop the core smart contracts that will handle identity registration, verification, and management.</p>
          <ul>
            <li>Create an Identity Registry contract to store identity hashes</li>
            <li>Implement functions for registering new identities</li>
            <li>Add verification mechanisms for identity claims</li>
            <li>Develop access control for identity updates and revocation</li>
            <li>Write comprehensive tests for all contract functions</li>
          </ul>
          <pre><code>
// Example Identity Registry Contract (Solidity)
pragma solidity ^0.8.0;

contract IdentityRegistry {
    struct Identity {
        bytes32 dataHash;
        address owner;
        uint256 createdAt;
        bool active;
    }
    
    mapping(address => Identity) public identities;
    
    event IdentityRegistered(address indexed user, bytes32 dataHash);
    event IdentityUpdated(address indexed user, bytes32 newDataHash);
    event IdentityRevoked(address indexed user);
    
    function registerIdentity(bytes32 _dataHash) external {
        require(identities[msg.sender].owner == address(0), "Identity already exists");
        
        identities[msg.sender] = Identity({
            dataHash: _dataHash,
            owner: msg.sender,
            createdAt: block.timestamp,
            active: true
        });
        
        emit IdentityRegistered(msg.sender, _dataHash);
    }
    
    function updateIdentity(bytes32 _newDataHash) external {
        require(identities[msg.sender].owner == msg.sender, "Identity not found");
        require(identities[msg.sender].active, "Identity not active");
        
        identities[msg.sender].dataHash = _newDataHash;
        
        emit IdentityUpdated(msg.sender, _newDataHash);
    }
    
    function revokeIdentity() external {
        require(identities[msg.sender].owner == msg.sender, "Identity not found");
        
        identities[msg.sender].active = false;
        
        emit IdentityRevoked(msg.sender);
    }
    
    function verifyIdentity(address _user, bytes32 _dataHash) external view returns (bool) {
        return identities[_user].active && identities[_user].dataHash == _dataHash;
    }
}
          </code></pre>
        `,
      },
      {
        title: "Frontend Development",
        content: `
          <p>Create a user interface for interacting with your identity verification system.</p>
          <ul>
            <li>Set up a React application with web3 integration</li>
            <li>Implement wallet connection (MetaMask or WalletConnect)</li>
            <li>Create forms for identity registration and verification</li>
            <li>Build a dashboard for users to manage their identities</li>
            <li>Add visual feedback for transaction status and confirmations</li>
          </ul>
        `,
      },
      {
        title: "Identity Data Management",
        content: `
          <p>Implement secure methods for handling identity data while maintaining privacy.</p>
          <ul>
            <li>Create a system for hashing identity documents before storing on-chain</li>
            <li>Implement IPFS integration for decentralized storage of encrypted identity data</li>
            <li>Develop encryption/decryption mechanisms for sensitive information</li>
            <li>Create a verification process that doesn't expose raw identity data</li>
          </ul>
        `,
      },
      {
        title: "Testing and Deployment",
        content: `
          <p>Test your system thoroughly and deploy it to a public testnet.</p>
          <ul>
            <li>Write end-to-end tests for the entire identity verification flow</li>
            <li>Deploy smart contracts to Ethereum testnet (Goerli or Sepolia)</li>
            <li>Deploy frontend to a hosting service (Vercel, Netlify, etc.)</li>
            <li>Document the system architecture and usage instructions</li>
            <li>Create a demo video showcasing the identity verification process</li>
          </ul>
        `,
      },
    ],
    resources: [
      {
        title: "Ethereum Development Documentation",
        url: "https://ethereum.org/en/developers/docs/",
      },
      {
        title: "Hardhat Documentation",
        url: "https://hardhat.org/getting-started/",
      },
      {
        title: "IPFS Documentation",
        url: "https://docs.ipfs.io/",
      },
      {
        title: "Self-Sovereign Identity Principles",
        url: "https://github.com/WebOfTrustInfo/self-sovereign-identity",
      },
      {
        title: "ERC-725: Ethereum Identity Standard",
        url: "https://eips.ethereum.org/EIPS/eip-725",
      },
    ],
  }

  return <ProjectWalkthrough {...projectData} />
}

