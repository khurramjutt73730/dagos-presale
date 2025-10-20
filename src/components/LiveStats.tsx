import React, { useState, useEffect } from 'react';
import { TrendingUp, Users, DollarSign, Clock } from 'lucide-react';
import { Card, CardContent } from './ui/card';

interface LiveStatsProps {
  className?: string;
}

interface StatData {
  label: string;
  value: string;
  change: string;
  icon: React.ReactNode;
  color: string;
}

export function LiveStats({ className = '' }: LiveStatsProps) {
  const [stats, setStats] = useState<StatData[]>([
    {
      label: 'Total Raised',
      value: '$1,350,000',
      change: '+$15,230',
      icon: <DollarSign className="w-5 h-5" />,
      color: 'text-lime-400'
    },
    {
      label: 'Token Holders',
      value: '2,847',
      change: '+127',
      icon: <Users className="w-5 h-5" />,
      color: 'text-cyan-400'
    },
    {
      label: 'Tokens Sold',
      value: '45M',
      change: '+1.2M',
      icon: <TrendingUp className="w-5 h-5" />,
      color: 'text-purple-400'
    },
    {
      label: 'Time Left',
      value: '15d 8h',
      change: 'Phase 2',
      icon: <Clock className="w-5 h-5" />,
      color: 'text-orange-400'
    }
  ]);

  useEffect(() => {
    // Simulate real-time updates
    const interval = setInterval(() => {
      setStats(prevStats => 
        prevStats.map(stat => {
          if (stat.label === 'Total Raised') {
            const currentValue = parseInt(stat.value.replace(/[$,]/g, ''));
            const newValue = currentValue + Math.floor(Math.random() * 1000);
            return {
              ...stat,
              value: `$${newValue.toLocaleString()}`,
              change: `+$${Math.floor(Math.random() * 500) + 100}`
            };
          }
          if (stat.label === 'Token Holders') {
            const currentValue = parseInt(stat.value.replace(/,/g, ''));
            const newValue = currentValue + Math.floor(Math.random() * 5);
            return {
              ...stat,
              value: newValue.toLocaleString(),
              change: `+${Math.floor(Math.random() * 10) + 1}`
            };
          }
          return stat;
        })
      );
    }, 30000); // Update every 30 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 ${className}`}>
      {stats.map((stat, index) => (
        <Card key={index} className="glass-strong border-white/10 hover:border-cyan-400/50 transition-all duration-500 group overflow-hidden relative">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 via-transparent to-lime-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <CardContent className="p-4 lg:p-6 relative z-10">
            <div className="flex items-center justify-between mb-3">
              <div className={`p-3 rounded-xl bg-gradient-to-br from-white/10 to-white/5 ${stat.color} group-hover:scale-110 transition-transform duration-300`}>
                {stat.icon}
              </div>
              <div className="text-xs text-green-400 bg-green-500/20 px-2 py-1 rounded-full border border-green-400/30 pulse-cyan">
                {stat.change}
              </div>
            </div>
            <div className="space-y-2">
              <div className={`text-2xl lg:text-3xl font-bold ${stat.color} group-hover:glow-cyan transition-all duration-300`}>
                {stat.value}
              </div>
              <div className="text-sm text-white/70 group-hover:text-white/90 transition-colors">
                {stat.label}
              </div>
            </div>
            {/* Animated background pulse */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 to-lime-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}