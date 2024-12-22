import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';

const subscribers = [
  { name: 'BCA', value: '$1.2M', change: 8.2 },
  { name: 'Mandiri', value: '$800K', change: 7.0 },
  { name: 'Indihome', value: '$645K', change: 2.5 },
  { name: 'Biznet', value: '$590K', change: -6.5 },
  { name: 'Telkomsel', value: '$342K', change: 1.7 },
];

const TopSubscribers: React.FC = () => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
      <h3 className="text-gray-900 dark:text-white font-medium mb-4">Top 5 Best Selling Subscribers</h3>
      <div className="space-y-4">
        {subscribers.map((subscriber) => (
          <div key={subscriber.name} className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-700"></div>
              <span className="text-gray-900 dark:text-white">{subscriber.name}</span>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-gray-900 dark:text-white">{subscriber.value}</span>
              <span className={`flex items-center text-sm ${
                subscriber.change >= 0 ? 'text-green-500' : 'text-red-500'
              }`}>
                {subscriber.change >= 0 ? 
                  <TrendingUp className="w-4 h-4 mr-1" /> : 
                  <TrendingDown className="w-4 h-4 mr-1" />}
                {Math.abs(subscriber.change)}%
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopSubscribers;