import React, { useState } from 'react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { 
  Zap, 
  Leaf, 
  TrendingUp, 
  Clock,
  Crown,
  Award
} from 'lucide-react';

export function PerformanceComparisonMatrix() {
  const [activeTab, setActiveTab] = useState('speed');

  const tabs = [
    { id: 'speed', label: 'Transaction Speed', icon: Zap, color: 'cyan' },
    { id: 'energy', label: 'Energy Efficiency', icon: Leaf, color: 'lime' },
    { id: 'scalability', label: 'Scalability', icon: TrendingUp, color: 'purple' },
    { id: 'confirmation', label: 'Confirmation Times', icon: Clock, color: 'cyan' }
  ];

  // Transaction Speed Data (TPS)
  const speedData = [
    { name: 'Bitcoin', tps: 7, color: '#FF8C00', rank: 5 },
    { name: 'Ethereum', tps: 15, color: '#627EEA', rank: 4 },
    { name: 'Cardano', tps: 250, color: '#0033AD', rank: 3 },
    { name: 'Solana', tps: 3000, color: '#9945FF', rank: 2 },
    { name: 'DAGOS', tps: 50000, color: '#00FFFF', rank: 1, isLeader: true }
  ];

  // Energy Efficiency Data (kWh/tx)
  const energyData = [
    { name: 'Bitcoin', kwh: 707, color: '#FF8C00', rank: 5 },
    { name: 'Ethereum', kwh: 62.56, color: '#627EEA', rank: 4 },
    { name: 'Cardano', kwh: 0.5479, color: '#0033AD', rank: 3 },
    { name: 'Solana', kwh: 0.00051, color: '#9945FF', rank: 2 },
    { name: 'DAGOS', kwh: 0.0001, color: '#A3FF12', rank: 1, isLeader: true }
  ];

  // Scalability Data
  const scalabilityData = [
    { category: 'Traditional Blockchain', percentage: 25, color: '#FF4444', description: 'Limited by block size and mining' },
    { category: 'Layer-2 Solutions', percentage: 35, color: '#FF8C00', description: 'Improved but still dependent on base layer' },
    { category: 'DAG Networks', percentage: 40, color: '#00FFFF', description: 'Unlimited parallel processing', isDAGOS: true }
  ];

  // Confirmation Times Data
  const confirmationData = [
    { name: 'Bitcoin', time: '60 min', timeInSeconds: 3600, color: '#FF8C00' },
    { name: 'Ethereum', time: '6 min', timeInSeconds: 360, color: '#627EEA' },
    { name: 'Cardano', time: '5 min', timeInSeconds: 300, color: '#0033AD' },
    { name: 'Solana', time: '0.4 s', timeInSeconds: 0.4, color: '#9945FF' },
    { name: 'DAGOS', time: '0.1 s', timeInSeconds: 0.1, color: '#00FFFF', isFastest: true }
  ];

  const getMaxValue = (data: any[], key: string) => {
    return Math.max(...data.map(item => item[key]));
  };

  const renderTransactionSpeed = () => (
    <div className="space-y-8">
      {/* Bar Chart */}
      <div className="space-y-4">
        <div className="text-center mb-6">
          <h4 className="text-xl font-semibold text-white mb-2">Transactions Per Second (TPS)</h4>
        </div>
        <div className="space-y-3">
          {speedData.map((item, index) => {
            const maxTps = getMaxValue(speedData, 'tps');
            const widthPercentage = (item.tps / maxTps) * 100;
            
            return (
              <div key={item.name} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-white/80 font-medium">{item.name}</span>
                  <span className="text-white font-bold">{item.tps.toLocaleString()} TPS</span>
                </div>
                <div className="h-4 bg-white/10 rounded-full overflow-hidden relative">
                  <div 
                    className={`h-full rounded-full transition-all duration-1000 ease-out ${
                      item.isLeader ? 'bg-gradient-to-r from-cyan-400 to-cyan-300 glow-cyan' : ''
                    }`}
                    style={{ 
                      width: `${widthPercentage}%`,
                      backgroundColor: item.isLeader ? undefined : item.color,
                      boxShadow: item.isLeader ? '0 0 20px rgba(0, 255, 255, 0.5)' : undefined
                    }}
                  />
                  {item.isLeader && (
                    <div className="absolute right-2 top-1/2 transform -translate-y-1/2">
                      <Crown className="w-3 h-3 text-yellow-400" />
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Top 3 Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {speedData.slice(0, 3).map((item, index) => (
          <Card key={item.name} className={`glass-strong ${item.isLeader ? 'border-cyan-400/50 glow-cyan' : 'border-white/10'}`}>
            <CardContent className="p-4 text-center space-y-2">
              <div className="flex items-center justify-center gap-2">
                <div className={`w-3 h-3 rounded-full`} style={{ backgroundColor: item.color }} />
                <span className="text-white font-medium">{item.name}</span>
                {item.isLeader && <Badge className="bg-cyan-400/20 text-cyan-400 border-cyan-400/50">Leader</Badge>}
              </div>
              <div className="text-2xl font-bold text-white">{item.tps.toLocaleString()}</div>
              <div className="text-white/60 text-sm">TPS</div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );

  const renderEnergyEfficiency = () => (
    <div className="space-y-8">
      {/* Bar Chart (Log Scale) */}
      <div className="space-y-4">
        <div className="text-center mb-6">
          <h4 className="text-xl font-semibold text-white mb-2">Energy Consumption (kWh per transaction)</h4>
          <p className="text-white/60 text-sm">Lower is better - Logarithmic scale</p>
        </div>
        <div className="space-y-3">
          {energyData.map((item, index) => {
            // Use log scale for better visualization
            const logValue = Math.log10(item.kwh + 0.0001);
            const maxLogValue = Math.log10(Math.max(...energyData.map(d => d.kwh)) + 0.0001);
            const widthPercentage = ((logValue + 4) / (maxLogValue + 4)) * 100; // +4 to handle negative logs
            
            return (
              <div key={item.name} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-white/80 font-medium">{item.name}</span>
                  <span className="text-white font-bold">{item.kwh} kWh/tx</span>
                </div>
                <div className="h-4 bg-white/10 rounded-full overflow-hidden relative">
                  <div 
                    className={`h-full rounded-full transition-all duration-1000 ease-out ${
                      item.isLeader ? 'bg-gradient-to-r from-lime-400 to-lime-300 glow-lime' : ''
                    }`}
                    style={{ 
                      width: `${widthPercentage}%`,
                      backgroundColor: item.isLeader ? undefined : item.color,
                      boxShadow: item.isLeader ? '0 0 20px rgba(163, 255, 18, 0.5)' : undefined
                    }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Environmental Impact Card */}
      <Card className="glass-strong border-lime-400/50 glow-lime">
        <CardContent className="p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-lime-400/20 rounded-lg">
              <Leaf className="w-6 h-6 text-lime-400" />
            </div>
            <h4 className="text-xl font-semibold text-white">Environmental Impact</h4>
          </div>
          <p className="text-white/80 leading-relaxed">
            DAGOS consumes <span className="text-lime-400 font-bold">99.99% less energy</span> than Bitcoin and{' '}
            <span className="text-lime-400 font-bold">99.8% less</span> than Ethereum — one of the most sustainable networks.
          </p>
        </CardContent>
      </Card>
    </div>
  );

  const renderScalability = () => (
    <div className="space-y-8">
      {/* Donut Chart */}
      <div className="text-center mb-6">
        <h4 className="text-xl font-semibold text-white mb-2">Network Scalability Comparison</h4>
      </div>
      
      <div className="flex justify-center mb-8">
        <div className="relative w-64 h-64">
          <svg viewBox="0 0 200 200" className="w-full h-full transform -rotate-90">
            {/* Background Circle */}
            <circle cx="100" cy="100" r="80" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="20" />
            
            {/* Segments */}
            {scalabilityData.map((segment, index) => {
              const startAngle = scalabilityData.slice(0, index).reduce((sum, s) => sum + (s.percentage * 3.6), 0);
              const endAngle = startAngle + (segment.percentage * 3.6);
              const startRadians = (startAngle * Math.PI) / 180;
              const endRadians = (endAngle * Math.PI) / 180;
              
              const x1 = 100 + 80 * Math.cos(startRadians);
              const y1 = 100 + 80 * Math.sin(startRadians);
              const x2 = 100 + 80 * Math.cos(endRadians);
              const y2 = 100 + 80 * Math.sin(endRadians);
              
              const largeArcFlag = segment.percentage > 50 ? 1 : 0;
              
              return (
                <path
                  key={index}
                  d={`M 100 100 L ${x1} ${y1} A 80 80 0 ${largeArcFlag} 1 ${x2} ${y2} Z`}
                  fill={segment.color}
                  stroke={segment.isDAGOS ? '#00FFFF' : 'none'}
                  strokeWidth={segment.isDAGOS ? '3' : '0'}
                  style={{
                    filter: segment.isDAGOS ? 'drop-shadow(0 0 10px #00FFFF)' : undefined
                  }}
                />
              );
            })}
          </svg>
          
          {/* Center Text */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className="text-2xl font-bold text-white">100%</div>
              <div className="text-white/60 text-sm">Network</div>
            </div>
          </div>
        </div>
      </div>

      {/* Legend Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {scalabilityData.map((item, index) => (
          <Card key={index} className={`glass-strong ${item.isDAGOS ? 'border-cyan-400/50 glow-cyan' : 'border-white/10'}`}>
            <CardContent className="p-4 space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-4 h-4 rounded-full" style={{ backgroundColor: item.color }} />
                <span className="text-white font-medium text-sm">{item.category}</span>
              </div>
              <div className="text-2xl font-bold text-white">{item.percentage}%</div>
              <p className="text-white/60 text-xs">{item.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );

  const renderConfirmationTimes = () => (
    <div className="space-y-8">
      {/* Confirmation Time Cards Grid */}
      <div className="text-center mb-6">
        <h4 className="text-xl font-semibold text-white mb-2">Transaction Confirmation Times</h4>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
        {confirmationData.map((item, index) => {
          const maxTime = Math.max(...confirmationData.map(d => d.timeInSeconds));
          const progressPercentage = item.isFastest ? 100 : Math.max(5, (1 - item.timeInSeconds / maxTime) * 100);
          
          return (
            <Card key={item.name} className={`glass-strong ${item.isFastest ? 'border-cyan-400/50 glow-cyan' : 'border-white/10'} text-center`}>
              <CardContent className="p-4 space-y-3">
                <div className="flex items-center justify-center gap-2">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
                  <span className="text-white font-medium text-sm">{item.name}</span>
                  {item.isFastest && (
                    <Badge className="bg-cyan-400/20 text-cyan-400 border-cyan-400/50 text-xs">
                      <Zap className="w-3 h-3 mr-1" />
                      Fastest
                    </Badge>
                  )}
                </div>
                
                <div className="text-2xl font-bold text-white">{item.time}</div>
                
                {/* Progress Bar */}
                <div className="w-full bg-white/10 rounded-full h-2 overflow-hidden">
                  <div 
                    className={`h-full rounded-full transition-all duration-1000 ease-out ${
                      item.isFastest ? 'bg-gradient-to-r from-cyan-400 to-cyan-300' : ''
                    }`}
                    style={{ 
                      width: `${progressPercentage}%`,
                      backgroundColor: item.isFastest ? undefined : item.color,
                      boxShadow: item.isFastest ? '0 0 10px rgba(0, 255, 255, 0.5)' : undefined
                    }}
                  />
                </div>
                
                <div className="text-white/50 text-xs">
                  {item.isFastest ? 'Lightning Fast' : 'Confirmation Time'}
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Lightning-Fast Info Card */}
      <Card className="glass-strong border-cyan-400/50 glow-cyan">
        <CardContent className="p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-cyan-400/20 rounded-lg">
              <Zap className="w-6 h-6 text-cyan-400" />
            </div>
            <h4 className="text-xl font-semibold text-white">Lightning-Fast Confirmations</h4>
          </div>
          <p className="text-white/80 leading-relaxed">
            DAGOS achieves <span className="text-cyan-400 font-bold">sub-second confirmation times</span> through its DAG consensus, 
            delivering near-instant finality without compromising security.
          </p>
        </CardContent>
      </Card>
    </div>
  );

  const renderTabContent = () => {
    switch (activeTab) {
      case 'speed':
        return renderTransactionSpeed();
      case 'energy':
        return renderEnergyEfficiency();
      case 'scalability':
        return renderScalability();
      case 'confirmation':
        return renderConfirmationTimes();
      default:
        return renderTransactionSpeed();
    }
  };

  return (
    <section className="py-20 relative overflow-hidden">

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Container Card */}
        <Card className="glass-strong border-white/20 overflow-hidden">
          <CardContent className="p-8">
            {/* Header */}
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Performance Comparison Matrix
              </h2>
              <p className="text-white/70 text-lg max-w-2xl mx-auto">
                See how DAGOS outperforms traditional blockchain networks across key metrics.
              </p>
            </div>

            {/* Tab Navigation */}
            <div className="flex flex-wrap justify-center gap-2 mb-8 p-2 bg-white/5 rounded-lg">
              {tabs.map((tab) => {
                const IconComponent = tab.icon;
                const isActive = activeTab === tab.id;
                const glowClass = tab.color === 'cyan' ? 'glow-cyan' : 
                                 tab.color === 'lime' ? 'glow-lime' : 
                                 'glow-cyan';
                
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center gap-2 px-4 py-3 rounded-lg font-medium transition-all duration-300 ${
                      isActive 
                        ? `text-white border-b-2 ${
                            tab.color === 'cyan' ? 'border-cyan-400 bg-cyan-400/10' :
                            tab.color === 'lime' ? 'border-lime-400 bg-lime-400/10' :
                            'border-purple-400 bg-purple-400/10'
                          } ${glowClass}` 
                        : 'text-white/60 hover:text-white/80 hover:bg-white/5'
                    }`}
                  >
                    <IconComponent className={`w-4 h-4 ${
                      isActive ? 
                        tab.color === 'cyan' ? 'text-cyan-400' :
                        tab.color === 'lime' ? 'text-lime-400' :
                        'text-purple-400'
                      : ''
                    }`} />
                    <span className="hidden sm:inline">{tab.label}</span>
                    <span className="sm:hidden">
                      {tab.id === 'speed' ? '⚡' : 
                       tab.id === 'energy' ? '🌱' : 
                       tab.id === 'scalability' ? '📈' : '⏱️'}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Tab Content */}
            <div className="min-h-[500px]">
              {renderTabContent()}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}