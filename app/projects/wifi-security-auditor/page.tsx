import ProjectWalkthrough from '@/app/components/ProjectWalkthrough'

export default function WiFiSecurityAuditorProject() {
  return (
    <ProjectWalkthrough
      title="Wi-Fi Security Auditor"
      description="Build a tool to audit Wi-Fi networks for vulnerabilities. Learn about wireless network protocols, encryption standards, and network penetration testing."
      difficulty="Intermediate"
      category="Network Security"
      steps={[
        {
          title: "Set Up Environment",
          description: "Install Python and required libraries: scapy."
        },
        {
          title: "Scan Wi-Fi Networks",
          description: "Use scapy to detect nearby Wi-Fi networks: from scapy.all import sniff; packets = sniff(count=10, filter='wlan')"
        },
        {
          title: "Analyze Network Security",
          description: "Identify the encryption type (e.g., WEP, WPA, WPA2) and other security features of detected networks."
        },
        {
          title: "Test for Vulnerabilities",
          description: "Check for weak encryption (e.g., WEP) or open networks, and attempt to identify common vulnerabilities."
        },
        {
          title: "Generate Report",
          description: "Create a detailed report of findings, including potential security risks and recommendations."
        }
      ]}
      videoTutorial="https://www.youtube.com/watch?v=example_wifi_security_auditor"
      onlineResources={[
        {
          title: "Scapy Documentation",
          url: "https://scapy.readthedocs.io/en/latest/"
        },
        {
          title: "Wi-Fi Security Best Practices",
          url: "https://www.wi-fi.org/discover-wi-fi/security"
        },
        {
          title: "Wireless Network Penetration Testing",
          url: "https://www.offensive-security.com/wireless-attacks/"
        }
      ]}
    />
  )
}

