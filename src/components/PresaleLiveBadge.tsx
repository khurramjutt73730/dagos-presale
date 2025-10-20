import React from 'react';
import { motion } from 'motion/react';
import { Zap, TrendingUp } from 'lucide-react';

export function PresaleLiveBadge() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="fixed top-20 left-1/2 -translate-x-1/2 z-50 hidden md:block"
    >
      <motion.div
        className="relative"
        animate={{
          y: [0, -8, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        {/* Glow effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-lime-400 rounded-full filter blur-xl opacity-60"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.6, 0.8, 0.6],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Badge content */}
        <div className="relative bg-gradient-to-r from-cyan-400 to-lime-400 px-6 py-3 rounded-full shadow-2xl">
          <div className="flex items-center gap-3">
            <motion.div
              animate={{
                rotate: [0, 360],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              <Zap className="w-5 h-5 text-navy-900 fill-current" />
            </motion.div>
            
            <div className="flex items-center gap-2">
              <span className="text-navy-900 font-bold text-lg whitespace-nowrap">
                Presale Live Now
              </span>
              
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                }}
              >
                <div className="w-2 h-2 bg-red-500 rounded-full" />
              </motion.div>
            </div>

            <motion.div
              animate={{
                x: [0, 3, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <TrendingUp className="w-5 h-5 text-navy-900" />
            </motion.div>
          </div>
        </div>

        {/* Decorative particles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full"
            style={{
              top: '50%',
              left: '50%',
            }}
            animate={{
              x: [0, (i % 2 === 0 ? 30 : -30) * Math.cos(i * Math.PI / 3)],
              y: [0, (i % 2 === 0 ? 30 : -30) * Math.sin(i * Math.PI / 3)],
              opacity: [1, 0],
              scale: [1, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.3,
              ease: "easeOut"
            }}
          />
        ))}
      </motion.div>
    </motion.div>
  );
}
