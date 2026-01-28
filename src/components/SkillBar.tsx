import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

type SkillBarProps = {
  name: string
  level: number
  delay?: number
}

export default function SkillBar({ name, level, delay = 0 }: SkillBarProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })

  return (
    <div ref={ref}>
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm font-medium text-neutral-200">{name}</span>
        <span className="text-xs text-neutral-500">{level}%</span>
      </div>
      <div className="relative h-2 w-full overflow-hidden rounded-full bg-white/5">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : { width: 0 }}
          transition={{ 
            duration: 0.6,
            delay: Math.min(delay, 0.1),
            ease: 'easeOut',
          }}
          className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-neutral-400 to-neutral-200"
        />
      </div>
    </div>
  )
}
