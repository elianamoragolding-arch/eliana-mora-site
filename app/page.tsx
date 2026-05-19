'use client'

import { useEffect } from 'react'
import NavBar from '@/components/NavBar'
import Hero from '@/components/Hero'
import MetricGrid from '@/components/MetricGrid'
import Section from '@/components/Section'
import ExperienceList from '@/components/ExperienceList'
import CaseStudyCard from '@/components/CaseStudyCard'
import ContactBlock from '@/components/ContactBlock'
import Footer from '@/components/Footer'
import Bracket from '@/components/ui/Bracket'
import Tag from '@/components/ui/Tag'
import { METRICS, CASE_STUDIES, STACK_TAGS, CERT_TAGS } from '@/lib/data'

export default function HomePage() {
  // Handle scroll-to after navigating from a case study page
  useEffect(() => {
    const target = sessionStorage.getItem('scrollTo')
    if (target) {
      sessionStorage.removeItem('scrollTo')
      setTimeout(() => {
        document.getElementById(target)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }, 100)
    }
  }, [])

  function scrollToWork() {
    document.getElementById('work')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <div style={{ minHeight: '100vh', background: '#1f2228' }}>
      <NavBar />

      <Hero onScrollToWork={scrollToWork} />

      <div style={{ maxWidth: 1400, margin: '0 auto', padding: '0 32px' }}>
        <MetricGrid items={[...METRICS]} />
      </div>

      <Section id="work" tag="selected campaigns · 2022 — 2026">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: 16,
        }}>
          {CASE_STUDIES.map((cs) => (
            <CaseStudyCard key={cs.id} cs={cs} />
          ))}
        </div>
      </Section>

      <Section id="about" tag="experience">
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 64,
          marginBottom: 48,
        }}>
          <h2 style={{
            fontFamily: 'var(--font-mono)',
            fontWeight: 300,
            fontSize: 'clamp(40px, 6vw, 88px)',
            lineHeight: 1.0,
            letterSpacing: '-0.02em',
            margin: 0,
          }}>
            Twelve Years.<br />Five Orgs.<br />Still Going.
          </h2>
          <p style={{
            margin: 0,
            fontFamily: 'var(--font-sans)',
            fontSize: 17,
            lineHeight: 1.6,
            color: 'rgba(255,255,255,0.7)',
            alignSelf: 'end',
          }}>
            Started at Google, learned what shipping at scale actually means. Spent two years at
            Ogilvy understanding the agency side. Five years at Twitter / X / xAI translating
            that into custom tech for some of the biggest brands in the americas. Bilingual the
            whole way through.
          </p>
        </div>

        <ExperienceList />

        <div style={{ marginTop: 48, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32 }}>
          <div>
            <Bracket style={{ color: 'rgba(255,255,255,0.5)' }}>stack</Bracket>
            <div style={{ marginTop: 16, display: 'flex', flexWrap: 'wrap', gap: 6 }}>
              {STACK_TAGS.map((s) => <Tag key={s}>{s}</Tag>)}
            </div>
          </div>
          <div>
            <Bracket style={{ color: 'rgba(255,255,255,0.5)' }}>certifications · languages</Bracket>
            <div style={{ marginTop: 16, display: 'flex', flexWrap: 'wrap', gap: 6 }}>
              {CERT_TAGS.map((t) => <Tag key={t.label} solid={t.solid}>{t.label}</Tag>)}
            </div>
            <div style={{
              marginTop: 24,
              fontFamily: 'var(--font-sans)',
              fontSize: 14,
              color: 'rgba(255,255,255,0.5)',
              lineHeight: 1.55,
            }}>
              Andres Bello Catholic University · Caracas, VE<br />
              B.A. Communication &amp; Media Studies · 2009–2014
            </div>
          </div>
        </div>
      </Section>

      <div id="contact" style={{ scrollMarginTop: 80 }} />
      <ContactBlock />

      <Footer />
    </div>
  )
}
