import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { FiSearch, FiGrid, FiX, FiChevronDown, FiChevronUp } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileOptionsOpen, setMobileOptionsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinksData = [
    { name: 'Home', path: '/' },
    { 
      name: 'Activities', 
      path: '/activities', 
      sublinks: [
        'Nonaqueous Drilling Fluids OBM',
        'Water Base Drilling Fluids',
        'Completion and Workover Fluids Services',
        'Drilling Fluids Simulation Software',
        'Submersible Electric Centrifugal Pumps and Submersible Electric Motors for ESP drive EVN',
        'Central Laboratory',
        'Warehouse',
        'Logistic Services',
        'Engineering Services',
        'Project Management Services'
      ]
    },
    { 
      name: 'Products', 
      path: '/products', 
      sublinks: [
        'Drilling Fluid Additives',
        'Completion and Workover Fluids Additives'
      ] 
    },
    { 
      name: 'Health, Safety and Environment', 
      path: '/hse',
      sublinks: [
        'Environmental Monitoring',
        'Employees Security'
      ]
    },
    { name: 'About Us', path: '/about' }
  ];

  const toggleDropdown = (name) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  return (
    <header className={`bg-[#0a0d25] text-gray-200 fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'py-2 shadow-lg' : 'py-4'}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-white hover:opacity-80 transition-opacity">
            CDF
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinksData.map((link) => (
              <div key={link.name} className="relative group">
                {link.sublinks ? (
                  <>
                    <button
                      onMouseEnter={() => setActiveDropdown(link.name)}
                      onMouseLeave={() => setActiveDropdown(null)}
                      onClick={() => toggleDropdown(link.name)}
                      className="text-gray-200 hover:text-white relative py-2 flex items-center"
                    >
                      {link.name}
                      <motion.span 
                        className="absolute left-0 bottom-0 h-0.5 bg-white"
                        initial={{ width: 0 }}
                        animate={{ 
                          width: activeDropdown === link.name ? '100%' : '0%',
                          transition: { duration: 0.3 }
                        }}
                        whileHover={{ width: '100%' }}
                      />
                      <motion.span 
                        className="ml-1"
                        animate={{ 
                          rotate: activeDropdown === link.name ? 180 : 0,
                          transition: { duration: 0.2 }
                        }}
                      >
                        <FiChevronDown size={16} />
                      </motion.span>
                    </button>
                    
                    <AnimatePresence>
                      {activeDropdown === link.name && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute left-0 mt-1 w-64 bg-[#1a1f3f] border border-gray-700 rounded-md shadow-lg py-2 z-50"
                          onMouseEnter={() => setActiveDropdown(link.name)}
                          onMouseLeave={() => setActiveDropdown(null)}
                        >
                          {link.sublinks.map((sublink) => (
                            <motion.div
                              key={sublink}
                              whileHover={{ x: 5 }}
                              transition={{ type: 'spring', stiffness: 300 }}
                            >
                              <Link
                                to={`${link.path}/${sublink.replace(/\s+/g, '-').toLowerCase()}`}
                                className="block px-4 py-2 text-sm text-gray-200 hover:bg-[#2a304f] hover:text-white"
                                onClick={() => setActiveDropdown(null)}
                              >
                                {sublink}
                              </Link>
                            </motion.div>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </>
                ) : (
                  <NavLink
                    to={link.path}
                    className={({ isActive }) => 
                      `text-gray-200 hover:text-white relative py-2 ${isActive ? 'text-white' : ''}`
                    }
                  >
                    {({ isActive }) => (
                      <>
                        {link.name}
                        <motion.span 
                          className="absolute left-0 bottom-0 h-0.5 bg-white"
                          initial={{ width: 0 }}
                          animate={{ 
                            width: isActive ? '100%' : '0%',
                            transition: { duration: 0.3 }
                          }}
                          whileHover={{ width: '100%' }}
                        />
                      </>
                    )}
                  </NavLink>
                )}
              </div>
            ))}
          </nav>

          {/* Desktop Right Icons */}
          <div className="hidden md:flex items-center space-x-6">
            <div className="relative group">
              <select className="bg-transparent border-none text-gray-200 text-sm focus:outline-none appearance-none pr-6 group-hover:text-white transition-colors">
                <option>EN</option>
                <option>AZ</option>
                <option>RU</option>
              </select>
              <motion.div 
                className="absolute right-0 top-1/2 transform -translate-y-1/2 pointer-events-none"
                animate={{ 
                  rotate: mobileOptionsOpen ? 180 : 0,
                  transition: { duration: 0.2 }
                }}
              >
                <FiChevronDown size={16} />
              </motion.div>
            </div>
            <motion.button 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="text-gray-200 hover:text-white transition-colors"
            >
              <FiSearch className="text-xl" />
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="text-gray-200 hover:text-white transition-colors"
            >
              <FiGrid className="text-xl" />
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <motion.button 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="text-gray-200"
              onClick={() => setMobileOptionsOpen(!mobileOptionsOpen)}
            >
              <FiGrid size={24} />
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="text-gray-200"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <FiX size={24} /> : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </motion.button>
          </div>
        </div>

        {/* Mobile Options Dropdown */}
        <AnimatePresence>
          {mobileOptionsOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="md:hidden absolute right-4 top-16 bg-[#1a1f3f] border border-gray-700 rounded-md shadow-lg py-2 z-50 w-48"
            >
              <div className="px-4 py-2">
                <div className="relative mb-3">
                  <select className="w-full bg-[#2a304f] text-gray-200 text-sm px-3 py-1 rounded border border-gray-600 focus:outline-none appearance-none pr-6">
                    <option>EN</option>
                    <option>AZ</option>
                    <option>RU</option>
                  </select>
                  <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                    <FiChevronDown size={16} />
                  </div>
                </div>
                <motion.div 
                  whileHover={{ x: 5 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  className="flex items-center px-3 py-2 text-gray-200 hover:bg-[#2a304f] rounded cursor-pointer"
                >
                  <FiSearch className="mr-2" />
                  <span>Search</span>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden mt-4 overflow-hidden bg-[#1a1f3f] rounded-lg"
            >
              {navLinksData.map((link) => (
                <div key={link.name} className="border-b border-gray-700">
                  {link.sublinks ? (
                    <>
                      <button
                        onClick={() => toggleDropdown(link.name)}
                        className="w-full text-left py-3 px-4 text-gray-200 hover:text-white flex justify-between items-center"
                      >
                        {link.name}
                        <motion.span
                          animate={{ 
                            rotate: activeDropdown === link.name ? 180 : 0,
                            transition: { duration: 0.2 }
                          }}
                        >
                          <FiChevronDown size={16} />
                        </motion.span>
                      </button>
                      <AnimatePresence>
                        {activeDropdown === link.name && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2 }}
                            className="pl-6 bg-[#2a304f]"
                          >
                            {link.sublinks.map((sublink) => (
                              <motion.div
                                key={sublink}
                                whileHover={{ x: 5 }}
                                transition={{ type: 'spring', stiffness: 300 }}
                              >
                                <Link
                                  to={`${link.path}/${sublink.replace(/\s+/g, '-').toLowerCase()}`}
                                  className="block py-2 px-4 text-sm text-gray-300 hover:text-white hover:bg-[#3a3f5f]"
                                  onClick={() => {
                                    setMobileMenuOpen(false);
                                    setActiveDropdown(null);
                                  }}
                                >
                                  {sublink}
                                </Link>
                              </motion.div>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <Link
                      to={link.path}
                      className="block py-3 px-4 text-gray-200 hover:text-white"
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
      </div>
    </header>
  );
};

export default Header;