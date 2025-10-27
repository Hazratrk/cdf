import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiDownload, FiAward, FiFileText, FiX } from 'react-icons/fi';
import { useTranslation } from 'react-i18next';

import iso1 from '../assets/img/iso1.png';
import iso2 from '../assets/img/iso2.png';
import iso3 from '../assets/img/iso3.png';
import iso4 from '../assets/img/iso4.png';
import quality1 from '../assets/img/quanity1.jpg';
import quality2 from '../assets/img/quanity2.jpg';
import quality3 from '../assets/img/quanity3.jpg';
import backgroundImage from '../assets/img/products2.jpg';

import iso1Pdf from '../assets/img/certificates/iso1.pdf';
import iso2Pdf from '../assets/img/certificates/iso2.pdf';
import iso3Pdf from '../assets/img/certificates/iso3.pdf';
import iso4Pdf from '../assets/img/certificates/iso4.pdf';
import quality1Pdf from '../assets/quanity/quanity1.pdf';
import quality2Pdf from '../assets/quanity/quanity2.pdf';
import quality3Pdf from '../assets/quanity/quanity3.pdf';

const QualityandConformity = () => {
  const { t } = useTranslation();
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeTab, setActiveTab] = useState('certificates');

  const certificates = [
    {
      id: 1,
      image: iso2,
      pdf: iso2Pdf,
      title: "ISO 9001:2015"
    },
    {
      id: 2,
      image: iso4,
      pdf: iso3Pdf,
      title: "ISO 14001:2015"
    },
    {
      id: 3,
      image: iso1,
      pdf: iso1Pdf,
      title: "ISO 45001:2018"
    },
    {
      id: 4,
      image: iso3,
      pdf: iso4Pdf,
      title: "API Spec Q2"
    }
  ];

  const policies = [
    {
      id: 1,
      image: quality1,
      pdf: quality3Pdf,
      title: t('quality.policies.qualityPolicy')
    },
    {
      id: 2,
      image: quality3,
      pdf: quality1Pdf,
      title: t('quality.policies.environmentalPolicy')
    },
    {
      id: 3,
      image: quality2,
      pdf: quality2Pdf,
      title: t('quality.policies.healthSafetyPolicy')
    }
  ];

  const handlePdfDownload = (pdfFile, fileName) => {
    const link = document.createElement('a');
    link.href = pdfFile;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div
      className="min-h-screen bg-gray-900 pt-24 pb-16 relative overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl font-bold text-white mb-6 tracking-tight">
            {t('quality.pageTitle')}
          </h1>
          <div className="w-32 h-1.5 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto mb-6 rounded-full"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            {t('quality.pageSubtitle')}
          </p>
        </motion.div>

        {/* Tabs */}
        <motion.div
          className="flex justify-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl border border-white/20 p-2">
            <button
              onClick={() => setActiveTab('certificates')}
              className={`px-12 py-5 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 ${
                activeTab === 'certificates'
                  ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg'
                  : 'text-gray-300 hover:text-white hover:bg-white/5'
              }`}
            >
              <div className="flex items-center space-x-3">
                <FiAward className="text-2xl" />
                <span className="text-xl">{t('quality.tabs.certificates')}</span>
              </div>
            </button>
            <button
              onClick={() => setActiveTab('policies')}
              className={`px-12 py-5 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 ${
                activeTab === 'policies'
                  ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg'
                  : 'text-gray-300 hover:text-white hover:bg-white/5'
              }`}
            >
              <div className="flex items-center space-x-3">
                <FiFileText className="text-2xl" />
                <span className="text-xl">{t('quality.tabs.policies')}</span>
              </div>
            </button>
          </div>
        </motion.div>


        <div className="max-w-7xl mx-auto">
          <AnimatePresence mode="wait">
            {activeTab === 'certificates' && (
              <motion.div
                key="certificates"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {certificates.map((cert, index) => (
                    <motion.div
                      key={cert.id}
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="group"
                    >
                      <div className="bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl border border-white/20 overflow-hidden hover:scale-[1.02] transition-all duration-300">
                        <div
                          className="p-8 cursor-pointer bg-gradient-to-br from-white/5 to-white/10 border-b border-white/10"
                          onClick={() => setSelectedImage(cert.image)}
                        >
                          <img
                            src={cert.image}
                            alt={cert.title}
                            className="w-full h-80 object-contain p-4 transition-transform duration-300 group-hover:scale-105"
                          />
                        </div>
                        <div className="p-8">
                          <h3 className="text-2xl font-bold text-white mb-6 text-center">{cert.title}</h3>
                          <button
                            onClick={() => handlePdfDownload(cert.pdf, `${cert.title}.pdf`)}
                            className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white py-4 px-6 rounded-xl font-bold flex items-center justify-center space-x-3"
                          >
                            <FiDownload className="text-xl" />
                            <span>{t('quality.buttons.downloadPdf')}</span>
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {activeTab === 'policies' && (
              <motion.div
                key="policies"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
              >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {policies.map((policy, index) => (
                    <motion.div
                      key={policy.id}
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="group"
                    >
                      <div className="bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl border border-white/20 overflow-hidden hover:scale-[1.02] transition-all duration-300 flex flex-col h-full">
                        <div
                          className="p-8 cursor-pointer bg-gradient-to-br from-white/5 to-white/10 border-b border-white/10 flex-1"
                          onClick={() => setSelectedImage(policy.image)}
                        >
                          <img
                            src={policy.image}
                            alt={policy.title}
                            className="w-full h-72 object-contain p-4 transition-transform duration-300 group-hover:scale-105"
                          />
                        </div>
                        <div className="p-8 flex flex-col flex-1">
                          <h3 className="text-xl font-bold text-white mb-6 text-center min-h-[5rem] flex items-center justify-center leading-relaxed">
                            {policy.title}
                          </h3>
                          <button
                            onClick={() => handlePdfDownload(policy.pdf, `${policy.title}.pdf`)}
                            className="w-full bg-gradient-to-r from-green-600 to-emerald-500 hover:from-green-700 hover:to-emerald-600 text-white py-4 px-6 rounded-xl font-bold flex items-center justify-center space-x-3 mt-auto"
                          >
                            <FiDownload className="text-xl" />
                            <span>{t('quality.buttons.downloadDocument')}</span>
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-8"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: 'spring', damping: 25 }}
              className="relative max-w-6xl max-h-full"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="bg-white/5 backdrop-blur-md rounded-2xl border border-white/20 p-6">
                <img
                  src={selectedImage}
                  alt={t('quality.modal.altText')}
                  className="max-w-full max-h-[85vh] object-contain rounded-lg"
                />
              </div>
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-4 -right-4 bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white rounded-full p-3"
                aria-label={t('quality.modal.close')}
              >
                <FiX className="text-2xl" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default QualityandConformity;