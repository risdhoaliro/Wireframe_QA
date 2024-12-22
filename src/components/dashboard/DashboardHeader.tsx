import React from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { Building2, Bell, LogOut } from 'lucide-react';

const DashboardHeader: React.FC = () => {
  const { user, logout } = useAuth();

  return (
    <nav className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg border-b border-emerald-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Building2 className="w-8 h-8 text-emerald-500 dark:text-emerald-400" />
            <span className="ml-2 text-xl font-bold text-emerald-900 dark:text-emerald-100">
              CRM Dashboard
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <button className="p-2 rounded-lg hover:bg-emerald-100 dark:hover:bg-emerald-800 text-emerald-600 dark:text-emerald-400">
              <Bell className="w-5 h-5" />
            </button>
            <div className="flex items-center space-x-2">
              <img src={user?.avatar} alt={user?.name} className="w-8 h-8 rounded-full" />
              <span className="text-emerald-900 dark:text-emerald-100">{user?.name}</span>
            </div>
            <button
              onClick={logout}
              className="p-2 rounded-lg hover:bg-emerald-100 dark:hover:bg-emerald-800 text-emerald-600 dark:text-emerald-400"
            >
              <LogOut className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default DashboardHeader;