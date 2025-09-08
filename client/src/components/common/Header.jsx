import React, { useState, useEffect } from 'react';
import { NavLink, Link, useNavigate, useLocation } from 'react-router-dom';
import { FiGrid, FiX, FiChevronDown, FiLinkedin, FiMail, FiInstagram, FiHome, FiActivity, FiBox, FiShield, FiInfo } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import Logo from '../../assets/img/logo.jpeg';

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
    // Close mobile menu if open
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
      link: 'https://www.linkedin.com/company/caspian-drilling-fluids/',
      description: 'Follow us on LinkedIn for professional updates'
    },
    { 
      name: 'Instagram', 
      icon: <FiInstagram size={24} />, 
      link: 'https://www.instagram.com/caspiandrillingfluids/',
      description: 'Follow us on Instagram for visual content'
    },
    { 
      name: 'Email Us', 
      icon: <FiMail size={24} />, 
      link: 'mailto:office@caspiandi.com',
      description: 'office@caspiandi.com'
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

  // Get current page name for display
  const getCurrentPageName = () => {
    const currentPage = navLinksData.find(link => link.path === location.pathname);
    return currentPage ? currentPage.name : t('header.home');
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 
      ${scrolled ? 'py-3 shadow-lg bg-gradient-to-r from-[#0f172a] via-[#1e293b] to-[#0f172a]/95 backdrop-blur-md' : 'py-5 bg-gradient-to-r from-[#0f172a] via-[#1e293b] to-[#0f172a]'}`}
    >
      <div className="container mx-auto flex justify-between items-center px-4">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <motion.img
            src={Logo}
            alt="Logo"
            className="w-12 h-12 rounded-md"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          />
          <div className="hidden md:block">
            <h1 className="text-white font-semibold text-lg">Caspian Drilling Fluids</h1>
            <p className="text-cyan-400 text-sm">{getCurrentPageName()}</p>
          </div>
        </Link>

        {/* Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navLinksData.map((link) => (
            <div
              key={link.name}
              className="relative"
            >
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  `flex items-center text-lg font-medium transition-all duration-300 ${
                    isActive
                      ? 'text-cyan-400 drop-shadow-[0_0_6px_rgba(34,211,238,0.7)]'
                      : 'text-gray-300 hover:text-cyan-400 hover:drop-shadow-[0_0_6px_rgba(34,211,238,0.7)]'
                  }`
                }
              >
                {link.icon}
                {link.name}
              </NavLink>
              
              {/* Active indicator */}
              <AnimatePresence>
                {location.pathname === link.path && (
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: '100%' }}
                    exit={{ width: 0 }}
                    className="h-0.5 bg-cyan-400 mt-1 rounded-full"
                  />
                )}
              </AnimatePresence>
            </div>
          ))}
        </nav>

        {/* Right side actions */}
        <div className="flex items-center space-x-4 relative">
          {/* Language selector */}
          <div className="hidden md:flex items-center space-x-2 bg-[#1e293b] rounded-lg p-1">
            {['az', 'en', 'ru'].map((lng) => (
              <motion.button
                key={lng}
                onClick={() => changeLanguage(lng)}
                className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
                  i18n.language === lng 
                    ? 'bg-cyan-500 text-white' 
                    : 'text-gray-300 hover:text-cyan-400'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {lng.toUpperCase()}
              </motion.button>
            ))}
          </div>

          {/* Social media panel trigger */}
          <motion.button 
            whileHover={{ scale: 1.1 }} 
            whileTap={{ scale: 0.9 }} 
            className="p-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg text-white shadow-lg hover:shadow-cyan-500/25 transition-shadow"
            onClick={() => setSocialsOpen(true)}
            aria-label="Open social media panel"
          >
            <FiGrid className="text-xl" />
          </motion.button>
        </div>

        {/* Mobile menu button */}
        <div className="lg:hidden">
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
            className="p-2 text-gray-200 hover:text-cyan-400 transition-colors"
          >
            {mobileMenuOpen ? <FiX size={28} /> : <FiGrid size={28} />}
          </button>
        </div>
      </div>

      {/* Social media panel */}
      <AnimatePresence>
        {socialsOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/70 z-40"
              onClick={() => setSocialsOpen(false)}
            />
            
            <motion.div
              variants={socialContainerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="fixed right-0 top-0 h-full w-full max-w-md bg-gradient-to-b from-[#0f172a] via-[#1e293b] to-[#0f172a] shadow-2xl border-l border-cyan-500/20 z-50 overflow-y-auto"
            >
              <div className="p-6">
                <div className="flex justify-between items-center mb-10">
                  <h2 className="text-2xl font-bold text-cyan-400">Connect With Us</h2>
                  <motion.button 
                    whileHover={{ rotate: 90, scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="text-gray-400 hover:text-cyan-400 text-xl p-2 rounded-full hover:bg-cyan-500/10"
                    onClick={() => setSocialsOpen(false)}
                    aria-label="Close panel"
                  >
                    <FiX />
                  </motion.button>
                </div>
                
                <motion.div 
                  className="flex flex-col space-y-8 mb-12"
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
                      <div>
                        <h3 className="text-lg font-semibold text-gray-200 group-hover:text-cyan-400 transition-colors">
                          {social.name}
                        </h3>
                        <p className="text-gray-400 mt-1">{social.description}</p>
                      </div>
                    </motion.a>
                  ))}
                </motion.div>
                
                {/* Contact Information */}
                <motion.div 
                  className="bg-[#0f172a] p-5 rounded-xl border border-cyan-500/20"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  <h3 className="text-lg font-semibold text-cyan-400 mb-3">Contact Information</h3>
                  <div className="space-y-2">
                    <p className="text-gray-200">{contactInfo.aze}</p>
                    <p className="text-gray-200">{contactInfo.uae}</p>
                    <p className="text-gray-200">office@caspiandi.com</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="lg:hidden absolute top-full left-0 w-full bg-gradient-to-b from-[#0f172a] via-[#1e293b] to-[#0f172a] border-t border-cyan-500/20 shadow-xl"
          >
            {navLinksData.map((link) => (
              <div key={link.name} className="border-b border-cyan-500/10">
                <Link
                  to={link.path}
                  className="flex items-center py-4 px-6 text-lg text-gray-300 hover:text-cyan-400 transition-all"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.icon}
                  {link.name}
                </Link>
              </div>
            ))}
          
            <div className="flex justify-center space-x-4 py-4 px-4 border-t border-cyan-500/10">
              {['az', 'en', 'ru'].map((lng) => (
                <button
                  key={lng}
                  onClick={() => changeLanguage(lng)}
                  className={`px-3 py-1 rounded-md text-sm font-medium ${
                    i18n.language === lng 
                      ? 'bg-cyan-500 text-white' 
                      : 'bg-[#1e293b] text-gray-200 hover:text-cyan-400'
                  }`}
                >
                  {lng.toUpperCase()}
                </button>
              ))}
            </div>
            
            {/* Mobile social links */}
            <div className="p-4 border-t border-cyan-500/10">
              <h3 className="text-cyan-400 font-semibold mb-3 px-2">Connect With Us</h3>
              <div className="grid grid-cols-3 gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center justify-center p-3 rounded-lg bg-[#1e293b] hover:bg-cyan-500/10 text-gray-300 hover:text-cyan-400 transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {social.icon}
                    <span className="text-xs mt-1">{social.name}</span>
                  </a>
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