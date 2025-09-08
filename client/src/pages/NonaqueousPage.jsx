// src/pages/NonaqueousPage.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiArrowUp } from 'react-icons/fi';
import { useTranslation } from 'react-i18next';

// ContactSidebar komponentini import edirik
import ContactSidebar from '../components/common/ContactSidebar'; 

import obm1 from '../assets/img/obm1.jpg';

const NonaqueousPage = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-white min-h-screen">
    
      <div className="bg-[#0b0d27] text-white py-16 lg:py-20 flex items-center justify-center">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-light text-center tracking-tight">
          {t('activities.nonaqueous_drilling_fluids_obm_title')}
        </h1>
      </div>

      <div className="container mx-auto max-w-7xl py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2">
            <div className="overflow-hidden rounded-lg mb-8">
              <img 
                src={obm1} 
                alt={t('activities.nonaqueous_drilling_fluids_obm_title')} 
                className="w-full h-auto object-cover transition-opacity duration-300 hover:opacity-95" 
              />
            </div>
            <div className="text-gray-700 text-lg leading-relaxed space-y-6 font-light">
              <p className="opacity-90">{t('activities.nonaqueous_drilling_fluids_obm_text_1')}</p>
              <p className="opacity-90">{t('activities.nonaqueous_drilling_fluids_obm_text_2')}</p>
            </div>
          </div>

          {/* Əvvəlki formanı bu komponentlə əvəz edirik */}
          <ContactSidebar />
          
        </div>
      </div>
   
      <button 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} 
        className="fixed bottom-6 right-6 bg-gray-800 text-white rounded-sm h-10 w-10 flex items-center justify-center hover:bg-gray-900 transition-colors duration-300 shadow-sm z-40 opacity-80 hover:opacity-100"
        aria-label="Scroll to top"
      >
        <FiArrowUp size={18}/>
      </button>
    </div>
  );
};

export default NonaqueousPage;