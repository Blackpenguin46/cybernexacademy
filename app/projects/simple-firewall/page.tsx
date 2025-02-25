import ProjectWalkthrough from '@/app/components/ProjectWalkthrough'

export default function SimpleFirewallProject() {
  return (
    <ProjectWalkthrough
      title="Build a Simple Firewall"
      description="Create a basic firewall using Python to filter network traffic. This project will teach you about network protocols, packet filtering, and basic security concepts."
      difficulty="Beginner"
      category="Network Security"
      steps={[
        {
          title: "Set Up Environment",
          description: "Install Python and required libraries: scapy (pip install scapy)."
        },
        {
          title: "Capture Network Traffic",
          description: "Use scapy to sniff packets: from scapy.all import sniff; packets = sniff(count=10)  # Capture 10 packets"
        },
        {
          title: "Define Filtering Rules",
          description: "Create rules to allow/block traffic based on IP, port, or protocol. Example: Block traffic from a specific IP."
        },
        {
          title: "Implement Firewall Logic",
          description: "Apply the filter to captured packets: sniff(filter='ip', prn=packet_filter)"
        },
        {
          title: "Test the Firewall",
          description: "Simulate traffic using tools like ping or nmap to test the firewall."
        }
      ]}
      videoTutorial="https://www.youtube.com/embed/dQw4w9WgXcQ"
      onlineResources={[
        {
          title: "Scapy Documentation",
          url: "https://scapy.readthedocs.io/en/latest/"
        },
        {
          title: "Python Networking Tutorial",
          url: "https://realpython.com/python-sockets/"
        },
        {
          title: "Network Security Fundamentals",
          url: "https://www.cisco.com/c/en/us/products/security/what-is-network-security.html"
        }
      ]}
    />
  )
}

