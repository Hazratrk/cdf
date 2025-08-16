// src/pages/ProjectManagementPage.jsx
import React from 'react';
import { motion } from 'framer-motion';
import ContactSidebar from '../components/common/ContactSidebar';
import { FiArrowUp } from 'react-icons/fi';


const imageUrl = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFecSmzKovlNSSku4RAi0H6-V1xoe_MCgoem5qDonsdIStNRoj0NY6-rddaJ5Pp_m1LKQ&usqp=CAU";

const ProjectManagementPage = () => {
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
              <h1 className="text-4xl font-bold text-gray-800 mb-8">Project Management Services</h1>
              <img src={imageUrl} alt="Project Management Services" className="w-full h-auto rounded-lg shadow-lg mb-8" />
              <div className="text-gray-600 text-lg leading-relaxed space-y-6">
                <p>
                  CDF can provide overall management of your project from beginning to end. CDF can provide a single point of contact to minimize customer interfaces and ensure that all project standards, material specifications, and schedules are met. CDF will ensure that all safety and environmental regulations are followed.
                </p>
                <p className="font-semibold text-gray-700">
                  Our Project Management Services include:
                </p>
                <ul className="list-disc list-inside space-y-2 pl-4">
                    <li>Project planning</li>
                    <li>Cost estimating and project budgeting</li>
                    <li>Management of engineering packages</li>
                    <li>Management of procurement and logistics</li>
                    <li>Vendor selection</li>
                    <li>Construction management</li>
                    <li>Commissioning and start-up</li>
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

export default ProjectManagementPage;