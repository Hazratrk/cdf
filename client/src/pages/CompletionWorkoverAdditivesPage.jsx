// src/pages/CompletionWorkoverAdditivesPage.jsx
import React from 'react';
import ResponsiveTable from '../components/common/ResponsiveTable';
import { FiArrowUp } from 'react-icons/fi';
import products2 from '../assets/img/products2.jpg';

const tableHeaders = ["Trade name", "Unit size", "Description"];

const tableData = [
  ["ANTI-CRYSTALINE", "25 KG/SXS", "Crystallization Inhibitors for Brine"],
  ["CALCIUM BROMIDE L", "55 GAL/DRUM", "A single salt clear brine fluid of 14.2 lbs/gal density"],
  ["CALCIUM BROMIDE P", "25 KG/SXS", "Calcium salt of hydrobromic acid. Concentrated hygroscopic powder that absorbs water from the air"],
  ["FORMA-DRILL II-L", "1000 Lit/IBC", "Formate Brine – Potassium Base – 1.57 S.G"],
  ["SODIUM BROMIDE L", "55 GAL/DRUM", "A single salt clear brine fluid (liquid grade 1.3 S.G)"],
  ["ZINC BROMIDE", "55 GAL/DRUM", "A clear solid-free brine fluid with a minimum density of 1.92 SG"],
  ["WELL-CLEAN", "55 GAL/DRUM", "Well clean-up agent"],
  ["BIO MCB", "55 GAL/DRUM", "Filter cake breaker"],
  ["BRINE-COR HP", "55 GAL/DRUM", "High active, water-soluble corrosion inhibitor"],
  ["OX-SCAV L", "55 GAL/DRUM", "Liquid oxygen scavenger"],
  ["PIPE-COR", "55 GAL/DRUM", "Corrosion inhibitor – spray type"],
  ["CLEAN SURF", "55 GAL/DRUM", "Mixture of emulsifiers to improve water-wetting of barite and other mud solids"],
  ["DEFOAM ALC", "55 GAL/DRUM", "Alcohol-based liquid defoamer to reduce surface tension in WBM"],
  ["DEFOAM SLC", "55 GAL/DRUM", "Silicone-based liquid defoaming agent"],
];

const CompletionWorkoverAdditivesPage = () => {
  return (
    <div className="bg-white min-h-screen">

      <div 
        className="relative h-72 bg-cover bg-center text-white flex items-center justify-center"
        style={{ backgroundImage: `url(${products2})` }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative text-center px-4">
          <h1 className="text-4xl md:text-5xl font-light tracking-tight">
            Completion & Workover Fluid Additives
          </h1>
        </div>
      </div>


      <div className="container mx-auto max-w-5xl py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <p className="text-gray-700 text-lg leading-relaxed mb-12 font-light opacity-90">
          Completion and workover fluid additives are specialized chemicals or substances incorporated 
          into completion and workover fluids to enhance their performance and properties. 
          These additives are crucial in optimizing the efficiency, safety, and effectiveness of 
          completion and workover operations in oil and gas wells.
        </p>
        
        <div className="bg-white border border-gray-100 rounded-sm overflow-hidden">
          <ResponsiveTable headers={tableHeaders} data={tableData} />
        </div>
      </div>


      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-6 right-6 bg-gray-800 text-white rounded-sm h-10 w-10 flex items-center justify-center hover:bg-gray-900 transition-colors duration-300 shadow-sm z-40 opacity-80 hover:opacity-100"
        aria-label="Scroll to top"
      >
        <FiArrowUp size={18} />
      </button>
    </div>
  );
};

export default CompletionWorkoverAdditivesPage;
