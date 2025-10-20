import React from 'react';
import { Shield, Lock, CheckCircle } from 'lucide-react';
import { Badge } from './ui/badge';
import { motion } from 'framer-motion';

interface MultiSigBadgeProps {
  variant?: 'default' | 'compact';
  showIcon?: boolean;
  className?: string;
}

export function MultiSigBadge({ 
  variant = 'default', 
  showIcon = true,
  className = '' 
}: MultiSigBadgeProps) {
  if (variant === 'compact') {
    return (
      <Badge 
        className={`bg-gradient-to-r from-green-500/20 to-emerald-500/20 text-green-400 border-green-500/30 backdrop-blur-sm ${className}`}
      >
        {showIcon && <Lock className="w-3 h-3 mr-1" />}
        Multi-Sig Secured
      </Badge>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 backdrop-blur-md ${className}`}
    >
      <div className="relative">
        <Shield className="w-5 h-5 text-green-400" />
        <CheckCircle className="w-3 h-3 text-green-400 absolute -top-1 -right-1" />
      </div>
      <div className="flex flex-col">
        <span className="text-green-400 text-sm">Secured by</span>
        <span className="text-white">Multi-Signature Wallet</span>
      </div>
    </motion.div>
  );
}
