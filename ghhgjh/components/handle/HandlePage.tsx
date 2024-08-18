// @/components/HandlePage.tsx
'use client';

import { Person } from '@/models/person';
import PersonDetails from '@/components/handle/PersonDetails';
import HowItWorks from '@/components/handle/HowItWorks';
import FAQs from '@/components/handle/FAQs';
import { Divider } from '@/components/common/Divider';
import Link from 'next/link';

export default function HandlePage({ person }: { person: Person | null }) {
  if (!person) {
    return <div>Person not found</div>;
  }

  return (
    <div>
      {person ? (
        <>
          <PersonDetails person={person} showOnProfile={true} />
          {person.details && (
            <p className="mt-4 text-gray-700 text-sm whitespace-pre-line">
              {person.details}
            </p>
          )}
          <Divider />
          <HowItWorks />
          <FAQs />
        </>
      ) : (
        <p>Loading...</p>
      )}
      <div className="sticky bottom-0 bg-white">
        <div className="max-w-[390px] mx-auto pb-4">
          <div className="w-full mt-4">
          <Link 
              href={`/${person.handle}/chat`}
              className="block w-full px-4 py-3 text-center rounded-lg bg-black text-white text-md"
            >
              Send {person.name} a message
            </Link>
            <div className="text-m font-semibold text-center">25 tokens per sent message</div>  
          </div>
        </div>
      </div>
    </div>
  );
}