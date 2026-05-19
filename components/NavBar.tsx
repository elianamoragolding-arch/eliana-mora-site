'use client'

import { usePathname, useRouter } from 'next/navigation'
import Button from './ui/Button'

export default function NavBar() {
  const pathname = usePathname()
  const router = useRouter()

  function handleNav(id: string) {
    if (pathname === '/') {
      const el = document.getElementById(id)
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    } else {
      sessionStorage.setItem('scrollTo', id)
      router.push('/')
    }
  }

  const isHome = pathname === '/'

  const linkStyle = (active: boolean) => ({
    fontFamily: 'var(--font-sans)',
    fontSize: 14,
    color: active ? '#fff' : 'rgba(255,255,255,0.5)',
    textDecoration: 'none',
    cursor: 'pointer',
    background: 'none',
    border: 'none',
    padding: 0,
    transition: 'color 200ms cubic-bezier(.2,.6,.2,1)',
  } as const)

  return (
    <nav className="r-nav" style={{
      width: '100%',
      padding: '20px 32px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      background: 'transparent',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 40 }}>
        <button
          onClick={() => router.push('/')}
          style={{
            fontFamily: 'var(--font-mono)',
            fontWeight: 300,
            fontSize: 18,
            color: '#fff',
            textDecoration: 'none',
            cursor: 'pointer',
            letterSpacing: '-0.01em',
            background: 'none',
            border: 'none',
            padding: 0,
          }}
        >
          eliana mora
        </button>

        <div className="nav-links" style={{ display: 'flex', gap: 28 }}>
          <button onClick={() => handleNav('work')} style={linkStyle(isHome)}>
            work
          </button>
          <button onClick={() => handleNav('about')} style={linkStyle(false)}>
            about
          </button>
          <button onClick={() => handleNav('contact')} style={linkStyle(false)}>
            contact
          </button>
        </div>
      </div>

      <Button href="mailto:elianamoragolding@gmail.com">REACH OUT</Button>
    </nav>
  )
}
