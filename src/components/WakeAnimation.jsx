import React from 'react';
import { motion } from 'framer-motion';

const WakeAnimation = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Animated wake lines */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute h-px bg-gradient-to-r from-transparent via-white-wake/10 to-transparent"
          style={{
            top: `${15 + i * 12}%`,
            width: '100%',
            transform: 'skew(-15deg)',
          }}
          animate={{
            x: ['-100%', '100%'],
            opacity: [0, 0.5, 0],
          }}
          transition={{
            duration: 15 + i * 2,
            repeat: Infinity,
            delay: i * 0.8,
            ease: 'linear',
          }}
        />
      ))}

      {/* Floating particles */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute w-1 h-1 bg-white-wake/20 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.2, 0.8, 0.2],
            scale: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 4 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 4,
          }}
        />
      ))}

      {/* Radar sweep effect */}
      <motion.div
        className="absolute top-20 right-20 w-32 h-32 opacity-10"
        animate={{ rotate: 360 }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear',
        }}
      >
        <div className="w-full h-full border border-gold-insignia/30 rounded-full relative">
          <div className="absolute top-1/2 left-1/2 w-full h-px bg-gold-insignia/50 origin-left transform -translate-y-1/2" />
          <div className="absolute top-1/2 left-1/2 w-3/4 h-px bg-gold-insignia/30 origin-left transform -translate-y-1/2" />
          <div className="absolute top-1/2 left-1/2 w-1/2 h-px bg-gold-insignia/20 origin-left transform -translate-y-1/2" />
        </div>
      </motion.div>
    </div>
  );
};

export default WakeAnimation;