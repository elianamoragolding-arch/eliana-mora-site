import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import CaseStudyView from '@/components/CaseStudyView'
import { CASE_STUDIES, CASE_STUDY_DETAIL } from '@/lib/data'

interface PageProps {
  params: Promise<{ id: string }>
}

export async function generateStaticParams() {
  return CASE_STUDIES.map((cs) => ({ id: cs.id }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params
  const cs = CASE_STUDIES.find((c) => c.id === id)
  if (!cs) return {}
  return {
    title: `${cs.title} — eliana mora`,
    description: cs.blurb,
  }
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { id } = await params
  const cs = CASE_STUDY_DETAIL[id]
  if (!cs) notFound()

  return (
    <div style={{ minHeight: '100vh', background: '#1f2228' }}>
      <NavBar />
      <CaseStudyView id={id} />
      <Footer />
    </div>
  )
}
