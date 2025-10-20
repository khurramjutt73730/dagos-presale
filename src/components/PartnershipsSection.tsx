import React from 'react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { ArrowRight, Link2, Sparkles, Gamepad2 } from 'lucide-react';

export function PartnershipsSection() {
  const partnerships = [
    {
      name: 'ChainLink',
      type: 'Oracle Partnership',
      date: 'August 2024',
      status: 'Active',
      description: 'Integration of Chainlink\'s decentralized oracle network to provide secure, reliable real-world data feeds for DAGOS smart contracts and DeFi applications.',
      icon: <Link2 className="w-8 h-8" />,
      gradient: 'from-blue-500 to-cyan-500',
      glowColor: 'cyan'
    },
    {
      name: 'Binance Labs',
      type: 'Investment & Incubation',
      date: 'July 2024',
      status: 'Active',
      description: 'Strategic investment and mentorship from Binance Labs accelerator program, providing resources, guidance, and access to the global Binance ecosystem.',
      icon: <Sparkles className="w-8 h-8" />,
      gradient: 'from-yellow-500 to-orange-500',
      glowColor: 'yellow'
    },
    {
      name: 'Polygon Studios',
      type: 'Gaming & NFT Integration',
      date: 'Coming Q1 2025',
      status: 'Upcoming',
      description: 'Collaboration with Polygon Studios to integrate DAGOS into gaming ecosystems and NFT marketplaces, enabling high-speed, low-cost transactions for Web3 games.',
      icon: <Gamepad2 className="w-8 h-8" />,
      gradient: 'from-purple-500 to-pink-500',
      glowColor: 'purple'
    }
  ];

  return (
    <section className="py-20">
      {/* Section Header */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Strategic{' '}
          <span className="text-gradient">Partnerships</span>
        </h2>
        <p className="text-xl text-white/70 max-w-3xl mx-auto">
          Collaborating with industry leaders to build the feeless blockchain ecosystem
        </p>
      </div>

      {/* Partnerships Grid */}
      <div className="space-y-6">
        {partnerships.map((partnership, index) => (
          <Card
            key={index}
            className={`glass-strong border-white/10 hover:border-${partnership.glowColor}-400/50 transition-all duration-300 group relative overflow-hidden`}
          >
            {/* Gradient border glow on hover */}
            <div className={`absolute inset-0 bg-gradient-to-r ${partnership.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
            
            <CardContent className="p-6 md:p-8 relative">
              <div className="flex flex-col md:flex-row gap-6 items-start">
                {/* Icon */}
                <div className={`p-4 rounded-2xl bg-gradient-to-br ${partnership.gradient} bg-opacity-20 flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                  <div className="text-white">
                    {partnership.icon}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">
                        {partnership.name}
                      </h3>
                      <p className="text-cyan-400 mb-2">{partnership.type}</p>
                    </div>
                    <div className="text-right">
                      <Badge className={`${
                        partnership.status === 'Active'
                          ? 'bg-green-500/20 text-green-400 border-green-500/30'
                          : 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30'
                      } mb-2`}>
                        {partnership.status}
                      </Badge>
                      <p className="text-sm text-white/60">{partnership.date}</p>
                    </div>
                  </div>

                  <p className="text-white/70 leading-relaxed mb-4">
                    {partnership.description}
                  </p>

                  {/* Learn More Link */}
                  <button className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors group/link">
                    <span className="text-sm font-medium">Learn More</span>
                    <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Partnership Stats */}
      <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
        <div className="text-center">
          <div className="text-3xl font-bold text-gradient mb-2">10+</div>
          <div className="text-white/60 text-sm">Strategic Partners</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold text-gradient mb-2">$50M+</div>
          <div className="text-white/60 text-sm">Total Investment</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold text-gradient mb-2">5</div>
          <div className="text-white/60 text-sm">Ecosystem Integrations</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold text-gradient mb-2">15+</div>
          <div className="text-white/60 text-sm">Countries Reached</div>
        </div>
      </div>
    </section>
  );
}
