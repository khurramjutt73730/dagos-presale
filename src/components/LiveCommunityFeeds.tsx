import React from 'react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { ArrowRight, MessageCircle, Users } from 'lucide-react';
import { motion } from 'framer-motion';

export function LiveCommunityFeeds() {
  const telegramMessages = [
    {
      username: 'CryptoWhale_92',
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=40&h=40&fit=crop',
      timestamp: '2m ago',
      message: 'Just bought another 50k DAGOS! 🚀 This is going to the moon! 💎🙌'
    },
    {
      username: 'BlockchainDev',
      avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=40&h=40&fit=crop',
      timestamp: '5m ago',
      message: 'The DAG architecture is genius. Finally a truly feeless blockchain! ⚡'
    },
    {
      username: 'DeFi_Queen',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=40&h=40&fit=crop',
      timestamp: '8m ago',
      message: 'Love the transparency from the team. Regular AMAs are amazing! 👏'
    },
    {
      username: 'TokenMaster',
      avatar: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=40&h=40&fit=crop',
      timestamp: '12m ago',
      message: 'Referral program is 🔥 Already earned 2.5 ETH in rewards!'
    }
  ];

  const discordMessages = [
    {
      username: 'NightTrader',
      avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=40&h=40&fit=crop',
      timestamp: '1m ago',
      message: 'GM everyone! Ready for today\'s AMA? 🌅'
    },
    {
      username: 'SmartContract_Pro',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop',
      timestamp: '4m ago',
      message: 'Just reviewed the audit report. Security looks solid! ✅🛡️'
    },
    {
      username: 'CryptoEnthusiast',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop',
      timestamp: '7m ago',
      message: 'Best community in crypto! You guys are awesome! 💪'
    },
    {
      username: 'InvestorVIP',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=40&h=40&fit=crop',
      timestamp: '10m ago',
      message: 'Loaded up 100k more tokens. Early bird gets the worm! 🐦'
    }
  ];

  return (
    <section className="py-20 relative">
      {/* Section Header */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Live{' '}
          <span className="text-gradient">Community Feeds</span>
        </h2>
        <p className="text-xl text-white/80 max-w-3xl mx-auto">
          Real-time discussions and updates from our vibrant community across all platforms
        </p>
      </div>

      {/* Two-Column Feed Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Telegram Feed */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Card className="glass-strong border-blue-500/30 hover:border-blue-400/50 transition-all duration-300 h-full">
            <CardContent className="p-6">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500">
                    <MessageCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Telegram</h3>
                    <p className="text-sm text-white/60 flex items-center gap-2">
                      <Users className="w-4 h-4" />
                      25,847 members
                    </p>
                  </div>
                </div>
                
                {/* Live Indicator */}
                <div className="flex items-center gap-2">
                  <div className="relative">
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                    <div className="absolute inset-0 w-3 h-3 bg-green-400 rounded-full animate-ping" />
                  </div>
                  <span className="text-sm text-green-400 font-medium">Live now</span>
                </div>
              </div>

              {/* Messages Feed */}
              <div className="space-y-4 mb-6 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
                {telegramMessages.map((msg, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex gap-3 p-3 rounded-lg bg-gradient-to-r from-blue-500/10 to-transparent hover:from-blue-500/20 transition-all duration-300"
                  >
                    <img
                      src={msg.avatar}
                      alt={msg.username}
                      className="w-10 h-10 rounded-full ring-2 ring-blue-400/30"
                    />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-medium text-blue-400">{msg.username}</span>
                        <span className="text-xs text-white/40">{msg.timestamp}</span>
                      </div>
                      <p className="text-sm text-white/80 leading-relaxed">{msg.message}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Join Button */}
              <Button className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white group">
                Join Telegram
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </CardContent>
          </Card>
        </motion.div>

        {/* Discord Feed */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Card className="glass-strong border-purple-500/30 hover:border-purple-400/50 transition-all duration-300 h-full">
            <CardContent className="p-6">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-purple-500 to-indigo-600">
                    <MessageCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Discord</h3>
                    <p className="text-sm text-white/60 flex items-center gap-2">
                      <Users className="w-4 h-4" />
                      18,392 members
                    </p>
                  </div>
                </div>
                
                {/* Live Indicator */}
                <div className="flex items-center gap-2">
                  <div className="relative">
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                    <div className="absolute inset-0 w-3 h-3 bg-green-400 rounded-full animate-ping" />
                  </div>
                  <span className="text-sm text-green-400 font-medium">Live now</span>
                </div>
              </div>

              {/* Messages Feed */}
              <div className="space-y-4 mb-6 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
                {discordMessages.map((msg, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 + 0.2 }}
                    className="flex gap-3 p-3 rounded-lg bg-gradient-to-r from-purple-500/10 to-transparent hover:from-purple-500/20 transition-all duration-300"
                  >
                    <img
                      src={msg.avatar}
                      alt={msg.username}
                      className="w-10 h-10 rounded-full ring-2 ring-purple-400/30"
                    />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-medium text-purple-400">{msg.username}</span>
                        <span className="text-xs text-white/40">{msg.timestamp}</span>
                      </div>
                      <p className="text-sm text-white/80 leading-relaxed">{msg.message}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Join Button */}
              <Button className="w-full bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 text-white group">
                Join Discord
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
