import React from 'react';
import { Link } from 'react-router-dom';
import { FiHome } from 'react-icons/fi';

const NotFoundPage = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-[#0b0e1a] text-white py-20 px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl">
                <p className="text-8xl md:text-9xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-gray-600 mb-6 animate-pulse-slow">
                    404
                </p>
                <h1 className="text-4xl md:text-6xl font-bold mb-4">
                    Page Not Found
                </h1>
                <p className="text-lg text-gray-400 mb-8">
                    The page you are looking for does not exist or has been moved. Please return to the homepage.
                </p>
                <Link
                    to="/"
                    className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-300"
                >
                    <FiHome className="mr-3 h-5 w-5" />
                    Return to Homepage
                </Link>
            </div>
        </div>
    );
};

export default NotFoundPage;