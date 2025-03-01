"use client"

import React from 'react'

const Accordion = ({ items }) => {
  const [openIndex, React.useState(null)]

  const toggleItem = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="space-y-2">
      {items.map((item, index) => (
        <div key={index} className="border rounded-lg">
          <button
            className="w-full px-4 py-3 text-left font-medium flex justify-between items-center"
            onClick={() => toggleItem(index)}
          >
            {item.title}
            <span className={`transform transition-transform ${openIndex === index ? 'rotate-180' : ''}`}>
              ▼
            </span>
          </button>
          {openIndex === index && (
            <div className="px-4 py-3 border-t">
              {item.content}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

export default Accordion
