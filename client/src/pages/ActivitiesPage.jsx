// src/pages/ActivitiesPage.jsx

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { activities } from '../data/activitiesData'; 
import ServiceCard from '../components/common/ServiceCard';
import { FiSearch } from 'react-icons/fi';
import { useTranslation } from 'react-i18next';

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    }
  }
};

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

const ActivitiesPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const { t } = useTranslation();

  const filteredActivities = useMemo(() => 
    activities.filter(activity =>
      t(`activities.${activity.link.split('/').pop().replace(/-/g, '_')}`).toLowerCase().includes(searchQuery.toLowerCase())
    ), 
    [searchQuery, t]
  );
  
  // ServiceCard komponentində istifadə etmək üçün hər bir fəaliyyətə tərcümə edilmiş başlığı əlavə edirik
  const translatedActivities = filteredActivities.map(activity => {
    const translationKey = `activities.${activity.link.split('/').pop().replace(/-/g, '_')}`;
    return {
      ...activity,
      title: t(translationKey),
      translatedTitle: t(translationKey) 
    };
  });

  const pageTitle = t('activities_page.title');
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
      <div className="bg-gray-50 pb-20 px-4 sm:px-6 lg:px-8">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-4 text-center text-lg text-gray-500"
        >
          {t('activities_page.subtitle')}
        </motion.p>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="container mx-auto max-w-2xl mt-8"
        >
          <div className="relative">
            <input
              type="text"
              placeholder={t('activities_page.search_placeholder')}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 text-lg text-gray-700 bg-white border-2 border-transparent rounded-full shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            />
            <FiSearch className="absolute left-5 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl" />
          </div>
        </motion.div>
      </div>
      

      <div className="py-20 px-4 sm:px-6 lg:px-8">
        <AnimatePresence>
          <motion.div 
            key={searchQuery} 
            className="container mx-auto max-w-7xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            {translatedActivities.length > 0 ? (
              translatedActivities.map((activity, index) => (
                <ServiceCard 
                  key={activity.link} 
                  title={activity.translatedTitle}
                  image={activity.image}
                  link={activity.link}
                />
              ))
            ) : (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="col-span-full text-center py-16"
              >
                <p className="text-xl text-gray-500">{t('activities_page.no_results')}</p>
              </motion.div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ActivitiesPage;