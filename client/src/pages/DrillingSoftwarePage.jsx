import React, { useState, useEffect } from 'react';
import ContactSidebar from '../components/common/ContactSidebar';
import { FiArrowUp } from 'react-icons/fi';
import { useTranslation } from 'react-i18next';

import obm4 from '../assets/img/obm4.jpg';

const DrillingSoftwarePage = () => {
  const { t } = useTranslation();
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const listItems = [
    t('activities.simulation_software_list_1'),
    t('activities.simulation_software_list_2'),
    t('activities.simulation_software_list_3'),
    t('activities.simulation_software_list_4'),
    t('activities.simulation_software_list_5'),
    t('activities.simulation_software_list_6'),
    t('activities.simulation_software_list_7'),
    t('activities.simulation_software_list_8'),
    t('activities.simulation_software_list_9')
  ];

  return (
    <div className="bg-white min-h-screen">
      
      <div className="bg-[#0b0d27] text-white py-16 lg:py-20 flex items-center justify-center">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-light text-center tracking-tight">
          {t('activities.simulation_software_title')}
        </h1>
      </div>

      <div className="container mx-auto max-w-7xl py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          
          <div className="lg:col-span-2">
            <div className="bg-white border border-gray-100 rounded-sm overflow-hidden">
              <div className="relative w-full h-64 bg-gray-100 overflow-hidden">
                <img
                  src={obm4}
                  alt={t('activities.simulation_software_title')}
                  className={`w-full h-full object-cover transition-opacity duration-300 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
                  onLoad={handleImageLoad}
                  loading="lazy"
                />
                {!imageLoaded && (
                  <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
                    <div className="text-gray-400 font-light">Şəkil yüklənir...</div>
                  </div>
                )}
              </div>
              <div className="p-6">
                <p className="text-gray-700 leading-relaxed mb-6 font-light opacity-90">
                  {t('activities.simulation_software_text_1')}
                </p>
                <p className="text-gray-700 leading-relaxed mb-6 font-light opacity-90">
                  {t('activities.simulation_software_text_2')}
                </p>
                <ul className="list-disc list-inside space-y-3 mt-6 text-gray-700 font-light">
                  {listItems.map((item, index) => (
                    <li key={index} className="opacity-90">{item}</li>
                  ))}
                </ul>
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

export default DrillingSoftwarePage;