import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiX, FiChevronLeft, FiChevronRight } = FiIcons;

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Operations' },
    { id: 'underway', name: 'Underway Ops' },
    { id: 'port', name: 'Port Visits' },
    { id: 'ceremonies', name: 'Ceremonies' },
    { id: 'training', name: 'Training' }
  ];

  const galleryItems = [
    {
      id: 1,
      src: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      title: 'Change of Command Ceremony',
      category: 'ceremonies',
      description: 'Assuming command of USS Gravely (DDG-107)',
      location: 'Norfolk, VA'
    },
    {
      id: 2,
      src: 'https://images.unsplash.com/photo-1541806230-f8a7c4c0b5d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      title: 'Mediterranean Deployment',
      category: 'underway',
      description: 'Conducting operations in the Eastern Mediterranean',
      location: 'Mediterranean Sea'
    },
    {
      id: 3,
      src: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      title: 'Bridge Operations',
      category: 'underway',
      description: 'Conning the ship during tactical maneuvers',
      location: 'Atlantic Ocean'
    },
    {
      id: 4,
      src: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      title: 'Port Visit Barcelona',
      category: 'port',
      description: 'Liberty call in Barcelona, Spain',
      location: 'Barcelona, Spain'
    },
    {
      id: 5,
      src: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      title: 'Damage Control Training',
      category: 'training',
      description: 'Leading damage control exercises',
      location: 'USS Gravely'
    },
    {
      id: 6,
      src: 'https://images.unsplash.com/photo-1566737236500-c8ac43014a8e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      title: 'UNREP Operations',
      category: 'underway',
      description: 'Underway replenishment with USNS Supply',
      location: 'Arabian Gulf'
    }
  ];

  const filteredItems = selectedCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  const openLightbox = (image, index) => {
    setSelectedImage({ ...image, index });
  };

  const navigateImage = (direction) => {
    if (!selectedImage) return;
    
    const currentIndex = selectedImage.index;
    const newIndex = direction === 'next' 
      ? (currentIndex + 1) % filteredItems.length
      : (currentIndex - 1 + filteredItems.length) % filteredItems.length;
    
    setSelectedImage({ ...filteredItems[newIndex], index: newIndex });
  };

  return (
    <section id="gallery" className="py-20 bg-naval-hull">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-white-wake mb-4">
            Operations Gallery
          </h2>
          <p className="text-tactical-steel text-lg max-w-2xl mx-auto">
            Moments captured across deployments, training exercises, and ceremonial events.
          </p>
        </motion.div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <motion.button
              key={category.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-full font-body font-medium transition-colors ${
                selectedCategory === category.id
                  ? 'bg-gold-insignia text-naval-hull'
                  : 'bg-sea-blue/50 text-white-wake hover:bg-sea-blue/70'
              }`}
            >
              {category.name}
            </motion.button>
          ))}
        </div>

        {/* Gallery Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4 }}
                whileHover={{ scale: 1.02 }}
                className="group cursor-pointer"
                onClick={() => openLightbox(item, index)}
              >
                <div className="relative overflow-hidden rounded-lg bg-sea-blue/30 aspect-[4/3]">
                  <img
                    src={item.src}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-naval-hull/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="font-heading text-lg font-bold text-white-wake mb-1">
                        {item.title}
                      </h3>
                      <p className="text-tactical-steel text-sm">
                        {item.location}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Lightbox */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedImage(null)}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="relative max-w-4xl max-h-full"
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={selectedImage.src}
                  alt={selectedImage.title}
                  className="max-w-full max-h-[80vh] object-contain rounded-lg"
                />
                
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-lg">
                  <h3 className="font-heading text-xl font-bold text-white mb-2">
                    {selectedImage.title}
                  </h3>
                  <p className="text-gray-300 mb-1">{selectedImage.description}</p>
                  <p className="text-gold-insignia text-sm">{selectedImage.location}</p>
                </div>

                {/* Navigation Buttons */}
                <button
                  onClick={() => navigateImage('prev')}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
                >
                  <SafeIcon icon={FiChevronLeft} className="text-2xl" />
                </button>
                
                <button
                  onClick={() => navigateImage('next')}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
                >
                  <SafeIcon icon={FiChevronRight} className="text-2xl" />
                </button>

                {/* Close Button */}
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
                >
                  <SafeIcon icon={FiX} className="text-2xl" />
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Gallery;