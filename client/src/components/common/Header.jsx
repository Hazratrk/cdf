// src/components/common/Header.jsx

import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { FiSearch, FiGrid, FiX, FiChevronDown } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const Header = () => {
  const { t, i18n } = useTranslation();
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDropdown = (name) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };
  
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  

  const navLinksData = [
    { name: t('header.home'), path: '/' },
    { 
      name: t('header.activities'), 
      path: '/activities', 
      sublinks: [
        { name: t('activities.nonaqueous'), path: '/activities/nonaqueous-drilling-fluids-obm' },
        { name: t('activities.water_base'), path: '/activities/water-base-drilling-fluids' },
        { name: t('activities.completion_workover'), path: '/activities/completion-and-workover-fluids-services' },
        { name: t('activities.simulation_software'), path: '/activities/drilling-fluids-simulation-software' },
        { name: t('activities.submersible_pumps'), path: '/activities/submersible-electric-pumps-and-motors-evn' },
        { name: t('activities.central_laboratory'), path: '/activities/central-laboratory' },
        { name: t('activities.warehouse'), path: '/activities/warehouse' },
        { name: t('activities.logistic'), path: '/activities/logistic-services' },
        { name: t('activities.engineering'), path: '/activities/engineering-services' },
        { name: t('activities.project_management'), path: '/activities/project-management-services' },
      ]
    },
    { 
      name: t('header.products'), 
      path: '/products', 
      sublinks: [
        { name: t('products.drilling_additives'), path: '/products/drilling-fluid-additives' },
        { name: t('products.completion_additives'), path: '/products/completion-and-workover-fluids-additives' },
      ] 
    },
    { 
      name: t('header.hse'), 
      path: '/hse',
      sublinks: [
        { name: t('hse.environmental'), path: '/hse/environmental-monitoring' },
        { name: t('hse.employees_security'), path: '/hse/employees-security' },
      ]
    },
    { name: t('header.about_us'), path: '/about' }
  ];

  return (
    <header className={`bg-[#0a0d25] text-gray-200 fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'py-4 shadow-lg' : 'py-6'}`}>
      <div className="container mx-auto flex justify-between items-center px-4">
        
        <Link to="/" className="hover:opacity-80 transition-opacity">
          <span className="text-4xl font-extrabold tracking-wider text-white">
            CDF
          </span>
        </Link>

        {/* Desktop Naviqasiya Menyu */}
        <nav className="hidden lg:flex items-center space-x-10">
          {navLinksData.map((link) => (
            <div 
              key={link.name} 
              className="relative"
              onMouseEnter={() => setActiveDropdown(link.name)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              {link.sublinks ? (
                <div className="flex items-center">
                  <NavLink
                    to={link.path}
                    className={({ isActive }) => `text-lg text-gray-300 hover:text-white transition-colors ${isActive ? 'text-white font-semibold' : ''}`}
                  >
                    {link.name}
                  </NavLink>
                  <button
                    onClick={() => toggleDropdown(link.name)}
                    className="ml-2 text-gray-400 hover:text-white"
                  >
                    <motion.span
                      animate={{ rotate: activeDropdown === link.name ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <FiChevronDown size={20} />
                    </motion.span>
                  </button>
                  
                  <AnimatePresence>
                    {activeDropdown === link.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute left-1/2 -translate-x-1/2 top-full mt-5 w-80 bg-[#1a1f3f] border border-gray-700 rounded-md shadow-lg py-2 z-50"
                      >
                        {link.sublinks.map((sublink) => (
                          <motion.div
                            key={sublink.name}
                            whileHover={{ x: 5, backgroundColor: '#2a304f' }}
                            transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                          >
                            <Link
                              to={sublink.path}
                              className="block px-4 py-2.5 text-sm text-gray-200 hover:text-white"
                              onClick={() => setActiveDropdown(null)}
                            >
                              {sublink.name}
                            </Link>
                          </motion.div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <NavLink
                  to={link.path}
                  className={({ isActive }) => `text-lg text-gray-300 hover:text-white transition-colors ${isActive ? 'text-white font-semibold' : ''}`}
                >
                  {link.name}
                </NavLink>
              )}
            </div>
          ))}
        </nav>

        <div className="hidden lg:flex items-center space-x-6">
          {/* Dil seçimi düymələri */}
          <button onClick={() => changeLanguage('az')} className="text-sm px-2 py-1 rounded-md bg-white/10 text-white hover:bg-white/20 transition-colors">AZ</button>
          <button onClick={() => changeLanguage('en')} className="text-sm px-2 py-1 rounded-md bg-white/10 text-white hover:bg-white/20 transition-colors">EN</button>
          <button onClick={() => changeLanguage('ru')} className="text-sm px-2 py-1 rounded-md bg-white/10 text-white hover:bg-white/20 transition-colors">RU</button>

          <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} className="text-gray-200 hover:text-white transition-colors">
            <FiSearch className="text-xl" />
          </motion.button>
          <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} className="text-gray-200 hover:text-white transition-colors">
            <FiGrid className="text-xl" />
          </motion.button>
        </div>

        <div className="lg:hidden">
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-gray-200">
            {mobileMenuOpen ? <FiX size={28} /> : <FiGrid size={28} />}
          </button>
        </div>
      </div>
      
      {/* Mobil Naviqasiya Menyu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden absolute top-full left-0 w-full bg-[#0a0d25] border-t border-white/10"
          >
             {navLinksData.map((link) => (
                <div key={link.name} className="border-b border-white/10">
                  {link.sublinks ? (
                    <>
                      <div className="flex justify-between items-center py-4 px-4">
                        <Link to={link.path} onClick={() => setMobileMenuOpen(false)} className="text-lg text-gray-200 hover:text-white">
                          {link.name}
                        </Link>
                        <button onClick={() => toggleDropdown(link.name)} className="text-gray-200">
                           <motion.span animate={{ rotate: activeDropdown === link.name ? 180 : 0 }}>
                            <FiChevronDown size={20} />
                          </motion.span>
                        </button>
                      </div>
                      <AnimatePresence>
                        {activeDropdown === link.name && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden bg-[#1a1f3f]"
                          >
                            <div className="py-2 pl-8">
                              {link.sublinks.map((sublink) => (
                                <Link
                                  key={sublink.name}
                                  to={sublink.path}
                                  className="block py-2 text-sm text-gray-300 hover:text-white"
                                  onClick={() => setMobileMenuOpen(false)}
                                >
                                  {sublink.name}
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <Link
                      to={link.path}
                      className="block py-4 px-4 text-lg text-gray-200 hover:text-white"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {link.name}
                    </Link>
                  )}
                </div>
              ))}
              {/* Mobil menyuda dil seçimi düymələri */}
              <div className="flex justify-center space-x-4 py-4 px-4 border-t border-white/10">
                <button onClick={() => { changeLanguage('az'); setMobileMenuOpen(false); }} className="px-2 py-1 rounded-md text-white border border-white/20">AZ</button>
                <button onClick={() => { changeLanguage('en'); setMobileMenuOpen(false); }} className="px-2 py-1 rounded-md text-white border border-white/20">EN</button>
                <button onClick={() => { changeLanguage('ru'); setMobileMenuOpen(false); }} className="px-2 py-1 rounded-md text-white border border-white/20">RU</button>
              </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;