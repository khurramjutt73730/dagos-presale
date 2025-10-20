import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { motion } from 'motion/react';
import { TrendingUp, DollarSign, Target, Rocket, ChevronRight } from 'lucide-react';

export function PreSaleTimeline() {
  const [hoveredStage, setHoveredStage] = useState<number | null>(null);

  const preSaleData = {
    totalSupply: 30,
    initialPrice: 0.001,
    finalPrice: 0.03,
    listingPrice: 0.05,
    totalStages: 30,
    totalRevenue: 465
  };

  // Generate stage data
  const stages = Array.from({ length: 10 }, (_, i) => {
    const stageNumber = i + 1;
    const pricePerStage = (preSaleData.finalPrice - preSaleData.initialPrice) / (preSaleData.totalStages - 1);
    const price = preSaleData.initialPrice + (pricePerStage * (stageNumber - 1) * 3);
    const tokensPerStage = preSaleData.totalSupply / preSaleData.totalStages;
    const revenue = tokensPerStage * price * 3;
    
    return {
      stage: `Stage ${stageNumber * 3 - 2}-${stageNumber * 3}`,
      price: price.toFixed(4),
      tokens: (tokensPerStage * 3).toFixed(2),
      revenue: revenue.toFixed(2),
      progress: (stageNumber / 10) * 100
    };
  });

  const keyStats = [
    {
      label: 'Total Pre-Sale Supply',
      value: `${preSaleData.totalSupply}B DAG`,
      icon: <Target className="w-5 h-5" />,
      color: 'from-cyan-400 to-blue-500'
    },
    {
      label: 'Initial Price (Phase 1)',
      value: `$${preSaleData.initialPrice}`,
      icon: <DollarSign className="w-5 h-5" />,
      color: 'from-lime-400 to-green-500'
    },
    {
      label: 'Final Price (Phase 30)',
      value: `$${preSaleData.finalPrice}`,
      icon: <TrendingUp className="w-5 h-5" />,
      color: 'from-purple-400 to-pink-500'
    },
    {
      label: 'Listing Price',
      value: `$${preSaleData.listingPrice}`,
      icon: <Rocket className="w-5 h-5" />,
      color: 'from-orange-400 to-red-500'
    }
  ];

  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-gradient-to-r from-cyan-400 to-lime-400 text-navy-900">
            Pre-Sale Details
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Pre-Sale{' '}
            <span className="text-gradient">Price Timeline</span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Progressive pricing structure across 30 stages with increasing token value
          </p>
        </div>

        {/* Key Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {keyStats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="glass-strong border-white/10 hover:border-white/30 transition-all duration-300 group">
                <CardContent className="p-6 text-center">
                  <motion.div
                    className={`w-12 h-12 rounded-lg bg-gradient-to-br ${stat.color} flex items-center justify-center text-white mx-auto mb-3`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {stat.icon}
                  </motion.div>
                  <div className={`text-2xl font-bold bg-gradient-to-br ${stat.color} bg-clip-text text-transparent mb-1`}>
                    {stat.value}
                  </div>
                  <div className="text-white/70 text-sm">
                    {stat.label}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Timeline Visualization */}
        <Card className="glass-strong border-white/10">
          <CardHeader>
            <CardTitle className="text-2xl text-white flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-lime-400 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-navy-900" />
              </div>
              Stage-by-Stage Breakdown
            </CardTitle>
            <p className="text-white/70 text-sm">
              Each stage group represents 3 consecutive phases with progressive pricing
            </p>
          </CardHeader>
          <CardContent className="p-6">
            {/* Price Growth Visualization */}
            <div className="mb-8 relative">
              <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-cyan-400 via-lime-400 to-purple-400 relative"
                  initial={{ width: '0%' }}
                  whileInView={{ width: '100%' }}
                  transition={{ duration: 2, ease: "easeOut" }}
                  viewport={{ once: true }}
                >
                  {/* Animated shimmer effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                    animate={{
                      x: ['-100%', '200%']
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  />
                </motion.div>
              </div>
              <div className="flex justify-between mt-2 text-sm">
                <span className="text-cyan-400 font-medium">$0.001</span>
                <span className="text-white/60">Price Growth →</span>
                <span className="text-purple-400 font-medium">$0.05</span>
              </div>
            </div>

            {/* Stage Cards */}
            <div className="space-y-3">
              {stages.map((stage, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  onMouseEnter={() => setHoveredStage(index)}
                  onMouseLeave={() => setHoveredStage(null)}
                  className={`p-4 rounded-lg border transition-all duration-300 cursor-pointer ${
                    hoveredStage === index
                      ? 'glass-strong border-cyan-400/50 bg-white/10 transform scale-[1.02]'
                      : 'glass border-white/10'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    {/* Stage number */}
                    <div className="flex-shrink-0">
                      <div className={`w-12 h-12 rounded-lg flex items-center justify-center font-bold transition-all duration-300 ${
                        hoveredStage === index
                          ? 'bg-gradient-to-br from-cyan-400 to-lime-400 text-navy-900 scale-110'
                          : 'bg-white/10 text-white'
                      }`}>
                        {index + 1}
                      </div>
                    </div>

                    {/* Stage info */}
                    <div className="flex-1 grid grid-cols-1 md:grid-cols-4 gap-4">
                      <div>
                        <div className="text-white/60 text-xs mb-1">Stage</div>
                        <div className="text-white font-medium">{stage.stage}</div>
                      </div>
                      <div>
                        <div className="text-white/60 text-xs mb-1">Price per DAG</div>
                        <div className="text-cyan-400 font-bold">${stage.price}</div>
                      </div>
                      <div>
                        <div className="text-white/60 text-xs mb-1">Tokens Available</div>
                        <div className="text-lime-400 font-medium">{stage.tokens}B</div>
                      </div>
                      <div>
                        <div className="text-white/60 text-xs mb-1">Projected Raise</div>
                        <div className="text-purple-400 font-medium">${stage.revenue}M</div>
                      </div>
                    </div>

                    {/* Arrow indicator */}
                    <motion.div
                      animate={{
                        x: hoveredStage === index ? [0, 5, 0] : 0
                      }}
                      transition={{
                        duration: 1,
                        repeat: hoveredStage === index ? Infinity : 0
                      }}
                      className="flex-shrink-0"
                    >
                      <ChevronRight className={`w-5 h-5 transition-colors ${
                        hoveredStage === index ? 'text-cyan-400' : 'text-white/30'
                      }`} />
                    </motion.div>
                  </div>

                  {/* Progress bar */}
                  <div className="mt-3 h-1 bg-white/10 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-cyan-400 to-lime-400"
                      initial={{ width: '0%' }}
                      whileInView={{ width: `${stage.progress}%` }}
                      transition={{ duration: 1, delay: index * 0.05 }}
                      viewport={{ once: true }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Total Revenue */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
              className="mt-8 p-6 rounded-lg glass-strong border border-cyan-400/30"
            >
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-white/70 text-sm mb-1">Total Revenue Goal</div>
                  <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 via-lime-400 to-purple-400 bg-clip-text text-transparent">
                    ${preSaleData.totalRevenue} Million USD
                  </div>
                </div>
                <div className="flex items-center gap-2 text-lime-400">
                  <TrendingUp className="w-6 h-6" />
                  <span className="text-2xl font-bold">+5000%</span>
                </div>
              </div>
              <p className="text-white/60 text-sm mt-3">
                From initial price to listing represents a potential 50x return for early investors
              </p>
            </motion.div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
