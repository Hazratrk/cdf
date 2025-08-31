import React, { useState, useMemo } from 'react';
import { activities } from '../data/activitiesData'; 
import ServiceCard from '../components/common/ServiceCard';
import { FiSearch } from 'react-icons/fi';
import { useTranslation } from 'react-i18next';

const ActivitiesPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const { t } = useTranslation();

  const filteredActivities = useMemo(() => 
    activities.filter(activity =>
      t(`activities.${activity.i18nKey}`).toLowerCase().includes(searchQuery.toLowerCase())
    ), 
    [searchQuery, t]
  );
  

  const translatedActivities = filteredActivities.map(activity => {
    const translationKey = `activities.${activity.i18nKey}`;
    return {
      ...activity,
      translatedTitle: t(translationKey) 
    };
  });

  return (
    <div className="bg-white min-h-screen">
     
      <div className="bg-[#0b0d27] text-white py-16 lg:py-20 flex items-center justify-center">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-light text-center tracking-tight">
          {t('activities_page.title')}
        </h1>
      </div>

 
      <div className="bg-white pb-16 px-4 sm:px-6 lg:px-8">
        <p className="mt-6 text-center text-lg text-gray-600 font-light tracking-wide">
          {t('activities_page.subtitle')}
        </p>
        <div className="container mx-auto max-w-2xl mt-8">
          <div className="relative">
            <input
              type="text"
              placeholder={t('activities_page.search_placeholder')}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 text-gray-700 bg-white border border-gray-200 rounded-sm focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-gray-400 transition-all font-light"
            />
            <FiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
        </div>
      </div>

    
      <div className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="container mx-auto max-w-7xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {translatedActivities.length > 0 ? (
            translatedActivities.map((activity) => (
              <ServiceCard 
                key={activity.link} 
                title={activity.translatedTitle}
                image={activity.image}
                link={activity.link}
              />
            ))
          ) : (
            <div className="col-span-full text-center py-16">
              <p className="text-lg text-gray-500 font-light">{t('activities_page.no_results')}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ActivitiesPage;