import React from 'react';
import { customers } from '../../../data/crmData';

const statusColors = {
  active: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
  inactive: 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200',
  pending: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
};

const CustomersList: React.FC = () => {
  return (
    <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-xl border border-emerald-500/20">
      <div className="p-4 border-b border-emerald-500/20">
        <h2 className="text-lg font-semibold text-emerald-900 dark:text-emerald-100">Recent Customers</h2>
      </div>
      <div className="p-4">
        <div className="space-y-4">
          {customers.map((customer) => (
            <div key={customer.id} className="flex items-center justify-between p-4 bg-white/50 dark:bg-gray-700/50 rounded-lg">
              <div className="flex items-center space-x-3">
                <img src={customer.avatar} alt={customer.name} className="w-10 h-10 rounded-full" />
                <div>
                  <h3 className="font-medium text-emerald-900 dark:text-emerald-100">{customer.name}</h3>
                  <p className="text-sm text-emerald-600 dark:text-emerald-400">{customer.email}</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${statusColors[customer.status]}`}>
                  {customer.status.charAt(0).toUpperCase() + customer.status.slice(1)}
                </span>
                <span className="text-sm font-medium text-emerald-600 dark:text-emerald-400">
                  ${customer.revenue.toLocaleString()}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CustomersList;