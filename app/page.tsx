'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { StreamerCard } from '@/components/StreamerCard';
import { Footer } from '@/components/Footer';
import { SectionIndicator } from '@/components/SectionIndicator';

const streamers = [
  {
    id: 1,
    name: "검필",
    role: "종합 게임 스트리머",
    bio: "종합 게임을 하는 유루바로써 굉장한 정신머리가 나간 스트리머입니다.",
    youtubeUrl: "https://youtube.com/@example",
    gradientFrom: "from-red-500",
    gradientTo: "to-orange-500"
  },
  {
    id: 2,
    name: "송채하",
    role: "롤 스트리머",
    bio: "롤의 희생양이 되버린 안타까운 스트리머입니다.",
    youtubeUrl: "https://youtube.com/@example",
    gradientFrom: "from-blue-500",
    gradientTo: "to-purple-500"
  },
  {
    id: 3,
    name: "",
    role: "스피드러너",
    bio: "여러 게임의 세계 기록 보유자, 불가능을 가능으로 만드는 도전자",
    youtubeUrl: "https://youtube.com/@example",
    gradientFrom: "from-green-500",
    gradientTo: "to-emerald-500"
  },
  {
    id: 4,
    name: "정서연 'Luna'",
    role: "아트 스트리머",
    bio: "디지털 아트와 게임을 결합한 독특한 방송 진행",
    youtubeUrl: "https://youtube.com/@example",
    gradientFrom: "from-purple-500",
    gradientTo: "to-pink-500"
  },
  {
    id: 5,
    name: "최준호 'Thunder'",
    role: "리듬게임 전문가",
    bio: "모든 리듬게임을 마스터한 리듬게임의 신",
    youtubeUrl: "https://youtube.com/@example",
    gradientFrom: "from-yellow-500",
    gradientTo: "to-amber-500"
  },
  {
    id: 6,
    name: "한소희 'Star'",
    role: "실시간 소통",
    bio: "시청자와 실시간 소통하며 다양한 콘텐츠를 진행하는 엔터테이너",
    youtubeUrl: "https://youtube.com/@example",
    gradientFrom: "from-indigo-500",
    gradientTo: "to-blue-500"
  }
];

const pageTransition = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 }
};

function Page() {
  return (
    <div className="bg-primary text-white smooth-scroll">
      <Navbar />
      <SectionIndicator />
      
      <main>
        <AnimatePresence mode="wait">
          <section key="home-section" id="home" className="min-h-screen">
            <Hero />
          </section>

          <motion.section 
            key="team-section"
            id="team" 
            className="min-h-screen py-20 px-4 sm:px-6 lg:px-8"
            initial="initial"
            whileInView="animate"
            exit="exit"
            variants={pageTransition}
          >
            <div className="max-w-7xl mx-auto">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-center mb-12 sm:mb-16"
              >
                <h2 className="text-3xl sm:text-4xl font-bold mb-3 sm:mb-4">스트리머 소개</h2>
                <p className="text-gray-400 max-w-2xl mx-auto px-4">
                MARVELLOUS 팀의 talented 크리에이터들을 만나보세요
                </p>
              </motion.div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {streamers.map((streamer) => (
                  <StreamerCard key={streamer.id} {...streamer} />
                ))}
              </div>
            </div>
          </motion.section>

          <motion.section 
            key="schedule-section"
            id="schedule" 
            className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-secondary"
            initial="initial"
            whileInView="animate"
            exit="exit"
            variants={pageTransition}
          >
            <div className="max-w-7xl mx-auto">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-center mb-12 sm:mb-16"
              >
                <h2 className="text-3xl sm:text-4xl font-bold mb-3 sm:mb-4">방송 일정</h2>
                <p className="text-gray-400 max-w-2xl mx-auto px-4">
                  최신 방송 일정을 확인하고 좋아하는 방송을 놓치지 마세요
                </p>
              </motion.div>

              <div className="grid gap-4 sm:gap-6">
                {streamers.slice(0, 3).map((streamer) => (
                  <motion.div
                    key={`schedule-${streamer.id}`}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: streamer.id * 0.1 }}
                    className="glass-effect p-4 sm:p-6 rounded-lg hover:bg-accent/20 transition-colors"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                      <div>
                        <h3 className="text-lg sm:text-xl font-bold mb-2">{streamer.name}의 주간 스트리밍</h3>
                        <p className="text-gray-400">진행: {streamer.role}</p>
                      </div>
                      <div className="mt-3 sm:mt-0">
                        <span className="glass-effect px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-sm inline-block">
                          매주 목요일 오후 8시
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.section>
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  );
}

export default Page;