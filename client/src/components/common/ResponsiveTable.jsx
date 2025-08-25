// src/components/common/ResponsiveTable.jsx
import React from 'react';
import { useTranslation } from 'react-i18next';

const ResponsiveTable = ({ headers, data }) => {
  return (
    <div className="w-full overflow-hidden rounded-lg">
      {/* Desktop Table */}
      <div className="hidden md:block">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-100">
            <tr>
              {headers.map((header, index) => (
                <th 
                  key={index} 
                  className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {data.map((row, rowIndex) => (
              <tr 
                key={rowIndex} 
                className={rowIndex % 2 === 0 ? 'bg-white' : 'bg-gray-50'}
              >
                {row.map((cell, cellIndex) => (
                  <td 
                    key={cellIndex} 
                    className="px-6 py-4 text-sm text-gray-800 border-r border-gray-100 last:border-r-0"
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Cards */}
      <div className="md:hidden space-y-4">
        {data.map((row, rowIndex) => (
          <div 
            key={rowIndex} 
            className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm"
          >
            <div className="px-4 py-3 bg-gray-50 border-b border-gray-200">
              <h3 className="text-sm font-medium text-gray-700">{row[0]}</h3>
            </div>
            <div className="p-4 space-y-3">
              {headers.slice(1).map((header, headerIndex) => (
                <div key={headerIndex}>
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">{header}</p>
                  <p className="mt-1 text-sm text-gray-700">{row[headerIndex + 1]}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResponsiveTable;