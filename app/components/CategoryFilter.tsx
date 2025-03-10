"use client"

import React from 'react'
import { Filter } from 'lucide-react'

interface Category {
  id: string
  name: string
  icon: React.ElementType
}

interface CategoryFilterProps {
  categories: Category[]
  selectedCategory: string
  setSelectedCategory: (category: string) => void
  accentColor?: string // Optional accent color for customization
}

const CategoryFilter = ({ 
  categories, 
  selectedCategory, 
  setSelectedCategory,
  accentColor = 'blue' // Default accent color
}: CategoryFilterProps) => {
  return (
    <section className="py-10 border-b border-gray-800">
      <div className="container">
        <div className="flex items-center mb-6">
          <Filter className={`w-5 h-5 text-${accentColor}-500 mr-2`} />
          <h2 className="text-xl font-semibold text-white">Filter by Category</h2>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`flex items-center justify-center space-x-2 p-3 rounded-lg transition-colors ${
                selectedCategory === category.id
                  ? `bg-${accentColor}-600 text-white`
                  : 'bg-gray-900/50 hover:bg-gray-800 text-gray-300'
              }`}
            >
              <category.icon className="w-4 h-4" />
              <span className="text-sm font-medium">{category.name}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CategoryFilter 