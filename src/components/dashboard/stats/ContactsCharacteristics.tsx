import React from 'react';
import { TrendingUp } from 'lucide-react';

const ContactsCharacteristics: React.FC = () => {
  const characteristics = [
    { label: 'Loyal Customer', value: '4.5M', change: 2.2 },
    { label: 'Impulsive Customers', value: '2.3M', change: 2.5 },
    { label: 'Potential Customers', value: '2M', change: 9.5 },
    { label: 'Passive Customers', value: '1.7M', change: 2.5 },
    { label: 'Unreachable Customers', value: '1.6M', change: 2.5 },
    { label: 'Unknown', value: '1.2M', change: 2.5 },
  ];

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
      <h3 className="text-gray-900 dark:text-white font-medium mb-4">Contacts Characteristics</h3>
      <div className="space-y-3">
        {characteristics.map((item) => (
          <div key={item.label} className="flex items-center justify-between">
            <span className="text-sm text-gray-600 dark:text-gray-300">{item.label}</span>
            <div className="flex items-center gap-3">
              <span className="text-sm font-medium text-gray-900 dark:text-white">{item.value}</span>
              <span className="flex items-center text-xs text-green-500">
                <TrendingUp className="w-3 h-3 mr-1" />
                {item.change}%
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactsCharacteristics;