// src/components/HomePage/VideoSection.jsx

import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPlay } from 'react-icons/fa';
import { FiX } from 'react-icons/fi';
import { useTranslation } from 'react-i18next'; // Əgər tərcümə lazım olsa

// Yerli video faylını import edin
import cdfVideo from '../../assets/img/cdf1.mp4';
// Fon şəkli üçün ayrıca import edin (ən yaxşı təsir üçün tünd fonlu bir şəkil seçin)
import sectionBg from '../../assets/img/missions1.jpg'; 

const VideoSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const videoRef = useRef(null); // Video elementinə istinad etmək üçün

  const { t } = useTranslation(); // Əgər tərcümə lazım olsa, istifadə edə bilərsiniz

  const openModal = () => {
    setIsModalOpen(true);
    // Modal açıldıqda videonu oynatmağa başlamaq üçün
    // Kiçik bir gecikmə, modalın tam açılmasını gözləmək üçün
    setTimeout(() => {
      videoRef.current?.play();
    }, 100); 
  };

  const closeModal = () => {
    // Modal bağlandıqda videonu dayandırmaq üçün
    videoRef.current?.pause(); 
    setIsModalOpen(false);
  };

  return (
    <>
      {/* Arxa fon şəkli və tündləşdirilmiş örtüklə */}
      <section 
        className="relative py-40 px-4 sm:px-6 lg:px-8 bg-cover bg-center text-white"
        style={{ backgroundImage: `url(${sectionBg})` }} // Arxa fon şəkli
      >
        {/* Tünd örtük */}
        <div className="absolute inset-0 bg-gray-900 opacity-60"></div> 
        
        <div className="relative container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            {/* Bu başlıqları öz layihənizə uyğun dəyişə bilərsiniz */}
            <h3 className="text-sm font-semibold tracking-widest uppercase">PROJECT MANAGEMENT</h3> 
            <h2 className="text-4xl lg:text-5xl font-bold mt-4 mb-8">Project Management Services</h2> 
            
            {/* Play düyməsi */}
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

      {/* Modal pəncərəsi */}
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
              // Video pəncərəsinin ölçüsü və görünüşü
              className="relative w-full max-w-4xl aspect-video bg-black rounded-lg shadow-2xl overflow-hidden" 
            >
              {/* Bağlama düyməsi */}
              <button
                onClick={closeModal}
                className="absolute -top-3 -right-3 w-10 h-10 bg-white rounded-full flex items-center justify-center text-black z-10 hover:scale-110 transition-transform"
                aria-label="Close Video"
              >
                <FiX size={24}/>
              </button>
              
              {/* HTML5 video elementi */}
              <video 
                ref={videoRef} 
                controls 
                autoPlay 
                className="w-full h-full rounded-lg"
                preload="metadata" // Video yüklənmədən əvvəl meta məlumatlarını yükləyir
              >
                <source src={cdfVideo} type="video/mp4" />
                {/* Brauzer video tag-ini dəstəkləmirsə göstəriləcək mətn */}
                Your browser does not support the video tag.
              </video>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default VideoSection;