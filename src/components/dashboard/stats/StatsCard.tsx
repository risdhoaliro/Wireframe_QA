import React from 'react';
import { LucideIcon } from 'lucide-react';

interface StatsCardProps {
  title: string;
  value: string | number;
  change?: number;
  icon: LucideIcon;
}

const StatsCard: React.FC<StatsCardProps> = ({ title, value, change, icon: Icon }) => {
  return (
    <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-xl p-6 border border-emerald-500/20">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-emerald-600 dark:text-emerald-400">{title}</p>
          <p className="mt-2 text-3xl font-semibold text-emerald-900 dark:text-emerald-100">
            {value}
          </p>
          {change !== undefined && (
            <p className={`mt-2 text-sm ${change >= 0 ? 'text-green-500' : 'text-red-500'}`}>
              {change >= 0 ? '↑' : '↓'} {Math.abs(change)}%
            </p>
          )}
        </div>
        <div className="p-3 bg-emerald-100 dark:bg-emerald-900 rounded-lg">
          <Icon className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
        </div>
      </div>
    </div>
  );
};

export default StatsCard;