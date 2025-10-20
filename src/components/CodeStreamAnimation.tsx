import React from 'react';
import { motion } from 'motion/react';

export function CodeStreamAnimation() {
  const codeLines = [
    'const dagos = new DAGNetwork();',
    'function processTransaction() {',
    '  return dag.validate(tx);',
    '}',
    'await mainnet.deploy();',
    'export { DAGChain };',
  ];

  return (
    <div className="absolute inset-0 overflow-hidden opacity-10 pointer-events-none">
      <div className="relative w-full h-full">
        {codeLines.map((line, index) => (
          <motion.div
            key={index}
            className="absolute text-cyan-400 font-mono text-xs whitespace-nowrap"
            style={{
              left: `${Math.random() * 80}%`,
              top: `${index * 20}%`,
            }}
            initial={{ opacity: 0, x: -50 }}
            animate={{
              opacity: [0, 0.7, 0],
              x: ['-50%', '150%'],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              delay: index * 1.5,
              ease: 'linear',
            }}
          >
            {line}
          </motion.div>
        ))}

        {/* Matrix-style falling characters */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={`matrix-${i}`}
            className="absolute text-lime-400 font-mono text-xs"
            style={{
              left: `${(i * 7) % 100}%`,
            }}
            animate={{
              y: ['0%', '100%'],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: 'linear',
            }}
          >
            {String.fromCharCode(33 + Math.floor(Math.random() * 94))}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
