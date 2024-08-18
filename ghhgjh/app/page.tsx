// /app/page.tsx
import { Metadata } from 'next'
import HomeClient from '@/components/home/HomeClient'
import { initialCompanies } from '../constants/companies'
import { people } from '@/constants/people'
import { calculateCompanyCounts } from '@/utils/calculations'
import { globals } from '@/constants/globals';

export const metadata: Metadata = {
  title: globals.appName,
  description: globals.tagline,
  openGraph: {
    title: globals.appName,
    description: globals.tagline,
    images: ['/api/og'],
  },
  twitter: {
    card: 'summary_large_image',
    title: globals.appName,
    description: globals.tagline,
    images: ['/api/og'],
  },
}

export default function Home() {
  const companyCounts = calculateCompanyCounts(people)
  const companies = initialCompanies.map(company => ({
    ...company,
    count: companyCounts[company.name] || 0
  }))

  return <HomeClient initialCompanies={companies} initialPeople={people} />
}