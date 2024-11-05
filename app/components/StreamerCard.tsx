import React from 'react';
import { motion } from 'framer-motion';
import { Youtube } from 'lucide-react';

interface StreamerCardProps {
  id: number;
  name: string;
  role: string;
  bio: string;
  youtubeUrl: string;
  gradientFrom: string;
  gradientTo: string;
}

export const StreamerCard: React.FC<StreamerCardProps> = ({
  name,
  role,
  bio,
  youtubeUrl,
  gradientFrom,
  gradientTo,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -10, scale: 1.02 }}
      transition={{ duration: 0.4, type: "spring", stiffness: 200 }}
      className="glass-card p-6 rounded-2xl relative group"
    >
      <motion.div 
        className={`absolute inset-0 bg-gradient-to-br ${gradientFrom} ${gradientTo} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`}
      />
      
      <div className="relative z-10">
        <motion.div 
          className={`w-14 h-14 rounded-xl bg-gradient-to-br ${gradientFrom} ${gradientTo} flex items-center justify-center mb-5`}
          whileHover={{ scale: 1.1, rotate: 5 }}
          whileTap={{ scale: 0.9 }}
        >
          <span className="text-2xl font-bold">{name.charAt(0)}</span>
        </motion.div>

        <motion.h3 
          className="text-2xl font-bold text-white mb-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {name}
        </motion.h3>

        <motion.p 
          className="text-gradient text-sm mb-3 font-medium"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {role}
        </motion.p>

        <motion.p 
          className="text-gray-300 text-base mb-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          {bio}
        </motion.p>

        <motion.a
          href={youtubeUrl}
          className="inline-flex items-center space-x-2 glass-effect px-5 py-2.5 rounded-full hover:bg-red-600/20 transition-all duration-300 group"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Youtube className="w-5 h-5 text-red-500 group-hover:animate-bounce" />
          <span className="text-sm font-medium">구독하기</span>
        </motion.a>
      </div>
    </motion.div>
  );
};