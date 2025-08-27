// src/pages/WaterBasePage.jsx

import React from 'react';
import { motion } from 'framer-motion';
import ContactSidebar from '../components/common/ContactSidebar';
import ResponsiveTable from '../components/common/ResponsiveTable';
import { FiArrowUp } from 'react-icons/fi';
import { useTranslation } from 'react-i18next';

import obm2 from '../assets/img/obm2.jpg';

const linkedinUrl = "https://www.linkedin.com/company/caspian-drilling-fluids/";
const instagramUrl = "https://www.instagram.com/caspian.drilling.fluids?igsh=MXI1cjllYmVjcWRo";

// NonaqueousPage-dən köçürülən animasiya obyektləri
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

const WaterBasePage = () => {
  const { t } = useTranslation();
  

  const pageTitle = t('activities.water_base_drilling_fluids_title'); 
  const animatedTitle = pageTitle.split(" ").map((word, wordIndex) => (
    <span key={wordIndex} className="inline-block whitespace-nowrap mr-4">
      {word.split("").map((char, charIndex) => (
        <motion.span key={charIndex} className="inline-block" variants={titleChar}>
          {char}
        </motion.span>
      ))}
    </span>
  ));

  const tableData = [
    {
      title: t('water_base_page.table_1_title'),
      headers: [
        t('water_base_page.table_headers_trade_name'),
        t('water_base_page.table_headers_fluid_type'),
        t('water_base_page.table_headers_systems_description'),
        t('water_base_page.table_headers_application')
      ],
      data: [
        [
          t('water_base_page.table_1_data_1_trade_name'), 
          "HPWBM", 
          t('water_base_page.table_1_data_1_description'), 
          t('water_base_page.table_1_data_1_application')
        ],
        [
          t('water_base_page.table_1_data_2_trade_name'), 
          "HPWBM", 
          t('water_base_page.table_1_data_2_description'), 
          t('water_base_page.table_1_data_2_application')
        ],
        [
          t('water_base_page.table_1_data_3_trade_name'), 
          "HPWBM", 
          t('water_base_page.table_1_data_3_description'), 
          t('water_base_page.table_1_data_3_application')
        ],
      ]
    },
    {
      title: t('water_base_page.table_2_title'),
      headers: [
        t('water_base_page.table_headers_trade_name'),
        t('water_base_page.table_headers_fluid_type'),
        t('water_base_page.table_headers_systems_description'),
        t('water_base_page.table_headers_application')
      ],
      data: [
        [
          t('water_base_page.table_2_data_1_trade_name'), 
          "HPWBM", 
          t('water_base_page.table_2_data_1_description'), 
          t('water_base_page.table_2_data_1_application')
        ],
        [
          t('water_base_page.table_2_data_2_trade_name'), 
          "HPWBM", 
          t('water_base_page.table_2_data_2_description'), 
          t('water_base_page.table_2_data_2_application')
        ],
      ]
    },
    {
      title: t('water_base_page.table_3_title'),
      headers: [
        t('water_base_page.table_headers_trade_name'),
        t('water_base_page.table_headers_fluid_type'),
        t('water_base_page.table_headers_systems_description'),
        t('water_base_page.table_headers_application')
      ],
      data: [
        [
          t('water_base_page.table_3_data_1_trade_name'), 
          "HPWBM", 
          t('water_base_page.table_3_data_1_description'), 
          t('water_base_page.table_3_data_1_application')
        ],
      ]
    }
  ];

  return (
    <div className="bg-gray-50">
      {/* NonaqueousPage-dən köçürülən animasiyalı başlıq bloğu */}
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
                src={obm2} 
                alt={t('activities.water_base')} 
                className="w-full h-64 object-cover" 
              />
              <div className="p-6">
                <p className="text-gray-700 leading-relaxed">
                  {t('water_base_page.description')}
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-12"
            >
              {tableData.map((table, index) => (
                <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden">
                  <div className="px-6 py-4 border-b border-gray-200">
                    <h2 className="text-2xl font-bold text-gray-800">{table.title}</h2>
                  </div>
                  <div className="p-6">
                    <ResponsiveTable headers={table.headers} data={table.data} />
                  </div>
                </div>
              ))}
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
        <FiArrowUp size={24}/>
      </button>
    </div>
  );
};

export default WaterBasePage;