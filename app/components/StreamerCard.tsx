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
      whileHover={{ y: -10 }}
      transition={{ duration: 0.5 }}
      className="glass-effect p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow-2xl hover:shadow-3xl transition-all overflow-hidden"
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${gradientFrom} ${gradientTo} opacity-10`} />
      <div className="relative z-10">
        <div className="mb-3 sm:mb-4">
          <motion.div 
            className={`w-12 h-12 rounded-lg bg-gradient-to-br ${gradientFrom} ${gradientTo} flex items-center justify-center`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <span className="text-2xl font-bold">{name.charAt(0)}</span>
          </motion.div>
        </div>
        <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">{name}</h3>
        <p className="text-gradient text-sm mb-2 sm:mb-3 font-medium">{role}</p>
        <p className="text-gray-300 text-sm sm:text-base mb-3 sm:mb-4">{bio}</p>
        <motion.a
          href={youtubeUrl}
          className="inline-flex items-center space-x-2 glass-effect px-4 py-2 rounded-full hover:bg-red-600/20 transition-colors group"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Youtube className="w-5 h-5 text-red-500" />
          <span className="text-sm font-medium">구독하기</span>
        </motion.a>
      </div>
    </motion.div>
  );
};