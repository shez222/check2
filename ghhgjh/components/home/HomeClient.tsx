// /app/HomeClient.tsx
"use client";
import React, { useState } from 'react';
import CompanyFilter from '@/components/home/CompanyFilter';
import PeopleCard from '@/components/common/PeopleCard';
import { Company } from '@/models/company';
import { Person } from '@/models/person';
import { globals } from '@/constants/globals';

interface HomeClientProps {
  initialCompanies: Company[];
  initialPeople: Person[];
}

export default function HomeClient({ initialCompanies, initialPeople }: HomeClientProps) {
  const [filteredCompany, setFilteredCompany] = useState<string | null>(null);
  const [companies] = useState<Company[]>(initialCompanies);
  
  const handleFilterSelect = (companyName: string) => {
    setFilteredCompany((prev) => (prev === companyName ? null : companyName));
  };
  
  const filteredPeople = filteredCompany
  ? initialPeople.filter((person) => person.company === filteredCompany)
  : initialPeople;
  
  return (
    <div className="flex flex-col items-center justify-start min-h-screen w-full bg-white pt-4">
      <div className="w-[390px]">
          <div className="pb-4 text-neutral-500 text-lg font-medium font-sans">
            <div>{globals.tagline}</div>
          </div>
        <CompanyFilter
          companies={companies}
          selectedCompany={filteredCompany}
          onFilterSelect={handleFilterSelect}
        />
        <PeopleCard people={filteredPeople} />
      </div>
    </div>
  );
}