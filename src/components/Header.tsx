import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from './Button';
import { MobileNav } from './MobileNav';
import { scrollToSection } from '../utils/scrollToSection';
import { useScrollSpy } from '../hooks/useScrollSpy';
import { classNames } from '../utils/classNames';

const navItems = [
  { label: 'Services', id: 'services' },
  { label: 'Process', id: 'process' },
  { label: 'Projects', id: 'projects' },
  { label: 'About', id: 'about' },
  { label: 'Testimonials', id: 'testimonials' },
  { label: 'Contact', id: 'contact' },
];

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const activeSection = useScrollSpy(navItems.map(item => item.id));

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id: string) => {
    scrollToSection(id);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={classNames(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-md'
            : 'bg-transparent'
        )}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex items-center space-x-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-lg"
            >
              <div className="text-2xl">🔨</div>
              <div>
                <div className={classNames(
                  'font-heading font-bold text-xl transition-colors',
                  isScrolled ? 'text-slate-900' : 'text-white'
                )}>
                  It's a 2 Man Job
                </div>
              </div>
            </button>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={classNames(
                    'px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent',
                    activeSection === item.id
                      ? isScrolled
                        ? 'text-accent bg-accent/10'
                        : 'text-accent bg-white/10'
                      : isScrolled
                      ? 'text-slate-700 hover:text-accent hover:bg-slate-100'
                      : 'text-slate-200 hover:text-white hover:bg-white/5'
                  )}
                >
                  {item.label}
                </button>
              ))}
              <Button
                variant={isScrolled ? 'primary' : 'ghost'}
                size="md"
                onClick={() => scrollToSection('contact')}
                className="ml-4"
              >
                Get a Quote
              </Button>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={classNames(
                'md:hidden p-2 rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent',
                isScrolled
                  ? 'text-slate-900 hover:bg-slate-100'
                  : 'text-white hover:bg-white/10'
              )}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMobileMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Navigation */}
      <MobileNav
        isOpen={isMobileMenuOpen}
        navItems={navItems}
        activeSection={activeSection}
        onNavClick={handleNavClick}
      />
    </>
  );
};
