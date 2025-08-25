// src/pages/DrillingSoftwarePage.jsx
import React from 'react';
import { motion } from 'framer-motion';
import ContactSidebar from '../components/common/ContactSidebar';
import { FiArrowUp } from 'react-icons/fi';
import { useTranslation } from 'react-i18next';

const imageUrl = "https://media.licdn.com/dms/image/v2/C4E12AQE7qgEEwTN1fg/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1520228627306?e=2147483647&v=beta&t=Nlg8ymsw8W9U0QX_5plkaSnvAvgSBVaVbelB-CbVGpg";

const DrillingSoftwarePage = () => {
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
              <img src={imageUrl} alt="Drilling Fluids Simulation Software" className="w-full h-auto rounded-lg shadow-lg mb-8" />
              
              
              <div className="text-gray-600 text-lg leading-relaxed space-y-6">
                <h1 className="text-4xl font-bold text-gray-800 mb-6">Drilling Fluids Simulation Software</h1>
                <p>
                  We offer a wide range of drilling fluids engineering solutions to cover our client’s engineering and operational requirements in their drilling activities.
                </p>
                <p>
                  Our expert engineers can add value for your projects by providing the following services.
                </p>
                <ul className="list-disc list-inside space-y-2 pl-4">
                    <li>Drilling Fluids Engineering</li>
                    <li>Program Completion and workover</li>
                    <li>Fluids Design Hydraulic and Hole Cleaning Design</li>
                    <li>Wellbore Stability Study</li>
                    <li>Drilling Problem Investigation</li>
                    <li>Final Well Report and Recap</li>
                    <li>Advance Technologies and Applications</li>
                    <li>Total Fluids Management Project Operational Management Project</li>
                    <li>Benchmarking and Performance Evaluation</li>
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

export default DrillingSoftwarePage;