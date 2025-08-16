// src/components/common/ServiceCard.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

const ServiceCard = ({ title, image, link }) => {
  return (
    <Link to={link}>
      <motion.div
        variants={fadeIn}
        className="group relative h-80 rounded-lg overflow-hidden shadow-md"
      >
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
        <div className="absolute bottom-0 left-0 p-6">
          <h3 className="text-white text-2xl font-bold leading-tight transition-colors duration-300 group-hover:text-blue-400">{title}</h3>
        </div>
      </motion.div>
    </Link>
  );
};

export default ServiceCard;