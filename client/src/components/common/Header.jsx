import React, { useState, useEffect } from 'react';
import { NavLink, Link, useNavigate, useLocation } from 'react-router-dom';
import { FiGrid, FiX, FiChevronDown, FiLinkedin, FiMail, FiInstagram, FiHome, FiActivity, FiBox, FiShield, FiInfo } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import logo from '../../assets/img/logo.jpeg';

const Header = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [socialsOpen, setSocialsOpen] = useState(false);

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
    setMobileMenuOpen(false);
  };

  const navLinksData = [
    { 
      name: t('header.home'), 
      path: '/', 
      icon: <FiHome className="mr-2" />
    },
    {
      name: t('header.activities'),
      path: '/activities',
      icon: <FiActivity className="mr-2" />
    },
    {
      name: t('header.products'),
      path: '/products',
      icon: <FiBox className="mr-2" />
    },
    {
      name: t('header.hse'),
      path: '/hse',
      icon: <FiShield className="mr-2" />
    },
    { 
      name: t('header.about_us'), 
      path: '/about',
      icon: <FiInfo className="mr-2" />
    }
  ];

  const socialLinks = [
    { 
      name: 'LinkedIn', 
      icon: <FiLinkedin size={24} />, 
      link: 'https://www.linkedin.com/company/caspian-drilling-fluids/posts/?feedView=all',
      description: 'Follow us on LinkedIn for professional updates'
    },
    { 
      name: 'Instagram', 
      icon: <FiInstagram size={24} />, 
      link: 'https://www.instagram.com/caspian.drilling.fluids?utm_source=ig_web_button_share_sheet&igsh=dTR3c2UxbmxsdDBq',
      description: 'Follow us on Instagram for visual content'
    },
    { 
      name: 'Email Us', 
      icon: <FiMail size={24} />, 
      link: 'mailto:office@caspiandf.com',
      description: 'office@caspiandf.com'
    },
  ];

  const contactInfo = {
    aze: 'AZE (+994 12) 488-10-49',
    uae: 'UAE (+971) 50-79-71-179'
  };

  const socialContainerVariants = {
    hidden: { 
      opacity: 0,
      x: '100%',
    },
    visible: { 
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        damping: 25,
        stiffness: 200,
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    },
    exit: {
      opacity: 0,
      x: '100%',
      transition: {
        duration: 0.3,
        when: "afterChildren"
      }
    }
  };

  const socialItemVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 50 }
  };

  const getCurrentPageName = () => {
    const currentPage = navLinksData.find(link => link.path === location.pathname);
    return currentPage ? currentPage.name : t('header.home');
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 
      ${scrolled ? 'py-2 shadow-lg bg-gradient-to-r from-[#0f172a] via-[#1e293b] to-[#0f172a]/95 backdrop-blur-md' : 'py-3 bg-gradient-to-r from-[#0f172a] via-[#1e293b] to-[#0f172a]'}`}
    >
      <div className="container mx-auto flex justify-between items-center px-6">
      
        {/* Logo Section - Simple and Professional */}
        <Link to="/" className="flex items-center gap-4 group">
          <motion.div
            className="relative"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <img 
              src={logo} 
              alt="Caspian Drilling Fluids Logo" 
              className="w-14 h-14 object-contain"
            />
          </motion.div>
          <div className="hidden md:block min-w-0 border-l border-cyan-500/30 pl-4">
            <h1 className="text-white font-semibold text-lg tracking-tight truncate">
              Caspian Drilling Fluids
            </h1>
            <p className="text-cyan-400 text-sm font-medium mt-1 truncate">
              {getCurrentPageName()}
            </p>
          </div>
        </Link>

        {/* Desktop Navigation - Enhanced for longer texts */}
        <nav className="hidden lg:flex items-center space-x-8 xl:space-x-12">
          {navLinksData.map((link) => (
            <div
              key={link.name}
              className="relative"
            >
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  `flex items-center text-base font-semibold transition-all duration-300 whitespace-nowrap min-w-0 ${
                    isActive
                      ? 'text-cyan-400 drop-shadow-[0_0_6px_rgba(34,211,238,0.7)]'
                      : 'text-gray-300 hover:text-cyan-400 hover:drop-shadow-[0_0_6px_rgba(34,211,238,0.7)]'
                  }`
                }
              >
                {link.icon}
                <span className="truncate max-w-[120px] xl:max-w-[150px]">{link.name}</span>
              </NavLink>
              
              {/* Active Indicator */}
              <AnimatePresence>
                {location.pathname === link.path && (
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: '100%' }}
                    exit={{ width: 0 }}
                    className="h-1 bg-cyan-400 mt-2 rounded-full"
                  />
                )}
              </AnimatePresence>
            </div>
          ))}
        </nav>

        {/* Right Section - Improved spacing */}
        <div className="flex items-center space-x-4 xl:space-x-6 relative">
          {/* Language Selector - Enhanced for longer texts */}
          <div className="hidden md:flex items-center space-x-1 bg-[#1e293b] rounded-lg p-1 border border-cyan-500/20">
            {['az', 'en', 'ru'].map((lng) => (
              <motion.button
                key={lng}
                onClick={() => changeLanguage(lng)}
                className={`px-4 py-2 rounded-md text-sm font-semibold transition-colors whitespace-nowrap min-w-[60px] text-center ${
                  i18n.language === lng 
                    ? 'bg-cyan-600 text-white shadow-lg' 
                    : 'text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {lng.toUpperCase()}
              </motion.button>
            ))}
          </div>

          {/* Social Media Button - Enhanced */}
          <motion.button 
            whileHover={{ scale: 1.1 }} 
            whileTap={{ scale: 0.9 }} 
            className="p-3 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-lg text-white shadow-lg hover:shadow-cyan-500/30 transition-all duration-300 border border-cyan-400/20"
            onClick={() => setSocialsOpen(true)}
            aria-label="Open social media panel"
          >
            <FiGrid className="text-xl" />
          </motion.button>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <motion.button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
            className="p-3 text-gray-200 hover:text-cyan-400 transition-colors bg-[#1e293b] rounded-lg border border-cyan-500/20"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {mobileMenuOpen ? <FiX size={24} /> : <FiGrid size={24} />}
          </motion.button>
        </div>
      </div>

      {/* Social Media Panel - Enhanced */}
      <AnimatePresence>
        {socialsOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40"
              onClick={() => setSocialsOpen(false)}
            />
            
            <motion.div
              variants={socialContainerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="fixed right-0 top-0 h-full w-full max-w-md bg-gradient-to-b from-[#0f172a] via-[#1e293b] to-[#0f172a] shadow-2xl border-l border-cyan-500/30 z-50 overflow-y-auto"
            >
              <div className="p-6">
                <div className="flex justify-between items-center mb-10">
                  <h2 className="text-2xl font-bold text-cyan-400">Connect With Us</h2>
                  <motion.button 
                    whileHover={{ rotate: 90, scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="text-gray-400 hover:text-cyan-400 text-xl p-2 rounded-full hover:bg-cyan-500/10 transition-colors"
                    onClick={() => setSocialsOpen(false)}
                    aria-label="Close panel"
                  >
                    <FiX />
                  </motion.button>
                </div>
                
                <motion.div 
                  className="flex flex-col space-y-6 mb-12"
                  variants={socialContainerVariants}
                >
                  {socialLinks.map((social) => (
                    <motion.a
                      key={social.name}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-start space-x-4 p-5 rounded-xl bg-[#0f172a]/50 hover:bg-[#0f172a] border border-cyan-500/20 transition-all group"
                      variants={socialItemVariants}
                      whileHover={{ x: 5, backgroundColor: 'rgba(6, 182, 212, 0.1)' }}
                    >
                      <span className="text-2xl text-cyan-400 group-hover:scale-110 transition-transform pt-1">
                        {social.icon}
                      </span>
                      <div className="min-w-0 flex-1">
                        <h3 className="text-lg font-semibold text-gray-200 group-hover:text-cyan-400 transition-colors truncate">
                          {social.name}
                        </h3>
                        <p className="text-gray-400 mt-1 text-sm break-words">{social.description}</p>
                      </div>
                    </motion.a>
                  ))}
                </motion.div>
                
                {/* Contact Information - Enhanced */}
                <motion.div 
                  className="bg-[#0f172a] p-6 rounded-xl border border-cyan-500/20"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  <h3 className="text-lg font-semibold text-cyan-400 mb-4">Contact Information</h3>
                  <div className="space-y-3">
                    <p className="text-gray-200 font-medium break-words">{contactInfo.aze}</p>
                    <p className="text-gray-200 font-medium break-words">{contactInfo.uae}</p>
                    <p className="text-gray-200 font-medium break-words">office@caspiandf.com</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Mobile Menu - Enhanced for longer texts */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="lg:hidden absolute top-full left-0 w-full bg-gradient-to-b from-[#0f172a] via-[#1e293b] to-[#0f172a] border-t border-cyan-500/30 shadow-2xl"
          >
            {navLinksData.map((link) => (
              <div key={link.name} className="border-b border-cyan-500/10">
                <Link
                  to={link.path}
                  className="flex items-center py-5 px-6 text-lg font-semibold text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/5 transition-all"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.icon}
                  <span className="truncate flex-1">{link.name}</span>
                </Link>
              </div>
            ))}
          
            {/* Mobile Language Selector */}
            <div className="flex justify-center space-x-2 py-6 px-4 border-t border-cyan-500/10">
              {['az', 'en', 'ru'].map((lng) => (
                <motion.button
                  key={lng}
                  onClick={() => changeLanguage(lng)}
                  className={`px-4 py-2 rounded-md text-sm font-semibold whitespace-nowrap min-w-[60px] ${
                    i18n.language === lng 
                      ? 'bg-cyan-600 text-white shadow-lg' 
                      : 'bg-[#1e293b] text-gray-200 hover:text-cyan-400 border border-cyan-500/20'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {lng.toUpperCase()}
                </motion.button>
              ))}
            </div>
            
            {/* Mobile Social Links */}
            <div className="p-6 border-t border-cyan-500/10">
              <h3 className="text-cyan-400 font-semibold mb-4 text-lg">Connect With Us</h3>
              <div className="grid grid-cols-3 gap-3">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center justify-center p-4 rounded-lg bg-[#1e293b] hover:bg-cyan-500/10 text-gray-300 hover:text-cyan-400 transition-colors border border-cyan-500/20 text-center"
                    onClick={() => setMobileMenuOpen(false)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {social.icon}
                    <span className="text-xs mt-2 font-medium truncate w-full">{social.name}</span>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;