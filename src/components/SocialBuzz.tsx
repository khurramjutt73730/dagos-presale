import React from 'react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Heart, Repeat, MessageCircle, Twitter, Send, Youtube } from 'lucide-react';
import { motion } from 'framer-motion';

export function SocialBuzz() {
  const socialPosts = [
    {
      username: '@CryptoWhale92',
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=80&h=80&fit=crop',
      timestamp: '3h ago',
      content: 'Just loaded up on $DAGOS! This is the most undervalued project in crypto right now. The technology is revolutionary and the team is delivering 🚀💎',
      likes: 342,
      retweets: 128,
      comments: 67
    },
    {
      username: '@BlockchainQueen',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop',
      timestamp: '5h ago',
      content: 'Finally a blockchain that actually solves the fee problem! DAGOS is what we\'ve been waiting for. Feeless transactions = mass adoption 🔥',
      likes: 289,
      retweets: 94,
      comments: 45
    },
    {
      username: '@DeFiMaster_',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop',
      timestamp: '8h ago',
      content: 'Did my research on $DAGOS and I\'m blown away. The partnerships with Binance Labs and Chainlink are huge validators. Early bird gets the worm! 🐦✨',
      likes: 567,
      retweets: 203,
      comments: 112
    },
    {
      username: '@TokenAnalyst',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop',
      timestamp: '12h ago',
      content: 'Technical analysis: DAGOS has one of the strongest fundamentals I\'ve seen. DAG architecture + quantum resistance + eco-friendly = game changer 📊💚',
      likes: 421,
      retweets: 156,
      comments: 89
    },
    {
      username: '@CryptoNewbie_',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop',
      timestamp: '1d ago',
      content: 'New to crypto and $DAGOS is my first investment! The community is so welcoming and helpful. Love being part of this journey! 🙏❤️',
      likes: 234,
      retweets: 67,
      comments: 52
    },
    {
      username: '@InvestSmart_',
      avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=80&h=80&fit=crop',
      timestamp: '1d ago',
      content: 'Portfolio update: Moved 20% into $DAGOS. Risk/reward ratio is insane at this stage. Thank me later 📈💰',
      likes: 512,
      retweets: 187,
      comments: 98
    }
  ];

  return (
    <section className="py-20 relative">
      {/* Section Header */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Social{' '}
          <span className="text-gradient">Buzz</span>
        </h2>
        <p className="text-xl text-white/80 max-w-3xl mx-auto">
          See what the crypto community is saying about DAGOS
        </p>
      </div>

      {/* Social Posts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {socialPosts.map((post, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="glass-strong border-white/10 hover:border-blue-400/50 hover:scale-[1.02] transition-all duration-300 group h-full">
              <CardContent className="p-6">
                {/* Header */}
                <div className="flex items-center gap-3 mb-4">
                  <img
                    src={post.avatar}
                    alt={post.username}
                    className="w-10 h-10 rounded-full ring-2 ring-blue-400/30"
                  />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="text-white font-medium truncate">
                        {post.username}
                      </span>
                      <Twitter className="w-4 h-4 text-blue-400 flex-shrink-0" />
                    </div>
                    <span className="text-xs text-white/50">{post.timestamp}</span>
                  </div>
                </div>

                {/* Content */}
                <p className="text-white/80 text-sm leading-relaxed mb-4">
                  {post.content}
                </p>

                {/* Interaction Stats */}
                <div className="flex items-center gap-6 text-sm text-white/60">
                  <div className="flex items-center gap-1.5 group/like cursor-pointer">
                    <Heart className="w-4 h-4 group-hover/like:text-red-400 transition-colors" />
                    <span className="group-hover/like:text-red-400 transition-colors">
                      {post.likes}
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 group/retweet cursor-pointer">
                    <Repeat className="w-4 h-4 group-hover/retweet:text-green-400 transition-colors" />
                    <span className="group-hover/retweet:text-green-400 transition-colors">
                      {post.retweets}
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 group/comment cursor-pointer">
                    <MessageCircle className="w-4 h-4 group-hover/comment:text-blue-400 transition-colors" />
                    <span className="group-hover/comment:text-blue-400 transition-colors">
                      {post.comments}
                    </span>
                  </div>
                </div>

                {/* Hover Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-cyan-500/0 group-hover:from-blue-500/5 group-hover:to-cyan-500/5 rounded-lg transition-all duration-300 pointer-events-none" />
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Social Media Links Footer */}
      <div className="text-center">
        <p className="text-white/70 mb-6">Follow us on:</p>
        <div className="flex justify-center gap-4">
          {/* Twitter */}
          <motion.a
            href="#"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="group"
          >
            <div className="w-12 h-12 rounded-xl glass-card border border-white/10 hover:border-blue-400/50 flex items-center justify-center transition-all duration-300 hover:bg-blue-500/20">
              <Twitter className="w-6 h-6 text-white/70 group-hover:text-blue-400 transition-colors" />
            </div>
          </motion.a>

          {/* Telegram */}
          <motion.a
            href="#"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="group"
          >
            <div className="w-12 h-12 rounded-xl glass-card border border-white/10 hover:border-cyan-400/50 flex items-center justify-center transition-all duration-300 hover:bg-cyan-500/20">
              <Send className="w-6 h-6 text-white/70 group-hover:text-cyan-400 transition-colors" />
            </div>
          </motion.a>

          {/* YouTube */}
          <motion.a
            href="#"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="group"
          >
            <div className="w-12 h-12 rounded-xl glass-card border border-white/10 hover:border-red-400/50 flex items-center justify-center transition-all duration-300 hover:bg-red-500/20">
              <Youtube className="w-6 h-6 text-white/70 group-hover:text-red-400 transition-colors" />
            </div>
          </motion.a>
        </div>
      </div>

      {/* Bottom Stats */}
      <div className="mt-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          <div className="text-center p-6 rounded-xl glass-card border border-white/10">
            <div className="text-3xl font-bold text-gradient mb-2">50K+</div>
            <div className="text-white/60 text-sm">Twitter Followers</div>
          </div>
          <div className="text-center p-6 rounded-xl glass-card border border-white/10">
            <div className="text-3xl font-bold text-gradient mb-2">25K+</div>
            <div className="text-white/60 text-sm">Telegram Members</div>
          </div>
          <div className="text-center p-6 rounded-xl glass-card border border-white/10">
            <div className="text-3xl font-bold text-gradient mb-2">18K+</div>
            <div className="text-white/60 text-sm">Discord Members</div>
          </div>
          <div className="text-center p-6 rounded-xl glass-card border border-white/10">
            <div className="text-3xl font-bold text-gradient mb-2">15K+</div>
            <div className="text-white/60 text-sm">YouTube Subscribers</div>
          </div>
        </div>
      </div>
    </section>
  );
}
