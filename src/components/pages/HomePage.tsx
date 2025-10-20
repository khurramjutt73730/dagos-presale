import React from "react";
import { Button } from "../ui/button";
import { CountdownTimer } from "../CountdownTimer";
import { ProgressBar } from "../ProgressBar";
import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";
import { LiveStats } from "../LiveStats";
import { RecentTransactions } from "../RecentTransactions";
import { DisclaimerSection } from "../DisclaimerSection";
import { InteractiveFAQ, HomeFAQ } from "../InteractiveFAQ";
import { PresaleLiveBadge } from "../PresaleLiveBadge";
import {
  TrustBadgeDetails,
  TRUST_BADGES,
} from "../TrustBadgeDetails";
import {
  TechTooltip,
  DAGTooltip,
  TPSTooltip,
  DeFiTooltip,
  UtilityTokenTooltip,
} from "../TechTooltip";
import { NewsletterSignup } from "../NewsletterSignup";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { DAGNetworkCard } from "../DAGNetworkCard";
import {
  Shield,
  Zap,
  Globe,
  TrendingUp,
  Users,
  Lock,
  CheckCircle,
  Award,
  Twitter,
  Linkedin,
  Send,
  Info,
  Clock,
  ArrowRight,
  Star,
  Verified,
  Building2,
  FileText,
  Wallet,
} from "lucide-react";

interface HomePageProps {
  onPageChange: (page: string) => void;
  onConnectWallet: () => void;
}

export function HomePage({
  onPageChange,
  onConnectWallet,
}: HomePageProps) {
  // Mock data for the presale
  const presaleData = {
    softCap: 500000,
    hardCap: 2000000,
    raised: 1350000,
    tokensSold: 45000000,
    totalTokens: 100000000,
    currentPrice: 0.03,
  };

  const saleEndDate = new Date("2025-12-31T23:59:59");

  const features = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Lightning Fast",
      description:
        "Process thousands of transactions per second with DAG technology",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Ultra Secure",
      description:
        "Military-grade encryption and decentralized validation",
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Global Scale",
      description:
        "Built for worldwide adoption and enterprise integration",
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "High ROI Potential",
      description:
        "Early adopter advantages with exponential growth potential",
    },
  ];

  const pressLogos = [
    "CoinDesk",
    "CoinTelegraph",
    "CryptoNews",
    "BlockchainToday",
  ];

  return (
    <div className="min-h-screen">
      {/* Presale Live Badge */}
      <PresaleLiveBadge />

      {/* Enhanced Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Advanced Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 via-transparent to-lime-400/5"></div>
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-400/20 rounded-full filter blur-3xl animate-pulse opacity-40"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-lime-400/20 rounded-full filter blur-3xl animate-pulse delay-1000 opacity-40"></div>
            <div className="absolute top-3/4 left-3/4 w-64 h-64 bg-purple-400/15 rounded-full filter blur-2xl animate-pulse delay-500 opacity-30"></div>
          </div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <div className="space-y-8 text-center lg:text-left">
              <div className="space-y-6">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
                  The Future of
                  <span className="block gradient-cyber bg-clip-text text-transparent mt-2">
                    DAG Networks
                  </span>
                  <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl mt-4 text-white/90">
                    Begins with DAGOS
                  </span>
                </h1>

                <p className="text-lg sm:text-xl md:text-2xl text-white/80 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                  Revolutionary{" "}
                  <DAGTooltip>DAG Network</DAGTooltip>{" "}
                  technology delivering
                  <span className="text-cyan-400 font-semibold">
                    {" "}
                    100,000+ TPS
                  </span>
                  ,
                  <span className="text-lime-400 font-semibold">
                    {" "}
                    $0.001 fees
                  </span>
                  , and
                  <span className="text-purple-400 font-semibold">
                    {" "}
                    2-second confirmations
                  </span>
                  .
                </p>

                {/* Social Proof */}
                <div className="flex flex-wrap gap-6 justify-center lg:justify-start pt-6 text-sm text-white/60">
                  <div className="flex items-center gap-2">
                    <div className="flex -space-x-2">
                      <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-lime-400 rounded-full border-2 border-background"></div>
                      <div className="w-8 h-8 bg-gradient-to-br from-lime-400 to-purple-400 rounded-full border-2 border-background"></div>
                      <div className="w-8 h-8 bg-gradient-to-br from-purple-400 to-cyan-400 rounded-full border-2 border-background"></div>
                    </div>
                    <span>500+ early investors</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span>4.9/5 community rating</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Presale Sidebar */}
            <div className="relative order-first lg:order-last">
              <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
                <Card className="glass-strong border-cyan-400/30 hover:border-cyan-400/50 transition-all duration-300 overflow-hidden">
                  <CardContent className="p-8 space-y-6">
                    {/* Countdown Timer */}
                    <div className="space-y-4">
                      <h3 className="text-2xl text-white font-bold text-center">
                        Presale Ends In
                      </h3>
                      <CountdownTimer targetDate={saleEndDate} />
                    </div>

                    {/* Presale Progress Bar */}
                    <div className="space-y-3">
                      <div className="flex justify-between text-sm text-white/70">
                        <span>Progress</span>
                        <span className="font-semibold text-cyan-400">
                          {Math.round((presaleData.raised / presaleData.hardCap) * 100)}%
                        </span>
                      </div>
                      <ProgressBar
                        current={presaleData.raised}
                        target={presaleData.hardCap}
                        showLabels={false}
                      />
                      <div className="flex justify-between text-xs text-white/60">
                        <span>${(presaleData.raised / 1000000).toFixed(2)}M Raised</span>
                        <span>${(presaleData.hardCap / 1000000).toFixed(2)}M Hard Cap</span>
                      </div>
                    </div>

                    {/* CTA Buttons */}
                    <div className="space-y-3 pt-4">
                      <Button
                        onClick={() => onPageChange("invest")}
                        size="lg"
                        className="w-full bg-gradient-to-r from-cyan-400 to-lime-400 text-navy-900 hover:from-cyan-300 hover:to-lime-300 transition-all duration-300 text-lg py-6 glow-cyan shadow-2xl group"
                      >
                        Buy DAGOS Now
                        <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Button>
                      <Button
                        onClick={() => onPageChange("technology")}
                        size="lg"
                        variant="outline"
                        className="w-full border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50 text-lg py-6 transition-all duration-300"
                      >
                        <FileText className="w-5 h-5 mr-2" />
                        View Whitepaper
                      </Button>
                    </div>

                    {/* Trust Badges - Redesigned */}
                    <div className="pt-6 border-t border-white/10">
                      <h4 className="text-sm text-white/70 mb-4 text-center font-semibold">
                        Verified & Trusted
                      </h4>
                      <div className="grid grid-cols-3 gap-3">
                        {TRUST_BADGES.slice(0, 3).map((badge) => (
                          <div
                            key={badge.id}
                            className="group cursor-pointer"
                          >
                            <div className="glass p-3 rounded-lg border border-white/10 hover:border-cyan-400/50 transition-all duration-300 hover:glow-cyan-soft">
                              <div className="flex flex-col items-center gap-2 text-center">
                                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                                  badge.id === 'kyc' ? 'bg-lime-400/20' :
                                  badge.id === 'audit' ? 'bg-cyan-400/20' :
                                  'bg-purple-400/20'
                                }`}>
                                  {badge.id === 'kyc' && <CheckCircle className="w-4 h-4 text-lime-400" />}
                                  {badge.id === 'audit' && <Shield className="w-4 h-4 text-cyan-400" />}
                                  {badge.id === 'legal' && <Award className="w-4 h-4 text-purple-400" />}
                                </div>
                                <span className="text-xs font-semibold text-white/90">
                                  {badge.title.replace(' Verified', '').replace(' Complete', '').replace(' Compliant', '')}
                                </span>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Live Presale Statistics */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Live Presale Statistics
            </h2>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              Real-time metrics showing the explosive growth of
              the DAGOS ecosystem
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Live Stats */}
            <Card className="glass-strong border-white/10">
              <CardContent className="p-8">
                <LiveStats />
              </CardContent>
            </Card>

            {/* Recent Transactions */}
            <RecentTransactions limit={8} />
          </div>
        </div>
      </section>

      {/* How to Buy Section */}
      <section className="py-20 bg-black/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              How to Buy DAGOS
            </h2>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              Get started in just 3 simple steps. Join thousands
              of investors already participating.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Step 1 */}
            <div className="relative">
              <Card className="glass-strong border-cyan-400/30 hover:border-cyan-400/50 transition-all duration-300 h-full group">
                <CardContent className="p-8 text-center space-y-6">
                  <div className="relative">
                    <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-lime-400 rounded-full flex items-center justify-center mx-auto text-navy-900 font-bold text-xl">
                      1
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-cyan-400/20 rounded-full flex items-center justify-center">
                      <Wallet className="w-4 h-4 text-cyan-400" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-white">
                    Connect Wallet
                  </h3>
                  <p className="text-white/70 text-sm leading-relaxed">
                    Connect your MetaMask, Trust Wallet, or
                    Phantom wallet securely in one click.
                  </p>
                  <div className="pt-4">
                    <Button
                      onClick={onConnectWallet}
                      variant="outline"
                      size="sm"
                      className="border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/10 group-hover:glow-cyan transition-all duration-300"
                    >
                      Connect Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
              {/* Arrow for desktop */}
              <div className="hidden md:block absolute top-1/2 -right-4 z-10">
                <ArrowRight className="w-8 h-8 text-cyan-400/50" />
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative">
              <Card className="glass-strong border-lime-400/30 hover:border-lime-400/50 transition-all duration-300 h-full group">
                <CardContent className="p-8 text-center space-y-6">
                  <div className="relative">
                    <div className="w-16 h-16 bg-gradient-to-br from-lime-400 to-purple-400 rounded-full flex items-center justify-center mx-auto text-navy-900 font-bold text-xl">
                      2
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-lime-400/20 rounded-full flex items-center justify-center">
                      <TrendingUp className="w-4 h-4 text-lime-400" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-white">
                    Choose Amount
                  </h3>
                  <p className="text-white/70 text-sm leading-relaxed">
                    Enter your investment amount and see
                    real-time token calculations with bonuses.
                  </p>
                  <div className="pt-4">
                    <Button
                      onClick={() => onPageChange("invest")}
                      variant="outline"
                      size="sm"
                      className="border-lime-400/50 text-lime-400 hover:bg-lime-400/10 group-hover:glow-lime transition-all duration-300"
                    >
                      Calculate Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
              {/* Arrow for desktop */}
              <div className="hidden md:block absolute top-1/2 -right-4 z-10">
                <ArrowRight className="w-8 h-8 text-lime-400/50" />
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative">
              <Card className="glass-strong border-purple-400/30 hover:border-purple-400/50 transition-all duration-300 h-full group">
                <CardContent className="p-8 text-center space-y-6">
                  <div className="relative">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-cyan-400 rounded-full flex items-center justify-center mx-auto text-navy-900 font-bold text-xl">
                      3
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-purple-400/20 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-4 h-4 text-purple-400" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-white">
                    Receive Tokens
                  </h3>
                  <p className="text-white/70 text-sm leading-relaxed">
                    Confirm your transaction and receive DAGOS
                    tokens instantly to your wallet.
                  </p>
                  <div className="pt-4">
                    <Badge className="bg-purple-400/20 text-purple-400 border-purple-400/50">
                      Instant Delivery
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Token Benefits */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose DAGOS?
            </h2>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              Revolutionary features that set DAGOS apart from
              traditional blockchain solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="glass-strong border-white/10 hover:glow-cyan transition-all duration-300"
              >
                <CardContent className="p-6 text-center space-y-4">
                  <div className="mx-auto w-12 h-12 bg-gradient-to-br from-cyan-400 to-lime-400 rounded-lg flex items-center justify-center text-navy-900">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white">
                    {feature.title}
                  </h3>
                  <p className="text-white/70">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Press & Media */}
      <section className="py-16 bg-black/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Media Coverage
            </h2>
            <p className="text-white/70 mb-8">
              Major publications covering our revolutionary
              technology
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8">
              {pressLogos.map((logo, index) => (
                <div key={index} className="relative group">
                  <div className="text-white/30 text-lg font-medium transition-colors">
                    {logo}
                  </div>
                  <div className="absolute -top-2 -right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Badge
                      variant="outline"
                      className="text-xs border-yellow-400/50 text-yellow-400"
                    >
                      Coming Soon
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-white/50 text-sm mt-6">
              Media partnerships and press coverage
              announcements coming soon
            </p>
          </div>
        </div>
      </section>

      {/* Referral Program */}
      <section className="py-20 bg-black/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Earn with Our Referral Program
            </h2>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              Get a 5% commission on every purchase made through
              your referral link. No limits, instant rewards!
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* How it Works */}
            <Card className="glass-strong border-white/10">
              <CardContent className="p-6 text-center space-y-4">
                <div className="mx-auto w-16 h-16 bg-gradient-to-br from-cyan-400 to-lime-400 rounded-full flex items-center justify-center text-navy-900">
                  <Users className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold text-white">
                  Share Your Link
                </h3>
                <p className="text-white/70 text-sm">
                  Get your unique referral link and share it
                  with your network
                </p>
              </CardContent>
            </Card>

            {/* Track Progress */}
            <Card className="glass-strong border-white/10">
              <CardContent className="p-6 text-center space-y-4">
                <div className="mx-auto w-16 h-16 bg-gradient-to-br from-lime-400 to-purple-400 rounded-full flex items-center justify-center text-navy-900">
                  <TrendingUp className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold text-white">
                  Track Referrals
                </h3>
                <p className="text-white/70 text-sm">
                  Monitor your referrals and earnings in
                  real-time through your dashboard
                </p>
              </CardContent>
            </Card>

            {/* Earn Rewards */}
            <Card className="glass-strong border-white/10">
              <CardContent className="p-6 text-center space-y-4">
                <div className="mx-auto w-16 h-16 bg-gradient-to-br from-purple-400 to-cyan-400 rounded-full flex items-center justify-center text-navy-900">
                  <Award className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold text-white">
                  Earn 5% Commission
                </h3>
                <p className="text-white/70 text-sm">
                  Receive instant DAGOS token rewards for
                  every successful referral
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button
              onClick={() => onPageChange("community")}
              size="lg"
              className="bg-gradient-to-r from-cyan-400 to-lime-400 text-navy-900 hover:from-cyan-300 hover:to-lime-300 text-lg px-8 py-6 glow-cyan"
            >
              Start Referring Now
            </Button>
          </div>
        </div>
      </section>

      {/* DAG Network Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Built on DAG Network
            </h2>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              DAGOS leverages the power of Directed Acyclic
              Graph technology for unprecedented scalability and
              efficiency.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-white">
                  Revolutionary Architecture
                </h3>
                <p className="text-white/70 text-lg">
                  Unlike traditional blockchain,{" "}
                  <DAGTooltip>DAG Network</DAGTooltip> processes
                  transactions in parallel, eliminating
                  bottlenecks and reducing fees to near zero.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="glass p-4 rounded-lg">
                  <div className="text-2xl font-bold text-cyan-400 mb-2">
                    100,000+
                  </div>
                  <div className="text-white/70">
                    <TPSTooltip showIcon={false}>
                      <span className="cursor-help border-b border-dotted border-cyan-400/50">
                        TPS Capacity
                      </span>
                    </TPSTooltip>
                  </div>
                </div>
                <div className="glass p-4 rounded-lg">
                  <div className="text-2xl font-bold text-lime-400 mb-2">
                    ~$0.001
                  </div>
                  <div className="text-white/70">
                    Transaction Fee
                  </div>
                </div>
                <div className="glass p-4 rounded-lg">
                  <div className="text-2xl font-bold text-purple-400 mb-2">
                    2 sec
                  </div>
                  <div className="text-white/70">
                    Confirmation Time
                  </div>
                </div>
                <div className="glass p-4 rounded-lg">
                  <div className="text-2xl font-bold text-yellow-400 mb-2">
                    99.9%
                  </div>
                  <div className="text-white/70">
                    <TechTooltip
                      term="Network Uptime"
                      definition="The percentage of time the network is operational and available"
                      showIcon={false}
                    >
                      <span className="cursor-help border-b border-dotted border-yellow-400/50">
                        Uptime
                      </span>
                    </TechTooltip>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-cyan-400/20 to-lime-400/20 rounded-2xl p-8 glass-strong">
                <DAGNetworkCard />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-black/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Stay Connected
            </h2>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              Be the first to know about DAGOS updates,
              exclusive features, and community events
            </p>
          </div>
          <div className="max-w-md mx-auto">
            <NewsletterSignup />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <InteractiveFAQ
            title="Frequently Asked Questions"
            subtitle="Everything you need to know about DAGOS presale and technology"
            context="Home • Introduction • General • Presale"
            items={HomeFAQ}
          />
        </div>
      </section>

      {/* Disclaimer Section */}
      <section className="py-16 bg-black/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <DisclaimerSection />
        </div>
      </section>
    </div>
  );
}
