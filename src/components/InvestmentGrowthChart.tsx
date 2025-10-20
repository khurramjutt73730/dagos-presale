import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { TrendingUp, Calendar } from 'lucide-react';
import { Tabs, TabsList, TabsTrigger } from './ui/tabs';

interface InvestmentGrowthChartProps {
  className?: string;
  isDarkMode?: boolean;
}

export function InvestmentGrowthChart({ className = '', isDarkMode = true }: InvestmentGrowthChartProps) {
  const [timeRange, setTimeRange] = useState<'7d' | '30d' | '90d' | 'all'>('30d');

  // Mock data for investment growth
  const data = {
    '7d': [
      { date: 'Oct 4', value: 3200, invested: 3000 },
      { date: 'Oct 5', value: 3350, invested: 3000 },
      { date: 'Oct 6', value: 3500, invested: 3200 },
      { date: 'Oct 7', value: 3650, invested: 3200 },
      { date: 'Oct 8', value: 3800, invested: 3500 },
      { date: 'Oct 9', value: 3950, invested: 3500 },
      { date: 'Oct 10', value: 4200, invested: 3750 }
    ],
    '30d': [
      { date: 'Sep 10', value: 1500, invested: 1500 },
      { date: 'Sep 15', value: 1750, invested: 1650 },
      { date: 'Sep 20', value: 2100, invested: 2000 },
      { date: 'Sep 25', value: 2500, invested: 2400 },
      { date: 'Sep 30', value: 2850, invested: 2700 },
      { date: 'Oct 5', value: 3500, invested: 3200 },
      { date: 'Oct 10', value: 4200, invested: 3750 }
    ],
    '90d': [
      { date: 'Jul 10', value: 500, invested: 500 },
      { date: 'Jul 25', value: 800, invested: 750 },
      { date: 'Aug 10', value: 1200, invested: 1100 },
      { date: 'Aug 25', value: 1650, invested: 1550 },
      { date: 'Sep 10', value: 2200, invested: 2000 },
      { date: 'Sep 25', value: 3100, invested: 2800 },
      { date: 'Oct 10', value: 4200, invested: 3750 }
    ],
    'all': [
      { date: 'Jun', value: 250, invested: 250 },
      { date: 'Jul', value: 900, invested: 850 },
      { date: 'Aug', value: 1850, invested: 1700 },
      { date: 'Sep', value: 3200, invested: 2900 },
      { date: 'Oct', value: 4200, invested: 3750 }
    ]
  };

  const chartData = data[timeRange];

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className={`p-3 rounded-lg border ${
          isDarkMode 
            ? 'bg-[#0B0C10] border-white/20' 
            : 'bg-white border-gray-200'
        }`}>
          <p className={`text-sm mb-1 ${isDarkMode ? 'text-white/70' : 'text-gray-600'}`}>
            {payload[0].payload.date}
          </p>
          <p className="text-sm">
            <span className="text-cyan-400">Current Value: </span>
            <span className={isDarkMode ? 'text-white' : 'text-gray-900'}>
              ${payload[0].value.toLocaleString()}
            </span>
          </p>
          <p className="text-sm">
            <span className="text-violet-400">Invested: </span>
            <span className={isDarkMode ? 'text-white' : 'text-gray-900'}>
              ${payload[0].payload.invested.toLocaleString()}
            </span>
          </p>
          <p className="text-sm mt-1">
            <span className="text-lime-400">Profit: </span>
            <span className={isDarkMode ? 'text-white' : 'text-gray-900'}>
              ${(payload[0].value - payload[0].payload.invested).toLocaleString()}
            </span>
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <Card className={`${isDarkMode ? 'bg-[#0B0C10] border-white/10' : 'bg-white border-gray-200'} ${className}`}>
      <CardHeader>
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div className="flex items-center gap-3">
            <div className={`p-2 rounded-lg ${
              isDarkMode 
                ? 'bg-gradient-to-br from-cyan-500/20 to-violet-500/20' 
                : 'bg-gradient-to-br from-cyan-100 to-violet-100'
            }`}>
              <TrendingUp className={isDarkMode ? 'w-5 h-5 text-cyan-400' : 'w-5 h-5 text-cyan-600'} />
            </div>
            <div>
              <CardTitle className={isDarkMode ? 'text-white' : 'text-gray-900'}>
                Investment Growth Overview
              </CardTitle>
              <p className={`text-sm mt-1 ${isDarkMode ? 'text-white/60' : 'text-gray-600'}`}>
                Track your portfolio performance
              </p>
            </div>
          </div>

          <Tabs value={timeRange} onValueChange={(v) => setTimeRange(v as any)}>
            <TabsList className={isDarkMode ? 'bg-white/5' : 'bg-gray-100'}>
              <TabsTrigger value="7d" className={isDarkMode ? 'data-[state=active]:bg-cyan-500/20 data-[state=active]:text-cyan-400' : ''}>
                7D
              </TabsTrigger>
              <TabsTrigger value="30d" className={isDarkMode ? 'data-[state=active]:bg-cyan-500/20 data-[state=active]:text-cyan-400' : ''}>
                30D
              </TabsTrigger>
              <TabsTrigger value="90d" className={isDarkMode ? 'data-[state=active]:bg-cyan-500/20 data-[state=active]:text-cyan-400' : ''}>
                90D
              </TabsTrigger>
              <TabsTrigger value="all" className={isDarkMode ? 'data-[state=active]:bg-cyan-500/20 data-[state=active]:text-cyan-400' : ''}>
                All
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </CardHeader>
      <CardContent>
        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={chartData}>
              <defs>
                <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#00FFF0" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#8A2BE2" stopOpacity={0.1} />
                </linearGradient>
              </defs>
              <CartesianGrid 
                strokeDasharray="3 3" 
                stroke={isDarkMode ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.1)'} 
                vertical={false}
              />
              <XAxis 
                dataKey="date" 
                stroke={isDarkMode ? 'rgba(255,255,255,0.5)' : 'rgba(0,0,0,0.5)'}
                style={{ fontSize: '12px' }}
              />
              <YAxis 
                stroke={isDarkMode ? 'rgba(255,255,255,0.5)' : 'rgba(0,0,0,0.5)'}
                style={{ fontSize: '12px' }}
                tickFormatter={(value) => `$${value}`}
              />
              <Tooltip content={<CustomTooltip />} />
              <Area 
                type="monotone" 
                dataKey="value" 
                stroke="#00FFF0" 
                strokeWidth={2}
                fill="url(#colorValue)" 
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
