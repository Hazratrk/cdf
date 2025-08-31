// src/pages/DrillingFluidAdditivesPage.jsx
import React from 'react';
import { motion } from 'framer-motion';
import ResponsiveTable from '../components/common/ResponsiveTable';
import { FiArrowUp } from 'react-icons/fi';
import products1 from '../assets/img/products1.jpg';

const drillingFluidAdditivesData = [
  ["CLAY BOND L", "55 GAL/CAN", "Providing shale stabilization and cutting encapsulation"],
  ["N-INHIBIT", "55 GAL/DRUM", "Highly inhibitive, highly lubricious Nano-shale inhibitor in order to replace KCL in high reactive shale/clays"],
  ["WELL-STAB", "55 GAL/DRUM", "Mixture of chemicals to improve wellbore stability"],
  ["SHALE-DRILL", "55 GAL/DRUM", "Wellbore stabilizer, lubricity & high filtration control agent"],
  ["EMO-BLOCK", "55 GAL/DRUM", "Semi permeable membrane Shale Inhibitor"],
  ["H2S SCAV L", "55 GAL/DRUM", "Liquid hydrogen sulfide scavenger used in WBM"],
  ["GLYCO-DRILL GP", "55 GAL/DRUM", "Providing good shale control performance, increasing cuttings hardness"],
  ["WELL-SWEEP", "12.5 KG/SXS", "Hi-Vis Pill/Sweeping fluid to provide high efficient hole cleaning and cuttings carrying"],
  ["HIXO-Drill", "25 KG/SXS", "Thixotropic agents for polymers/clays"],
  ["RHEO-STAB", "55 GAL/DRUM", "Rheology Stabilizing agent"],
  ["ROP Enhancer (HC)", "55 GAL/DRUM", "Blended organic surface active agents for enhancing rate of penetration in high clay content formations"],
  ["ECO Lube HP", "55 GAL/DRUM", "Providing impart extreme lubricity properties to drilling fluids"],
  ["PIPE-Free MP", "55 GAL/DRUM", "Anti-eclipse additive"],
  ["BIT-WASH", "55 GAL/DRUM", "High Performance Bit-Balling Removal Agent"],
];

const DrillingFluidAdditivesPage = () => {
  const heroImageUrl = products1;

  const tableHeaders = ["Trade name", "Unit size", "Description"];

  return (
    <div className="bg-gray-50">
  
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative h-80 bg-cover bg-center text-white flex items-center justify-center"
        style={{ backgroundImage: `url(${heroImageUrl})` }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <motion.h1 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="relative text-5xl font-extrabold text-center"
        >
          Drilling Fluid Additives
        </motion.h1>
      </motion.div>
      
      
      <div className="container mx-auto max-w-5xl py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-gray-600 text-lg leading-relaxed mb-12"
        >
          Drilling fluid additives are specialized chemicals or materials added to drilling fluids 
          to enhance or modify their properties and performance during drilling operations. These 
          additives serve various functions and can improve aspects such as fluid viscosity, 
          lubricity, filtration control, shale inhibition, and thermal stability. They help optimize 
          drilling efficiency, protect the wellbore, and ensure safe and effective drilling in 
          diverse geological formations and conditions.
        </motion.p>


        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <ResponsiveTable headers={tableHeaders} data={drillingFluidAdditivesData} />
        </motion.div>
      </div>

   
      <button 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} 
        className="fixed bottom-6 right-6 bg-blue-600 text-white rounded-full h-12 w-12 flex items-center justify-center hover:bg-blue-700 transition-colors shadow-lg z-40"
        aria-label="Scroll to top"
      >
        <FiArrowUp size={24}/>
      </button>
    </div>
  );
};

export default DrillingFluidAdditivesPage;
