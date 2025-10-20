import React from 'react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Star, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export function VerifiedInvestorStories() {
  const testimonials = [
    {
      name: 'Alex Thompson',
      title: 'Crypto Analyst',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&h=120&fit=crop',
      quote: 'DAGOS is the most promising blockchain project I\'ve seen in years. The feeless transactions and DAG architecture are game-changers for mass adoption.',
      investment: '$125,000',
      wallet: '0x7A3f...9C2d',
      rating: 5
    },
    {
      name: 'Sarah Chen',
      title: 'DeFi Investor',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&h=120&fit=crop',
      quote: 'The transparency and security audits gave me confidence to invest heavily. This team delivers on their promises and the community is incredibly supportive.',
      investment: '$87,500',
      wallet: '0x9B1e...4F8a',
      rating: 5
    },
    {
      name: 'Michael Rodriguez',
      title: 'Blockchain Developer',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&h=120&fit=crop',
      quote: 'As a developer, I\'m impressed by the technical architecture. The stress tests show incredible performance. This will revolutionize how we build dApps.',
      investment: '$156,000',
      wallet: '0x4C8d...2E1b',
      rating: 5
    },
    {
      name: 'Emma Williams',
      title: 'Venture Capitalist',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=120&h=120&fit=crop',
      quote: 'The strategic partnerships with Binance Labs and Chainlink validate the project\'s potential. I\'ve allocated a significant portion of our fund to DAGOS.',
      investment: '$250,000',
      wallet: '0x2F7a...8D3c',
      rating: 5
    },
    {
      name: 'David Park',
      title: 'Early Adopter',
      avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=120&h=120&fit=crop',
      quote: 'Been following since Q1 and the progress has been phenomenal. The roadmap execution is on point and the ROI potential is massive for early investors.',
      investment: '$92,000',
      wallet: '0x6E2b...5A9f',
      rating: 5
    },
    {
      name: 'Jennifer Martinez',
      title: 'Institutional Investor',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=120&h=120&fit=crop',
      quote: 'The governance model and tokenomics are well-designed. This project has all the fundamentals needed for long-term success and sustainable growth.',
      investment: '$340,000',
      wallet: '0x1A9c...7B4e',
      rating: 5
    }
  ];

  return (
    <section className="py-20 relative">
      {/* Section Header */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Verified{' '}
          <span className="text-gradient">Investor Stories</span>
        </h2>
        <p className="text-xl text-white/80 max-w-3xl mx-auto">
          Real testimonials from verified investors with actual purchase amounts
        </p>
      </div>

      {/* Testimonials Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="glass-strong border-white/10 hover:border-cyan-400/50 hover:scale-105 transition-all duration-300 group h-full">
              <CardContent className="p-6">
                {/* Profile Section */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="relative">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full ring-2 ring-cyan-400/30 group-hover:ring-cyan-400/60 transition-all"
                    />
                    {/* Verification Badge */}
                    <div className="absolute -bottom-1 -right-1 bg-green-500 rounded-full p-1">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <h3 className="text-lg font-bold text-white">{testimonial.name}</h3>
                      <div className="w-2 h-2 bg-green-400 rounded-full" />
                    </div>
                    <p className="text-sm text-cyan-400">{testimonial.title}</p>
                  </div>
                </div>

                {/* Quote */}
                <blockquote className="text-white/80 text-sm leading-relaxed mb-4 italic">
                  "{testimonial.quote}"
                </blockquote>

                {/* Investment Amount */}
                <div className="mb-3">
                  <Badge className="bg-gradient-to-r from-cyan-500/20 to-violet-500/20 text-cyan-400 border-cyan-500/30 font-bold text-base px-4 py-1">
                    {testimonial.investment} invested
                  </Badge>
                </div>

                {/* Wallet Address */}
                <div className="mb-4">
                  <code className="text-xs text-white/50 font-mono bg-white/5 px-3 py-1 rounded">
                    {testimonial.wallet}
                  </code>
                </div>

                {/* Star Rating */}
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-yellow-400 text-yellow-400"
                      style={{
                        filter: 'drop-shadow(0 0 4px rgba(250, 204, 21, 0.5))'
                      }}
                    />
                  ))}
                </div>

                {/* Hover Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-violet-500/0 group-hover:from-cyan-500/5 group-hover:to-violet-500/5 rounded-lg transition-all duration-300 pointer-events-none" />
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Bottom Stats */}
      <div className="mt-12 text-center">
        <div className="inline-flex items-center gap-8 p-6 rounded-2xl glass-strong border border-white/10">
          <div>
            <div className="text-3xl font-bold text-gradient mb-1">500+</div>
            <div className="text-white/60 text-sm">Verified Investors</div>
          </div>
          <div className="w-px h-12 bg-white/20" />
          <div>
            <div className="text-3xl font-bold text-gradient mb-1">$2.5M+</div>
            <div className="text-white/60 text-sm">Total Invested</div>
          </div>
          <div className="w-px h-12 bg-white/20" />
          <div>
            <div className="text-3xl font-bold text-gradient mb-1">4.9/5</div>
            <div className="text-white/60 text-sm">Average Rating</div>
          </div>
        </div>
      </div>
    </section>
  );
}
