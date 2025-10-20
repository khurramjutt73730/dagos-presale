import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { TrendingUp, TrendingDown, DollarSign, Percent, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';

interface PortfolioSummaryProps {
  isDarkMode?: boolean;
  totalInvested: number;
  currentValue: number;
  profitLoss: number;
  profitPercent: number;
  className?: string;
}

export function PortfolioSummary({
  isDarkMode = true,
  totalInvested,
  currentValue,
  profitLoss,
  profitPercent,
  className = ''
}: PortfolioSummaryProps) {
  const cardBg = isDarkMode ? 'bg-[#0B0C10] border-white/10' : 'bg-white border-gray-200';
  const textPrimary = isDarkMode ? 'text-white' : 'text-gray-900';
  const textSecondary = isDarkMode ? 'text-white/60' : 'text-gray-600';
  const isProfit = profitLoss >= 0;

  const stats = [
    {
      label: 'Total Invested',
      value: `$${totalInvested.toLocaleString()}`,
      icon: DollarSign,
      color: isDarkMode ? 'text-cyan-400' : 'text-cyan-600',
      bgColor: isDarkMode ? 'bg-cyan-500/20' : 'bg-cyan-100'
    },
    {
      label: 'Current Value',
      value: `$${currentValue.toLocaleString()}`,
      icon: TrendingUp,
      color: isDarkMode ? 'text-violet-400' : 'text-violet-600',
      bgColor: isDarkMode ? 'bg-violet-500/20' : 'bg-violet-100'
    },
    {
      label: 'Profit/Loss',
      value: `${isProfit ? '+' : ''}$${profitLoss.toLocaleString()}`,
      icon: isProfit ? TrendingUp : TrendingDown,
      color: isProfit ? 'text-green-400' : 'text-red-400',
      bgColor: isProfit 
        ? isDarkMode ? 'bg-green-500/20' : 'bg-green-100'
        : isDarkMode ? 'bg-red-500/20' : 'bg-red-100'
    },
    {
      label: 'ROI',
      value: `${isProfit ? '+' : ''}${profitPercent}%`,
      icon: Percent,
      color: isProfit ? 'text-lime-400' : 'text-red-400',
      bgColor: isProfit 
        ? isDarkMode ? 'bg-lime-500/20' : 'bg-lime-100'
        : isDarkMode ? 'bg-red-500/20' : 'bg-red-100'
    }
  ];

  return (
    <Card className={`${cardBg} relative overflow-hidden ${className}`}>
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-violet-500/5 to-purple-500/5 pointer-events-none" />
      
      <CardHeader className="relative">
        <div className="flex items-center justify-between">
          <CardTitle className={textPrimary}>Portfolio Summary</CardTitle>
          <Badge className={`${
            isProfit 
              ? isDarkMode ? 'bg-green-500/20 text-green-400 border-green-500/30' : 'bg-green-100 text-green-600 border-green-200'
              : isDarkMode ? 'bg-red-500/20 text-red-400 border-red-500/30' : 'bg-red-100 text-red-600 border-red-200'
          }`}>
            {isProfit ? '↑' : '↓'} {Math.abs(profitPercent)}% {isProfit ? 'Gain' : 'Loss'}
          </Badge>
        </div>
      </CardHeader>
      
      <CardContent className="relative">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`p-4 rounded-lg border ${isDarkMode ? 'border-white/10' : 'border-gray-200'}`}
            >
              <div className={`p-2 rounded-lg ${stat.bgColor} w-fit mb-3`}>
                <stat.icon className={`w-4 h-4 ${stat.color}`} />
              </div>
              <div className={`text-xs ${textSecondary} mb-1`}>{stat.label}</div>
              <div className={`text-xl ${stat.color}`}>{stat.value}</div>
            </motion.div>
          ))}
        </div>

        {/* Time Period Info */}
        <div className={`mt-6 pt-4 border-t ${isDarkMode ? 'border-white/10' : 'border-gray-200'} flex items-center justify-between`}>
          <div className="flex items-center gap-2">
            <Calendar className={`w-4 h-4 ${textSecondary}`} />
            <span className={`text-sm ${textSecondary}`}>Since First Purchase</span>
          </div>
          <span className={`text-sm ${textPrimary}`}>120 days ago</span>
        </div>
      </CardContent>
    </Card>
  );
}
