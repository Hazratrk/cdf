// src/components/common/Header.jsx

import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { FiSearch, FiGrid, FiX, FiChevronDown } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';


const navLinksData = [
    { name: 'Home', path: '/' },
    { 
      name: 'Activities', 
      path: '/activities', 
      sublinks: [
        { name: 'Nonaqueous Drilling Fluids (OBM)', path: '/activities/nonaqueous-drilling-fluids-obm' },
        { name: 'Water Base Drilling Fluids', path: '/activities/water-base-drilling-fluids' },
        { name: 'Completion and Workover Fluids Services', path: '/activities/completion-and-workover-fluids-services' },
        { name: 'Drilling Fluids Simulation Software', path: '/activities/drilling-fluids-simulation-software' },
        { name: 'Submersible Electric Centrifugal Pumps (EVN)', path: '/activities/submersible-electric-pumps-and-motors-evn' },
        { name: 'Central Laboratory', path: '/activities/central-laboratory' },
        { name: 'Warehouse', path: '/activities/warehouse' },
        { name: 'Logistic Services', path: '/activities/logistic-services' },
        { name: 'Engineering Services', path: '/activities/engineering-services' },
        { name: 'Project Management Services', path: '/activities/project-management-services' },
      ]
    },
    { 
      name: 'Products', 
      path: '/products', 
      sublinks: [
        { name: 'Drilling Fluid Additives', path: '/products/drilling-fluid-additives' },
        { name: 'Completion and Workover Fluids Additives', path: '/products/completion-and-workover-fluids-additives' },
      ] 
    },
    { 
      name: 'Health, Safety and Environment', 
      path: '/hse',
      sublinks: [
        { name: 'Environmental Monitoring', path: '/hse/environmental-monitoring' },
        { name: 'Employees’ Security', path: '/hse/employees-security' },
      ]
    },
    { name: 'About Us', path: '/about' }
];

const Header = () => {
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

  return (

    <header className={`bg-[#0a0d25] text-gray-200 fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'py-4 shadow-lg' : 'py-6'}`}>
      <div className="container mx-auto flex justify-between items-center px-4">
        

        <Link to="/" className="hover:opacity-80 transition-opacity">
          <span className="text-4xl font-extrabold tracking-wider text-white">
            CDF
          </span>
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
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;