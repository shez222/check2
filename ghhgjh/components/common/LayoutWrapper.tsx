"use client";

import { usePathname } from 'next/navigation';
import Footer from "@/components/common/Footer";

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <>
      <div className="flex flex-col items-center justify-start min-h-screen w-full bg-white py-4">
        <div className="w-[390px]">
          {children}
        </div>
      </div>
      {pathname === '/' && <Footer />}
    </>
  );
}