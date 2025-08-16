// src/pages/WaterBasePage.jsx
import React from 'react';
import { motion } from 'framer-motion';
import ContactSidebar from '../components/common/ContactSidebar';
import ResponsiveTable from '../components/common/ResponsiveTable';
import { FiArrowUp } from 'react-icons/fi';

const imageUrl = "https://www.c1water.com/wp-content/uploads/2022/12/Rectangle-73.png";


const tableData = [
  {
    title: "Inhibited HPWBM for Moderate – Active Shales/Clay",
    headers: ["Trade Name", "Fluid type", "Systems description", "Application"],
    data: [
      ["CLAY-BOND", "HPWBM", "HPWBM containing high molecular weight polymers to prevent clay dispersion in the mud and changing rheological properties", "To drill high reactive shale/clay/reduce bit balling To provide good hole cleaning and cutting integrity Increase wellbore stability Improve ROP with stable hole condition in high reactive clays"],
      ["GLYCO-DRILL", "HPWBM", "HPWBM to overcome shale problems by using different types of glycols and inhibitor salts compatible with low to high formation temperatures", "Reduced dilution rate Minimizing bit balling Increasing ROP Reducing torque and drag"],
      ["SHALE-DRILL", "HPWBM", "HPWBM formulated by using asphalt additives to improve shale stability, inhibit dispersion of drilled solids, and help to control high temperature water loss in reactive shales", "Wellbore stability/help to reduce HPHT fluid loss Reduced dilution rate Increasing ROP Reducing torque and drag"],
    ]
  },
  {
    title: "Heavy Weight HPWBM for High Pressure Zones",
    headers: ["Trade Name", "Fluid type", "Systems description", "Application"],
    data: [
      ["HEAVY-DRILL", "HPWBM", "Salt saturated water based mud to drill high pressure zones up to 2.4 S.G by using BARA-WATE and HEMA WATE as weighting agents, appropriate viscosifers, fluid loss control agents and temperature stabilizers", "To drill deep high pressure salt water zone up to 2.4 High resistance to calcium and magnesium Good rheological properties and stable gel strength in high temperature"],
      ["ULTRA-WEIGHT", "HPWBM", "Salt saturated water based mud to drill high pressure zones up to 2.65 S.G by using BARA-WATE and HEMA-WATE as weighting agents, special rheology control agents to keep the rheological properties and fluid loss constant during drilling high pressure zones", "To drill deep abnormal high pressure salt water zone up to 2.65 S.G High resistance to calcium and magnesium Good rheological properties and stable gel strength in high temperature"],
    ]
  },
  {
    title: "High ROP HPWBM for Deviated, Horizontal & Extended Reach Wells",
    headers: ["Trade Name", "Fluid type", "Systems description", "Application"],
    data: [
      ["LUB-DRILL", "HPWBM", "HPWBM formulated for drilling high deviated and horizontal section by using special high performance lubricants to reduce torque and drag and improving ROP during sliding", "To drill horizontal and high deviated wells. Reduce torque and drag/friction coefficient factor. Improving ROP Reducing differential sticking"],
    ]
  }
];

const WaterBasePage = () => {
  return (
    <div className="bg-gray-50">
      <div className="container mx-auto max-w-7xl py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          
        
          <div className="lg:col-span-2 space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-xl shadow-md overflow-hidden"
            >
              <img 
                src={imageUrl} 
                alt="Water-based drilling fluids" 
                className="w-full h-64 object-cover" 
              />
              <div className="p-6">
                <p className="text-gray-700 leading-relaxed">
                  Water-based drilling fluids are formulated using water as the continuous phase. These fluids are environmentally friendly, cost-effective, and versatile, suitable for a wide range of drilling applications. They provide good hole stability, excellent fluid loss control, and can be easily adjusted for specific drilling conditions.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-12"
            >
              {tableData.map((table, index) => (
                <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden">
                  <div className="px-6 py-4 border-b border-gray-200">
                    <h2 className="text-2xl font-bold text-gray-800">{table.title}</h2>
                  </div>
                  <div className="p-6">
                    <ResponsiveTable headers={table.headers} data={table.data} />
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

        
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <ContactSidebar />
          </motion.div>
        </div>
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

export default WaterBasePage;