import React from 'react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Progress } from './ui/progress';
import { Wallet, Gift, TrendingUp, Target } from 'lucide-react';
import { motion } from 'framer-motion';

interface DashboardOverviewCardsProps {
  isDarkMode?: boolean;
  totalDagos: number;
  referralEarnings: number;
  walletBalance: number;
  preSaleProgress: number;
  className?: string;
}

export function DashboardOverviewCards({
  isDarkMode = true,
  totalDagos,
  referralEarnings,
  walletBalance,
  preSaleProgress,
  className = ''
}: DashboardOverviewCardsProps) {
  const cardBg = isDarkMode ? 'bg-[#0B0C10] border-white/10' : 'bg-white border-gray-200';
  const textPrimary = isDarkMode ? 'text-white' : 'text-gray-900';
  const textSecondary = isDarkMode ? 'text-white/60' : 'text-gray-600';

  const cards = [
    {
      title: 'Total DAGOS Purchased',
      value: totalDagos.toLocaleString(),
      suffix: 'DAGOS',
      change: '+12.5%',
      changePositive: true,
      icon: Wallet,
      gradient: 'from-cyan-500 to-blue-500',
      iconBg: isDarkMode ? 'bg-cyan-500/20' : 'bg-cyan-100',
      iconColor: isDarkMode ? 'text-cyan-400' : 'text-cyan-600'
    },
    {
      title: 'Referral Earnings',
      value: referralEarnings.toFixed(4),
      suffix: 'ETH',
      change: '+8.2%',
      changePositive: true,
      icon: Gift,
      gradient: 'from-violet-500 to-purple-500',
      iconBg: isDarkMode ? 'bg-violet-500/20' : 'bg-violet-100',
      iconColor: isDarkMode ? 'text-violet-400' : 'text-violet-600'
    },
    {
      title: 'Wallet Balance',
      value: `$${walletBalance.toLocaleString()}`,
      suffix: 'USD',
      change: '+15.3%',
      changePositive: true,
      icon: TrendingUp,
      gradient: 'from-lime-500 to-green-500',
      iconBg: isDarkMode ? 'bg-lime-500/20' : 'bg-lime-100',
      iconColor: isDarkMode ? 'text-lime-400' : 'text-lime-600'
    }
  ];

  return (
    <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 ${className}`}>
      {/* First 3 cards */}
      {cards.map((card, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <Card className={`${cardBg} hover:border-white/20 transition-all duration-300 group relative overflow-hidden`}>
            {/* Gradient overlay on hover */}
            <div className={`absolute inset-0 bg-gradient-to-br ${card.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
            
            <CardContent className="p-6 relative">
              <div className="flex items-start justify-between mb-4">
                <div className={`p-3 rounded-xl ${card.iconBg}`}>
                  <card.icon className={`w-6 h-6 ${card.iconColor}`} />
                </div>
                <Badge className={`${
                  card.changePositive 
                    ? isDarkMode ? 'bg-green-500/20 text-green-400 border-green-500/30' : 'bg-green-100 text-green-600 border-green-200'
                    : isDarkMode ? 'bg-red-500/20 text-red-400 border-red-500/30' : 'bg-red-100 text-red-600 border-red-200'
                }`}>
                  {card.change}
                </Badge>
              </div>
              
              <div className="space-y-1">
                <p className={`text-sm ${textSecondary}`}>{card.title}</p>
                <div className="flex items-baseline gap-2">
                  <h3 className={`text-2xl md:text-3xl ${textPrimary}`}>
                    {card.value}
                  </h3>
                  <span className={`text-sm ${textSecondary}`}>{card.suffix}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      ))}

      {/* Pre-Sale Progress Card with Circular Progress */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <Card className={`${cardBg} hover:border-white/20 transition-all duration-300 group relative overflow-hidden`}>
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500 opacity-0 group-hover:opacity-5 transition-opacity duration-300" />
          
          <CardContent className="p-6 relative">
            <div className="flex items-start justify-between mb-4">
              <div className={`p-3 rounded-xl ${isDarkMode ? 'bg-purple-500/20' : 'bg-purple-100'}`}>
                <Target className={`w-6 h-6 ${isDarkMode ? 'text-purple-400' : 'text-purple-600'}`} />
              </div>
            </div>
            
            <div className="space-y-4">
              <p className={`text-sm ${textSecondary}`}>Pre-Sale Progress</p>
              
              {/* Circular Progress */}
              <div className="flex items-center justify-center">
                <div className="relative w-32 h-32">
                  {/* Background circle */}
                  <svg className="w-32 h-32 transform -rotate-90">
                    <circle
                      cx="64"
                      cy="64"
                      r="56"
                      stroke={isDarkMode ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'}
                      strokeWidth="8"
                      fill="none"
                    />
                    {/* Progress circle */}
                    <circle
                      cx="64"
                      cy="64"
                      r="56"
                      stroke="url(#progressGradient)"
                      strokeWidth="8"
                      fill="none"
                      strokeDasharray={`${2 * Math.PI * 56}`}
                      strokeDashoffset={`${2 * Math.PI * 56 * (1 - preSaleProgress / 100)}`}
                      strokeLinecap="round"
                      className="transition-all duration-1000"
                    />
                    <defs>
                      <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#00FFF0" />
                        <stop offset="100%" stopColor="#8A2BE2" />
                      </linearGradient>
                    </defs>
                  </svg>
                  
                  {/* Center text */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className={`text-2xl ${textPrimary}`}>{preSaleProgress}%</span>
                    <span className={`text-xs ${textSecondary}`}>Complete</span>
                  </div>
                </div>
              </div>
              
              <div className="text-center">
                <p className={`text-xs ${textSecondary}`}>
                  $1.35M / $2M Raised
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
