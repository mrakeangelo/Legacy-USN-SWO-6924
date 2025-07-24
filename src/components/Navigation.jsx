import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiAnchor, FiCompass, FiMap, FiAward, FiBook, FiMenu, FiX } = FiIcons;

const Navigation = ({ scrollY }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Bridge Log', href: '#timeline', icon: FiCompass },
    { name: 'Operations', href: '#gallery', icon: FiMap },
    { name: 'Honors', href: '#honors', icon: FiAward },
    { name: 'Reflections', href: '#reflections', icon: FiBook },
    { name: 'Legacy', href: '#guestbook', icon: FiAnchor },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 w-full z-40 transition-all duration-300 ${
        scrollY > 100 ? 'bg-naval-hull/95 backdrop-blur-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-2"
          >
            <SafeIcon icon={FiAnchor} className="text-gold-insignia text-2xl" />
            <span className="font-heading text-xl font-bold">CDR Stone</span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                whileHover={{ scale: 1.05 }}
                className="flex items-center space-x-1 text-white-wake hover:text-gold-insignia transition-colors"
              >
                <SafeIcon icon={item.icon} className="text-sm" />
                <span className="font-body">{item.name}</span>
              </motion.a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white-wake"
          >
            <SafeIcon icon={isOpen ? FiX : FiMenu} className="text-2xl" />
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          initial={false}
          animate={{ height: isOpen ? 'auto' : 0 }}
          className="md:hidden overflow-hidden bg-naval-hull/95 backdrop-blur-sm"
        >
          <div className="py-4 space-y-2">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="flex items-center space-x-2 px-4 py-2 text-white-wake hover:text-gold-insignia transition-colors"
              >
                <SafeIcon icon={item.icon} className="text-sm" />
                <span className="font-body">{item.name}</span>
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navigation;