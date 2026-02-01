import React, { useState } from 'react';
import {
  FiMail,
  FiLinkedin,
  FiInstagram,
  FiSend,
  FiUser,
  FiMessageSquare,
  FiCopy,
  FiCheck
} from 'react-icons/fi';
import { motion } from 'framer-motion';

const linkedinUrl = "https://www.linkedin.com/company/caspian-drilling-fluids/";
const instagramUrl = "https://www.instagram.com/caspian.drilling.fluids";
const emailAddress = "office@caspiandf.com";

const ContactSidebar = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const subject = `Caspian DF Contact Form: ${formData.name}`;
    const body = `
Name: ${formData.name}
Email: ${formData.email}

Message:
${formData.message}

---
This message was sent via the Caspian Drilling Fluids website contact form.
    `.trim();

    const mailtoLink = `mailto:${emailAddress}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.open(mailtoLink, '_blank');
    setIsSubmitted(true);

    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitted(false);
    }, 3000);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(emailAddress);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-gradient-to-br from-white to-blue-50 p-8 rounded-2xl shadow-xl border border-blue-100 lg:sticky lg:top-28"
    >
      {/* Header */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mb-4">
          <FiSend className="text-2xl text-white" />
        </div>
        <h3 className="text-2xl font-bold text-gray-800">
          Contact Us
        </h3>
        <p className="text-gray-600 mt-2">
          Get in touch with our team
        </p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="relative">
          <FiUser className="absolute left-3 top-3.5 text-gray-400" />
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
            className="w-full pl-10 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="relative">
          <FiMail className="absolute left-3 top-3.5 text-gray-400" />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email Address"
            required
            className="w-full pl-10 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="relative">
          <FiMessageSquare className="absolute left-3 top-3.5 text-gray-400" />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="4"
            placeholder="Your Message"
            required
            className="w-full pl-10 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 resize-none"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold py-4 rounded-xl flex justify-center items-center gap-2"
        >
          <FiSend />
          {isSubmitted ? "Opening email client..." : "Send Message"}
        </button>
      </form>

      {isSubmitted && (
        <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-xl text-center text-green-700">
          ✓ Email client opened successfully!
        </div>
      )}

      {/* Contact Info */}
      <div className="mt-10 pt-8 border-t">
        <h4 className="text-xl font-bold text-center mb-4">
          Contact Information
        </h4>

        <div className="flex justify-between items-center bg-blue-50 p-4 rounded-xl">
          <span>{emailAddress}</span>
          <button onClick={copyToClipboard} className="flex items-center gap-1 text-blue-600">
            {isCopied ? <FiCheck /> : <FiCopy />}
            {isCopied ? "Copied!" : "Copy"}
          </button>
        </div>

        <div className="flex justify-center gap-6 mt-6">
          <a href={linkedinUrl} target="_blank" rel="noreferrer">
            <FiLinkedin size={24} />
          </a>
          <a href={instagramUrl} target="_blank" rel="noreferrer">
            <FiInstagram size={24} />
          </a>
        </div>

        <p className="text-sm text-gray-600 text-center mt-6">
          Clicking “Send Message” will open your default email application with a pre-filled message.
        </p>
      </div>
    </motion.div>
  );
};

export default ContactSidebar;
