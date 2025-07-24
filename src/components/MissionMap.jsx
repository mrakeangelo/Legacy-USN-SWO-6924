import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiMapPin, FiNavigation, FiGlobe, FiTarget } = FiIcons;

const MissionMap = () => {
  const [selectedMission, setSelectedMission] = useState(null);

  const missions = [
    {
      id: 1,
      name: 'Operation Enduring Freedom',
      location: 'Arabian Gulf',
      year: '2015-2016',
      coordinates: { x: 65, y: 45 },
      type: 'combat',
      description: 'Counter-piracy operations and maritime security in support of Coalition forces.',
      role: 'Commanding Officer, USS Gravely',
      duration: '8 months'
    },
    {
      id: 2,
      name: 'NATO Maritime Group',
      location: 'Mediterranean Sea',
      year: '2012-2013',
      coordinates: { x: 45, y: 35 },
      type: 'alliance',
      description: 'Multinational maritime operations with NATO allies in the Eastern Mediterranean.',
      role: 'Executive Officer, USS Porter',
      duration: '6 months'
    },
    {
      id: 3,
      name: 'Baltic Operations',
      location: 'Baltic Sea',
      year: '2018-2019',
      coordinates: { x: 50, y: 25 },
      type: 'training',
      description: 'Joint training exercises with Baltic NATO partners.',
      role: 'Squadron Commander, DESRON 2',
      duration: '4 months'
    },
    {
      id: 4,
      name: 'Freedom of Navigation',
      location: 'South China Sea',
      year: '2007-2008',
      coordinates: { x: 75, y: 55 },
      type: 'patrol',
      description: 'Freedom of Navigation Operations ensuring open sea lanes.',
      role: 'Operations Officer, USS Ramage',
      duration: '7 months'
    }
  ];

  const getTypeColor = (type) => {
    switch (type) {
      case 'combat': return 'bg-red-500';
      case 'alliance': return 'bg-blue-500';
      case 'training': return 'bg-green-500';
      case 'patrol': return 'bg-yellow-500';
      default: return 'bg-tactical-steel';
    }
  };

  const getTypeIcon = (type) => {
    switch (type) {
      case 'combat': return FiTarget;
      case 'alliance': return FiGlobe;
      case 'training': return FiNavigation;
      case 'patrol': return FiMapPin;
      default: return FiMapPin;
    }
  };

  return (
    <section className="py-20 bg-sea-blue">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-white-wake mb-4">
            Tactical Mission Map
          </h2>
          <p className="text-tactical-steel text-lg max-w-2xl mx-auto">
            Global operations and deployments spanning two decades of naval service.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Interactive Map */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="bg-naval-hull/50 backdrop-blur-sm rounded-lg p-6 border border-tactical-steel/20"
            >
              <div className="relative w-full h-96 bg-sea-blue/30 rounded-lg overflow-hidden">
                {/* World Map Background */}
                <div className="absolute inset-0 opacity-20">
                  <svg viewBox="0 0 100 60" className="w-full h-full">
                    {/* Simplified world map paths */}
                    <path
                      d="M10,20 L30,15 L50,25 L70,20 L90,30 L90,50 L10,50 Z"
                      fill="currentColor"
                      className="text-tactical-steel"
                    />
                  </svg>
                </div>

                {/* Mission Points */}
                {missions.map((mission, index) => (
                  <motion.div
                    key={mission.id}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer"
                    style={{ 
                      left: `${mission.coordinates.x}%`, 
                      top: `${mission.coordinates.y}%` 
                    }}
                    onClick={() => setSelectedMission(mission)}
                  >
                    <motion.div
                      whileHover={{ scale: 1.2 }}
                      className={`w-4 h-4 rounded-full ${getTypeColor(mission.type)} border-2 border-white shadow-lg`}
                    >
                      <motion.div
                        animate={{ scale: [1, 1.5, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className={`w-8 h-8 rounded-full ${getTypeColor(mission.type)} opacity-30 absolute -top-2 -left-2`}
                      />
                    </motion.div>
                  </motion.div>
                ))}

                {/* Radar Sweep Animation */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
                  className="absolute top-4 right-4 w-12 h-12"
                >
                  <div className="w-full h-full border-2 border-gold-insignia/30 rounded-full">
                    <div className="w-full h-0.5 bg-gold-insignia/50 absolute top-1/2 left-0 origin-right transform -translate-y-1/2"></div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Mission Details */}
          <div className="space-y-6">
            <h3 className="font-heading text-2xl font-bold text-white-wake mb-4">
              Operations Log
            </h3>
            
            {missions.map((mission, index) => (
              <motion.div
                key={mission.id}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className={`bg-naval-hull/50 backdrop-blur-sm rounded-lg p-4 border cursor-pointer transition-all ${
                  selectedMission?.id === mission.id 
                    ? 'border-gold-insignia' 
                    : 'border-tactical-steel/20 hover:border-tactical-steel/40'
                }`}
                onClick={() => setSelectedMission(mission)}
              >
                <div className="flex items-start space-x-3">
                  <div className={`p-2 rounded-full ${getTypeColor(mission.type)}`}>
                    <SafeIcon icon={getTypeIcon(mission.type)} className="text-white text-sm" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-heading text-lg font-bold text-white-wake">
                      {mission.name}
                    </h4>
                    <p className="text-gold-insignia text-sm mb-1">
                      {mission.location} • {mission.year}
                    </p>
                    <p className="text-tactical-steel text-sm">
                      {mission.role}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Selected Mission Details */}
        {selectedMission && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-12 bg-naval-hull/50 backdrop-blur-sm rounded-lg p-8 border border-gold-insignia/30"
          >
            <div className="flex items-start space-x-4 mb-6">
              <div className={`p-3 rounded-full ${getTypeColor(selectedMission.type)}`}>
                <SafeIcon icon={getTypeIcon(selectedMission.type)} className="text-white text-xl" />
              </div>
              <div className="flex-1">
                <h3 className="font-heading text-2xl font-bold text-white-wake mb-2">
                  {selectedMission.name}
                </h3>
                <div className="flex flex-wrap gap-4 text-sm">
                  <span className="text-gold-insignia">
                    📍 {selectedMission.location}
                  </span>
                  <span className="text-gold-insignia">
                    📅 {selectedMission.year}
                  </span>
                  <span className="text-gold-insignia">
                    ⏱️ {selectedMission.duration}
                  </span>
                </div>
              </div>
            </div>
            
            <p className="text-tactical-steel leading-relaxed mb-4">
              {selectedMission.description}
            </p>
            
            <div className="bg-sea-blue/30 rounded-lg p-4">
              <span className="text-white-wake font-semibold">Leadership Role: </span>
              <span className="text-tactical-steel">{selectedMission.role}</span>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default MissionMap;