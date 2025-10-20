import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from './ui/dialog';
import { Button } from './ui/button';
import { Checkbox } from './ui/checkbox';
import { Badge } from './ui/badge';
import { AlertTriangle, Shield, Globe, CheckCircle, X } from 'lucide-react';

interface EligibilityModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

export function EligibilityModal({ isOpen, onClose, onConfirm }: EligibilityModalProps) {
  const [checks, setChecks] = useState({
    age: false,
    jurisdiction: false,
    understanding: false,
    risks: false,
    compliance: false
  });

  const restrictedCountries = [
    'United States', 'China', 'North Korea', 'Iran', 'Syria', 
    'Cuba', 'Sudan', 'Myanmar', 'Belarus', 'Russia'
  ];

  const allChecked = Object.values(checks).every(Boolean);

  const handleCheckChange = (key: keyof typeof checks) => {
    setChecks(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const handleConfirm = () => {
    if (allChecked) {
      onConfirm();
      onClose();
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl glass-strong border-white/20 text-white max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-2xl text-white">
            <Shield className="w-6 h-6 text-cyan-400" />
            Eligibility & Compliance Check
          </DialogTitle>
          <DialogDescription className="text-white/70">
            Please confirm your eligibility to participate in the DAGOS token presale
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6 py-4">
          {/* Warning Banner */}
          <div className="glass p-4 rounded-lg border border-yellow-400/30">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-yellow-400 mb-2">Important Notice</h3>
                <p className="text-sm text-white/70">
                  Cryptocurrency investments carry significant risk. DAGOS tokens are utility tokens 
                  and not investment securities. Please ensure you understand the risks involved.
                </p>
              </div>
            </div>
          </div>

          {/* Restricted Jurisdictions */}
          <div className="space-y-3">
            <h3 className="font-semibold text-white flex items-center gap-2">
              <Globe className="w-5 h-5 text-cyan-400" />
              Restricted Jurisdictions
            </h3>
            <p className="text-sm text-white/70">
              This token sale is not available to residents of the following countries:
            </p>
            <div className="flex flex-wrap gap-2">
              {restrictedCountries.map((country, index) => (
                <Badge key={index} variant="outline" className="border-red-400/50 text-red-400 text-xs">
                  {country}
                </Badge>
              ))}
            </div>
          </div>

          {/* Eligibility Checklist */}
          <div className="space-y-4">
            <h3 className="font-semibold text-white">Eligibility Requirements</h3>
            
            <div className="space-y-3">
              <label className="flex items-start gap-3 cursor-pointer">
                <Checkbox
                  checked={checks.age}
                  onCheckedChange={() => handleCheckChange('age')}
                  className="mt-1"
                />
                <div className="flex-1">
                  <div className="text-sm font-medium text-white">Age Verification</div>
                  <div className="text-xs text-white/70">
                    I am at least 18 years old (or the legal age in my jurisdiction)
                  </div>
                </div>
              </label>

              <label className="flex items-start gap-3 cursor-pointer">
                <Checkbox
                  checked={checks.jurisdiction}
                  onCheckedChange={() => handleCheckChange('jurisdiction')}
                  className="mt-1"
                />
                <div className="flex-1">
                  <div className="text-sm font-medium text-white">Jurisdiction Compliance</div>
                  <div className="text-xs text-white/70">
                    I am not a resident of any restricted jurisdiction listed above
                  </div>
                </div>
              </label>

              <label className="flex items-start gap-3 cursor-pointer">
                <Checkbox
                  checked={checks.understanding}
                  onCheckedChange={() => handleCheckChange('understanding')}
                  className="mt-1"
                />
                <div className="flex-1">
                  <div className="text-sm font-medium text-white">Technical Understanding</div>
                  <div className="text-xs text-white/70">
                    I understand that DAGOS are utility tokens with specific use cases within the ecosystem
                  </div>
                </div>
              </label>

              <label className="flex items-start gap-3 cursor-pointer">
                <Checkbox
                  checked={checks.risks}
                  onCheckedChange={() => handleCheckChange('risks')}
                  className="mt-1"
                />
                <div className="flex-1">
                  <div className="text-sm font-medium text-white">Risk Acknowledgment</div>
                  <div className="text-xs text-white/70">
                    I understand the risks involved in cryptocurrency investments and can afford potential losses
                  </div>
                </div>
              </label>

              <label className="flex items-start gap-3 cursor-pointer">
                <Checkbox
                  checked={checks.compliance}
                  onCheckedChange={() => handleCheckChange('compliance')}
                  className="mt-1"
                />
                <div className="flex-1">
                  <div className="text-sm font-medium text-white">Legal Compliance</div>
                  <div className="text-xs text-white/70">
                    I have read and agree to the Terms of Service and Privacy Policy
                  </div>
                </div>
              </label>
            </div>
          </div>

          <div className="flex gap-3 pt-4">
            <Button
              onClick={onClose}
              variant="outline"
              className="flex-1 border-white/30 text-white hover:bg-white/10"
            >
              <X className="w-4 h-4 mr-2" />
              Cancel
            </Button>
            <Button
              onClick={handleConfirm}
              disabled={!allChecked}
              className={`flex-1 ${
                allChecked 
                  ? 'bg-gradient-to-r from-cyan-400 to-lime-400 text-navy-900 hover:from-cyan-300 hover:to-lime-300' 
                  : 'bg-gray-600 text-gray-400 cursor-not-allowed'
              }`}
            >
              <CheckCircle className="w-4 h-4 mr-2" />
              Confirm Eligibility
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}