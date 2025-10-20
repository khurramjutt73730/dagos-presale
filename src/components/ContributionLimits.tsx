import React from 'react';
import { AlertTriangle, DollarSign, Users, Shield } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Progress } from './ui/progress';
import { Alert, AlertDescription } from './ui/alert';

interface ContributionLimitsProps {
  walletAddress: string;
  currentContribution: number;
  className?: string;
}

export function ContributionLimits({ walletAddress, currentContribution, className = '' }: ContributionLimitsProps) {
  const limits = {
    individual: {
      min: 50,
      max: 10000,
      current: currentContribution,
      currency: 'USD'
    },
    kyc: {
      unverified: 1000,
      verified: 10000
    },
    phase: {
      current: 'Phase 2',
      remaining: 750000,
      total: 2000000
    }
  };

  const isKycVerified = false; // This would come from backend
  const currentLimit = isKycVerified ? limits.kyc.verified : limits.kyc.unverified;
  const utilizationPercent = (limits.individual.current / currentLimit) * 100;
  const remainingLimit = currentLimit - limits.individual.current;

  const getLimitStatus = () => {
    if (utilizationPercent >= 90) return { color: 'text-red-400', bg: 'bg-red-500/20', border: 'border-red-500/30' };
    if (utilizationPercent >= 70) return { color: 'text-yellow-400', bg: 'bg-yellow-500/20', border: 'border-yellow-500/30' };
    return { color: 'text-green-400', bg: 'bg-green-500/20', border: 'border-green-500/30' };
  };

  const status = getLimitStatus();

  if (!walletAddress) {
    return null;
  }

  return (
    <div className={`space-y-4 ${className}`}>
      {/* Main Limits Card */}
      <Card className="glass-strong border-white/10">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-white">
            <Shield className="w-5 h-5 text-cyan-400" />
            Contribution Limits
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Current Usage */}
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-sm text-white/70">Your Contribution</span>
              <span className={`font-semibold ${status.color}`}>
                ${limits.individual.current.toLocaleString()} / ${currentLimit.toLocaleString()}
              </span>
            </div>
            <Progress 
              value={utilizationPercent} 
              className="h-2"
            />
            <div className="flex justify-between text-xs text-white/60">
              <span>Min: ${limits.individual.min}</span>
              <span>Remaining: ${remainingLimit.toLocaleString()}</span>
            </div>
          </div>

          {/* KYC Status */}
          <div className="flex items-center justify-between p-3 glass rounded-lg">
            <div className="flex items-center gap-3">
              <div className={`p-2 rounded-lg ${isKycVerified ? 'bg-green-500/20' : 'bg-yellow-500/20'}`}>
                <Users className={`w-4 h-4 ${isKycVerified ? 'text-green-400' : 'text-yellow-400'}`} />
              </div>
              <div>
                <div className="text-white font-medium">
                  {isKycVerified ? 'KYC Verified' : 'KYC Pending'}
                </div>
                <div className="text-sm text-white/70">
                  Limit: ${currentLimit.toLocaleString()}
                </div>
              </div>
            </div>
            {!isKycVerified && (
              <button className="text-cyan-400 text-sm hover:text-cyan-300 transition-colors">
                Verify Identity
              </button>
            )}
          </div>

          {/* Phase Information */}
          <div className="flex items-center justify-between p-3 glass rounded-lg">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-purple-500/20 rounded-lg">
                <DollarSign className="w-4 h-4 text-purple-400" />
              </div>
              <div>
                <div className="text-white font-medium">{limits.phase.current}</div>
                <div className="text-sm text-white/70">
                  ${limits.phase.remaining.toLocaleString()} remaining
                </div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-sm text-purple-400">
                {((limits.phase.total - limits.phase.remaining) / limits.phase.total * 100).toFixed(1)}%
              </div>
              <div className="text-xs text-white/60">filled</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Warnings and Alerts */}
      {utilizationPercent >= 70 && (
        <Alert className={`${status.bg} ${status.border}`}>
          <AlertTriangle className={`h-4 w-4 ${status.color}`} />
          <AlertDescription className={status.color}>
            {utilizationPercent >= 90 
              ? `You've reached ${utilizationPercent.toFixed(1)}% of your contribution limit. Only $${remainingLimit.toLocaleString()} remaining.`
              : `You're approaching your contribution limit (${utilizationPercent.toFixed(1)}% used). Consider KYC verification for higher limits.`
            }
          </AlertDescription>
        </Alert>
      )}

      {!isKycVerified && currentContribution >= 500 && (
        <Alert className="bg-blue-500/20 border-blue-500/30">
          <Users className="h-4 w-4 text-blue-400" />
          <AlertDescription className="text-blue-400">
            Complete KYC verification to increase your limit to $10,000 and unlock additional benefits.
          </AlertDescription>
        </Alert>
      )}
    </div>
  );
}