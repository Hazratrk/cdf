// src/pages/ActivitiesPage.jsx
import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { activities } from '../data/activitiesData'; 
import ServiceCard from '../components/common/ServiceCard';
import { FiSearch } from 'react-icons/fi';

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    }
  }
};

const ActivitiesPage = () => {
  const [searchQuery, setSearchQuery] = useState('');


  const filteredActivities = useMemo(() => 
    activities.filter(activity =>
      activity.title.toLowerCase().includes(searchQuery.toLowerCase())
    ), 
    [searchQuery]
  );

  return (
    <div className="bg-white">
  
      <div className="bg-gray-50 pt-24 pb-16 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl font-extrabold text-gray-800"
        >
          Our Activities
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-4 text-lg text-gray-500"
        >
          Comprehensive solutions for the oil and gas industry
        </motion.p>
      </div>

    
      <div className="bg-gray-50 pb-20 px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="container mx-auto max-w-2xl"
        >
          <div className="relative">
            <input
              type="text"
              placeholder="Search for an activity..."
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
            {filteredActivities.length > 0 ? (
              filteredActivities.map((activity, index) => (
                <ServiceCard 
                  key={activity.link} // Daha stabil key
                  title={activity.title}
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
                <p className="text-xl text-gray-500">No activities found matching your search.</p>
              </motion.div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ActivitiesPage;