// src/components/HomePage/ActivityCard.jsx

import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';
import { useTranslation } from 'react-i18next';

const cardVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 90,
      damping: 14,
    },
  },
};

const ActivityCard = ({ icon, title, description, link }) => {
  return (
    <motion.div
      variants={cardVariants}
      className="group relative bg-white p-10 h-full flex flex-col transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/10 rounded-xl"
    >
   
      <div className="text-blue-600 mb-8">
        {icon}
      </div>

    
      <div className="flex-grow">
        <h3 className="text-2xl font-bold text-gray-800 mb-4 leading-tight">{title}</h3>
        <p className="text-gray-500 text-base leading-relaxed">{description}</p>
      </div>
      
     
      <Link to={link} className="mt-8">
        <div className="inline-flex items-center text-gray-400 group-hover:text-blue-600 transition-colors duration-300">
          <FiArrowRight className="text-3xl transform transition-transform duration-300 ease-in-out group-hover:translate-x-2" />
        </div>
  
        <span className="absolute inset-0" aria-hidden="true"></span>
      </Link>
    </motion.div>
  );
};

export default ActivityCard;