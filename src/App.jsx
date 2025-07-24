import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Timeline from './components/Timeline';
import Story from './components/Story';
import Gallery from './components/Gallery';
import Honors from './components/Honors';
import Reflections from './components/Reflections';
import MissionMap from './components/MissionMap';
import PersonalAnchor from './components/PersonalAnchor';
import TimeCapsule from './components/TimeCapsule';
import Guestbook from './components/Guestbook';
import Footer from './components/Footer';
import Admin from './components/Admin';
import ScrollProgress from './components/ScrollProgress';
import WakeAnimation from './components/WakeAnimation';

function App() {
  const [scrollY, setScrollY] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    
    // Simulate loading
    setTimeout(() => setIsLoading(false), 2000);
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-sea-blue flex items-center justify-center z-50">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center"
        >
          <div className="w-16 h-16 border-4 border-gold-insignia border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-white-wake font-heading text-xl">Entering the Bridge...</p>
        </motion.div>
      </div>
    );
  }

  return (
    <Router>
      <div className="bg-sea-blue text-white-wake overflow-x-hidden">
        <ScrollProgress />
        <WakeAnimation />
        
        <Routes>
          <Route path="/admin" element={<Admin />} />
          <Route path="/" element={
            <>
              <Navigation scrollY={scrollY} />
              <main>
                <Hero />
                <Timeline />
                <Story />
                <Gallery />
                <Honors />
                <Reflections />
                <MissionMap />
                <PersonalAnchor />
                <TimeCapsule />
                <Guestbook />
              </main>
              <Footer />
            </>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;