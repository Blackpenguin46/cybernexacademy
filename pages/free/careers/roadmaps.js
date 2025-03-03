import React from 'react'
import Layout from '../../../components/Layout'

export default function CareerRoadmaps() {
  const roadmaps = [
    {
      title: "Security Analyst Path",
      stages: [
        {
          level: "Entry Level",
          requirements: ["Security+ Certification", "Basic Networking", "Linux Fundamentals"],
          roles: ["Junior SOC Analyst", "Security Operations Analyst"]
        },
        {
          level: "Mid Level",
          requirements: ["CISSP", "Incident Response", "Threat Hunting"],
          roles: ["SOC Analyst", "Incident Response Analyst"]
        },
        {
          level: "Senior Level",
          requirements: ["Advanced Threat Detection", "Team Leadership", "Security Architecture"],
          roles: ["Senior Security Analyst", "SOC Team Lead"]
        }
      ]
    },
    {
      title: "Penetration Tester Path",
      stages: [
        {
          level: "Entry Level",
          requirements: ["CEH", "Programming Basics", "Network Security"],
          roles: ["Junior Penetration Tester", "Security Assessor"]
        },
        {
          level: "Mid Level",
          requirements: ["OSCP", "Advanced Exploitation", "Web Security"],
          roles: ["Penetration Tester", "Security Consultant"]
        },
        {
          level: "Senior Level",
          requirements: ["Custom Exploit Development", "Red Team Operations"],
          roles: ["Senior Penetration Tester", "Red Team Lead"]
        }
      ]
    }
  ]

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold mb-8">Career Roadmaps</h1>
        
        <div className="space-y-12">
          {roadmaps.map((roadmap, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow">
              <h2 className="text-2xl font-bold mb-6">{roadmap.title}</h2>
              <div className="space-y-6">
                {roadmap.stages.map((stage, stageIndex) => (
                  <div key={stageIndex} className="border-l-4 border-blue-600 pl-4">
                    <h3 className="text-xl font-semibold mb-3">{stage.level}</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-medium mb-2">Requirements:</h4>
                        <ul className="list-disc list-inside text-gray-600">
                          {stage.requirements.map((req, reqIndex) => (
                            <li key={reqIndex}>{req}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium mb-2">Typical Roles:</h4>
                        <ul className="list-disc list-inside text-gray-600">
                          {stage.roles.map((role, roleIndex) => (
                            <li key={roleIndex}>{role}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  )
} 