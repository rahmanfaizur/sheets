import React from 'react';
import { ChevronDown, Filter, ArrowUpDown } from 'lucide-react';

const Toolbar: React.FC = () => {
  return (
    <div className="flex items-center space-x-4 px-6 py-3 bg-gray-50 border-b border-gray-200">
      <button className="flex items-center space-x-1 px-3 py-1.5 text-sm text-gray-700 bg-white border border-gray-300 rounded hover:bg-gray-50">
        <span>Data Source</span>
        <ChevronDown className="w-4 h-4" />
      </button>
      
      <button className="px-3 py-1.5 text-sm text-gray-700 bg-white border border-gray-300 rounded hover:bg-gray-50">
        3 Rows
      </button>
      
      <button className="px-3 py-1.5 text-sm text-gray-700 bg-white border border-gray-300 rounded hover:bg-gray-50">
        50/50 Columns
      </button>
      
      <button className="flex items-center space-x-1 px-3 py-1.5 text-sm text-gray-700 bg-white border border-gray-300 rounded hover:bg-gray-50">
        <Filter className="w-4 h-4" />
        <span>Filter</span>
      </button>
      
      <button className="flex items-center space-x-1 px-3 py-1.5 text-sm text-gray-700 bg-white border border-gray-300 rounded hover:bg-gray-50">
        <ArrowUpDown className="w-4 h-4" />
        <span>Sort</span>
      </button>
    </div>
  );
};

export default Toolbar; 