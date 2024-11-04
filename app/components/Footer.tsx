import React from 'react';
import { motion } from 'framer-motion';

export const Footer = () => {
  const footerLinks = [
    { title: '소개', href: '#' },
    { title: '연락처', href: '#' },
    { title: '개인정보처리방침', href: '#' },
    { title: '이용약관', href: '#' },
  ];

  return (
    <footer className="bg-black py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <motion.h3 
              className="text-2xl font-bold text-white mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              마블러스
            </motion.h3>
            <p className="text-gray-400">
              최고의 콘텐츠로 새로운 엔터테인먼트의 기준을 만듭니다
            </p>
          </div>
          
          <div className="md:text-center">
            <h4 className="text-white font-semibold mb-4">바로가기</h4>
            <div className="space-y-2">
              {footerLinks.map((link) => (
                <motion.a
                  key={link.title}
                  href={link.href}
                  className="block text-gray-400 hover:text-white transition-colors"
                  whileHover={{ x: 5 }}
                >
                  {link.title}
                </motion.a>
              ))}
            </div>
          </div>
          
          <div className="md:text-right">
            <h4 className="text-white font-semibold mb-4">팔로우</h4>
            <div className="flex space-x-4 md:justify-end">
              <motion.a
                href="#"
                className="text-gray-400 hover:text-[#FF0000] transition-colors"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.95 }}
              >
                <img src="/chzzk-logo.png" alt="치지직" className="w-6 h-6" />
              </motion.a>
            </div>
          </div>
        </div>
        
        <motion.div 
          className="border-t border-gray-800 pt-8 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-400">
            © {new Date().getFullYear()} 마블러스. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};