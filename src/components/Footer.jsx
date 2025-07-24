import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiAnchor, FiHeart } = FiIcons;

const Footer = () => {
  const [currentQuote, setCurrentQuote] = useState(0);

  const quotes = [
    "The sea was her classroom. Her crew, her legacy.",
    "Lead from the front — and drive your ship with pride.",
    "Honor, courage, commitment — lived every day at sea.",
    "She didn't just command ships — she shaped leaders."
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % quotes.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="bg-naval-hull border-t border-tactical-steel/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Quote Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="relative h-16 flex items-center justify-center">
            <motion.blockquote
              key={currentQuote}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="font-heading text-xl md:text-2xl italic text-white-wake"
            >
              "{quotes[currentQuote]}"
            </motion.blockquote>
          </div>
          
          {/* Quote indicators */}
          <div className="flex justify-center space-x-2 mt-4">
            {quotes.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentQuote(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentQuote ? 'bg-gold-insignia' : 'bg-tactical-steel/50'
                }`}
              />
            ))}
          </div>
        </motion.div>

        {/* SWO Device Watermark */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="text-center mb-8"
        >
          <div className="inline-flex items-center justify-center w-24 h-24 bg-gold-insignia/10 rounded-full border-2 border-gold-insignia/20">
            <SafeIcon icon={FiAnchor} className="text-gold-insignia text-3xl" />
          </div>
        </motion.div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Legacy Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-center md:text-left"
          >
            <h3 className="font-heading text-lg font-bold text-white-wake mb-4">
              Naval Legacy
            </h3>
            <ul className="space-y-2 text-tactical-steel">
              <li>20 Years of Distinguished Service</li>
              <li>Multiple Command Tours</li>
              <li>Mentor to Countless Officers</li>
              <li>Champion of Naval Excellence</li>
            </ul>
          </motion.div>

          {/* Service Years */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center"
          >
            <h3 className="font-heading text-lg font-bold text-white-wake mb-4">
              Years of Service
            </h3>
            <div className="text-4xl font-heading font-bold text-gold-insignia mb-2">
              2001 - 2021
            </div>
            <p className="text-tactical-steel">
              United States Navy
            </p>
          </motion.div>

          {/* Contact/Memorial */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center md:text-right"
          >
            <h3 className="font-heading text-lg font-bold text-white-wake mb-4">
              Memorial Fund
            </h3>
            <p className="text-tactical-steel mb-4">
              Supporting future naval officers through education and mentorship programs.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center space-x-2 bg-gold-insignia text-naval-hull px-4 py-2 rounded-lg font-body font-semibold text-sm hover:bg-gold-insignia/90 transition-colors"
            >
              <SafeIcon icon={FiHeart} className="text-sm" />
              <span>Learn More</span>
            </motion.button>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-tactical-steel/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center space-x-3"
            >
              <SafeIcon icon={FiAnchor} className="text-gold-insignia text-xl" />
              <span className="font-heading text-lg font-bold text-white-wake">
                CDR Jenna M. Stone, USN (Ret.)
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="text-tactical-steel text-sm"
            >
              <p>Designed with honor by Mrake Agency</p>
              <p className="mt-1">© 2024 Stone Family Legacy Foundation</p>
            </motion.div>
          </div>
        </div>

        {/* Floating Wake Animation */}
        <div className="absolute bottom-0 left-0 right-0 overflow-hidden pointer-events-none">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ x: '-100%', opacity: 0 }}
              animate={{ x: '100%', opacity: [0, 0.3, 0] }}
              transition={{
                duration: 12,
                delay: i * 2,
                repeat: Infinity,
                ease: 'linear'
              }}
              className="absolute h-0.5 bg-white-wake/20"
              style={{
                bottom: `${10 + i * 5}px`,
                width: '300px',
                transform: 'skew(-20deg)'
              }}
            />
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;