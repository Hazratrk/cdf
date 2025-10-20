import React, { useState, useEffect } from 'react';
import { NavLink, Link, useNavigate, useLocation } from 'react-router-dom';
import { FiGrid, FiX, FiChevronDown, FiLinkedin, FiMail, FiInstagram, FiHome, FiActivity, FiBox, FiShield, FiInfo, FiAward } from 'react-icons/fi';
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
      name: t('header.quality_certificates'),
      path: '/quality-certificates',
      icon: <FiAward className="mr-2" />
    },
    { 
      name: t('header.about_us'), 
      path: '/about',
      icon: <FiInfo className="mr-2" />
    }
  ];

  const socialLinks = [
    { 
      name: t('header.linkedin'), 
      icon: <FiLinkedin size={24} />, 
      link: 'https://www.linkedin.com/company/caspian-drilling-fluids/posts/?feedView=all',
      description: t('header.linkedinDesc')
    },
    { 
      name: t('header.instagram'), 
      icon: <FiInstagram size={24} />, 
      link: 'https://www.instagram.com/caspian.drilling.fluids?utm_source=ig_web_button_share_sheet&igsh=dTR3c2UxbmxsdDBq',
      description: t('header.instagramDesc')
    },
    { 
      name: t('header.emailUs'), 
      icon: <FiMail size={24} />, 
      link: 'mailto:office@caspiandf.com',
      description: t('header.email')
    },
  ];

  const contactInfo = {
    aze: t('header.phone_aze'),
    uae: t('header.phone_uae'),
    email: t('header.email')
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
      <div className="container mx-auto flex justify-between items-center px-4 sm:px-6">
      
        {/* Logo Section - Clean without background */}
        <Link to="/" className="flex items-center gap-3 group flex-shrink-0">
          <motion.div
            className="relative"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <img 
              src={logo} 
              alt="Caspian Drilling Fluids Logo" 
              className="w-12 h-12 sm:w-14 sm:h-14 object-contain"
            />
          </motion.div>
          <div className="hidden sm:block min-w-0 border-l border-cyan-500/30 pl-3 sm:pl-4">
            <h1 className="text-white font-semibold text-sm sm:text-lg tracking-tight truncate max-w-[140px] sm:max-w-[200px]">
              Caspian Drilling Fluids
            </h1>
            <p className="text-cyan-400 text-xs sm:text-sm font-medium mt-1 truncate max-w-[140px] sm:max-w-[200px]">
              {getCurrentPageName()}
            </p>
          </div>
        </Link>

        {/* Desktop Navigation - Optimized spacing for more items */}
        <nav className="hidden lg:flex items-center space-x-4 xl:space-x-6 2xl:space-x-8">
          {navLinksData.map((link) => (
            <div
              key={link.name}
              className="relative"
            >
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  `flex items-center text-sm xl:text-base font-semibold transition-all duration-300 whitespace-nowrap min-w-0 ${
                    isActive
                      ? 'text-cyan-400 drop-shadow-[0_0_6px_rgba(34,211,238,0.7)]'
                      : 'text-gray-300 hover:text-cyan-400 hover:drop-shadow-[0_0_6px_rgba(34,211,238,0.7)]'
                  }`
                }
              >
                {link.icon}
                <span className="truncate max-w-[100px] xl:max-w-[120px] 2xl:max-w-[140px]">{link.name}</span>
              </NavLink>
              
              {/* Active Indicator */}
              <AnimatePresence>
                {location.pathname === link.path && (
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: '100%' }}
                    exit={{ width: 0 }}
                    className="h-1 bg-cyan-400 mt-1 sm:mt-2 rounded-full"
                  />
                )}
              </AnimatePresence>
            </div>
          ))}
        </nav>

        {/* Right Section - Improved responsive spacing */}
        <div className="flex items-center space-x-2 sm:space-x-4 xl:space-x-6 relative">
          {/* Language Selector - Responsive sizing */}
          <div className="hidden md:flex items-center space-x-1 bg-[#1e293b] rounded-lg p-1 border border-cyan-500/20">
            {['az', 'en', 'ru'].map((lng) => (
              <motion.button
                key={lng}
                onClick={() => changeLanguage(lng)}
                className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-md text-xs sm:text-sm font-semibold transition-colors whitespace-nowrap min-w-[50px] sm:min-w-[60px] text-center ${
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

          {/* Social Media Button - Responsive */}
          <motion.button 
            whileHover={{ scale: 1.1 }} 
            whileTap={{ scale: 0.9 }} 
            className="p-2 sm:p-3 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-lg text-white shadow-lg hover:shadow-cyan-500/30 transition-all duration-300 border border-cyan-400/20 flex-shrink-0"
            onClick={() => setSocialsOpen(true)}
            aria-label="Open social media panel"
          >
            <FiGrid className="text-lg sm:text-xl" />
          </motion.button>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex-shrink-0">
          <motion.button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
            className="p-2 sm:p-3 text-gray-200 hover:text-cyan-400 transition-colors bg-[#1e293b] rounded-lg border border-cyan-500/20"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {mobileMenuOpen ? <FiX size={20} className="sm:w-6 sm:h-6" /> : <FiGrid size={20} className="sm:w-6 sm:h-6" />}
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
              className="fixed right-0 top-0 h-full w-full max-w-sm sm:max-w-md bg-gradient-to-b from-[#0f172a] via-[#1e293b] to-[#0f172a] shadow-2xl border-l border-cyan-500/30 z-50 overflow-y-auto"
            >
              <div className="p-4 sm:p-6">
                <div className="flex justify-between items-center mb-8 sm:mb-10">
                  <h2 className="text-xl sm:text-2xl font-bold text-cyan-400">{t('header.connectWithUs')}</h2>
                  <motion.button 
                    whileHover={{ rotate: 90, scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="text-gray-400 hover:text-cyan-400 text-lg sm:text-xl p-2 rounded-full hover:bg-cyan-500/10 transition-colors"
                    onClick={() => setSocialsOpen(false)}
                    aria-label="Close panel"
                  >
                    <FiX />
                  </motion.button>
                </div>
                
                <motion.div 
                  className="flex flex-col space-y-4 sm:space-y-6 mb-8 sm:mb-12"
                  variants={socialContainerVariants}
                >
                  {socialLinks.map((social) => (
                    <motion.a
                      key={social.name}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-start space-x-3 sm:space-x-4 p-4 sm:p-5 rounded-xl bg-[#0f172a]/50 hover:bg-[#0f172a] border border-cyan-500/20 transition-all group"
                      variants={socialItemVariants}
                      whileHover={{ x: 5, backgroundColor: 'rgba(6, 182, 212, 0.1)' }}
                    >
                      <span className="text-xl sm:text-2xl text-cyan-400 group-hover:scale-110 transition-transform pt-1 flex-shrink-0">
                        {social.icon}
                      </span>
                      <div className="min-w-0 flex-1">
                        <h3 className="text-base sm:text-lg font-semibold text-gray-200 group-hover:text-cyan-400 transition-colors truncate">
                          {social.name}
                        </h3>
                        <p className="text-gray-400 mt-1 text-xs sm:text-sm break-words">{social.description}</p>
                      </div>
                    </motion.a>
                  ))}
                </motion.div>
                
                {/* Contact Information - Enhanced */}
                <motion.div 
                  className="bg-[#0f172a] p-4 sm:p-6 rounded-xl border border-cyan-500/20"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  <h3 className="text-base sm:text-lg font-semibold text-cyan-400 mb-3 sm:mb-4">{t('header.contactInformation')}</h3>
                  <div className="space-y-2 sm:space-y-3">
                    <p className="text-gray-200 font-medium break-words text-sm sm:text-base">{contactInfo.aze}</p>
                    <p className="text-gray-200 font-medium break-words text-sm sm:text-base">{contactInfo.uae}</p>
                    <p className="text-gray-200 font-medium break-words text-sm sm:text-base">{contactInfo.email}</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Mobile Menu - Enhanced for more items */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="lg:hidden absolute top-full left-0 w-full bg-gradient-to-b from-[#0f172a] via-[#1e293b] to-[#0f172a] border-t border-cyan-500/30 shadow-2xl max-h-[80vh] overflow-y-auto"
          >
            {navLinksData.map((link) => (
              <div key={link.name} className="border-b border-cyan-500/10">
                <Link
                  to={link.path}
                  className="flex items-center py-4 px-6 text-base font-semibold text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/5 transition-all"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.icon}
                  <span className="truncate flex-1 ml-3">{link.name}</span>
                </Link>
              </div>
            ))}
          
            {/* Mobile Language Selector */}
            <div className="flex justify-center space-x-2 py-4 px-4 border-t border-cyan-500/10">
              {['az', 'en', 'ru'].map((lng) => (
                <motion.button
                  key={lng}
                  onClick={() => changeLanguage(lng)}
                  className={`px-3 py-2 rounded-md text-xs font-semibold whitespace-nowrap min-w-[50px] ${
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
            <div className="p-4 border-t border-cyan-500/10">
              <h3 className="text-cyan-400 font-semibold mb-3 text-base">{t('header.connectWithUs')}</h3>
              <div className="grid grid-cols-3 gap-2">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center justify-center p-3 rounded-lg bg-[#1e293b] hover:bg-cyan-500/10 text-gray-300 hover:text-cyan-400 transition-colors border border-cyan-500/20 text-center"
                    onClick={() => setMobileMenuOpen(false)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {social.icon}
                    <span className="text-xs mt-2 font-medium truncate w-full px-1">{social.name}</span>
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