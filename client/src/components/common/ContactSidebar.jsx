import React, { useState } from 'react';
import axios from 'axios';
import { FiMail, FiLinkedin, FiInstagram } from 'react-icons/fi';

const linkedinUrl = "https://www.linkedin.com/company/caspian-drilling-fluids/";
const instagramUrl = "https://www.instagram.com/caspian.drilling.fluids?igsh=MXI1cjllYmVjcWRo";

const ContactSidebar = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    try {
      await axios.post('http://localhost:8000/api/contact', formData);
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Message sending error:', error.response?.data || error.message);
      setStatus('error');
    }
  };

  return (
    <div className="bg-gray-50 p-8 rounded-lg shadow-sm lg:sticky lg:top-28">
      <h3 className="text-2xl font-bold text-gray-800 mb-6">Get in Touch</h3>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="sr-only">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div>
          <label htmlFor="email" className="sr-only">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div>
          <label htmlFor="message" className="sr-only">Message</label>
          <textarea
            name="message"
            id="message"
            rows="5"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
          ></textarea>
        </div>
        <div>
          <button
            type="submit"
            disabled={status === 'loading'}
            className="w-full bg-blue-600 text-white font-bold py-3 px-6 rounded-md hover:bg-blue-700 transition-colors duration-300"
          >
            {status === 'loading' ? 'Submitting...' : 'Get in Touch'}
          </button>
        </div>
      </form>

      {status && status !== 'loading' && (
        <p className={`mt-4 text-center ${status === 'success' ? 'text-green-600' : 'text-red-600'}`}>
          {status === 'success' ? 'Your message was sent successfully!' : 'An error occurred while sending the message. Please try again.'}
        </p>
      )}

      <div className="mt-10 pt-8 border-t border-gray-200">
        <h4 className="text-xl font-bold text-gray-800 mb-4">Contact Info</h4>
        <a href="mailto:office@caspiandf.com" className="flex items-center text-gray-600 hover:text-blue-600 transition-colors">
          <FiMail className="mr-3" /> office@caspiandf.com
        </a>
        <div className="flex items-center space-x-4 mt-4">
          <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-700 transition-colors"><FiLinkedin size={24}/></a>
          <a href={instagramUrl} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-pink-600 transition-colors"><FiInstagram size={24}/></a>
        </div>
      </div>
    </div>
  );
};

export default ContactSidebar;