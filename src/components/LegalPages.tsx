import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from './ui/dialog';
import { ScrollArea } from './ui/scroll-area';

interface LegalPagesProps {
  isOpen: boolean;
  onClose: () => void;
  type: 'terms' | 'privacy';
}

export function LegalPages({ isOpen, onClose, type }: LegalPagesProps) {
  const renderTerms = () => (
    <div className="space-y-6 text-sm text-white/80 leading-relaxed">
      <section>
        <h3 className="font-semibold text-white text-base mb-3">1. Acceptance of Terms</h3>
        <p>
          By accessing and using the DAGOS platform, you accept and agree to be bound by the terms 
          and provision of this agreement. These Terms of Service govern your use of the DAGOS 
          platform, including all content, services, and products available at or through the platform.
        </p>
      </section>

      <section>
        <h3 className="font-semibold text-white text-base mb-3">2. Token Sale Participation</h3>
        <p>
          Participation in the DAGOS token presale is subject to eligibility requirements and 
          regulatory compliance. You represent and warrant that:
        </p>
        <ul className="list-disc pl-6 mt-2 space-y-1">
          <li>You are at least 18 years old or the legal age in your jurisdiction</li>
          <li>You are not a resident of any restricted jurisdiction</li>
          <li>You have the legal capacity to enter into this agreement</li>
          <li>You understand the risks associated with cryptocurrency investments</li>
        </ul>
      </section>

      <section>
        <h3 className="font-semibold text-white text-base mb-3">3. Token Utility and Purpose</h3>
        <p>
          DAGOS tokens are utility tokens designed for use within the DAGOS ecosystem. They are not:
        </p>
        <ul className="list-disc pl-6 mt-2 space-y-1">
          <li>Investment securities or financial instruments</li>
          <li>Shares, equity, or ownership in any company</li>
          <li>Promises of future profits or returns</li>
          <li>Regulated financial products</li>
        </ul>
      </section>

      <section>
        <h3 className="font-semibold text-white text-base mb-3">4. Risks and Disclaimers</h3>
        <p>
          Cryptocurrency investments carry significant risks, including but not limited to:
        </p>
        <ul className="list-disc pl-6 mt-2 space-y-1">
          <li>Total loss of invested capital</li>
          <li>High volatility and price fluctuations</li>
          <li>Regulatory changes and legal uncertainties</li>
          <li>Technical risks and smart contract vulnerabilities</li>
          <li>Lack of liquidity and market access</li>
        </ul>
      </section>

      <section>
        <h3 className="font-semibold text-white text-base mb-3">5. KYC/AML Compliance</h3>
        <p>
          DAGOS implements Know Your Customer (KYC) and Anti-Money Laundering (AML) procedures 
          to comply with applicable regulations. You agree to provide accurate information and 
          documentation as required for verification purposes.
        </p>
      </section>

      <section>
        <h3 className="font-semibold text-white text-base mb-3">6. Prohibited Activities</h3>
        <p>You agree not to:</p>
        <ul className="list-disc pl-6 mt-2 space-y-1">
          <li>Use the platform for illegal activities</li>
          <li>Manipulate market prices or engage in fraudulent trading</li>
          <li>Violate any applicable laws or regulations</li>
          <li>Attempt to hack or compromise platform security</li>
        </ul>
      </section>

      <section>
        <h3 className="font-semibold text-white text-base mb-3">7. Limitation of Liability</h3>
        <p>
          DAGOS and its affiliates shall not be liable for any direct, indirect, incidental, 
          special, or consequential damages resulting from your use of the platform or tokens. 
          Your sole remedy is to discontinue use of the platform.
        </p>
      </section>

      <section>
        <h3 className="font-semibold text-white text-base mb-3">8. Governing Law</h3>
        <p>
          These terms shall be governed by and construed in accordance with the laws of [Jurisdiction], 
          without regard to conflict of law provisions. Any disputes shall be resolved through 
          binding arbitration.
        </p>
      </section>

      <section>
        <h3 className="font-semibold text-white text-base mb-3">9. Modifications</h3>
        <p>
          DAGOS reserves the right to modify these terms at any time. Continued use of the platform 
          constitutes acceptance of any modifications. Users will be notified of material changes.
        </p>
      </section>

      <div className="mt-8 pt-6 border-t border-white/20">
        <p className="text-xs text-white/60">
          Last updated: December 2024<br />
          For questions about these terms, contact: legal@dagos.network
        </p>
      </div>
    </div>
  );

  const renderPrivacy = () => (
    <div className="space-y-6 text-sm text-white/80 leading-relaxed">
      <section>
        <h3 className="font-semibold text-white text-base mb-3">1. Information We Collect</h3>
        <p>We collect information you provide directly to us, including:</p>
        <ul className="list-disc pl-6 mt-2 space-y-1">
          <li>Personal identification information (name, email, phone number)</li>
          <li>KYC documentation (ID documents, proof of address)</li>
          <li>Wallet addresses and transaction data</li>
          <li>Communication and support interactions</li>
        </ul>
      </section>

      <section>
        <h3 className="font-semibold text-white text-base mb-3">2. How We Use Your Information</h3>
        <p>We use your information to:</p>
        <ul className="list-disc pl-6 mt-2 space-y-1">
          <li>Process token purchases and transactions</li>
          <li>Comply with KYC/AML requirements</li>
          <li>Provide customer support and communications</li>
          <li>Improve our services and user experience</li>
          <li>Send important updates and notifications</li>
        </ul>
      </section>

      <section>
        <h3 className="font-semibold text-white text-base mb-3">3. Information Sharing</h3>
        <p>
          We do not sell your personal information. We may share information with:
        </p>
        <ul className="list-disc pl-6 mt-2 space-y-1">
          <li>Service providers who assist our operations</li>
          <li>Regulatory authorities when legally required</li>
          <li>Law enforcement in case of suspected illegal activity</li>
          <li>Professional advisors (lawyers, auditors) under confidentiality agreements</li>
        </ul>
      </section>

      <section>
        <h3 className="font-semibold text-white text-base mb-3">4. Data Security</h3>
        <p>
          We implement industry-standard security measures to protect your information, including:
        </p>
        <ul className="list-disc pl-6 mt-2 space-y-1">
          <li>Encryption of sensitive data</li>
          <li>Secure data storage and transmission</li>
          <li>Regular security audits and assessments</li>
          <li>Access controls and authentication measures</li>
        </ul>
      </section>

      <section>
        <h3 className="font-semibold text-white text-base mb-3">5. Data Retention</h3>
        <p>
          We retain your information for as long as necessary to provide services and comply 
          with legal obligations. KYC information may be retained for up to 7 years after 
          account closure as required by regulatory requirements.
        </p>
      </section>

      <section>
        <h3 className="font-semibold text-white text-base mb-3">6. Your Rights</h3>
        <p>You have the right to:</p>
        <ul className="list-disc pl-6 mt-2 space-y-1">
          <li>Access your personal information</li>
          <li>Request corrections to inaccurate data</li>
          <li>Request deletion of your data (subject to legal requirements)</li>
          <li>Opt-out of marketing communications</li>
          <li>File complaints with regulatory authorities</li>
        </ul>
      </section>

      <section>
        <h3 className="font-semibold text-white text-base mb-3">7. Cookies and Tracking</h3>
        <p>
          We use cookies and similar technologies to improve user experience, analyze usage 
          patterns, and provide personalized content. You can control cookie settings through 
          your browser preferences.
        </p>
      </section>

      <section>
        <h3 className="font-semibold text-white text-base mb-3">8. International Transfers</h3>
        <p>
          Your information may be transferred to and processed in countries other than your 
          country of residence. We ensure appropriate safeguards are in place to protect 
          your information during international transfers.
        </p>
      </section>

      <section>
        <h3 className="font-semibold text-white text-base mb-3">9. Children's Privacy</h3>
        <p>
          Our services are not intended for children under 18. We do not knowingly collect 
          personal information from children. If we become aware of such collection, we will 
          take steps to delete the information.
        </p>
      </section>

      <section>
        <h3 className="font-semibold text-white text-base mb-3">10. Changes to Privacy Policy</h3>
        <p>
          We may update this privacy policy periodically. We will notify you of material 
          changes by email or through the platform. Your continued use constitutes acceptance 
          of the updated policy.
        </p>
      </section>

      <div className="mt-8 pt-6 border-t border-white/20">
        <p className="text-xs text-white/60">
          Last updated: December 2024<br />
          For privacy-related questions, contact: privacy@dagos.network
        </p>
      </div>
    </div>
  );

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl glass-strong border-white/20 text-white max-h-[90vh]">
        <DialogHeader>
          <DialogTitle className="text-2xl text-white">
            {type === 'terms' ? 'Terms of Service' : 'Privacy Policy'}
          </DialogTitle>
          <DialogDescription className="text-white/70">
            {type === 'terms' 
              ? 'Please read these terms and conditions carefully before using our platform.'
              : 'Learn how we collect, use, and protect your personal information.'
            }
          </DialogDescription>
        </DialogHeader>
        <ScrollArea className="h-[70vh] pr-4">
          {type === 'terms' ? renderTerms() : renderPrivacy()}
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}