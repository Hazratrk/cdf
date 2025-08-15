

import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom'; 


const image1_url = 'https://media.licdn.com/dms/image/v2/D4E22AQE9Mx3Ggu1FdQ/feedshare-shrink_800/feedshare-shrink_800/0/1709603406776?e=2147483647&v=beta&t=4vXVjMZmLP5iVV77fRvUttBxiC166kcEVLjbCO_TI4Y';
const image2_url = 'https://media.licdn.com/dms/image/v2/D4E22AQFbBrZLnSindg/feedshare-shrink_800/feedshare-shrink_800/0/1727109693908?e=2147483647&v=beta&t=7a_txVxQLQxleJ62GthNZImRdavKBnRZPMw_ImAS2vE';


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
              src={image1_url}
              alt="Drilling fluids"
              initial={{ y: -50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="absolute top-0 left-0 w-[65%] h-auto object-contain rounded-lg shadow-2xl z-10"
            />
           
            <motion.img
              src={image2_url}
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
              WHO WE ARE?
            </motion.h3>
            <motion.h2 variants={fadeInUp} className="text-4xl lg:text-5xl font-bold text-gray-800 mt-3 mb-6">
              About company
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-gray-600 text-lg leading-relaxed mb-6">
              Caspian Drilling Fluids (CDF) is an oil and gas engineering company focused on sales, designing drilling and completion fluids, engineering services and products.
            </motion.p>
            <motion.p variants={fadeInUp} className="text-gray-600 text-lg leading-relaxed mb-6">
              Drilling and completion fluids play a very important role in ensuring maximum hydrocarbon production, and we, as the CDF, supply the products and services necessary from the exploration phase to production to ensure optimum oil and gas production.
            </motion.p>
            <motion.p variants={fadeInUp} className="text-gray-600 text-lg leading-relaxed mb-10">
              Our company is a leading importer of organic chemicals into the Turkish domestic markets. We have storage facilities in the Istanbul and Adana regions. Supplying a broad range of products, we supply about 7% of the Turkish monomer and polymer market. At the same time, we also import chemical waste to our facilities in the Adana region.
            </motion.p>
            <motion.div variants={fadeInUp} className="space-y-4 mb-8">
                <a href="#" className="block font-semibold text-blue-600 hover:underline transition-colors">QUALITY POLICY</a>
                <a href="#" className="block font-semibold text-blue-600 hover:underline transition-colors">FINANCIAL STATEMENTS FOR 2022</a>
                <a href="#" className="block font-semibold text-blue-600 hover:underline transition-colors">API Q2</a>
            </motion.div>

            <motion.div variants={fadeInUp}>
                <Link 
                  to="/about" 
                  className="inline-block bg-blue-600 text-white font-bold py-3 px-8 rounded-md hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  About Us
                </Link>
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