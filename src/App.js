import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ParticleBackground from './components/ParticleBackground';
import ScrollToTop from './components/ScrollToTop';

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-dark-900 flex items-center justify-center z-50">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="w-16 h-16 border-4 border-primary-500 border-t-transparent rounded-full mx-auto mb-4"
          />
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-2xl font-bold gradient-text"
          >
            Loading Portfolio...
          </motion.h2>
        </motion.div>
      </div>
    );
  }

  return (
    <div className={`${darkMode ? 'dark' : ''} min-h-screen`}>
      <div className="bg-dark-900 text-white relative overflow-hidden">
        <ParticleBackground />
        
        {/* Main Content */}
        <div className="relative z-10">
          <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
          
          <main>
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Education />
            <Contact />
          </main>
          
          <Footer />
        </div>
        
        {/* Scroll to Top Button */}
        <ScrollToTop />
      </div>
    </div>
  );
}

export default App;
