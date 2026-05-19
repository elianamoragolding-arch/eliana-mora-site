import { CSSProperties, ReactNode } from 'react'

interface BracketProps {
  children: ReactNode
  style?: CSSProperties
}

export default function Bracket({ children, style }: BracketProps) {
  return (
    <span style={{
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      letterSpacing: '1px',
      textTransform: 'uppercase',
      color: 'rgba(255,255,255,0.7)',
      ...style,
    }}>
      [ {children} ]
    </span>
  )
}
