import React from 'react';
import { motion } from 'framer-motion';
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion';

export const About: React.FC = () => {
  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <section id="about" className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Image */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.8 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80"
                alt="Professional handymen team"
                className="w-full h-96 object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-white font-semibold text-lg">
                  Meet Your Local Experts
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.8 }}
          >
            <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-slate-900 mb-6">
              About Us
            </h2>
            <div className="space-y-4 text-lg text-slate-600 leading-relaxed">
              <p>
                We're a locally-owned handyman and renovation business built on a simple philosophy: 
                <strong className="text-slate-900"> treat every home like it's our own</strong>.
              </p>
              <p>
                With over 15 years of combined experience, we've helped hundreds of homeowners transform 
                their spaces with quality craftsmanship, honest communication, and reliable service.
              </p>
              <p>
                Whether it's a quick repair or a complete renovation, we bring the same level of care 
                and expertise to every job. We're not just contractors—we're your neighbors, committed 
                to making your home better.
              </p>
            </div>

            <div className="mt-8 grid sm:grid-cols-2 gap-6">
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                    <svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-1">Licensed & Insured</h3>
                  <p className="text-sm text-slate-600">Fully covered for your protection</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                    <svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-1">Local Experts</h3>
                  <p className="text-sm text-slate-600">Community-focused service</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
