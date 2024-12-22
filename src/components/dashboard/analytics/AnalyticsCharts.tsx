import React from 'react';
import PieChart from './PieChart';
import WorldMap from './WorldMap';

const AnalyticsCharts: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* Target Chart */}
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
        <h3 className="text-gray-900 dark:text-white font-medium mb-4">Target</h3>
        <div className="relative pt-4">
          <div className="w-32 h-32 mx-auto">
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-2xl font-semibold text-gray-900 dark:text-white">67%</span>
            </div>
            <svg className="w-full h-full" viewBox="0 0 36 36">
              <path
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                fill="none"
                stroke="#E5E7EB"
                strokeWidth="3"
              />
              <path
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                fill="none"
                stroke="#6366F1"
                strokeWidth="3"
                strokeDasharray="67, 100"
              />
            </svg>
          </div>
        </div>
        <div className="flex items-center justify-center mt-4 space-x-4">
          <div className="flex items-center">
            <div className="w-3 h-3 bg-indigo-500 rounded-full mr-2"></div>
            <span className="text-sm text-gray-600 dark:text-gray-300">Achieved</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 bg-gray-200 dark:bg-gray-600 rounded-full mr-2"></div>
            <span className="text-sm text-gray-600 dark:text-gray-300">Remaining</span>
          </div>
        </div>
      </div>

      {/* Most Active Account Types */}
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
        <h3 className="text-gray-900 dark:text-white font-medium mb-4">Most Active Account Types</h3>
        <div className="relative">
          <PieChart />
        </div>
        <div className="flex items-center justify-center mt-4 space-x-4">
          <div className="flex items-center">
            <div className="w-3 h-3 bg-gray-600 rounded-full mr-2"></div>
            <span className="text-sm text-gray-600 dark:text-gray-300">Very Active</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 bg-gray-300 rounded-full mr-2"></div>
            <span className="text-sm text-gray-600 dark:text-gray-300">Inactive</span>
          </div>
        </div>
      </div>

      {/* Active Countries */}
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
        <h3 className="text-gray-900 dark:text-white font-medium mb-4">Active Countries</h3>
        <div className="relative">
          <WorldMap />
        </div>
        <div className="flex items-center justify-center mt-4 space-x-4">
          <div className="flex items-center">
            <div className="w-3 h-3 bg-gray-600 rounded-full mr-2"></div>
            <span className="text-sm text-gray-600 dark:text-gray-300">Very Active</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 bg-gray-300 rounded-full mr-2"></div>
            <span className="text-sm text-gray-600 dark:text-gray-300">Inactive</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsCharts;