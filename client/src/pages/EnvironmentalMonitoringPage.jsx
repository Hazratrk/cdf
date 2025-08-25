// src/pages/EnvironmentalMonitoringPage.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowUp } from 'react-icons/fi';
import ContactSidebar from '../components/common/ContactSidebar';
import { useTranslation } from 'react-i18next';

const imageUrl = "https://www.seslial.com/static/uploads/resim/urun/orjinal/acikogretim-sermaye-piyasalari-ve-finansal-kurumlar-soru-bankasi-1-084681700-1420020203.jpeg";

const EnvironmentalMonitoringPage = () => {
  return (
    <div className="bg-white">
      <div className="container mx-auto max-w-7xl py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

          {/* Left Column: Main Content */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <img src={imageUrl} alt="Environmental Monitoring" className="w-full h-auto rounded-lg shadow-lg mb-10" />
              <div className="text-gray-700 space-y-6">
                <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-800 mb-6">Employees’ Security</h1>
                
                {/* --- UPDATED TEXT STARTS HERE --- */}
                <p className="text-lg leading-relaxed">
                In CDF employees’ health and safety is given first priority in the activity and management of labour protection. Main objective in the works on the system for management of labour protection is to create safe and sound labour condition to increase the effectiveness of production improve product quality and ensure the protection of employees’ health and working capacity in the process of work.
                </p>
                {/* --- UPDATED TEXT ENDS HERE --- */}

              </div>
            </motion.div>
          </div>

          {/* Right Column: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
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

export default EnvironmentalMonitoringPage;