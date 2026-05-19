import { CSSProperties, ReactNode } from 'react'

interface TagProps {
  children: ReactNode
  solid?: boolean
  style?: CSSProperties
}

export default function Tag({ children, solid = false, style }: TagProps) {
  return (
    <span style={{
      display: 'inline-block',
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      lineHeight: 1,
      fontWeight: 400,
      letterSpacing: '1px',
      textTransform: 'uppercase',
      color: '#fff',
      background: solid ? 'rgba(255,255,255,0.08)' : 'transparent',
      border: solid ? '1px solid transparent' : '1px solid rgba(255,255,255,0.2)',
      borderRadius: 0,
      padding: '6px 10px',
      ...style,
    }}>
      {children}
    </span>
  )
}
