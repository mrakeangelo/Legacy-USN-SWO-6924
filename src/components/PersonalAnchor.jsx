import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiHeart, FiMail, FiHome, FiAnchor } = FiIcons;

const PersonalAnchor = () => {
  return (
    <section className="py-20 bg-naval-hull">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-white-wake mb-4">
            Personal Anchor
          </h2>
          <p className="text-tactical-steel text-lg max-w-2xl mx-auto">
            The family and personal moments that kept her grounded while serving at sea.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Family Photo */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-lg">
              <img
                src="https://images.unsplash.com/photo-1511895426328-dc8714191300?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                alt="Family moment"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-naval-hull/60 to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-white-wake font-body text-sm">
                  Homecoming after 8-month deployment, 2016
                </p>
              </div>
            </div>
            
            {/* Floating anchor decoration */}
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -top-4 -right-4 w-12 h-12 bg-gold-insignia rounded-full flex items-center justify-center"
            >
              <SafeIcon icon={FiAnchor} className="text-naval-hull text-xl" />
            </motion.div>
          </motion.div>

          {/* Personal Stories */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="bg-sea-blue/50 backdrop-blur-sm rounded-lg p-6 border border-tactical-steel/20">
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-2 bg-red-500 rounded-full">
                  <SafeIcon icon={FiHeart} className="text-white text-lg" />
                </div>
                <h3 className="font-heading text-xl font-bold text-white-wake">
                  Letters from Sea
                </h3>
              </div>
              <p className="text-tactical-steel leading-relaxed">
                "Every night before turning in, I would write letters to Sarah and Michael. 
                Even when we couldn't send mail for weeks, keeping that connection alive 
                reminded me why I was out there—protecting the freedom they enjoyed at home."
              </p>
            </div>

            <div className="bg-sea-blue/50 backdrop-blur-sm rounded-lg p-6 border border-tactical-steel/20">
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-2 bg-blue-500 rounded-full">
                  <SafeIcon icon={FiMail} className="text-white text-lg" />
                </div>
                <h3 className="font-heading text-xl font-bold text-white-wake">
                  Bedtime Stories via Satellite
                </h3>
              </div>
              <p className="text-tactical-steel leading-relaxed">
                "Technology allowed me to read bedtime stories to my children from 6,000 miles away. 
                Those video calls from the ship's communications center were the highlight of every day underway."
              </p>
            </div>

            <div className="bg-sea-blue/50 backdrop-blur-sm rounded-lg p-6 border border-tactical-steel/20">
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-2 bg-green-500 rounded-full">
                  <SafeIcon icon={FiHome} className="text-white text-lg" />
                </div>
                <h3 className="font-heading text-xl font-bold text-white-wake">
                  Homecoming Traditions
                </h3>
              </div>
              <p className="text-tactical-steel leading-relaxed">
                "Every homecoming was a reminder of why the sacrifice mattered. The first hug, 
                the family dinners, the simple moments—these were what we fought to protect 
                for every American family."
              </p>
            </div>
          </motion.div>
        </div>

        {/* Letter to Future Self */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16"
        >
          <div className="bg-sea-blue/30 backdrop-blur-sm rounded-lg p-8 border border-tactical-steel/20 max-w-4xl mx-auto">
            <div className="text-center mb-6">
              <h3 className="font-heading text-2xl font-bold text-white-wake mb-2">
                Letter to Myself at SWOS Phase 1
              </h3>
              <div className="w-24 h-0.5 bg-gold-insignia mx-auto"></div>
            </div>
            
            <div className="space-y-4 text-tactical-steel leading-relaxed">
              <p className="italic text-lg">
                "Dear Ensign Stone,
              </p>
              <p>
                You're about to embark on a journey that will test every limit you thought you had. 
                The nights will be long, the responsibilities overwhelming, and the decisions you make 
                will affect the lives of hundreds of sailors who will look to you for leadership.
              </p>
              <p>
                Remember that leadership isn't about having all the answers—it's about having the 
                courage to make decisions with incomplete information and the wisdom to surround 
                yourself with people who complement your weaknesses.
              </p>
              <p>
                Your family will sacrifice alongside you. Honor that sacrifice by being present 
                when you're home and purposeful when you're away. The time you spend at sea 
                defending freedom is sacred, but so is the time you spend raising the next generation.
              </p>
              <p className="italic">
                Fair winds and following seas,<br />
                Your future self"
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PersonalAnchor;