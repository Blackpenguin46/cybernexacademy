"use client"

import ProjectWalkthrough from "@/components/ProjectWalkthrough"

export default function DnsSpoofingDetectorPage() {
  const projectData = {
    title: "DNS Spoofing Detector",
    description:
      "Build a tool that can detect DNS spoofing attacks by monitoring and analyzing DNS responses for inconsistencies that might indicate malicious activity.",
    difficulty: "intermediate" as const,
    duration: "2-3 weeks",
    prerequisites: [
      "Basic understanding of networking concepts",
      "Familiarity with DNS protocol",
      "Python programming experience",
      "Command line knowledge",
    ],
    steps: [
      {
        title: "Understanding DNS Spoofing",
        content: `
          <p>Before building the detector, it's important to understand how DNS spoofing works:</p>
          <ul>
            <li>DNS (Domain Name System) translates domain names to IP addresses</li>
            <li>In a DNS spoofing attack, an attacker intercepts DNS queries and returns false IP addresses</li>
            <li>This can redirect users to malicious websites that mimic legitimate ones</li>
            <li>Detection involves comparing responses from multiple DNS servers and looking for inconsistencies</li>
          </ul>
        `,
      },
      {
        title: "Setting Up Your Development Environment",
        content: `
          <p>Prepare your system for developing the DNS spoofing detector:</p>
          <ul>
            <li>Install Python 3.x and pip</li>
            <li>Install required libraries: scapy, dnspython, and requests</li>
            <li>Set up a virtual environment for your project</li>
            <li>Create a basic project structure with modules for DNS querying, analysis, and reporting</li>
          </ul>
          <pre><code>
# Install required packages
pip install scapy dnspython requests

# Create project structure
mkdir dns_spoof_detector
cd dns_spoof_detector
mkdir src tests results
touch src/__init__.py src/dns_query.py src/analyzer.py src/reporter.py
touch main.py
          </code></pre>
        `,
      },
      {
        title: "Implementing DNS Query Module",
        content: `
          <p>Create a module to send DNS queries to multiple DNS servers and collect responses:</p>
          <ul>
            <li>Implement functions to query different DNS servers (Google, Cloudflare, OpenDNS, etc.)</li>
            <li>Store responses with metadata (response time, TTL, source server)</li>
            <li>Handle timeouts and errors gracefully</li>
            <li>Create a function to perform parallel queries for efficiency</li>
          </ul>
          <pre><code>
# src/dns_query.py
import dns.resolver
import time
from concurrent.futures import ThreadPoolExecutor

class DNSQuerier:
    def __init__(self):
        # List of public DNS servers to query
        self.dns_servers = [
            {'name': 'Google', 'ip': '8.8.8.8'},
            {'name': 'Cloudflare', 'ip': '1.1.1.1'},
            {'name': 'OpenDNS', 'ip': '208.67.222.222'},
            {'name': 'Quad9', 'ip': '9.9.9.9'}
        ]
    
    def query_single_server(self, domain, dns_server):
        """Query a single DNS server for a domain and return the response."""
        resolver = dns.resolver.Resolver()
        resolver.nameservers = [dns_server['ip']]
        resolver.timeout = 3
        resolver.lifetime = 3
        
        try:
            start_time = time.time()
            answers = resolver.resolve(domain, 'A')
            response_time = time.time() - start_time
            
            results = []
            for answer in answers:
                results.append({
                    'ip': answer.address,
                    'ttl': answers.ttl
                })
            
            return {
                'server': dns_server['name'],
                'server_ip': dns_server['ip'],
                'results': results,
                'response_time': response_time,
                'status': 'success'
            }
        except Exception as e:
            return {
                'server': dns_server['name'],
                'server_ip': dns_server['ip'],
                'results': [],
                'response_time': None,
                'status': 'error',
                'error': str(e)
            }
    
    def query_all_servers(self, domain):
        """Query all DNS servers in parallel and return all responses."""
        with ThreadPoolExecutor(max_workers=len(self.dns_servers)) as executor:
            futures = [
                executor.submit(self.query_single_server, domain, server)
                for server in self.dns_servers
            ]
            
            results = [future.result() for future in futures]
            return results
          </code></pre>
        `,
      },
      {
        title: "Building the Analysis Engine",
        content: `
          <p>Develop the core analysis logic to detect potential DNS spoofing:</p>
          <ul>
            <li>Compare IP addresses returned by different DNS servers</li>
            <li>Check if responses match known legitimate IP addresses (if available)</li>
            <li>Analyze TTL values for suspicious differences</li>
            <li>Implement a scoring system to rate the likelihood of spoofing</li>
          </ul>
          <pre><code>
# src/analyzer.py
from collections import Counter

class DNSAnalyzer:
    def __init__(self):
        self.threshold = 0.75  # Threshold for consensus
    
    def analyze_responses(self, responses):
        """Analyze DNS responses to detect potential spoofing."""
        # Extract all returned IPs
        all_ips = []
        for response in responses:
            if response['status'] == 'success':
                for result in response['results']:
                    all_ips.append(result['ip'])
        
        # Count occurrences of each IP
        ip_counts = Counter(all_ips)
        total_responses = len(all_ips)
        
        if total_responses == 0:
            return {
                'status': 'error',
                'message': 'No successful DNS responses received'
            }
        
        # Find the most common IP and its frequency
        most_common_ip, most_common_count = ip_counts.most_common(1)[0]
        consensus_percentage = most_common_count / total_responses
        
        # Check for potential spoofing
        suspicious_responses = []
        for response in responses:
            if response['status'] == 'success':
                response_ips = [r['ip'] for r in response['results']]
                if most_common_ip not in response_ips:
                    suspicious_responses.append({
                        'server': response['server'],
                        'returned_ips': response_ips
                    })
        
        # Determine if spoofing is likely
        is_spoofing_likely = consensus_percentage < self.threshold and len(suspicious_responses) > 0
        
        return {
            'status': 'success',
            'consensus_ip': most_common_ip,
            'consensus_percentage': consensus_percentage,
            'suspicious_responses': suspicious_responses,
            'is_spoofing_likely': is_spoofing_likely,
            'confidence': 'high' if consensus_percentage > 0.9 else 'medium' if consensus_percentage > 0.7 else 'low'
        }
          </code></pre>
        `,
      },
      {
        title: "Creating the Reporting Module",
        content: `
          <p>Implement a reporting system to present the analysis results:</p>
          <ul>
            <li>Create formatted console output with color-coding for alerts</li>
            <li>Generate HTML reports for more detailed analysis</li>
            <li>Implement logging for continuous monitoring</li>
            <li>Add options for email or webhook notifications for critical alerts</li>
          </ul>
        `,
      },
      {
        title: "Building the Main Application",
        content: `
          <p>Integrate all components into a complete application:</p>
          <ul>
            <li>Create a command-line interface with argument parsing</li>
            <li>Implement continuous monitoring mode for real-time protection</li>
            <li>Add configuration options for customization</li>
            <li>Create a batch mode for checking multiple domains</li>
          </ul>
          <pre><code>
# main.py
import argparse
import time
import sys
from src.dns_query import DNSQuerier
from src.analyzer import DNSAnalyzer
from src.reporter import Reporter

def main():
    parser = argparse.ArgumentParser(description='DNS Spoofing Detector')
    parser.add_argument('domains', nargs='+', help='Domains to check')
    parser.add_argument('--monitor', action='store_true', help='Enable continuous monitoring')
    parser.add_argument('--interval', type=int, default=300, help='Monitoring interval in seconds')
    parser.add_argument('--output', choices=['console', 'html', 'both'], default='console', help='Output format')
    args = parser.parse_args()
    
    querier = DNSQuerier()
    analyzer = DNSAnalyzer()
    reporter = Reporter(output_format=args.output)
    
    def check_domain(domain):
        print(f"Checking domain: {domain}")
        responses = querier.query_all_servers(domain)
        analysis = analyzer.analyze_responses(responses)
        reporter.report(domain, responses, analysis)
        
        if analysis['status'] == 'success' and analysis['is_spoofing_likely']:
            print(f"⚠️  WARNING: Potential DNS spoofing detected for {domain}!")
            return True
        return False
    
    if args.monitor:
        print(f"Starting continuous monitoring (every {args.interval} seconds)...")
        try:
            while True:
                spoofing_detected = False
                for domain in args.domains:
                    if check_domain(domain):
                        spoofing_detected = True
                
                if spoofing_detected:
                    print("Spoofing detected! Check the detailed report.")
                
                print(f"Sleeping for {args.interval} seconds...")
                time.sleep(args.interval)
        except KeyboardInterrupt:
            print("Monitoring stopped by user.")
    else:
        for domain in args.domains:
            check_domain(domain)

if __name__ == "__main__":
    main()
          </code></pre>
        `,
      },
      {
        title: "Testing and Validation",
        content: `
          <p>Test your DNS spoofing detector in various scenarios:</p>
          <ul>
            <li>Test with known legitimate domains to establish a baseline</li>
            <li>Create a controlled DNS spoofing environment for testing (using tools like Ettercap or dnsspoof)</li>
            <li>Validate detection accuracy and tune parameters</li>
            <li>Test edge cases like DNS server failures or timeouts</li>
          </ul>
        `,
      },
    ],
    resources: [
      {
        title: "DNS Protocol RFC 1035",
        url: "https://tools.ietf.org/html/rfc1035",
      },
      {
        title: "Scapy Documentation",
        url: "https://scapy.readthedocs.io/",
      },
      {
        title: "dnspython Documentation",
        url: "https://dnspython.readthedocs.io/",
      },
      {
        title: "Understanding DNS Spoofing Attacks",
        url: "https://www.cloudflare.com/learning/dns/dns-spoofing/",
      },
      {
        title: "OWASP DNS Spoofing",
        url: "https://owasp.org/www-community/attacks/DNS_Spoofing",
      },
    ],
  }

  return <ProjectWalkthrough {...projectData} />
}

