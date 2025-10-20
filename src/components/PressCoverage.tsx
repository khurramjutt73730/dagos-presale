import React from 'react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { ArrowRight, ExternalLink, Clock, Video } from 'lucide-react';
import { motion } from 'framer-motion';

export function PressCoverage() {
  const pressArticles = [
    {
      outlet: 'CoinDesk',
      outletInitials: 'CD',
      outletColor: 'from-orange-500 to-red-500',
      image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=600&h=340&fit=crop',
      headline: 'DAGOS: The Feeless Blockchain That Could Revolutionize DeFi',
      description: 'New DAG-based blockchain promises instant, feeless transactions with unprecedented scalability, attracting major institutional investors.',
      timestamp: '2 days ago',
      type: 'article'
    },
    {
      outlet: 'CoinTelegraph',
      outletInitials: 'CT',
      outletColor: 'from-blue-500 to-cyan-500',
      image: 'https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=600&h=340&fit=crop',
      headline: 'Binance Labs Invests in DAGOS Ecosystem Development',
      description: 'Strategic partnership announcement signals growing confidence in next-generation blockchain infrastructure and mass adoption potential.',
      timestamp: '5 days ago',
      type: 'article'
    },
    {
      outlet: 'Crypto Banter',
      outletInitials: 'CB',
      outletColor: 'from-red-500 to-pink-500',
      image: 'https://images.unsplash.com/photo-1639322537228-f710d846310a?w=600&h=340&fit=crop',
      headline: 'Why DAGOS Could Be the Next 100x Crypto Gem',
      description: 'Deep dive into DAGOS tokenomics, technology stack, and market positioning. Expert analysis reveals massive growth potential for early adopters.',
      timestamp: '1 week ago',
      type: 'video'
    },
    {
      outlet: 'Decrypt',
      outletInitials: 'DC',
      outletColor: 'from-purple-500 to-indigo-600',
      image: 'https://images.unsplash.com/photo-1642790106117-e829e14a795f?w=600&h=340&fit=crop',
      headline: 'DAG Technology Explained: How DAGOS Achieves Feeless Transactions',
      description: 'Technical breakdown of the innovative architecture powering DAGOS and why it represents a paradigm shift in blockchain scalability.',
      timestamp: '1 week ago',
      type: 'article'
    },
    {
      outlet: 'BeInCrypto',
      outletInitials: 'BC',
      outletColor: 'from-green-500 to-teal-500',
      image: 'https://images.unsplash.com/photo-1620321023374-d1a68fbc720d?w=600&h=340&fit=crop',
      headline: 'DAGOS Presale Hits $2M Milestone in Record Time',
      description: 'Community-driven presale demonstrates strong market demand for feeless blockchain solutions. Analysts predict continued momentum.',
      timestamp: '2 weeks ago',
      type: 'article'
    },
    {
      outlet: 'Cointelegraph',
      outletInitials: 'CT',
      outletColor: 'from-blue-500 to-cyan-500',
      image: 'https://images.unsplash.com/photo-1644361566696-3d442b5b482a?w=600&h=340&fit=crop',
      headline: 'Expert Panel: DAGOS Among Top 5 Projects to Watch in 2025',
      description: 'Industry leaders and crypto analysts highlight DAGOS as a standout project with revolutionary technology and strong fundamentals.',
      timestamp: '3 weeks ago',
      type: 'article'
    }
  ];

  return (
    <section className="py-20 relative">
      {/* Section Header */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Press{' '}
          <span className="text-gradient">Coverage</span>
        </h2>
        <p className="text-xl text-white/80 max-w-3xl mx-auto">
          Leading crypto media outlets are talking about DAGOS
        </p>
      </div>

      {/* Articles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {pressArticles.map((article, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="glass-strong border-white/10 hover:border-cyan-400/50 hover:scale-[1.02] transition-all duration-300 group h-full overflow-hidden">
              <CardContent className="p-0">
                {/* Hero Image */}
                <div className="relative overflow-hidden aspect-video">
                  <img
                    src={article.image}
                    alt={article.headline}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {/* Video Badge if applicable */}
                  {article.type === 'video' && (
                    <div className="absolute top-3 right-3 bg-red-500 rounded-full p-2">
                      <Video className="w-4 h-4 text-white" />
                    </div>
                  )}
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0E2A] via-transparent to-transparent" />
                </div>

                <div className="p-6">
                  {/* Outlet Badge */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${article.outletColor} flex items-center justify-center flex-shrink-0`}>
                      <span className="text-white text-xs font-bold">
                        {article.outletInitials}
                      </span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-white font-medium">{article.outlet}</div>
                      <div className="flex items-center gap-2 text-xs text-white/50">
                        <Clock className="w-3 h-3" />
                        {article.timestamp}
                      </div>
                    </div>
                  </div>

                  {/* Headline */}
                  <h3 className="text-lg font-bold text-white mb-3 line-clamp-2 group-hover:text-cyan-400 transition-colors">
                    {article.headline}
                  </h3>

                  {/* Description */}
                  <p className="text-white/70 text-sm leading-relaxed mb-4 line-clamp-3">
                    {article.description}
                  </p>

                  {/* CTA */}
                  <Button
                    variant="ghost"
                    className="w-full justify-between group/btn text-cyan-400 hover:text-cyan-300 hover:bg-cyan-500/10"
                  >
                    <span>{article.type === 'video' ? 'Watch Video' : 'Read Full Article'}</span>
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Bottom Stats */}
      <div className="mt-16 text-center">
        <div className="inline-flex items-center gap-8 p-6 rounded-2xl glass-strong border border-white/10">
          <div>
            <div className="text-3xl font-bold text-gradient mb-1">25+</div>
            <div className="text-white/60 text-sm">Media Mentions</div>
          </div>
          <div className="w-px h-12 bg-white/20" />
          <div>
            <div className="text-3xl font-bold text-gradient mb-1">5M+</div>
            <div className="text-white/60 text-sm">Combined Reach</div>
          </div>
          <div className="w-px h-12 bg-white/20" />
          <div>
            <div className="text-3xl font-bold text-gradient mb-1">15</div>
            <div className="text-white/60 text-sm">Top Publications</div>
          </div>
        </div>
      </div>
    </section>
  );
}
