import React from 'react';
import { motion } from 'framer-motion';
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion';

const serviceAreas = [
  'Downtown',
  'Westside',
  'Northend',
  'Eastside',
  'Southside',
  'Central',
  'Suburbs',
  'Greater Metro Area',
];

export const ServiceArea: React.FC = () => {
  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <section id="service-area" className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: prefersReducedMotion ? 0 : 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-slate-900 mb-4">
            Service Area
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Proudly serving the greater metropolitan area and surrounding communities.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Map Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.8 }}
            className="bg-slate-100 rounded-xl overflow-hidden shadow-md"
          >
            <div className="relative h-96 flex items-center justify-center">
              <div className="text-center px-6">
                <div className="text-6xl mb-4">📍</div>
                <p className="text-slate-600 font-medium">
                  Serving Your Area
                </p>
                <p className="text-sm text-slate-500 mt-2">
                  Contact us to confirm we cover your location
                </p>
              </div>
            </div>
          </motion.div>

          {/* Service Areas List */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.8 }}
          >
            <h3 className="font-heading font-semibold text-2xl text-slate-900 mb-6">
              Areas We Cover
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {serviceAreas.map((area, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: prefersReducedMotion ? 0 : 0.4,
                    delay: prefersReducedMotion ? 0 : index * 0.05,
                  }}
                  className="flex items-center space-x-2"
                >
                  <svg
                    className="w-5 h-5 text-accent flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-slate-700">{area}</span>
                </motion.div>
              ))}
            </div>
            <div className="mt-8 p-6 bg-accent/10 rounded-xl">
              <p className="text-slate-700 leading-relaxed">
                <strong className="text-slate-900">Don't see your area?</strong> We're always 
                expanding! Give us a call and we'll let you know if we can help.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
