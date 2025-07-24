import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiAnchor, FiCompass, FiStar, FiAward, FiNavigation, FiFlag } = FiIcons;

const Timeline = () => {
  const timelineEvents = [
    {
      year: '2001',
      title: 'Naval Academy Commission',
      description: 'Graduated from USNA, Class of 2001',
      icon: FiFlag,
      type: 'commission'
    },
    {
      year: '2002',
      title: 'SWO Qualification',
      description: 'Earned Surface Warfare Officer designation aboard USS Arleigh Burke',
      icon: FiAnchor,
      type: 'qualification'
    },
    {
      year: '2004',
      title: 'Division Officer',
      description: 'Combat Systems Division Officer, USS Cole (DDG-67)',
      icon: FiCompass,
      type: 'leadership'
    },
    {
      year: '2007',
      title: 'Department Head',
      description: 'Operations Department Head, USS Ramage (DDG-61)',
      icon: FiNavigation,
      type: 'leadership'
    },
    {
      year: '2012',
      title: 'Executive Officer',
      description: 'XO, USS Porter (DDG-78) - Mediterranean Deployment',
      icon: FiStar,
      type: 'command'
    },
    {
      year: '2015',
      title: 'Commanding Officer',
      description: 'CO, USS Gravely (DDG-107) - Counter-piracy Operations',
      icon: FiAward,
      type: 'command'
    },
    {
      year: '2018',
      title: 'Squadron Command',
      description: 'Commander, Destroyer Squadron 2',
      icon: FiFlag,
      type: 'command'
    },
    {
      year: '2021',
      title: 'Retirement',
      description: 'Honorable retirement after 20 years of distinguished service',
      icon: FiAnchor,
      type: 'retirement'
    }
  ];

  const getTypeColor = (type) => {
    switch (type) {
      case 'commission': return 'bg-gold-insignia';
      case 'qualification': return 'bg-blue-500';
      case 'leadership': return 'bg-green-500';
      case 'command': return 'bg-red-500';
      case 'retirement': return 'bg-purple-500';
      default: return 'bg-tactical-steel';
    }
  };

  return (
    <section id="timeline" className="py-20 bg-naval-hull">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-white-wake mb-4">
            Command Timeline
          </h2>
          <p className="text-tactical-steel text-lg max-w-2xl mx-auto">
            A distinguished career spanning two decades of naval excellence and leadership at sea.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-gold-insignia/30"></div>

          {timelineEvents.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative flex items-center mb-12 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Timeline Node */}
              <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gold-insignia rounded-full border-4 border-naval-hull z-10"></div>

              {/* Content Card */}
              <div className={`ml-20 md:ml-0 md:w-5/12 ${index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'}`}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-sea-blue/50 backdrop-blur-sm rounded-lg p-6 border border-tactical-steel/20"
                >
                  <div className="flex items-center space-x-3 mb-3">
                    <div className={`p-2 rounded-full ${getTypeColor(event.type)}`}>
                      <SafeIcon icon={event.icon} className="text-white text-lg" />
                    </div>
                    <span className="text-gold-insignia font-heading text-xl font-bold">
                      {event.year}
                    </span>
                  </div>
                  <h3 className="font-heading text-xl font-bold text-white-wake mb-2">
                    {event.title}
                  </h3>
                  <p className="text-tactical-steel">
                    {event.description}
                  </p>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;