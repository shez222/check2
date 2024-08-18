"use client";
import React, { useState } from 'react';
import { useSwipeable } from 'react-swipeable';
import { howItWorksSteps } from '@/constants/howItWorks';

const HowItWorks: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlers = useSwipeable({
    onSwipedLeft: () => setCurrentIndex((prevIndex) => (prevIndex + 1) % howItWorksSteps.length),
    onSwipedRight: () => setCurrentIndex((prevIndex) => (prevIndex - 1 + howItWorksSteps.length) % howItWorksSteps.length),
    trackMouse: true,
  });

  return (
    <div className="flex flex-col space-y-2">
      <span className="text-lg font-semibold">How It Works</span>
      <div {...handlers} className="relative w-full h-36 overflow-hidden rounded-xl bg-gray-100">
        {howItWorksSteps.map((step, index) => (
          <div
            key={index}
            className={`absolute inset-0 p-4 flex flex-col items-center justify-center text-black transition-transform duration-300 ease-in-out ${index === currentIndex ? 'opacity-100' : 'opacity-0'
              }`}
            style={{
              transform: `translateX(${(index - currentIndex) * 100}%)`,
            }}
          >
            <div className="text-4xl mb-2">{step.emoji}</div>
            <h2 className="text-xl font-bold mb-1">{step.title}</h2>
            <p className="text-sm text-center">{step.subtitle}</p>
          </div>
        ))}
      </div>
      <div className="flex justify-center space-x-2">
        {howItWorksSteps.map((_, index) => (
          <div
            key={index}
            className={`h-2 w-2 rounded-full cursor-pointer ${currentIndex === index ? 'bg-black' : 'bg-gray-400'}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default HowItWorks;