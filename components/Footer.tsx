export default function Footer() {
  return (
    <footer style={{
      borderTop: '1px solid rgba(255,255,255,0.1)',
      padding: '32px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexWrap: 'wrap',
      gap: 16,
      maxWidth: 1400,
      margin: '0 auto',
    }}>
      <div style={{
        fontFamily: 'var(--font-mono)',
        fontSize: 12,
        letterSpacing: '1px',
        textTransform: 'uppercase',
        color: 'rgba(255,255,255,0.5)',
      }}>
        made in miami · caracas-born · still shipping.
      </div>
      <div style={{
        fontFamily: 'var(--font-mono)',
        fontSize: 12,
        letterSpacing: '1px',
        textTransform: 'uppercase',
        color: 'rgba(255,255,255,0.3)',
      }}>
        © 2026 eliana mora · [ EM ]
      </div>
    </footer>
  )
}
