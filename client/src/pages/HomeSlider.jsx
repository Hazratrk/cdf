import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import cdf1 from '../assets/img/cdf1.jpg';
import cdf2 from '../assets/img/cdf2.jpg';
import cdf3 from '../assets/img/cdf3.jpeg';

const HomeSlider = () => {
  const { t } = useTranslation();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [direction, setDirection] = useState(0);

  const slides = [
    {
      title: t('slider.title_1'),
      subtitle: t('slider.subtitle_1'),
      heading: t('slider.heading_1'),
      description: t('slider.description_1'),
      page: "01",
      image: cdf1
    },
    {
      title: t('slider.title_2'),
      subtitle: t('slider.subtitle_2'),
      heading: t('slider.heading_2'),
      description: t('slider.description_2'),
      page: "02",
      image: cdf2
    },
    {
      title: t('slider.title_3'),
      subtitle: t('slider.subtitle_3'),
      heading: t('slider.heading_3'),
      description: t('slider.description_3'),
      page: "03",
      image: cdf3
    }
  ];

  useEffect(() => {
    let interval;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setDirection(1);
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 6000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying, slides.length]);

  const goToSlide = (index) => {
    setDirection(index > currentSlide ? 1 : -1);
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const nextSlide = () => {
    setDirection(1);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 1.1
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.9
    })
  };

  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="relative w-full h-screen overflow-hidden bg-[#0f172a]">
      <Link to="/about" className="absolute inset-0 z-10 cursor-pointer" aria-label="Go to About Us page"></Link>
      
      {/* Background Image with Animation */}
      <AnimatePresence custom={direction} mode="wait">
        <motion.div
          key={currentSlide}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.8 },
            scale: { duration: 1.2 }
          }}
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${slides[currentSlide].image})`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#0f172a]/80 via-[#0f172a]/60 to-[#0f172a]/90"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/90 via-transparent to-[#0f172a]/80"></div>
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-20 flex items-center h-full">
        <div className="container mx-auto px-6 lg:px-12 xl:px-24">
          <div className="max-w-4xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                variants={textVariants}
                initial="hidden"
                animate="visible"
                className="text-white"
              >
                {/* Title and Subtitle */}
                <motion.div variants={itemVariants} className="mb-6">
                  <h2 className="text-xl md:text-2xl font-light text-cyan-400 mb-2 tracking-wide">
                    {slides[currentSlide].title}
                  </h2>
                  <h3 className="text-2xl md:text-3xl font-semibold text-white">
                    {slides[currentSlide].subtitle}
                  </h3>
                </motion.div>

                {/* Divider */}
                <motion.div 
                  variants={itemVariants}
                  className="h-0.5 w-20 bg-gradient-to-r from-cyan-400 to-blue-500 my-8 rounded-full"
                ></motion.div>

                {/* Main Heading */}
                <motion.h1 
                  variants={itemVariants}
                  className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
                >
                  {slides[currentSlide].heading}
                </motion.h1>

                {/* Description */}
                <motion.p 
                  variants={itemVariants}
                  className="text-lg md:text-xl lg:text-2xl text-gray-200 mb-12 max-w-3xl leading-relaxed font-light"
                >
                  {slides[currentSlide].description}
                </motion.p>

                {/* Navigation and Controls */}
                <motion.div 
                  variants={itemVariants}
                  className="flex items-center justify-between"
                >
                  <div className="flex items-center space-x-8">
                    {/* Slide Numbers */}
                    <div className="flex items-center space-x-2">
                      <span className="text-2xl font-bold text-cyan-400">
                        {slides[currentSlide].page}
                      </span>
                      <span className="text-gray-400 text-lg">/</span>
                      <span className="text-gray-400 text-lg">{slides.length.toString().padStart(2, '0')}</span>
                    </div>

                    {/* Dots Indicator */}
                    <div className="flex space-x-3 relative z-40">
                      {slides.map((_, index) => (
                        <button
                          key={index}
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            goToSlide(index);
                          }}
                          className={`w-3 h-3 rounded-full transition-all duration-300 ${
                            currentSlide === index 
                              ? 'bg-cyan-400 scale-125' 
                              : 'bg-white/30 hover:bg-white/50'
                          }`}
                          aria-label={`Go to slide ${index + 1}`}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Navigation Arrows */}
                  <div className="flex space-x-4 relative z-40">
                    <button 
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        prevSlide();
                      }}
                      className="p-3 rounded-full border border-white/30 hover:border-cyan-400 hover:bg-cyan-400/10 transition-all duration-300 group"
                      aria-label="Previous slide"
                    >
                      <svg className="w-6 h-6 text-white group-hover:text-cyan-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                    </button>
                    <button 
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        nextSlide();
                      }}
                      className="p-3 rounded-full border border-white/30 hover:border-cyan-400 hover:bg-cyan-400/10 transition-all duration-300 group"
                      aria-label="Next slide"
                    >
                      <svg className="w-6 h-6 text-white group-hover:text-cyan-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-white/10 z-30">
        <motion.div
          key={currentSlide}
          className="h-full bg-gradient-to-r from-cyan-400 to-blue-500"
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 6, ease: "linear" }}
        />
      </div>
    </div>
  );
};

export default HomeSlider;