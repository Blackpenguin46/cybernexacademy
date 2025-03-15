"use client"

import React, { useState } from 'react'
import { 
  Search, 
  SlidersHorizontal, 
  Tag, 
  Star, 
  Filter, 
  X, 
  CheckCircle2,
  Calendar,
  Users,
  Clock,
  Book,
  MessageCircle,
  Globe
} from 'lucide-react'
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Slider } from "@/components/ui/slider"

interface FilterOption {
  id: string
  label: string
  value: string | number
}

interface FilterCategory {
  id: string
  name: string
  type: 'checkbox' | 'radio' | 'slider'
  icon: React.ElementType
  options?: FilterOption[]
  min?: number
  max?: number
  step?: number
}

interface UniversalFilterProps {
  searchPlaceholder: string
  filterCategories: FilterCategory[]
  activeFilters: Record<string, any>
  setActiveFilters: (filters: Record<string, any>) => void
  accentColor?: string
  itemCount?: number
  showTags?: boolean
  tags?: string[]
  selectedTags?: string[]
  setSelectedTags?: (tags: string[]) => void
}

const UniversalFilter = ({
  searchPlaceholder,
  filterCategories,
  activeFilters,
  setActiveFilters,
  accentColor = 'blue',
  itemCount,
  showTags = false,
  tags = [],
  selectedTags = [],
  setSelectedTags = () => {}
}: UniversalFilterProps) => {
  const [showFilters, setShowFilters] = useState(false)
  
  // Handle search query changes
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setActiveFilters({
      ...activeFilters,
      searchQuery: e.target.value
    })
  }
  
  // Clear search query
  const clearSearch = () => {
    setActiveFilters({
      ...activeFilters,
      searchQuery: ''
    })
  }
  
  // Handle checkbox filter changes
  const handleCheckboxChange = (categoryId: string, optionId: string) => {
    const currentSelection = Array.isArray(activeFilters[categoryId]) 
      ? [...activeFilters[categoryId]] 
      : []
    
    if (currentSelection.includes(optionId)) {
      setActiveFilters({
        ...activeFilters,
        [categoryId]: currentSelection.filter(id => id !== optionId)
      })
    } else {
      setActiveFilters({
        ...activeFilters,
        [categoryId]: [...currentSelection, optionId]
      })
    }
  }
  
  // Handle radio filter changes
  const handleRadioChange = (categoryId: string, optionId: string) => {
    setActiveFilters({
      ...activeFilters,
      [categoryId]: optionId
    })
  }
  
  // Handle slider filter changes
  const handleSliderChange = (categoryId: string, value: number[]) => {
    setActiveFilters({
      ...activeFilters,
      [categoryId]: value[0]
    })
  }
  
  // Toggle tag selection
  const toggleTag = (tag: string) => {
    if (!setSelectedTags) return
    
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter(t => t !== tag))
    } else {
      setSelectedTags([...selectedTags, tag])
    }
  }
  
  // Reset all filters
  const resetFilters = () => {
    const resetValues: Record<string, any> = { searchQuery: '' }
    
    filterCategories.forEach(category => {
      if (category.type === 'checkbox') {
        resetValues[category.id] = []
      } else if (category.type === 'slider' && category.min !== undefined) {
        resetValues[category.id] = category.min
      } else {
        resetValues[category.id] = ''
      }
    })
    
    setActiveFilters(resetValues)
    if (setSelectedTags) setSelectedTags([])
  }
  
  // Check if any filters are active
  const hasActiveFilters = () => {
    if (activeFilters.searchQuery) return true
    if (selectedTags.length > 0) return true
    
    for (const key in activeFilters) {
      if (key === 'searchQuery') continue
      
      if (Array.isArray(activeFilters[key]) && activeFilters[key].length > 0) return true
      if (!Array.isArray(activeFilters[key]) && activeFilters[key] !== '' && activeFilters[key] !== 0) return true
    }
    
    return false
  }
  
  return (
    <section className="py-6 border-t border-b border-gray-800">
      <div className="container">
        <div className="max-w-6xl mx-auto">
          {/* Search Bar */}
          <div className="relative flex items-center mb-6">
            <Search className="w-5 h-5 absolute text-gray-400 left-3" />
            <Input
              type="text"
              placeholder={searchPlaceholder}
              value={activeFilters.searchQuery || ''}
              onChange={handleSearchChange}
              className="bg-gray-900/90 border-gray-700 pl-10 text-white focus:ring-blue-500"
            />
            {activeFilters.searchQuery && (
              <button 
                className="absolute right-3 text-gray-400 hover:text-white"
                onClick={clearSearch}
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
          
          {/* Active Filters Display */}
          <div className="flex flex-wrap items-center gap-2 mb-4">
            {Object.entries(activeFilters).map(([key, value]) => {
              if (key === 'searchQuery' || !value || (Array.isArray(value) && value.length === 0)) {
                return null
              }
              
              const category = filterCategories.find(c => c.id === key)
              if (!category) return null
              
              if (Array.isArray(value)) {
                return value.map(optionId => {
                  const option = category.options?.find(o => o.id === optionId)
                  if (!option) return null
                  
                  return (
                    <Badge 
                      key={`${key}-${optionId}`}
                      className={`bg-${accentColor}-900/40 text-${accentColor}-300 gap-1 hover:bg-${accentColor}-900/60`}
                    >
                      {option.label}
                      <X 
                        className="w-3 h-3 cursor-pointer" 
                        onClick={() => handleCheckboxChange(key, optionId)} 
                      />
                    </Badge>
                  )
                })
              } else {
                // For radio buttons and sliders
                const option = category.options?.find(o => o.id === value)
                const displayValue = option ? option.label : (
                  category.type === 'slider' ? `${value}+` : value
                )
                
                return (
                  <Badge 
                    key={key}
                    className={`bg-${accentColor}-900/40 text-${accentColor}-300 gap-1 hover:bg-${accentColor}-900/60`}
                  >
                    {category.name}: {displayValue}
                    <X 
                      className="w-3 h-3 cursor-pointer" 
                      onClick={() => {
                        if (category.type === 'radio') {
                          handleRadioChange(key, '')
                        } else if (category.type === 'slider' && category.min !== undefined) {
                          handleSliderChange(key, [category.min])
                        }
                      }} 
                    />
                  </Badge>
                )
              }
            })}
            
            {selectedTags.map(tag => (
              <Badge 
                key={tag}
                className="bg-violet-900/40 text-violet-300 gap-1 hover:bg-violet-900/60"
              >
                #{tag}
                <X className="w-3 h-3 cursor-pointer" onClick={() => toggleTag(tag)} />
              </Badge>
            ))}
            
            {hasActiveFilters() && (
              <Button 
                onClick={resetFilters}
                className="h-7 bg-gray-800 text-xs text-gray-300 hover:bg-gray-700"
              >
                Clear all filters
              </Button>
            )}
          </div>
          
          {/* Advanced Filters Toggle */}
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center gap-2">
              <Button
                onClick={() => setShowFilters(!showFilters)}
                className="bg-gray-800 text-gray-300 hover:bg-gray-700 flex gap-2 items-center"
              >
                <SlidersHorizontal className="w-4 h-4" />
                {showFilters ? 'Hide Filters' : 'Show Advanced Filters'}
              </Button>
              
              {itemCount !== undefined && (
                <span className="text-gray-400 text-sm">
                  {itemCount} {itemCount === 1 ? 'item' : 'items'} found
                </span>
              )}
            </div>
          </div>
          
          {/* Advanced Filters Panel */}
          {showFilters && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 bg-gray-900/50 border border-gray-800 rounded-lg mb-8">
              {filterCategories.map(category => (
                <div key={category.id}>
                  <h3 className="text-white font-medium mb-3 flex items-center">
                    <category.icon className="w-4 h-4 mr-2" /> 
                    {category.name}
                  </h3>
                  
                  {category.type === 'checkbox' && category.options && (
                    <div className="space-y-2 max-h-40 overflow-y-auto pr-2">
                      {category.options.map(option => (
                        <div key={option.id} className="flex items-center">
                          <Checkbox
                            id={`${category.id}-${option.id}`}
                            checked={(activeFilters[category.id] || []).includes(option.id)}
                            onCheckedChange={() => handleCheckboxChange(category.id, option.id)}
                            className={`data-[state=checked]:bg-${accentColor}-600 data-[state=checked]:border-${accentColor}-600`}
                          />
                          <label
                            htmlFor={`${category.id}-${option.id}`}
                            className="ml-2 text-sm text-gray-300 cursor-pointer"
                          >
                            {option.label}
                          </label>
                        </div>
                      ))}
                    </div>
                  )}
                  
                  {category.type === 'radio' && category.options && (
                    <div className="space-y-2">
                      {category.options.map(option => (
                        <div key={option.id} className="flex items-center">
                          <input
                            type="radio"
                            id={`${category.id}-${option.id}`}
                            name={category.id}
                            checked={activeFilters[category.id] === option.id}
                            onChange={() => handleRadioChange(category.id, option.id)}
                            className={`text-${accentColor}-600 focus:ring-${accentColor}-500 h-4 w-4 border-gray-700 bg-gray-800`}
                          />
                          <label
                            htmlFor={`${category.id}-${option.id}`}
                            className="ml-2 text-sm text-gray-300 cursor-pointer"
                          >
                            {option.label}
                          </label>
                        </div>
                      ))}
                    </div>
                  )}
                  
                  {category.type === 'slider' && category.min !== undefined && category.max !== undefined && (
                    <div className="px-2">
                      <Slider
                        defaultValue={[activeFilters[category.id] || category.min]}
                        min={category.min}
                        max={category.max}
                        step={category.step || 1}
                        onValueChange={(value) => handleSliderChange(category.id, value)}
                      />
                      <div className="flex justify-between mt-2 text-xs text-gray-400">
                        <span>{category.min}</span>
                        <span>Current: {activeFilters[category.id] || category.min}</span>
                        <span>{category.max}</span>
                      </div>
                    </div>
                  )}
                </div>
              ))}
              
              {/* Tags Section - Optional */}
              {showTags && tags.length > 0 && (
                <div>
                  <h3 className="text-white font-medium mb-3 flex items-center">
                    <Tag className="w-4 h-4 mr-2" /> Popular Tags
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {tags.map(tag => (
                      <Badge
                        key={tag}
                        className={`cursor-pointer ${
                          selectedTags.includes(tag)
                            ? 'bg-violet-900/70 text-violet-200'
                            : 'bg-gray-800 text-gray-300 hover:bg-violet-900/30 hover:text-violet-300'
                        }`}
                        onClick={() => toggleTag(tag)}
                      >
                        {selectedTags.includes(tag) && <CheckCircle2 className="w-3 h-3 mr-1" />}
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default UniversalFilter 