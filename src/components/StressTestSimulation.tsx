import React, { useState, useEffect } from 'react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Progress } from './ui/progress';
import { Badge } from './ui/badge';
import { Zap, Activity, CheckCircle, TrendingUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export function StressTestSimulation() {
  const [isRunning, setIsRunning] = useState(false);
  const [tps, setTps] = useState(0);
  const [latency, setLatency] = useState(0);
  const [successRate, setSuccessRate] = useState(0);
  const [networkLoad, setNetworkLoad] = useState(0);
  const [statusMessage, setStatusMessage] = useState('Ready to test network capacity');

  const runStressTest = () => {
    setIsRunning(true);
    setStatusMessage('Initializing stress test...');
    
    // Simulate stress test progression
    const duration = 5000; // 5 seconds
    const startTime = Date.now();
    
    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Animate values
      setTps(Math.floor(progress * 127000));
      setLatency(Math.floor(45 + Math.random() * 10 - progress * 10));
      setSuccessRate(Math.min(progress * 100, 99.9));
      setNetworkLoad(progress * 100);
      
      // Update status messages
      if (progress < 0.3) {
        setStatusMessage('Ramping up transaction load...');
      } else if (progress < 0.6) {
        setStatusMessage('Testing maximum throughput...');
      } else if (progress < 0.9) {
        setStatusMessage('Measuring network stability...');
      } else {
        setStatusMessage('Test complete - Network performing optimally!');
      }
      
      if (progress >= 1) {
        clearInterval(interval);
        setIsRunning(false);
      }
    }, 50);
  };

  const resetTest = () => {
    setTps(0);
    setLatency(0);
    setSuccessRate(0);
    setNetworkLoad(0);
    setStatusMessage('Ready to test network capacity');
  };

  return (
    <section className="py-20">
      {/* Section Header */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Stress Test{' '}
          <span className="text-gradient">Simulation</span>
        </h2>
        <p className="text-xl text-white/70 max-w-3xl mx-auto">
          See how DAGOS handles extreme transaction volumes without breaking a sweat
        </p>
      </div>

      {/* Main Stress Test Card */}
      <Card className="glass-strong border-white/10 max-w-5xl mx-auto">
        <CardContent className="p-8 md:p-12">
          {/* Run Test Button */}
          <div className="text-center mb-12">
            <Button
              onClick={isRunning ? resetTest : runStressTest}
              disabled={isRunning}
              size="lg"
              className={`
                relative px-12 py-6 text-lg font-bold rounded-xl
                bg-gradient-to-r from-cyan-500 to-teal-500
                hover:from-cyan-400 hover:to-teal-400
                text-white shadow-2xl
                transform transition-all duration-300
                ${isRunning ? 'scale-95 opacity-75' : 'hover:scale-105'}
                disabled:cursor-not-allowed
              `}
            >
              <div className="relative z-10 flex items-center gap-3">
                {isRunning ? (
                  <>
                    <Activity className="w-6 h-6 animate-pulse" />
                    <span>TESTING IN PROGRESS...</span>
                  </>
                ) : (
                  <>
                    <Zap className="w-6 h-6" />
                    <span>RUN STRESS TEST</span>
                  </>
                )}
              </div>
              
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-teal-500 blur-xl opacity-50 rounded-xl" />
            </Button>
          </div>

          {/* Data Display - Key Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {/* Simulated TPS */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <Card className="glass-card border-cyan-500/30 hover:border-cyan-400/50 transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="flex items-center justify-center gap-2 mb-3">
                    <TrendingUp className="w-5 h-5 text-cyan-400" />
                    <h3 className="text-sm font-medium text-white/70 uppercase tracking-wider">
                      Simulated TPS
                    </h3>
                  </div>
                  <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">
                    {tps.toLocaleString()}
                  </div>
                  <Badge className="bg-cyan-500/20 text-cyan-400 border-cyan-500/30">
                    Transactions/sec
                  </Badge>
                </CardContent>
              </Card>
            </motion.div>

            {/* Average Latency */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Card className="glass-card border-blue-500/30 hover:border-blue-400/50 transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="flex items-center justify-center gap-2 mb-3">
                    <Activity className="w-5 h-5 text-blue-400" />
                    <h3 className="text-sm font-medium text-white/70 uppercase tracking-wider">
                      Average Latency
                    </h3>
                  </div>
                  <div className="text-4xl md:text-5xl font-bold text-blue-400 mb-2">
                    {latency}ms
                  </div>
                  <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/30">
                    Response Time
                  </Badge>
                </CardContent>
              </Card>
            </motion.div>

            {/* Success Rate */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Card className="glass-card border-green-500/30 hover:border-green-400/50 transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="flex items-center justify-center gap-2 mb-3">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <h3 className="text-sm font-medium text-white/70 uppercase tracking-wider">
                      Success Rate
                    </h3>
                  </div>
                  <div className="text-4xl md:text-5xl font-bold text-green-400 mb-2">
                    {successRate.toFixed(1)}%
                  </div>
                  <Badge className="bg-green-500/20 text-green-400 border-green-500/30">
                    Transaction Success
                  </Badge>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Network Load Progress Bar */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-white">Network Load</h3>
              <span className="text-lg font-bold text-gradient">
                {networkLoad.toFixed(0)}%
              </span>
            </div>

            {/* Progress Bar Container */}
            <div className="relative h-6 bg-white/5 rounded-full overflow-hidden border border-white/10">
              {/* Animated Progress Fill */}
              <motion.div
                className="absolute inset-y-0 left-0 bg-gradient-to-r from-cyan-500 via-teal-500 to-lime-500 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${networkLoad}%` }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
              >
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-teal-500 to-lime-500 blur-md opacity-50" />
              </motion.div>

              {/* Shimmer Effect */}
              {isRunning && (
                <motion.div
                  className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                  animate={{
                    x: ['-100%', '400%']
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: 'linear'
                  }}
                />
              )}
            </div>

            {/* Status Message */}
            <div className="text-center py-4">
              <AnimatePresence mode="wait">
                <motion.p
                  key={statusMessage}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className={`text-sm font-medium ${
                    networkLoad >= 100 
                      ? 'text-green-400' 
                      : isRunning 
                        ? 'text-cyan-400' 
                        : 'text-white/60'
                  }`}
                >
                  {statusMessage}
                </motion.p>
              </AnimatePresence>
            </div>
          </div>

          {/* Test Results Summary */}
          {networkLoad >= 100 && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="mt-8 p-6 rounded-xl glass-card border border-green-500/30 bg-green-500/5"
            >
              <div className="flex items-center gap-3 mb-4">
                <CheckCircle className="w-6 h-6 text-green-400" />
                <h4 className="text-xl font-bold text-white">Test Completed Successfully!</h4>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div>
                  <div className="text-white/60 text-xs uppercase mb-1">Peak TPS</div>
                  <div className="text-lg font-bold text-green-400">127,000</div>
                </div>
                <div>
                  <div className="text-white/60 text-xs uppercase mb-1">Avg Latency</div>
                  <div className="text-lg font-bold text-green-400">35ms</div>
                </div>
                <div>
                  <div className="text-white/60 text-xs uppercase mb-1">Success Rate</div>
                  <div className="text-lg font-bold text-green-400">99.9%</div>
                </div>
                <div>
                  <div className="text-white/60 text-xs uppercase mb-1">Uptime</div>
                  <div className="text-lg font-bold text-green-400">100%</div>
                </div>
              </div>
            </motion.div>
          )}
        </CardContent>
      </Card>

      {/* Bottom Info */}
      <div className="mt-12 text-center">
        <p className="text-white/60 text-sm max-w-2xl mx-auto">
          This simulation demonstrates DAGOS network's ability to handle extreme transaction loads 
          with minimal latency and maximum reliability. Real-world performance may vary based on 
          network conditions.
        </p>
      </div>
    </section>
  );
}
