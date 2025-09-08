import React from 'react';
import { motion } from 'framer-motion';
import ResponsiveTable from '../components/common/ResponsiveTable';
import { FiArrowUp } from 'react-icons/fi';
import products1 from '../assets/img/products1.jpg';
import { useTranslation } from 'react-i18next';

const DrillingFluidAdditivesPage = () => {
  const { t } = useTranslation();
  const heroImageUrl = products1;

  const tableHeaders = [
    t('products_page.drilling_fluid_additives.table_headers.trade_name'),
    t('products_page.drilling_fluid_additives.table_headers.unit_size'),
    t('products_page.drilling_fluid_additives.table_headers.description')
  ];

  const drillingFluidAdditivesData = [
    [t('products_page.drilling_fluid_additives.products.clay_bond_l.trade_name'), t('products_page.drilling_fluid_additives.products.clay_bond_l.unit_size'), t('products_page.drilling_fluid_additives.products.clay_bond_l.description')],
    [t('products_page.drilling_fluid_additives.products.n_inhibit.trade_name'), t('products_page.drilling_fluid_additives.products.n_inhibit.unit_size'), t('products_page.drilling_fluid_additives.products.n_inhibit.description')],
    [t('products_page.drilling_fluid_additives.products.well_stab.trade_name'), t('products_page.drilling_fluid_additives.products.well_stab.unit_size'), t('products_page.drilling_fluid_additives.products.well_stab.description')],
    [t('products_page.drilling_fluid_additives.products.shale_drill.trade_name'), t('products_page.drilling_fluid_additives.products.shale_drill.unit_size'), t('products_page.drilling_fluid_additives.products.shale_drill.description')],
    [t('products_page.drilling_fluid_additives.products.emo_block.trade_name'), t('products_page.drilling_fluid_additives.products.emo_block.unit_size'), t('products_page.drilling_fluid_additives.products.emo_block.description')],
    [t('products_page.drilling_fluid_additives.products.h2s_scav_l.trade_name'), t('products_page.drilling_fluid_additives.products.h2s_scav_l.unit_size'), t('products_page.drilling_fluid_additives.products.h2s_scav_l.description')],
    [t('products_page.drilling_fluid_additives.products.glyco_drill_gp.trade_name'), t('products_page.drilling_fluid_additives.products.glyco_drill_gp.unit_size'), t('products_page.drilling_fluid_additives.products.glyco_drill_gp.description')],
    [t('products_page.drilling_fluid_additives.products.well_sweep.trade_name'), t('products_page.drilling_fluid_additives.products.well_sweep.unit_size'), t('products_page.drilling_fluid_additives.products.well_sweep.description')],
    [t('products_page.drilling_fluid_additives.products.hixo_drill.trade_name'), t('products_page.drilling_fluid_additives.products.hixo_drill.unit_size'), t('products_page.drilling_fluid_additives.products.hixo_drill.description')],
    [t('products_page.drilling_fluid_additives.products.rheo_stab.trade_name'), t('products_page.drilling_fluid_additives.products.rheo_stab.unit_size'), t('products_page.drilling_fluid_additives.products.rheo_stab.description')],
    [t('products_page.drilling_fluid_additives.products.rop_enhancer_hc.trade_name'), t('products_page.drilling_fluid_additives.products.rop_enhancer_hc.unit_size'), t('products_page.drilling_fluid_additives.products.rop_enhancer_hc.description')],
    [t('products_page.drilling_fluid_additives.products.eco_lube_hp.trade_name'), t('products_page.drilling_fluid_additives.products.eco_lube_hp.unit_size'), t('products_page.drilling_fluid_additives.products.eco_lube_hp.description')],
    [t('products_page.drilling_fluid_additives.products.pipe_free_mp.trade_name'), t('products_page.drilling_fluid_additives.products.pipe_free_mp.unit_size'), t('products_page.drilling_fluid_additives.products.pipe_free_mp.description')],
    [t('products_page.drilling_fluid_additives.products.bit_wash.trade_name'), t('products_page.drilling_fluid_additives.products.bit_wash.unit_size'), t('products_page.drilling_fluid_additives.products.bit_wash.description')]
  ];

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
          {t('products_page.drilling_fluid_additives.title')}
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
          {t('products_page.drilling_fluid_additives.description')}
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