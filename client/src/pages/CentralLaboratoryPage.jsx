import React from 'react';
import { motion } from 'framer-motion';
import ContactSidebar from '../components/common/ContactSidebar';
import { FiArrowUp } from 'react-icons/fi';
import { useTranslation } from 'react-i18next';

import laboratoryImage from '../assets/img/obm6.jpg'; // Import the image directly

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

const CentralLaboratoryPage = () => {
  const { t } = useTranslation();

  const pageTitle = t('activities.central_laboratory_title');
  const animatedTitle = pageTitle.split("").map((char, index) => (
    <motion.span key={index} variants={titleChar} className="inline-block">
      {char === " " ? "\u00A0" : char}
    </motion.span>
  ));

  return (
    <div className="bg-gray-50">
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

      <div className="container mx-auto max-w-7xl py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          
          <div className="lg:col-span-2 space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-xl shadow-md overflow-hidden"
            >
              <img
                src={laboratoryImage}
                alt={t('activities.central_laboratory_title')}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <p className="text-gray-700 leading-relaxed mb-4">
                  {t('activities.central_laboratory_text_1')}
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {t('activities.central_laboratory_text_2')}
                </p>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {t('activities.central_laboratory_main_functions')}
                </h3>
                <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-1 ml-4">
                  <li>{t('activities.central_laboratory_list_1')}</li>
                  <li>{t('activities.central_laboratory_list_2')}</li>
                  <li>{t('activities.central_laboratory_list_3')}</li>
                  <li>{t('activities.central_laboratory_list_4')}</li>
                  <li>{t('activities.central_laboratory_list_5')}</li>
                  <li>{t('activities.central_laboratory_list_6')}</li>
                  <li>{t('activities.central_laboratory_list_7')}</li>
                </ul>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <ContactSidebar />
          </motion.div>
        </div>
      </div>
      
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-6 right-6 bg-blue-600 text-white rounded-full h-12 w-12 flex items-center justify-center hover:bg-blue-700 transition-colors shadow-lg z-40"
        aria-label="Scroll to top"
      >
        <FiArrowUp size={24} />
      </button>
    </div>
  );
};

export default CentralLaboratoryPage;