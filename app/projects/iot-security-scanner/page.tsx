import ProjectWalkthrough from '@/app/components/ProjectWalkthrough'

export default function IoTSecurityScannerProject() {
  return (
    <ProjectWalkthrough
      title="IoT Device Security Scanner"
      description="Develop a tool to scan and assess the security of IoT devices on a network. Explore IoT protocols, firmware analysis, and network security."
      difficulty="Intermediate"
      category="IoT Security"
      steps={[
        {
          title: "Set Up Environment",
          description: "Install Python and required libraries: scapy, nmap-python."
        },
        {
          title: "Scan IoT Devices",
          description: "Use nmap to discover devices on the network: import nmap; scanner = nmap.PortScanner(); scanner.scan('192.168.1.0/24', arguments='-sP')"
        },
        {
          title: "Identify IoT Devices",
          description: "Develop a method to distinguish IoT devices from other network devices based on open ports and services."
        },
        {
          title: "Test for Vulnerabilities",
          description: "Check for common IoT vulnerabilities such as default credentials, open ports, or outdated firmware."
        },
        {
          title: "Analyze Device Communication",
          description: "Use scapy to capture and analyze network traffic from IoT devices for potential security issues."
        },
        {
          title: "Generate Security Report",
          description: "Create a comprehensive report detailing discovered devices, vulnerabilities, and recommended security measures."
        }
      ]}
      videoTutorial="https://www.youtube.com/watch?v=example_iot_security_scanner"
      onlineResources={[
        {
          title: "OWASP IoT Security Testing Guide",
          url: "https://owasp.org/www-project-iot-security-testing-guide/"
        },
        {
          title: "Nmap Documentation",
          url: "https://nmap.org/book/man.html"
        },
        {
          title: "Scapy Documentation",
          url: "https://scapy.readthedocs.io/en/latest/"
        }
      ]}
    />
  )
}

