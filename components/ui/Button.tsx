'use client'

import { CSSProperties, ReactNode } from 'react'

interface ButtonProps {
  variant?: 'primary' | 'ghost'
  children: ReactNode
  onClick?: () => void
  href?: string
  style?: CSSProperties
  type?: 'button' | 'submit'
}

const base: CSSProperties = {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 8,
  fontFamily: 'var(--font-mono)',
  fontSize: 14,
  fontWeight: 400,
  lineHeight: 1.43,
  letterSpacing: '1.4px',
  textTransform: 'uppercase',
  padding: '12px 24px',
  borderRadius: 0,
  border: '1px solid transparent',
  cursor: 'pointer',
  textDecoration: 'none',
  transition: 'background 200ms cubic-bezier(.2,.6,.2,1), border-color 200ms, color 200ms, opacity 200ms',
}

const variants = {
  primary: { background: '#fff', color: '#1f2228', borderColor: '#fff' },
  ghost:   { background: 'transparent', color: '#fff', borderColor: 'rgba(255,255,255,0.2)' },
} satisfies Record<string, CSSProperties>

export default function Button({ variant = 'primary', children, onClick, href, style, type = 'button' }: ButtonProps) {
  const combined = { ...base, ...variants[variant], ...style }

  if (href) {
    return (
      <a href={href} style={combined}>
        {children}
      </a>
    )
  }

  return (
    <button type={type} onClick={onClick} style={combined}>
      {children}
    </button>
  )
}
