import Link from 'next/link'
import { Clock, DollarSign, Star, Users, Check, X } from 'lucide-react'

export default function BootcampsPage() {
  const bootcamps = [
    {
      name: "Fullstack Cyber Bootcamp",
      provider: "Fullstack Academy",
      duration: "17 weeks",
      price: "$17,910",
      rating: 4.8,
      reviews: 245,
      link: "/education/bootcamps/fullstack",
      description: "Comprehensive cybersecurity training with hands-on experience"
    },
    {
      name: "Cyber Security Engineering",
      provider: "Flatiron School",
      duration: "15 weeks",
      price: "$16,900",
      rating: 4.7,
      reviews: 189,
      link: "/education/bootcamps/flatiron",
      description: "Intensive program covering offensive and defensive security"
    },
    {
      name: "Security+ Bootcamp",
      provider: "SecureSet",
      duration: "12 weeks",
      price: "$14,950",
      rating: 4.6,
      reviews: 156,
      link: "/education/bootcamps/secureset",
      description: "Focused preparation for CompTIA Security+ certification"
    },
    {
      name: "Introduction to Cybersecurity",
      provider: "Cybrary",
      duration: "Self-paced",
      price: "Free",
      rating: 4.5,
      reviews: 320,
      link: "/education/bootcamps/cybrary",
      description: "Beginner-friendly course covering cybersecurity fundamentals"
    },
    {
      name: "Cybersecurity Basics",
      provider: "Cisco Networking Academy",
      duration: "30 hours",
      price: "Free",
      rating: 4.4,
      reviews: 210,
      link: "/education/bootcamps/cisco",
      description: "Learn the basics of cybersecurity and network defense"
    },
    // Add more bootcamps as needed
  ]

  const prosCons = [
    {
      type: "Pros",
      items: [
        "Focused, hands-on training in a short timeframe",
        "Often more affordable than a traditional degree",
        "Career support and job placement services",
        "Ideal for career changers or those without a degree",
        "Can be combined with an associate's degree for added credibility"
      ]
    },
    {
      type: "Cons",
      items: [
        "Intensive and demanding schedule",
        "May lack the depth of a 4-year degree program",
        "Quality varies significantly between providers",
        "Limited long-term networking opportunities compared to universities",
        "May require self-discipline for self-paced programs"
      ]
    }
  ]

  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-8">Cybersecurity Bootcamps</h1>
      
      <div className="grid gap-6 mb-12">
        {bootcamps.map((bootcamp, index) => (
          <Link 
            key={index} 
            href={bootcamp.link}
            className="block bg-secondary hover:bg-secondary/80 rounded-lg p-6 transition-colors duration-200"
          >
            <div>
              <h2 className="text-xl font-semibold mb-2">{bootcamp.name}</h2>
              <p className="text-muted-foreground mb-4">{bootcamp.provider}</p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-2" />
                  <span className="text-sm">{bootcamp.duration}</span>
                </div>
                <div className="flex items-center">
                  <DollarSign className="w-4 h-4 mr-2" />
                  <span className={`text-sm ${bootcamp.price === "Free" ? "text-green-500" : ""}`}>
                    {bootcamp.price}
                  </span>
                </div>
                <div className="flex items-center">
                  <Star className="w-4 h-4 mr-2 text-yellow-500" />
                  <span className="text-sm">{bootcamp.rating}/5.0</span>
                </div>
                <div className="flex items-center">
                  <Users className="w-4 h-4 mr-2" />
                  <span className="text-sm">{bootcamp.reviews} reviews</span>
                </div>
              </div>
              
              <p className="text-sm text-muted-foreground">{bootcamp.description}</p>
            </div>
          </Link>
        ))}
      </div>

      <div className="bg-secondary rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-6">Are Bootcamps Right for You?</h2>
        <p className="text-muted-foreground mb-6">
          Bootcamps are an excellent option for individuals not pursuing a traditional 4-year degree or those looking to enhance their skills alongside an associate's degree. They provide focused, practical training that can help you enter the workforce quickly. However, they may not be suitable for everyone. Below are some pros and cons to consider:
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {prosCons.map((section, index) => (
            <div key={index}>
              <h3 className="text-xl font-semibold mb-4">{section.type}</h3>
              <ul className="space-y-3">
                {section.items.map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    {section.type === "Pros" ? (
                      <Check className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
                    ) : (
                      <X className="w-5 h-5 text-red-500 mr-2 flex-shrink-0" />
                    )}
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

