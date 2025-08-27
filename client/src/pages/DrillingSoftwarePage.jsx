import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ContactSidebar from '../components/common/ContactSidebar';
import { FiArrowUp } from 'react-icons/fi';
import { useTranslation } from 'react-i18next';

import obm4 from '../assets/img/obm4.jpg';

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

const DrillingSoftwarePage = () => {
  const { t } = useTranslation();
  const [imageLoaded, setImageLoaded] = useState(false);
  const [isPageLoaded, setIsPageLoaded] = useState(false);

  useEffect(() => {
    // Səhifənin tam yükləndiyini təsdiqləmək
    const timer = setTimeout(() => {
      setIsPageLoaded(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const pageTitle = t('activities.simulation_software_title');
  const animatedTitle = pageTitle.split(" ").map((word, wordIndex) => (
    <span key={wordIndex} className="inline-block whitespace-nowrap mr-4">
      {word.split("").map((char, charIndex) => (
        <motion.span key={charIndex} className="inline-block" variants={titleChar}>
          {char}
        </motion.span>
      ))}
    </span>
  ));

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
    <div className="bg-gray-50 min-h-screen">
      <motion.div
        className="bg-[#0b0d27] text-white py-20 lg:py-28 flex items-center justify-center overflow-hidden"
        initial="hidden"
        animate={isPageLoaded ? "visible" : "hidden"}
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
              <div className="relative w-full h-64 bg-gray-200 overflow-hidden">
                <img
                  src={obm4}
                  alt={t('activities.simulation_software_title')}
                  className={`w-full h-full object-cover transition-opacity duration-500 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
                  onLoad={handleImageLoad}
                  loading="lazy"
                />
                {!imageLoaded && (
                  <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
                    <div className="animate-pulse text-gray-400">Şəkil yüklənir...</div>
                  </div>
                )}
              </div>
              <div className="p-6">
                <p className="text-gray-700 leading-relaxed mb-4">
                  {t('activities.simulation_software_text_1')}
                </p>
                <p className="text-gray-700 leading-relaxed">
                  {t('activities.simulation_software_text_2')}
                </p>
                <ul className="list-disc list-inside space-y-2 mt-4 text-gray-700">
                  {listItems.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
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

export default DrillingSoftwarePage;