import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Badge } from "../ui/badge";
import { Progress } from "../ui/progress";
import { InteractiveFAQ, TokenomicsFAQ } from "../InteractiveFAQ";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  Legend,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";
import {
  Coins,
  Lock,
  Users,
  Zap,
  TrendingUp,
  Shield,
  Calendar,
  ExternalLink,
} from "lucide-react";
import { TokenomicsInfographic } from "../TokenomicsInfographic";
import { TokenomicsSummaryCards } from "../TokenomicsSummaryCards";
import { AnimatedTokenPieChart } from "../AnimatedTokenPieChart";
import { PreSaleTimeline } from "../PreSaleTimeline";

export function TokenomicsPage() {
  // Enhanced token distribution data with more detail
  const tokenDistribution = [
    {
      name: "Public Presale",
      value: 20,
      amount: 350000000,
      color: "#00FFFF",
      description:
        "Available to public investors during presale phases",
    },
    {
      name: "Liquidity Pool",
      value: 20,
      amount: 200000000,
      color: "#A3FF12",
      description: "DEX liquidity and trading pairs",
    },
    {
      name: "Team & Advisors",
      value: 15,
      amount: 150000000,
      color: "#8A2BE2",
      description:
        "Core team and strategic advisors with vesting",
    },
    {
      name: "Marketing & Partnerships",
      value: 10,
      amount: 100000000,
      color: "#FF6B35",
      description:
        "Marketing campaigns and strategic partnerships",
    },
    {
      name: "Development Fund",
      value: 10,
      amount: 100000000,
      color: "#FFD700",
      description: "Future development and ecosystem growth",
    },
    {
      name: "Reserve Fund",
      value: 10,
      amount: 100000000,
      color: "#FF69B4",
      description:
        "Emergency reserves and future opportunities",
    },
  ];

  // Vesting schedule data
  const vestingSchedule = [
    {
      category: "Presale",
      immediate: 30,
      month3: 20,
      month6: 25,
      month12: 25,
      locked: false,
    },
    {
      category: "Team",
      immediate: 0,
      month3: 0,
      month6: 10,
      month12: 90,
      locked: true,
    },
    {
      category: "Advisors",
      immediate: 10,
      month3: 20,
      month6: 30,
      month12: 40,
      locked: true,
    },
    {
      category: "Marketing",
      immediate: 50,
      month3: 25,
      month6: 15,
      month12: 10,
      locked: false,
    },
    {
      category: "Development",
      immediate: 20,
      month3: 30,
      month6: 30,
      month12: 20,
      locked: false,
    },
  ];

  // Token utility features
  const utilities = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Transaction Fees",
      description:
        "Pay network fees with DAGOS tokens at discounted rates",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Governance Voting",
      description:
        "Vote on protocol upgrades and ecosystem decisions",
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Staking Rewards",
      description: "Earn up to 12% APY by staking DAGOS tokens",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Validator Rights",
      description:
        "Become a network validator with sufficient stake",
    },
  ];

  // Token metrics
  const tokenMetrics = [
    {
      label: "Total Supply",
      value: "1,000,000,000",
      unit: "DAGOS",
    },
    {
      label: "Circulating Supply",
      value: "350,000,000",
      unit: "DAGOS",
    },
    { label: "Initial Price", value: "$0.03", unit: "USD" },
    { label: "Listing Price", value: "$0.05", unit: "USD" },
    {
      label: "Market Cap (Listing)",
      value: "$17.5M",
      unit: "USD",
    },
    {
      label: "Fully Diluted Value",
      value: "$50M",
      unit: "USD",
    },
  ];

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div className="glass-strong p-3 rounded-lg border border-white/20">
          <p className="text-white font-medium">{data.name}</p>
          <p className="text-cyan-400">
            {data.value}% ({data.amount.toLocaleString()} DAGOS)
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-gradient-to-r from-cyan-400 to-lime-400 text-navy-900">
            Token Economics
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            DAGOS Token
            <span className="block gradient-cyber bg-clip-text text-transparent">
              Distribution & Utility
            </span>
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Discover the economic model behind DAGOS, designed
            for sustainable growth and maximum value creation
            for all stakeholders.
          </p>
        </div>

        {/* NEW: Animated Infographic Overview */}
        <TokenomicsInfographic />

        {/* NEW: Tokenomics Summary Cards */}
        <TokenomicsSummaryCards />

        {/* NEW: 3D Animated Pie Chart */}
        <AnimatedTokenPieChart />

        {/* NEW: Pre-Sale Timeline */}
        <PreSaleTimeline />

        {/* Vesting Schedule */}
        <section className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Token{' '}
              <span className="text-gradient">Vesting Schedule</span>
            </h2>
            <p className="text-white/80 text-lg">
              Transparent token release schedule ensuring
              long-term commitment
            </p>
          </div>

          <Card className="glass-strong border-white/10">
            <CardContent className="p-6">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-3 px-4 text-white">
                        Category
                      </th>
                      <th className="text-center py-3 px-4 text-white">
                        At TGE
                      </th>
                      <th className="text-center py-3 px-4 text-white">
                        3 Months
                      </th>
                      <th className="text-center py-3 px-4 text-white">
                        6 Months
                      </th>
                      <th className="text-center py-3 px-4 text-white">
                        12 Months
                      </th>
                      <th className="text-center py-3 px-4 text-white">
                        Lock Status
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {vestingSchedule.map((item, index) => (
                      <tr
                        key={index}
                        className="border-b border-white/10"
                      >
                        <td className="py-3 px-4 text-white font-medium">
                          {item.category}
                        </td>
                        <td className="text-center py-3 px-4 text-cyan-400">
                          {item.immediate}%
                        </td>
                        <td className="text-center py-3 px-4 text-cyan-400">
                          {item.month3}%
                        </td>
                        <td className="text-center py-3 px-4 text-cyan-400">
                          {item.month6}%
                        </td>
                        <td className="text-center py-3 px-4 text-cyan-400">
                          {item.month12}%
                        </td>
                        <td className="text-center py-3 px-4">
                          {item.locked ? (
                            <Badge className="bg-red-500/20 text-red-400 border-red-400/50">
                              <Lock className="w-3 h-3 mr-1" />
                              Locked
                            </Badge>
                          ) : (
                            <Badge className="bg-lime-500/20 text-lime-400 border-lime-400/50">
                              Unlocked
                            </Badge>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Comprehensive Token Utility Across DAGOS Ecosystem */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Comprehensive{' '}
              <span className="text-gradient">Token Utility</span>
            </h2>
            <p className="text-white/80 text-lg max-w-3xl mx-auto">
              DAGOS tokens power every aspect of our ecosystem,
              from governance and staking to payments and
              rewards, creating sustainable value across
              multiple use cases.
            </p>
          </div>

          {/* Core Utility Categories */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {/* Governance & Voting */}
            <Card className="glass-strong border-white/10 hover:border-cyan-400/50 transition-all duration-500 group">
              <CardHeader className="pb-4">
                <CardTitle className="text-xl text-white flex items-center gap-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-lime-400 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Users className="w-5 h-5 text-navy-900" />
                  </div>
                  Governance & Voting
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-start gap-3 p-3 glass rounded-lg hover:bg-white/5 transition-all duration-300">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <div className="text-white font-medium text-sm">
                        Protocol Governance
                      </div>
                      <div className="text-white/60 text-xs">
                        Vote on network upgrades, fee
                        structures, and protocol parameters
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3 glass rounded-lg hover:bg-white/5 transition-all duration-300">
                    <div className="w-2 h-2 bg-lime-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <div className="text-white font-medium text-sm">
                        Treasury Management
                      </div>
                      <div className="text-white/60 text-xs">
                        Direct allocation of ecosystem treasury
                        funds and grants
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3 glass rounded-lg hover:bg-white/5 transition-all duration-300">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <div className="text-white font-medium text-sm">
                        Partnership Approval
                      </div>
                      <div className="text-white/60 text-xs">
                        Vote on strategic partnerships and
                        ecosystem integrations
                      </div>
                    </div>
                  </div>
                </div>
                <Badge className="w-full justify-center bg-cyan-400/20 text-cyan-400 border-cyan-400/50">
                  1 DAGOS = 1 Vote
                </Badge>
              </CardContent>
            </Card>

            {/* Network Operations */}
            <Card className="glass-strong border-white/10 hover:border-lime-400/50 transition-all duration-500 group">
              <CardHeader className="pb-4">
                <CardTitle className="text-xl text-white flex items-center gap-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-lime-400 to-cyan-400 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Zap className="w-5 h-5 text-navy-900" />
                  </div>
                  Network Operations
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-start gap-3 p-3 glass rounded-lg hover:bg-white/5 transition-all duration-300">
                    <div className="w-2 h-2 bg-lime-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <div className="text-white font-medium text-sm">
                        Transaction Fees
                      </div>
                      <div className="text-white/60 text-xs">
                        Pay network fees with 25% discount when
                        using DAGOS
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3 glass rounded-lg hover:bg-white/5 transition-all duration-300">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <div className="text-white font-medium text-sm">
                        Validator Staking
                      </div>
                      <div className="text-white/60 text-xs">
                        Become a network validator with minimum
                        100K DAGOS stake
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3 glass rounded-lg hover:bg-white/5 transition-all duration-300">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <div className="text-white font-medium text-sm">
                        Node Rewards
                      </div>
                      <div className="text-white/60 text-xs">
                        Earn rewards for running network
                        infrastructure
                      </div>
                    </div>
                  </div>
                </div>
                <Badge className="w-full justify-center bg-lime-400/20 text-lime-400 border-lime-400/50">
                  Up to 15% APY
                </Badge>
              </CardContent>
            </Card>

            {/* DeFi & Rewards */}
            <Card className="glass-strong border-white/10 hover:border-purple-400/50 transition-all duration-500 group">
              <CardHeader className="pb-4">
                <CardTitle className="text-xl text-white flex items-center gap-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-purple-400 to-lime-400 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <TrendingUp className="w-5 h-5 text-navy-900" />
                  </div>
                  DeFi & Rewards
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-start gap-3 p-3 glass rounded-lg hover:bg-white/5 transition-all duration-300">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <div className="text-white font-medium text-sm">
                        Liquidity Mining
                      </div>
                      <div className="text-white/60 text-xs">
                        Provide liquidity to earn additional
                        DAGOS rewards
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3 glass rounded-lg hover:bg-white/5 transition-all duration-300">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <div className="text-white font-medium text-sm">
                        Yield Farming
                      </div>
                      <div className="text-white/60 text-xs">
                        Stake in various pools for compound
                        rewards
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3 glass rounded-lg hover:bg-white/5 transition-all duration-300">
                    <div className="w-2 h-2 bg-lime-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <div className="text-white font-medium text-sm">
                        Referral Bonuses
                      </div>
                      <div className="text-white/60 text-xs">
                        Earn 2% of referred investments in DAGOS
                        tokens
                      </div>
                    </div>
                  </div>
                </div>
                <Badge className="w-full justify-center bg-purple-400/20 text-purple-400 border-purple-400/50">
                  Multiple Reward Streams
                </Badge>
              </CardContent>
            </Card>
          </div>

          {/* Ecosystem Applications */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">
              Ecosystem Applications
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: <Shield className="w-5 h-5" />,
                  title: "Insurance Premiums",
                  description:
                    "Pay for smart contract insurance using DAGOS tokens",
                },
                {
                  icon: <Coins className="w-5 h-5" />,
                  title: "NFT Marketplace",
                  description:
                    "Primary currency for NFT trades and royalties",
                },
                {
                  icon: <Users className="w-5 h-5" />,
                  title: "Gaming Rewards",
                  description:
                    "Earn DAGOS through ecosystem gaming applications",
                },
                {
                  icon: <TrendingUp className="w-5 h-5" />,
                  title: "Premium Features",
                  description:
                    "Access advanced analytics and trading tools",
                },
              ].map((app, index) => (
                <Card
                  key={index}
                  className="glass-strong border-white/10 hover:border-white/30 transition-all duration-300 group"
                >
                  <CardContent className="p-4 text-center">
                    <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-lime-400 rounded-lg flex items-center justify-center text-navy-900 mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                      {app.icon}
                    </div>
                    <h4 className="text-white font-medium mb-2 text-sm">
                      {app.title}
                    </h4>
                    <p className="text-white/60 text-xs">
                      {app.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Value Accrual Mechanisms */}
          <Card className="glass-strong border-white/10 hover:border-cyan-400/30 transition-all duration-500">
            <CardHeader className="text-center pb-4">
              <CardTitle className="text-2xl text-white flex items-center justify-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-lime-400 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-navy-900" />
                </div>
                Value Accrual Mechanisms
              </CardTitle>
              <p className="text-white/60">
                Multiple mechanisms designed to create
                sustainable token value
              </p>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto">
                    <span className="text-2xl">🔥</span>
                  </div>
                  <h4 className="text-white font-semibold">
                    Token Burns
                  </h4>
                  <p className="text-white/60 text-sm">
                    2% of transaction fees are burned quarterly,
                    reducing total supply over time
                  </p>
                  <Badge className="bg-red-500/20 text-red-400 border-red-400/50">
                    Deflationary
                  </Badge>
                </div>

                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto">
                    <span className="text-2xl">💎</span>
                  </div>
                  <h4 className="text-white font-semibold">
                    Staking Locks
                  </h4>
                  <p className="text-white/60 text-sm">
                    Long-term staking reduces circulating supply
                    while rewarding committed holders
                  </p>
                  <Badge className="bg-blue-500/20 text-blue-400 border-blue-400/50">
                    Supply Reduction
                  </Badge>
                </div>

                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto">
                    <span className="text-2xl">📈</span>
                  </div>
                  <h4 className="text-white font-semibold">
                    Revenue Sharing
                  </h4>
                  <p className="text-white/60 text-sm">
                    25% of platform revenue distributed to
                    long-term stakers as additional rewards
                  </p>
                  <Badge className="bg-green-500/20 text-green-400 border-green-400/50">
                    Profit Sharing
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Token Utility */}
        <section className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Core Token Utilities
            </h2>
            <p className="text-white/70 text-lg">
              Essential use cases driving immediate value and
              demand for DAGOS tokens
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {utilities.map((utility, index) => (
              <Card
                key={index}
                className="glass-strong border-white/10 hover:glow-cyan transition-all duration-300"
              >
                <CardContent className="p-6 text-center space-y-4">
                  <div className="mx-auto w-12 h-12 bg-gradient-to-br from-cyan-400 to-lime-400 rounded-lg flex items-center justify-center text-navy-900">
                    {utility.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-white">
                    {utility.title}
                  </h3>
                  <p className="text-white/70 text-sm">
                    {utility.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Smart Contract & Audit */}
        <section>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="glass-strong border-white/10">
              <CardHeader>
                <CardTitle className="text-xl text-white flex items-center">
                  <Coins className="w-6 h-6 mr-3 text-cyan-400" />
                  Smart Contract
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-white/80">
                  DAGOS token contract is fully audited and
                  verified on the blockchain explorer.
                </p>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-white/70">
                      Contract Address:
                    </span>
                    <span className="text-cyan-400 text-sm font-mono">
                      0x742d...3a5f
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/70">
                      Token Standard:
                    </span>
                    <span className="text-lime-400">
                      ERC-20
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/70">
                      Decimals:
                    </span>
                    <span className="text-lime-400">18</span>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <Badge className="bg-cyan-500/20 text-cyan-400 border-cyan-400/50">
                    <ExternalLink className="w-3 h-3 mr-1" />
                    View on Explorer
                  </Badge>
                  <Badge className="bg-lime-500/20 text-lime-400 border-lime-400/50">
                    <Shield className="w-3 h-3 mr-1" />
                    Verified
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-strong border-white/10">
              <CardHeader>
                <CardTitle className="text-xl text-white flex items-center">
                  <Shield className="w-6 h-6 mr-3 text-lime-400" />
                  Security Audit
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-white/80">
                  Comprehensive security audits completed by
                  leading blockchain security firms.
                </p>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-white/70">
                      Primary Auditor:
                    </span>
                    <span className="text-cyan-400">
                      CertiK
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/70">
                      Secondary Auditor:
                    </span>
                    <span className="text-cyan-400">
                      Quantstamp
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/70">
                      Audit Score:
                    </span>
                    <span className="text-lime-400">
                      95/100
                    </span>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <Badge className="bg-lime-500/20 text-lime-400 border-lime-400/50">
                    <Calendar className="w-3 h-3 mr-1" />
                    Nov 2024
                  </Badge>
                  <Badge className="bg-cyan-500/20 text-cyan-400 border-cyan-400/50">
                    <ExternalLink className="w-3 h-3 mr-1" />
                    View Report
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mt-20">
          <InteractiveFAQ
            title="Tokenomics FAQ"
            subtitle="Understanding DAGOS token distribution, utility, and economics"
            context="Tokenomics • Vesting • Token Utility • Distribution"
            items={TokenomicsFAQ}
          />
        </section>
      </div>
    </div>
  );
}