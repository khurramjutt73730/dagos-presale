import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { ChevronLeft, ChevronRight, CheckCircle, Sparkles } from 'lucide-react';

interface RoadmapPhase {
  id: number;
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  description: string;
  deliverables: string[];
  status: 'completed' | 'current' | 'upcoming';
  color: string;
  glowColor: string;
}

interface Props {
  phases: RoadmapPhase[];
}

export function MobileRoadmapSlider({ phases }: Props) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const currentPhase = phases[currentIndex];

  // Keyboard navigation
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        prevPhase();
      } else if (e.key === 'ArrowRight') {
        nextPhase();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex]);

  const nextPhase = () => {
    if (currentIndex < phases.length - 1) {
      setCurrentIndex((prev) => prev + 1);
      // Optional: Add haptic feedback
      if (typeof navigator !== 'undefined' && 'vibrate' in navigator) {
        navigator.vibrate(10);
      }
    }
  };

  const prevPhase = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
      // Optional: Add haptic feedback
      if (typeof navigator !== 'undefined' && 'vibrate' in navigator) {
        navigator.vibrate(10);
      }
    }
  };

  const goToPhase = (index: number) => {
    setCurrentIndex(index);
    // Optional: Add haptic feedback for mobile
    if (typeof navigator !== 'undefined' && 'vibrate' in navigator) {
      navigator.vibrate(10);
    }
  };

  // Handle touch events for swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 75) {
      // Swipe left - next
      nextPhase();
    }
    if (touchStart - touchEnd < -75) {
      // Swipe right - previous
      prevPhase();
    }
  };

  return (
    <div className="lg:hidden py-12">
      {/* Progress dots */}
      <div className="flex justify-center gap-2 mb-8">
        {phases.map((phase, index) => (
          <button
            key={phase.id}
            onClick={() => goToPhase(index)}
            className="relative"
          >
            <motion.div
              className="w-3 h-3 rounded-full transition-all duration-300"
              style={{
                backgroundColor: index === currentIndex ? phase.color : 'rgba(255,255,255,0.2)',
              }}
              animate={{
                scale: index === currentIndex ? 1.5 : 1,
              }}
            />
            {index === currentIndex && (
              <motion.div
                className="absolute inset-0 rounded-full"
                style={{
                  boxShadow: `0 0 15px ${phase.glowColor}`,
                }}
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
              />
            )}
          </button>
        ))}
      </div>

      {/* Card slider */}
      <div 
        className="relative overflow-hidden px-4"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.3 }}
          >
            <Card
              className="glass-strong border-white/20"
              style={{
                boxShadow: `0 0 30px ${currentPhase.glowColor}`,
              }}
            >
              <CardContent className="p-6">
                {/* Icon and status */}
                <div className="flex items-start justify-between mb-4">
                  <motion.div
                    className="w-16 h-16 rounded-xl flex items-center justify-center"
                    style={{
                      backgroundColor: `${currentPhase.color}20`,
                      border: `2px solid ${currentPhase.color}`,
                    }}
                    animate={{
                      boxShadow: [
                        `0 0 10px ${currentPhase.glowColor}`,
                        `0 0 20px ${currentPhase.glowColor}`,
                        `0 0 10px ${currentPhase.glowColor}`,
                      ],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                    }}
                  >
                    <div style={{ color: currentPhase.color }}>
                      {currentPhase.icon}
                    </div>
                  </motion.div>

                  <Badge
                    style={{
                      backgroundColor: `${currentPhase.color}20`,
                      color: currentPhase.color,
                      borderColor: currentPhase.color,
                    }}
                  >
                    {currentPhase.status === 'completed' ? (
                      <>
                        <CheckCircle className="w-3 h-3 mr-1" />
                        Completed
                      </>
                    ) : currentPhase.status === 'current' ? (
                      <>
                        <Sparkles className="w-3 h-3 mr-1" />
                        In Progress
                      </>
                    ) : (
                      'Upcoming'
                    )}
                  </Badge>
                </div>

                {/* Phase title */}
                <h3 className="text-2xl font-bold text-white mb-2">
                  {currentPhase.title}
                </h3>
                <p className="text-lg mb-4" style={{ color: currentPhase.color }}>
                  {currentPhase.subtitle}
                </p>

                {/* Description */}
                <p className="text-white/80 mb-6 leading-relaxed">
                  {currentPhase.description}
                </p>

                {/* Deliverables */}
                <div className="space-y-3 pt-4 border-t border-white/10">
                  <h4 className="text-sm font-semibold text-white/70 mb-3">
                    Key Deliverables:
                  </h4>
                  {currentPhase.deliverables.map((item, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      className="flex items-start gap-3 text-sm text-white/70"
                    >
                      <CheckCircle
                        className="w-4 h-4 flex-shrink-0 mt-0.5"
                        style={{ color: currentPhase.color }}
                      />
                      <span>{item}</span>
                    </motion.div>
                  ))}
                </div>
              </CardContent>

              {/* Bottom accent */}
              <motion.div
                className="h-1"
                style={{ backgroundColor: currentPhase.color }}
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8 }}
              />
            </Card>
          </motion.div>
        </AnimatePresence>

        {/* Navigation buttons */}
        <div className="flex justify-between items-center mt-6">
          <Button
            onClick={prevPhase}
            variant="outline"
            size="lg"
            className="glass border-white/20 hover:border-cyan-400/50"
            disabled={currentIndex === 0}
          >
            <ChevronLeft className="w-5 h-5 mr-2" />
            Previous
          </Button>

          <div className="text-white/60 text-sm font-mono">
            {currentIndex + 1} / {phases.length}
          </div>

          <Button
            onClick={nextPhase}
            variant="outline"
            size="lg"
            className="glass border-white/20 hover:border-lime-400/50"
            disabled={currentIndex === phases.length - 1}
          >
            Next
            <ChevronRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>

      {/* Swipe indicator */}
      <motion.div
        className="text-center mt-6 text-sm text-white/50"
        animate={{
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
      >
        ← Swipe to navigate →
      </motion.div>

      {/* Completion message when on last phase */}
      {currentIndex === phases.length - 1 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-8 text-center"
        >
          <div className="text-4xl mb-4">🚀</div>
          <h3 className="text-2xl font-bold text-gradient mb-3">
            The Next Era Begins
          </h3>
          <p className="text-white/70 mb-4">
            Join us on the journey to revolutionize blockchain
          </p>
          <Badge className="bg-gradient-to-r from-cyan-400 to-lime-400 text-navy-900">
            DAGOS 2.0 — Coming Soon
          </Badge>
        </motion.div>
      )}
    </div>
  );
}
