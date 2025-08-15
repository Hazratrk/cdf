// client/src/pages/HomePage.jsx
import React from 'react';
import HomeSlider from './HomeSlider';
import AboutSection from '../components/HomePage/AboutSection'; // 1. Yeni komponenti import edin
// ... digər importlar

const HomePage = () => {
  return (
    <div className="bg-white">
      <HomeSlider />

      {/* 2. Köhnə "Who We Are" section-ı silib, bunu əlavə edin */}
      <AboutSection />

      {/* Səhifənin digər section-ları burada davam edir... */}
      {/* <ActivitiesSection /> */}
      {/* <MissionSection /> */}
    </div>
  );
};

export default HomePage;