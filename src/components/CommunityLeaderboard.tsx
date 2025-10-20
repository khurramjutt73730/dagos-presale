import React from 'react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Trophy, Award, Medal, ArrowRight, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';

export function CommunityLeaderboard() {
  const topReferrers = [
    {
      rank: 1,
      username: 'CryptoKing47',
      referrals: 247,
      gradient: 'from-yellow-400 to-orange-500',
      emoji: '👑',
      badge: 'gold'
    },
    {
      rank: 2,
      username: 'BlockchainBoss',
      referrals: 198,
      gradient: 'from-gray-300 to-gray-400',
      emoji: '🥈',
      badge: 'silver'
    },
    {
      rank: 3,
      username: 'DeFiQueen',
      referrals: 176,
      gradient: 'from-orange-400 to-orange-600',
      emoji: '🥉',
      badge: 'bronze'
    }
  ];

  return (
    <section className="py-20 relative">
      <div className="max-w-md mx-auto">
        <Card className="glass-strong border-white/10">
          <CardContent className="p-8">
            {/* Header */}
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center p-4 rounded-2xl bg-gradient-to-br from-yellow-500/20 to-orange-500/20 mb-4">
                <Trophy className="w-8 h-8 text-yellow-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">
                Top Referrers
              </h3>
              <p className="text-white/60 text-sm">
                This month's leaderboard champions
              </p>
            </div>

            {/* Leaderboard Entries */}
            <div className="space-y-3 mb-8">
              {topReferrers.map((leader, index) => (
                <motion.div
                  key={leader.rank}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="group"
                >
                  <div className="glass-card border border-white/10 hover:border-cyan-400/50 rounded-xl p-4 transition-all duration-300 hover:scale-[1.02]">
                    <div className="flex items-center gap-4">
                      {/* Rank Badge */}
                      <div className={`relative w-12 h-12 rounded-full bg-gradient-to-br ${leader.gradient} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                        <span className="text-xl font-bold text-white">
                          {leader.rank}
                        </span>
                        {/* Glow Effect */}
                        <div className={`absolute inset-0 bg-gradient-to-br ${leader.gradient} rounded-full blur-lg opacity-50`} />
                      </div>

                      {/* User Info */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="text-white font-bold truncate">
                            {leader.username}
                          </h4>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <TrendingUp className="w-4 h-4 text-cyan-400" />
                          <span className="text-cyan-400 font-medium">
                            {leader.referrals} referrals
                          </span>
                        </div>
                      </div>

                      {/* Trophy Emoji */}
                      <div className="text-3xl group-hover:scale-125 transition-transform">
                        {leader.emoji}
                      </div>
                    </div>

                    {/* Hover Gradient Glow */}
                    <div className={`absolute inset-0 bg-gradient-to-r ${leader.gradient} opacity-0 group-hover:opacity-10 rounded-xl transition-opacity duration-300 pointer-events-none`} />
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Join Challenge Button */}
            <Button className="w-full bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600 text-white text-lg py-6 group shadow-2xl">
              <span className="flex items-center justify-center gap-2">
                <Trophy className="w-5 h-5" />
                Join Challenge
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              {/* Button Glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-lg blur-xl opacity-50" />
            </Button>

            {/* Bottom Info */}
            <div className="mt-6 text-center">
              <p className="text-white/50 text-xs">
                Rankings update every 24 hours
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
