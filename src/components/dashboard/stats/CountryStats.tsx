import React from 'react';

const countries = [
  { name: 'United States', flag: '🇺🇸', percentage: 27.5, users: '4.5M' },
  { name: 'Australia', flag: '🇦🇺', percentage: 11.2, users: '2.3M' },
  { name: 'China', flag: '🇨🇳', percentage: 9.4, users: '2M' },
  { name: 'Germany', flag: '🇩🇪', percentage: 8, users: '1.7M' },
  { name: 'Romania', flag: '🇷🇴', percentage: 7.9, users: '1.6M' },
  { name: 'Japan', flag: '🇯🇵', percentage: 6.1, users: '1.2M' },
  { name: 'Netherlands', flag: '🇳🇱', percentage: 5.9, users: '1M' },
];

const CountryStats: React.FC = () => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
      <h3 className="text-gray-900 dark:text-white font-medium mb-4">Users by Country</h3>
      <div className="space-y-4">
        {countries.map((country) => (
          <div key={country.name} className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <span className="text-xl">{country.flag}</span>
              <span className="text-gray-900 dark:text-white">{country.name}</span>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-gray-500 dark:text-gray-400">{country.percentage}%</span>
              <span className="text-gray-900 dark:text-white w-16 text-right">{country.users}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CountryStats;