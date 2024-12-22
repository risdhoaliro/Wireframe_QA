import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';

const StatsCard = ({ label, value, change }: { label: string; value: string; change: number }) => (
  <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm">
    <div className="flex justify-between items-center">
      <h3 className="text-sm text-gray-500 dark:text-gray-400">{label}</h3>
      <span className={`flex items-center text-sm ${
        change >= 0 ? 'text-green-500' : 'text-red-500'
      }`}>
        {change >= 0 ? <TrendingUp className="w-4 h-4 mr-1" /> : <TrendingDown className="w-4 h-4 mr-1" />}
        {Math.abs(change)}%
      </span>
    </div>
    <p className="mt-2 text-2xl font-semibold text-gray-900 dark:text-white">{value}</p>
  </div>
);

const StatsCards: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      <StatsCard label="Total Revenue" value="$11.8M" change={2.5} />
      <StatsCard label="Total Subscribers" value="1.2K" change={3.1} />
      <StatsCard label="New Subscribers" value="200" change={0.8} />
      <StatsCard label="Active Subscribers" value="8K" change={-1.2} />
    </div>
  );
};

export default StatsCards;