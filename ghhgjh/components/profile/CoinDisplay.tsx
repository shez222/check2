// components/CoinDisplay.js
import React from 'react';
import loadUserData from '../../utils/loadUserData';

const CoinDisplay = () => {
  const { coins, loading, error } = loadUserData();

  if (loading) {
    return <p></p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="text-sm bg-black text-white rounded-lg px-4 py-2">
      {coins} 💰
    </div>
  );
};

export default CoinDisplay;
