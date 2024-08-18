'use client'
import React from 'react';
import { UserIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { UserAuth } from '@/context/AuthContext';

const NavButtons: React.FC = () => {
  const { user, loading } = UserAuth();
  
  console.log("NavButtons rendering", { user, loading });

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="h-[32px] justify-end items-center gap-2 flex col-span-3">
        <ul className="flex">
          {user ? (
            <li>
              <Link href="/profile">
                <UserIcon className="text-black w-5 h-5" />
              </Link>
            </li>
          ) : (
            <li>
              <Link href="/login" className="inline-block bg-black text-white rounded-full text-md font-bold px-4 py-1.5">
                Login
              </Link>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default NavButtons;