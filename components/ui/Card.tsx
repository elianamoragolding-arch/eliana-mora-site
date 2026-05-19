'use client'

import { CSSProperties, ReactNode, useState } from 'react'

interface CardProps {
  children: ReactNode
  padding?: number
  style?: CSSProperties
  onClick?: () => void
}

export default function Card({ children, padding = 24, style, onClick }: CardProps) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={onClick}
      style={{
        background: 'rgba(255,255,255,0.03)',
        border: `1px solid ${hovered ? 'rgba(255,255,255,0.2)' : 'rgba(255,255,255,0.1)'}`,
        borderRadius: 0,
        padding,
        cursor: onClick ? 'pointer' : 'default',
        transition: 'border-color 200ms cubic-bezier(.2,.6,.2,1)',
        ...style,
      }}
    >
      {children}
    </div>
  )
}
