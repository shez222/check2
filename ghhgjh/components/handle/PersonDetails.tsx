// components/PersonDetails.js

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { StarIcon } from '@heroicons/react/24/solid';
import { Person } from '@/models/person'

interface PersonDetailsProps {
    person: Person;
    showOnProfile?: boolean;
}

const PersonDetails: React.FC<PersonDetailsProps> = ({ person, showOnProfile = false }) => {
    const stars = Math.round(person.rating);

    const content = (
        <>
            <Image
                src={person.image}
                alt={person.name}
                width={showOnProfile ? 167 : 84}
                height={showOnProfile ? 215 : 108}
                className="object-cover rounded-xl"
            />

            <div className="mt-2 text-left">
                {showOnProfile && <div className="text-lg font-semibold">{person.name}</div>}
                <div className="flex items-center text-black text-sm">
                    {showOnProfile ? (
                        <>
                            {Array.from({ length: stars }, (_, index) => (
                                <StarIcon key={index} className="w-4 h-4" />
                            ))}
                        </>
                    ) : (
                        <>
                            <StarIcon className="w-4 h-4" />
                        </>
                    )}
                    <span className="ml-1">{person.rating.toFixed(1)} ({person.reviews})</span>
                    {showOnProfile && <span className="ml-2 font-semibold">{person.company}</span>}
                </div>
                <div className={`text-black text-sm ${showOnProfile ? '' : 'max-w-[115px]'}`}
                >{person.position}</div>
            </div>
        </>
    );

    return (
        <div className="flex flex-col items-start">
            {showOnProfile ? (
                <div>{content}</div>
            ) : (
                <Link href={`/${person.handle}`}>
                    {content}
                </Link>
            )}
        </div>
    );
};

export default PersonDetails;
