interface MetricItem {
  value: string
  label: string
}

interface MetricGridProps {
  items: MetricItem[]
}

export default function MetricGrid({ items }: MetricGridProps) {
  return (
    <div
      className="r-metrics"
      style={{
        display: 'grid',
        gridTemplateColumns: `repeat(${items.length}, 1fr)`,
        borderTop: '1px solid rgba(255,255,255,0.1)',
        borderBottom: '1px solid rgba(255,255,255,0.1)',
      }}
    >
      {items.map((m, i) => (
        <div
          key={i}
          className="metric-item"
          style={{
            padding: '32px 28px',
            borderRight: i < items.length - 1 ? '1px solid rgba(255,255,255,0.1)' : 'none',
          }}
        >
          <div style={{
            fontFamily: 'var(--font-mono)',
            fontWeight: 300,
            fontSize: 'clamp(28px, 4vw, 56px)',
            lineHeight: 1.05,
            letterSpacing: '-0.02em',
            color: '#fff',
          }}>
            {m.value}
          </div>
          <div style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 11,
            letterSpacing: '1px',
            textTransform: 'uppercase',
            color: 'rgba(255,255,255,0.5)',
            marginTop: 10,
          }}>
            {m.label}
          </div>
        </div>
      ))}
    </div>
  )
}
