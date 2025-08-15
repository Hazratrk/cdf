// src/components/HomePage/VideoSection.jsx

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPlay } from 'react-icons/fa';
import { FiX } from 'react-icons/fi';


const videoBgImageUrl = 'https://www.newpark.com/assets/images/content/Wyoming_case_study_x2_1.jpg';

const VideoSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const videoId = '33voqnPnsss'; 

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <section 
        className="relative py-40 px-4 sm:px-6 lg:px-8 bg-cover bg-center bg-fixed text-white"
        style={{ backgroundImage: `url(${videoBgImageUrl})` }} 
      >
        <div className="absolute inset-0 bg-gray-900 opacity-60"></div>
        <div className="relative container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <h3 className="text-sm font-semibold tracking-widest uppercase">PROJECT MANAGEMENT</h3>
            <h2 className="text-4xl lg:text-5xl font-bold mt-4 mb-8">Project Management Services</h2>
            <button
              onClick={openModal}
              className="group w-24 h-24 rounded-full bg-white/20 hover:bg-white/90 border-2 border-white flex items-center justify-center mx-auto transition-all duration-300"
              aria-label="Play Video"
            >
              <FaPlay className="text-white text-3xl transform group-hover:text-blue-600 transition-colors duration-300" />
            </button>
          </motion.div>
        </div>
      </section>

      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()} 
              className="relative w-full max-w-4xl aspect-video bg-black rounded-lg shadow-2xl"
            >
              <button
                onClick={closeModal}
                className="absolute -top-3 -right-3 w-10 h-10 bg-white rounded-full flex items-center justify-center text-black z-10 hover:scale-110 transition-transform"
                aria-label="Close Video"
              >
                <FiX size={24}/>
              </button>
              <iframe
                className="absolute top-0 left-0 w-full h-full rounded-lg"
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default VideoSection;