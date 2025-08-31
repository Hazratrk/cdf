import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';


import EnvironmentalImage from '../assets/img/hse1.jpg';
import EmployeesSecurityImage from '../assets/img/hse2.jpg';

const HsePage = () => {
  const { t } = useTranslation('hse');
  const [searchTerm, setSearchTerm] = useState('');

  const sections = [
    {
      title: t('environmental'),
      desc: t('environmental_desc'),
      image: EnvironmentalImage,
      link: "/hse/environmental-monitoring"
    },
    {
      title: t('employees_security'),
      desc: t('employees_security_desc'),
      image: EmployeesSecurityImage,
      link: "/hse/employees-security"
    }
  ];

  const filteredSections = sections.filter(section =>
    section.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Header />
      <main>
        <section className="container mx-auto px-4 my-16">

          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-blue-900">
              Health, Safety and Environment
            </h1>
            <div className="mt-4">
              <svg
                className="mx-auto w-6 h-6 text-gray-500 animate-bounce"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </div>


          <div className="flex flex-col md:flex-row justify-center items-stretch gap-8 lg:gap-12">
            {filteredSections.length > 0 ? (
              filteredSections.map((section, index) => (
                <div
                  key={index}
                  className="w-full md:w-1/2 max-w-xl bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
                >
                  <Link to={section.link}>
                    <img
                      src={section.image}
                      alt={section.title}
                      className="w-full h-72 object-cover"
                    />
                    <div className="p-6">
                      <h3 className="text-sm tracking-wider text-gray-500 uppercase mb-2">
                        Health, Safety and Environment
                      </h3>
                      <h2 className="text-2xl font-bold text-blue-900 mb-3">
                        {section.title}
                      </h2>
                      <p className="text-gray-600 mb-4">{section.desc}</p>
                      <span className="inline-flex items-center text-blue-700 font-medium hover:underline">
                        Read More →
                      </span>
                    </div>
                  </Link>
                </div>
              ))
            ) : (
              <div className="text-center text-gray-500 text-lg">
                {t('no_results')}
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default HsePage;
