import { EXPERIENCE } from '@/lib/data'

export default function ExperienceList() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      {EXPERIENCE.map((row, i) => (
        <div
          key={i}
          style={{
            display: 'grid',
            gridTemplateColumns: '200px 1fr',
            gap: 32,
            padding: '32px 0',
            borderTop: '1px solid rgba(255,255,255,0.1)',
          }}
        >
          <div>
            <div style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 12,
              letterSpacing: '1px',
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.5)',
            }}>
              {row.period}
            </div>
            <div style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 16,
              color: '#fff',
              marginTop: 8,
            }}>
              {row.company}
            </div>
          </div>

          <div>
            <div style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 22,
              color: '#fff',
              lineHeight: 1.25,
            }}>
              {row.role}
            </div>
            {row.sub && (
              <div style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 14,
                color: 'rgba(255,255,255,0.5)',
                marginTop: 4,
              }}>
                {row.sub}
              </div>
            )}
            <ul style={{ margin: '16px 0 0', padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
              {row.bullets.map((b, j) => (
                <li
                  key={j}
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: 15,
                    lineHeight: 1.55,
                    color: 'rgba(255,255,255,0.7)',
                    paddingLeft: 18,
                    position: 'relative',
                  }}
                >
                  <span style={{
                    position: 'absolute',
                    left: 0,
                    top: 0,
                    fontFamily: 'var(--font-mono)',
                    color: 'rgba(255,255,255,0.3)',
                  }}>
                    —
                  </span>
                  {b}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }} />
    </div>
  )
}
