import React from 'react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Trophy, Users, Gift, Target, Zap, Award } from 'lucide-react';
import { motion } from 'framer-motion';

export function CommunityChallenges() {
  const challenges = [
    {
      icon: <Trophy className="w-8 h-8" />,
      title: 'Referral Champions',
      status: 'Ends in 12 days',
      description: 'Top 10 referrers win exclusive NFTs, bonus tokens, and VIP status in our ecosystem. Invite friends and climb the leaderboard!',
      gradient: 'from-cyan-500 to-teal-500',
      participants: 1247,
      rewards: ['Limited Edition NFT', '10,000 DAGOS Tokens', 'VIP Discord Role']
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Early Bird Bonus',
      status: 'Ends in 5 days',
      description: 'First 1,000 investors to reach $5,000 investment get 25% bonus tokens plus priority access to future airdrops.',
      gradient: 'from-purple-500 to-pink-500',
      participants: 823,
      rewards: ['25% Bonus Tokens', 'Airdrop Priority', 'Founder Badge']
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Community Builders',
      status: 'Ends in 18 days',
      description: 'Most active community members on social media win DAGOS merch, tokens, and exclusive ambassador opportunities.',
      gradient: 'from-orange-500 to-red-500',
      participants: 2156,
      rewards: ['Exclusive Merch', '5,000 DAGOS Tokens', 'Ambassador Role']
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Diamond Hands',
      status: 'Ends in 30 days',
      description: 'Hold your DAGOS tokens for 30 days without selling to unlock loyalty rewards and multiplier benefits for future stakes.',
      gradient: 'from-blue-500 to-indigo-600',
      participants: 3421,
      rewards: ['2x Staking Multiplier', 'Loyalty NFT', '15% Bonus Rewards']
    }
  ];

  return (
    <section className="py-20 relative">
      {/* Section Header */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Community{' '}
          <span className="text-gradient">Challenges</span>
        </h2>
        <p className="text-xl text-white/80 max-w-3xl mx-auto">
          Compete with fellow investors and earn exclusive rewards
        </p>
      </div>

      {/* Challenges Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {challenges.map((challenge, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="glass-strong border-white/10 hover:glow-cyan transition-all duration-300 group h-full">
              <CardContent className="p-6">
                <div className="flex gap-4">
                  {/* Icon */}
                  <div className={`p-4 rounded-2xl bg-gradient-to-br ${challenge.gradient} flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                    <div className="text-white">
                      {challenge.icon}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="text-xl font-bold text-white mb-1">
                          {challenge.title}
                        </h3>
                        <Badge className="bg-yellow-500/20 text-yellow-400 border-yellow-500/30">
                          {challenge.status}
                        </Badge>
                      </div>
                    </div>

                    <p className="text-white/70 text-sm leading-relaxed mb-4">
                      {challenge.description}
                    </p>

                    {/* Rewards List */}
                    <div className="space-y-2 mb-4">
                      <div className="text-xs font-semibold text-cyan-400 uppercase tracking-wider mb-2">
                        Rewards:
                      </div>
                      {challenge.rewards.map((reward, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm text-white/80">
                          <Award className="w-4 h-4 text-lime-400" />
                          <span>{reward}</span>
                        </div>
                      ))}
                    </div>

                    {/* Stats & Actions */}
                    <div className="flex items-center justify-between pt-4 border-t border-white/10">
                      <div className="flex items-center gap-2 text-sm text-white/60">
                        <Users className="w-4 h-4" />
                        <span>{challenge.participants.toLocaleString()} participants</span>
                      </div>
                      <Button
                        size="sm"
                        className={`bg-gradient-to-r ${challenge.gradient} hover:opacity-90 text-white`}
                      >
                        Join Challenge
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Gradient Overlay on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${challenge.gradient} opacity-0 group-hover:opacity-5 rounded-lg transition-opacity duration-300 pointer-events-none`} />
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Divider with Gradient */}
      <div className="my-12 h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent" />

      {/* Bottom CTA */}
      <div className="text-center">
        <p className="text-white/60 mb-4">
          New challenges are added every week. Stay active to maximize your rewards!
        </p>
        <Button className="bg-gradient-to-r from-cyan-500 to-violet-500 hover:from-cyan-600 hover:to-violet-600 text-white text-lg px-8 py-6">
          <Gift className="w-5 h-5 mr-2" />
          View All Challenges
        </Button>
      </div>
    </section>
  );
}
