import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';

const StatCard = ({ label, value, change }: { label: string; value: string; change: number }) => (
  <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
    <h3 className="text-gray-500 dark:text-gray-400 text-sm font-medium">{label}</h3>
    <div className="mt-2 flex items-baseline justify-between">
      <p className="text-2xl font-semibold text-gray-900 dark:text-white">{value}</p>
      <span className={`flex items-center text-sm ${
        change >= 0 ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'
      }`}>
        {change >= 0 ? <TrendingUp className="w-4 h-4 mr-1" /> : <TrendingDown className="w-4 h-4 mr-1" />}
        {Math.abs(change)}%
      </span>
    </div>
  </div>
);

const StatsOverview: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
      <StatCard label="Users Total" value="11.8M" change={2.5} />
      <StatCard label="New Users" value="8.236K" change={-1.2} />
      <StatCard label="Active Users" value="2.352M" change={11} />
      <StatCard label="New Users" value="8K" change={5.2} />
    </div>
  );
};

export default StatsOverview;