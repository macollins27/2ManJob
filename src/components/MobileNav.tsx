import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from './Button';
import { classNames } from '../utils/classNames';
import { scrollToSection } from '../utils/scrollToSection';

interface NavItem {
  label: string;
  id: string;
}

interface MobileNavProps {
  isOpen: boolean;
  navItems: NavItem[];
  activeSection: string;
  onNavClick: (id: string) => void;
}

export const MobileNav: React.FC<MobileNavProps> = ({
  isOpen,
  navItems,
  activeSection,
  onNavClick,
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          id="mobile-menu"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed top-20 left-0 right-0 z-40 md:hidden bg-white/95 backdrop-blur-md shadow-lg"
        >
          <nav className="max-w-6xl mx-auto px-4 py-6 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavClick(item.id)}
                className={classNames(
                  'block w-full text-left px-4 py-3 rounded-lg text-base font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent',
                  activeSection === item.id
                    ? 'text-accent bg-accent/10'
                    : 'text-slate-700 hover:text-accent hover:bg-slate-100'
                )}
              >
                {item.label}
              </button>
            ))}
            <div className="pt-4">
              <Button
                variant="primary"
                size="md"
                onClick={() => {
                  scrollToSection('contact');
                  onNavClick('contact');
                }}
                className="w-full"
              >
                Get a Quote
              </Button>
            </div>
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
