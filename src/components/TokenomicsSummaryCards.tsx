import React from 'react';
import { Card, CardContent } from './ui/card';
import { motion } from 'motion/react';
import { TrendingUp, Lock, Flame, Heart, Users, Shield } from 'lucide-react';

export function TokenomicsSummaryCards() {
  const summaryStats = [
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: 'Initial Circulating Supply',
      value: '25-30%',
      description: 'Early liquidity + pre-sale + ecosystem rewards',
      gradient: 'from-cyan-400 to-blue-500',
      glowColor: 'rgba(0, 255, 255, 0.3)'
    },
    {
      icon: <Lock className="w-6 h-6" />,
      title: 'Locked & Vesting Tokens',
      value: '6-18 months',
      description: 'For Team, Advisory, and Ecosystem allocations',
      gradient: 'from-purple-400 to-pink-500',
      glowColor: 'rgba(138, 43, 226, 0.3)'
    },
    {
      icon: <Flame className="w-6 h-6" />,
      title: 'Deflationary Mechanism',
      value: '5% Reserve',
      description: 'Scheduled token burns to maintain scarcity',
      gradient: 'from-orange-400 to-red-500',
      glowColor: 'rgba(255, 107, 53, 0.3)'
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: 'Charity Transparency',
      value: '2% Allocated',
      description: 'On-chain audit for Asia Impact Fund allocations',
      gradient: 'from-pink-400 to-rose-500',
      glowColor: 'rgba(255, 182, 193, 0.3)'
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Community Incentives',
      value: '10% Pool',
      description: 'Continuous airdrops, referral bonuses & engagement',
      gradient: 'from-lime-400 to-green-500',
      glowColor: 'rgba(163, 255, 18, 0.3)'
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Security Audited',
      value: '100% Verified',
      description: 'Smart contracts audited by leading firms',
      gradient: 'from-blue-400 to-indigo-500',
      glowColor: 'rgba(59, 130, 246, 0.3)'
    }
  ];

  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Key{' '}
            <span className="text-gradient">Tokenomics Summary</span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Essential metrics and mechanisms driving sustainable token economics
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {summaryStats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="glass-strong border-white/10 hover:border-white/30 transition-all duration-500 group h-full relative overflow-hidden">
                {/* Animated background glow */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `radial-gradient(circle at center, ${stat.glowColor} 0%, transparent 70%)`
                  }}
                  animate={{
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />

                <CardContent className="p-6 relative z-10">
                  <div className="flex items-start gap-4 mb-4">
                    <motion.div
                      className={`w-12 h-12 rounded-lg bg-gradient-to-br ${stat.gradient} flex items-center justify-center text-white flex-shrink-0`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {stat.icon}
                    </motion.div>
                    <div className="flex-1">
                      <h3 className="text-white font-medium mb-1 leading-tight">
                        {stat.title}
                      </h3>
                      <div className={`text-2xl font-bold bg-gradient-to-br ${stat.gradient} bg-clip-text text-transparent`}>
                        {stat.value}
                      </div>
                    </div>
                  </div>
                  <p className="text-white/70 text-sm leading-relaxed">
                    {stat.description}
                  </p>
                </CardContent>

                {/* Bottom accent line */}
                <motion.div
                  className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${stat.gradient}`}
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                />
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
