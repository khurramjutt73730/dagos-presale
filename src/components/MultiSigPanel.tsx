import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Shield, 
  CheckCircle, 
  Clock, 
  ExternalLink, 
  ChevronDown, 
  ChevronUp,
  Lock,
  Users,
  Key,
  Info
} from 'lucide-react';
import { Separator } from './ui/separator';
import { Alert, AlertDescription } from './ui/alert';

interface Signer {
  name: string;
  role: string;
  verified: boolean;
  avatar?: string;
}

interface MultiSigPanelProps {
  signers: Signer[];
  walletAddress: string;
  requiredSignatures?: number;
  totalSigners?: number;
  explorerUrl?: string;
  className?: string;
  defaultExpanded?: boolean;
}

export function MultiSigPanel({
  signers,
  walletAddress,
  requiredSignatures = 3,
  totalSigners = 5,
  explorerUrl = 'https://etherscan.io',
  className = '',
  defaultExpanded = false
}: MultiSigPanelProps) {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);

  const verifiedCount = signers.filter(s => s.verified).length;

  return (
    <Card className={`glass-strong border-white/10 overflow-hidden ${className}`}>
      <CardHeader 
        className="cursor-pointer hover:bg-white/5 transition-colors"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-3 text-white">
            <div className="p-2 rounded-lg bg-gradient-to-br from-green-500/20 to-emerald-500/20 border border-green-500/30">
              <Shield className="w-5 h-5 text-green-400" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                Multi-Signature Security
                <Badge className="bg-green-500/20 text-green-400 border-green-500/30">
                  {requiredSignatures}/{totalSigners} Required
                </Badge>
              </div>
              <p className="text-sm text-white/60 font-normal mt-1">
                Enhanced security with multiple authorization layers
              </p>
            </div>
          </CardTitle>
          <Button
            variant="ghost"
            size="sm"
            className="text-white/70 hover:text-white hover:bg-white/10"
          >
            {isExpanded ? (
              <ChevronUp className="w-5 h-5" />
            ) : (
              <ChevronDown className="w-5 h-5" />
            )}
          </Button>
        </div>
      </CardHeader>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
          >
            <CardContent className="space-y-6 pt-0">
              <Separator className="bg-white/10" />

              {/* Security Info Alert */}
              <Alert className="bg-green-500/10 border-green-500/30">
                <Lock className="w-4 h-4 text-green-400" />
                <AlertDescription className="text-white/80">
                  All funds raised in this presale are secured in a multi-signature wallet requiring{' '}
                  <span className="text-green-400">{requiredSignatures} out of {totalSigners}</span> authorized 
                  signers to approve any transaction. This ensures maximum security and transparency.
                </AlertDescription>
              </Alert>

              {/* Key Features Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="flex items-center gap-3 p-3 rounded-lg glass">
                  <div className="p-2 rounded-lg bg-cyan-500/20">
                    <Users className="w-4 h-4 text-cyan-400" />
                  </div>
                  <div>
                    <div className="text-white">{totalSigners} Signers</div>
                    <div className="text-xs text-white/60">Total authorized</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg glass">
                  <div className="p-2 rounded-lg bg-lime-500/20">
                    <Key className="w-4 h-4 text-lime-400" />
                  </div>
                  <div>
                    <div className="text-white">{requiredSignatures} Required</div>
                    <div className="text-xs text-white/60">For transactions</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg glass">
                  <div className="p-2 rounded-lg bg-green-500/20">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                  </div>
                  <div>
                    <div className="text-white">{verifiedCount} Verified</div>
                    <div className="text-xs text-white/60">Active signers</div>
                  </div>
                </div>
              </div>

              {/* Signers List */}
              <div>
                <h4 className="text-white mb-3 flex items-center gap-2">
                  <Info className="w-4 h-4 text-cyan-400" />
                  Authorized Signers
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {signers.map((signer, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center gap-3 p-3 rounded-lg glass-strong border border-white/10 hover:border-white/20 transition-all"
                    >
                      {/* Avatar */}
                      <div className="relative">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-400 to-lime-400 flex items-center justify-center">
                          <span className="text-[#0A0E2A]">
                            {signer.name.charAt(0)}
                          </span>
                        </div>
                        {signer.verified && (
                          <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center border-2 border-[#0A0E2A]">
                            <CheckCircle className="w-3 h-3 text-white" />
                          </div>
                        )}
                      </div>

                      {/* Signer Info */}
                      <div className="flex-1">
                        <div className="text-white">{signer.name}</div>
                        <div className="text-xs text-white/60">{signer.role}</div>
                      </div>

                      {/* Status Badge */}
                      <Badge
                        className={
                          signer.verified
                            ? 'bg-green-500/20 text-green-400 border-green-500/30'
                            : 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30'
                        }
                      >
                        {signer.verified ? (
                          <CheckCircle className="w-3 h-3 mr-1" />
                        ) : (
                          <Clock className="w-3 h-3 mr-1" />
                        )}
                        {signer.verified ? 'Verified' : 'Pending'}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Wallet Address */}
              <div className="space-y-2">
                <h4 className="text-white text-sm">Multi-Sig Wallet Address</h4>
                <div className="flex items-center gap-2 p-3 rounded-lg glass-strong border border-white/10">
                  <code className="flex-1 text-cyan-400 text-sm break-all">
                    {walletAddress}
                  </code>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-cyan-400 hover:text-cyan-300 hover:bg-cyan-400/10"
                    onClick={() => window.open(`${explorerUrl}/address/${walletAddress}`, '_blank')}
                  >
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              {/* View on Explorer Button */}
              <Button
                className="w-full bg-gradient-to-r from-green-500/20 to-emerald-500/20 hover:from-green-500/30 hover:to-emerald-500/30 text-green-400 border border-green-500/30"
                onClick={() => window.open(`${explorerUrl}/address/${walletAddress}`, '_blank')}
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                View on Block Explorer
              </Button>
            </CardContent>
          </motion.div>
        )}
      </AnimatePresence>
    </Card>
  );
}
