"use client";

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const sections = ['home', 'team', 'schedule'];

export const SectionIndicator = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      className="fixed right-4 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col items-center space-y-4"
    >
      {sections.map((section) => (
        <a
          key={section}
          href={`#${section}`}
          className="group relative flex items-center"
        >
          <span className="absolute right-8 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap bg-black px-2 py-1 rounded text-sm capitalize">
            {section}
          </span>
          <motion.div
            animate={{
              scale: activeSection === section ? 1 : 0.8,
              backgroundColor: activeSection === section ? '#FFFFFF' : '#4B5563'
            }}
            className="w-3 h-3 rounded-full cursor-pointer"
            whileHover={{ scale: 1.2 }}
          />
        </a>
      ))}
    </motion.div>
  );
};