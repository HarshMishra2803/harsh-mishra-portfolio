import React from 'react';
import { motion } from 'framer-motion';

const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 bg-dark-900 flex items-center justify-center z-50">
      <div className="text-center">
        {/* Animated Logo */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 1, ease: "backOut" }}
          className="mb-8"
        >
          <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-r from-primary-500 to-purple-500 p-1 animate-glow">
            <div className="w-full h-full rounded-full bg-dark-800 flex items-center justify-center">
              <span className="text-3xl font-bold gradient-text">HM</span>
            </div>
          </div>
        </motion.div>

        {/* Loading Animation */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className="w-16 h-16 border-4 border-primary-500 border-t-transparent rounded-full mx-auto mb-6"
        />

        {/* Loading Text */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-2xl font-bold gradient-text mb-4"
        >
          Loading Portfolio...
        </motion.h2>

        {/* Progress Bar */}
        <div className="w-64 h-2 bg-dark-700 rounded-full mx-auto overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 2, ease: "easeInOut" }}
            className="h-full bg-gradient-to-r from-primary-500 to-purple-500 rounded-full"
          />
        </div>

        {/* Loading Steps */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-6 text-gray-400 text-sm"
        >
          <motion.p
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            Initializing creative experience...
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
};

export default LoadingScreen;
