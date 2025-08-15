import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { FiSearch, FiGrid, FiX, FiChevronDown, FiChevronUp } from 'react-icons/fi';

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
        'Nonaqueous Drilling Fluids (OBM)',
        'Water Base Drilling Fluids',
        'Completion and Workover Fluids Services',
        'Drilling Fluids Simulation Software',
        'Submersible Electric Centrifugal Pumps and Submersible Electric Motors for ESP drive (EVN)',
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
          <Link to="/" className="text-2xl font-bold text-white">
            CDF
          </Link>


          <nav className="hidden md:flex items-center space-x-8">
            {navLinksData.map((link) => (
              <div key={link.name} className="relative group">
                {link.sublinks ? (
                  <>
                    <button
                      onClick={() => toggleDropdown(link.name)}
                      className="text-gray-200 hover:text-white relative py-2 flex items-center"
                    >
                      {link.name}
                      <span className={`absolute left-0 bottom-0 h-0.5 bg-white transition-all duration-300 ${activeDropdown === link.name ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                      <span className="ml-1">
                        {activeDropdown === link.name ? <FiChevronUp size={16} /> : <FiChevronDown size={16} />}
                      </span>
                    </button>
                    {activeDropdown === link.name && (
                      <div className="absolute left-0 mt-1 w-64 bg-[#1a1f3f] border border-gray-700 rounded-md shadow-lg py-2 z-50">
                        {link.sublinks.map((sublink) => (
                          <Link
                            key={sublink}
                            to={`${link.path}/${sublink.replace(/\s+/g, '-').toLowerCase()}`}
                            className="block px-4 py-2 text-sm text-gray-200 hover:bg-[#2a304f] hover:text-white"
                            onClick={() => setActiveDropdown(null)}
                          >
                            {sublink}
                          </Link>
                        ))}
                      </div>
                    )}
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
                        <span className={`absolute left-0 bottom-0 h-0.5 bg-white transition-all duration-300 ${isActive ? 'w-full' : 'w-0 hover:w-full'}`}></span>
                      </>
                    )}
                  </NavLink>
                )}
              </div>
            ))}
          </nav>

  
          <div className="hidden md:flex items-center space-x-6">
            <div className="relative">
              <select className="bg-transparent border-none text-gray-200 text-sm focus:outline-none appearance-none pr-6">
                <option>EN</option>
                <option>AZ</option>
                <option>RU</option>
              </select>
              <div className="absolute right-0 top-1/2 transform -translate-y-1/2 pointer-events-none">
                <FiChevronDown size={16} />
              </div>
            </div>
            <FiSearch className="text-xl text-gray-200 cursor-pointer hover:text-white" />
            <FiGrid className="text-xl text-gray-200 cursor-pointer hover:text-white" />
          </div>

         
          <div className="md:hidden flex items-center space-x-4">
            <button 
              className="text-gray-200"
              onClick={() => setMobileOptionsOpen(!mobileOptionsOpen)}
            >
              <FiGrid size={24} />
            </button>
            <button 
              className="text-gray-200"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <FiX size={24} /> : <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>}
            </button>
          </div>
        </div>

 
        {mobileOptionsOpen && (
          <div className="md:hidden absolute right-4 top-16 bg-[#1a1f3f] border border-gray-700 rounded-md shadow-lg py-2 z-50 w-48">
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
              <div className="flex items-center px-3 py-2 text-gray-200 hover:bg-[#2a304f] rounded cursor-pointer">
                <FiSearch className="mr-2" />
                <span>Search</span>
              </div>
            </div>
          </div>
        )}

  
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 bg-[#1a1f3f] rounded-lg">
            {navLinksData.map((link) => (
              <div key={link.name} className="border-b border-gray-700">
                {link.sublinks ? (
                  <>
                    <button
                      onClick={() => toggleDropdown(link.name)}
                      className="w-full text-left py-3 px-4 text-gray-200 hover:text-white flex justify-between items-center"
                    >
                      {link.name}
                      {activeDropdown === link.name ? <FiChevronUp size={16} /> : <FiChevronDown size={16} />}
                    </button>
                    {activeDropdown === link.name && (
                      <div className="pl-6 pb-2 bg-[#2a304f]">
                        {link.sublinks.map((sublink) => (
                          <Link
                            key={sublink}
                            to={`${link.path}/${sublink.replace(/\s+/g, '-').toLowerCase()}`}
                            className="block py-2 px-4 text-sm text-gray-300 hover:text-white hover:bg-[#3a3f5f]"
                            onClick={() => {
                              setMobileMenuOpen(false);
                              setActiveDropdown(null);
                            }}
                          >
                            {sublink}
                          </Link>
                        ))}
                      </div>
                    )}
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
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;