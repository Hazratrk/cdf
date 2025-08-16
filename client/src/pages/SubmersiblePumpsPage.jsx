// src/pages/SubmersiblePumpsPage.jsx
import React from 'react';
import { motion } from 'framer-motion';
import ContactSidebar from '../components/common/ContactSidebar';
import { FiArrowUp } from 'react-icons/fi';


const imageUrl = "https://media.licdn.com/dms/image/v2/D5605AQEY4TMRwQ1cfw/videocover-low/B56ZeHkh9VG0B0-/0/1750326242265?e=2147483647&v=beta&t=PdTTJv4Nu8rkHVHPl1jvF6r073VK9HmgPO1t81x_9lE";

const SubmersiblePumpsPage = () => {
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
              <h1 className="text-4xl font-bold text-gray-800 mb-8">Submersible Electric Centrifugal Pumps and Submersible Electric Motors for ESP drive (EVN)</h1>
              <img src={imageUrl} alt="Submersible Electric Centrifugal Pumps" className="w-full h-auto rounded-lg shadow-lg mb-8" />
              <div className="text-gray-600 text-lg leading-relaxed space-y-6">
                <p>
                  As per client’s request, CDF can supply submersible electric centrifugal pumps and submersible electric motors for driving ESP (EVN), produced by LLC LUKOIL-EPV-Service.
                </p>
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

export default SubmersiblePumpsPage;