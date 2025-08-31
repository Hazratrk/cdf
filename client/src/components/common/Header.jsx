import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { FiSearch, FiGrid, FiX, FiChevronDown } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import Logo from '../../assets/img/logo.jpeg';
import { headerActivities, headerProducts, headerHse } from '../../data/headerData'; 

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
      sublinks: headerActivities, 
      i18nKey: 'activities'
    },
    {
      name: t('header.products'),
      path: '/products',
      sublinks: headerProducts, 
      i18nKey: 'products'
    },
    {
      name: t('header.hse'),
      path: '/hse',
      sublinks: headerHse, 
      i18nKey: 'hse'
    },
    { name: t('header.about_us'), path: '/about' }
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 
      ${scrolled ? 'py-3 shadow-lg bg-gradient-to-r from-[#0f172a] via-[#1e293b] to-[#0f172a]/95 backdrop-blur-md' : 'py-5 bg-gradient-to-r from-[#0f172a] via-[#1e293b] to-[#0f172a]'}`}
    >
      <div className="container mx-auto flex justify-between items-center px-4">
 
        <Link to="/" className="flex items-center gap-2 group">
          <motion.img
            src={Logo}
            alt="Logo"
            className="w-14 h-14 shadow-md border border-cyan-500/40"
            whileHover={{ rotate: 3, scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 200 }}
          />
        </Link>

       
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
                    className={({ isActive }) =>
                      `text-lg font-medium transition-all duration-300 ${
                        isActive
                          ? 'text-cyan-400 drop-shadow-[0_0_6px_rgba(34,211,238,0.7)]'
                          : 'text-gray-300 hover:text-cyan-400 hover:drop-shadow-[0_0_6px_rgba(34,211,238,0.7)]'
                      }`
                    }
                  >
                    {link.name}
                  </NavLink>
                  <motion.button
                    onClick={() => toggleDropdown(link.name)}
                    className="ml-1 text-gray-400 hover:text-cyan-400"
                    animate={{ rotate: activeDropdown === link.name ? 180 : 0 }}
                    transition={{ duration: 0.25 }}
                  >
                    <FiChevronDown size={20} />
                  </motion.button>

                  <AnimatePresence>
                    {activeDropdown === link.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.3 }}
                        className="absolute left-1/2 -translate-x-1/2 top-full mt-5 w-80 bg-[#1e293b] border border-cyan-500/20 rounded-xl shadow-xl py-2 z-50"
                      >
                        {link.sublinks.map((sublink) => (
                          <motion.div
                            key={sublink.i18nKey}
                            whileHover={{ x: 6, backgroundColor: '#0f172a' }}
                            transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                          >
                            <Link
                              to={sublink.link}
                              className="block px-4 py-2.5 text-sm text-gray-200 hover:text-cyan-400"
                              onClick={() => setActiveDropdown(null)}
                            >
                              {t(`${link.i18nKey}.${sublink.i18nKey}`)}
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
                  className={({ isActive }) =>
                    `text-lg font-medium transition-all duration-300 ${
                      isActive
                        ? 'text-cyan-400 drop-shadow-[0_0_6px_rgba(34,211,238,0.7)]'
                        : 'text-gray-300 hover:text-cyan-400 hover:drop-shadow-[0_0_6px_rgba(34,211,238,0.7)]'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              )}
            </div>
          ))}
        </nav>


        <div className="hidden lg:flex items-center space-x-6">
          {['az', 'en', 'ru'].map((lng) => (
            <button
              key={lng}
              onClick={() => changeLanguage(lng)}
              className="text-sm px-2 py-1 rounded-md border border-cyan-500/30 text-gray-200 hover:text-cyan-400 hover:border-cyan-400 transition-colors"
            >
              {lng.toUpperCase()}
            </button>
          ))}

          <motion.button whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }} className="text-gray-300 hover:text-cyan-400">
            <FiSearch className="text-xl" />
          </motion.button>
          <motion.button whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }} className="text-gray-300 hover:text-cyan-400">
            <FiGrid className="text-xl" />
          </motion.button>
        </div>


        <div className="lg:hidden">
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-gray-200">
            {mobileMenuOpen ? <FiX size={28} /> : <FiGrid size={28} />}
          </button>
        </div>
      </div>


      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="lg:hidden absolute top-full left-0 w-full bg-gradient-to-b from-[#0f172a] via-[#1e293b] to-[#0f172a] border-t border-cyan-500/20"
          >
            {navLinksData.map((link) => (
              <div key={link.name} className="border-b border-cyan-500/10">
                <Link
                  to={link.path}
                  className="block py-4 px-4 text-lg text-gray-300 hover:text-cyan-400 transition-all"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              </div>
            ))}
          
            <div className="flex justify-center space-x-4 py-4 px-4 border-t border-cyan-500/10">
              {['az', 'en', 'ru'].map((lng) => (
                <button
                  key={lng}
                  onClick={() => {
                    changeLanguage(lng);
                    setMobileMenuOpen(false);
                  }}
                  className="px-3 py-1 rounded-md border border-cyan-500/30 text-gray-200 hover:text-cyan-400 hover:border-cyan-400"
                >
                  {lng.toUpperCase()}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;