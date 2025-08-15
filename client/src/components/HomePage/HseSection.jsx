// src/components/HomePage/HseSection.jsx

import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';

const hseData = [
  {
    title: "Environmental Monitoring",
    category: "Health, Safety and Environment",
    image: "https://media.licdn.com/dms/image/v2/D4E22AQE8BDcwAH-Z4w/feedshare-shrink_800/feedshare-shrink_800/0/1716681667032?e=2147483647&v=beta&t=Gls7XFQlFUgvKlhAhfsYXgoxiHbJWEn20TvIS9_3V1Q",
    link: "/health-safety-and-environment/environmental-monitoring"
  },
  {
    title: "Employees' Security",
    category: "Health, Safety and Environment",
    image: "https://media.licdn.com/dms/image/v2/D4E22AQF-fpVB9zPzPw/feedshare-shrink_800/feedshare-shrink_800/0/1706226111666?e=2147483647&v=beta&t=sf7yA-JNRGXBR_nOGLkL03abhAH5mGpHwcXzbH83CJo",
    link: "/health-safety-and-environment/employees-security"
  }
];

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } }
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    }
  }
};

const HseSection = () => {
  return (
    <section className="bg-white py-28 px-4 sm:px-6 lg:px-8">
      <motion.div 
        className="container mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-8"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {hseData.map((item, index) => (
          <Link to={item.link} key={index}>
            <motion.div
              variants={fadeIn}
              className="group relative h-[450px] rounded-lg overflow-hidden text-white p-10 flex flex-col justify-end"
            >
              {/* Arxa Fon Şəkli */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 ease-in-out group-hover:scale-110"
                style={{ backgroundImage: `url(${item.image})` }}
              ></div>

              {/* Qaraltma Effekti */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>

              {/* Mətnlər və Link */}
              <div className="relative z-10">
                <p className="text-sm uppercase tracking-wider mb-2">{item.category}</p>
                <h3 className="text-3xl lg:text-4xl font-bold leading-tight mb-6">{item.title}</h3>
                
                {/* Hover-də çıxan ox */}
                <div className="flex items-center text-white font-semibold transition-all duration-300 transform -translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100">
                  Read More
                  <FiArrowRight className="ml-3 text-2xl" />
                </div>
              </div>
            </motion.div>
          </Link>
        ))}
      </motion.div>
    </section>
  );
};

export default HseSection;