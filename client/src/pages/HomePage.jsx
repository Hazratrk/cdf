// client/src/pages/HomePage.jsx
import React from 'react';
import HomeSlider from './HomeSlider';
import AboutSection from '../components/HomePage/AboutSection';
import ActivitiesSection from '../components/HomePage/ActivitiesSection';
import VideoSection from '../components/HomePage/VideoSection';
import MissionSection from '../components/HomePage/MissionSection';
import HseSection from '../components/HomePage/HseSection';
import ProductsSection from '../components/HomePage/ProductsSection'; 
import { useTranslation } from 'react-i18next';

const HomePage = () => {
  return (
    <div className="bg-white">
      <HomeSlider />
      <AboutSection />
      <ActivitiesSection />
      <VideoSection />
      <MissionSection />
      <HseSection />
      

      <ProductsSection />

    </div>
  );
};

export default HomePage;