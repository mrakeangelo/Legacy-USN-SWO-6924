import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiAward, FiStar, FiShield, FiInfo } = FiIcons;

const Honors = () => {
  const [selectedAward, setSelectedAward] = useState(null);

  const awards = [
    {
      id: 1,
      name: 'Surface Warfare Officer Pin',
      type: 'warfare',
      icon: FiShield,
      image: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      description: 'Earned aboard USS Arleigh Burke (DDG-51) after completing all Surface Warfare Officer qualifications.',
      date: '2002'
    },
    {
      id: 2,
      name: 'Navy Commendation Medal',
      type: 'medal',
      icon: FiAward,
      image: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      description: 'For exceptional meritorious service as Operations Department Head aboard USS Ramage.',
      date: '2008'
    },
    {
      id: 3,
      name: 'Meritorious Service Medal',
      type: 'medal',
      icon: FiStar,
      image: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      description: 'For outstanding performance as Executive Officer during Mediterranean deployment.',
      date: '2013'
    },
    {
      id: 4,
      name: 'Legion of Merit',
      type: 'medal',
      icon: FiStar,
      image: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      description: 'For exceptionally meritorious conduct as Commanding Officer of USS Gravely.',
      date: '2017'
    },
    {
      id: 5,
      name: 'Battle "E" Award',
      type: 'unit',
      icon: FiShield,
      image: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      description: 'USS Gravely achieved Battle Efficiency Award under her command.',
      date: '2016'
    },
    {
      id: 6,
      name: 'Global War on Terrorism Service Medal',
      type: 'service',
      icon: FiAward,
      image: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      description: 'For service in support of Operation Enduring Freedom.',
      date: '2015'
    }
  ];

  const getTypeColor = (type) => {
    switch (type) {
      case 'warfare': return 'bg-gold-insignia';
      case 'medal': return 'bg-red-500';
      case 'unit': return 'bg-blue-500';
      case 'service': return 'bg-green-500';
      default: return 'bg-tactical-steel';
    }
  };

  return (
    <section id="honors" className="py-20 bg-sea-blue">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-white-wake mb-4">
            Surface Warfare Honors
          </h2>
          <p className="text-tactical-steel text-lg max-w-2xl mx-auto">
            Recognition for exceptional service, leadership, and dedication to the United States Navy.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {awards.map((award, index) => (
            <motion.div
              key={award.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="group cursor-pointer"
              onClick={() => setSelectedAward(award)}
            >
              <div className="bg-naval-hull/50 backdrop-blur-sm rounded-lg p-6 border border-tactical-steel/20 hover:border-gold-insignia/30 transition-all duration-300">
                <div className="flex items-center space-x-4 mb-4">
                  <div className={`p-3 rounded-full ${getTypeColor(award.type)}`}>
                    <SafeIcon icon={award.icon} className="text-white text-xl" />
                  </div>
                  <div className="flex-1">
                    <span className="text-gold-insignia text-sm font-body">
                      {award.date}
                    </span>
                  </div>
                </div>
                
                <h3 className="font-heading text-lg font-bold text-white-wake mb-3 group-hover:text-gold-insignia transition-colors">
                  {award.name}
                </h3>
                
                <p className="text-tactical-steel text-sm line-clamp-3">
                  {award.description}
                </p>

                <div className="mt-4 flex items-center text-gold-insignia text-sm">
                  <SafeIcon icon={FiInfo} className="mr-2" />
                  <span>Click for details</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Award Detail Modal */}
        {selectedAward && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedAward(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-naval-hull rounded-lg p-8 max-w-md w-full border border-gold-insignia/30"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="text-center mb-6">
                <div className={`inline-flex p-4 rounded-full ${getTypeColor(selectedAward.type)} mb-4`}>
                  <SafeIcon icon={selectedAward.icon} className="text-white text-3xl" />
                </div>
                <h3 className="font-heading text-2xl font-bold text-white-wake mb-2">
                  {selectedAward.name}
                </h3>
                <span className="text-gold-insignia font-body">
                  {selectedAward.date}
                </span>
              </div>
              
              <p className="text-tactical-steel text-center leading-relaxed mb-6">
                {selectedAward.description}
              </p>
              
              <button
                onClick={() => setSelectedAward(null)}
                className="w-full bg-gold-insignia text-naval-hull py-3 rounded-lg font-body font-semibold hover:bg-gold-insignia/90 transition-colors"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Honors;