import React from 'react';

const WorldMap: React.FC = () => {
  return (
    <div className="relative">
      <svg viewBox="0 0 100 60" className="w-full h-auto">
        {/* Simplified world map paths */}
        <path
          d="M20,10 L40,10 L45,20 L30,25 L20,10"
          fill="#4B5563"
          className="hover:fill-gray-500 transition-colors duration-200"
        />
        <path
          d="M50,30 L70,30 L75,40 L60,45 L50,30"
          fill="#6B7280"
          className="hover:fill-gray-500 transition-colors duration-200"
        />
        {/* Add more path elements for other continents */}
      </svg>
      
      {/* Tooltip */}
      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-lg shadow-lg max-w-xs">
        <p className="text-sm">Vel odio leo lacus, maecenas elit sagittis aliquam amet.</p>
        <div className="flex justify-between items-center mt-2">
          <a href="#" className="text-sm text-gray-300 hover:text-white">Link Action</a>
          <button className="bg-blue-500 text-white px-3 py-1 rounded text-sm hover:bg-blue-600">
            Button
          </button>
        </div>
      </div>
    </div>
  );
};

export default WorldMap;