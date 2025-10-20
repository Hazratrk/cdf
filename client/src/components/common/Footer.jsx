import React from 'react';
import { Link } from 'react-router-dom';
import { FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();

  const links = [
    { name: t('footer.links.home'), path: '/' },
    { name: t('footer.links.activities'), path: '/activities' },
    { name: t('footer.links.products'), path: '/products' },
    { name: t('footer.links.hse'), path: '/hse' },
    { name: t('footer.links.about_us'), path: '/about' },
  ];

  return (
    <footer className="relative bg-gradient-to-r from-[#0f172a] via-[#1e293b] to-[#0f172a] text-gray-400 w-full border-t border-cyan-500/20 shadow-2xl">
      <div className="container mx-auto px-6 py-16">
       
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        
          <div>
            <h1 className="text-3xl font-bold text-white mb-3 tracking-wide">CDF</h1>
            <p className="text-sm leading-relaxed text-gray-400">
              {t('footer.tagline')}
            </p>
          </div>

     
          <div>
            <h3 className="text-lg font-semibold text-cyan-400 mb-6 relative after:absolute after:w-12 after:h-0.5 after:bg-cyan-500 after:left-0 after:-bottom-2">
              {t('footer.office')}
            </h3>
            <p className="mb-3 text-sm">{t('footer.locations.baku.country')} —<br />{t('footer.locations.baku.address')}</p>
            <p className="mb-3 text-sm">{t('footer.locations.aktau.country')} —<br />{t('footer.locations.aktau.address')}</p>
            <p className="mb-4 text-sm">{t('footer.locations.dubai.country')} —<br />{t('footer.locations.dubai.address')}</p>
            <a href="mailto:office@caspiandf.com" className="block text-sm hover:text-cyan-400 transition-all duration-300">
              {t('footer.contact.email')}
            </a>
            <a href="tel:+994124881049" className="block mt-2 text-sm hover:text-cyan-400 transition-all duration-300">
              {t('footer.contact.phone.aze')}
            </a>
            <a href="tel:+971507971179" className="block mt-2 text-sm hover:text-cyan-400 transition-all duration-300">
              {t('footer.contact.phone.uae')}
            </a>
          </div>


          <div>
            <h3 className="text-lg font-semibold text-cyan-400 mb-6 relative after:absolute after:w-12 after:h-0.5 after:bg-cyan-500 after:left-0 after:-bottom-2">
              {t('footer.links.title')}
            </h3>
            <ul className="space-y-4">
              {links.map((link, i) => (
                <li key={i}>
                  <Link
                    to={link.path}
                    className="text-sm relative group inline-block hover:text-cyan-400 transition-all duration-300"
                  >
                    {link.name}
                    <span className="absolute left-0 -bottom-1 h-px w-0 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

      
          <div>
            <h3 className="text-lg font-semibold text-cyan-400 mb-6 relative after:absolute after:w-12 after:h-0.5 after:bg-cyan-500 after:left-0 after:-bottom-2">
              {t('footer.getInTouch')}
            </h3>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/company/caspian-drilling-fluids/"
                className="w-10 h-10 flex items-center justify-center rounded-full border border-cyan-500/40 text-gray-300 hover:text-cyan-400 hover:border-cyan-400 hover:shadow-[0_0_12px_rgba(34,211,238,0.6)] transition-all duration-300 transform hover:rotate-6"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="https://www.instagram.com/caspian.drilling.fluids?igsh=MXI1cjllYmVjcWRo"
                className="w-10 h-10 flex items-center justify-center rounded-full border border-cyan-500/40 text-gray-300 hover:text-cyan-400 hover:border-cyan-400 hover:shadow-[0_0_12px_rgba(34,211,238,0.6)] transition-all duration-300 transform hover:-rotate-6"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>

    
        <div className="mt-12 pt-6 border-t border-cyan-500/20 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
          <p>{t('footer.copyright')}</p>
          <p className="mt-3 md:mt-0">Developed by KH</p>
        </div>
      </div>

      
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent"></div>
    </footer>
  );
};

export default Footer;