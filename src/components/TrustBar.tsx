import React from 'react';
import { motion } from 'framer-motion';
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion';

const trustItems = [
  { icon: '✓', label: 'Licensed & Insured' },
  { icon: '⭐', label: '5-Star Rated' },
  { icon: '🏆', label: 'Award Winning' },
  { icon: '💯', label: 'Satisfaction Guaranteed' },
];

export const TrustBar: React.FC = () => {
  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <section id="trust" className="py-12 bg-white/5 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: prefersReducedMotion ? 0 : 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {trustItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: prefersReducedMotion ? 0 : 0.6,
                delay: prefersReducedMotion ? 0 : index * 0.1,
              }}
              className="flex flex-col items-center text-center"
            >
              <div className="text-4xl mb-3">{item.icon}</div>
              <div className="font-semibold text-white text-sm sm:text-base">
                {item.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
