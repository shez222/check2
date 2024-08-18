"use client";

import React from 'react';
import BuyCoins from '@/components/buy/BuyCoins';

export default function Buy() {
  return (
    <div className="flex flex-col items-center justify-start min-h-screen w-full p-4">
      <div className="w-[390px]">
        <h1 className="pt-4 text-xl font-bold mb-6">Buy Coins</h1>
        <BuyCoins />
      </div>
    </div>
  );
}