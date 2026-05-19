'use client'

import Bracket from './ui/Bracket'
import Button from './ui/Button'
import { ArrowUpRight } from './ui/Icons'

export default function ContactBlock() {
  return (
    <section style={{ padding: '120px 32px 80px', maxWidth: 1200, margin: '0 auto' }}>
      <div style={{ marginBottom: 24 }}>
        <Bracket>contact</Bracket>
      </div>

      <h2 style={{
        fontFamily: 'var(--font-mono)',
        fontWeight: 300,
        fontSize: 'clamp(40px, 7vw, 112px)',
        lineHeight: 1.0,
        letterSpacing: '-0.02em',
        margin: 0,
      }}>
        Let&apos;s Ship<br />Something.
      </h2>

      <div style={{
        marginTop: 40,
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 48,
        maxWidth: 900,
      }}>
        <div>
          <Bracket style={{ color: 'rgba(255,255,255,0.5)' }}>email</Bracket>
          <a
            href="mailto:elianamoragolding@gmail.com"
            style={{
              display: 'block',
              marginTop: 12,
              fontFamily: 'var(--font-mono)',
              fontSize: 18,
              color: '#fff',
              textDecoration: 'none',
              transition: 'color 200ms cubic-bezier(.2,.6,.2,1)',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.5)')}
            onMouseLeave={(e) => (e.currentTarget.style.color = '#fff')}
          >
            elianamoragolding@gmail.com
          </a>
        </div>

        <div>
          <Bracket style={{ color: 'rgba(255,255,255,0.5)' }}>linkedin</Bracket>
          <a
            href="https://linkedin.com/in/elianamora7"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 6,
              marginTop: 12,
              fontFamily: 'var(--font-mono)',
              fontSize: 18,
              color: '#fff',
              textDecoration: 'none',
              transition: 'color 200ms cubic-bezier(.2,.6,.2,1)',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.5)')}
            onMouseLeave={(e) => (e.currentTarget.style.color = '#fff')}
          >
            linkedin.com/in/elianamora7 <ArrowUpRight size={14} />
          </a>
        </div>

        <div>
          <Bracket style={{ color: 'rgba(255,255,255,0.5)' }}>phone</Bracket>
          <div style={{ marginTop: 12, fontFamily: 'var(--font-mono)', fontSize: 18, color: '#fff' }}>
            +1 (786) 449-9644
          </div>
        </div>

        <div>
          <Bracket style={{ color: 'rgba(255,255,255,0.5)' }}>availability</Bracket>
          <div style={{ marginTop: 12, fontFamily: 'var(--font-mono)', fontSize: 18, color: '#fff' }}>
            open to senior pm / mktg ops roles
          </div>
        </div>
      </div>

      <div style={{ marginTop: 56, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
        <Button href="mailto:elianamoragolding@gmail.com">EMAIL ELIANA</Button>
        <Button variant="ghost" href="/resume.pdf" style={{}}>DOWNLOAD RESUME</Button>
      </div>
    </section>
  )
}
