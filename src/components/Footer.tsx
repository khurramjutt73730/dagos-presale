import React, { useState } from 'react';
import { Button } from './ui/button';
import { Separator } from './ui/separator';
import { NewsletterSignup } from './NewsletterSignup';
import { LegalPages } from './LegalPages';
import { 
  Twitter, 
  MessageCircle, 
  Send, 
  Github,
  Globe,
  Mail,
  ExternalLink
} from 'lucide-react';

interface FooterProps {
  onPageChange: (page: string) => void;
}

export function Footer({ onPageChange }: FooterProps) {
  const [legalModal, setLegalModal] = useState<{ isOpen: boolean; type: 'terms' | 'privacy' }>({
    isOpen: false,
    type: 'terms'
  });

  const openLegalModal = (type: 'terms' | 'privacy') => {
    setLegalModal({ isOpen: true, type });
  };

  const footerLinks = {
    product: [
      { label: 'Technology', page: 'technology' },
      { label: 'Tokenomics', page: 'tokenomics' },
      { label: 'Roadmap', page: 'roadmap' },
      { label: 'Community', page: 'community' }
    ],
    legal: [
      { label: 'Privacy Policy', action: () => openLegalModal('privacy') },
      { label: 'Terms of Service', action: () => openLegalModal('terms') },
      { label: 'Risk Disclosure', href: '#' },
      { label: 'AML Policy', href: '#' }
    ] as Array<{ label: string; action?: () => void; href?: string }>,
    resources: [
      { label: 'Whitepaper', href: '#' },
      { label: 'Documentation', href: '#' },
      { label: 'API Reference', href: '#' },
      { label: 'Developer Tools', href: '#' }
    ],
    support: [
      { label: 'Help Center', href: '#' },
      { label: 'Contact Us', href: '#' },
      { label: 'Bug Reports', href: '#' },
      { label: 'Feature Requests', href: '#' }
    ]
  };

  const socialLinks = [
    { icon: <Twitter className="w-5 h-5" />, label: 'Twitter', href: '#', color: 'hover:text-blue-400' },
    { icon: <MessageCircle className="w-5 h-5" />, label: 'Discord', href: '#', color: 'hover:text-indigo-400' },
    { icon: <Send className="w-5 h-5" />, label: 'Telegram', href: '#', color: 'hover:text-blue-500' },
    { icon: <Github className="w-5 h-5" />, label: 'GitHub', href: '#', color: 'hover:text-gray-400' },
    { icon: <Globe className="w-5 h-5" />, label: 'Medium', href: '#', color: 'hover:text-green-400' }
  ];

  return (
    <footer className="bg-black/40 border-t border-white/10 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-4">
              <div className="text-2xl font-bold text-white">
                <span className="text-cyan-400">DAG</span>
                <span className="text-lime-400">OS</span>
              </div>
            </div>
            <p className="text-white/70 text-sm mb-6 max-w-xs">
              Revolutionary DAG Network technology powering the future of decentralized finance.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className={`text-white/60 ${social.color} transition-colors duration-200`}
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Product</h3>
            <ul className="space-y-3">
              {footerLinks.product.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => onPageChange(link.page)}
                    className="text-white/70 hover:text-cyan-400 transition-colors duration-200 text-sm"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-white/70 hover:text-cyan-400 transition-colors duration-200 text-sm flex items-center"
                  >
                    {link.label}
                    <ExternalLink className="w-3 h-3 ml-1" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Support</h3>
            <ul className="space-y-3">
              {footerLinks.support.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-white/70 hover:text-cyan-400 transition-colors duration-200 text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Legal</h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link, index) => (
                <li key={index}>
                  {'action' in link && link.action ? (
                    <button
                      onClick={link.action}
                      className="text-white/70 hover:text-cyan-400 transition-colors duration-200 text-sm text-left"
                    >
                      {link.label}
                    </button>
                  ) : (
                    <a
                      href={link.href || '#'}
                      className="text-white/70 hover:text-cyan-400 transition-colors duration-200 text-sm"
                    >
                      {link.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Subscription */}
        <div className="glass p-6 rounded-lg mb-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div className="mb-4 md:mb-0">
              <h3 className="text-xl font-semibold text-white mb-2">Stay Updated</h3>
              <p className="text-white/70 text-sm">
                Get the latest news and updates about DAGOS directly in your inbox.
              </p>
            </div>
            <NewsletterSignup variant="inline" />
          </div>
        </div>

        <Separator className="bg-white/20 mb-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div className="text-white/60 text-sm mb-4 md:mb-0">
            © 2024 DAGOS Network. All rights reserved.
          </div>
          <div className="flex flex-col md:flex-row md:items-center gap-4 text-sm">
            <div className="text-white/60">
              Built on DAG Network Technology
            </div>
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="text-white/60 hover:text-cyan-400 transition-colors duration-200 flex items-center"
              >
                Audit Report
                <ExternalLink className="w-3 h-3 ml-1" />
              </a>
              <a
                href="#"
                className="text-white/60 hover:text-cyan-400 transition-colors duration-200 flex items-center"
              >
                Contract
                <ExternalLink className="w-3 h-3 ml-1" />
              </a>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-8 pt-6 border-t border-white/10">
          <p className="text-white/50 text-xs leading-relaxed">
            <strong>Disclaimer:</strong> Cryptocurrency investments carry significant risk. DAGOS tokens are utility tokens and not investment securities. 
            Past performance does not guarantee future results. Please read our risk disclosure and consult with financial advisors before investing. 
            This website and its contents are not intended for residents of restricted jurisdictions. By using this platform, you acknowledge 
            that you have read and understood our terms of service and privacy policy.
          </p>
        </div>
      </div>
      
      {/* Legal Modal */}
      <LegalPages
        isOpen={legalModal.isOpen}
        onClose={() => setLegalModal({ ...legalModal, isOpen: false })}
        type={legalModal.type}
      />
    </footer>
  );
}