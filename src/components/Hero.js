import React from 'react';
import { motion } from 'framer-motion';
import { FiDownload, FiMail, FiGithub, FiLinkedin } from 'react-icons/fi';

const Hero = () => {
  const handleDownloadResume = () => {
    // Create a dummy resume download - you can replace this with actual resume file
    const link = document.createElement('a');
    link.href = '/resume.pdf'; // Add your resume file to public folder
    link.download = 'Harsh_Mishra_Resume.pdf';
    link.click();
  };

  const handleHireMe = () => {
    window.location.href = 'mailto:mishraharsh.2803@gmail.com';
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-primary-500/20 to-purple-500/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          {/* Profile Image */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 1, ease: "backOut" }}
            className="mb-8"
          >
            <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-r from-primary-500 to-purple-500 p-1 animate-glow">
              <div className="w-full h-full rounded-full bg-dark-800 flex items-center justify-center">
                <span className="text-4xl font-bold gradient-text">HM</span>
              </div>
            </div>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold mb-4"
          >
            <span className="gradient-text">Harsh Mishra</span>
          </motion.h1>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto"
          >
            Full Stack Web Developer | 
            <span className="gradient-text font-semibold"> Turning Creative Ideas into Reality</span>
          </motion.p>

          {/* Animated typing effect */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mb-12"
          >
            <p className="text-lg text-gray-400 font-mono">
              {'<'}<span className="text-primary-400">Building innovative web solutions</span>{' />'}
            </p>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleHireMe}
              className="btn-primary flex items-center justify-center gap-2 px-8 py-4 text-lg font-semibold rounded-xl neon-glow"
            >
              <FiMail size={20} />
              Hire Me
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleDownloadResume}
              disabled
              className="glass border-2 border-gray-600 text-gray-500 cursor-not-allowed flex items-center justify-center gap-2 px-8 py-4 text-lg font-semibold rounded-xl opacity-50"
            >
              <FiDownload size={20} />
              Resume Coming Soon
            </motion.button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex justify-center space-x-6"
          >
            <motion.a
              whileHover={{ scale: 1.2, y: -5 }}
              whileTap={{ scale: 0.9 }}
              href="https://github.com/HarshMishra2803"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 glass rounded-full hover:bg-primary-500/20 transition-colors"
            >
              <FiGithub size={24} />
            </motion.a>
            
            <motion.a
              whileHover={{ scale: 1.2, y: -5 }}
              whileTap={{ scale: 0.9 }}
              href="https://linkedin.com/in/harsh-mishra"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 glass rounded-full hover:bg-primary-500/20 transition-colors"
            >
              <FiLinkedin size={24} />
            </motion.a>
            
            <motion.a
              whileHover={{ scale: 1.2, y: -5 }}
              whileTap={{ scale: 0.9 }}
              href="mailto:mishraharsh.2803@gmail.com"
              className="p-3 glass rounded-full hover:bg-primary-500/20 transition-colors"
            >
              <FiMail size={24} />
            </motion.a>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-6 h-10 border-2 border-primary-400 rounded-full flex justify-center"
            >
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-1 h-3 bg-primary-400 rounded-full mt-2"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
