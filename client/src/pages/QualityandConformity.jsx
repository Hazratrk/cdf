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
      image: iso1,
      pdf: iso1Pdf,
      title: "ISO 45001:2018",
      subtitle: t('quality.certificates.iso45001', 'Occupational Health & Safety')
    },
    {
      id: 2,
      image: iso2,
      pdf: iso2Pdf,
      title: "ISO 9001:2015",
      subtitle: t('quality.certificates.iso9001', 'Quality Management System')
    },
    {
     id: 4,
      image: iso4,
      pdf: iso3Pdf,
      title: "ISO 14001:2015",
      subtitle: t('quality.certificates.iso14001', 'Environmental Management System')
    },
    {
       image: iso3,
      pdf: iso4Pdf,
      title: "API Spec Q2",
      subtitle: t('quality.certificates.apiQ2', 'Quality Management System')
    }
  ];

  const qualityDocuments = [
    {
      id: 1,
      image: quality1,
      pdf: quality1Pdf,
      title: t('quality.documents.qualityPolicy', 'Quality Policy'),
      subtitle: t('quality.documents.qualityPolicyDesc', 'Corporate Policy Document')
    },
    {
      id: 2,
      image: quality2,
      pdf: quality2Pdf,
      title: t('quality.documents.conformityCertificate', 'Conformity Certificate'),
      subtitle: t('quality.documents.conformityCertificateDesc', 'Compliance Verification')
    },
    {
      id: 3,
      image: quality3,
      pdf: quality3Pdf,
      title: t('quality.documents.qualityManual', 'Quality Manual'),
      subtitle: t('quality.documents.qualityManualDesc', 'Management System Guide')
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

  const openImageModal = (image) => {
    setSelectedImage(image);
  };

  const closeImageModal = () => {
    setSelectedImage(null);
  };

  return (
    <div 
      className="min-h-screen bg-gray-900 pt-24 pb-16 relative overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Overlay for better readability */}
      <div className="absolute inset-0 bg-black/50"></div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Enhanced Header Section */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl font-bold text-white mb-6 tracking-tight">
            {t('header.quality', 'Quality & Conformity')}
          </h1>
          <div className="w-32 h-1.5 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto mb-6 rounded-full"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            {t('quality.pageSubtitle', 'Internationally recognized certifications and quality documents that demonstrate our commitment to excellence and regulatory compliance')}
          </p>
        </motion.div>

        {/* Enhanced Navigation Tabs */}
        <motion.div 
          className="flex justify-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl border border-white/20 p-2">
            <button
              onClick={() => setActiveTab('certificates')}
              className={`px-10 py-4 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 ${
                activeTab === 'certificates'
                  ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg'
                  : 'text-gray-300 hover:text-white hover:bg-white/5'
              }`}
            >
              <div className="flex items-center space-x-3">
                <FiAward className="text-xl" />
                <span className="text-lg">
                  {t('quality.tabs.certificates', 'International Certificates')}
                </span>
              </div>
            </button>
            <button
              onClick={() => setActiveTab('quality')}
              className={`px-10 py-4 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 ${
                activeTab === 'quality'
                  ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg'
                  : 'text-gray-300 hover:text-white hover:bg-white/5'
              }`}
            >
              <div className="flex items-center space-x-3">
                <FiFileText className="text-xl" />
                <span className="text-lg">
                  {t('quality.tabs.qualityDocuments', 'Quality Documents')}
                </span>
              </div>
            </button>
          </div>
        </motion.div>

        {/* Content Section */}
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
                      <div className="bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl border border-white/20 overflow-hidden hover:transform hover:scale-[1.02] transition-all duration-300">
                        {/* Image Section */}
                        <div 
                          className="p-8 cursor-pointer bg-gradient-to-br from-white/5 to-white/10 border-b border-white/10"
                          onClick={() => openImageModal(cert.image)}
                        >
                          <div className="relative overflow-hidden rounded-xl bg-white/5">
                            <img
                              src={cert.image}
                              alt={cert.title}
                              className="w-full h-80 object-contain p-4 transition-transform duration-300 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                          </div>
                        </div>
                        
                        {/* Content Section */}
                        <div className="p-8">
                          <h3 className="text-2xl font-bold text-white mb-3">
                            {cert.title}
                          </h3>
                          <p className="text-gray-300 mb-6 text-lg">
                            {cert.subtitle}
                          </p>
                          
                          {/* Enhanced Download Button */}
                          <button
                            onClick={() => handlePdfDownload(cert.pdf, `${cert.title.replace(/\s+/g, '_')}.pdf`)}
                            className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white py-4 px-6 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center space-x-3"
                          >
                            <FiDownload className="text-xl" />
                            <span className="text-lg">
                              {t('quality.buttons.downloadPdf', 'Download PDF Certificate')}
                            </span>
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {activeTab === 'quality' && (
              <motion.div
                key="quality"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
              >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {qualityDocuments.map((doc, index) => (
                    <motion.div
                      key={doc.id}
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="group"
                    >
                      <div className="bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl border border-white/20 overflow-hidden hover:transform hover:scale-[1.02] transition-all duration-300 h-full flex flex-col">
                        {/* Image Section */}
                        <div 
                          className="p-6 cursor-pointer bg-gradient-to-br from-white/5 to-white/10 border-b border-white/10 flex-1"
                          onClick={() => openImageModal(doc.image)}
                        >
                          <div className="relative overflow-hidden rounded-xl bg-white/5 h-full">
                            <img
                              src={doc.image}
                              alt={doc.title}
                              className="w-full h-64 object-contain p-4 transition-transform duration-300 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                          </div>
                        </div>
                        
                        {/* Content Section */}
                        <div className="p-6">
                          <h3 className="text-xl font-bold text-white mb-2">
                            {doc.title}
                          </h3>
                          <p className="text-gray-300 mb-4 text-base">
                            {doc.subtitle}
                          </p>
                          
                          {/* Enhanced Download Button */}
                          <button
                            onClick={() => handlePdfDownload(doc.pdf, `${doc.title.replace(/\s+/g, '_')}.pdf`)}
                            className="w-full bg-gradient-to-r from-green-600 to-emerald-500 hover:from-green-700 hover:to-emerald-600 text-white py-3 px-4 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
                          >
                            <FiDownload className="text-lg" />
                            <span>
                              {t('quality.buttons.downloadDocument', 'Download Document')}
                            </span>
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

        {/* Enhanced Information Section */}
        <motion.div 
          className="max-w-5xl mx-auto mt-20 text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl border border-white/20 p-12">
            <h3 className="text-3xl font-bold text-white mb-6">
              {t('quality.registration.title', 'Certificate of Registration')}
            </h3>
            <p className="text-gray-300 text-xl leading-relaxed">
              {t('quality.registration.description', 'All our certifications and quality documents are properly registered, maintained, and regularly audited in accordance with international standards and regulatory requirements, ensuring the highest level of quality assurance and compliance excellence.')}
            </p>
          </div>
        </motion.div>
      </div>

      {/* Enhanced Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-8"
              onClick={closeImageModal}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0, rotateY: 90 }}
                animate={{ scale: 1, opacity: 1, rotateY: 0 }}
                exit={{ scale: 0.8, opacity: 0, rotateY: -90 }}
                transition={{ type: "spring", damping: 25 }}
                className="relative max-w-6xl max-h-full"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="bg-white/5 backdrop-blur-md rounded-2xl border border-white/20 p-6">
                  <img
                    src={selectedImage}
                    alt={t('quality.modal.altText', 'Enlarged view')}
                    className="max-w-full max-h-[85vh] object-contain rounded-lg"
                  />
                </div>
                <button
                  onClick={closeImageModal}
                  className="absolute -top-4 -right-4 bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white rounded-full p-3 shadow-2xl transition-all duration-300 transform hover:scale-110"
                  aria-label={t('quality.modal.close', 'Close modal')}
                >
                  <FiX className="text-2xl" />
                </button>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default QualityandConformity;