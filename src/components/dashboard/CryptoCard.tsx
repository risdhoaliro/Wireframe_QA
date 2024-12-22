import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';

interface CryptoCardProps {
  name: string;
  symbol: string;
  price: number;
  change: number;
  icon: string;
}

const CryptoCard: React.FC<CryptoCardProps> = ({ name, symbol, price, change, icon }) => {
  const isPositive = change >= 0;

  return (
    <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-xl p-4 border border-emerald-500/20">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <img src={icon} alt={name} className="w-8 h-8" />
          <div>
            <h3 className="font-semibold text-emerald-900 dark:text-emerald-100">{name}</h3>
            <p className="text-sm text-emerald-600 dark:text-emerald-400">{symbol}</p>
          </div>
        </div>
        <div className="text-right">
          <p className="font-mono text-lg font-semibold text-emerald-900 dark:text-emerald-100">
            ${price.toLocaleString()}
          </p>
          <p className={`flex items-center text-sm ${isPositive ? 'text-green-500' : 'text-red-500'}`}>
            {isPositive ? <TrendingUp className="w-4 h-4 mr-1" /> : <TrendingDown className="w-4 h-4 mr-1" />}
            {change.toFixed(2)}%
          </p>
        </div>
      </div>
    </div>
  );
};

export default CryptoCard;