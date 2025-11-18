import React from 'react';
import { motion } from 'framer-motion';
import { services } from '../data/services';
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion';

export const Services: React.FC = () => {
  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <section id="services" className="py-16 sm:py-20 lg:py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: prefersReducedMotion ? 0 : 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-slate-900 mb-4">
            Our Services
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            From minor fixes to major renovations, we handle it all with expertise and care.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: prefersReducedMotion ? 0 : 0.6,
                delay: prefersReducedMotion ? 0 : index * 0.1,
              }}
              whileHover={
                prefersReducedMotion
                  ? {}
                  : {
                      y: -4,
                      boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
                    }
              }
              className="bg-white rounded-xl p-8 shadow-md transition-shadow duration-300"
            >
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="font-heading font-semibold text-xl text-slate-900 mb-3">
                {service.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
