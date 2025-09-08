import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowUp } from 'react-icons/fi';
import ContactSidebar from '../../src/components/common/ContactSidebar';
import { useTranslation } from 'react-i18next';
// Header və Footer importları silindi
// import Header from '../../src/components/common/Header';
// import Footer from '../../src/components/common/Footer';

import hse2Image from '../assets/img/hse2.jpg';

const EmployeesSecurityPage = () => {
    const { t } = useTranslation('hse');

    return (
        <>
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
                                    src={hse2Image} 
                                    alt={t('employees_security')} 
                                    className="w-full h-auto rounded-lg shadow-lg mb-10" 
                                />
                                <div className="text-gray-700 space-y-6">
                                    <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-800 mb-6">
                                      {t('employees_security')}
                                    </h1>
                                    <p className="text-lg leading-relaxed">
                                        {t('employees_security_desc_full')}
                                    </p>
                                    <div className="mt-8">
                                        <a 
                                         href="/certificates/hse1.pdf"
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className="inline-block text-blue-600 hover:text-blue-800 font-semibold text-lg transition-colors duration-200"
                                        >
                                            {t('hs_policy')} {/* Bu açarın i18n.js-də olduğundan əmin olun */}
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
        </>
    );
};

export default EmployeesSecurityPage;