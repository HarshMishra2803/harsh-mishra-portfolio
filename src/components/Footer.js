import React from 'react';
import { motion } from 'framer-motion';
import { FiHeart, FiGithub, FiLinkedin, FiMail, FiArrowUp } from 'react-icons/fi';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: <FiGithub size={20} />,
      href: "https://github.com/HarshMishra2803",
      label: "GitHub"
    },
    {
      icon: <FiLinkedin size={20} />,
      href: "https://linkedin.com/in/harsh-mishra",
      label: "LinkedIn"
    },
    {
      icon: <FiMail size={20} />,
      href: "mailto:mishraharsh.2803@gmail.com",
      label: "Email"
    }
  ];

  return (
    <footer className="bg-dark-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Left - Brand */}
          <div className="text-center md:text-left">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-bold gradient-text mb-2 cursor-pointer"
              onClick={scrollToTop}
            >
              Harsh Mishra
            </motion.div>
            <p className="text-gray-400">
              Full Stack Developer crafting digital experiences
            </p>
          </div>

          {/* Center - Social Links */}
          <div className="flex justify-center space-x-6">
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                whileHover={{ scale: 1.2, y: -3 }}
                whileTap={{ scale: 0.9 }}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="p-3 glass rounded-full hover:bg-primary-500/20 transition-all duration-300 group"
              >
                <span className="text-gray-400 group-hover:text-primary-400 transition-colors">
                  {link.icon}
                </span>
              </motion.a>
            ))}
          </div>

          {/* Right - Back to Top */}
          <div className="text-center md:text-right">
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 px-4 py-2 glass rounded-lg hover:bg-primary-500/20 transition-all duration-300 group"
            >
              <span className="text-gray-400 group-hover:text-primary-400 transition-colors">
                Back to Top
              </span>
              <FiArrowUp className="text-gray-400 group-hover:text-primary-400 transition-colors" />
            </motion.button>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 text-gray-400">
              <span>Made with</span>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                <FiHeart className="text-red-500" />
              </motion.div>
              <span>by Harsh Mishra</span>
            </div>
            
            <div className="text-gray-400 text-sm">
              © {currentYear} Harsh Mishra. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
