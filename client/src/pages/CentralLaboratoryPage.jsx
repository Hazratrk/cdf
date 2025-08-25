// src/pages/CentralLaboratoryPage.jsx
import React from 'react';
import { motion } from 'framer-motion';
import ContactSidebar from '../components/common/ContactSidebar';
import { FiArrowUp } from 'react-icons/fi';
import { useTranslation } from 'react-i18next';

const imageUrl = "https://caspiandf.com/wp-content/uploads/2023/02/laboratory.jpg";

const CentralLaboratoryPage = () => {
  return (
    <div className="bg-white">
      <div className="container mx-auto max-w-7xl py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          

          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl font-bold text-gray-800 mb-8">Central Laboratory</h1>
              <img src={imageUrl} alt="Central Laboratory" className="w-full h-auto rounded-lg shadow-lg mb-8" />
              <div className="text-gray-600 text-lg leading-relaxed space-y-6">
                <p>
                  CDF’s Central Laboratory is a key element of the company’s mission to provide its customers with the highest quality of drilling fluids services. The Central Laboratory is equipped with a full suite of state-of-the art equipment, according to API standards, for testing drilling and completion fluids.
                </p>
                <p>
                  Central laboratory is a basis for scientific research and development, and is engaged in drilling fluid formulation optimization, new products and fluid systems development and qualification.
                </p>
                <p>
                  The main functions of the Central Laboratory are:
                </p>
                <ul className="list-disc list-inside space-y-2 pl-4">
                    <li>Full testing of drilling fluids parameters</li>
                    <li>Full testing of completion fluids parameters</li>
                    <li>Quality control of chemicals and materials supplied</li>
                    <li>New drilling fluid formulation and system development</li>
                    <li>Drilling fluid formulation optimization</li>
                    <li>Testing of various types of polymers, lubricants and other chemicals</li>
                    <li>Preparing of drilling and completion fluid programs</li>
                </ul>
              </div>
            </motion.div>
          </div>


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

export default CentralLaboratoryPage;