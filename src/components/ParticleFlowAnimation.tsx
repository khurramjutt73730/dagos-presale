import React from 'react';
import { motion } from 'motion/react';

export function ParticleFlowAnimation() {
  return (
    <div className="absolute inset-0 overflow-hidden opacity-20 pointer-events-none">
      {/* Rising particles representing user growth */}
      {[...Array(30)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            background: `radial-gradient(circle, ${
              i % 3 === 0 ? '#00FFFF' : i % 3 === 1 ? '#A3FF12' : '#8A2BE2'
            }, transparent)`,
          }}
          animate={{
            y: ['100%', '-20%'],
            x: [
              `${Math.random() * 20 - 10}%`,
              `${Math.random() * 20 - 10}%`,
            ],
            scale: [0, 1, 0.5, 0],
            opacity: [0, 0.8, 0.8, 0],
          }}
          transition={{
            duration: 4 + Math.random() * 3,
            repeat: Infinity,
            delay: Math.random() * 4,
            ease: 'easeOut',
          }}
        />
      ))}

      {/* User icons flowing upward */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={`user-${i}`}
          className="absolute text-2xl"
          style={{
            left: `${20 + i * 15}%`,
          }}
          animate={{
            y: ['100%', '-50%'],
            opacity: [0, 0.5, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            delay: i * 1.2,
            ease: 'linear',
          }}
        >
          👤
        </motion.div>
      ))}

      {/* Growth chart lines */}
      <svg className="absolute inset-0 w-full h-full">
        <motion.path
          d="M 0 80 Q 25 60, 50 50 T 100 30"
          stroke="#A3FF12"
          strokeWidth="2"
          fill="none"
          strokeDasharray="5,5"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{
            pathLength: [0, 1, 0],
            opacity: [0, 0.5, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </svg>

      {/* Expanding circles representing network growth */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={`circle-${i}`}
          className="absolute rounded-full border-2 border-cyan-400"
          style={{
            left: '50%',
            top: '50%',
            width: '20px',
            height: '20px',
          }}
          animate={{
            scale: [1, 15],
            opacity: [0.6, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: i * 1,
            ease: 'easeOut',
          }}
        />
      ))}
    </div>
  );
}
