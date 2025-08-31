// src/pages/WaterBasePage.jsx
import React from 'react';
import ContactSidebar from '../components/common/ContactSidebar';
import ResponsiveTable from '../components/common/ResponsiveTable';
import { FiArrowUp } from 'react-icons/fi';
import { useTranslation } from 'react-i18next';

import obm2 from '../assets/img/obm2.jpg';

const WaterBasePage = () => {
  const { t } = useTranslation();

  const tableData = [
    {
      title: t('water_base_page.table_1_title'),
      headers: [
        t('water_base_page.table_headers_trade_name'),
        t('water_base_page.table_headers_fluid_type'),
        t('water_base_page.table_headers_systems_description'),
        t('water_base_page.table_headers_application')
      ],
      data: [
        [
          t('water_base_page.table_1_data_1_trade_name'), 
          "HPWBM", 
          t('water_base_page.table_1_data_1_description'), 
          t('water_base_page.table_1_data_1_application')
        ],
        [
          t('water_base_page.table_1_data_2_trade_name'), 
          "HPWBM", 
          t('water_base_page.table_1_data_2_description'), 
          t('water_base_page.table_1_data_2_application')
        ],
        [
          t('water_base_page.table_1_data_3_trade_name'), 
          "HPWBM", 
          t('water_base_page.table_1_data_3_description'), 
          t('water_base_page.table_1_data_3_application')
        ],
      ]
    },
    {
      title: t('water_base_page.table_2_title'),
      headers: [
        t('water_base_page.table_headers_trade_name'),
        t('water_base_page.table_headers_fluid_type'),
        t('water_base_page.table_headers_systems_description'),
        t('water_base_page.table_headers_application')
      ],
      data: [
        [
          t('water_base_page.table_2_data_1_trade_name'), 
          "HPWBM", 
          t('water_base_page.table_2_data_1_description'), 
          t('water_base_page.table_2_data_1_application')
        ],
        [
          t('water_base_page.table_2_data_2_trade_name'), 
          "HPWBM", 
          t('water_base_page.table_2_data_2_description'), 
          t('water_base_page.table_2_data_2_application')
        ],
      ]
    },
    {
      title: t('water_base_page.table_3_title'),
      headers: [
        t('water_base_page.table_headers_trade_name'),
        t('water_base_page.table_headers_fluid_type'),
        t('water_base_page.table_headers_systems_description'),
        t('water_base_page.table_headers_application')
      ],
      data: [
        [
          t('water_base_page.table_3_data_1_trade_name'), 
          "HPWBM", 
          t('water_base_page.table_3_data_1_description'), 
          t('water_base_page.table_3_data_1_application')
        ],
      ]
    }
  ];

  return (
    <div className="bg-white min-h-screen">
   
      <div className="bg-[#0b0d27] text-white py-16 lg:py-20 flex items-center justify-center">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-light text-center tracking-tight">
          {t('activities.water_base_drilling_fluids_title')}
        </h1>
      </div>

      <div className="container mx-auto max-w-7xl py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          
          <div className="lg:col-span-2 space-y-12">
            <div className="bg-white border border-gray-100 rounded-sm overflow-hidden">
              <div className="overflow-hidden">
                <img 
                  src={obm2} 
                  alt={t('activities.water_base')} 
                  className="w-full h-64 object-cover transition-opacity duration-300 hover:opacity-95" 
                />
              </div>
              <div className="p-6">
                <p className="text-gray-700 leading-relaxed font-light opacity-90">
                  {t('water_base_page.description')}
                </p>
              </div>
            </div>

            <div className="space-y-10">
              {tableData.map((table, index) => (
                <div key={index} className="bg-white border border-gray-100 rounded-sm overflow-hidden">
                  <div className="px-6 py-5 border-b border-gray-100">
                    <h2 className="text-xl font-normal text-gray-800 tracking-wide">{table.title}</h2>
                  </div>
                  <div className="p-6">
                    <ResponsiveTable headers={table.headers} data={table.data} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <ContactSidebar />
          </div>
        </div>
      </div>
      
   
      <button 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} 
        className="fixed bottom-6 right-6 bg-gray-800 text-white rounded-sm h-10 w-10 flex items-center justify-center hover:bg-gray-900 transition-colors duration-300 shadow-sm z-40 opacity-80 hover:opacity-100"
        aria-label="Scroll to top"
      >
        <FiArrowUp size={18}/>
      </button>
    </div>
  );
};

export default WaterBasePage;