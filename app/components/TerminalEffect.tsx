"use client"

import { useState, useEffect } from "react"

interface TerminalEffectProps {
  commands: string[]
  typingSpeed?: number
  initialDelay?: number
  commandDelay?: number
}

const TerminalEffect = ({
  commands,
  typingSpeed = 50,
  initialDelay = 500,
  commandDelay = 700,
}: TerminalEffectProps) => {
  const [displayedCommands, setDisplayedCommands] = useState<string[]>([])
  const [currentCommandIndex, setCurrentCommandIndex] = useState(0)
  const [currentText, setCurrentText] = useState("")
  const [isTyping, setIsTyping] = useState(false)

  useEffect(() => {
    if (currentCommandIndex >= commands.length) return

    const startTyping = () => {
      setIsTyping(true)
      const command = commands[currentCommandIndex]
      let charIndex = 0

      const typeChar = () => {
        if (charIndex < command.length) {
          setCurrentText(command.substring(0, charIndex + 1))
          charIndex++
          setTimeout(typeChar, typingSpeed)
        } else {
          setIsTyping(false)
          setDisplayedCommands([...displayedCommands, command])
          setCurrentText("")
          setTimeout(() => {
            setCurrentCommandIndex(currentCommandIndex + 1)
          }, commandDelay)
        }
      }

      setTimeout(typeChar, initialDelay)
    }

    if (!isTyping) {
      startTyping()
    }
  }, [currentCommandIndex, isTyping, commands, displayedCommands, typingSpeed, initialDelay, commandDelay])

  return (
    <div className="font-mono text-sm bg-black p-4 rounded-md overflow-hidden">
      {displayedCommands.map((cmd, index) => (
        <div key={index} className="text-green-500 mb-1">
          {cmd}
        </div>
      ))}
      {currentText && <div className="text-green-500">{currentText}</div>}
    </div>
  )
}

export default TerminalEffect

