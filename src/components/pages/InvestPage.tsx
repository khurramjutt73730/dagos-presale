import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Badge } from "../ui/badge";
import { Progress } from "../ui/progress";
import { Separator } from "../ui/separator";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import {
  Wallet,
  CreditCard,
  Copy,
  CheckCircle,
  AlertCircle,
  Clock,
  TrendingUp,
  Shield,
  Zap,
  ExternalLink,
  ArrowUpRight,
  HelpCircle,
  DollarSign,
  Users,
  Star,
  Gift,
  Lock,
  Info,
  Calculator,
  FileText,
  PhoneCall,
} from "lucide-react";
import { toast } from "sonner@2.0.3";
import { HowToBuyGuide } from "../HowToBuyGuide";
import { ContributionLimits } from "../ContributionLimits";
import { CountdownTimer } from "../CountdownTimer";
import { AuditBadge } from "../AuditBadge";
import { MultiSigBadge } from "../MultiSigBadge";
import { MultiSigPanel } from "../MultiSigPanel";
import { ReferralModal } from "../ReferralModal";
import { InteractiveFAQ, InvestNowFAQ } from "../InteractiveFAQ";

interface InvestPageProps {
  onConnectWallet: () => void;
  onDisconnectWallet: () => void;
  isWalletConnected: boolean;
  walletAddress?: string;
}

export function InvestPage({
  onConnectWallet,
  onDisconnectWallet,
  isWalletConnected,
  walletAddress,
}: InvestPageProps) {
  const [purchaseAmount, setPurchaseAmount] = useState("");
  const [paymentMethod, setPaymentMethod] = useState<
    "crypto" | "card"
  >("crypto");
  const [transactionStatus, setTransactionStatus] = useState<
    "idle" | "pending" | "success" | "error"
  >("idle");
  const [referralCode, setReferralCode] = useState("");
  const [saleEnded, setSaleEnded] = useState(false);
  const [showReferralModal, setShowReferralModal] = useState(false);
  const [userReferralCode, setUserReferralCode] = useState("");

  // Mock presale data
  const presaleData = {
    currentPrice: 0.03,
    nextPrice: 0.035,
    raised: 1350000,
    hardCap: 2000000,
    tokensSold: 45000000,
    totalTokens: 100000000,
    minPurchase: 50,
    maxPurchase: 50000,
  };

  const walletOptions = [
    {
      name: "MetaMask",
      icon: "🦊",
      description: "Most popular Ethereum wallet",
    },
    {
      name: "Trust Wallet",
      icon: "🛡️",
      description: "Secure mobile wallet",
    },
    {
      name: "Phantom",
      icon: "👻",
      description: "Solana & multi-chain wallet",
    },
    {
      name: "WalletConnect",
      icon: "🔗",
      description: "Connect any wallet",
    },
  ];

  const calculateTokens = () => {
    const amount = parseFloat(purchaseAmount);
    if (isNaN(amount)) return 0;
    return Math.floor(amount / presaleData.currentPrice);
  };

  const calculateBonus = () => {
    const amount = parseFloat(purchaseAmount);
    if (isNaN(amount)) return 0;

    let bonus = 0;
    if (amount >= 1000) bonus = 15;
    else if (amount >= 500) bonus = 10;
    else if (amount >= 100) bonus = 5;

    if (referralCode) bonus += 2;

    return bonus;
  };

  const getTotalTokens = () => {
    const baseTokens = calculateTokens();
    const bonus = calculateBonus();
    return Math.floor(baseTokens * (1 + bonus / 100));
  };

  const handlePurchase = async () => {
    if (!isWalletConnected) {
      toast.error("Please connect your wallet first");
      return;
    }

    const amount = parseFloat(purchaseAmount);
    if (amount < presaleData.minPurchase) {
      toast.error(
        `Minimum purchase is $${presaleData.minPurchase}`,
      );
      return;
    }
    if (amount > presaleData.maxPurchase) {
      toast.error(
        `Maximum purchase is $${presaleData.maxPurchase}`,
      );
      return;
    }

    setTransactionStatus("pending");

    // Simulate transaction
    setTimeout(() => {
      const success = Math.random() > 0.1; // 90% success rate
      if (success) {
        setTransactionStatus("success");
        toast.success(
          "Purchase successful! Tokens will be available for claim after presale ends.",
        );
        setPurchaseAmount("");
      } else {
        setTransactionStatus("error");
        toast.error("Transaction failed. Please try again.");
      }

      setTimeout(() => setTransactionStatus("idle"), 3000);
    }, 3000);
  };

  const copyContractAddress = () => {
    navigator.clipboard.writeText(
      "0x742d35Cc6634C0532925a3b8C17f2E8E3a5fee32",
    );
    toast.success("Contract address copied to clipboard!");
  };

  const formatAddress = (address: string) => {
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  };

  const progressPercentage =
    (presaleData.raised / presaleData.hardCap) * 100;
  const saleEndDate = new Date("2025-12-31T23:59:59");

  const handleSaleEnd = () => {
    setSaleEnded(true);
    toast.info(
      "Presale has ended! Thank you for your participation.",
    );
  };

  // Investment tiers data
  const investmentTiers = [
    {
      name: "Standard",
      minAmount: 50,
      maxAmount: 999,
      bonus: 0,
      color: "border-gray-400/50",
      bgColor: "bg-gray-500/10"
    },
    {
      name: "Bronze",
      minAmount: 1000,
      maxAmount: 4999,
      bonus: 5,
      color: "border-orange-400/50",
      bgColor: "bg-orange-500/10"
    },
    {
      name: "Gold",
      minAmount: 5000,
      maxAmount: 19999,
      bonus: 10,
      color: "border-yellow-400/50",
      bgColor: "bg-yellow-500/10"
    },
    {
      name: "Platinum",
      minAmount: 20000,
      maxAmount: 50000,
      bonus: 15,
      color: "border-purple-400/50",
      bgColor: "bg-purple-500/10"
    }
  ];

  const getCurrentTier = (amount: number) => {
    return investmentTiers.find(tier => amount >= tier.minAmount && amount <= tier.maxAmount) || investmentTiers[0];
  };

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-gradient-to-r from-cyan-400 to-lime-400 text-navy-900">
            Presale Live Now
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            DAGOS Token Investment
            <span className="block gradient-cyber bg-clip-text text-transparent">
              Dashboard
            </span>
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Secure your DAGOS tokens with our comprehensive investment platform featuring real-time calculations and tiered bonuses.
          </p>
        </div>

        {/* Key Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6 mb-12">
          <Card className="glass-strong border-white/10 hover:border-cyan-400/50 transition-all duration-300">
            <CardContent className="p-4 lg:p-6 text-center">
              <div className="text-2xl lg:text-3xl font-bold text-cyan-400 mb-2">
                $2.4M
              </div>
              <div className="text-sm text-white/70">Fund Raised</div>
            </CardContent>
          </Card>
          <Card className="glass-strong border-white/10 hover:border-lime-400/50 transition-all duration-300">
            <CardContent className="p-4 lg:p-6 text-center">
              <div className="text-2xl lg:text-3xl font-bold text-lime-400 mb-2">
                44M
              </div>
              <div className="text-sm text-white/70">Tokens Sold</div>
            </CardContent>
          </Card>
          <Card className="glass-strong border-white/10 hover:border-purple-400/50 transition-all duration-300">
            <CardContent className="p-4 lg:p-6 text-center">
              <div className="text-2xl lg:text-3xl font-bold text-purple-400 mb-2">
                2,547
              </div>
              <div className="text-sm text-white/70">Investors</div>
            </CardContent>
          </Card>
          <Card className="glass-strong border-white/10 hover:border-yellow-400/50 transition-all duration-300">
            <CardContent className="p-4 lg:p-6 text-center">
              <div className="text-2xl lg:text-3xl font-bold text-yellow-400 mb-2">
                $50.5M
              </div>
              <div className="text-sm text-white/70">Hard Cap</div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Investment Interface */}
          <div className="lg:col-span-2 space-y-6">
            {/* Wallet Connection */}
            <Card className="glass-strong border-white/10">
              <CardHeader>
                <CardTitle className="text-xl text-white flex items-center gap-3">
                  <Wallet className="w-6 h-6 text-cyan-400" />
                  Connect Your Wallet
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {!isWalletConnected ? (
                  <>
                    <p className="text-white/70 mb-4">
                      Connect your wallet to start investing in DAGOS tokens
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                      {walletOptions.map((wallet, index) => (
                        <Button
                          key={index}
                          onClick={onConnectWallet}
                          variant="outline"
                          className="h-16 border-white/20 hover:border-cyan-400/50 hover:bg-cyan-400/10 transition-all duration-200"
                        >
                          <div className="text-center">
                            <div className="text-xl mb-1">{wallet.icon}</div>
                            <div className="text-white text-sm">{wallet.name}</div>
                          </div>
                        </Button>
                      ))}
                    </div>
                  </>
                ) : (
                  <div className="flex items-center justify-between bg-lime-400/10 border border-lime-400/30 rounded-lg p-4">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-6 h-6 text-lime-400" />
                      <div>
                        <div className="text-white font-medium">Wallet Connected</div>
                        <div className="text-white/60 text-sm">{formatAddress(walletAddress || "")}</div>
                      </div>
                    </div>
                    <Button
                      onClick={onDisconnectWallet}
                      variant="outline"
                      size="sm"
                      className="border-red-400/30 text-red-400 hover:bg-red-400/10"
                    >
                      Disconnect
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Investment Calculator */}
            <Card className="glass-strong border-white/10">
              <CardHeader>
                <CardTitle className="text-xl text-white flex items-center gap-3">
                  <Calculator className="w-6 h-6 text-lime-400" />
                  Investment Calculator
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <Label className="text-white">Investment Amount</Label>
                    <div className="relative">
                      <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-white/60" />
                      <Input
                        type="number"
                        placeholder="Enter amount"
                        value={purchaseAmount}
                        onChange={(e) => setPurchaseAmount(e.target.value)}
                        className="pl-10 bg-white/5 border-white/20 text-white"
                        min={presaleData.minPurchase}
                        max={presaleData.maxPurchase}
                      />
                    </div>
                  </div>
                  <div className="space-y-3">
                    <Label className="text-white">Currency</Label>
                    <Select defaultValue="USD">
                      <SelectTrigger className="bg-white/5 border-white/20 text-white">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent className="glass-strong border-white/20">
                        <SelectItem value="USD">USD ($)</SelectItem>
                        <SelectItem value="ETH">Ethereum (ETH)</SelectItem>
                        <SelectItem value="USDT">Tether (USDT)</SelectItem>
                        <SelectItem value="USDC">USD Coin (USDC)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Quick Amount Buttons */}
                <div className="grid grid-cols-4 gap-2">
                  {[100, 500, 1000, 5000].map((amount) => (
                    <Button
                      key={amount}
                      onClick={() => setPurchaseAmount(amount.toString())}
                      variant="outline"
                      size="sm"
                      className="border-white/30 text-white/70 hover:bg-white/10"
                    >
                      ${amount}
                    </Button>
                  ))}
                </div>

                {/* Referral Code */}
                <div className="space-y-3">
                  <Label className="text-white">Referral Code (Optional)</Label>
                  <Input
                    placeholder="Enter referral code for additional 2% bonus"
                    value={referralCode}
                    onChange={(e) => setReferralCode(e.target.value)}
                    className="bg-white/5 border-white/20 text-white placeholder-white/50"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Calculation Results */}
            {purchaseAmount && (
              <Card className="glass-strong border-white/10">
                <CardHeader>
                  <CardTitle className="text-xl text-white">Calculation Results</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-cyan-400/10 border border-cyan-400/30 rounded-lg p-4 text-center">
                      <div className="text-2xl font-bold text-cyan-400">
                        {calculateTokens().toLocaleString()}
                      </div>
                      <div className="text-sm text-white/70">Base DAGOS Tokens</div>
                    </div>
                    <div className="bg-lime-400/10 border border-lime-400/30 rounded-lg p-4 text-center">
                      <div className="text-2xl font-bold text-lime-400">
                        {getTotalTokens().toLocaleString()}
                      </div>
                      <div className="text-sm text-white/70">Total with Bonus</div>
                    </div>
                    <div className="bg-purple-400/10 border border-purple-400/30 rounded-lg p-4 text-center">
                      <div className="text-2xl font-bold text-purple-400">
                        ${(getTotalTokens() * 0.05).toLocaleString()}
                      </div>
                      <div className="text-sm text-white/70">Estimated Future Value</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Investment Tiers & Discounts */}
            <Card className="glass-strong border-white/10">
              <CardHeader>
                <CardTitle className="text-xl text-white flex items-center gap-3">
                  <Star className="w-6 h-6 text-yellow-400" />
                  Investment Tier & Discounts
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {investmentTiers.map((tier, index) => {
                    const amount = parseFloat(purchaseAmount) || 0;
                    const isActive = amount >= tier.minAmount && amount <= tier.maxAmount;
                    
                    return (
                      <div
                        key={index}
                        className={`border rounded-lg p-4 text-center transition-all duration-300 ${
                          isActive
                            ? `${tier.color} ${tier.bgColor} scale-105`
                            : 'border-white/20 hover:border-white/40'
                        }`}
                      >
                        <div className="text-lg font-bold text-white mb-2">{tier.name}</div>
                        <div className="text-sm text-white/70 mb-2">
                          ${tier.minAmount.toLocaleString()} - ${tier.maxAmount.toLocaleString()}
                        </div>
                        <div className={`text-xl font-bold ${isActive ? 'text-lime-400' : 'text-white/70'}`}>
                          {tier.bonus}% Bonus
                        </div>
                        {isActive && (
                          <Badge className="mt-2 bg-lime-400/20 text-lime-400 border-lime-400/50">
                            Active Tier
                          </Badge>
                        )}
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>

            {/* Payment Method */}
            <Card className="glass-strong border-white/10">
              <CardHeader>
                <CardTitle className="text-xl text-white">Payment Method</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Tabs value={paymentMethod} onValueChange={(value) => setPaymentMethod(value as "crypto" | "card")}>
                  <TabsList className="grid w-full grid-cols-2 bg-white/10">
                    <TabsTrigger value="crypto" className="data-[state=active]:bg-cyan-400 data-[state=active]:text-navy-900">
                      <Wallet className="w-4 h-4 mr-2" />
                      Cryptocurrency
                    </TabsTrigger>
                    <TabsTrigger value="card" className="data-[state=active]:bg-cyan-400 data-[state=active]:text-navy-900">
                      <CreditCard className="w-4 h-4 mr-2" />
                      Credit Card
                    </TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="crypto" className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-white/5 border border-white/20 rounded-lg p-4 text-center">
                        <div className="text-xl mb-2">₿</div>
                        <div className="text-white text-sm">Bitcoin</div>
                      </div>
                      <div className="bg-white/5 border border-white/20 rounded-lg p-4 text-center">
                        <div className="text-xl mb-2">Ξ</div>
                        <div className="text-white text-sm">Ethereum</div>
                      </div>
                      <div className="bg-white/5 border border-white/20 rounded-lg p-4 text-center">
                        <div className="text-xl mb-2">₮</div>
                        <div className="text-white text-sm">USDT</div>
                      </div>
                      <div className="bg-white/5 border border-white/20 rounded-lg p-4 text-center">
                        <div className="text-xl mb-2">⚪</div>
                        <div className="text-white text-sm">USDC</div>
                      </div>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="card" className="space-y-4">
                    <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Info className="w-4 h-4 text-yellow-400" />
                        <span className="text-yellow-400 font-medium">Credit Card Processing</span>
                      </div>
                      <p className="text-white/70 text-sm">
                        Credit card payments are processed through our secure partner. Additional fees may apply.
                      </p>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>

            {/* Purchase Button */}
            <Button
              onClick={handlePurchase}
              disabled={
                !purchaseAmount ||
                !isWalletConnected ||
                transactionStatus === "pending" ||
                saleEnded
              }
              className="w-full bg-gradient-to-r from-cyan-400 to-lime-400 text-navy-900 hover:from-cyan-300 hover:to-lime-300 text-lg py-6 font-semibold disabled:opacity-50"
            >
              {saleEnded ? (
                <>
                  <AlertCircle className="w-5 h-5 mr-2" />
                  Sale Ended
                </>
              ) : transactionStatus === "pending" ? (
                <>
                  <Clock className="w-5 h-5 mr-2 animate-spin" />
                  Processing...
                </>
              ) : transactionStatus === "success" ? (
                <>
                  <CheckCircle className="w-5 h-5 mr-2" />
                  Purchase Successful!
                </>
              ) : transactionStatus === "error" ? (
                <>
                  <AlertCircle className="w-5 h-5 mr-2" />
                  Transaction Failed
                </>
              ) : (
                <>
                  <Wallet className="w-5 h-5 mr-2" />
                  Buy DAGOS Tokens
                </>
              )}
            </Button>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Security Features */}
            <Card className="glass-strong border-white/10">
              <CardHeader>
                <CardTitle className="text-xl text-white flex items-center gap-3">
                  <Shield className="w-6 h-6 text-lime-400" />
                  Security Features
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-lime-400" />
                  <span className="text-white/80 text-sm">Smart Contract Audited</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-lime-400" />
                  <span className="text-white/80 text-sm">Multi-Signature Wallet</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-lime-400" />
                  <span className="text-white/80 text-sm">KYC/AML Compliant</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-lime-400" />
                  <span className="text-white/80 text-sm">Locked Team Tokens</span>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="glass-strong border-white/10">
              <CardHeader>
                <CardTitle className="text-xl text-white">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full justify-start border-white/30 text-white/70 hover:bg-white/10">
                  <FileText className="w-4 h-4 mr-3" />
                  View Whitepaper
                </Button>
                <Button variant="outline" className="w-full justify-start border-white/30 text-white/70 hover:bg-white/10">
                  <Users className="w-4 h-4 mr-3" />
                  Join Community
                </Button>
                <Button variant="outline" className="w-full justify-start border-white/30 text-white/70 hover:bg-white/10">
                  <HelpCircle className="w-4 h-4 mr-3" />
                  Get Support
                </Button>
              </CardContent>
            </Card>

            {/* Need Help */}
            <Card className="glass-strong border-white/10">
              <CardHeader>
                <CardTitle className="text-xl text-white">Need Help?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-white/70 text-sm">
                  Our support team is available 24/7 to assist you with your investment.
                </p>
                <div className="space-y-2">
                  <Button variant="outline" className="w-full justify-start border-white/30 text-white/70 hover:bg-white/10">
                    <PhoneCall className="w-4 h-4 mr-3" />
                    Live Chat Support
                  </Button>
                  <Button variant="outline" className="w-full justify-start border-white/30 text-white/70 hover:bg-white/10">
                    <HelpCircle className="w-4 h-4 mr-3" />
                    Investment Guide
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Multi-Sig Security Section */}
        <div className="max-w-6xl mx-auto px-4 py-8">
          <MultiSigPanel
            signers={[
              { name: "Team Lead", role: "CEO & Founder", verified: true },
              { name: "Treasury Manager", role: "CFO", verified: true },
              { name: "Technical Auditor", role: "Security Expert", verified: true },
              { name: "Community Rep", role: "Community Manager", verified: false },
              { name: "Legal Advisor", role: "Legal Counsel", verified: true }
            ]}
            walletAddress="0x742d35Cc6634C0532925a3b8C17f2E8E3a5fee32"
            requiredSignatures={3}
            totalSigners={5}
            explorerUrl="https://etherscan.io"
            defaultExpanded={false}
          />
        </div>

        {/* FAQ Section */}
        <section className="mt-20">
          <InteractiveFAQ
            title="Investment FAQ"
            subtitle="Complete guide to buying DAGOS tokens securely and efficiently"
            context="How to Buy • Wallet • Presale • Investment Tiers • Bonuses • KYC • Multi-Sig Security • Payment Methods"
            items={InvestNowFAQ}
          />
        </section>
      </div>

      {/* Referral Modal */}
      {isWalletConnected && walletAddress && (
        <ReferralModal
          isOpen={showReferralModal}
          onClose={() => setShowReferralModal(false)}
          referralCode={walletAddress.slice(2, 8).toUpperCase()}
          walletAddress={walletAddress}
          referralRate={5}
        />
      )}
    </div>
  );
}