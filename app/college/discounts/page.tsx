'use client'

import { Tag, Shield, Award, ExternalLink, Search } from 'lucide-react'
import Link from 'next/link'

export default function DiscountsPage() {
  const discounts = [
    {
      category: "Certifications",
      items: [
        {
          name: "CompTIA Student Discount",
          description: "50% off on Security+, Network+, and other CompTIA certifications",
          discount: "50% OFF",
          requirements: "Valid student ID required",
          link: "#",
          code: "STUDENT50"
        },
        {
          name: "EC-Council Academic",
          description: "Special pricing for CEH and other EC-Council certifications",
          discount: "60% OFF",
          requirements: "Must be enrolled in an accredited institution",
          link: "#",
          code: "ECSTUDENT"
        },
        {
          name: "(ISC)² Student Program",
          description: "Discounted exam vouchers for CISSP and SSCP",
          discount: "45% OFF",
          requirements: "Student membership required",
          link: "#",
          code: "ISCSTUDENT"
        }
      ]
    },
    {
      category: "Tools and Software",
      items: [
        {
          name: "Burp Suite Academic",
          description: "Student license for Burp Suite Professional",
          discount: "70% OFF",
          requirements: "Academic email required",
          link: "#",
          code: "BURPACADEMIC"
        },
        {
          name: "VMware Academic Program",
          description: "Free VMware Workstation Pro for students",
          discount: "FREE",
          requirements: "Valid academic email",
          link: "#",
          code: "VMACADEMIC"
        },
        {
          name: "IDA Pro Educational",
          description: "Educational license for IDA Pro",
          discount: "65% OFF",
          requirements: "Proof of enrollment required",
          link: "#",
          code: "IDAEDU"
        }
      ]
    },
    {
      category: "Training Platforms",
      items: [
        {
          name: "TryHackMe Student",
          description: "Discounted premium subscription for students",
          discount: "20% OFF",
          requirements: "Student email verification",
          link: "#",
          code: "THMEDU"
        },
        {
          name: "HackTheBox Academy",
          description: "Student discount on annual subscriptions",
          discount: "30% OFF",
          requirements: "Student status verification",
          link: "#",
          code: "HTBSTUDENT"
        },
        {
          name: "Pluralsight Skills",
          description: "Special student pricing for annual subscription",
          discount: "40% OFF",
          requirements: "Valid student ID",
          link: "#",
          code: "PLRSTUDENT"
        }
      ]
    }
  ]

  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-8 text-gray-900 dark:text-gray-100">Student Discounts</h1>
      
      <div className="mb-8">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search discounts..."
            className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md 
              bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
          />
        </div>
      </div>

      <div className="space-y-8">
        {discounts.map((category, index) => (
          <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-gray-100 flex items-center">
              {category.category === "Certifications" && <Award className="w-6 h-6 mr-2" />}
              {category.category === "Tools and Software" && <Shield className="w-6 h-6 mr-2" />}
              {category.category === "Training Platforms" && <Tag className="w-6 h-6 mr-2" />}
              {category.category}
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.items.map((item, itemIndex) => (
                <div key={itemIndex} className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100">{item.name}</h3>
                    <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                      {item.discount}
                    </span>
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">{item.description}</p>
                  
                  <div className="space-y-2">
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      <strong>Requirements:</strong> {item.requirements}
                    </p>
                    {item.code && (
                      <div className="flex items-center space-x-2">
                        <span className="text-sm font-mono bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">
                          {item.code}
                        </span>
                        <button className="text-blue-600 text-sm hover:text-blue-700">Copy</button>
                      </div>
                    )}
                  </div>
                  
                  <Link
                    href={item.link}
                    className="mt-4 flex items-center text-blue-600 hover:text-blue-700 dark:text-blue-400"
                  >
                    Get Discount
                    <ExternalLink className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
} 