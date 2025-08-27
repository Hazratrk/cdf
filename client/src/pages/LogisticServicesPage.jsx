// src/pages/LogisticServicesPage.jsx

import React from 'react';
import { motion } from 'framer-motion';
import ContactSidebar from '../components/common/ContactSidebar';
import { FiArrowUp } from 'react-icons/fi';
import { useTranslation } from 'react-i18next';

import logisticImage from '../assets/img/obm8.jpg'; // obm8.jpg şəkli import olunur

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

const LogisticServicesPage = () => {
  const { t } = useTranslation();

  const pageTitle = t('activities.logistic_services_title');
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
                src={logisticImage}
                alt={t('activities.logistic_services_title')}
                className="w-full h-96 object-cover"
              />
              <div className="p-6">
                <p className="text-gray-700 leading-relaxed mb-4">
                  {t('activities.logistic_services_text_1')}
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 pl-4">
                  <li>{t('activities.logistic_services_list_1')}</li>
                  <li>{t('activities.logistic_services_list_2')}</li>
                  <li>{t('activities.logistic_services_list_3')}</li>
                  <li>{t('activities.logistic_services_list_4')}</li>
                  <li>{t('activities.logistic_services_list_5')}</li>
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

export default LogisticServicesPage;