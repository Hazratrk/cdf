// src/pages/AboutPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import CountUp from 'react-countup';
import { InView } from 'react-intersection-observer';
import { useTranslation } from 'react-i18next'; // useTranslation hook-u əlavə edildi

const AboutPage = () => {
  const { t } = useTranslation(); // t funksiyasını əldə etdik
  
  return (
    <div>
      {/* 1. About Company Bölməsi */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Şəkil Hissəsi */}
          <div className="relative">
            <div className="absolute top-0 left-0 w-full h-full bg-cover bg-center rounded-lg" style={{ backgroundImage: 'url("https://caspiandf.com/wp-content/uploads/2023/12/about-us-img.jpg")' }}></div>
            <img 
              src="https://caspiandf.com/wp-content/uploads/2023/12/about-us-img.jpg" 
              alt={t('about_page.image_alt')}
              className="w-full h-auto rounded-lg shadow-lg relative z-10" 
            />
          </div>

          {/* Mətn və Sertifikat Linkləri Hissəsi */}
          <div className="prose max-w-none">
            <h2 className="text-4xl font-semibold mb-6">{t('about_page.about_company_title')}</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              {t('about_page.about_company_text_1')}
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mt-4">
              {t('about_page.about_company_text_2')}
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mt-4">
              {t('about_page.about_company_text_3')}
            </p>
            
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="space-y-2">
                <a href="/certificates/QUALITY-POLICY.pdf" target="_blank" className="text-blue-600 hover:underline font-medium">{t('about_page.quality_policy')}</a>
                <a href="/certificates/FINANCIAL-STATEMENTS-FOR-2022.pdf" target="_blank" className="text-blue-600 hover:underline font-medium block">{t('about_page.financial_statements')}</a>
                <a href="/certificates/API-Q2.pdf" target="_blank" className="text-blue-600 hover:underline font-medium block">{t('about_page.api_q2')}</a>
              </div>
              <div className="space-y-2">
                <a href="/certificates/ISO-9001.pdf" target="_blank" className="text-blue-600 hover:underline font-medium">{t('about_page.iso_9001')}</a>
                <a href="/certificates/ISO-14001.pdf" target="_blank" className="text-blue-600 hover:underline font-medium block">{t('about_page.iso_14001')}</a>
                <a href="/certificates/ISO-45001.pdf" target="_blank" className="text-blue-600 hover:underline font-medium block">{t('about_page.iso_45001')}</a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Sertifikat Şəkilləri Hissəsi */}
        <div className="mt-16">
          <h3 className="text-3xl font-semibold mb-8 text-center">{t('about_page.our_certifications_title')}</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 justify-items-center">
            <div className="p-4 rounded-lg">
              <img
                src="https://www.vemer.it/static/upload/619/619x494_31312.jpg"
                alt={t('about_page.quality_policy_certificate_alt')}
                className="h-full w-full object-contain grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
            <div className="p-4 rounded-lg">
              <img
                src="https://i0.wp.com/aqc.ma/wp-content/uploads/2022/08/q2.png?fit=818%2C858&ssl=1"
                alt={t('about_page.api_q2_certificate_alt')}
                className="h-full w-full object-contain grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
            <div className="p-4 rounded-lg">
              <img
                src="https://ideacdn.net/shop/zr/79/myassets/products/908/sgs-system-certification-iso-9001-2008-gonder-bayrak-beyaz-70x105-cm_min.jpg?revision=1737065347"
                alt={t('about_page.iso_9001_certificate_alt')}
                className="h-full w-full object-contain grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
            <div className="p-4 rounded-lg">
              <img
                src="https://caspiandf.com/wp-content/uploads/2024/04/9001.png"
                alt={t('about_page.iso_9001_certificate_alt_2')}
                className="h-full w-full object-contain grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* 2. Our Vision və Xidmətlər Hissəsi (Tünd Fon) */}
      <div className="bg-[#0a0d25] text-white py-16">
        <div className="container mx-auto px-4">
          {/* Our Vision Bölməsi */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="p-4">
              <p className="text-sm uppercase tracking-wider text-gray-400">{t('about_page.vision_title_short')}</p>
              <h2 className="text-4xl font-semibold mt-2">{t('about_page.our_vision_title')}</h2>
            </div>
            <div className="p-4">
              <p className="text-lg text-gray-300 leading-relaxed">
                {t('about_page.our_vision_text_1')}
              </p>
              <p className="text-lg text-gray-300 leading-relaxed mt-4">
                {t('about_page.our_vision_text_2')}
              </p>
              <p className="text-lg text-gray-300 leading-relaxed mt-4">
                {t('about_page.our_vision_text_3')}
              </p>
            </div>
          </div>

          {/* Video Player Hissəsi */}
          <div className="relative mt-16 pb-[56.25%] h-0 overflow-hidden rounded-lg">
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/PaybpGoghto"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          
          {/* Xidmətlər Blokları */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
            <Link to="/activities/engineering-services" className="bg-[#121631] p-6 rounded-lg shadow-lg flex flex-col justify-between hover:scale-105 transition-transform duration-300">
              <div className="flex flex-col items-start space-y-4">
                <div className="text-3xl text-blue-400">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}><path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.227.141 2.573-1.066z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                </div>
                <h4 className="text-xl font-medium">{t('about_page.engineering_services')}</h4>
                <FaArrowRight className="text-2xl text-white mt-4" />
              </div>
            </Link>

            <Link to="/activities/logistic-services" className="bg-[#121631] p-6 rounded-lg shadow-lg flex flex-col justify-between hover:scale-105 transition-transform duration-300">
              <div className="flex flex-col items-start space-y-4">
                <div className="text-3xl text-blue-400">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}><path strokeLinecap="round" strokeLinejoin="round" d="M12 21.25a2.75 2.75 0 01-2.75-2.75V11a2.75 2.75 0 012.75-2.75h0a2.75 2.75 0 012.75 2.75v7.5a2.75 2.75 0 01-2.75 2.75z" /><path strokeLinecap="round" strokeLinejoin="round" d="M10.25 18.5H13.75" /></svg>
                </div>
                <h4 className="text-xl font-medium">{t('about_page.logistic_services')}</h4>
                <FaArrowRight className="text-2xl text-white mt-4" />
              </div>
            </Link>

            <Link to="/activities/water-base-drilling-fluids" className="bg-[#121631] p-6 rounded-lg shadow-lg flex flex-col justify-between hover:scale-105 transition-transform duration-300">
              <div className="flex flex-col items-start space-y-4">
                <div className="text-3xl text-blue-400">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}><path strokeLinecap="round" strokeLinejoin="round" d="M12 2a10 10 0 100 20 10 10 0 000-20z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 13.5V18a3 3 0 01-6 0v-4.5" /><path strokeLinecap="round" strokeLinejoin="round" d="M12 9v4.5" /></svg>
                </div>
                <h4 className="text-xl font-medium">{t('about_page.water_base_drilling_fluids')}</h4>
                <FaArrowRight className="text-2xl text-white mt-4" />
              </div>
            </Link>

            <Link to="/activities/nonaqueous-drilling-fluids-obm" className="bg-[#121631] p-6 rounded-lg shadow-lg flex flex-col justify-between hover:scale-105 transition-transform duration-300">
              <div className="flex flex-col items-start space-y-4">
                <div className="text-3xl text-blue-400">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}><path strokeLinecap="round" strokeLinejoin="round" d="M12 11h.01M16 11h.01M8 11h.01M12 16h.01M16 16h.01M8 16h.01M12 20a8 8 0 100-16 8 8 0 000 16z" /><path strokeLinecap="round" strokeLinejoin="round" d="M12 21.25a2.75 2.75 0 01-2.75-2.75V11a2.75 2.75 0 012.75-2.75h0a2.75 2.75 0 012.75 2.75v7.5a2.75 2.75 0 01-2.75 2.75z" /></svg>
                </div>
                <h4 className="text-xl font-medium">{t('about_page.nonaqueous_drilling_fluids')}</h4>
                <FaArrowRight className="text-2xl text-white mt-4" />
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* 3. The Best in the World və Statistika Hissəsi */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Mətn və Şəkil Hissəsi */}
          <div>
            <h2 className="text-4xl font-semibold mb-6">{t('about_page.best_in_the_world_title')}</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              {t('about_page.best_in_the_world_text')}
            </p>
            <img
              src="https://media.licdn.com/dms/image/v2/D4E22AQF-fpVB9zPzPw/feedshare-shrink_800/feedshare-shrink_800/0/1706226111666?e=2147483647&v=beta&t=sf7yA-JNRGXBR_nOGLkL03abhAH5mGpHwcXzbH83CJo"
              alt={t('about_page.best_in_the_world_image_alt')}
              className="w-full h-auto mt-8 rounded-lg shadow-lg"
            />
          </div>
          
          {/* Statistika Rəqəmləri Hissəsi */}
          <div className="grid grid-cols-2 gap-8 text-center mt-8 lg:mt-0">
            <div className="flex flex-col items-center">
              <InView threshold={0.5} triggerOnce>
                {({ inView, ref }) => (
                  <div ref={ref} className="text-5xl font-bold text-[#0a0d25]">
                    {inView ? <CountUp end={89} duration={2} /> : "0"}%
                  </div>
                )}
              </InView>
              <p className="mt-2 text-xl font-medium text-gray-600">{t('about_page.stats_cases_solved')}</p>
            </div>

            <div className="flex flex-col items-center">
              <InView threshold={0.5} triggerOnce>
                {({ inView, ref }) => (
                  <div ref={ref} className="text-5xl font-bold text-[#0a0d25]">
                    {inView ? <CountUp end={2512} duration={2} /> : "0"}
                  </div>
                )}
              </InView>
              <p className="mt-2 text-xl font-medium text-gray-600">{t('about_page.stats_projects')}</p>
            </div>

            <div className="flex flex-col items-center">
              <InView threshold={0.5} triggerOnce>
                {({ inView, ref }) => (
                  <div ref={ref} className="text-5xl font-bold text-[#0a0d25]">
                    {inView ? <CountUp end={93} duration={2} /> : "0"}%
                  </div>
                )}
              </InView>
              <p className="mt-2 text-xl font-medium text-gray-600">{t('about_page.stats_happy_clients')}</p>
            </div>

            <div className="flex flex-col items-center">
              <InView threshold={0.5} triggerOnce>
                {({ inView, ref }) => (
                  <div ref={ref} className="text-5xl font-bold text-[#0a0d25]">
                    {inView ? <CountUp end={95} duration={79} /> : "0"}%
                  </div>
                )}
              </InView>
              <p className="mt-2 text-xl font-medium text-gray-600">{t('about_page.stats_yearly_profit')}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;