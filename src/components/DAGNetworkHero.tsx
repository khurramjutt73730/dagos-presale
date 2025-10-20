import React, { useEffect, useState } from 'react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { 
  Zap, 
  Leaf, 
  Globe, 
  Clock,
  ArrowRight
} from 'lucide-react';

export function DAGNetworkHero() {
  const [dataPackets, setDataPackets] = useState<Array<{
    id: number;
    startNode: number;
    endNode: number;
    progress: number;
    path: string;
  }>>([]);

  // Generate random data packets flowing through the network
  useEffect(() => {
    const generatePacket = () => {
      const nodes = 8; // Total validator nodes
      const startNode = Math.floor(Math.random() * nodes);
      let endNode = Math.floor(Math.random() * nodes);
      while (endNode === startNode) {
        endNode = Math.floor(Math.random() * nodes);
      }
      
      return {
        id: Date.now() + Math.random(),
        startNode,
        endNode,
        progress: 0,
        path: `packet-${startNode}-${endNode}`
      };
    };

    const interval = setInterval(() => {
      setDataPackets(prev => {
        // Remove completed packets
        const activePackets = prev.filter(p => p.progress < 100);
        
        // Add new packet occasionally
        if (Math.random() < 0.3 && activePackets.length < 12) {
          activePackets.push(generatePacket());
        }
        
        // Update progress of existing packets
        return activePackets.map(packet => ({
          ...packet,
          progress: packet.progress + (2 + Math.random() * 3)
        }));
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  // Validator nodes positions in two concentric rings
  const innerValidators = Array.from({ length: 4 }, (_, i) => ({
    id: i,
    angle: (i * 90) + 45, // 45, 135, 225, 315 degrees
    radius: 120,
    ring: 'inner'
  }));

  const outerValidators = Array.from({ length: 4 }, (_, i) => ({
    id: i + 4,
    angle: i * 90, // 0, 90, 180, 270 degrees
    radius: 180,
    ring: 'outer'
  }));

  const allValidators = [...innerValidators, ...outerValidators];

  // Feature callouts
  const features = [
    {
      title: 'Unlimited Throughput',
      icon: Zap,
      color: 'cyan',
      position: { top: '15%', left: '10%' }
    },
    {
      title: 'Energy-Efficient Consensus',
      icon: Leaf,
      color: 'lime',
      position: { top: '15%', right: '10%' }
    },
    {
      title: 'Global Validator Distribution',
      icon: Globe,
      color: 'purple',
      position: { bottom: '20%', left: '10%' }
    },
    {
      title: 'Sub-Second Finality',
      icon: Clock,
      color: 'cyan',
      position: { bottom: '20%', right: '10%' }
    }
  ];

  const getNodePosition = (angle: number, radius: number) => {
    const radian = (angle * Math.PI) / 180;
    return {
      x: 250 + radius * Math.cos(radian),
      y: 250 + radius * Math.sin(radian)
    };
  };

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Full-width dark gradient background */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, #0A0E2A 0%, #1A1F4A 50%, #0A0E2A 100%)'
        }}
      >
        {/* Purple lattice/grid background */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(rgba(138, 43, 226, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(138, 43, 226, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px'
          }}
        />
        
        {/* Ambient glow effects */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-400/5 rounded-full filter blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-lime-400/5 rounded-full filter blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span 
              className="text-cyan-400"
              style={{
                textShadow: '0 0 20px rgba(0, 255, 255, 0.5)'
              }}
            >
              DAG Network
            </span>
          </h1>
          <h2 className="text-2xl md:text-3xl text-white/90 mb-6 font-medium">
            Next-Generation Infrastructure for Scalable, Eco-Friendly Web3
          </h2>
          <p className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto mb-8">
            Experience limitless throughput, ultra-low energy use, and sub-second confirmations 
            powered by DAG-based consensus.
          </p>
          
          {/* CTA Button */}
          <Button 
            className="bg-gradient-to-r from-cyan-400 to-cyan-300 text-navy-900 hover:from-cyan-300 hover:to-cyan-200 px-8 py-3 text-lg font-semibold glow-cyan transition-all duration-300 hover:scale-105"
          >
            Explore DAG Infrastructure
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>

        {/* Main Animation Container */}
        <div className="relative flex justify-center items-center min-h-[600px] lg:min-h-[700px]">
          {/* Desktop Animation */}
          <div className="hidden lg:block relative">
            <div className="relative w-[500px] h-[500px]">
              {/* SVG for the network diagram */}
              <svg
                width="500"
                height="500"
                viewBox="0 0 500 500"
                className="absolute inset-0"
              >
                {/* Connection lines between nodes */}
                {allValidators.map((startNode) => 
                  allValidators
                    .filter(endNode => endNode.id !== startNode.id)
                    .slice(0, 2) // Limit connections to avoid clutter
                    .map((endNode) => {
                      const start = getNodePosition(startNode.angle, startNode.radius);
                      const end = getNodePosition(endNode.angle, endNode.radius);
                      
                      return (
                        <line
                          key={`${startNode.id}-${endNode.id}`}
                          x1={start.x}
                          y1={start.y}
                          x2={end.x}
                          y2={end.y}
                          stroke="rgba(0, 255, 255, 0.3)"
                          strokeWidth="1"
                          className="animate-pulse"
                        />
                      );
                    })
                )}

                {/* Data packets moving along connections */}
                {dataPackets.map((packet) => {
                  const startNode = allValidators.find(n => n.id === packet.startNode);
                  const endNode = allValidators.find(n => n.id === packet.endNode);
                  
                  if (!startNode || !endNode) return null;
                  
                  const start = getNodePosition(startNode.angle, startNode.radius);
                  const end = getNodePosition(endNode.angle, endNode.radius);
                  
                  const progress = packet.progress / 100;
                  const x = start.x + (end.x - start.x) * progress;
                  const y = start.y + (end.y - start.y) * progress;
                  
                  return (
                    <circle
                      key={packet.id}
                      cx={x}
                      cy={y}
                      r="2"
                      fill="#00FFFF"
                      className="animate-pulse"
                      style={{
                        filter: 'drop-shadow(0 0 4px #00FFFF)'
                      }}
                    />
                  );
                })}

                {/* Central DAGOS Core Node */}
                <circle
                  cx="250"
                  cy="250"
                  r="30"
                  fill="rgba(0, 255, 255, 0.2)"
                  stroke="#00FFFF"
                  strokeWidth="3"
                  className="pulse-cyan"
                  style={{
                    filter: 'drop-shadow(0 0 20px #00FFFF)'
                  }}
                />
                <text
                  x="250"
                  y="255"
                  textAnchor="middle"
                  fill="white"
                  fontSize="12"
                  fontWeight="bold"
                >
                  DAGOS
                </text>

                {/* Validator Nodes */}
                {allValidators.map((validator) => {
                  const pos = getNodePosition(validator.angle, validator.radius);
                  return (
                    <g key={validator.id}>
                      <circle
                        cx={pos.x}
                        cy={pos.y}
                        r="12"
                        fill="rgba(163, 255, 18, 0.2)"
                        stroke="#A3FF12"
                        strokeWidth="2"
                        className="animate-pulse"
                        style={{
                          filter: 'drop-shadow(0 0 10px #A3FF12)',
                          animationDelay: `${validator.id * 0.2}s`
                        }}
                      />
                      <circle
                        cx={pos.x}
                        cy={pos.y}
                        r="4"
                        fill="#A3FF12"
                      />
                    </g>
                  );
                })}

                {/* Orbit rings */}
                <circle
                  cx="250"
                  cy="250"
                  r="120"
                  fill="none"
                  stroke="rgba(0, 255, 255, 0.2)"
                  strokeWidth="1"
                  strokeDasharray="5,5"
                />
                <circle
                  cx="250"
                  cy="250"
                  r="180"
                  fill="none"
                  stroke="rgba(163, 255, 18, 0.2)"
                  strokeWidth="1"
                  strokeDasharray="5,5"
                />
              </svg>
            </div>
          </div>

          {/* Mobile Simplified View */}
          <div className="lg:hidden w-full max-w-sm mx-auto">
            <div className="relative w-80 h-80 mx-auto">
              <svg
                width="320"
                height="320"
                viewBox="0 0 320 320"
                className="absolute inset-0"
              >
                {/* Central DAGOS Core */}
                <circle
                  cx="160"
                  cy="160"
                  r="25"
                  fill="rgba(0, 255, 255, 0.2)"
                  stroke="#00FFFF"
                  strokeWidth="3"
                  className="pulse-cyan"
                />
                <text
                  x="160"
                  y="165"
                  textAnchor="middle"
                  fill="white"
                  fontSize="10"
                  fontWeight="bold"
                >
                  DAGOS
                </text>

                {/* Simplified validator nodes */}
                {[0, 90, 180, 270].map((angle, i) => {
                  const radian = (angle * Math.PI) / 180;
                  const x = 160 + 80 * Math.cos(radian);
                  const y = 160 + 80 * Math.sin(radian);
                  
                  return (
                    <circle
                      key={i}
                      cx={x}
                      cy={y}
                      r="8"
                      fill="rgba(163, 255, 18, 0.2)"
                      stroke="#A3FF12"
                      strokeWidth="2"
                      className="animate-pulse"
                      style={{ animationDelay: `${i * 0.3}s` }}
                    />
                  );
                })}

                {/* Orbit ring */}
                <circle
                  cx="160"
                  cy="160"
                  r="80"
                  fill="none"
                  stroke="rgba(0, 255, 255, 0.2)"
                  strokeWidth="1"
                  strokeDasharray="3,3"
                />
              </svg>
            </div>
          </div>

          {/* Floating Feature Callouts - Desktop */}
          <div className="hidden lg:block absolute inset-0 pointer-events-none">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              const colorClasses = {
                cyan: 'border-cyan-400/50 glow-cyan',
                lime: 'border-lime-400/50 glow-lime',
                purple: 'border-purple-400/50'
              };
              
              const iconColors = {
                cyan: 'text-cyan-400',
                lime: 'text-lime-400',
                purple: 'text-purple-400'
              };
              
              return (
                <Card
                  key={feature.title}
                  className={`glass-strong ${colorClasses[feature.color as keyof typeof colorClasses]} absolute pointer-events-auto transform hover:scale-105 transition-all duration-300 animate-fade-in`}
                  style={{
                    ...feature.position,
                    animationDelay: `${index * 0.2}s`
                  }}
                >
                  <CardContent className="p-4 flex items-center gap-3 min-w-[200px]">
                    <div className={`p-2 rounded-lg bg-${feature.color === 'cyan' ? 'cyan' : feature.color === 'lime' ? 'lime' : 'purple'}-400/20`}>
                      <IconComponent className={`w-5 h-5 ${iconColors[feature.color as keyof typeof iconColors]}`} />
                    </div>
                    <div>
                      <div className="text-white font-semibold text-sm">
                        {feature.title}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Mobile Feature Cards */}
        <div className="lg:hidden grid grid-cols-1 sm:grid-cols-2 gap-4 mt-12">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            const colorClasses = {
              cyan: 'border-cyan-400/50',
              lime: 'border-lime-400/50',
              purple: 'border-purple-400/50'
            };
            
            const iconColors = {
              cyan: 'text-cyan-400',
              lime: 'text-lime-400',
              purple: 'text-purple-400'
            };
            
            return (
              <Card
                key={feature.title}
                className={`glass-strong ${colorClasses[feature.color as keyof typeof colorClasses]} hover:glow-cyan transition-all duration-300`}
              >
                <CardContent className="p-4 text-center space-y-3">
                  <div className="flex justify-center">
                    <div className={`p-3 rounded-lg bg-${feature.color === 'cyan' ? 'cyan' : feature.color === 'lime' ? 'lime' : 'purple'}-400/20`}>
                      <IconComponent className={`w-6 h-6 ${iconColors[feature.color as keyof typeof iconColors]}`} />
                    </div>
                  </div>
                  <div className="text-white font-semibold">
                    {feature.title}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </section>
  );
}