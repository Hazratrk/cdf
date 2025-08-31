import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import DrillingAdditivesImage from '../assets/img/products1.jpg';
import CompletionAdditivesImage from '../assets/img/products2.jpg';

const ProductsPage = () => {
  const { t } = useTranslation();
  const [searchTerm, setSearchTerm] = useState('');

  const products = [
    {
      title: t('products.drilling_additives'),
      description: t('water_base_page.description'), 
      image: DrillingAdditivesImage,
      link: "/products/drilling-fluid-additives"
    },
    {
      title: t('products.completion_additives'),
      description: t('completion_workover_fluids_text_1'),
      image: CompletionAdditivesImage,
      link: "/products/completion-and-workover-fluids-additives"
    }
  ];

  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <main className="bg-gray-50 min-h-screen">
      <section className="container mx-auto px-4 py-16">
        <div className="flex justify-center mb-12">
          <div className="relative w-full max-w-xl">
            <input
              type="text"
              placeholder={t('activities_page.search_placeholder')}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 shadow-md"
            />
          </div>
        </div>

        {filteredProducts.length > 0 ? (
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-2">
            {filteredProducts.map((product, index) => (
              <Link
                key={index}
                to={product.link}
                className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col"
              >
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="p-6 flex-1 flex flex-col">
                  <h2 className="text-2xl font-semibold text-blue-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {product.title}
                  </h2>
                  <p className="text-gray-600 flex-1 leading-relaxed">
                    {product.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center text-gray-500 text-lg">
            {t('activities_page.no_results')}
          </div>
        )}
      </section>
    </main>
  );
};

export default ProductsPage;
