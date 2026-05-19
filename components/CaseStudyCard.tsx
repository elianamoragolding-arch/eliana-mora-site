'use client'

import { useRouter } from 'next/navigation'
import Card from './ui/Card'
import Bracket from './ui/Bracket'
import Tag from './ui/Tag'
import { ArrowUpRight } from './ui/Icons'
import { CaseStudy } from '@/lib/data'

interface CaseStudyCardProps {
  cs: CaseStudy
}

export default function CaseStudyCard({ cs }: CaseStudyCardProps) {
  const router = useRouter()

  return (
    <Card onClick={() => router.push(`/work/${cs.id}`)} padding={28}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
        <Bracket>{cs.year} — {cs.client}</Bracket>
        <span style={{ color: 'rgba(255,255,255,0.3)' }}>
          <ArrowUpRight size={16} />
        </span>
      </div>

      <div style={{ fontFamily: 'var(--font-sans)', fontSize: 22, lineHeight: 1.3, color: '#fff' }}>
        {cs.title}
      </div>

      <p style={{
        margin: '12px 0 18px',
        fontFamily: 'var(--font-sans)',
        fontSize: 14,
        lineHeight: 1.55,
        color: 'rgba(255,255,255,0.7)',
      }}>
        {cs.blurb}
      </p>

      <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
        {cs.metrics.map((m, i) => <Tag key={i}>{m}</Tag>)}
      </div>
    </Card>
  )
}
