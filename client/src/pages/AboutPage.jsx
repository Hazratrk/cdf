import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Cog, Truck, Droplet, FlaskConical } from 'lucide-react';
import CountUp from 'react-countup';
import { InView } from 'react-intersection-observer';
import { useTranslation } from 'react-i18next';


import iso1 from '../assets/img/iso1.png';
import iso2 from '../assets/img/iso2.png';
import iso3 from '../assets/img/iso3.png';
import iso4 from '../assets/img/iso4.png';
import lab1 from '../assets/img/lab1.jpg';
import lab2 from '../assets/img/lab2.jpg';
import worker1 from '../assets/img/worker1.jpg';
import cdfVideo from '../assets/img/cdf1.mp4';


const AboutPage = () => {
  const { t } = useTranslation();


  const certificates = [
    { image: iso1, title: 'ISO 9001' },
    { image: iso2, title: 'ISO 14001' },
    { image: iso3, title: 'API Q2' },
    { image: iso4, title: 'ISO 45001' },
  ];


  return (
    <div>
      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      
          <div className="grid grid-cols-2 gap-4">
            <img src={lab1} alt="" className="rounded-xl shadow-lg hover:scale-105 transition-transform duration-500" />
            <img src={lab2} alt="" className="rounded-xl shadow-lg hover:scale-105 transition-transform duration-500" />
          </div>


          <div>
            <h2 className="text-4xl font-bold text-[#0a0d25] mb-6">{t('about_us.title')}</h2>
            <p className="text-lg text-gray-700 leading-relaxed">{t('about_us.about_company')}</p>
            <p className="text-lg text-gray-700 leading-relaxed mt-4">{t('about_us.description_1')}</p>
            <p className="text-lg text-gray-700 leading-relaxed mt-4">{t('about_us.description_2')}</p>


            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="space-y-2">
                <a href="/certificates/iso1.pdf" target="_blank" className="text-cyan-600 hover:underline font-medium">ISO 9001</a>
                <a href="/certificates/iso2.pdf" target="_blank" className="text-cyan-600 hover:underline font-medium block">ISO 14001</a>
              </div>
              <div className="space-y-2">
                <a href="/certificates/iso3.pdf" target="_blank" className="text-cyan-600 hover:underline font-medium">API Q2</a>
                <a href="/certificates/iso4.pdf" target="_blank" className="text-cyan-600 hover:underline font-medium block">ISO 45001</a>
              </div>
            </div>
          </div>
        </div>
      </div>


      <section className="py-20 bg-[#0d101d]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-12">{t('about_page.certificates_title')}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {certificates.map((cert, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-[#1a1d2e] to-[#22263d] p-6 rounded-2xl shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-500"
              >
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-[300px] sm:h-[350px] md:h-[300px] object-cover rounded-xl border border-white/10"
                />
                <h3 className="mt-4 text-lg font-semibold text-white">{cert.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      
      <section className="py-24 bg-[#0b0e1a]">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-white mb-12">{t('about_us.title')}</h2>
          <div className="relative w-full max-w-6xl mx-auto rounded-3xl overflow-hidden shadow-2xl">
            <video
              className="w-full h-[700px] object-cover"
              controls
              loop
              autoPlay
              muted
            >
              <source src={cdfVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 mt-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {[
            { icon: <Cog className="w-12 h-12 text-cyan-400/80" />, title: t('activities.engineering_services'), link: '/activities/engineering-services' },
            { icon: <Truck className="w-12 h-12 text-cyan-400/80" />, title: t('activities.logistic_services'), link: '/activities/logistic-services' },
            { icon: <Droplet className="w-12 h-12 text-cyan-400/80" />, title: t('activities.water_base_drilling_fluids'), link: '/activities/water-base-drilling-fluids' },
            { icon: <FlaskConical className="w-12 h-12 text-cyan-400/80" />, title: t('activities.nonaqueous_drilling_fluids_obm'), link: '/activities/nonaqueous-drilling-fluids-obm' },
          ].map((item, i) => (
            <Link key={i} to={item.link} className="bg-[#121631] p-8 rounded-xl shadow-lg hover:shadow-cyan-500/50 border border-transparent hover:border-cyan-400 transition-all duration-500 flex flex-col space-y-6 group">
              <div className="group-hover:scale-110 transition-transform duration-300">{item.icon}</div>
              <h4 className="text-xl font-medium text-white/90 group-hover:text-cyan-400">{item.title}</h4>
              <ArrowRight className="w-6 h-6 text-cyan-400/80 group-hover:translate-x-2 transition-transform duration-300" />
            </Link>
          ))}
        </div>
      </div>

      
      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">{t('about_page.best_in_the_world_title')}</h2>
            <p className="text-lg text-gray-700 leading-relaxed">{t('about_page.best_in_the_world_text')}</p>
            <img src={worker1} alt="" className="w-full h-auto mt-10 rounded-xl shadow-lg" />
          </div>

     
          <div className="grid grid-cols-2 gap-10 text-center">
            {[
              { value: 89, suffix: '%', label: t('about_page.stats_cases_solved') },
              { value: 2512, label: t('about_page.stats_projects') },
              { value: 93, suffix: '%', label: t('about_page.stats_happy_clients') },
              { value: 95, suffix: '%', label: t('about_page.stats_yearly_profit') },
            ].map((stat, i) => (
              <div key={i} className="flex flex-col items-center">
                <InView threshold={0.5} triggerOnce>
                  {({ inView, ref }) => (
                    <div ref={ref} className="text-5xl font-bold text-[#0a0d25]">
                      {inView ? <CountUp end={stat.value} duration={2} /> : "0"}{stat.suffix}
                    </div>
                  )}
                </InView>
                <p className="mt-3 text-lg font-medium text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;