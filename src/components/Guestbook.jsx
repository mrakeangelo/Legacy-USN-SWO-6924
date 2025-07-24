import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiEdit3, FiSend, FiUser, FiClock } = FiIcons;

const Guestbook = () => {
  const [newEntry, setNewEntry] = useState({ name: '', rank: '', message: '' });
  const [entries, setEntries] = useState([
    {
      id: 1,
      name: 'RADM Patricia Williams',
      rank: 'Rear Admiral, USN',
      message: 'Commander Stone exemplified everything we strive for in naval leadership. Her legacy will inspire generations of officers to come.',
      date: '2024-01-15',
      time: '14:30'
    },
    {
      id: 2,
      name: 'Sarah Stone',
      rank: 'Daughter',
      message: 'Mom, your strength and dedication taught me what it means to serve something greater than yourself. I miss you every day, but I carry your lessons with me always.',
      date: '2024-01-10',
      time: '09:15'
    },
    {
      id: 3,
      name: 'MCPO James Rodriguez',
      rank: 'Master Chief Petty Officer, USN (Ret.)',
      message: 'Served under CDR Stone for three years. She never asked us to do anything she wouldn\'t do herself. A true leader and an honor to serve with.',
      date: '2024-01-08',
      time: '16:45'
    }
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newEntry.name || !newEntry.message) return;

    const entry = {
      id: entries.length + 1,
      ...newEntry,
      date: new Date().toISOString().split('T')[0],
      time: new Date().toLocaleTimeString('en-US', { 
        hour: '2-digit', 
        minute: '2-digit',
        hour12: false 
      })
    };

    setEntries([entry, ...entries]);
    setNewEntry({ name: '', rank: '', message: '' });
  };

  return (
    <section id="guestbook" className="py-20 bg-naval-hull">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-white-wake mb-4">
            Bridge Wall Guestbook
          </h2>
          <p className="text-tactical-steel text-lg max-w-2xl mx-auto">
            Share your memories, tributes, and stories of CDR Stone's impact on your life and service.
          </p>
        </motion.div>

        {/* Add New Entry Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-sea-blue/50 backdrop-blur-sm rounded-lg p-8 border border-tactical-steel/20 mb-12"
        >
          <div className="flex items-center space-x-3 mb-6">
            <div className="p-2 bg-gold-insignia rounded-full">
              <SafeIcon icon={FiEdit3} className="text-naval-hull text-lg" />
            </div>
            <h3 className="font-heading text-xl font-bold text-white-wake">
              Add Your Entry
            </h3>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-white-wake font-body font-medium mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  value={newEntry.name}
                  onChange={(e) => setNewEntry({ ...newEntry, name: e.target.value })}
                  className="w-full bg-naval-hull/50 border border-tactical-steel/30 rounded-lg px-4 py-3 text-white-wake focus:border-gold-insignia focus:outline-none transition-colors"
                  placeholder="Your full name"
                  required
                />
              </div>
              <div>
                <label className="block text-white-wake font-body font-medium mb-2">
                  Rank/Title
                </label>
                <input
                  type="text"
                  value={newEntry.rank}
                  onChange={(e) => setNewEntry({ ...newEntry, rank: e.target.value })}
                  className="w-full bg-naval-hull/50 border border-tactical-steel/30 rounded-lg px-4 py-3 text-white-wake focus:border-gold-insignia focus:outline-none transition-colors"
                  placeholder="e.g., LT, USN or Family Friend"
                />
              </div>
            </div>

            <div>
              <label className="block text-white-wake font-body font-medium mb-2">
                Message *
              </label>
              <textarea
                value={newEntry.message}
                onChange={(e) => setNewEntry({ ...newEntry, message: e.target.value })}
                rows={4}
                className="w-full bg-naval-hull/50 border border-tactical-steel/30 rounded-lg px-4 py-3 text-white-wake focus:border-gold-insignia focus:outline-none transition-colors resize-none"
                placeholder="Share your memories, tribute, or message..."
                required
              />
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center space-x-2 bg-gold-insignia text-naval-hull px-6 py-3 rounded-lg font-body font-semibold hover:bg-gold-insignia/90 transition-colors"
            >
              <SafeIcon icon={FiSend} className="text-lg" />
              <span>Submit Entry</span>
            </motion.button>
          </form>
        </motion.div>

        {/* Guestbook Entries */}
        <div className="space-y-6">
          <h3 className="font-heading text-2xl font-bold text-white-wake mb-8">
            Recent Entries ({entries.length})
          </h3>

          {entries.map((entry, index) => (
            <motion.div
              key={entry.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-sea-blue/30 backdrop-blur-sm rounded-lg p-6 border border-tactical-steel/20"
            >
              <div className="flex items-start space-x-4">
                <div className="p-2 bg-tactical-steel/30 rounded-full">
                  <SafeIcon icon={FiUser} className="text-gold-insignia text-lg" />
                </div>
                
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                    <div>
                      <h4 className="font-heading text-lg font-bold text-white-wake">
                        {entry.name}
                      </h4>
                      {entry.rank && (
                        <p className="text-gold-insignia text-sm">
                          {entry.rank}
                        </p>
                      )}
                    </div>
                    <div className="flex items-center space-x-2 text-tactical-steel text-sm mt-2 sm:mt-0">
                      <SafeIcon icon={FiClock} className="text-xs" />
                      <span>{entry.date} at {entry.time}</span>
                    </div>
                  </div>
                  
                  <p className="text-tactical-steel leading-relaxed">
                    {entry.message}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Logbook Style Footer */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <div className="bg-naval-hull/30 backdrop-blur-sm rounded-lg p-6 border border-tactical-steel/20">
            <p className="text-tactical-steel text-sm italic">
              "The finest tribute to a naval officer is not in the medals earned, 
              but in the lives touched and the legacy left in the wake of service."
            </p>
            <div className="w-24 h-0.5 bg-gold-insignia mx-auto mt-4"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Guestbook;