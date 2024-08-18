"use client";
import React, { useEffect, useState } from 'react';
import { ChevronLeftIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';

const Header: React.FC = () => {
  const router = useRouter()
  const pathname = usePathname();
  const [showBackButton, setShowBackButton] = useState(false);
  const [showBuyLink, setShowBuyLink] = useState(true);

  useEffect(() => {
    setShowBackButton(window.history.length > 2 && pathname !== '/');
    setShowBuyLink(pathname !== '/buy');
  }, [pathname]);

  const handleNavigation = () => {
    if (window.history.length > 2) {
      router.back();
    } else {
      router.push('/');
    }
  };

  return (
    <div>
      <div className="h-full flex justify-between items-center bg-white">
        <div className="flex items-center gap-1">
          {showBackButton && (
            <ChevronLeftIcon
              className="w-6 h-6 text-black cursor-pointer"
              onClick={handleNavigation}
            />
          )}
          <div className="text-black text-lg font-bold font-sans">
            <Link href="/">[ Outpost ]</Link>
          </div>
        </div>
        {showBuyLink && (
          <Link href="/buy" className="inline-block bg-black text-white rounded-full text-md font-bold px-4 py-1.5">
            Buy coins
          </Link>
        )}
        {/* <CoinDisplay/> */}
        {/* <NavButtons /> */}
      </div>
    </div>
  );
};

export default Header;