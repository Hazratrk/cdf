// src/pages/CompletionWorkoverAdditivesPage.jsx
import React from 'react';
import { motion } from 'framer-motion';
import ResponsiveTable from '../components/common/ResponsiveTable';
import { FiArrowUp } from 'react-icons/fi';

const heroImageUrl = "https://caspiandf.com/wp-content/uploads/2024/04/ZN_08685.jpg";


const tableData = {
    headers: ["Trade name", "Unit size", "Description"],
    data: [
        ["ANTI-CRYSTALINE", "25 KG/SXS", "Crystallization Inhibitors for Brine"],
        ["CALCIUM BROMIDE L", "55 GAL/DRUM", "A single salt clear brine fluid of 14.2 lbs/gal density"],
        ["CALCIUM BROMIDE P", "25 KG/SXS", "Is the calcium salt of hydrobromic acid. It is concentrated hygroscopic powder which will absorb water from the air"],
        ["FORMA-DRILL II-L", "1000 Lit/IBC", "Formate Brine – Pottasium Base – 1.57 S.G"],
        ["SODIUM BROMIDE L", "55 GAL/DRUM", "A single salt clear brine fluid. (liquid grade 1.3 S.G)"],
        ["ZINC BROMIDE", "55 GAL/DRUM", "A clear solid-free brine fluid with a minimum density of 1.92 SG"],
        ["WELL-CLEAN", "55 GAL/DRUM", "Well Clean Up Agent"],
        ["BIO MCB", "55 GAL/DRUM", "FILTER CAKE BREAKER"],
        ["BRINE-COR HP", "55 GAL/DRUM", "HIGH ACTIVE, WATER-SOLUBLE CORROSION INHIBITOR"],
        ["OX-SCAV L", "55 GAL/DRUM", "LIQUID OXYGEN SCAVENGER"],
        ["PIPE-COR", "55 GAL/DRUM", "CORROSION INHIBITOR – SPRAY TYPE"],
        ["CLEAN SURF", "55 GAL/DRUM", "MIXTURE OF EMULSIFIERS TO IMPROVE WATER-WETTING OF BARITE AND OTHER MUD SOLIDS"],
        ["DEFOAM ALC", "55 GAL/DRUM", "ALCOHOL BASE, LIQUID DEFOAMER TO REDUCE SURFACE TENSION IN WBM"],
        ["DEFOAM SLC", "55 GAL/DRUM", "SILICONE BASED LIQUID DEFOAMING AGENT"],
    ]
};

const CompletionWorkoverAdditivesPage = () => {
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
          className="relative text-5xl font-extrabold text-center px-4"
        >
          Completion and Workover Fluids Additives
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
          Completion and workover fluid additives are specialized chemicals or substances incorporated into completion and workover fluids to enhance their performance and properties. These additives are crucial in optimizing the efficiency, safety, and effectiveness of completion and workover operations in oil and gas wells.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <ResponsiveTable headers={tableData.headers} data={tableData.data} />
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

export default CompletionWorkoverAdditivesPage;