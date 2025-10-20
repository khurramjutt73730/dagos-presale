import React from 'react';
import { Button } from './ui/button';
import { Wallet, Menu, X, BarChart3, ArrowRight } from 'lucide-react';
import { DarkModeToggle } from './DarkModeToggle';
import dagosLogo from 'figma:asset/db237d71253a563f66a5cace52905b063043c1ef.png';

interface NavigationProps {
  currentPage: string;
  onPageChange: (page: string) => void;
  onConnectWallet: () => void;
  onDisconnectWallet: () => void;
  isWalletConnected: boolean;
  walletAddress?: string;
}

export function Navigation({ 
  currentPage, 
  onPageChange, 
  onConnectWallet, 
  onDisconnectWallet,
  isWalletConnected,
  walletAddress 
}: NavigationProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'technology', label: 'Technology' },
    { id: 'tokenomics', label: 'Tokenomics' },
    { id: 'roadmap', label: 'Roadmap' },
    { id: 'community', label: 'Community' },
  ];

  const formatAddress = (address: string) => {
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  };

  return (
    <nav className="sticky top-0 z-50 glass-strong border-b border-white/10 backdrop-blur-2xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* DAGOS Logo */}
          <div className="flex items-center">
            <button 
              onClick={() => onPageChange('home')}
              className="relative group flex items-center"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-lime-400/20 rounded-lg blur-sm group-hover:blur-none transition-all duration-300 opacity-0 group-hover:opacity-100"></div>
              <img 
                src={dagosLogo}
                alt="DAGOS Token"
                className="h-8 lg:h-12 w-auto object-contain relative z-10 transition-all duration-300 group-hover:scale-105"
                style={{ background: 'transparent' }}
              />
            </button>
          </div>

          {/* Enhanced Desktop Navigation */}
          <div className="hidden lg:block">
            <div className="ml-10 flex items-baseline space-x-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => onPageChange(item.id)}
                  className={`px-4 py-2 rounded-lg transition-all duration-300 relative group ${
                    currentPage === item.id
                      ? 'text-cyan-400 bg-white/10 shadow-lg'
                      : 'text-white/70 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <span className="relative z-10">{item.label}</span>
                  {currentPage === item.id && (
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-lime-400/20 rounded-lg"></div>
                  )}
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-lime-400 group-hover:w-full transition-all duration-300"></div>
                </button>
              ))}
            </div>
          </div>

          {/* Enhanced Wallet & CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-3">
            <DarkModeToggle />
            
            {/* Primary CTA - Enhanced */}
            <Button
              onClick={() => onPageChange('invest')}
              size="lg"
              className="bg-gradient-to-r from-cyan-400 to-lime-400 text-navy-900 hover:from-cyan-300 hover:to-lime-300 transition-all duration-300 glow-cyan shadow-2xl hover:shadow-cyan-400/50 hover:scale-105 transform"
            >
              <span className="flex items-center gap-2">
                Invest Now
                <ArrowRight className="w-4 h-4" />
              </span>
            </Button>
            
            {/* Wallet/Dashboard Button */}
            {isWalletConnected ? (
              <div className="flex items-center gap-2">
                <Button
                  onClick={() => onPageChange('dashboard')}
                  variant="outline"
                  className="border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/10 transition-all duration-200"
                >
                  <BarChart3 className="w-4 h-4 mr-2" />
                  Dashboard
                </Button>
                <Button
                  onClick={onDisconnectWallet}
                  variant="ghost"
                  size="sm"
                  className="text-white/70 hover:text-white hover:bg-white/5 px-2"
                  title="Disconnect Wallet"
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>
            ) : (
              <Button
                onClick={onConnectWallet}
                variant="outline"
                className="border-white/30 text-white/70 hover:text-white hover:border-white/50 transition-all duration-200"
              >
                <Wallet className="w-4 h-4 mr-2" />
                Connect Wallet
              </Button>
            )}
          </div>

          {/* Enhanced Mobile menu button */}
          <div className="lg:hidden flex items-center space-x-2">
            {/* Mobile CTA */}
            <Button
              onClick={() => onPageChange('invest')}
              size="sm"
              className="bg-gradient-to-r from-cyan-400 to-lime-400 text-navy-900 hover:from-cyan-300 hover:to-lime-300 px-3 py-1 text-sm"
            >
              Invest
            </Button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white/70 hover:text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Enhanced Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden">
            <div className="px-4 pt-4 pb-6 space-y-3 glass-strong rounded-xl mt-4 mx-4 border border-white/20">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    onPageChange(item.id);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`block px-4 py-3 rounded-lg w-full text-left transition-all duration-300 relative ${
                    currentPage === item.id
                      ? 'text-cyan-400 bg-white/10 shadow-lg'
                      : 'text-white/70 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <span className="relative z-10">{item.label}</span>
                  {currentPage === item.id && (
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-lime-400/20 rounded-lg"></div>
                  )}
                </button>
              ))}
              <div className="pt-2 space-y-2">
                {/* Primary CTA - Always visible */}
                <Button
                  onClick={() => {
                    onPageChange('invest');
                    setIsMobileMenuOpen(false);
                  }}
                  className="w-full bg-gradient-to-r from-cyan-400 to-lime-400 text-navy-900 hover:from-cyan-300 hover:to-lime-300"
                >
                  Invest Now
                </Button>
                
                {/* Wallet/Dashboard Section */}
                {isWalletConnected ? (
                  <div className="space-y-2">
                    <Button
                      onClick={() => {
                        onPageChange('dashboard');
                        setIsMobileMenuOpen(false);
                      }}
                      variant="outline"
                      className="w-full border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/10"
                    >
                      <BarChart3 className="w-4 h-4 mr-2" />
                      Dashboard
                    </Button>
                    <Button
                      onClick={() => {
                        onDisconnectWallet();
                        setIsMobileMenuOpen(false);
                      }}
                      variant="outline"
                      className="w-full border-red-400/50 text-red-400 hover:bg-red-400/10"
                    >
                      <X className="w-4 h-4 mr-2" />
                      Disconnect Wallet
                    </Button>
                  </div>
                ) : (
                  <Button
                    onClick={() => {
                      onConnectWallet();
                      setIsMobileMenuOpen(false);
                    }}
                    variant="outline"
                    className="w-full border-white/30 text-white/70 hover:text-white hover:border-white/50"
                  >
                    <Wallet className="w-4 h-4 mr-2" />
                    Connect Wallet
                  </Button>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}