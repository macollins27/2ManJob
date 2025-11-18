import React from 'react';
import { motion } from 'framer-motion';
import { projects } from '../data/projects';
import { BeforeAfterSlider } from './BeforeAfterSlider';
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion';

export const Projects: React.FC = () => {
  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <section id="projects" className="py-16 sm:py-20 lg:py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: prefersReducedMotion ? 0 : 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-slate-900 mb-4">
            Our Work
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            See the transformation. Drag the slider to compare before and after.
          </p>
        </motion.div>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: prefersReducedMotion ? 0 : 0.6,
                delay: prefersReducedMotion ? 0 : index * 0.1,
              }}
            >
              <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-md">
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <h3 className="font-heading font-semibold text-2xl text-slate-900">
                    {project.title}
                  </h3>
                  <span className="px-3 py-1 bg-accent/20 text-accent text-sm font-semibold rounded-full">
                    {project.category}
                  </span>
                </div>
                <p className="text-slate-600 mb-6">
                  {project.description}
                </p>
                <BeforeAfterSlider
                  beforeImage={project.beforeImage}
                  afterImage={project.afterImage}
                  altText={project.title}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
