import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';

const users = [
  { name: 'User Name', value: '$1.2M', change: 8.2 },
  { name: 'User Name', value: '$800K', change: 7 },
  { name: 'User Name', value: '$645K', change: 2.5 },
  { name: 'User Name', value: '$590K', change: -6.5 },
  { name: 'User Name', value: '$342K', change: 1.7 },
];

const TopUsers: React.FC = () => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
      <h3 className="text-gray-900 dark:text-white font-medium mb-4">Top 5 Best Selling Users</h3>
      <div className="space-y-4">
        {users.map((user, index) => (
          <div key={index} className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-700"></div>
              <span className="text-gray-900 dark:text-white">{user.name}</span>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-gray-900 dark:text-white">{user.value}</span>
              <span className={`flex items-center text-sm ${
                user.change >= 0 ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'
              }`}>
                {user.change >= 0 ? <TrendingUp className="w-4 h-4 mr-1" /> : <TrendingDown className="w-4 h-4 mr-1" />}
                {Math.abs(user.change)}%
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopUsers;