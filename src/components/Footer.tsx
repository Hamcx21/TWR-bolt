import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Twitter, Linkedin, Instagram, Github, Mail, Phone } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Github, href: '#', label: 'GitHub' }
  ];

  const footerLinks = {
    'Services': ['Smart Technology', 'Creative Studio', 'Digital Products', 'Immersive Tech'],
    'Company': ['About Us', 'Portfolio', 'Careers', 'Blog'],
    'Support': ['Contact', 'Documentation', 'Help Center', 'Status']
  };

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo and Description */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-1"
          >
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-red-600 rounded-lg flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <div className="text-white">
                <span className="font-serif text-xl font-bold">The</span>
                <span className="font-sans text-xl font-light ml-1">Wagmi</span>
                <div className="text-xs text-red-400 font-sans tracking-widest">RESOURCES</div>
              </div>
            </div>
            
            <p className="text-gray-300 leading-relaxed mb-6">
              Where smart technology meets bold creativity. Building the future through 
              innovation, design, and cutting-edge solutions.
            </p>
            
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 bg-gray-800 hover:bg-red-500 rounded-lg flex items-center justify-center transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 text-gray-300 hover:text-white" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <h3 className="text-white font-bold text-lg mb-6 font-sans">{category}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <motion.button
                      whileHover={{ x: 5 }}
                      onClick={() => scrollToSection(link.toLowerCase().replace(' ', '-'))}
                      className="text-gray-300 hover:text-red-400 transition-colors text-left"
                    >
                      {link}
                    </motion.button>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h3 className="text-white font-bold text-lg mb-6 font-sans">Get in Touch</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-gray-300">
                <Mail className="w-5 h-5 text-red-500" />
                <a href="mailto:hello@wagmiresources.com" className="hover:text-red-400 transition-colors">
                  hello@wagmiresources.com
                </a>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Phone className="w-5 h-5 text-red-500" />
                <a href="tel:+15551234567" className="hover:text-red-400 transition-colors">
                  +1 (555) 123-4567
                </a>
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('contact')}
              className="mt-6 bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              Start Your Project
            </motion.button>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-gray-400 text-sm">
            © 2024 The Wagmi Resources. All rights reserved.
          </p>
          
          <div className="flex space-x-6 mt-4 md:mt-0 text-sm">
            <a href="#" className="text-gray-400 hover:text-red-400 transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-red-400 transition-colors">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-red-400 transition-colors">Cookie Policy</a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;