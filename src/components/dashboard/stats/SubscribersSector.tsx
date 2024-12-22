import React from 'react';

const SubscribersSector: React.FC = () => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
      <h3 className="text-gray-900 dark:text-white font-medium mb-4">Subscribers by Company Sector</h3>
      <div className="relative">
        <svg viewBox="0 0 100 100" className="w-48 h-48 mx-auto">
          <circle cx="50" cy="50" r="45" fill="none" stroke="#E5E7EB" strokeWidth="10" />
          <path
            d="M50 5 A45 45 0 0 1 95 50"
            fill="none"
            stroke="#34D399"
            strokeWidth="10"
          />
          <path
            d="M95 50 A45 45 0 0 1 50 95"
            fill="none"
            stroke="#F59E0B"
            strokeWidth="10"
          />
          <path
            d="M50 95 A45 45 0 0 1 5 50"
            fill="none"
            stroke="#EC4899"
            strokeWidth="10"
          />
          <path
            d="M5 50 A45 45 0 0 1 50 5"
            fill="none"
            stroke="#8B5CF6"
            strokeWidth="10"
          />
        </svg>
      </div>
      <div className="flex items-center justify-center mt-4 space-x-4">
        <div className="flex items-center">
          <div className="w-3 h-3 bg-emerald-400 rounded-full mr-2"></div>
          <span className="text-sm text-gray-600 dark:text-gray-300">Bank</span>
        </div>
        <div className="flex items-center">
          <div className="w-3 h-3 bg-amber-400 rounded-full mr-2"></div>
          <span className="text-sm text-gray-600 dark:text-gray-300">Insurance</span>
        </div>
        <div className="flex items-center">
          <div className="w-3 h-3 bg-pink-400 rounded-full mr-2"></div>
          <span className="text-sm text-gray-600 dark:text-gray-300">ISP</span>
        </div>
        <div className="flex items-center">
          <div className="w-3 h-3 bg-purple-400 rounded-full mr-2"></div>
          <span className="text-sm text-gray-600 dark:text-gray-300">Others</span>
        </div>
      </div>
    </div>
  );
};

export default SubscribersSector;