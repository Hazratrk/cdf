// src/pages/NonaqueousPage.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiMail, FiLinkedin, FiInstagram, FiArrowUp } from 'react-icons/fi';
import { useTranslation } from 'react-i18next';

import obm1 from '../assets/img/obm1.jpg';

const linkedinUrl = "https://www.linkedin.com/company/caspian-drilling-fluids/";
const instagramUrl = "https://www.instagram.com/caspian.drilling.fluids?igsh=MXI1cjllYmVjcWRo";

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

       
          <div className="bg-white p-8 rounded-lg border border-gray-100 shadow-sm">
            <h3 className="text-xl font-normal text-gray-800 mb-6 tracking-wide">{t('activities.get_in_touch')}</h3>
            <form action="#" method="POST" className="space-y-5">
              <div>
                <input 
                  type="text" 
                  name="name" 
                  id="name" 
                  placeholder={t('activities.name')} 
                  className="w-full px-4 py-3 border border-gray-200 rounded-sm focus:ring-0 focus:border-gray-400 transition-colors duration-300 text-gray-700 placeholder-gray-400 font-light"
                />
              </div>
              <div>
                <input 
                  type="email" 
                  name="email" 
                  id="email" 
                  placeholder={t('activities.email')} 
                  className="w-full px-4 py-3 border border-gray-200 rounded-sm focus:ring-0 focus:border-gray-400 transition-colors duration-300 text-gray-700 placeholder-gray-400 font-light"
                />
              </div>
              <div>
                <textarea 
                  name="message" 
                  id="message" 
                  rows="5" 
                  placeholder={t('activities.message')} 
                  className="w-full px-4 py-3 border border-gray-200 rounded-sm focus:ring-0 focus:border-gray-400 transition-colors duration-300 text-gray-700 placeholder-gray-400 font-light"
                ></textarea>
              </div>
              <div>
                <button 
                  type="submit" 
                  className="w-full bg-gray-800 text-white font-normal py-3 px-6 rounded-sm hover:bg-gray-900 transition-colors duration-300 tracking-wide"
                >
                  {t('activities.get_in_touch')}
                </button>
              </div>
            </form>

            <div className="mt-10 pt-8 border-t border-gray-100">
              <h4 className="text-lg font-normal text-gray-800 mb-4 tracking-wide">{t('activities.contact_info')}</h4>
              <a 
                href="mailto:office@caspiandf.com" 
                className="flex items-center text-gray-600 hover:text-gray-800 transition-colors duration-300 font-light"
              >
                <FiMail className="mr-3 opacity-70" /> office@caspiandf.com
              </a>
              <div className="flex items-center space-x-4 mt-4">
                <a 
                  href={linkedinUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-500 hover:text-gray-800 transition-colors duration-300"
                >
                  <FiLinkedin size={20} className="opacity-70" />
                </a>
                <a 
                  href={instagramUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-500 hover:text-gray-800 transition-colors duration-300"
                >
                  <FiInstagram size={20} className="opacity-70" />
                </a>
              </div>
            </div>
          </div>
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