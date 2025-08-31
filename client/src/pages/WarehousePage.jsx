import React from 'react';
import ContactSidebar from '../components/common/ContactSidebar';
import { FiArrowUp } from 'react-icons/fi';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom'; 

import warehouseImage from '../assets/img/obm7.jpg';

const WarehousePage = () => {
  const { t } = useTranslation();

  
  const renderTextWithLink = (text) => {
    const hseWord = 'HSE';
    const parts = text.split(new RegExp(`(${hseWord})`, 'gi'));
    return parts.map((part, index) => {
      if (part.toLowerCase() === hseWord.toLowerCase()) {
        return (
          <Link
            key={index}
            to="/hse" 
            className="text-blue-500 hover:underline font-normal"
          >
            {part}
          </Link>
        );
      }
      return part;
    });
  };

  return (
    <div className="bg-white min-h-screen">
     
      <div className="bg-[#0b0d27] text-white py-16 lg:py-20 flex items-center justify-center">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-light text-center tracking-tight">
          {t('activities.warehouse_title')}
        </h1>
      </div>

      <div className="container mx-auto max-w-7xl py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          
          <div className="lg:col-span-2">
            <div className="bg-white border border-gray-100 rounded-sm overflow-hidden">
              <div className="overflow-hidden">
                <img
                  src={warehouseImage}
                  alt={t('activities.warehouse_title')}
                  className="w-full h-96 object-cover transition-opacity duration-300 hover:opacity-95"
                />
              </div>
              <div className="p-6">
                <p className="text-gray-700 leading-relaxed font-light opacity-90">
                  {renderTextWithLink(t('activities.warehouse_text'))}
                </p>
              </div>
            </div>
          </div>

          <div>
            <ContactSidebar />
          </div>
        </div>
      </div>
      
    
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-6 right-6 bg-gray-800 text-white rounded-sm h-10 w-10 flex items-center justify-center hover:bg-gray-900 transition-colors duration-300 shadow-sm z-40 opacity-80 hover:opacity-100"
        aria-label="Scroll to top"
      >
        <FiArrowUp size={18} />
      </button>
    </div>
  );
};

export default WarehousePage;