import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

// Şəkilləri assets qovluğundan import edin
import about1_img from '../../assets/img/about1.jpg'; 
import about2_img from '../../assets/img/about2.jpg'; 

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const fadeInUp = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 15,
    },
  },
};

const fadeInLeft = {
    hidden: { x: -80, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        duration: 1.5
      },
    },
};

const AboutSection = () => {
  const { t } = useTranslation();

  return (
    <section className="bg-white py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >

          <motion.div className="relative h-[500px]" variants={fadeInLeft}>
            <motion.img
              src={about1_img} 
              alt="Drilling fluids"
              initial={{ y: -50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="absolute top-0 left-0 w-[65%] h-auto object-contain rounded-lg shadow-2xl z-10"
            />
            <motion.img
              src={about2_img} 
              alt="Company workers"
              initial={{ scale: 1.2, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="absolute bottom-0 right-0 w-[80%] h-auto object-cover rounded-lg shadow-2xl"
            />
          </motion.div>

          <motion.div>
            <motion.h3 variants={fadeInUp} className="text-sm font-semibold tracking-widest text-gray-500 uppercase">
              {t('whoWeAre.title')}
            </motion.h3>
            <motion.h2 variants={fadeInUp} className="text-4xl lg:text-5xl font-bold text-gray-800 mt-3 mb-6">
              {t('whoWeAre.aboutCompany.title')}
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-gray-600 text-lg leading-relaxed mb-6">
              {t('whoWeAre.aboutCompany.text1')}
            </motion.p>
            <motion.p variants={fadeInUp} className="text-gray-600 text-lg leading-relaxed mb-6">
              {t('whoWeAre.aboutCompany.text2')}
            </motion.p>
            <motion.p variants={fadeInUp} className="text-gray-600 text-lg leading-relaxed mb-10">
              {t('whoWeAre.aboutCompany.text3')}
            </motion.p>
            <motion.div variants={fadeInUp}>
              <Link
                to="/about"
                className="inline-block bg-blue-600 text-white font-bold py-3 px-8 rounded-md hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                {t('navigation.aboutUs')}
              </Link>
            </motion.div>

            <motion.div variants={fadeInUp} className="space-y-4 mb-8">
                <a href="#" className="block font-semibold text-blue-600 hover:underline transition-colors">QUALITY POLICY</a>
                <a href="#" className="block font-semibold text-blue-600 hover:underline transition-colors">FINANCIAL STATEMENTS FOR 2022</a>
                <a href="#" className="block font-semibold text-blue-600 hover:underline transition-colors">API Q2</a>
            </motion.div>

            <motion.div variants={fadeInUp} className="mt-8 pt-4 border-t border-gray-200">
                <a href="#" className="font-semibold text-blue-600 hover:underline transition-colors">ISO 9001</a>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;