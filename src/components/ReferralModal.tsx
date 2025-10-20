import React, { useState, useEffect } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from './ui/dialog';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Badge } from './ui/badge';
import { 
  Gift, 
  Copy, 
  Check, 
  Share2, 
  Twitter, 
  MessageCircle,
  Users,
  TrendingUp,
  Sparkles
} from 'lucide-react';
import { toast } from 'sonner@2.0.3';
import { motion, AnimatePresence } from 'framer-motion';

interface ReferralModalProps {
  isOpen: boolean;
  onClose: () => void;
  referralCode: string;
  walletAddress: string;
  referralRate?: number;
}

export function ReferralModal({
  isOpen,
  onClose,
  referralCode,
  walletAddress,
  referralRate = 5
}: ReferralModalProps) {
  const [copied, setCopied] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 2000);
    }
  }, [isOpen]);

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
    const text = `🚀 Just joined the DAGOS presale on DAG Network! Join me and get exclusive access to next-gen tokens. Use my referral code for a 2% bonus!`;
    const url = generateReferralLink();
    window.open(
      `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`,
      '_blank'
    );
  };

  const shareToTelegram = () => {
    const text = `🚀 Join me in the DAGOS presale! Get exclusive access to next-gen DAG Network tokens with a 2% bonus using my referral code!`;
    const url = generateReferralLink();
    window.open(
      `https://t.me/share/url?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`,
      '_blank'
    );
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="glass-strong border-white/10 max-w-md">
        <DialogHeader>
          <div className="flex items-center justify-center mb-4">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', duration: 0.5 }}
              className="p-4 rounded-2xl bg-gradient-to-br from-lime-500/20 to-cyan-500/20 border border-lime-500/30"
            >
              <Gift className="w-12 h-12 text-lime-400" />
            </motion.div>
          </div>
          <DialogTitle className="text-center text-white text-2xl">
            🎉 Start Earning Rewards!
          </DialogTitle>
          <DialogDescription className="text-center text-white/70">
            Share your referral link and earn {referralRate}% commission on every purchase
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6 py-4">
          {/* Benefits Cards */}
          <div className="grid grid-cols-2 gap-3">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="p-4 rounded-lg glass border border-white/10 text-center"
            >
              <TrendingUp className="w-6 h-6 text-lime-400 mx-auto mb-2" />
              <div className="text-white mb-1">You Earn</div>
              <Badge className="bg-lime-500/20 text-lime-400 border-lime-500/30">
                {referralRate}% Commission
              </Badge>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="p-4 rounded-lg glass border border-white/10 text-center"
            >
              <Users className="w-6 h-6 text-cyan-400 mx-auto mb-2" />
              <div className="text-white mb-1">They Get</div>
              <Badge className="bg-cyan-500/20 text-cyan-400 border-cyan-500/30">
                2% Bonus Tokens
              </Badge>
            </motion.div>
          </div>

          {/* Referral Code Display */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="space-y-2"
          >
            <label className="text-sm text-white/70">Your Unique Referral Code</label>
            <div className="flex items-center gap-2 p-4 rounded-lg glass-strong border border-white/10 bg-gradient-to-r from-cyan-500/5 to-lime-500/5">
              <code className="text-xl text-cyan-400 tracking-wider flex-1 text-center">
                {referralCode}
              </code>
              <Sparkles className="w-5 h-5 text-lime-400 animate-pulse" />
            </div>
          </motion.div>

          {/* Referral Link */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="space-y-2"
          >
            <label className="text-sm text-white/70">Share This Link</label>
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
          </motion.div>

          {/* Share Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="space-y-3"
          >
            <div className="text-sm text-white/70 flex items-center gap-2">
              <Share2 className="w-4 h-4" />
              Share on Social Media
            </div>
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
          </motion.div>

          {/* Info Box */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="p-4 rounded-lg bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20"
          >
            <p className="text-sm text-white/80 text-center">
              💡 <span className="text-purple-400">Pro Tip:</span> The more you share, the more you earn! 
              Your referral link is automatically tracked and rewards are distributed instantly.
            </p>
          </motion.div>

          {/* Close Button */}
          <Button
            onClick={onClose}
            className="w-full bg-gradient-to-r from-cyan-500/20 to-lime-500/20 hover:from-cyan-500/30 hover:to-lime-500/30 text-white border border-white/20"
          >
            Start Sharing Now
          </Button>
        </div>

        {/* Confetti Effect */}
        <AnimatePresence>
          {showConfetti && (
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              {[...Array(20)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ 
                    y: -20, 
                    x: Math.random() * 400,
                    rotate: 0,
                    opacity: 1
                  }}
                  animate={{ 
                    y: 500,
                    rotate: Math.random() * 360,
                    opacity: 0
                  }}
                  transition={{ 
                    duration: 2,
                    delay: Math.random() * 0.5,
                    ease: 'easeOut'
                  }}
                  className={`absolute w-2 h-2 ${
                    i % 3 === 0 ? 'bg-cyan-400' : i % 3 === 1 ? 'bg-lime-400' : 'bg-purple-400'
                  }`}
                  style={{ left: `${Math.random() * 100}%` }}
                />
              ))}
            </div>
          )}
        </AnimatePresence>
      </DialogContent>
    </Dialog>
  );
}
