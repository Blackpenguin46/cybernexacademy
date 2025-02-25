import Link from 'next/link'
import { ExternalLink, Youtube, Radio, Rss, Globe, Twitter, Github } from 'lucide-react'

interface Creator {
  name: string;
  description: string;
  platforms: {
    youtube?: string;
    podcast?: string;
    blog?: string;
    website?: string;
    twitter?: string;
    github?: string;
  };
}

const creators: Creator[] = [
  {
    name: "The Cyber Mentor (TCM)",
    description: "Offers high-quality ethical hacking and penetration testing tutorials, including walkthroughs and courses for learners at all levels.",
    platforms: {
      youtube: "https://www.youtube.com/channel/UC0ArlFuFYMpEewyRBzdLHiw",
      twitter: "https://twitter.com/thecybermentor"
    }
  },
  {
    name: "IppSec",
    description: "Focuses on penetration testing and CTF (Capture the Flag) challenges. He provides walkthroughs for Hack The Box and other hacking challenges.",
    platforms: {
      youtube: "https://www.youtube.com/channel/UCa6eh7gCkpPo5XXUDfygQQA"
    }
  },
  {
    name: "LiveOverflow",
    description: "Content revolves around reverse engineering, exploitation, and ethical hacking. His channel is known for deep technical content on hacking and security research.",
    platforms: {
      youtube: "https://www.youtube.com/channel/UClcE-kVhqyiHCcjYwcpfj9w"
    }
  },
  {
    name: "John Hammond",
    description: "Provides tutorials on cybersecurity, ethical hacking, CTF challenges, and penetration testing, often using real-world scenarios.",
    platforms: {
      youtube: "https://www.youtube.com/c/JohnHammondSecurity",
      website: "https://hammondsecurity.com/"
    }
  },
  {
    name: "SANS Institute",
    description: "Offers high-level training and educational content on cybersecurity, including free webinars, expert interviews, and discussions on security trends.",
    platforms: {
      youtube: "https://www.youtube.com/user/SANSInstitute",
      website: "https://www.sans.org/blog/",
      podcast: "https://www.sans.org/webcasts"
    }
  },
  {
    name: "Darknet Diaries",
    description: "A podcast that shares stories about hacking, cybercrime, and data breaches. It's great for those interested in cybersecurity storytelling.",
    platforms: {
      podcast: "https://darknetdiaries.com/",
      youtube: "https://www.youtube.com/c/DarknetDiaries"
    }
  },
  {
    name: "KrebsOnSecurity",
    description: "Brian Krebs focuses on cybercrime, security vulnerabilities, data breaches, and privacy issues. His blog is a trusted source for deep dives into security topics.",
    platforms: {
      website: "https://krebsonsecurity.com/"
    }
  },
  {
    name: "Malwarebytes Labs",
    description: "Offers cybersecurity research, advice on malware threats, and tips for protecting users and businesses.",
    platforms: {
      website: "https://blog.malwarebytes.com/",
      youtube: "https://www.youtube.com/c/Malwarebytes"
    }
  },
  {
    name: "Hak5",
    description: "A community-driven channel focused on hacking hardware, cybersecurity tools, and hacking tutorials, including the use of devices like the Pineapple WiFi.",
    platforms: {
      youtube: "https://www.youtube.com/@Hak5",
      podcast: "https://hak5.org/podcasts"
    }
  },
  {
    name: "Computerphile",
    description: "Features videos explaining computer science concepts, cybersecurity issues, and tech-related topics in a digestible format.",
    platforms: {
      youtube: "https://www.youtube.com/user/Computerphile"
    }
  }
];

export default function ContentCreators() {
  const renderPlatformLink = (url: string, platform: string, Icon: any) => {
    return (
      <Link
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 hover:text-blue-600 inline-flex items-center mr-4"
      >
        <Icon className="w-5 h-5 mr-1" />
        {platform}
      </Link>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Content Creators</h1>
      <div className="grid gap-6">
        {creators.map((creator, index) => (
          <div key={index} className="bg-gray-800 rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-2">{creator.name}</h2>
            <p className="text-gray-400 mb-4">{creator.description}</p>
            <div className="flex flex-wrap gap-2">
              {creator.platforms.youtube && renderPlatformLink(creator.platforms.youtube, 'YouTube', Youtube)}
              {creator.platforms.podcast && renderPlatformLink(creator.platforms.podcast, 'Podcast', Radio)}
              {creator.platforms.blog && renderPlatformLink(creator.platforms.blog, 'Blog', Rss)}
              {creator.platforms.website && renderPlatformLink(creator.platforms.website, 'Website', Globe)}
              {creator.platforms.twitter && renderPlatformLink(creator.platforms.twitter, 'Twitter', Twitter)}
              {creator.platforms.github && renderPlatformLink(creator.platforms.github, 'GitHub', Github)}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

