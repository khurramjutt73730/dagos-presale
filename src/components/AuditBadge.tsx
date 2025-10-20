import React from 'react';
import { Shield, CheckCircle, ExternalLink } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';

interface AuditBadgeProps {
  className?: string;
}

export function AuditBadge({ className = '' }: AuditBadgeProps) {
  const auditInfo = {
    company: "CertiK",
    status: "Completed",
    score: "98/100",
    reportUrl: "#", // Placeholder URL
    completedAt: "2024-10-15",
    findings: {
      critical: 0,
      major: 0,
      minor: 2,
      informational: 5
    }
  };

  return (
    <Card className={`glass-strong border-green-500/30 ${className}`}>
      <CardContent className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-green-500/20 rounded-lg">
              <Shield className="w-6 h-6 text-green-400" />
            </div>
            <div>
              <h3 className="font-semibold text-white flex items-center gap-2">
                Security Audit
                <CheckCircle className="w-4 h-4 text-green-400" />
              </h3>
              <p className="text-sm text-white/70">Audited by {auditInfo.company}</p>
            </div>
          </div>
          <Badge className="bg-green-500/20 text-green-400 border-green-500/30">
            {auditInfo.status}
          </Badge>
        </div>

        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-sm text-white/70">Security Score</span>
            <span className="font-semibold text-green-400">{auditInfo.score}</span>
          </div>
          
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div className="flex justify-between">
              <span className="text-white/70">Critical:</span>
              <span className="text-green-400">{auditInfo.findings.critical}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-white/70">Major:</span>
              <span className="text-green-400">{auditInfo.findings.major}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-white/70">Minor:</span>
              <span className="text-yellow-400">{auditInfo.findings.minor}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-white/70">Info:</span>
              <span className="text-blue-400">{auditInfo.findings.informational}</span>
            </div>
          </div>

          <Button 
            variant="outline" 
            size="sm" 
            className="w-full mt-4 border-green-500/30 text-green-400 hover:bg-green-500/10"
          >
            <ExternalLink className="w-4 h-4 mr-2" />
            View Full Report
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}