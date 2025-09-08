import React from 'react';
import { motion } from 'framer-motion';
import ResponsiveTable from '../components/common/ResponsiveTable';
import { FiArrowUp } from 'react-icons/fi';
import products2 from '../assets/img/products2.jpg';
import { useTranslation } from 'react-i18next';

const CompletionWorkoverAdditivesPage = () => {
  const { t } = useTranslation();

  const tableHeaders = [
    t('products_page.completion_and_workover_fluids_additives.table_headers.trade_name'),
    t('products_page.completion_and_workover_fluids_additives.table_headers.unit_size'),
    t('products_page.completion_and_workover_fluids_additives.table_headers.description')
  ];

  const tableData = [
    [t('products_page.completion_and_workover_fluids_additives.products.anti_crystaline.trade_name'), t('products_page.completion_and_workover_fluids_additives.products.anti_crystaline.unit_size'), t('products_page.completion_and_workover_fluids_additives.products.anti_crystaline.description')],
    [t('products_page.completion_and_workover_fluids_additives.products.calcium_bromide_l.trade_name'), t('products_page.completion_and_workover_fluids_additives.products.calcium_bromide_l.unit_size'), t('products_page.completion_and_workover_fluids_additives.products.calcium_bromide_l.description')],
    [t('products_page.completion_and_workover_fluids_additives.products.calcium_bromide_p.trade_name'), t('products_page.completion_and_workover_fluids_additives.products.calcium_bromide_p.unit_size'), t('products_page.completion_and_workover_fluids_additives.products.calcium_bromide_p.description')],
    [t('products_page.completion_and_workover_fluids_additives.products.forma_drill_ii_l.trade_name'), t('products_page.completion_and_workover_fluids_additives.products.forma_drill_ii_l.unit_size'), t('products_page.completion_and_workover_fluids_additives.products.forma_drill_ii_l.description')],
    [t('products_page.completion_and_workover_fluids_additives.products.sodium_bromide_l.trade_name'), t('products_page.completion_and_workover_fluids_additives.products.sodium_bromide_l.unit_size'), t('products_page.completion_and_workover_fluids_additives.products.sodium_bromide_l.description')],
    [t('products_page.completion_and_workover_fluids_additives.products.zinc_bromide.trade_name'), t('products_page.completion_and_workover_fluids_additives.products.zinc_bromide.unit_size'), t('products_page.completion_and_workover_fluids_additives.products.zinc_bromide.description')],
    [t('products_page.completion_and_workover_fluids_additives.products.well_clean.trade_name'), t('products_page.completion_and_workover_fluids_additives.products.well_clean.unit_size'), t('products_page.completion_and_workover_fluids_additives.products.well_clean.description')],
    [t('products_page.completion_and_workover_fluids_additives.products.bio_mcb.trade_name'), t('products_page.completion_and_workover_fluids_additives.products.bio_mcb.unit_size'), t('products_page.completion_and_workover_fluids_additives.products.bio_mcb.description')],
    [t('products_page.completion_and_workover_fluids_additives.products.brine_cor_hp.trade_name'), t('products_page.completion_and_workover_fluids_additives.products.brine_cor_hp.unit_size'), t('products_page.completion_and_workover_fluids_additives.products.brine_cor_hp.description')],
    [t('products_page.completion_and_workover_fluids_additives.products.ox_scav_l.trade_name'), t('products_page.completion_and_workover_fluids_additives.products.ox_scav_l.unit_size'), t('products_page.completion_and_workover_fluids_additives.products.ox_scav_l.description')],
    [t('products_page.completion_and_workover_fluids_additives.products.pipe_cor.trade_name'), t('products_page.completion_and_workover_fluids_additives.products.pipe_cor.unit_size'), t('products_page.completion_and_workover_fluids_additives.products.pipe_cor.description')],
    [t('products_page.completion_and_workover_fluids_additives.products.clean_surf.trade_name'), t('products_page.completion_and_workover_fluids_additives.products.clean_surf.unit_size'), t('products_page.completion_and_workover_fluids_additives.products.clean_surf.description')],
    [t('products_page.completion_and_workover_fluids_additives.products.defoam_alc.trade_name'), t('products_page.completion_and_workover_fluids_additives.products.defoam_alc.unit_size'), t('products_page.completion_and_workover_fluids_additives.products.defoam_alc.description')],
    [t('products_page.completion_and_workover_fluids_additives.products.defoam_slc.trade_name'), t('products_page.completion_and_workover_fluids_additives.products.defoam_slc.unit_size'), t('products_page.completion_and_workover_fluids_additives.products.defoam_slc.description')]
  ];

  return (
    <div className="bg-white min-h-screen">
      <div 
        className="relative h-72 bg-cover bg-center text-white flex items-center justify-center"
        style={{ backgroundImage: `url(${products2})` }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative text-center px-4">
          <h1 className="text-4xl md:text-5xl font-light tracking-tight">
            {t('products_page.completion_and_workover_fluids_additives.title')}
          </h1>
        </div>
      </div>

      <div className="container mx-auto max-w-5xl py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <p className="text-gray-700 text-lg leading-relaxed mb-12 font-light opacity-90">
          {t('products_page.completion_and_workover_fluids_additives.description')}
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