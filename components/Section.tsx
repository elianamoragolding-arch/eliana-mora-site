import { CSSProperties, ReactNode } from 'react'
import Bracket from './ui/Bracket'

interface SectionProps {
  tag?: string
  id?: string
  children: ReactNode
  style?: CSSProperties
}

export default function Section({ tag, id, children, style }: SectionProps) {
  return (
    <section id={id} style={{ padding: '72px 32px', maxWidth: 1400, margin: '0 auto', scrollMarginTop: 80, ...style }}>
      {tag && (
        <div style={{ marginBottom: 32 }}>
          <Bracket>{tag}</Bracket>
        </div>
      )}
      {children}
    </section>
  )
}
