"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

interface SliderProps {
  min?: number
  max?: number
  step?: number
  value?: number[]
  defaultValue?: number[]
  onValueChange?: (value: number[]) => void
  className?: string
  id?: string
  name?: string
  disabled?: boolean
}

const Slider = React.forwardRef<HTMLInputElement, SliderProps>(
  ({ className, min = 0, max = 100, step = 1, defaultValue, value, onValueChange, disabled, ...props }, ref) => {
    const [internalValue, setInternalValue] = React.useState<number>(
      defaultValue ? defaultValue[0] : min
    )
    
    const actualValue = value ? value[0] : internalValue
    const percentage = ((actualValue - min) / (max - min)) * 100
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = Number(e.target.value)
      setInternalValue(newValue)
      if (onValueChange) {
        onValueChange([newValue])
      }
    }
    
    return (
      <div className={cn("relative flex w-full touch-none select-none items-center", className)}>
        <div className="relative h-1.5 w-full grow overflow-hidden rounded-full bg-gray-800">
          <div
            className="absolute h-full bg-blue-600" 
            style={{ width: `${percentage}%` }}
          />
        </div>
        <input
          type="range"
          ref={ref}
          min={min}
          max={max}
          step={step}
          value={actualValue}
          onChange={handleChange}
          disabled={disabled}
          className="absolute inset-0 h-full w-full cursor-pointer opacity-0"
          {...props}
        />
        <div
          className={cn(
            "pointer-events-none absolute h-4 w-4 rounded-full border border-gray-700 bg-gray-900 shadow",
            disabled && "opacity-50"
          )}
          style={{ left: `calc(${percentage}% - 8px)` }}
        />
      </div>
    )
  }
)

Slider.displayName = "Slider"

export { Slider } 