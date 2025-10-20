import React from 'react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Video, ThumbsUp, Upload, Clock, TrendingUp, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

export function ContentCreationChallenge() {
  const submissions = [
    {
      username: 'TechReviewer99',
      title: 'DAGOS vs Ethereum: The Feeless Future',
      votes: 127,
      type: 'video',
      timestamp: '2 hours ago'
    },
    {
      username: 'CryptoMemeKing',
      title: 'Top 10 Reasons Why DAGOS Will Moon 🚀',
      votes: 94,
      type: 'article',
      timestamp: '5 hours ago'
    },
    {
      username: 'BlockchainEducator',
      title: 'Deep Dive: DAG Technology Explained Simply',
      votes: 156,
      type: 'video',
      timestamp: '1 day ago'
    }
  ];

  return (
    <section className="py-20 relative">
      <Card className="glass-strong border-purple-500/30 max-w-4xl mx-auto">
        <CardContent className="p-8 md:p-12">
          {/* Header */}
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-8">
            {/* Icon */}
            <div className="p-4 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex-shrink-0">
              <Sparkles className="w-10 h-10 text-white" />
            </div>

            {/* Title & Description */}
            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-3 mb-3">
                <h2 className="text-3xl md:text-4xl font-bold text-white">
                  Content{' '}
                  <span className="text-gradient">Creators</span>
                  {' '}Challenge
                </h2>
                <Badge className="bg-yellow-500/20 text-yellow-400 border-yellow-500/30 flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  Ends in 8 days
                </Badge>
              </div>
              <p className="text-white/70 text-lg leading-relaxed">
                Create DAGOS content and win rewards! Share videos, memes, articles, or infographics. 
                Top voted submissions win bonus tokens, NFTs, and featured spots on our official channels.
              </p>
            </div>
          </div>

          {/* Gradient Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-purple-400/50 to-transparent mb-8" />

          {/* Recent Submissions */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-purple-400" />
              Top Submissions
            </h3>
            
            <div className="space-y-4">
              {submissions.map((submission, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="glass-card border border-white/10 hover:border-purple-400/50 rounded-xl p-4 transition-all duration-300 group"
                >
                  <div className="flex items-center gap-4">
                    {/* Type Icon */}
                    <div className="p-3 rounded-lg bg-purple-500/20 group-hover:bg-purple-500/30 transition-colors">
                      <Video className="w-5 h-5 text-purple-400" />
                    </div>

                    {/* Content Info */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-sm font-medium text-purple-400">
                          {submission.username}
                        </span>
                        <span className="text-xs text-white/40">
                          {submission.timestamp}
                        </span>
                      </div>
                      <h4 className="text-white font-medium truncate mb-1">
                        {submission.title}
                      </h4>
                    </div>

                    {/* Vote Count */}
                    <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-pink-500/20 to-purple-500/20 border border-pink-500/30 group-hover:scale-110 transition-transform">
                      <ThumbsUp className="w-4 h-4 text-pink-400" />
                      <span className="font-bold text-pink-400">
                        +{submission.votes}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Rewards Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <div className="glass-card border border-white/10 rounded-xl p-4 text-center">
              <div className="text-2xl mb-2">🥇</div>
              <div className="text-white font-bold mb-1">1st Place</div>
              <div className="text-sm text-purple-400">50,000 DAGOS + NFT</div>
            </div>
            <div className="glass-card border border-white/10 rounded-xl p-4 text-center">
              <div className="text-2xl mb-2">🥈</div>
              <div className="text-white font-bold mb-1">2nd Place</div>
              <div className="text-sm text-purple-400">30,000 DAGOS</div>
            </div>
            <div className="glass-card border border-white/10 rounded-xl p-4 text-center">
              <div className="text-2xl mb-2">🥉</div>
              <div className="text-white font-bold mb-1">3rd Place</div>
              <div className="text-sm text-purple-400">15,000 DAGOS</div>
            </div>
          </div>

          {/* Submit Button */}
          <Button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white text-lg py-6 group shadow-2xl">
            <Upload className="w-5 h-5 mr-2" />
            Submit Your Content
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg blur-xl opacity-50" />
          </Button>

          {/* Guidelines */}
          <div className="mt-6 p-4 rounded-lg bg-blue-500/10 border border-blue-500/20">
            <p className="text-sm text-white/70 text-center">
              <strong className="text-blue-400">Guidelines:</strong> Content must be original, 
              DAGOS-related, and follow community standards. Voting is open to all community members.
            </p>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
