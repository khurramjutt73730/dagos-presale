import React, { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from './ui/dialog';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Badge } from './ui/badge';
import { Progress } from './ui/progress';
import { 
  Shield, 
  Upload, 
  CheckCircle, 
  Clock,
  AlertCircle,
  FileText,
  User,
  Mail,
  MapPin,
  Camera,
  X
} from 'lucide-react';
import { toast } from 'sonner@2.0.3';
import { motion } from 'framer-motion';

interface KYCSettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
  isDarkMode?: boolean;
}

export function KYCSettingsModal({
  isOpen,
  onClose,
  isDarkMode = true
}: KYCSettingsModalProps) {
  const [kycStatus, setKycStatus] = useState<'not-started' | 'in-progress' | 'completed' | 'rejected'>('not-started');
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    country: '',
    idDocument: null as File | null,
    selfie: null as File | null
  });
  const [progress, setProgress] = useState(0);

  const handleSubmit = () => {
    if (!formData.fullName || !formData.email || !formData.country) {
      toast.error('Please fill in all required fields');
      return;
    }
    
    setKycStatus('in-progress');
    setProgress(100);
    toast.success('KYC verification submitted! We will review your documents within 24-48 hours.');
  };

  const handleFileUpload = (type: 'idDocument' | 'selfie', file: File) => {
    setFormData(prev => ({ ...prev, [type]: file }));
    toast.success(`${type === 'idDocument' ? 'ID Document' : 'Selfie'} uploaded successfully`);
  };

  const getStatusBadge = () => {
    switch (kycStatus) {
      case 'completed':
        return (
          <Badge className="bg-green-500/20 text-green-400 border-green-500/30">
            <CheckCircle className="w-4 h-4 mr-1" />
            Verified
          </Badge>
        );
      case 'in-progress':
        return (
          <Badge className="bg-yellow-500/20 text-yellow-400 border-yellow-500/30">
            <Clock className="w-4 h-4 mr-1" />
            Under Review
          </Badge>
        );
      case 'rejected':
        return (
          <Badge className="bg-red-500/20 text-red-400 border-red-500/30">
            <AlertCircle className="w-4 h-4 mr-1" />
            Rejected
          </Badge>
        );
      default:
        return (
          <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/30">
            <Shield className="w-4 h-4 mr-1" />
            Not Started
          </Badge>
        );
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className={`${isDarkMode ? 'bg-[#0B0C10] border-white/10' : 'bg-white border-gray-200'} max-w-2xl max-h-[90vh] overflow-y-auto`}>
        <DialogHeader>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className={`p-3 rounded-xl ${isDarkMode ? 'bg-gradient-to-br from-cyan-500/20 to-violet-500/20' : 'bg-gradient-to-br from-cyan-100 to-violet-100'}`}>
                <Shield className={`w-6 h-6 ${isDarkMode ? 'text-cyan-400' : 'text-cyan-600'}`} />
              </div>
              <div>
                <DialogTitle className={isDarkMode ? 'text-white' : 'text-gray-900'}>
                  KYC Verification
                </DialogTitle>
                <DialogDescription className={isDarkMode ? 'text-white/60' : 'text-gray-600'}>
                  Complete your identity verification
                </DialogDescription>
              </div>
            </div>
            {getStatusBadge()}
          </div>
        </DialogHeader>

        <div className="space-y-6 py-4">
          {/* Info Alert */}
          <div className={`p-4 rounded-lg ${isDarkMode ? 'bg-blue-500/10 border border-blue-500/20' : 'bg-blue-50 border border-blue-200'}`}>
            <div className="flex gap-3">
              <AlertCircle className={`w-5 h-5 flex-shrink-0 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`} />
              <div className={`text-sm ${isDarkMode ? 'text-white/80' : 'text-gray-700'}`}>
                <p className="mb-2">
                  KYC verification is required to comply with regulatory requirements and ensure the security of our platform.
                </p>
                <ul className="list-disc list-inside space-y-1 text-xs">
                  <li>Your information is encrypted and stored securely</li>
                  <li>Verification typically takes 24-48 hours</li>
                  <li>You'll be notified via email once approved</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Progress Bar */}
          {kycStatus === 'in-progress' && (
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className={isDarkMode ? 'text-white/70' : 'text-gray-600'}>Verification Progress</span>
                <span className={isDarkMode ? 'text-cyan-400' : 'text-cyan-600'}>{progress}%</span>
              </div>
              <Progress value={progress} className="h-2" />
            </div>
          )}

          {/* Form */}
          {kycStatus !== 'completed' && (
            <div className="space-y-4">
              {/* Personal Information */}
              <div className="space-y-4">
                <h3 className={`text-sm font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'} flex items-center gap-2`}>
                  <User className="w-4 h-4" />
                  Personal Information
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label className={isDarkMode ? 'text-white/70' : 'text-gray-700'}>
                      Full Name *
                    </Label>
                    <Input
                      value={formData.fullName}
                      onChange={(e) => setFormData(prev => ({ ...prev, fullName: e.target.value }))}
                      placeholder="John Doe"
                      className={`mt-1 ${isDarkMode ? 'bg-white/5 border-white/10 text-white' : 'bg-white border-gray-300'}`}
                    />
                  </div>
                  
                  <div>
                    <Label className={isDarkMode ? 'text-white/70' : 'text-gray-700'}>
                      Email Address *
                    </Label>
                    <Input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                      placeholder="john@example.com"
                      className={`mt-1 ${isDarkMode ? 'bg-white/5 border-white/10 text-white' : 'bg-white border-gray-300'}`}
                    />
                  </div>
                  
                  <div className="md:col-span-2">
                    <Label className={isDarkMode ? 'text-white/70' : 'text-gray-700'}>
                      Country of Residence *
                    </Label>
                    <Input
                      value={formData.country}
                      onChange={(e) => setFormData(prev => ({ ...prev, country: e.target.value }))}
                      placeholder="United States"
                      className={`mt-1 ${isDarkMode ? 'bg-white/5 border-white/10 text-white' : 'bg-white border-gray-300'}`}
                    />
                  </div>
                </div>
              </div>

              {/* Document Upload */}
              <div className="space-y-4">
                <h3 className={`text-sm font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'} flex items-center gap-2`}>
                  <FileText className="w-4 h-4" />
                  Document Upload
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* ID Document */}
                  <div>
                    <Label className={isDarkMode ? 'text-white/70' : 'text-gray-700'}>
                      Government ID
                    </Label>
                    <div className={`mt-1 border-2 border-dashed rounded-lg p-6 text-center cursor-pointer transition-colors ${
                      isDarkMode 
                        ? 'border-white/20 hover:border-cyan-400/50 bg-white/5' 
                        : 'border-gray-300 hover:border-cyan-400 bg-gray-50'
                    }`}>
                      <input
                        type="file"
                        id="id-upload"
                        className="hidden"
                        accept="image/*,.pdf"
                        onChange={(e) => {
                          const file = e.target.files?.[0];
                          if (file) handleFileUpload('idDocument', file);
                        }}
                      />
                      <label htmlFor="id-upload" className="cursor-pointer">
                        {formData.idDocument ? (
                          <div className="flex flex-col items-center gap-2">
                            <CheckCircle className="w-8 h-8 text-green-400" />
                            <span className={`text-sm ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                              {formData.idDocument.name}
                            </span>
                          </div>
                        ) : (
                          <div className="flex flex-col items-center gap-2">
                            <Upload className={`w-8 h-8 ${isDarkMode ? 'text-white/50' : 'text-gray-400'}`} />
                            <span className={`text-sm ${isDarkMode ? 'text-white/70' : 'text-gray-600'}`}>
                              Upload ID Document
                            </span>
                          </div>
                        )}
                      </label>
                    </div>
                  </div>

                  {/* Selfie */}
                  <div>
                    <Label className={isDarkMode ? 'text-white/70' : 'text-gray-700'}>
                      Selfie with ID
                    </Label>
                    <div className={`mt-1 border-2 border-dashed rounded-lg p-6 text-center cursor-pointer transition-colors ${
                      isDarkMode 
                        ? 'border-white/20 hover:border-cyan-400/50 bg-white/5' 
                        : 'border-gray-300 hover:border-cyan-400 bg-gray-50'
                    }`}>
                      <input
                        type="file"
                        id="selfie-upload"
                        className="hidden"
                        accept="image/*"
                        onChange={(e) => {
                          const file = e.target.files?.[0];
                          if (file) handleFileUpload('selfie', file);
                        }}
                      />
                      <label htmlFor="selfie-upload" className="cursor-pointer">
                        {formData.selfie ? (
                          <div className="flex flex-col items-center gap-2">
                            <CheckCircle className="w-8 h-8 text-green-400" />
                            <span className={`text-sm ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                              {formData.selfie.name}
                            </span>
                          </div>
                        ) : (
                          <div className="flex flex-col items-center gap-2">
                            <Camera className={`w-8 h-8 ${isDarkMode ? 'text-white/50' : 'text-gray-400'}`} />
                            <span className={`text-sm ${isDarkMode ? 'text-white/70' : 'text-gray-600'}`}>
                              Upload Selfie
                            </span>
                          </div>
                        )}
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <Button
                onClick={handleSubmit}
                disabled={kycStatus === 'in-progress'}
                className="w-full bg-gradient-to-r from-cyan-500 to-violet-500 hover:from-cyan-600 hover:to-violet-600 text-white"
              >
                {kycStatus === 'in-progress' ? (
                  <>
                    <Clock className="w-4 h-4 mr-2 animate-spin" />
                    Verifying...
                  </>
                ) : (
                  <>
                    <Shield className="w-4 h-4 mr-2" />
                    Submit for Verification
                  </>
                )}
              </Button>
            </div>
          )}

          {/* Completed State */}
          {kycStatus === 'completed' && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className={`p-6 rounded-lg text-center ${isDarkMode ? 'bg-green-500/10 border border-green-500/20' : 'bg-green-50 border border-green-200'}`}
            >
              <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
              <h3 className={`text-xl mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Verification Complete!
              </h3>
              <p className={`text-sm ${isDarkMode ? 'text-white/70' : 'text-gray-600'}`}>
                Your identity has been successfully verified. You now have full access to all platform features.
              </p>
            </motion.div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
