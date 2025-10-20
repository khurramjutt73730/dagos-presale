import React, { useState } from 'react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { motion } from 'motion/react';
import { Coins, TrendingUp, Lock, Heart, Rocket, Users, Flame, Gift, Shield } from 'lucide-react';

interface TokenCategory {
  name: string;
  percentage: number;
  tokens: number;
  color: string;
  glowColor: string;
  icon: React.ReactNode;
  description: string;
}

export function TokenomicsInfographic() {
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);
  
  const totalSupply = 120; // billion
  
  const categories: TokenCategory[] = [
    {
      name: 'Pre-Sale',
      percentage: 25,
      tokens: 30,
      color: '#00FFFF',
      glowColor: 'rgba(0, 255, 255, 0.4)',
      icon: <Rocket className="w-5 h-5" />,
      description: 'Public presale allocation'
    },
    {
      name: 'App Mining Rewards',
      percentage: 20,
      tokens: 24,
      color: '#00D4FF',
      glowColor: 'rgba(0, 212, 255, 0.4)',
      icon: <TrendingUp className="w-5 h-5" />,
      description: 'Mining rewards for network participants'
    },
    {
      name: 'Liquidity Pool',
      percentage: 10,
      tokens: 12,
      color: '#A3FF12',
      glowColor: 'rgba(163, 255, 18, 0.4)',
      icon: <Coins className="w-5 h-5" />,
      description: 'DEX liquidity and trading pairs'
    },
    {
      name: 'Marketing & Partnerships',
      percentage: 10,
      tokens: 12,
      color: '#8A2BE2',
      glowColor: 'rgba(138, 43, 226, 0.4)',
      icon: <Users className="w-5 h-5" />,
      description: 'Growth and strategic partnerships'
    },
    {
      name: 'Ecosystem Development',
      percentage: 10,
      tokens: 12,
      color: '#FF6B35',
      glowColor: 'rgba(255, 107, 53, 0.4)',
      icon: <Shield className="w-5 h-5" />,
      description: 'Platform development and upgrades'
    },
    {
      name: 'Team & Advisory',
      percentage: 8,
      tokens: 9.6,
      color: '#C0C0C0',
      glowColor: 'rgba(192, 192, 192, 0.4)',
      icon: <Lock className="w-5 h-5" />,
      description: 'Core team with vesting schedule'
    },
    {
      name: 'Charity (Asia Impact Fund)',
      percentage: 2,
      tokens: 2.4,
      color: '#87CEEB',
      glowColor: 'rgba(135, 206, 235, 0.4)',
      icon: <Heart className="w-5 h-5" />,
      description: 'Social impact initiatives'
    },
    {
      name: 'Community Rewards & Airdrops',
      percentage: 10,
      tokens: 12,
      color: '#4B0082',
      glowColor: 'rgba(75, 0, 130, 0.4)',
      icon: <Gift className="w-5 h-5" />,
      description: 'Community engagement rewards'
    },
    {
      name: 'Burn & Reserve',
      percentage: 5,
      tokens: 6,
      color: '#191970',
      glowColor: 'rgba(25, 25, 112, 0.4)',
      icon: <Flame className="w-5 h-5" />,
      description: 'Token burn mechanism and reserves'
    }
  ];

  const radius = 200;
  const centerX = 250;
  const centerY = 250;
  const innerRadius = 140;

  // Calculate slice positions
  let currentAngle = -90; // Start from top
  
  return (
    <section className="py-20 relative">
      <div className="text-center mb-16">
        <Badge className="mb-4 bg-gradient-to-r from-cyan-400 to-lime-400 text-navy-900">
          Token Distribution
        </Badge>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          DAGOS{' '}
          <span className="text-gradient">Tokenomics Infographic</span>
        </h2>
        <p className="text-xl text-white/80 max-w-3xl mx-auto">
          Interactive visualization of the complete token distribution system
        </p>
      </div>

      <div className="max-w-7xl mx-auto">
        <Card className="glass-strong border-white/10 overflow-hidden">
          <CardContent className="p-8 md:p-12">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              {/* SVG Infographic */}
              <div className="flex-1 flex items-center justify-center">
                <div className="relative" style={{ width: '500px', height: '500px' }}>
                  <svg
                    width="500"
                    height="500"
                    viewBox="0 0 500 500"
                    className="transform rotate-0"
                  >
                    {/* Background glow effects */}
                    <defs>
                      <filter id="glow">
                        <feGaussianBlur stdDeviation="3.5" result="coloredBlur"/>
                        <feMerge>
                          <feMergeNode in="coloredBlur"/>
                          <feMergeNode in="SourceGraphic"/>
                        </feMerge>
                      </filter>
                      {categories.map((cat, index) => (
                        <radialGradient key={`gradient-${index}`} id={`gradient-${index}`}>
                          <stop offset="0%" stopColor={cat.color} stopOpacity="0.8" />
                          <stop offset="100%" stopColor={cat.color} stopOpacity="0.3" />
                        </radialGradient>
                      ))}
                    </defs>

                    {/* Draw slices */}
                    {categories.map((category, index) => {
                      const sliceAngle = (category.percentage / 100) * 360;
                      const startAngle = currentAngle;
                      const endAngle = currentAngle + sliceAngle;
                      
                      const startRad = (startAngle * Math.PI) / 180;
                      const endRad = (endAngle * Math.PI) / 180;
                      
                      const x1 = centerX + innerRadius * Math.cos(startRad);
                      const y1 = centerY + innerRadius * Math.sin(startRad);
                      const x2 = centerX + radius * Math.cos(startRad);
                      const y2 = centerY + radius * Math.sin(startRad);
                      const x3 = centerX + radius * Math.cos(endRad);
                      const y3 = centerY + radius * Math.sin(endRad);
                      const x4 = centerX + innerRadius * Math.cos(endRad);
                      const y4 = centerY + innerRadius * Math.sin(endRad);
                      
                      const largeArc = sliceAngle > 180 ? 1 : 0;
                      
                      const pathData = [
                        `M ${x1} ${y1}`,
                        `L ${x2} ${y2}`,
                        `A ${radius} ${radius} 0 ${largeArc} 1 ${x3} ${y3}`,
                        `L ${x4} ${y4}`,
                        `A ${innerRadius} ${innerRadius} 0 ${largeArc} 0 ${x1} ${y1}`,
                        'Z'
                      ].join(' ');
                      
                      // Calculate label position
                      const midAngle = (startAngle + endAngle) / 2;
                      const midRad = (midAngle * Math.PI) / 180;
                      const labelRadius = (radius + innerRadius) / 2;
                      const labelX = centerX + labelRadius * Math.cos(midRad);
                      const labelY = centerY + labelRadius * Math.sin(midRad);
                      
                      currentAngle = endAngle;
                      
                      const isHovered = hoveredCategory === category.name;
                      
                      return (
                        <g key={index}>
                          <motion.path
                            d={pathData}
                            fill={`url(#gradient-${index})`}
                            stroke={category.color}
                            strokeWidth={isHovered ? "3" : "2"}
                            filter="url(#glow)"
                            style={{
                              cursor: 'pointer',
                              transition: 'all 0.3s ease'
                            }}
                            animate={{
                              scale: isHovered ? 1.02 : 1,
                              opacity: isHovered ? 1 : 0.9
                            }}
                            onMouseEnter={() => setHoveredCategory(category.name)}
                            onMouseLeave={() => setHoveredCategory(null)}
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 0.9, scale: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                          />
                          
                          {/* Percentage label */}
                          <text
                            x={labelX}
                            y={labelY}
                            textAnchor="middle"
                            fill="white"
                            fontSize="14"
                            fontWeight="bold"
                            style={{ pointerEvents: 'none' }}
                          >
                            {category.percentage}%
                          </text>
                        </g>
                      );
                    })}

                    {/* Center circle with pulsing animation */}
                    <motion.circle
                      cx={centerX}
                      cy={centerY}
                      r={innerRadius}
                      fill="rgba(10, 14, 42, 0.95)"
                      stroke="url(#center-gradient)"
                      strokeWidth="4"
                      filter="url(#glow)"
                      animate={{
                        strokeOpacity: [0.5, 1, 0.5],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                    
                    <defs>
                      <linearGradient id="center-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#00FFFF" />
                        <stop offset="50%" stopColor="#A3FF12" />
                        <stop offset="100%" stopColor="#8A2BE2" />
                      </linearGradient>
                    </defs>

                    {/* Center text */}
                    <text
                      x={centerX}
                      y={centerY - 30}
                      textAnchor="middle"
                      fill="white"
                      fontSize="36"
                      fontWeight="bold"
                    >
                      {totalSupply}B
                    </text>
                    <text
                      x={centerX}
                      y={centerY + 10}
                      textAnchor="middle"
                      fill="rgba(255, 255, 255, 0.7)"
                      fontSize="16"
                    >
                      Total Supply
                    </text>
                    <text
                      x={centerX}
                      y={centerY + 35}
                      textAnchor="middle"
                      fill="#00FFFF"
                      fontSize="14"
                      fontWeight="500"
                    >
                      120,000,000,000 DAG
                    </text>
                  </svg>

                  {/* Animated ring glow effect */}
                  <motion.div
                    className="absolute inset-0 rounded-full"
                    style={{
                      background: 'radial-gradient(circle, rgba(0,255,255,0.1) 0%, transparent 70%)',
                      pointerEvents: 'none'
                    }}
                    animate={{
                      scale: [1, 1.1, 1],
                      opacity: [0.3, 0.6, 0.3]
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                </div>
              </div>

              {/* Category Legend */}
              <div className="flex-1 space-y-3 w-full">
                <h3 className="text-2xl font-bold text-white mb-6">
                  Distribution Breakdown
                </h3>
                {categories.map((category, index) => (
                  <motion.div
                    key={index}
                    className={`p-4 rounded-lg border transition-all duration-300 cursor-pointer ${
                      hoveredCategory === category.name
                        ? 'glass-strong border-white/30 bg-white/10'
                        : 'glass border-white/10'
                    }`}
                    onMouseEnter={() => setHoveredCategory(category.name)}
                    onMouseLeave={() => setHoveredCategory(null)}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                  >
                    <div className="flex items-start gap-3">
                      <div
                        className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                        style={{
                          backgroundColor: category.color,
                          boxShadow: hoveredCategory === category.name
                            ? `0 0 20px ${category.glowColor}`
                            : 'none'
                        }}
                      >
                        <div className="text-navy-900">
                          {category.icon}
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <h4 className="text-white font-medium">{category.name}</h4>
                          <Badge
                            className="ml-2"
                            style={{
                              backgroundColor: `${category.color}20`,
                              color: category.color,
                              borderColor: `${category.color}50`
                            }}
                          >
                            {category.percentage}%
                          </Badge>
                        </div>
                        <p className="text-white/60 text-sm mb-2">
                          {category.description}
                        </p>
                        <div className="text-sm font-mono" style={{ color: category.color }}>
                          {category.tokens.toFixed(1)}B DAG
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
