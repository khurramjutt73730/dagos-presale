import React from 'react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Progress } from './ui/progress';
import { 
  Users, 
  TrendingUp, 
  DollarSign, 
  Clock, 
  Gift, 
  Star,
  Award
} from 'lucide-react';
import { motion } from 'framer-motion';

interface ReferralStatsProps {
  totalReferrals: number;
  activeReferrals: number;
  totalRewards: number;
  pendingRewards: number;
  rewardsCurrency?: string;
  nextMilestone?: {
    target: number;
    reward: string;
  };
  className?: string;
}

export function ReferralStats({
  totalReferrals,
  activeReferrals,
  totalRewards,
  pendingRewards,
  rewardsCurrency = 'ETH',
  nextMilestone = { target: 20, reward: '500 DAGOS Bonus' },
  className = ''
}: ReferralStatsProps) {
  const milestoneProgress = (totalReferrals / nextMilestone.target) * 100;

  const stats = [
    {
      icon: Users,
      label: 'Total Referrals',
      value: totalReferrals,
      color: 'lime',
      bgColor: 'from-lime-500/20 to-lime-500/10',
      iconBg: 'bg-lime-500/20',
      textColor: 'text-lime-400'
    },
    {
      icon: TrendingUp,
      label: 'Active Referrals',
      value: activeReferrals,
      color: 'cyan',
      bgColor: 'from-cyan-500/20 to-cyan-500/10',
      iconBg: 'bg-cyan-500/20',
      textColor: 'text-cyan-400'
    },
    {
      icon: DollarSign,
      label: 'Total Earned',
      value: `${totalRewards.toFixed(4)} ${rewardsCurrency}`,
      color: 'green',
      bgColor: 'from-green-500/20 to-green-500/10',
      iconBg: 'bg-green-500/20',
      textColor: 'text-green-400'
    },
    {
      icon: Clock,
      label: 'Pending Rewards',
      value: `${pendingRewards.toFixed(4)} ${rewardsCurrency}`,
      color: 'yellow',
      bgColor: 'from-yellow-500/20 to-yellow-500/10',
      iconBg: 'bg-yellow-500/20',
      textColor: 'text-yellow-400'
    }
  ];

  return (
    <div className={`space-y-6 ${className}`}>
      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="glass border-white/10 hover:border-white/20 transition-all overflow-hidden">
              <div className={`h-1 bg-gradient-to-r ${stat.bgColor}`} />
              <CardContent className="p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className={`p-2 rounded-lg ${stat.iconBg}`}>
                    <stat.icon className={`w-5 h-5 ${stat.textColor}`} />
                  </div>
                  <Badge className={`${stat.iconBg} ${stat.textColor} border-${stat.color}-500/30`}>
                    Active
                  </Badge>
                </div>
                <div className={`text-2xl ${stat.textColor} mb-1`}>
                  {stat.value}
                </div>
                <div className="text-sm text-white/70">{stat.label}</div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Milestone Progress */}
      <Card className="glass-strong border-white/10 overflow-hidden">
        <div className="h-1 bg-gradient-to-r from-purple-500/30 to-pink-500/30" />
        <CardContent className="p-6 space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-gradient-to-br from-purple-500/20 to-pink-500/20">
                <Award className="w-6 h-6 text-purple-400" />
              </div>
              <div>
                <h3 className="text-white">Next Milestone Reward</h3>
                <p className="text-sm text-white/70">
                  Refer {nextMilestone.target} users to unlock
                </p>
              </div>
            </div>
            <Badge className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-400 border-purple-500/30">
              <Gift className="w-3 h-3 mr-1" />
              {nextMilestone.reward}
            </Badge>
          </div>

          {/* Progress Bar */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span className="text-white/70">
                {totalReferrals} / {nextMilestone.target} referrals
              </span>
              <span className="text-purple-400">
                {Math.min(100, Math.round(milestoneProgress))}%
              </span>
            </div>
            <div className="relative h-3 bg-white/5 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${Math.min(100, milestoneProgress)}%` }}
                transition={{ duration: 1, ease: 'easeOut' }}
                className="absolute inset-y-0 left-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
              />
              {/* Glow effect */}
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${Math.min(100, milestoneProgress)}%` }}
                transition={{ duration: 1, ease: 'easeOut' }}
                className="absolute inset-y-0 left-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-md opacity-50"
              />
            </div>
          </div>

          {/* Additional Milestones */}
          <div className="grid grid-cols-3 gap-2 pt-2">
            {[
              { target: 5, reward: '100 DAGOS', achieved: totalReferrals >= 5 },
              { target: 10, reward: '250 DAGOS', achieved: totalReferrals >= 10 },
              { target: 20, reward: '500 DAGOS', achieved: totalReferrals >= 20 }
            ].map((milestone, index) => (
              <div
                key={index}
                className={`p-3 rounded-lg border text-center transition-all ${
                  milestone.achieved
                    ? 'bg-green-500/10 border-green-500/30'
                    : 'glass border-white/10'
                }`}
              >
                <div className={`text-sm mb-1 ${
                  milestone.achieved ? 'text-green-400' : 'text-white/70'
                }`}>
                  {milestone.target} Refs
                </div>
                <div className="text-xs text-white/60">{milestone.reward}</div>
                {milestone.achieved && (
                  <Star className="w-4 h-4 text-green-400 mx-auto mt-1" />
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
