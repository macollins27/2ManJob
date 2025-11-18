import React from 'react';
import { motion } from 'framer-motion';
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion';

const processSteps = [
  {
    number: '01',
    title: 'Contact & Consultation',
    description: 'Reach out to us with your project details. We\'ll schedule a free consultation to discuss your needs, timeline, and budget.',
    icon: '📞',
  },
  {
    number: '02',
    title: 'Free Estimate',
    description: 'We visit your location to assess the work and provide a detailed, transparent quote with no hidden fees or surprises.',
    icon: '📋',
  },
  {
    number: '03',
    title: 'Quality Work Delivered',
    description: 'Our skilled team completes your project on time with excellent craftsmanship. We clean up thoroughly and ensure your satisfaction.',
    icon: '✨',
  },
];

export const Process: React.FC = () => {
  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <section id="process" className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: prefersReducedMotion ? 0 : 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-slate-900 mb-4">
            How It Works
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            A simple, straightforward process from start to finish.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 relative">
          {/* Connecting Line - Desktop Only */}
          <div className="hidden md:block absolute top-16 left-0 right-0 h-0.5 bg-gradient-to-r from-accent via-accent to-accent opacity-20" style={{ top: '4rem' }} />

          {processSteps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: prefersReducedMotion ? 0 : 0.6,
                delay: prefersReducedMotion ? 0 : index * 0.2,
              }}
              className="relative"
            >
              {/* Step Number Badge */}
              <div className="flex justify-center md:justify-start mb-6">
                <div className="relative">
                  <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center shadow-lg">
                    <span className="font-heading font-bold text-2xl text-slate-900">
                      {step.number}
                    </span>
                  </div>
                  {/* Icon overlay */}
                  <div className="absolute -bottom-2 -right-2 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-2xl">
                    {step.icon}
                  </div>
                </div>
              </div>

              <div className="text-center md:text-left">
                <h3 className="font-heading font-semibold text-xl text-slate-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
