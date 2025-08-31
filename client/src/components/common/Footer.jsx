import React from 'react';
import { Link } from 'react-router-dom';
import { FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="relative bg-gradient-to-r from-[#0f172a] via-[#1e293b] to-[#0f172a] text-gray-400 w-full border-t border-cyan-500/20 shadow-2xl">
      <div className="container mx-auto px-6 py-16">
       
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        
          <div>
            <h1 className="text-3xl font-bold text-white mb-3 tracking-wide">CDF</h1>
            <p className="text-sm leading-relaxed text-gray-400">
              Designing drilling and completion fluids, engineering services and products
            </p>
          </div>

     
          <div>
            <h3 className="text-lg font-semibold text-cyan-400 mb-6 relative after:absolute after:w-12 after:h-0.5 after:bg-cyan-500 after:left-0 after:-bottom-2">
              Office
            </h3>
            <p className="mb-3 text-sm">Baku, Azerbaijan —<br />8 November 25 Ave, Baku White City business center</p>
            <p className="mb-3 text-sm">Kazakhstan, Aktau city —<br />industrial zone 4, section 7/1, CDF INTERNATIONAL FZCO</p>
            <p className="mb-4 text-sm">(UAE) Dubai —<br />Dubai Silicon Oasis JFZA Properties</p>
            <a href="mailto:office@caspland.com" className="block text-sm hover:text-cyan-400 transition-all duration-300">
              office@caspland.com
            </a>
            <a href="tel:+994124881049" className="block mt-2 text-sm hover:text-cyan-400 transition-all duration-300">
              AZE (+994 12) 488-10-49
            </a>
            <a href="tel:+971507971179" className="block mt-2 text-sm hover:text-cyan-400 transition-all duration-300">
              UAE (+971) 50-79-71-179
            </a>
          </div>


          <div>
            <h3 className="text-lg font-semibold text-cyan-400 mb-6 relative after:absolute after:w-12 after:h-0.5 after:bg-cyan-500 after:left-0 after:-bottom-2">
              Links
            </h3>
            <ul className="space-y-4">
              {[
                { name: 'Home', path: '/' },
                { name: 'Activities', path: '/activities' },
                { name: 'Products', path: '/products' },
                { name: 'Health, Safety and Environment', path: '/hse' },
                { name: 'About Us', path: '/about' },
              ].map((link, i) => (
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
              Get in Touch
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
          <p>CDF © All Rights Reserved 2025</p>
          <p className="mt-3 md:mt-0">Developed by KH</p>
        </div>
      </div>

      
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent"></div>
    </footer>
  );
};

export default Footer;
