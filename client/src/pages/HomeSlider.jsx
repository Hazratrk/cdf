import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import cdf1 from '../assets/img/cdf1.jpg';
import cdf2 from '../assets/img/cdf2.jpg';
import cdf3 from '../assets/img/cdf3.jpeg';

const HomeSlider = () => {
  const { t } = useTranslation();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const slides = [
    {
      title: t('slider.title_1'),
      subtitle: t('slider.subtitle_1'),
      heading: t('slider.heading_1'),
      description: t('slider.description_1'),
      page: "01 / 03",
      image: cdf1
    },
    {
      title: t('slider.title_2'),
      subtitle: t('slider.subtitle_2'),
      heading: t('slider.heading_2'),
      description: t('slider.description_2'),
      page: "02 / 03",
      image: cdf2
    },
    {
      title: t('slider.title_3'),
      subtitle: t('slider.subtitle_3'),
      heading: t('slider.heading_3'),
      description: t('slider.description_3'),
      page: "03 / 03",
      image: cdf3
    }
  ];

  useEffect(() => {
    let interval;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying, slides.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 8000);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 8000);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 8000);
  };

  return (
    <div className="relative w-full h-screen overflow-hidden bg-[#0b0d27]">
      <Link to="/about" className="absolute inset-0 z-10" aria-label="Go to About Us page"></Link>
      
      <div 
        className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000"
        style={{
          backgroundImage: `url(${slides[currentSlide].image})`,
          opacity: 0.7
        }}
      ></div>
      <div className="absolute inset-0 bg-black/30"></div>
      <div className="relative z-20 flex flex-col justify-center h-full text-white px-8 md:px-16 lg:px-32">
        <div className="max-w-4xl">
          <h2 className="text-xl md:text-2xl font-light mb-2">{slides[currentSlide].title}</h2>
          <h3 className="text-2xl md:text-3xl font-bold mb-6">{slides[currentSlide].subtitle}</h3>
          
          <div className="h-px w-16 bg-white my-6"></div>
          
          <h1 className="text-3xl md:text-5xl font-bold mb-4 uppercase">{slides[currentSlide].heading}</h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl">{slides[currentSlide].description}</p>
          
          <div className="flex items-center">
            <span className="text-sm">{slides[currentSlide].page}</span>
            <div className="flex ml-8 space-x-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full ${currentSlide === index ? 'bg-white' : 'bg-white/50'}`}
                  aria-label={`Go to slide ${index + 1}`}
                ></button>
              ))}
            </div>
          </div>
        </div>
      </div>
      <button 
        onClick={prevSlide}
        className="absolute left-4 md:left-8 top-1/2 transform -translate-y-1/2 z-20 text-white hover:text-gray-300 transition-colors"
        aria-label="Previous slide"
      >
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button 
        onClick={nextSlide}
        className="absolute right-4 md:right-8 top-1/2 transform -translate-y-1/2 z-20 text-white hover:text-gray-300 transition-colors"
        aria-label="Next slide"
      >
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
};

export default HomeSlider;