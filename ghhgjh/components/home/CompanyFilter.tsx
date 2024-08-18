// /components/CompanyFilter.tsx

"use client";

import React from 'react';
import { Company } from '@/models/company';

type CompanyFilterProps = {
  companies: Company[];
  selectedCompany: string | null;
  onFilterSelect: (companyName: string) => void;
};

const CompanyFilter: React.FC<CompanyFilterProps> = ({ companies, selectedCompany, onFilterSelect }) => {
  return (
    <div className="flex flex-wrap gap-4 pb-6">
      {companies.map((company) => (
        <div
          key={company.name}
          className={`flex items-center bg-gray-200 rounded-md p-2 gap-2 cursor-pointer ${selectedCompany === company.name ? 'bg-gray-400' : ''}`}
          onClick={() => onFilterSelect(company.name)}
        >
          <span className="text-1xl">{company.emoji}</span>
          <span className="text-black font-semibold">{company.name}</span>
          {company.count !== undefined && (
            <span className="text-gray-500">({company.count})</span>
          )}
        </div>
      ))}
    </div>
  );
};

export default CompanyFilter;
