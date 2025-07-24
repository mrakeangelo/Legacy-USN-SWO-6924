import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiLock, FiUnlock, FiClock, FiMail, FiUsers, FiHeart } = FiIcons;

const TimeCapsule = () => {
  const [unlockedLetters, setUnlockedLetters] = useState([]);

  const letters = [
    {
      id: 1,
      title: 'To My Future Family',
      recipient: 'Sarah & Michael Stone',
      unlockDate: '2025-12-25',
      icon: FiHeart,
      isUnlocked: true,
      preview: 'A Christmas letter to be opened on the 25th anniversary of my first deployment...',
      content: `My dearest Sarah and Michael,

If you're reading this, it means I've been gone from this world for some time now. I wanted to leave you with words that would remind you of the love that connected us across every ocean I sailed.

The hardest part of naval service wasn't the long deployments or the dangerous missions—it was the time away from you. Every sunrise at sea reminded me of the sunrises I was missing at home, watching you grow up, celebrating your achievements, being there for your challenges.

But I want you to know that every day I served was a day I served for you. Every storm we weathered, every mission we completed, every sailor we brought home safely—it was all in service of the world I wanted to leave for you.

Remember that courage isn't the absence of fear—it's doing what's right despite the fear. Lead with compassion, stand up for those who can't stand up for themselves, and never forget that the greatest honor in my life wasn't the rank I achieved or the ships I commanded—it was being your mother.

I love you beyond the horizon and deeper than any ocean I've sailed.

With all my love,
Mom`
    },
    {
      id: 2,
      title: 'To Future Female SWOs',
      recipient: 'The Next Generation of Naval Leaders',
      unlockDate: '2030-01-01',
      icon: FiUsers,
      isUnlocked: false,
      preview: 'Words of encouragement for the women who will follow in my wake...',
      content: ''
    },
    {
      id: 3,
      title: 'To My Ship Crews',
      recipient: 'USS Gravely & USS Porter Sailors',
      unlockDate: '2027-06-15',
      icon: FiMail,
      isUnlocked: false,
      preview: 'A final message to the sailors who trusted me with their lives...',
      content: ''
    }
  ];

  const toggleLetter = (letterId) => {
    const letter = letters.find(l => l.id === letterId);
    if (!letter.isUnlocked) return;
    
    if (unlockedLetters.includes(letterId)) {
      setUnlockedLetters(unlockedLetters.filter(id => id !== letterId));
    } else {
      setUnlockedLetters([...unlockedLetters, letterId]);
    }
  };

  const isLetterOpen = (letterId) => unlockedLetters.includes(letterId);

  return (
    <section className="py-20 bg-sea-blue">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-white-wake mb-4">
            Time Capsule Letters
          </h2>
          <p className="text-tactical-steel text-lg max-w-2xl mx-auto">
            Messages sealed for future generations, to be opened when the time is right.
          </p>
        </motion.div>

        <div className="space-y-8">
          {letters.map((letter, index) => (
            <motion.div
              key={letter.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-naval-hull/50 backdrop-blur-sm rounded-lg border border-tactical-steel/20 overflow-hidden"
            >
              {/* Letter Header */}
              <div 
                className={`p-6 cursor-pointer transition-all ${
                  letter.isUnlocked ? 'hover:bg-naval-hull/70' : 'opacity-60'
                }`}
                onClick={() => toggleLetter(letter.id)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className={`p-3 rounded-full ${
                      letter.isUnlocked ? 'bg-gold-insignia' : 'bg-tactical-steel'
                    }`}>
                      <SafeIcon icon={letter.icon} className="text-naval-hull text-xl" />
                    </div>
                    <div>
                      <h3 className="font-heading text-xl font-bold text-white-wake">
                        {letter.title}
                      </h3>
                      <p className="text-gold-insignia text-sm">
                        To: {letter.recipient}
                      </p>
                      <div className="flex items-center space-x-2 mt-1">
                        <SafeIcon icon={FiClock} className="text-tactical-steel text-sm" />
                        <span className="text-tactical-steel text-sm">
                          Unlock Date: {letter.unlockDate}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    {letter.isUnlocked ? (
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        className="text-gold-insignia"
                      >
                        <SafeIcon 
                          icon={isLetterOpen(letter.id) ? FiUnlock : FiLock} 
                          className="text-2xl" 
                        />
                      </motion.div>
                    ) : (
                      <div className="text-tactical-steel">
                        <SafeIcon icon={FiLock} className="text-2xl" />
                      </div>
                    )}
                  </div>
                </div>

                {/* Preview */}
                {!isLetterOpen(letter.id) && (
                  <div className="mt-4 p-4 bg-sea-blue/30 rounded-lg">
                    <p className="text-tactical-steel italic">
                      {letter.preview}
                    </p>
                  </div>
                )}
              </div>

              {/* Letter Content */}
              <AnimatePresence>
                {isLetterOpen(letter.id) && letter.content && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="border-t border-tactical-steel/20"
                  >
                    <div className="p-6 bg-sea-blue/20">
                      <div className="prose max-w-none">
                        <div className="whitespace-pre-line text-tactical-steel leading-relaxed">
                          {letter.content}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Instructions */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <div className="bg-naval-hull/30 backdrop-blur-sm rounded-lg p-6 border border-tactical-steel/20 max-w-2xl mx-auto">
            <p className="text-tactical-steel text-sm leading-relaxed">
              <SafeIcon icon={FiLock} className="inline mr-2" />
              Some letters remain sealed until their designated unlock dates. 
              These messages were written with specific moments in mind, 
              to be shared when the time is right.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TimeCapsule;