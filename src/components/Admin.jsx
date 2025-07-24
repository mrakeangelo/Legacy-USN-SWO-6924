import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiLock, FiUser, FiSettings, FiEdit, FiImage, FiCalendar, FiUsers, FiArrowLeft } = FiIcons;

const Admin = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const [activeTab, setActiveTab] = useState('timeline');

  const handleLogin = (e) => {
    e.preventDefault();
    // Simple authentication for demo purposes
    if (credentials.email === 'admin@cdrstonelegacy.com' && credentials.password === 'NavyStrong2024') {
      setIsAuthenticated(true);
    } else {
      alert('Invalid credentials');
    }
  };

  const adminTabs = [
    { id: 'timeline', name: 'Timeline', icon: FiCalendar },
    { id: 'gallery', name: 'Gallery', icon: FiImage },
    { id: 'content', name: 'Content', icon: FiEdit },
    { id: 'guestbook', name: 'Guestbook', icon: FiUsers },
    { id: 'settings', name: 'Settings', icon: FiSettings },
  ];

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-sea-blue flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-naval-hull rounded-lg p-8 max-w-md w-full mx-4 border border-tactical-steel/20"
        >
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gold-insignia/20 rounded-full mb-4">
              <SafeIcon icon={FiLock} className="text-gold-insignia text-2xl" />
            </div>
            <h1 className="font-heading text-2xl font-bold text-white-wake mb-2">
              Admin Access
            </h1>
            <p className="text-tactical-steel">
              Enter your credentials to access the administration panel
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-white-wake font-body font-medium mb-2">
                Email Address
              </label>
              <input
                type="email"
                value={credentials.email}
                onChange={(e) => setCredentials({ ...credentials, email: e.target.value })}
                className="w-full bg-sea-blue/50 border border-tactical-steel/30 rounded-lg px-4 py-3 text-white-wake focus:border-gold-insignia focus:outline-none transition-colors"
                placeholder="admin@cdrstonelegacy.com"
                required
              />
            </div>

            <div>
              <label className="block text-white-wake font-body font-medium mb-2">
                Password
              </label>
              <input
                type="password"
                value={credentials.password}
                onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
                className="w-full bg-sea-blue/50 border border-tactical-steel/30 rounded-lg px-4 py-3 text-white-wake focus:border-gold-insignia focus:outline-none transition-colors"
                placeholder="Enter your password"
                required
              />
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-gold-insignia text-naval-hull py-3 rounded-lg font-body font-semibold hover:bg-gold-insignia/90 transition-colors"
            >
              Access Admin Panel
            </motion.button>
          </form>

          <div className="mt-6 p-4 bg-sea-blue/30 rounded-lg">
            <p className="text-tactical-steel text-sm">
              <strong>Demo Credentials:</strong><br />
              Email: admin@cdrstonelegacy.com<br />
              Password: NavyStrong2024
            </p>
          </div>

          <div className="mt-6 text-center">
            <a
              href="/"
              className="inline-flex items-center space-x-2 text-gold-insignia hover:text-gold-insignia/80 transition-colors"
            >
              <SafeIcon icon={FiArrowLeft} className="text-sm" />
              <span>Back to Site</span>
            </a>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-sea-blue">
      {/* Header */}
      <div className="bg-naval-hull border-b border-tactical-steel/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <SafeIcon icon={FiSettings} className="text-gold-insignia text-2xl" />
              <h1 className="font-heading text-xl font-bold text-white-wake">
                Admin Panel
              </h1>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-tactical-steel text-sm">
                Welcome, Administrator
              </span>
              <a
                href="/"
                className="inline-flex items-center space-x-2 text-gold-insignia hover:text-gold-insignia/80 transition-colors"
              >
                <SafeIcon icon={FiArrowLeft} className="text-sm" />
                <span>Back to Site</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <nav className="space-y-2">
              {adminTabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg font-body font-medium transition-colors ${
                    activeTab === tab.id
                      ? 'bg-gold-insignia text-naval-hull'
                      : 'bg-naval-hull/50 text-white-wake hover:bg-naval-hull/70'
                  }`}
                >
                  <SafeIcon icon={tab.icon} className="text-lg" />
                  <span>{tab.name}</span>
                </button>
              ))}
            </nav>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-naval-hull/50 backdrop-blur-sm rounded-lg p-8 border border-tactical-steel/20"
            >
              {activeTab === 'timeline' && (
                <div>
                  <h2 className="font-heading text-2xl font-bold text-white-wake mb-6">
                    Timeline Management
                  </h2>
                  <div className="space-y-4">
                    <div className="bg-sea-blue/30 rounded-lg p-4">
                      <h3 className="text-white-wake font-semibold mb-2">Add New Timeline Event</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input
                          type="text"
                          placeholder="Year"
                          className="bg-naval-hull/50 border border-tactical-steel/30 rounded px-3 py-2 text-white-wake"
                        />
                        <input
                          type="text"
                          placeholder="Title"
                          className="bg-naval-hull/50 border border-tactical-steel/30 rounded px-3 py-2 text-white-wake"
                        />
                      </div>
                      <textarea
                        placeholder="Description"
                        rows={3}
                        className="w-full mt-4 bg-naval-hull/50 border border-tactical-steel/30 rounded px-3 py-2 text-white-wake"
                      />
                      <button className="mt-4 bg-gold-insignia text-naval-hull px-4 py-2 rounded font-semibold">
                        Add Event
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'gallery' && (
                <div>
                  <h2 className="font-heading text-2xl font-bold text-white-wake mb-6">
                    Gallery Management
                  </h2>
                  <div className="space-y-4">
                    <div className="bg-sea-blue/30 rounded-lg p-4">
                      <h3 className="text-white-wake font-semibold mb-2">Upload New Images</h3>
                      <input
                        type="file"
                        multiple
                        accept="image/*"
                        className="w-full bg-naval-hull/50 border border-tactical-steel/30 rounded px-3 py-2 text-white-wake"
                      />
                      <button className="mt-4 bg-gold-insignia text-naval-hull px-4 py-2 rounded font-semibold">
                        Upload Images
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'content' && (
                <div>
                  <h2 className="font-heading text-2xl font-bold text-white-wake mb-6">
                    Content Management
                  </h2>
                  <div className="space-y-4">
                    <div className="bg-sea-blue/30 rounded-lg p-4">
                      <h3 className="text-white-wake font-semibold mb-2">Edit Story Section</h3>
                      <textarea
                        rows={8}
                        placeholder="Story content..."
                        className="w-full bg-naval-hull/50 border border-tactical-steel/30 rounded px-3 py-2 text-white-wake"
                      />
                      <button className="mt-4 bg-gold-insignia text-naval-hull px-4 py-2 rounded font-semibold">
                        Save Changes
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'guestbook' && (
                <div>
                  <h2 className="font-heading text-2xl font-bold text-white-wake mb-6">
                    Guestbook Moderation
                  </h2>
                  <div className="space-y-4">
                    <div className="bg-sea-blue/30 rounded-lg p-4">
                      <h3 className="text-white-wake font-semibold mb-2">Pending Entries (3)</h3>
                      <p className="text-tactical-steel">Review and approve new guestbook entries.</p>
                      <button className="mt-4 bg-gold-insignia text-naval-hull px-4 py-2 rounded font-semibold">
                        Review Entries
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'settings' && (
                <div>
                  <h2 className="font-heading text-2xl font-bold text-white-wake mb-6">
                    Site Settings
                  </h2>
                  <div className="space-y-4">
                    <div className="bg-sea-blue/30 rounded-lg p-4">
                      <h3 className="text-white-wake font-semibold mb-2">General Settings</h3>
                      <div className="space-y-4">
                        <div>
                          <label className="block text-white-wake mb-2">Site Title</label>
                          <input
                            type="text"
                            defaultValue="CDR Jenna M. Stone - Naval Legacy"
                            className="w-full bg-naval-hull/50 border border-tactical-steel/30 rounded px-3 py-2 text-white-wake"
                          />
                        </div>
                        <div>
                          <label className="block text-white-wake mb-2">Contact Email</label>
                          <input
                            type="email"
                            defaultValue="memorial@cdrstonelegacy.com"
                            className="w-full bg-naval-hull/50 border border-tactical-steel/30 rounded px-3 py-2 text-white-wake"
                          />
                        </div>
                      </div>
                      <button className="mt-4 bg-gold-insignia text-naval-hull px-4 py-2 rounded font-semibold">
                        Save Settings
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;