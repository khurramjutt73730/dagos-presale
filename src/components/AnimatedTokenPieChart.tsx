import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { PieChart, Pie, Cell, ResponsiveContainer, Sector } from 'recharts';
import { motion } from 'motion/react';
import { Coins } from 'lucide-react';

interface ChartDataItem {
  name: string;
  value: number;
  tokens: number;
  color: string;
}

const renderActiveShape = (props: any) => {
  const {
    cx,
    cy,
    innerRadius,
    outerRadius,
    startAngle,
    endAngle,
    fill,
    payload,
    percent,
  } = props;

  return (
    <g>
      <defs>
        <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur in="SourceAlpha" stdDeviation="3"/>
          <feOffset dx="0" dy="2" result="offsetblur"/>
          <feComponentTransfer>
            <feFuncA type="linear" slope="0.5"/>
          </feComponentTransfer>
          <feMerge> 
            <feMergeNode/>
            <feMergeNode in="SourceGraphic"/> 
          </feMerge>
        </filter>
        <radialGradient id={`gradient-${payload.name}`}>
          <stop offset="0%" stopColor={fill} stopOpacity="1" />
          <stop offset="100%" stopColor={fill} stopOpacity="0.6" />
        </radialGradient>
      </defs>
      
      {/* Outer glow ring */}
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={outerRadius + 6}
        outerRadius={outerRadius + 10}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
        opacity={0.3}
      />
      
      {/* Main slice with gradient and shadow */}
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius + 10}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={`url(#gradient-${payload.name})`}
        filter="url(#shadow)"
      />
      
      {/* Inner highlight */}
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={innerRadius}
        outerRadius={innerRadius + 20}
        fill={fill}
        opacity={0.8}
      />
      
      {/* Percentage label */}
      <text
        x={cx}
        y={cy - 20}
        textAnchor="middle"
        fill="#ffffff"
        fontSize="28"
        fontWeight="bold"
      >
        {`${(percent * 100).toFixed(1)}%`}
      </text>
      
      {/* Category name */}
      <text
        x={cx}
        y={cy + 10}
        textAnchor="middle"
        fill="#ffffff"
        fontSize="16"
        fontWeight="500"
      >
        {payload.name}
      </text>
      
      {/* Token amount */}
      <text
        x={cx}
        y={cy + 35}
        textAnchor="middle"
        fill={fill}
        fontSize="14"
        fontWeight="bold"
      >
        {`${payload.tokens.toFixed(1)}B DAG`}
      </text>
    </g>
  );
};

export function AnimatedTokenPieChart() {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const data: ChartDataItem[] = [
    { name: 'Pre-Sale', value: 25, tokens: 30, color: '#00FFFF' },
    { name: 'App Mining', value: 20, tokens: 24, color: '#00D4FF' },
    { name: 'Liquidity', value: 10, tokens: 12, color: '#A3FF12' },
    { name: 'Marketing', value: 10, tokens: 12, color: '#8A2BE2' },
    { name: 'Ecosystem', value: 10, tokens: 12, color: '#FF6B35' },
    { name: 'Team', value: 8, tokens: 9.6, color: '#C0C0C0' },
    { name: 'Charity', value: 2, tokens: 2.4, color: '#87CEEB' },
    { name: 'Community', value: 10, tokens: 12, color: '#4B0082' },
    { name: 'Burn & Reserve', value: 5, tokens: 6, color: '#191970' }
  ];

  const onPieEnter = (_: any, index: number) => {
    setActiveIndex(index);
  };

  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-gradient-to-r from-cyan-400 to-lime-400 text-navy-900">
            Interactive Visualization
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            3D{' '}
            <span className="text-gradient">Token Distribution</span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Hover over each slice to view detailed allocation information
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Pie Chart */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="glass-strong border-white/10 h-full">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl text-white flex items-center justify-center gap-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-lime-400 rounded-lg flex items-center justify-center">
                    <Coins className="w-5 h-5 text-navy-900" />
                  </div>
                  Token Allocation
                </CardTitle>
                <p className="text-white/60 text-sm">
                  120 Billion DAG Total Supply
                </p>
              </CardHeader>
              <CardContent className="relative">
                <div className="h-[400px] relative">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <defs>
                        {data.map((entry, index) => (
                          <radialGradient key={`gradient-${index}`} id={`chartGradient-${index}`}>
                            <stop offset="0%" stopColor={entry.color} stopOpacity="1" />
                            <stop offset="100%" stopColor={entry.color} stopOpacity="0.6" />
                          </radialGradient>
                        ))}
                      </defs>
                      <Pie
                        activeIndex={activeIndex}
                        activeShape={renderActiveShape}
                        data={data}
                        cx="50%"
                        cy="50%"
                        innerRadius={80}
                        outerRadius={130}
                        dataKey="value"
                        onMouseEnter={onPieEnter}
                        animationBegin={0}
                        animationDuration={800}
                        animationEasing="ease-out"
                      >
                        {data.map((entry, index) => (
                          <Cell
                            key={`cell-${index}`}
                            fill={`url(#chartGradient-${index})`}
                            stroke={entry.color}
                            strokeWidth={2}
                          />
                        ))}
                      </Pie>
                    </PieChart>
                  </ResponsiveContainer>

                  {/* Rotating animation overlay */}
                  <motion.div
                    className="absolute inset-0 rounded-full pointer-events-none"
                    style={{
                      background: 'radial-gradient(circle, rgba(0,255,255,0.05) 0%, transparent 70%)'
                    }}
                    animate={{
                      rotate: 360
                    }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  />
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Legend with mini stats */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-3"
          >
            <Card className="glass-strong border-white/10 mb-4">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">
                  Selected Category
                </h3>
                <div className="p-4 rounded-lg" style={{ backgroundColor: `${data[activeIndex].color}20` }}>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-white text-lg font-medium">
                      {data[activeIndex].name}
                    </span>
                    <Badge
                      style={{
                        backgroundColor: `${data[activeIndex].color}30`,
                        color: data[activeIndex].color,
                        borderColor: data[activeIndex].color
                      }}
                    >
                      {data[activeIndex].value}%
                    </Badge>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-white/70">Token Amount:</span>
                      <span className="font-mono font-bold" style={{ color: data[activeIndex].color }}>
                        {data[activeIndex].tokens.toFixed(1)}B DAG
                      </span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-white/70">Percentage:</span>
                      <span className="text-white font-bold">
                        {data[activeIndex].value}%
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="space-y-2">
              {data.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  onClick={() => setActiveIndex(index)}
                  onMouseEnter={() => setActiveIndex(index)}
                  className={`p-3 rounded-lg border cursor-pointer transition-all duration-300 ${
                    activeIndex === index
                      ? 'glass-strong border-white/30 bg-white/10 scale-105'
                      : 'glass border-white/10 hover:border-white/20'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <motion.div
                      className="w-8 h-8 rounded flex-shrink-0"
                      style={{
                        backgroundColor: item.color,
                        boxShadow: activeIndex === index ? `0 0 15px ${item.color}80` : 'none'
                      }}
                      animate={{
                        scale: activeIndex === index ? 1.1 : 1
                      }}
                      transition={{ type: "spring", stiffness: 300 }}
                    />
                    <div className="flex-1 min-w-0">
                      <div className="text-white font-medium text-sm truncate">
                        {item.name}
                      </div>
                      <div className="text-white/60 text-xs">
                        {item.tokens.toFixed(1)}B DAG
                      </div>
                    </div>
                    <div className="text-right flex-shrink-0">
                      <div
                        className="text-lg font-bold"
                        style={{ color: activeIndex === index ? item.color : 'white' }}
                      >
                        {item.value}%
                      </div>
                    </div>
                  </div>
                  
                  {/* Progress bar */}
                  <div className="mt-2 h-1 bg-white/10 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full rounded-full"
                      style={{ backgroundColor: item.color }}
                      initial={{ width: '0%' }}
                      whileInView={{ width: `${item.value * 1.5}%` }}
                      transition={{ duration: 0.8, delay: index * 0.05 }}
                      viewport={{ once: true }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
