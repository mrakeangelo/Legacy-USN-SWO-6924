import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiUser, FiUsers, FiHeart } = FiIcons;

const Reflections = () => {
  const testimonials = [
    {
      id: 1,
      name: 'MCPO Sarah Martinez',
      role: 'Command Master Chief, USS Gravely',
      icon: FiUser,
      quote: "Commander Stone led with both strength and compassion. She never asked us to do anything she wouldn't do herself. Under her command, we weren't just a crew—we were a family.",
      image: 'https://images.unsplash.com/photo-1594736797933-d0b22d3b2e4d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'
    },
    {
      id: 2,
      name: 'CAPT Michael Thompson',
      role: 'Former CO, USS Cole',
      icon: FiUsers,
      quote: "As my Operations Officer, Jenna demonstrated the tactical acumen and leadership qualities that would make her an exceptional commanding officer. She was always thinking three steps ahead.",
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'
    },
    {
      id: 3,
      name: 'LT Jennifer Walsh',
      role: 'Former Division Officer',
      icon: FiHeart,
      quote: "CDR Stone was more than a commanding officer—she was a mentor who showed me what it meant to be a leader in the Navy. Her guidance shaped my entire career.",
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'
    },
    {
      id: 4,
      name: 'OS1 Marcus Johnson',
      role: 'Bridge Watchstander',
      icon: FiUser,
      quote: "The Captain knew every sailor's name and their story. She made time for everyone, from the most junior seaman to the department heads. That's real leadership.",
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'
    }
  ];

  return (
    <section id="reflections" className="py-20 bg-naval-hull">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-white-wake mb-4">
            Command Reflections
          </h2>
          <p className="text-tactical-steel text-lg max-w-2xl mx-auto">
            Words from the sailors, officers, and leaders who served alongside CDR Stone.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="bg-sea-blue/50 backdrop-blur-sm rounded-lg p-8 border border-tactical-steel/20"
            >
              <div className="flex items-start space-x-4 mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-gold-insignia"
                />
                <div className="flex-1">
                  <h3 className="font-heading text-lg font-bold text-white-wake">
                    {testimonial.name}
                  </h3>
                  <p className="text-gold-insignia text-sm">
                    {testimonial.role}
                  </p>
                </div>
                <div className="p-2 bg-gold-insignia/20 rounded-full">
                  <SafeIcon icon={testimonial.icon} className="text-gold-insignia text-lg" />
                </div>
              </div>

              <blockquote className="text-tactical-steel leading-relaxed italic">
                "{testimonial.quote}"
              </blockquote>
            </motion.div>
          ))}
        </div>

        {/* Command Philosophy */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="bg-sea-blue/30 backdrop-blur-sm rounded-lg p-8 border border-tactical-steel/20 max-w-4xl mx-auto">
            <h3 className="font-heading text-2xl font-bold text-white-wake mb-6">
              Command Philosophy
            </h3>
            <div className="space-y-4 text-tactical-steel">
              <p className="text-lg italic">
                "Leadership is not about being in charge. It's about taking care of those in your charge."
              </p>
              <div className="w-24 h-0.5 bg-gold-insignia mx-auto my-4"></div>
              <p>
                Every decision was made with the welfare of my sailors in mind. Every training evolution 
                was designed to bring them home safely. Every port visit was an opportunity to build 
                the team that would face the next challenge together.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Reflections;