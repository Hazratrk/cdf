// src/components/common/DataTable.jsx
import React from 'react';

const DataTable = ({ headers, data }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border border-gray-200 text-left">
        <thead className="bg-gray-50">
          <tr>
            {headers.map((header, index) => (
              <th key={index} className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider border-b border-gray-200">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {data.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, cellIndex) => (
                <td key={cellIndex} className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 border-r border-gray-200 last:border-r-0">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;