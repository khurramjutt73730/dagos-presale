import React, { useRef } from "react";
import { motion, useScroll, useSpring } from "motion/react";

export function RoadmapScrollProgress() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Calculate current phase based on scroll progress
  const currentPhase = Math.min(
    Math.floor(scrollYProgress.get() * 7) + 1,
    7,
  );

  return (
    <div
      ref={ref}
      className="fixed left-8 top-1/2 -translate-y-1/2 z-50 hidden xl:block"
    >
      <div className="relative h-96 w-1">
        {/* Background track */}
        <div className="absolute inset-0 bg-white/10 rounded-full" />

        {/* Progress indicator */}
        <motion.div
          className="absolute inset-x-0 top-0 bg-gradient-to-b from-cyan-400 via-lime-400 to-purple-400 rounded-full origin-top"
          style={{ scaleY }}
        >
          {/* Animated shimmer effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-b from-white/40 via-transparent to-transparent"
            animate={{
              y: ["0%", "100%"],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </motion.div>

        {/* Glowing dot */}
        <motion.div
          className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-cyan-400"
          style={{
            top: useSpring(
              scrollYProgress.get() * 384, // 384px = h-96
              { stiffness: 100, damping: 30 },
            ),
            boxShadow: "0 0 20px rgba(0, 255, 255, 0.8)",
          }}
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
          }}
        />
      </div>

      {/* Phase indicators */}
      <div className="absolute left-6 top-0 h-full flex flex-col justify-between py-2">
        {[1, 2, 3, 4, 5, 6, 7].map((num) => (
          <motion.div
            key={num}
            className="text-xs font-mono whitespace-nowrap transition-all duration-300"
            style={{
              color:
                num <= currentPhase
                  ? "#00FFFF"
                  : "rgba(255, 255, 255, 0.3)",
              fontWeight:
                num === currentPhase ? "bold" : "normal",
            }}
            animate={{
              scale: num === currentPhase ? 1.1 : 1,
            }}
          >
            Phase {num}
          </motion.div>
        ))}
      </div>

      {/* Percentage indicator */}
      <motion.div
        className="absolute -left-2 -bottom-8 text-xs font-mono text-cyan-400 font-bold"
        animate={{
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
      >
        {Math.round(scrollYProgress.get() * 100)}%
      </motion.div>
    </div>
  );
}