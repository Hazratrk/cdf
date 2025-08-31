// src/components/HomePage/ProductsSection.jsx

import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';
import { useTranslation } from 'react-i18next';

import products1_img from '../../assets/img/products1.jpg'; 
import products2_img from '../../assets/img/products2.jpg'; 

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } }
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    }
  }
};

const ProductsSection = () => {
  const { t } = useTranslation();

  const productsData = [
    {
      category: t('productsSection.category'),
      date: "June 8, 2022",
      title: t('productsSection.completionAndWorkoverAdditives.title'),
      image: products1_img,
      link: "/products/completion-and-workover-fluids-additives"
    },
    {
      category: t('productsSection.category'),
      date: "June 8, 2022",
      title: t('productsSection.drillingFluidAdditives.title'),
      image: products2_img,
      link: "/products/drilling-fluid-additives"
    }
  ];

  return (
    <section className="bg-[#f7f8fc] py-28 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={fadeIn}
        >
          <h3 className="text-sm font-semibold tracking-widest text-gray-500 uppercase">
            {t('productsSection.category')}
          </h3>
          <h2 className="text-5xl lg:text-6xl font-bold text-gray-800 mt-2">
            {t('productsSection.title')}
          </h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-10"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {productsData.map((product, index) => (
            <Link to={product.link} key={index}>
              <motion.div
                variants={fadeIn}
                className="group bg-white rounded-lg overflow-hidden transition-all duration-300 ease-in-out hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-2"
              >
                <div className="overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-64 object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                  />
                </div>
                <div className="p-8">
                  <p className="text-xs text-gray-500 uppercase tracking-wider">
                    {product.category} · {product.date}
                  </p>
                  <h3 className="text-2xl font-bold text-gray-800 my-4 leading-tight">
                    {product.title}
                  </h3>
                  <div className="inline-flex items-center text-gray-400 group-hover:text-blue-600 transition-colors duration-300">
                    <FiArrowRight className="text-2xl" />
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </motion.div>

        <motion.div
          className="text-center mt-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={fadeIn}
        >
          <Link
            to="/products"
            className="inline-block bg-blue-600 text-white font-bold py-3 px-8 rounded-md hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            {t('productsSection.readMore')}
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductsSection;