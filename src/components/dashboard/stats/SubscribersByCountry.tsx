import React from 'react';

const countries = [
  { name: 'United States', flag: '🇺🇸', value: '4.5M', percentage: 27.5 },
  { name: 'Australia', flag: '🇦🇺', value: '2.3M', percentage: 11.2 },
  { name: 'China', flag: '🇨🇳', value: '2M', percentage: 9.4 },
  { name: 'Germany', flag: '🇩🇪', value: '1.7M', percentage: 8.0 },
  { name: 'Romania', flag: '🇷🇴', value: '1.6M', percentage: 7.9 },
  { name: 'Japan', flag: '🇯🇵', value: '1.2M', percentage: 6.1 },
  { name: 'Netherlands', flag: '🇳🇱', value: '1M', percentage: 5.9 },
];

const SubscribersByCountry: React.FC = () => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
      <h3 className="text-gray-900 dark:text-white font-medium mb-4">Subscribers by Country</h3>
      <div className="space-y-4">
        {countries.map((country) => (
          <div key={country.name} className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <span className="text-xl">{country.flag}</span>
              <span className="text-gray-900 dark:text-white">{country.name}</span>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-gray-500 dark:text-gray-400">{country.percentage}%</span>
              <span className="text-gray-900 dark:text-white w-16 text-right">{country.value}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SubscribersByCountry;