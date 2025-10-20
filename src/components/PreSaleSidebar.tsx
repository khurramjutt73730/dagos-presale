import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Progress } from './ui/progress';
import { Badge } from './ui/badge';
import { Target, Clock, TrendingUp, Users } from 'lucide-react';
import { motion } from 'framer-motion';

interface PreSaleSidebarProps {
  isDarkMode?: boolean;
  raisedAmount: number;
  softCap: number;
  hardCap: number;
  timeRemaining: {
    days: number;
    hours: number;
    minutes: number;
  };
  className?: string;
  onBuyMoreTokens?: () => void;
  onJoinCommunity?: () => void;
  onGetSupport?: () => void;
}

export function PreSaleSidebar({
  isDarkMode = true,
  raisedAmount,
  softCap,
  hardCap,
  timeRemaining,
  className = '',
  onBuyMoreTokens,
  onJoinCommunity,
  onGetSupport
}: PreSaleSidebarProps) {
  const cardBg = isDarkMode ? 'bg-[#0B0C10] border-white/10' : 'bg-white border-gray-200';
  const textPrimary = isDarkMode ? 'text-white' : 'text-gray-900';
  const textSecondary = isDarkMode ? 'text-white/60' : 'text-gray-600';
  
  const progressPercentage = (raisedAmount / hardCap) * 100;
  const softCapPercentage = (softCap / hardCap) * 100;

  return (
    <div className={`space-y-6 ${className}`}>
      {/* Pre-Sale Overview */}
      <Card className={`${cardBg} relative overflow-hidden`}>
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-violet-500/10 to-purple-500/10 pointer-events-none" />
        
        <CardHeader className="relative">
          <div className="flex items-center gap-3">
            <div className={`p-2 rounded-lg ${isDarkMode ? 'bg-cyan-500/20' : 'bg-cyan-100'}`}>
              <Target className={`w-5 h-5 ${isDarkMode ? 'text-cyan-400' : 'text-cyan-600'}`} />
            </div>
            <CardTitle className={textPrimary}>Pre-Sale Overview</CardTitle>
          </div>
        </CardHeader>
        
        <CardContent className="space-y-6 relative">
          {/* Countdown Timer */}
          <div className={`p-4 rounded-lg ${isDarkMode ? 'bg-white/5' : 'bg-gray-50'} border ${isDarkMode ? 'border-white/10' : 'border-gray-200'}`}>
            <div className="flex items-center gap-2 mb-3">
              <Clock className={`w-4 h-4 ${isDarkMode ? 'text-cyan-400' : 'text-cyan-600'}`} />
              <span className={`text-sm ${textSecondary}`}>Time Remaining</span>
            </div>
            <div className="grid grid-cols-3 gap-2">
              <div className="text-center">
                <div className={`text-2xl ${textPrimary}`}>{timeRemaining.days}</div>
                <div className={`text-xs ${textSecondary}`}>Days</div>
              </div>
              <div className="text-center">
                <div className={`text-2xl ${textPrimary}`}>{timeRemaining.hours}</div>
                <div className={`text-xs ${textSecondary}`}>Hours</div>
              </div>
              <div className="text-center">
                <div className={`text-2xl ${textPrimary}`}>{timeRemaining.minutes}</div>
                <div className={`text-xs ${textSecondary}`}>Mins</div>
              </div>
            </div>
          </div>

          {/* Raised Amount */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className={`text-sm ${textSecondary}`}>Raised Amount</span>
              <span className={textPrimary}>${raisedAmount.toLocaleString()}</span>
            </div>
            
            {/* Progress Bar */}
            <div className="relative">
              <div className={`h-3 rounded-full overflow-hidden ${isDarkMode ? 'bg-white/10' : 'bg-gray-200'}`}>
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${progressPercentage}%` }}
                  transition={{ duration: 1, ease: 'easeOut' }}
                  className="h-full bg-gradient-to-r from-cyan-500 to-violet-500 rounded-full relative"
                >
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-violet-500 blur-sm opacity-50" />
                </motion.div>
              </div>
              
              {/* Soft Cap Marker */}
              {softCapPercentage < 100 && (
                <div 
                  className="absolute top-0 h-3 w-0.5 bg-yellow-400"
                  style={{ left: `${softCapPercentage}%` }}
                >
                  <div className={`absolute -top-6 left-1/2 transform -translate-x-1/2 text-xs ${isDarkMode ? 'text-yellow-400' : 'text-yellow-600'} whitespace-nowrap`}>
                    Soft Cap
                  </div>
                </div>
              )}
            </div>
            
            <div className="flex items-center justify-between mt-2">
              <span className={`text-xs ${textSecondary}`}>
                ${(raisedAmount - softCap).toLocaleString()} above soft cap
              </span>
              <span className={`text-xs ${isDarkMode ? 'text-cyan-400' : 'text-cyan-600'}`}>
                {progressPercentage.toFixed(1)}%
              </span>
            </div>
          </div>

          {/* Caps Info */}
          <div className="grid grid-cols-2 gap-3">
            <div className={`p-3 rounded-lg ${isDarkMode ? 'bg-yellow-500/10 border border-yellow-500/20' : 'bg-yellow-50 border border-yellow-200'}`}>
              <div className={`text-xs ${isDarkMode ? 'text-yellow-400' : 'text-yellow-700'} mb-1`}>
                Soft Cap
              </div>
              <div className={textPrimary}>${softCap.toLocaleString()}</div>
            </div>
            <div className={`p-3 rounded-lg ${isDarkMode ? 'bg-green-500/10 border border-green-500/20' : 'bg-green-50 border border-green-200'}`}>
              <div className={`text-xs ${isDarkMode ? 'text-green-400' : 'text-green-700'} mb-1`}>
                Hard Cap
              </div>
              <div className={textPrimary}>${hardCap.toLocaleString()}</div>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="space-y-3 pt-3 border-t border-white/10">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <TrendingUp className={`w-4 h-4 ${isDarkMode ? 'text-lime-400' : 'text-lime-600'}`} />
                <span className={`text-sm ${textSecondary}`}>Current Price</span>
              </div>
              <span className={textPrimary}>$0.03</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Users className={`w-4 h-4 ${isDarkMode ? 'text-violet-400' : 'text-violet-600'}`} />
                <span className={`text-sm ${textSecondary}`}>Total Investors</span>
              </div>
              <span className={textPrimary}>2,847</span>
            </div>
          </div>

          {/* Status Badge */}
          <Badge className={`w-full justify-center ${isDarkMode ? 'bg-green-500/20 text-green-400 border-green-500/30' : 'bg-green-100 text-green-600 border-green-200'}`}>
            ✓ Pre-Sale Active
          </Badge>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <Card className={cardBg}>
        <CardHeader>
          <CardTitle className={`text-sm ${textPrimary}`}>Quick Actions</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <button 
            onClick={onBuyMoreTokens}
            className={`w-full p-3 rounded-lg ${isDarkMode ? 'bg-gradient-to-r from-cyan-500/20 to-violet-500/20 hover:from-cyan-500/30 hover:to-violet-500/30 border border-cyan-500/30 text-cyan-400' : 'bg-gradient-to-r from-cyan-100 to-violet-100 hover:from-cyan-200 hover:to-violet-200 border border-cyan-300 text-cyan-700'} transition-all duration-300 text-sm`}
          >
            Buy More Tokens
          </button>
          <button 
            onClick={onJoinCommunity}
            className={`w-full p-3 rounded-lg ${isDarkMode ? 'bg-white/5 hover:bg-white/10 border border-white/10 text-white' : 'bg-gray-50 hover:bg-gray-100 border border-gray-200 text-gray-700'} transition-all duration-300 text-sm`}
          >
            Join Community
          </button>
          <button 
            onClick={onGetSupport}
            className={`w-full p-3 rounded-lg ${isDarkMode ? 'bg-white/5 hover:bg-white/10 border border-white/10 text-white' : 'bg-gray-50 hover:bg-gray-100 border border-gray-200 text-gray-700'} transition-all duration-300 text-sm`}
          >
            Get Support
          </button>
        </CardContent>
      </Card>
    </div>
  );
}
