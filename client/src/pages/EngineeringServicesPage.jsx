// src/pages/EngineeringServicesPage.jsx
import React from 'react';
import { motion } from 'framer-motion';
import ContactSidebar from '../components/common/ContactSidebar';
import { FiArrowUp } from 'react-icons/fi';


const imageUrl = "https://media.licdn.com/dms/image/v2/D4E22AQF-fpVB9zPzPw/feedshare-shrink_800/feedshare-shrink_800/0/1706226111666?e=2147483647&v=beta&t=sf7yA-JNRGXBR_nOGLkL03abhAH5mGpHwcXzbH83CJo";

const EngineeringServicesPage = () => {
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
              <h1 className="text-4xl font-bold text-gray-800 mb-8">Engineering Services</h1>
              <img src={imageUrl} alt="Engineering Services" className="w-full h-auto rounded-lg shadow-lg mb-8" />
              <div className="text-gray-600 text-lg leading-relaxed space-y-6">
                <p>
                  The CDF engineering team helps our clients with planning, designing, and building their projects. CDF uses state of the art technology to develop and track engineering packages. Our engineering services include assisting with:
                </p>
                <ul className="list-disc list-inside space-y-2 pl-4">
                    <li>Pre-FEED studies</li>
                    <li>FEED studies</li>
                    <li>Debottlenecking</li>
                    <li>Optimization studies</li>
                    <li>Plant design</li>
                    <li>Upgrades</li>
                    <li>Retrofits</li>
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

export default EngineeringServicesPage;