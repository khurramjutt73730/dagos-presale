import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from './ui/dialog';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { 
  Shield, 
  CheckCircle, 
  Award, 
  ExternalLink, 
  FileText, 
  Users, 
  Lock,
  Calendar,
  Globe
} from 'lucide-react';

interface TrustBadge {
  id: string;
  icon: React.ReactNode;
  text: string;
  color: 'lime' | 'cyan' | 'purple';
  title: string;
  description: string;
  details: {
    provider: string;
    date: string;
    certificateUrl?: string;
    reportUrl?: string;
    status: string;
    validUntil?: string;
  };
  features: string[];
}

interface TrustBadgeDetailsProps {
  badge: TrustBadge;
  className?: string;
}

export function TrustBadgeDetails({ badge, className = '' }: TrustBadgeDetailsProps) {
  const [isOpen, setIsOpen] = useState(false);

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'lime': return 'text-lime-400 border-lime-400/50 hover:border-lime-400/70';
      case 'cyan': return 'text-cyan-400 border-cyan-400/50 hover:border-cyan-400/70';
      case 'purple': return 'text-purple-400 border-purple-400/50 hover:border-purple-400/70';
      default: return 'text-white/70 border-white/30 hover:border-white/50';
    }
  };

  return (
    <>
      <Badge 
        className={`glass px-4 py-2 text-sm cursor-pointer transition-all duration-200 hover:scale-105 ${getColorClasses(badge.color)} ${className}`}
        onClick={() => setIsOpen(true)}
      >
        {badge.icon}
        <span className="ml-2 px-2 py-1 rounded" style={{backgroundColor: '#0A0E2A'}}>
          {badge.text}
        </span>
      </Badge>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-2xl glass-strong border-white/20 text-white">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-3 text-2xl text-white">
              <div className={`p-2 rounded-lg bg-gradient-to-br ${
                badge.color === 'lime' ? 'from-lime-400 to-green-400' :
                badge.color === 'cyan' ? 'from-cyan-400 to-blue-400' :
                'from-purple-400 to-indigo-400'
              } text-navy-900`}>
                {badge.icon}
              </div>
              {badge.title}
            </DialogTitle>
            <DialogDescription className="text-white/70">
              View detailed information about this trust badge and its verification status.
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-6 py-4">
            <p className="text-white/80 leading-relaxed">{badge.description}</p>

            {/* Status Card */}
            <Card className="glass border-white/10">
              <CardContent className="p-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm">
                      <Users className="w-4 h-4 text-cyan-400" />
                      <span className="text-white/70">Provider:</span>
                      <span className="text-white font-medium">{badge.details.provider}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Calendar className="w-4 h-4 text-cyan-400" />
                      <span className="text-white/70">Issued:</span>
                      <span className="text-white font-medium">{badge.details.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-lime-400" />
                      <span className="text-white/70">Status:</span>
                      <span className="text-lime-400 font-medium">{badge.details.status}</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    {badge.details.validUntil && (
                      <div className="flex items-center gap-2 text-sm">
                        <Lock className="w-4 h-4 text-cyan-400" />
                        <span className="text-white/70">Valid Until:</span>
                        <span className="text-white font-medium">{badge.details.validUntil}</span>
                      </div>
                    )}
                    <div className="flex items-center gap-2 text-sm">
                      <Globe className="w-4 h-4 text-cyan-400" />
                      <span className="text-white/70">Scope:</span>
                      <span className="text-white font-medium">Global</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Features */}
            <div>
              <h3 className="font-semibold text-white mb-3">What this means:</h3>
              <div className="space-y-2">
                {badge.features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-lime-400 mt-0.5 flex-shrink-0" />
                    <span className="text-white/80 text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3 pt-4 border-t border-white/10">
              {badge.details.certificateUrl && (
                <Button
                  variant="outline"
                  size="sm"
                  className="flex-1 border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/10"
                  onClick={() => window.open(badge.details.certificateUrl, '_blank')}
                >
                  <FileText className="w-4 h-4 mr-2" />
                  View Certificate
                  <ExternalLink className="w-3 h-3 ml-2" />
                </Button>
              )}
              {badge.details.reportUrl && (
                <Button
                  variant="outline"
                  size="sm"
                  className="flex-1 border-lime-400/50 text-lime-400 hover:bg-lime-400/10"
                  onClick={() => window.open(badge.details.reportUrl, '_blank')}
                >
                  <Shield className="w-4 h-4 mr-2" />
                  Full Report
                  <ExternalLink className="w-3 h-3 ml-2" />
                </Button>
              )}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}

// Trust badge data
export const TRUST_BADGES: TrustBadge[] = [
  {
    id: 'kyc',
    icon: <CheckCircle className="w-4 h-4" />,
    text: 'KYC Verified',
    color: 'lime',
    title: 'KYC Verification Complete',
    description: 'DAGOS has completed comprehensive Know Your Customer (KYC) verification through industry-leading compliance partners. This ensures regulatory compliance and builds trust with our community.',
    details: {
      provider: 'Jumio Identity Verification',
      date: 'November 2024',
      certificateUrl: '#',
      status: 'Verified & Active',
      validUntil: 'November 2025'
    },
    features: [
      'Identity verification of all team members',
      'Background checks completed',
      'Regulatory compliance ensured',
      'Transparent team information available',
      'Regular compliance monitoring'
    ]
  },
  {
    id: 'audit',
    icon: <Shield className="w-4 h-4" />,
    text: 'Audit Complete',
    color: 'cyan',
    title: 'Smart Contract Security Audit',
    description: 'Our smart contracts have undergone rigorous security auditing by leading blockchain security firms. All critical issues have been resolved and the code has been thoroughly tested.',
    details: {
      provider: 'CertiK Security',
      date: 'December 2024',
      reportUrl: '#',
      certificateUrl: '#',
      status: 'Passed with Score: 94/100'
    },
    features: [
      'Comprehensive smart contract review',
      'No critical vulnerabilities found',
      'Gas optimization implemented',
      'Best practices followed',
      'Continuous monitoring enabled',
      'Public audit report available'
    ]
  },
  {
    id: 'legal',
    icon: <Award className="w-4 h-4" />,
    text: 'Legal Compliant',
    color: 'purple',
    title: 'Legal & Regulatory Compliance',
    description: 'DAGOS operates in full compliance with applicable laws and regulations. Our legal framework has been reviewed by top-tier law firms specializing in cryptocurrency and securities law.',
    details: {
      provider: 'Morrison & Foerster LLP',
      date: 'October 2024',
      certificateUrl: '#',
      status: 'Fully Compliant',
      validUntil: 'Ongoing'
    },
    features: [
      'Securities law compliance verified',
      'Token utility classification confirmed',
      'Regulatory framework established',
      'Terms of service professionally drafted',
      'Privacy policy GDPR compliant',
      'Jurisdictional compliance mapped'
    ]
  }
];