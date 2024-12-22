import React from 'react';

const PieChart: React.FC = () => {
  return (
    <svg viewBox="0 0 100 100" className="w-32 h-32 mx-auto">
      <circle
        cx="50"
        cy="50"
        r="45"
        fill="none"
        stroke="#E5E7EB"
        strokeWidth="10"
      />
      <path
        d="M50 5 A45 45 0 1 1 5 50"
        fill="none"
        stroke="#4B5563"
        strokeWidth="10"
      />
      <path
        d="M50 5 A45 45 0 0 1 95 50"
        fill="none"
        stroke="#6B7280"
        strokeWidth="10"
      />
      <path
        d="M5 50 A45 45 0 0 1 50 95"
        fill="none"
        stroke="#9CA3AF"
        strokeWidth="10"
      />
    </svg>
  );
};

export default PieChart;