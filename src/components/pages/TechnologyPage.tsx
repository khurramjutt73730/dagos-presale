import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { EcosystemAnimation } from '../EcosystemAnimation';
import { PerformanceComparisonMatrix } from '../PerformanceComparisonMatrix';
import { StressTestSimulation } from '../StressTestSimulation';
import { InteractiveFAQ, TechnologyFAQ } from '../InteractiveFAQ';
import { 
  Network, 
  Zap, 
  Shield, 
  Leaf, 
  Cpu, 
  Database, 
  GitBranch,
  ArrowRight,
  CheckCircle
} from 'lucide-react';

export function TechnologyPage() {
  const dagFeatures = [
    {
      title: 'Directed Acyclic Graph',
      description: 'Unlike traditional blockchain, DAG allows multiple transactions to be processed simultaneously without waiting for block confirmation.',
      icon: <Network className="w-8 h-8" />,
      benefits: ['No mining required', 'Instant confirmations', 'Infinite scalability']
    },
    {
      title: 'Quantum-Resistant Security',
      description: 'Advanced cryptographic algorithms protect against both current and future quantum computing threats.',
      icon: <Shield className="w-8 h-8" />,
      benefits: ['Post-quantum cryptography', 'Multi-signature validation', 'Zero-knowledge proofs']
    },
    {
      title: 'Green Technology',
      description: 'Energy-efficient consensus mechanism consumes 99.9% less energy than traditional proof-of-work systems.',
      icon: <Leaf className="w-8 h-8" />,
      benefits: ['Carbon neutral', 'Sustainable mining', 'Eco-friendly validation']
    }
  ];

  const keyFeatures = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Lightning Speed',
      description: 'Process 100,000+ TPS with sub-second finality',
      metric: '100,000+ TPS'
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Maximum Security',
      description: 'Military-grade encryption with quantum resistance',
      metric: '256-bit encryption'
    },
    {
      icon: <Leaf className="w-6 h-6" />,
      title: 'Eco-Friendly',
      description: 'Carbon-neutral consensus mechanism',
      metric: '99.9% less energy'
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: 'Infinite Scale',
      description: 'No network congestion or transaction limits',
      metric: 'Unlimited throughput'
    }
  ];

  const architectureSteps = [
    { step: 1, title: 'Transaction Initiated', description: 'User submits transaction to DAGOS network' },
    { step: 2, title: 'DAG Validation', description: 'Transaction references previous transactions in the graph' },
    { step: 3, title: 'Consensus Achieved', description: 'Network validators confirm transaction validity' },
    { step: 4, title: 'Instant Settlement', description: 'Transaction is finalized and added to the DAG' }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-gradient-to-r from-cyan-400 to-lime-400 text-navy-900">
            Next-Gen Technology
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Built on Revolutionary
            <span className="block gradient-cyber bg-clip-text text-transparent">
              DAG Network Technology
            </span>
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            DAGOS leverages the power of Directed Acyclic Graph (DAG) architecture to solve 
            the blockchain trilemma of scalability, security, and decentralization.
          </p>
        </div>



        {/* Key Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {keyFeatures.map((feature, index) => (
            <Card key={index} className="glass-strong border-white/10 hover:glow-cyan transition-all duration-300">
              <CardContent className="p-6 text-center space-y-4">
                <div className="mx-auto w-12 h-12 bg-gradient-to-br from-cyan-400 to-lime-400 rounded-lg flex items-center justify-center text-navy-900">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-white">
                  {feature.title}
                </h3>
                <p className="text-white/70 text-sm">
                  {feature.description}
                </p>
                <div className="text-cyan-400 font-bold">
                  {feature.metric}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* DAG Explanation */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Understanding DAG Technology
            </h2>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              See how DAG revolutionizes traditional blockchain limitations
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {dagFeatures.map((feature, index) => (
              <Card key={index} className="glass-strong border-white/10">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-gradient-to-br from-cyan-400 to-lime-400 rounded-lg text-navy-900">
                      {feature.icon}
                    </div>
                    <CardTitle className="text-white">{feature.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-white/80">{feature.description}</p>
                  <div className="space-y-2">
                    {feature.benefits.map((benefit, i) => (
                      <div key={i} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-lime-400" />
                        <span className="text-white/70 text-sm">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Architecture Flow */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              DAGOS Architecture Flow
            </h2>
            <p className="text-white/70 text-lg">
              How transactions flow through the DAGOS network
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {architectureSteps.map((step, index) => (
              <div key={index} className="relative">
                <Card className="glass-strong border-white/10 h-full">
                  <CardContent className="p-6 text-center space-y-4">
                    <div className="mx-auto w-12 h-12 bg-gradient-to-br from-cyan-400 to-lime-400 rounded-full flex items-center justify-center text-navy-900 font-bold text-lg">
                      {step.step}
                    </div>
                    <h3 className="text-lg font-semibold text-white">
                      {step.title}
                    </h3>
                    <p className="text-white/70 text-sm">
                      {step.description}
                    </p>
                  </CardContent>
                </Card>
                {index < architectureSteps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-2 transform -translate-y-1/2 z-10">
                    <ArrowRight className="w-6 h-6 text-cyan-400" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Technical Specifications */}
        <section className="mb-20">
          <Card className="glass-strong border-white/10">
            <CardHeader>
              <CardTitle className="text-2xl text-white text-center">
                Technical Specifications
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-cyan-400">Performance</h4>
                  <div className="space-y-2 text-white/80">
                    <div className="flex justify-between">
                      <span>Transaction Speed:</span>
                      <span className="text-lime-400">100,000+ TPS</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Finality Time:</span>
                      <span className="text-lime-400">&lt;1 second</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Network Latency:</span>
                      <span className="text-lime-400">&lt;100ms</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-cyan-400">Security</h4>
                  <div className="space-y-2 text-white/80">
                    <div className="flex justify-between">
                      <span>Encryption:</span>
                      <span className="text-lime-400">AES-256</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Hash Algorithm:</span>
                      <span className="text-lime-400">SHA-3</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Quantum Resistant:</span>
                      <span className="text-lime-400">Yes</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-cyan-400">Efficiency</h4>
                  <div className="space-y-2 text-white/80">
                    <div className="flex justify-between">
                      <span>Energy Usage:</span>
                      <span className="text-lime-400">0.01 kWh/tx</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Carbon Footprint:</span>
                      <span className="text-lime-400">Neutral</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Scalability:</span>
                      <span className="text-lime-400">Infinite</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Ecosystem Animation */}
        <EcosystemAnimation />

        {/* Integration Ecosystem */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ecosystem Integration
            </h2>
            <p className="text-white/70 text-lg">
              DAGOS seamlessly integrates with existing blockchain ecosystems
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="glass-strong border-white/10">
              <CardContent className="p-6 text-center space-y-4">
                <Cpu className="w-12 h-12 mx-auto text-cyan-400" />
                <h3 className="text-xl font-semibold text-white">Smart Contracts</h3>
                <p className="text-white/70">
                  Full EVM compatibility with enhanced performance and lower gas fees
                </p>
              </CardContent>
            </Card>

            <Card className="glass-strong border-white/10">
              <CardContent className="p-6 text-center space-y-4">
                <GitBranch className="w-12 h-12 mx-auto text-cyan-400" />
                <h3 className="text-xl font-semibold text-white">Cross-Chain</h3>
                <p className="text-white/70">
                  Seamless interoperability with Bitcoin, Ethereum, and other major networks
                </p>
              </CardContent>
            </Card>

            <Card className="glass-strong border-white/10">
              <CardContent className="p-6 text-center space-y-4">
                <Database className="w-12 h-12 mx-auto text-cyan-400" />
                <h3 className="text-xl font-semibold text-white">DeFi Ready</h3>
                <p className="text-white/70">
                  Built-in support for DeFi protocols, DEXs, and liquidity pools
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Performance Comparison Matrix */}
        <PerformanceComparisonMatrix />

        {/* Stress Test Simulation */}
        <StressTestSimulation />

        {/* FAQ Section */}
        <section className="mt-20">
          <InteractiveFAQ
            title="Technology FAQ"
            subtitle="Deep dive into DAGOS's technical architecture and capabilities"
            context="Technology • DAG Network • Scalability • Feeless Transactions"
            items={TechnologyFAQ}
          />
        </section>
      </div>
    </div>
  );
}