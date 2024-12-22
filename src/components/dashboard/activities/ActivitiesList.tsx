import React from 'react';
import { Phone, Mail, Calendar } from 'lucide-react';
import { activities } from '../../../data/crmData';

const activityIcons = {
  call: Phone,
  email: Mail,
  meeting: Calendar
};

const ActivitiesList: React.FC = () => {
  return (
    <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-xl border border-emerald-500/20">
      <div className="p-4 border-b border-emerald-500/20">
        <h2 className="text-lg font-semibold text-emerald-900 dark:text-emerald-100">Recent Activities</h2>
      </div>
      <div className="p-4">
        <div className="space-y-4">
          {activities.map((activity) => {
            const Icon = activityIcons[activity.type];
            return (
              <div key={activity.id} className="flex items-start space-x-4">
                <div className={`p-2 rounded-lg ${activity.completed ? 'bg-emerald-100 dark:bg-emerald-900' : 'bg-gray-100 dark:bg-gray-700'}`}>
                  <Icon className={`w-5 h-5 ${activity.completed ? 'text-emerald-600 dark:text-emerald-400' : 'text-gray-600 dark:text-gray-400'}`} />
                </div>
                <div>
                  <p className="font-medium text-emerald-900 dark:text-emerald-100">{activity.title}</p>
                  <p className="text-sm text-emerald-600 dark:text-emerald-400">
                    {new Date(activity.date).toLocaleString()}
                  </p>
                </div>
                <div className="ml-auto">
                  <input
                    type="checkbox"
                    checked={activity.completed}
                    readOnly
                    className="h-4 w-4 text-emerald-600 dark:text-emerald-400 rounded border-emerald-300 dark:border-emerald-600"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ActivitiesList;