import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiCompass } = FiIcons;

const ScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(Math.min(progress, 100));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full z-50 pointer-events-none">
      {/* Progress Bar */}
      <motion.div
        className="h-1 bg-gold-insignia origin-left"
        style={{ scaleX: scrollProgress / 100 }}
        initial={{ scaleX: 0 }}
        transition={{ ease: 'linear' }}
      />
      
      {/* Compass Indicator */}
      <div className="absolute top-4 right-4 pointer-events-auto">
        <motion.div
          className="relative w-12 h-12 bg-naval-hull/80 backdrop-blur-sm rounded-full border border-gold-insignia/30 flex items-center justify-center"
          whileHover={{ scale: 1.1 }}
        >
          <motion.div
            animate={{ rotate: scrollProgress * 3.6 }}
            transition={{ ease: 'linear' }}
            className="text-gold-insignia"
          >
            <SafeIcon icon={FiCompass} className="text-xl" />
          </motion.div>
          
          {/* Progress Ring */}
          <svg className="absolute inset-0 w-full h-full -rotate-90">
            <circle
              cx="50%"
              cy="50%"
              r="20"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="text-tactical-steel/30"
            />
            <motion.circle
              cx="50%"
              cy="50%"
              r="20"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              className="text-gold-insignia"
              style={{
                strokeDasharray: 125.6,
                strokeDashoffset: 125.6 - (scrollProgress / 100) * 125.6,
              }}
              transition={{ ease: 'linear' }}
            />
          </svg>
        </motion.div>
      </div>
    </div>
  );
};

export default ScrollProgress;