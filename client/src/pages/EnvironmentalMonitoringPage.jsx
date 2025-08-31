import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowUp } from 'react-icons/fi';
import ContactSidebar from '../../src/components/common/ContactSidebar';
import { useTranslation } from 'react-i18next';
import Header from '../../src/components/common/Header';
import Footer from '../../src/components/common/Footer';


import hse1Image from '../assets/img/hse1.jpg';

const EnvironmentalMonitoringPage = () => {
    const { t } = useTranslation('hse');

    return (
        <>
            <Header />
            <div className="bg-white">
                <div className="container mx-auto max-w-7xl py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                 
                        <div className="lg:col-span-2">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8 }}
                            >
                                <img 
                                    src={hse1Image} 
                                    alt={t('environmental_monitoring')} 
                                    className="w-full h-auto rounded-lg shadow-lg mb-10" 
                                />
                                <div className="text-gray-700 space-y-6">
                                    <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-800 mb-6">{t('environmental_monitoring')}</h1>
                                    <p className="text-lg leading-relaxed">
                                        The main environmental activity of CDF in the sphere of environmental monitoring has been to carry out quantitative and qualitative monitoring of harmful wastes in liquid and solid forms emitted to the environment as a result of natural and anthropogenic impacts at industry and partnering companies, implementing regular control and research system defining their chemical content, degree of contamination, radioactive and hydro-biological features and physical characteristics.
                                    </p>
                                    <div className="mt-8">
                                        <a 
                                        href="/certificates/hse2.pdf" 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className="inline-block text-blue-600 hover:text-blue-800 font-semibold text-lg transition-colors duration-200"
                                        >
                                            Environmental Policy
                                        </a>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                       
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <ContactSidebar />
                        </motion.div>
                    </div>
                </div>
            </div>
            <button 
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} 
                className="fixed bottom-6 right-6 bg-blue-600 text-white rounded-full h-12 w-12 flex items-center justify-center hover:bg-blue-700 transition-colors shadow-lg z-40"
                aria-label="Scroll to top"
            >
                <FiArrowUp size={24}/>
            </button>
            <Footer />
        </>
    );
};

export default EnvironmentalMonitoringPage;