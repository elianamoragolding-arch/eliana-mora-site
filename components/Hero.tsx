'use client'

import Bracket from './ui/Bracket'
import Button from './ui/Button'

interface HeroProps {
  onScrollToWork: () => void
}

export default function Hero({ onScrollToWork }: HeroProps) {
  return (
    <section className="r-hero" style={{ padding: '80px 32px 96px', maxWidth: 1400, margin: '0 auto' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 32 }}>
        <Bracket>senior pm · marketing ops · ai-forward delivery</Bracket>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'rgba(255,255,255,0.3)' }}>·</span>
        <Bracket>en / es</Bracket>
      </div>

      <h1 style={{
        fontFamily: 'var(--font-mono)',
        fontWeight: 300,
        fontSize: 'clamp(56px, 13vw, 220px)',
        lineHeight: 0.95,
        letterSpacing: '-0.025em',
        margin: 0,
      }}>
        Delivery with<br />Creativity.
      </h1>

      <div style={{ marginTop: 40, maxWidth: 640, display: 'flex', flexDirection: 'column', gap: 24 }}>
        <p style={{
          fontFamily: 'var(--font-sans)',
          fontSize: 18,
          lineHeight: 1.55,
          color: 'rgba(255,255,255,0.7)',
          margin: 0,
        }}>
          12 years getting things across the line. The last 5 of those at{' '}
          <span style={{ color: '#fff' }}>X / xAI</span>, running custom tech production for the
          internal Lab — which is a fancy way of saying I made sure 193 projects across 4
          continents arrived on time, under budget, and with the right vendor signed.
        </p>

        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          <Button onClick={onScrollToWork}>VIEW WORK</Button>
          <Button variant="ghost" href="mailto:elianamoragolding@gmail.com">REACH OUT</Button>
        </div>
      </div>
    </section>
  )
}
