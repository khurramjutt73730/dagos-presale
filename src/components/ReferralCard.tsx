import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Badge } from './ui/badge';
import { Copy, Check, Gift, Share2, Twitter, MessageCircle } from 'lucide-react';
import { toast } from 'sonner@2.0.3';
import { motion } from 'framer-motion';

interface ReferralCardProps {
  referralCode: string;
  referralRate?: number;
  className?: string;
  onShare?: () => void;
}

export function ReferralCard({ 
  referralCode, 
  referralRate = 5,
  className = '',
  onShare
}: ReferralCardProps) {
  const [copied, setCopied] = useState(false);

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

  const shareToTwitter = () => {
    const text = `Join me in the DAGOS presale! Get exclusive access to next-gen DAG Network tokens. Use my referral code: ${referralCode}`;
    const url = generateReferralLink();
    window.open(
      `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`,
      '_blank'
    );
  };

  const shareToTelegram = () => {
    const text = `Join me in the DAGOS presale! Get exclusive access to next-gen DAG Network tokens. Use my referral code: ${referralCode}`;
    const url = generateReferralLink();
    window.open(
      `https://t.me/share/url?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`,
      '_blank'
    );
  };

  return (
    <Card className={`glass-strong border-white/10 overflow-hidden ${className}`}>
      <CardHeader className="bg-gradient-to-r from-lime-500/10 to-cyan-500/10 border-b border-white/10">
        <CardTitle className="flex items-center gap-2 text-white">
          <div className="p-2 rounded-lg bg-gradient-to-br from-lime-500/20 to-cyan-500/20">
            <Gift className="w-5 h-5 text-lime-400" />
          </div>
          <div>
            Your Referral Link
            <p className="text-sm text-white/60 font-normal mt-1">
              Share and earn {referralRate}% commission on all purchases
            </p>
          </div>
        </CardTitle>
      </CardHeader>
      
      <CardContent className="space-y-4 pt-6">
        {/* Referral Code Display */}
        <div className="space-y-2">
          <label className="text-sm text-white/70">Your Referral Code</label>
          <div className="flex items-center gap-2 p-4 rounded-lg glass border border-white/10 bg-gradient-to-r from-cyan-500/5 to-lime-500/5">
            <code className="text-xl text-cyan-400 tracking-wider flex-1 text-center">
              {referralCode}
            </code>
          </div>
        </div>

        {/* Referral Link Input */}
        <div className="space-y-2">
          <label className="text-sm text-white/70">Full Referral Link</label>
          <div className="flex gap-2">
            <Input
              value={generateReferralLink()}
              readOnly
              className="bg-white/5 border-white/10 text-white text-sm"
            />
            <Button
              onClick={copyReferralLink}
              size="sm"
              className="bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-400 border border-cyan-500/30 min-w-[100px]"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 mr-1" />
                  Copied!
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 mr-1" />
                  Copy
                </>
              )}
            </Button>
          </div>
        </div>

        {/* Share Buttons */}
        <div className="space-y-2">
          <label className="text-sm text-white/70 flex items-center gap-2">
            <Share2 className="w-4 h-4" />
            Share on Social Media
          </label>
          <div className="grid grid-cols-2 gap-2">
            <Button
              onClick={shareToTwitter}
              variant="outline"
              className="border-blue-500/30 text-blue-400 hover:bg-blue-500/10"
            >
              <Twitter className="w-4 h-4 mr-2" />
              Twitter
            </Button>
            <Button
              onClick={shareToTelegram}
              variant="outline"
              className="border-sky-500/30 text-sky-400 hover:bg-sky-500/10"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              Telegram
            </Button>
          </div>
        </div>

        {/* Bonus Info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="p-4 rounded-lg bg-gradient-to-r from-lime-500/10 to-green-500/10 border border-lime-500/20"
        >
          <div className="flex items-start gap-3">
            <Badge className="bg-lime-500/20 text-lime-400 border-lime-500/30">
              +{referralRate}%
            </Badge>
            <div className="flex-1">
              <h4 className="text-white mb-1">Referral Rewards</h4>
              <p className="text-sm text-white/70">
                Earn {referralRate}% of every purchase made using your referral code. Your referrals also get 
                a 2% bonus on their purchase!
              </p>
            </div>
          </div>
        </motion.div>
      </CardContent>
    </Card>
  );
}
