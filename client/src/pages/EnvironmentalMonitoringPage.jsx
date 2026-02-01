import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowUp, FiExternalLink, FiCheckCircle } from 'react-icons/fi';
import { useTranslation } from 'react-i18next';

import ContactSidebar from '../components/common/ContactSidebar';

import hse1Image from '../assets/img/hse1.jpg';
import hse1Pdf from '../assets/img/certificates/hse1.pdf';

const EnvironmentalMonitoringPage = () => {
    const { t } = useTranslation('hse');

    const handleOpenCertificate = () => {
        window.open(hse1Pdf, '_blank', 'noopener,noreferrer');
    };

    return (
        <>
            <div className="bg-gradient-to-b from-gray-50 to-white min-h-screen">
                <div className="container mx-auto max-w-7xl py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        
                        <div className="lg:col-span-2">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8 }}
                                className="space-y-8"
                            >
                                {/* Image */}
                                <div className="relative group">
                                    <img
                                        src={hse1Image}
                                        alt={t('environmental_monitoring')}
                                        className="w-full h-auto rounded-2xl shadow-xl transform group-hover:scale-[1.02] transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                </div>

                                {/* Certificate */}
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: 0.2 }}
                                    className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-8 border border-blue-100 shadow-lg"
                                >
                                    <div className="flex items-start gap-4">
                                        <div className="bg-blue-100 p-3 rounded-full">
                                            <FiCheckCircle className="text-2xl text-blue-600" />
                                        </div>

                                        <div className="flex-1">
                                            <h3 className="text-xl font-bold text-gray-800 mb-2">
                                                {t('certificate_available')}
                                            </h3>

                                            <p className="text-gray-600 mb-4">
                                                {t('certificate_description')}
                                            </p>

                                            <button
                                                onClick={handleOpenCertificate}
                                                type="button"
                                                className="group inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-[1.03] shadow-lg hover:shadow-xl"
                                            >
                                                <FiExternalLink className="text-lg group-hover:rotate-12 transition-transform duration-300" />
                                                <span className="text-lg">
                                                    {t('view_certificate')}
                                                </span>
                                                <span className="text-sm opacity-90">(PDF)</span>
                                            </button>
                                        </div>
                                    </div>
                                </motion.div>

                                {/* Text */}
                                <div className="text-gray-700 space-y-8">
                                    <motion.h1
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.6, delay: 0.3 }}
                                        className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight"
                                    >
                                        {t('environmental_monitoring')}
                                        <div className="w-24 h-1.5 bg-gradient-to-r from-blue-500 to-cyan-400 mt-4 rounded-full" />
                                    </motion.h1>

                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.6, delay: 0.4 }}
                                        className="prose prose-lg max-w-none"
                                    >
                                        <p className="text-xl text-gray-700 leading-relaxed">
                                            {t('environmental_desc_full')}
                                        </p>
                                    </motion.div>
                                </div>
                            </motion.div>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="lg:sticky lg:top-24 h-fit"
                        >
                            <ContactSidebar />
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Scroll to top */}
            <motion.button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="fixed bottom-8 right-8 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-full h-14 w-14 flex items-center justify-center shadow-xl z-40"
                aria-label={t('scroll_to_top')}
                type="button"
            >
                <FiArrowUp size={24} />
            </motion.button>
        </>
    );
};

export default EnvironmentalMonitoringPage;
