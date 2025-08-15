import React from 'react';
import { Link } from 'react-router-dom';
import { FaLinkedinIn, FaInstagram } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-[#0d101d] text-gray-400 w-full">
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    
                    <div className="mb-6 md:mb-0">
                        <h1 className="text-2xl font-bold text-white mb-2">CDF</h1>
                        <p className="text-sm">
                            Designing drilling and completion fluids, engineering services and products
                        </p>
                    </div>

                    
                    <div className="mb-6 md:mb-0">
                        <h3 className="text-lg font-semibold text-white mb-4">Office</h3>
                        <p className="mb-2 text-sm">Baku, Azerbaijan —<br />8 November 25 Ave, Baku White City business center</p>
                        <p className="mb-2 text-sm">Kazakhstan, Aktau city —<br />industrial zone 4, section 7/1, CDF INTERNATIONAL FZCO</p>
                        <p className="mb-4 text-sm">(UAE) Dubai —<br />Dubai Silicon Oasis JFZA Properties</p>
                        <a href="mailto:office@caspland.com" className="block text-sm hover:text-white transition-colors duration-300">office@caspland.com</a>
                        <a href="tel:+994124881049" className="block mt-1 text-sm hover:text-white transition-colors duration-300">AZE (+994 12) 488-10-49</a>
                        <a href="tel:+971507971179" className="block mt-1 text-sm hover:text-white transition-colors duration-300">UAE (+971) 50-79-71-179</a>
                    </div>

                  
                    <div className="mb-6 md:mb-0">
                        <h3 className="text-lg font-semibold text-white mb-4">Links</h3>
                        <ul className="space-y-3">
                            <li>
                                <Link 
                                    to="/" 
                                    className="text-sm hover:text-white transition-colors duration-300 relative group"
                                >
                                    Home
                                    <span className="absolute left-0 bottom-0 h-px w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
                                </Link>
                            </li>
                            <li>
                                <Link 
                                    to="/activities" 
                                    className="text-sm hover:text-white transition-colors duration-300 relative group"
                                >
                                    Activities
                                    <span className="absolute left-0 bottom-0 h-px w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
                                </Link>
                            </li>
                            <li>
                                <Link 
                                    to="/products" 
                                    className="text-sm hover:text-white transition-colors duration-300 relative group"
                                >
                                    Products
                                    <span className="absolute left-0 bottom-0 h-px w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
                                </Link>
                            </li>
                            <li>
                                <Link 
                                    to="/hse" 
                                    className="text-sm hover:text-white transition-colors duration-300 relative group"
                                >
                                    Health, Safety and Environment
                                    <span className="absolute left-0 bottom-0 h-px w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
                                </Link>
                            </li>
                            <li>
                                <Link 
                                    to="/about" 
                                    className="text-sm hover:text-white transition-colors duration-300 relative group"
                                >
                                    About Us
                                    <span className="absolute left-0 bottom-0 h-px w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div className="mb-6 md:mb-0">
                        <h3 className="text-lg font-semibold text-white mb-4">Get in Touch</h3>
                        <div className="flex flex-col space-y-3">
                            <a 
                                href="#" 
                                className="text-sm hover:text-white transition-colors duration-300 relative group inline-flex items-center gap-2"
                            >
                                <FaLinkedinIn /> In LinkedIn
                                <span className="absolute left-0 bottom-0 h-px w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
                            </a>
                            <a 
                                href="#" 
                                className="text-sm hover:text-white transition-colors duration-300 relative group inline-flex items-center gap-2"
                            >
                                <FaInstagram /> Instagram
                                <span className="absolute left-0 bottom-0 h-px w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-sm">CDF © All Rights Reserved 2025</p>
                    <p className="text-sm mt-2 md:mt-0">Developed by KH</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;