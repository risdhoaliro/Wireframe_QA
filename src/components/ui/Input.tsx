import React from 'react';
import { cn } from '../../utils/cn';
import { LucideIcon } from 'lucide-react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: LucideIcon;
  error?: string;
}

const Input: React.FC<InputProps> = ({ icon: Icon, error, className, ...props }) => {
  return (
    <div className="space-y-1">
      <div className="relative">
        {Icon && (
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Icon className="h-5 w-5 text-emerald-500 dark:text-emerald-400" />
          </div>
        )}
        <input
          className={cn(
            "block w-full pl-10 pr-3 py-2.5 border rounded-lg",
            "bg-black/5 dark:bg-white/5 backdrop-blur-sm border-emerald-500/30",
            "text-emerald-900 dark:text-emerald-100 placeholder-emerald-500/50 dark:placeholder-emerald-400/50",
            "focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500",
            "transition-all duration-200",
            error && "border-red-500 focus:ring-red-500 focus:border-red-500",
            className
          )}
          {...props}
        />
      </div>
      {error && <p className="text-xs text-red-500 dark:text-red-400">{error}</p>}
    </div>
  );
};

export default Input;