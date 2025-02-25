import Link from 'next/link'
import { Book, ExternalLink } from 'lucide-react'

interface Book {
  title: string;
  link: string;
}

interface PublishingWebsite {
  name: string;
  url: string;
}

export default function BooksPublications() {
  const books: Book[] = [
    { title: "The Art of Deception", link: "https://www.amazon.com/Art-Deception-Controlling-Element-Security/dp/076454280X" },
    { title: "Hacking: The Art of Exploitation", link: "https://www.amazon.com/Hacking-Art-Exploitation-Jon-Erickson/dp/1593271441" },
    { title: "The Web Application Hacker's Handbook", link: "https://www.amazon.com/Web-Application-Hackers-Handbook-Exploiting/dp/1118026470" },
    { title: "Practical Malware Analysis", link: "https://www.amazon.com/Practical-Malware-Analysis-Hands-Dissecting/dp/1593272901" },
    { title: "Metasploit: The Penetration Tester's Guide", link: "https://www.amazon.com/Metasploit-Penetration-Testers-David-Kennedy/dp/159327288X" },
    { title: "Ghost in the Wires", link: "https://www.amazon.com/Ghost-Wires-Adventures-Worlds-Wanted/dp/0316037729" },
    { title: "Social Engineering: The Science of Human Hacking", link: "https://www.amazon.com/Social-Engineering-Science-Human-Hacking/dp/111943338X" },
    { title: "Cybersecurity and Cyberwar", link: "https://www.amazon.com/Cybersecurity-Cyberwar-Everyone-Needs-Know%C2%AE/dp/0199918119" },
    { title: "Countdown to Zero Day", link: "https://www.amazon.com/Countdown-Zero-Day-Stuxnet-Digital/dp/0770436196" },
    { title: "Penetration Testing: A Hands-On Introduction to Hacking", link: "https://www.amazon.com/Penetration-Testing-Hands-Introduction-Hacking/dp/1593275641" },
    { title: "Tribe of Hackers", link: "https://www.amazon.com/Tribe-Hackers-Cybersecurity-Advice-Worlds/dp/1119643376" },
    { title: "Applied Cryptography", link: "https://www.amazon.com/Applied-Cryptography-Protocols-Algorithms-Source/dp/1119096723" },
    { title: "Black Hat Python", link: "https://www.amazon.com/Black-Hat-Python-2nd-Programming/dp/1718501129" },
    { title: "CISSP All-in-One Exam Guide", link: "https://www.amazon.com/CISSP-All-One-Guide-Eighth/dp/1260142655" },
    { title: "Network Security Essentials", link: "https://www.amazon.com/Network-Security-Essentials-Applications-Standards/dp/0134527372" },
    { title: "The Cyber Effect", link: "https://www.amazon.com/Cyber-Effect-Pioneering-Cyberpsychologist-Explains/dp/0812997859" },
    { title: "Practical Packet Analysis", link: "https://www.amazon.com/Practical-Packet-Analysis-Wireshark-Real-World/dp/1593278020" },
    { title: "Security Engineering", link: "https://www.amazon.com/Security-Engineering-Building-Dependable-Distributed/dp/1119642787" },
    { title: "Hands-On Machine Learning for Cybersecurity", link: "https://www.amazon.com/Hands-Machine-Learning-Cybersecurity-intelligent/dp/1788992288" },
    { title: "Zero Trust Networks", link: "https://www.amazon.com/Zero-Trust-Networks-Building-Untrusted/dp/1491962194" },
    { title: "Linux Basics for Hackers", link: "https://www.amazon.com/Linux-Basics-Hackers-Networking-Scripting/dp/1593278551" },
    { title: "Inside Cyber Warfare", link: "https://www.amazon.com/Inside-Cyber-Warfare-Mapping-Underworld/dp/1449310044" },
    { title: "Threat Modeling: Designing for Security", link: "https://www.amazon.com/Threat-Modeling-Designing-Adam-Shostack/dp/1118809998" },
    { title: "Cybersecurity Essentials", link: "https://www.amazon.com/Cybersecurity-Essentials-Charles-J-Brooks/dp/1119362393" },
    { title: "NIST Special Publications", link: "https://csrc.nist.gov/publications/sp" },
  ];

  const publishingWebsites: PublishingWebsite[] = [
    { name: "No Starch Press", url: "https://nostarch.com/" },
    { name: "Packt Publishing", url: "https://www.packtpub.com/" },
    { name: "Wiley Cybersecurity Books", url: "https://www.wiley.com/en-us/Cybersecurity-c-CS0" },
    { name: "Springer Cybersecurity Library", url: "https://www.springer.com/gp/computer-science/cybersecurity" },
    { name: "O'Reilly Media", url: "https://www.oreilly.com/" },
  ];

  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-8 text-gray-900 dark:text-gray-100">Books & Publications</h1>
      
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Recommended Books</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {books.map((book, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
              <div className="flex items-center mb-2">
                <Book className="w-5 h-5 text-blue-600 dark:text-blue-400 mr-2" />
                <h3 className="font-semibold text-gray-900 dark:text-gray-100">{book.title}</h3>
              </div>
              <Link 
                href={book.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:underline text-sm inline-flex items-center"
              >
                View on Amazon <ExternalLink className="ml-1 h-3 w-3" />
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Cybersecurity Book Publishers</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {publishingWebsites.map((site, index) => (
            <Link 
              key={index}
              href={site.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow hover:shadow-md transition-shadow duration-200"
            >
              <div className="flex items-center justify-between">
                <span className="font-semibold text-gray-900 dark:text-gray-100">{site.name}</span>
                <ExternalLink className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}

