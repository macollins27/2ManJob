import React from 'react';
import { motion } from 'framer-motion';
import { Button } from './Button';
import { scrollToSection } from '../utils/scrollToSection';
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion';

export const Hero: React.FC = () => {
  const prefersReducedMotion = usePrefersReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: prefersReducedMotion ? 0 : 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: prefersReducedMotion ? 0 : 0.6 },
    },
  };

  return (
    <section id="hero" className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center lg:text-left"
          >
            <motion.div variants={itemVariants} className="inline-block">
              <span className="inline-flex items-center px-4 py-2 rounded-full bg-accent/20 text-accent text-sm font-semibold mb-6">
                ⭐ Trusted Local Professionals
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl text-white mb-6 leading-tight"
            >
              Quality Home Improvements,{' '}
              <span className="text-accent">Done Right</span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-lg sm:text-xl text-slate-300 mb-8 max-w-2xl mx-auto lg:mx-0"
            >
              From small repairs to complete renovations, we bring skill, reliability, and care to every project. Your home deserves the best.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12"
            >
              <Button
                variant="primary"
                size="lg"
                onClick={() => scrollToSection('contact')}
              >
                Get Free Estimate
              </Button>
              <Button
                variant="ghost"
                size="lg"
                onClick={() => scrollToSection('services')}
              >
                Our Services
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-3 gap-6 max-w-lg mx-auto lg:mx-0"
            >
              <div className="text-center lg:text-left">
                <div className="font-heading font-bold text-3xl text-accent">500+</div>
                <div className="text-sm text-slate-400 mt-1">Projects Done</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="font-heading font-bold text-3xl text-accent">15+</div>
                <div className="text-sm text-slate-400 mt-1">Years Experience</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="font-heading font-bold text-3xl text-accent">5★</div>
                <div className="text-sm text-slate-400 mt-1">Rated Service</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Hero Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{
              opacity: 1,
              scale: 1,
              transition: { duration: prefersReducedMotion ? 0 : 0.8, delay: prefersReducedMotion ? 0 : 0.4 },
            }}
            className="relative"
          >
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-glass border border-white/20">
              <img
                src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80"
                alt="Professional handymen working on home renovation"
                className="w-full h-80 object-cover rounded-xl mb-6"
                loading="eager"
              />
              <div className="space-y-4">
                <h3 className="font-heading font-semibold text-xl text-white">
                  Why Choose Us?
                </h3>
                <ul className="space-y-3">
                  {[
                    'Licensed, bonded & insured',
                    'Transparent pricing, no hidden fees',
                    'Clean, respectful workmanship',
                    'On-time, every time',
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center text-slate-200">
                      <svg
                        className="w-5 h-5 text-accent mr-3 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
