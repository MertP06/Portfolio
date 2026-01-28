import { useState, useEffect } from 'react'

type TypingTextProps = {
  texts: string[]
  className?: string
  speed?: number
  pauseTime?: number
}

export default function TypingText({
  texts,
  className = '',
  speed = 80,
  pauseTime = 2500,
}: TypingTextProps) {
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const [currentText, setCurrentText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const fullText = texts[currentTextIndex]

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (currentText.length < fullText.length) {
            setCurrentText(fullText.slice(0, currentText.length + 1))
          } else {
            setTimeout(() => setIsDeleting(true), pauseTime)
          }
        } else {
          if (currentText.length > 0) {
            setCurrentText(currentText.slice(0, -1))
          } else {
            setIsDeleting(false)
            setCurrentTextIndex((prev) => (prev + 1) % texts.length)
          }
        }
      },
      isDeleting ? 40 : speed
    )

    return () => clearTimeout(timeout)
  }, [currentText, isDeleting, currentTextIndex, texts, speed, pauseTime])

  return (
    <span className={className}>
      {currentText}
      <span className="inline-block w-[2px] h-[1em] bg-current ml-1 animate-pulse" />
    </span>
  )
}
