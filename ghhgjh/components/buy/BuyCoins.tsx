"use client";

import React from 'react';
import { pricing } from '@/constants/pricing';
import { handlePayment } from '@/utils/handlePayment';

const BuyCoins: React.FC = () => {
  return (
    <div>
      {pricing.map((option) => (
        <div
          key={option.amount}
          className="flex justify-between items-center bg-gray-100 rounded-xl p-4 mb-4 cursor-pointer"
          onClick={() => handlePayment(option.paymentLink)}
        >
          <div className="flex items-center">
            <span className="text-2xl mr-4">💰</span>
            <span className="font-semibold">{option.amount} coins</span>
          </div>
          <div className="inline-block bg-black text-white rounded-lg px-4 py-2 text-sm font-medium">
            {option.price}
          </div>
        </div>
      ))}
    </div>
  );
};

export default BuyCoins;
