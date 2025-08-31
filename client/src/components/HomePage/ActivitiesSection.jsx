import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import { useTranslation } from 'react-i18next'; 
import { FaShip, FaFlask, FaTools, FaLaptopCode } from 'react-icons/fa';
import ActivityCard from './ActivityCard';

const sectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const titleVariants = {
  hidden: { y: -30, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } }
};


const activitiesData = (t) => [
  {
    icon: <FaShip size={56} />,
    title: t('activitiesSection.nonaqueousDrillingFluids.title'),
    description: t('activitiesSection.nonaqueousDrillingFluids.description'),
    link: "/activities/nonaqueous-drilling-fluids-obm"
  },
  {
    icon: <FaFlask size={56} />,
    title: t('activitiesSection.waterBaseDrillingFluids.title'),
    description: t('activitiesSection.waterBaseDrillingFluids.description'),
    link: "/activities/water-base-drilling-fluids"
  },
  {
    icon: <FaTools size={56} />,
    title: t('activitiesSection.completionAndWorkoverFluids.title'),
    description: t('activitiesSection.completionAndWorkoverFluids.description'),
    link: "/activities/completion-and-workover-fluids-services"
  },
  {
    icon: <FaLaptopCode size={56} />,
    title: t('activitiesSection.drillingFluidsSimulation.title'),
    description: t('activitiesSection.drillingFluidsSimulation.description'),
    link: "/activities/drilling-fluids-simulation-software"
  },
];

const ActivitiesSection = () => {
  const { t } = useTranslation();

  return (
    <section className="bg-[#f7f8fc] py-28 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          className="flex justify-between items-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={titleVariants}
        >
          <div>
            <h3 className="text-sm font-semibold tracking-widest text-gray-500 uppercase">
              {t('activitiesSection.subtitle')}
            </h3>
            <h2 className="text-5xl lg:text-6xl font-bold text-gray-800 mt-2">
              {t('activitiesSection.title')}
            </h2>
          </div>
          <div className="hidden md:flex items-center space-x-2">
            <button className="p-3 rounded-full border border-gray-300 bg-white text-gray-400 cursor-not-allowed">
              <FiArrowLeft size={20} />
            </button>
            <button className="p-3 rounded-full border border-gray-300 bg-white text-gray-600 hover:text-blue-600 hover:border-gray-400 transition-colors">
              <FiArrowRight size={20} />
            </button>
          </div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {activitiesData(t).map((activity, index) => (
            <ActivityCard
              key={index}
              icon={activity.icon}
              title={activity.title}
              description={activity.description}
              link={activity.link}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ActivitiesSection;