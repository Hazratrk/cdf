// src/components/HomePage/MissionSection.jsx

import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import StatCounter from './StatCounter'; 
import { useTranslation } from 'react-i18next';

const missionData = {
  title: "OUR MISSION",
  text: "is to become the leading fluids service providing company in the region's market by providing most qualitative and contemporary products and approach to the local oil and gas companies.",
  highlightedText: "CDF's aim"
};

const cardData = [
  {
    number: "01.",
    title: "Project Management Services",
    subtitle: "Services",
    image: "https://www.alareebict.com/wp-content/uploads/2022/03/Project-Management-Services-1-2-1024x484.jpg",
    link: "/activities/project-management-services"
  },
  {
    number: "02.",
    title: "Engineering Services",
    subtitle: "Services",
    image: "https://media.licdn.com/dms/image/v2/D4E22AQF-fpVB9zPzPw/feedshare-shrink_800/feedshare-shrink_800/0/1706226111666?e=2147483647&v=beta&t=sf7yA-JNRGXBR_nOGLkL03abhAH5mGpHwcXzbH83CJo",
    link: "/activities/engineering-services"
  },
  {
    number: "03.",
    title: "Logistic Services",
    subtitle: "Services",
    image: "https://media.licdn.com/dms/image/v2/D4E22AQGyrjM8tqY0Mg/feedshare-shrink_800/feedshare-shrink_800/0/1715450794628?e=2147483647&v=beta&t=ExXZgTd4tnJ8oMC6_sOoje4XzZ3toQLbzgU1KRxIa04",
    link: "/activities/logistic-services"
  },
  {
    number: "04.",
    title: "Warehouse",
    subtitle: "Services",
    image: "https://caspiandf.com/wp-content/uploads/elementor/thumbs/ZN_08599-qmeh7riv0gmfftt1qnjojaj4y9maosqhurf53a7zdw.jpg",
    link: "/activities/warehouse"
  }
];

const statsData = [
    { to: 98, suffix: "+", label: "Project" },
    { to: 65, suffix: "+", label: "Partners" },
    { to: 10, suffix: "+", label: "Years" },
    { to: 15, suffix: "+", label: "Countries" }
];

// Animasiya variantları
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    }
  }
};

const MissionSection = () => {
  return (
    <section className="bg-[#0b0d27] text-white py-28 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        
        <motion.div 
          className="text-center max-w-4xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={fadeIn}
        >
          <h3 className="text-sm font-semibold tracking-widest text-gray-400 uppercase mb-4">{missionData.title}</h3>
          <p className="text-3xl lg:text-4xl leading-relaxed font-light">
            <Link to="/about" className="text-blue-400 font-semibold hover:underline">{missionData.highlightedText}</Link> {missionData.text}
          </p>
        </motion.div>

        {/* 4-lü Kart Düzülüşü */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-20"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {cardData.map((card, index) => (
            <Link to={card.link} key={index}>
              <motion.div
                variants={fadeIn}
                className="group relative h-80 rounded-lg overflow-hidden shadow-lg"
              >
                <img 
                  src={card.image} 
                  alt={card.title}
                  className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6 flex flex-col justify-end">
                   <h3 className="text-xl font-bold transition-opacity duration-300 group-hover:opacity-0">{card.title}</h3>
                   <div className="absolute inset-0 p-6 flex flex-col justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-black/70">
                      <div>
                        <span className="text-4xl font-thin text-gray-300">{card.number}</span>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold">{card.title}</h3>
                        <p className="text-gray-300">{card.subtitle}</p>
                      </div>
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
            to="/activities" 
            className="inline-block bg-blue-600 text-white font-bold py-3 px-8 rounded-md hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Read More
          </Link>
        </motion.div>

     
        <motion.div 
          className="mt-28 pt-20 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-12"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {statsData.map((stat, index) => (
            <motion.div 
              key={index} 
              variants={fadeIn}
              className="relative px-4
                         sm:after:content-[''] sm:after:absolute sm:after:right-0 sm:after:top-1/2 sm:after:-translate-y-1/2 sm:after:h-16 sm:after:w-px sm:after:bg-white/10
                         sm:last:after:hidden
                         lg:[&:nth-child(2)]:after:block
                         sm:[&:nth-child(even)]:after:hidden
                         lg:[&:nth-child(even)]:after:block
                         lg:last:after:hidden
                         "
            >
              <StatCounter to={stat.to} suffix={stat.suffix} label={stat.label} />
            </motion.div>
          ))}
        </motion.div>
        
      </div>
    </section>
  );
};

export default MissionSection;