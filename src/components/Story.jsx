import React from 'react';
import { motion } from 'framer-motion';

const Story = () => {
  return (
    <section className="py-20 bg-sea-blue">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-white-wake mb-4">
            "Why I Drove the Ship"
          </h2>
          <div className="w-24 h-0.5 bg-gold-insignia mx-auto"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-naval-hull/50 backdrop-blur-sm rounded-lg p-8 md:p-12 border border-tactical-steel/20"
        >
          <div className="prose prose-lg max-w-none text-white-wake">
            <div className="mb-8">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-0.5 bg-gold-insignia"></div>
                <span className="text-gold-insignia font-heading text-sm tracking-wider uppercase">
                  Commanding Officer's Standing Order
                </span>
                <div className="flex-1 h-0.5 bg-gold-insignia"></div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="space-y-6 text-lg leading-relaxed"
            >
              <p>
                The first time I took the conn as a young Ensign, I felt the weight of 300 souls beneath my feet. 
                Every decision, every course correction, every order given carried the responsibility of bringing 
                my sailors home safely to their families.
              </p>

              <p>
                Command at sea isn't about the authority—it's about the accountability. When the seas are rough 
                and the mission is critical, your crew looks to you not just for orders, but for confidence, 
                for steady hands, and for the assurance that their leader will never ask them to do something 
                she wouldn't do herself.
              </p>

              <blockquote className="border-l-4 border-gold-insignia pl-6 italic text-xl">
                "I drove the ship because someone had to chart the course. I led because my sailors 
                deserved a leader who understood that their trust was earned every single day at sea."
              </blockquote>

              <p>
                Twenty years of naval service taught me that leadership isn't about the stars on your collar 
                or the size of your command. It's about the young sailor who comes to you at 0200 with a 
                problem, knowing you'll listen. It's about making the hard decisions when lives are on the 
                line. It's about mentoring the next generation of leaders who will carry the Navy forward 
                long after you've struck your colors for the last time.
              </p>

              <p>
                The sea was my classroom, my crew was my greatest responsibility, and every day underway 
                was an opportunity to prove worthy of the trust placed in me by the United States Navy 
                and the sailors who followed my orders into harm's way.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-8 pt-6 border-t border-tactical-steel/20 text-right"
            >
              <p className="text-gold-insignia font-heading italic">
                — CDR Jenna M. Stone, USN (Ret.)
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Story;