import React from 'react';
import { Badge } from '../ui/badge';
import { TeamSection } from '../TeamSection';
import { PartnershipsSection } from '../PartnershipsSection';
import { DevelopmentTransparency } from '../DevelopmentTransparency';
import { AnimatedRoadmapTimeline, phases } from '../AnimatedRoadmapTimeline';
import { RoadmapScrollProgress } from '../RoadmapScrollProgress';
import { MobileRoadmapSlider } from '../MobileRoadmapSlider';
import { InteractiveFAQ, RoadmapFAQ } from '../InteractiveFAQ';
import { motion } from 'motion/react';
import { Sparkles } from 'lucide-react';

export function RoadmapPage() {
  return (
    <div className="min-h-screen py-20 relative overflow-hidden">
      {/* Animated background particles */}
      <div className="fixed inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Scroll Progress Indicator */}
      <RoadmapScrollProgress />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          >
            <Badge className="mb-6 bg-gradient-to-r from-cyan-400 to-lime-400 text-navy-900 text-base px-6 py-2">
              <Sparkles className="w-4 h-4 mr-2 inline-block" />
              Interactive Timeline
            </Badge>
          </motion.div>

          <motion.h1
            className="text-5xl md:text-7xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            DAGOS{' '}
            <span className="text-gradient">Roadmap</span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            From Vision to Global Leadership — The Evolution of the DAGOS Ecosystem
          </motion.p>

          {/* Decorative line */}
          <motion.div
            className="mt-8 mx-auto w-32 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.7, duration: 1 }}
          />
        </motion.div>

        {/* Animated Timeline - Desktop */}
        <AnimatedRoadmapTimeline />

        {/* Mobile Slider */}
        <MobileRoadmapSlider phases={phases} />

        {/* Team Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-32"
        >
          <TeamSection />
        </motion.div>

        {/* Partnerships Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <PartnershipsSection />
        </motion.div>

        {/* Development Transparency */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <DevelopmentTransparency />
        </motion.div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <InteractiveFAQ
            title="Roadmap & Vision FAQ"
            subtitle="Learn about DAGOS milestones, team, and future developments"
            context="Roadmap • Vision • Core Team • Future Goals"
            items={RoadmapFAQ}
          />
        </motion.div>
      </div>

      {/* Background gradient orbs */}
      <motion.div
        className="fixed top-1/4 left-1/4 w-96 h-96 bg-cyan-400/10 rounded-full filter blur-3xl pointer-events-none"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="fixed bottom-1/4 right-1/4 w-96 h-96 bg-purple-400/10 rounded-full filter blur-3xl pointer-events-none"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 4
        }}
      />
    </div>
  );
}
