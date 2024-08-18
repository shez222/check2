// /components/PeopleCard.tsx

"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { StarIcon } from '@heroicons/react/24/solid';
import { Person } from '@/models/person';

type PeopleCardProps = {
  people: Person[];
};

const PeopleCard: React.FC<PeopleCardProps> = ({ people }) => {
  return (
    <div className="grid grid-cols-2 gap-4 justify-center">
      {people.map((person) => (
        <div key={person.name} className="flex flex-col items-start pb-4">
          <Link href={`/${person.handle}`}>
            <Image
              src={person.image}
              alt={person.name}
              width={167}
              height={215}
              className="object-cover rounded-xl"
            />
            
            <div className="mt-2 text-left">
              <div className="flex items-center text-black text-sm">
              <StarIcon className="w-4 h-4" />
              <span className="ml-1">{person.rating.toFixed(1)} ({person.reviews})</span>
              <span className="ml-2 font-semibold">{person.company}</span>
              </div>
              <div className="text-black text-sm">{person.position}</div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default PeopleCard;