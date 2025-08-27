// src/pages/NonaqueousPage.jsx

import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiMail, FiLinkedin, FiInstagram, FiArrowUp } from 'react-icons/fi';
import { useTranslation } from 'react-i18next';

import obm1 from '../assets/img/obm1.jpg'; // Düzgün import

const linkedinUrl = "https://www.linkedin.com/company/caspian-drilling-fluids/";
const instagramUrl = "https://www.instagram.com/caspian.drilling.fluids?igsh=MXI1cjllYmVjcWRo";


const titleContainer = {
  hidden: { opacity: 0 },
  visible: (i = 1) => ({
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: i * 0.04 },
  }),
};

const titleChar = {
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      damping: 12,
      stiffness: 100,
    },
  },
  hidden: {
    opacity: 0,
    y: 20,
    transition: {
      type: "spring",
      damping: 12,
      stiffness: 100,
    },
  },
};

const NonaqueousPage = () => {
  const { t } = useTranslation();

  const pageTitle = t('activities.nonaqueous_drilling_fluids_obm_title');
  const animatedTitle = pageTitle.split(" ").map((word, wordIndex) => (
    <span key={wordIndex} className="inline-block whitespace-nowrap mr-4">
      {word.split("").map((char, charIndex) => (
        <motion.span key={charIndex} className="inline-block" variants={titleChar}>
          {char}
        </motion.span>
      ))}
    </span>
  ));

  return (
    <div className="bg-white">
      <motion.div 
        className="bg-[#0b0d27] text-white py-20 lg:py-28 flex items-center justify-center overflow-hidden"
        initial="hidden"
        animate="visible"
        variants={titleContainer}
      >
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center">
          {animatedTitle}
        </h1>
      </motion.div>

      <div className="container mx-auto max-w-7xl py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {/* Şəkil yolu obm1 dəyişəni ilə əvəz edildi */}
              <img src={obm1} alt={t('activities.nonaqueous_drilling_fluids_obm_title')} className="w-full h-auto rounded-lg shadow-lg mb-8" />
              <div className="text-gray-600 text-lg leading-relaxed space-y-6">
                <p>{t('activities.nonaqueous_drilling_fluids_obm_text_1')}</p>
                <p>{t('activities.nonaqueous_drilling_fluids_obm_text_2')}</p>
              </div>
            </motion.div>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg shadow-sm">
             <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
             >
                <h3 className="text-2xl font-bold text-gray-800 mb-6">{t('activities.get_in_touch')}</h3>
                <form action="#" method="POST" className="space-y-6">
                    <div>
                        <label htmlFor="name" className="sr-only">{t('activities.name')}</label>
                        <input type="text" name="name" id="name" placeholder={t('activities.name')} className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"/>
                    </div>
                    <div>
                        <label htmlFor="email" className="sr-only">{t('activities.email')}</label>
                        <input type="email" name="email" id="email" placeholder={t('activities.email')} className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"/>
                    </div>
                    <div>
                        <label htmlFor="message" className="sr-only">{t('activities.message')}</label>
                        <textarea name="message" id="message" rows="5" placeholder={t('activities.message')} className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"></textarea>
                    </div>
                    <div>
                        <button type="submit" className="w-full bg-blue-600 text-white font-bold py-3 px-6 rounded-md hover:bg-blue-700 transition-colors duration-300">
                            {t('activities.get_in_touch')}
                        </button>
                    </div>
                </form>

                <div className="mt-10 pt-8 border-t border-gray-200">
                    <h4 className="text-xl font-bold text-gray-800 mb-4">{t('activities.contact_info')}</h4>
                    <a href="mailto:office@caspiandf.com" className="flex items-center text-gray-600 hover:text-blue-600 transition-colors">
                        <FiMail className="mr-3" /> office@caspiandf.com
                    </a>
                    <div className="flex items-center space-x-4 mt-4">
                        <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-700 transition-colors"><FiLinkedin size={24}/></a>
                        <a href={instagramUrl} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-pink-600 transition-colors"><FiInstagram size={24}/></a>
                    </div>
                </div>
            </motion.div>
          </div>
        </div>
      </div>
   
      <button 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} 
        className="fixed bottom-6 right-6 bg-blue-600 text-white rounded-full h-12 w-12 flex items-center justify-center hover:bg-blue-700 transition-colors shadow-lg z-40"
        aria-label="Scroll to top"
      >
        <FiArrowUp size={24}/>
      </button>
    </div>
  );
};

export default NonaqueousPage;