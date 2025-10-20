import React from 'react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Progress } from './ui/progress';
import { Button } from './ui/button';
import { 
  Github, 
  GitCommit, 
  Users, 
  ExternalLink,
  CheckCircle,
  Code,
  Shield,
  Wallet,
  ArrowUpRight
} from 'lucide-react';

export function DevelopmentTransparency() {
  const githubStats = {
    totalCommits: '2,847',
    contributors: '42',
    recentUpdates: [
      {
        title: 'Core Protocol v2.1.0',
        date: 'Oct 8, 2024',
        type: 'release',
        icon: <Code className="w-4 h-4" />
      },
      {
        title: 'Smart Contract Audits',
        date: 'Oct 5, 2024',
        type: 'security',
        icon: <Shield className="w-4 h-4" />
      },
      {
        title: 'Wallet Integration',
        date: 'Oct 2, 2024',
        type: 'feature',
        icon: <Wallet className="w-4 h-4" />
      }
    ]
  };

  const technicalProgress = [
    { name: 'Consensus Algorithm', progress: 100, color: 'lime' },
    { name: 'Network Security', progress: 95, color: 'green' },
    { name: 'Wallet Integration', progress: 80, color: 'cyan' },
    { name: 'Exchange APIs', progress: 65, color: 'blue' }
  ];

  const recentDevelopments = [
    {
      title: 'Mainnet Beta Launch',
      date: 'Oct 10, 2024',
      status: 'completed'
    },
    {
      title: 'Multi-Sig Wallet Implementation',
      date: 'Oct 7, 2024',
      status: 'completed'
    },
    {
      title: 'Cross-Chain Bridge Development',
      date: 'Oct 3, 2024',
      status: 'in-progress'
    },
    {
      title: 'Mobile Wallet SDK Release',
      date: 'Sep 28, 2024',
      status: 'completed'
    }
  ];

  return (
    <section className="py-20">
      {/* Section Header */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Development{' '}
          <span className="text-gradient">Transparency</span>
        </h2>
        <p className="text-xl text-white/70 max-w-3xl mx-auto">
          Open-source development with full transparency and community involvement
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* GitHub Activity */}
        <Card className="glass-strong border-white/10">
          <CardContent className="p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20">
                <Github className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="text-2xl font-bold text-white">GitHub Activity</h3>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="p-6 rounded-xl glass-card border border-white/5">
                <div className="flex items-center gap-3 mb-2">
                  <GitCommit className="w-5 h-5 text-cyan-400" />
                  <span className="text-white/60 text-sm">Total Commits</span>
                </div>
                <div className="text-3xl font-bold text-gradient">
                  {githubStats.totalCommits}
                </div>
              </div>

              <div className="p-6 rounded-xl glass-card border border-white/5">
                <div className="flex items-center gap-3 mb-2">
                  <Users className="w-5 h-5 text-violet-400" />
                  <span className="text-white/60 text-sm">Contributors</span>
                </div>
                <div className="text-3xl font-bold text-gradient">
                  {githubStats.contributors}
                </div>
              </div>
            </div>

            {/* Recent Updates */}
            <div className="mb-6">
              <h4 className="text-lg font-semibold text-white mb-4">Recent Updates</h4>
              <div className="space-y-3">
                {githubStats.recentUpdates.map((update, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
                  >
                    <div className={`p-2 rounded-lg ${
                      update.type === 'release' 
                        ? 'bg-lime-500/20 text-lime-400'
                        : update.type === 'security'
                          ? 'bg-red-500/20 text-red-400'
                          : 'bg-cyan-500/20 text-cyan-400'
                    }`}>
                      {update.icon}
                    </div>
                    <div className="flex-1">
                      <div className="text-white font-medium">{update.title}</div>
                      <div className="text-white/60 text-sm">{update.date}</div>
                    </div>
                    <CheckCircle className="w-5 h-5 text-lime-400" />
                  </div>
                ))}
              </div>
            </div>

            {/* View Repository Button */}
            <Button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white">
              <Github className="w-4 h-4 mr-2" />
              View Full Repository
              <ExternalLink className="w-4 h-4 ml-2" />
            </Button>
          </CardContent>
        </Card>

        {/* Technical Progress */}
        <Card className="glass-strong border-white/10">
          <CardContent className="p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20">
                <ArrowUpRight className="w-6 h-6 text-cyan-400" />
              </div>
              <h3 className="text-2xl font-bold text-white">Technical Progress</h3>
            </div>

            {/* Progress Bars */}
            <div className="space-y-6 mb-8">
              {technicalProgress.map((item, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-2">
                    <span className="text-white font-medium">{item.name}</span>
                    <span className={`text-${item.color}-400 font-bold`}>
                      {item.progress}%
                    </span>
                  </div>
                  <div className="relative h-3 bg-white/5 rounded-full overflow-hidden">
                    <div
                      className={`absolute inset-y-0 left-0 bg-gradient-to-r from-${item.color}-400 to-${item.color}-600 rounded-full transition-all duration-1000 ease-out`}
                      style={{ width: `${item.progress}%` }}
                    >
                      {/* Glow effect */}
                      <div className={`absolute inset-0 bg-gradient-to-r from-${item.color}-400 to-${item.color}-600 blur-sm opacity-50`} />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Gradient Divider */}
            <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-6" />

            {/* Recent Developments */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Recent Developments</h4>
              <div className="space-y-3">
                {recentDevelopments.map((dev, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3"
                  >
                    <div className={`w-2 h-2 rounded-full flex-shrink-0 mt-2 ${
                      dev.status === 'completed' 
                        ? 'bg-lime-400' 
                        : 'bg-cyan-400 animate-pulse'
                    }`} />
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-white font-medium">{dev.title}</span>
                        {dev.status === 'completed' && (
                          <CheckCircle className="w-4 h-4 text-lime-400" />
                        )}
                      </div>
                      <div className="text-white/60 text-sm">{dev.date}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Bottom Stats */}
      <div className="mt-12">
        <Card className="glass-strong border-white/10">
          <CardContent className="p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-gradient mb-2">100%</div>
                <div className="text-white/60">Open Source</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gradient mb-2">24/7</div>
                <div className="text-white/60">Development</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gradient mb-2">3</div>
                <div className="text-white/60">Security Audits</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gradient mb-2">98%</div>
                <div className="text-white/60">Test Coverage</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
