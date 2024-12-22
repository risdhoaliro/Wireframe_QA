import React from 'react';
import { deals } from '../../../data/crmData';

const stageColors = {
  lead: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
  proposal: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200',
  negotiation: 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200',
  closed: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
};

const DealsList: React.FC = () => {
  return (
    <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-xl border border-emerald-500/20">
      <div className="p-4 border-b border-emerald-500/20">
        <h2 className="text-lg font-semibold text-emerald-900 dark:text-emerald-100">Active Deals</h2>
      </div>
      <div className="p-4">
        <div className="space-y-4">
          {deals.map((deal) => (
            <div key={deal.id} className="flex items-center justify-between p-4 bg-white/50 dark:bg-gray-700/50 rounded-lg">
              <div>
                <h3 className="font-medium text-emerald-900 dark:text-emerald-100">{deal.title}</h3>
                <p className="text-sm text-emerald-600 dark:text-emerald-400">${deal.value.toLocaleString()}</p>
              </div>
              <div className="flex items-center space-x-3">
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${stageColors[deal.stage]}`}>
                  {deal.stage.charAt(0).toUpperCase() + deal.stage.slice(1)}
                </span>
                <span className="text-sm font-medium text-emerald-600 dark:text-emerald-400">
                  {deal.probability}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DealsList;