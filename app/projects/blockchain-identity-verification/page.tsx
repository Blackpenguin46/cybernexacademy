import ProjectWalkthrough from '@/app/components/ProjectWalkthrough'

export default function BlockchainIdentityVerificationProject() {
  return (
    <ProjectWalkthrough
      title="Blockchain-based Identity Verification"
      description="Implement a decentralized identity verification system using blockchain technology. Learn about distributed ledgers, smart contracts, and digital identity concepts."
      difficulty="Advanced"
      category="Blockchain Security"
      steps={[
        {
          title: "Set Up Environment",
          description: "Choose a blockchain platform like Ethereum and set up the development environment."
        },
        {
          title: "Design Identity System",
          description: "Plan the structure of your decentralized identity system, including data models and verification processes."
        },
        {
          title: "Develop Smart Contracts",
          description: "Write smart contracts for identity registration, verification, and management using Solidity."
        },
        {
          title: "Implement Backend Logic",
          description: "Use Python libraries like web3.py to interact with the blockchain and manage identity data."
        },
        {
          title: "Build User Interface",
          description: "Create a user-friendly interface for identity registration, verification, and management."
        },
        {
          title: "Test and Deploy",
          description: "Thoroughly test the system and deploy it to a blockchain network (testnet or mainnet)."
        }
      ]}
      videoTutorial="https://www.youtube.com/watch?v=example_blockchain_identity_verification"
      onlineResources={[
        {
          title: "Ethereum Documentation",
          url: "https://ethereum.org/en/developers/docs/"
        },
        {
          title: "Solidity Documentation",
          url: "https://docs.soliditylang.org/"
        },
        {
          title: "Web3.py Documentation",
          url: "https://web3py.readthedocs.io/"
        }
      ]}
    />
  )
}

