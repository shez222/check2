// /app/[handle]/page.tsx
import HandlePage from '@/components/handle/HandlePage';
import { people } from '@/constants/people';
import { Metadata } from 'next'


type Props = {
  params: { handle: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const person = people.find(p => p.handle.toLowerCase() === params.handle.toLowerCase());
  if (!person) {
    return { title: '[ Outpost ]' }
  }

  return {
    title: `Book with ${person.name} | Outpost`,
    description: `Book with professionals like ${person.name}`,
    openGraph: {
      title: `Book with ${person.name}`,
      description: `Book with professionals like ${person.name}`,
      images: [{
        url: `${person.image}`,
        width: 167,
        height: 215,
      }],
    },
    twitter: {
      card: 'summary_large_image',
      title: `Book with ${person.name}`,
      description: `Book with professionals like ${person.name}`,
      images: `${person.image}`,
    },
  }
}


export default function Learn({ params }: { params: { handle: string } }) {
  const person = people.find(p => p.handle.toLowerCase() === params.handle.toLowerCase()) || null;
  return <HandlePage person={person} />;
}