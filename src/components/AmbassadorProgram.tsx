import React from 'react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Award, Twitter, Send, Youtube, ArrowRight, Star, Users } from 'lucide-react';
import { motion } from 'framer-motion';

export function AmbassadorProgram() {
  const ambassadors = [
    {
      name: 'Marcus Chen',
      rank: 'Elite Ambassador',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=160&h=160&fit=crop',
      referrals: 312,
      contentPieces: 45,
      rewardsEarned: '75,000 DAGOS',
      socials: {
        twitter: '#',
        telegram: '#',
        youtube: '#'
      }
    },
    {
      name: 'Sophie Williams',
      rank: 'Senior Ambassador',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=160&h=160&fit=crop',
      referrals: 267,
      contentPieces: 38,
      rewardsEarned: '62,000 DAGOS',
      socials: {
        twitter: '#',
        telegram: '#',
        youtube: '#'
      }
    },
    {
      name: 'James Rodriguez',
      rank: 'Senior Ambassador',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=160&h=160&fit=crop',
      referrals: 198,
      contentPieces: 52,
      rewardsEarned: '58,000 DAGOS',
      socials: {
        twitter: '#',
        telegram: '#',
        youtube: '#'
      }
    },
    {
      name: 'Emily Taylor',
      rank: 'Ambassador',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=160&h=160&fit=crop',
      referrals: 156,
      contentPieces: 29,
      rewardsEarned: '42,000 DAGOS',
      socials: {
        twitter: '#',
        telegram: '#',
        youtube: '#'
      }
    }
  ];

  const getRankColor = (rank: string) => {
    if (rank.includes('Elite')) return 'from-yellow-400 to-orange-500';
    if (rank.includes('Senior')) return 'from-cyan-400 to-blue-500';
    return 'from-purple-400 to-pink-500';
  };

  return (
    <section className="py-20 relative">
      {/* Section Header */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Ambassador{' '}
          <span className="text-gradient">Program</span>
        </h2>
        <p className="text-xl text-white/80 max-w-3xl mx-auto">
          Meet our top community leaders driving the DAGOS revolution
        </p>
      </div>

      {/* Ambassadors Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {ambassadors.map((ambassador, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="glass-strong border-white/10 hover:border-cyan-400/50 hover:scale-105 transition-all duration-300 group h-full">
              <CardContent className="p-6">
                {/* Profile Image */}
                <div className="relative mb-4">
                  <div className="w-20 h-20 mx-auto rounded-full overflow-hidden ring-4 ring-cyan-400/30 group-hover:ring-cyan-400/60 transition-all">
                    <img
                      src={ambassador.avatar}
                      alt={ambassador.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform"
                    />
                  </div>
                  {/* Star Badge */}
                  <div className="absolute -top-2 -right-2 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full p-2">
                    <Star className="w-4 h-4 text-white fill-white" />
                  </div>
                </div>

                {/* Name & Rank */}
                <div className="text-center mb-4">
                  <h3 className="text-lg font-bold text-white mb-2">
                    {ambassador.name}
                  </h3>
                  <Badge className={`bg-gradient-to-r ${getRankColor(ambassador.rank)} text-white border-0`}>
                    {ambassador.rank}
                  </Badge>
                </div>

                {/* Achievements */}
                <div className="space-y-3 mb-4 p-4 rounded-lg bg-white/5 border border-white/10">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-white/60">Referrals:</span>
                    <span className="text-cyan-400 font-bold">{ambassador.referrals}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-white/60">Content:</span>
                    <span className="text-purple-400 font-bold">{ambassador.contentPieces}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-white/60">Rewards:</span>
                    <span className="text-lime-400 font-bold">{ambassador.rewardsEarned}</span>
                  </div>
                </div>

                {/* Social Media Buttons */}
                <div className="flex justify-center gap-2">
                  <a
                    href={ambassador.socials.twitter}
                    className="p-2 rounded-lg bg-white/5 hover:bg-blue-500/20 border border-white/10 hover:border-blue-400/50 transition-all group/social"
                  >
                    <Twitter className="w-4 h-4 text-white/70 group-hover/social:text-blue-400 transition-colors" />
                  </a>
                  <a
                    href={ambassador.socials.telegram}
                    className="p-2 rounded-lg bg-white/5 hover:bg-cyan-500/20 border border-white/10 hover:border-cyan-400/50 transition-all group/social"
                  >
                    <Send className="w-4 h-4 text-white/70 group-hover/social:text-cyan-400 transition-colors" />
                  </a>
                  <a
                    href={ambassador.socials.youtube}
                    className="p-2 rounded-lg bg-white/5 hover:bg-red-500/20 border border-white/10 hover:border-red-400/50 transition-all group/social"
                  >
                    <Youtube className="w-4 h-4 text-white/70 group-hover/social:text-red-400 transition-colors" />
                  </a>
                </div>

                {/* Hover Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-violet-500/0 group-hover:from-cyan-500/5 group-hover:to-violet-500/5 rounded-lg transition-all duration-300 pointer-events-none" />
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Benefits Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <Card className="glass-strong border-white/10">
          <CardContent className="p-6 text-center">
            <div className="text-4xl mb-3">🎁</div>
            <h4 className="text-white font-bold mb-2">Exclusive Rewards</h4>
            <p className="text-white/60 text-sm">
              Earn bonus tokens, NFTs, and special perks
            </p>
          </CardContent>
        </Card>
        <Card className="glass-strong border-white/10">
          <CardContent className="p-6 text-center">
            <div className="text-4xl mb-3">👥</div>
            <h4 className="text-white font-bold mb-2">Direct Access</h4>
            <p className="text-white/60 text-sm">
              Private channels with the core team
            </p>
          </CardContent>
        </Card>
        <Card className="glass-strong border-white/10">
          <CardContent className="p-6 text-center">
            <div className="text-4xl mb-3">🚀</div>
            <h4 className="text-white font-bold mb-2">Early Features</h4>
            <p className="text-white/60 text-sm">
              Beta access to new platform features
            </p>
          </CardContent>
        </Card>
      </div>

      {/* CTA Button */}
      <div className="text-center">
        <Button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white text-lg px-12 py-6 group shadow-2xl">
          <Award className="w-5 h-5 mr-2" />
          Become an Ambassador
          <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg blur-xl opacity-50" />
        </Button>
        <p className="text-white/50 text-sm mt-4">
          Requirements: 50+ referrals or 10+ quality content pieces
        </p>
      </div>
    </section>
  );
}
