'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'
import Bracket from './ui/Bracket'
import Button from './ui/Button'
import Divider from './ui/Divider'
import MetricGrid from './MetricGrid'
import { ArrowLeft } from './ui/Icons'
import { CASE_STUDIES, CASE_STUDY_DETAIL } from '@/lib/data'

interface CaseStudyViewProps {
  id: string
}

export default function CaseStudyView({ id }: CaseStudyViewProps) {
  const router = useRouter()
  const cs = CASE_STUDY_DETAIL[id]
  const meta = CASE_STUDIES.find((c) => c.id === id)

  if (!cs || !meta) return null

  function goBack() {
    sessionStorage.setItem('scrollTo', 'work')
    router.push('/')
  }

  return (
    <article style={{ padding: '32px 32px 96px', maxWidth: 1200, margin: '0 auto' }}>
      <button
        onClick={goBack}
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: 10,
          fontFamily: 'var(--font-mono)',
          fontSize: 12,
          letterSpacing: '1px',
          textTransform: 'uppercase',
          color: 'rgba(255,255,255,0.7)',
          background: 'none',
          border: 'none',
          padding: 0,
          cursor: 'pointer',
          marginBottom: 48,
          transition: 'color 200ms cubic-bezier(.2,.6,.2,1)',
        }}
        onMouseEnter={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.5)')}
        onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.7)')}
      >
        <ArrowLeft size={14} /> back
      </button>

      <div style={{ marginBottom: 16 }}>
        <Bracket>{meta.year} — {meta.client}</Bracket>
      </div>

      <h1 style={{
        fontFamily: 'var(--font-mono)',
        fontWeight: 300,
        fontSize: 'clamp(40px, 7vw, 96px)',
        lineHeight: 1.0,
        letterSpacing: '-0.02em',
        margin: 0,
        whiteSpace: 'pre-line',
      }}>
        {cs.title}
      </h1>

      <p style={{
        marginTop: 32,
        maxWidth: 720,
        fontFamily: 'var(--font-sans)',
        fontSize: 18,
        lineHeight: 1.55,
        color: 'rgba(255,255,255,0.7)',
      }}>
        {cs.intro}
      </p>

      {meta.image && (
        <div style={{
          position: 'relative',
          width: '100%',
          aspectRatio: '16/9',
          marginTop: 48,
          borderRadius: 4,
          overflow: 'hidden',
          border: '1px solid rgba(255,255,255,0.08)',
        }}>
          <Image
            src={meta.image}
            alt={cs.title}
            fill
            style={{ objectFit: 'cover' }}
            sizes="(max-width: 768px) 100vw, 1200px"
            priority
          />
        </div>
      )}

      <div style={{ marginTop: 48 }}>
        <MetricGrid items={cs.metrics} />
      </div>

      <div style={{ marginTop: 48, display: 'grid', gridTemplateColumns: 'minmax(0, 720px)', gap: 40 }}>
        {cs.sections.map((s, i) => (
          <div key={i}>
            <div style={{ marginBottom: 14 }}>
              <Bracket>{s.tag}</Bracket>
            </div>
            <p style={{
              margin: 0,
              fontFamily: 'var(--font-sans)',
              fontSize: 17,
              lineHeight: 1.6,
              color: '#fff',
            }}>
              {s.body}
            </p>
          </div>
        ))}
      </div>

      <Divider style={{ margin: '64px 0' }} />

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16 }}>
        <Bracket>my role · program lead, end-to-end</Bracket>
        <div style={{ display: 'flex', gap: 12 }}>
          <Button variant="ghost" onClick={goBack}>← BACK TO WORK</Button>
          <Button href="mailto:elianamoragolding@gmail.com">WORK WITH ME</Button>
        </div>
      </div>
    </article>
  )
}
