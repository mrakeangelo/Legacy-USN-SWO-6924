import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiChevronDown } = FiIcons;

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
          alt="Naval Officer on Bridge"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-sea-blue/60"></div>
      </div>

      {/* Animated Wake Lines */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ x: '-100%', opacity: 0 }}
            animate={{ x: '100%', opacity: [0, 1, 0] }}
            transition={{
              duration: 8,
              delay: i * 0.5,
              repeat: Infinity,
              ease: 'linear'
            }}
            className="absolute h-0.5 bg-white-wake/30"
            style={{
              top: `${20 + i * 15}%`,
              width: '200px',
              transform: 'skew(-20deg)'
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="space-y-6"
        >
          <div className="space-y-2">
            <motion.h1
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 1 }}
              className="font-heading text-5xl md:text-7xl font-bold text-white-wake"
            >
              CDR Jenna M. Stone
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.5 }}
              className="text-gold-insignia text-xl md:text-2xl font-body tracking-wide"
            >
              U.S. Navy Surface Warfare Officer
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 2 }}
            className="max-w-2xl mx-auto"
          >
            <blockquote className="text-2xl md:text-3xl font-heading italic text-white-wake/90 leading-relaxed">
              "She didn't just sail the seas — she commanded them."
            </blockquote>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 2.5 }}
          >
            <motion.a
              href="#timeline"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center space-x-2 bg-gold-insignia text-naval-hull px-8 py-4 rounded-full font-body font-semibold text-lg hover:bg-gold-insignia/90 transition-colors"
            >
              <span>Enter Her Bridge Log</span>
              <SafeIcon icon={FiChevronDown} className="text-xl" />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 3 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-white-wake/70"
        >
          <SafeIcon icon={FiChevronDown} className="text-3xl" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;