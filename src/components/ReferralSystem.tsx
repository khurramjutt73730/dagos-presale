import React, { useState, useEffect } from 'react';
import { Copy, Users, Gift, TrendingUp, Check } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Badge } from './ui/badge';
import { toast } from 'sonner@2.0.3';

interface ReferralSystemProps {
  walletAddress: string;
  className?: string;
}

export function ReferralSystem({ walletAddress, className = '' }: ReferralSystemProps) {
  const [referralCode, setReferralCode] = useState('');
  const [copied, setCopied] = useState(false);
  const [referralStats, setReferralStats] = useState({
    totalReferrals: 12,
    activeReferrals: 8,
    totalEarned: 2.45,
    pendingRewards: 0.85,
    referralRate: 5 // percentage
  });

  useEffect(() => {
    // Generate referral code from wallet address
    if (walletAddress) {
      const code = walletAddress.slice(2, 8).toUpperCase();
      setReferralCode(`DAGOS-${code}`);
    }
  }, [walletAddress]);

  const generateReferralLink = () => {
    return `${window.location.origin}?ref=${referralCode}`;
  };

  const copyReferralLink = async () => {
    try {
      await navigator.clipboard.writeText(generateReferralLink());
      setCopied(true);
      toast.success('Referral link copied to clipboard!');
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      toast.error('Failed to copy link');
    }
  };

  const recentReferrals = [
    { address: '0x742...fee32', amount: 500, date: '2024-12-20', status: 'active' },
    { address: '0x123...abc45', amount: 1200, date: '2024-12-19', status: 'active' },
    { address: '0x456...def78', amount: 300, date: '2024-12-18', status: 'pending' },
  ];

  if (!walletAddress) {
    return (
      <Card className={`glass-strong border-white/10 ${className}`}>
        <CardContent className="p-6 text-center">
          <Users className="w-12 h-12 text-white/50 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-white mb-2">Connect Wallet</h3>
          <p className="text-white/70">Connect your wallet to access the referral program</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className={`space-y-6 ${className}`}>
      {/* Referral Link Card */}
      <Card className="glass-strong border-white/10">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-white">
            <Gift className="w-5 h-5 text-lime-400" />
            Your Referral Link
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex gap-2">
            <Input
              value={generateReferralLink()}
              readOnly
              className="bg-white/5 border-white/10 text-white"
            />
            <Button
              onClick={copyReferralLink}
              variant="outline"
              size="sm"
              className="border-cyan-400/30 text-cyan-400 hover:bg-cyan-400/10"
            >
              {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
            </Button>
          </div>
          <div className="text-sm text-white/70">
            Share this link and earn {referralStats.referralRate}% commission on all purchases!
          </div>
        </CardContent>
      </Card>

      {/* Stats Overview */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="glass border-white/10">
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-lime-400">{referralStats.totalReferrals}</div>
            <div className="text-sm text-white/70">Total Referrals</div>
          </CardContent>
        </Card>
        <Card className="glass border-white/10">
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-cyan-400">{referralStats.activeReferrals}</div>
            <div className="text-sm text-white/70">Active</div>
          </CardContent>
        </Card>
        <Card className="glass border-white/10">
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-white">{referralStats.totalEarned} ETH</div>
            <div className="text-sm text-white/70">Total Earned</div>
          </CardContent>
        </Card>
        <Card className="glass border-white/10">
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-yellow-400">{referralStats.pendingRewards} ETH</div>
            <div className="text-sm text-white/70">Pending</div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Referrals */}
      <Card className="glass-strong border-white/10">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-white">
            <TrendingUp className="w-5 h-5 text-cyan-400" />
            Recent Referrals
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {recentReferrals.map((referral, index) => (
              <div key={index} className="flex items-center justify-between p-3 glass rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-lime-400 rounded-full flex items-center justify-center text-xs font-bold text-navy-900">
                    {referral.address.slice(2, 4).toUpperCase()}
                  </div>
                  <div>
                    <div className="text-white font-medium">{referral.address}</div>
                    <div className="text-sm text-white/70">${referral.amount} • {referral.date}</div>
                  </div>
                </div>
                <Badge 
                  className={
                    referral.status === 'active' 
                      ? 'bg-green-500/20 text-green-400 border-green-500/30'
                      : 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30'
                  }
                >
                  {referral.status}
                </Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}