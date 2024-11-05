import React from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

export const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-primary">
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-primary to-black animate-gradient-x" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-accent/20 via-transparent to-transparent" />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6 sm:space-y-8"
        >
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 1 }}
            className="w-24 h-24 mx-auto mb-6 rounded-full glass-effect flex items-center justify-center"
          >
            <span className="text-4xl font-bold text-gradient">M</span>
          </motion.div>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 sm:mb-6">
            <span className="text-gradient">MARVELLOUS</span>에 오신 것을
            <br className="hidden sm:block" /> 환영합니다
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-6 sm:mb-8 max-w-3xl mx-auto">
            엔터테인먼트의 새로운 지평을 여는 크리에이터 팀과 함께하세요
          </p>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="glass-effect text-white px-8 py-4 rounded-full font-bold flex items-center justify-center mx-auto space-x-3 hover:bg-white/10 transition-colors"
          >
            <Play className="w-5 h-5" />
            <span>시청하기</span>
          </motion.button>
        </motion.div>
      </div>
      
      <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-primary to-transparent" />
      
      <motion.div
        animate={{ 
          y: [0, -20, 0],
          opacity: [0.5, 1, 0.5]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full relative flex justify-center">
          <div className="w-1.5 h-1.5 bg-white/70 rounded-full absolute top-2 animate-bounce" />
        </div>
      </motion.div>
    </div>
  );
};