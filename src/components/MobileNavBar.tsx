import React from 'react';
import { Home, DollarSign, LayoutDashboard, User, Menu } from 'lucide-react';
import { motion } from 'framer-motion';
import { Badge } from './ui/badge';

interface MobileNavBarProps {
  currentPage: string;
  onPageChange: (page: string) => void;
  isWalletConnected: boolean;
  className?: string;
}

export function MobileNavBar({
  currentPage,
  onPageChange,
  isWalletConnected,
  className = ''
}: MobileNavBarProps) {
  const navItems = [
    {
      id: 'home',
      label: 'Home',
      icon: Home,
      badge: null
    },
    {
      id: 'invest',
      label: 'Invest',
      icon: DollarSign,
      badge: '🔥'
    },
    {
      id: 'dashboard',
      label: 'Dashboard',
      icon: LayoutDashboard,
      badge: null,
      requiresWallet: true
    },
    {
      id: 'community',
      label: 'More',
      icon: Menu,
      badge: null
    }
  ];

  const handleNavClick = (itemId: string, requiresWallet?: boolean) => {
    if (requiresWallet && !isWalletConnected) {
      // Could show a toast or modal here
      return;
    }
    onPageChange(itemId);
  };

  return (
    <motion.div
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      className={`fixed bottom-0 left-0 right-0 z-50 md:hidden ${className}`}
    >
      {/* Glass morphism background */}
      <div className="backdrop-blur-xl bg-[#0A0E2A]/90 border-t border-white/10 shadow-2xl">
        {/* Gradient top border */}
        <div className="h-[2px] bg-gradient-to-r from-cyan-400 via-lime-400 to-cyan-400" />
        
        <div className="max-w-screen-xl mx-auto px-2 py-2">
          <nav className="flex items-center justify-around gap-1">
            {navItems.map((item) => {
              const isActive = currentPage === item.id;
              const isDisabled = item.requiresWallet && !isWalletConnected;
              
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id, item.requiresWallet)}
                  disabled={isDisabled}
                  className={`
                    relative flex flex-col items-center justify-center gap-1 py-2 px-3 rounded-xl
                    transition-all duration-300 min-w-[70px]
                    ${isActive 
                      ? 'bg-gradient-to-r from-cyan-500/20 to-lime-500/20 border border-cyan-400/30' 
                      : 'hover:bg-white/5'
                    }
                    ${isDisabled ? 'opacity-40 cursor-not-allowed' : 'cursor-pointer'}
                  `}
                >
                  {/* Active indicator dot */}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavDot"
                      className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-1 h-1 rounded-full bg-cyan-400"
                      transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                    />
                  )}

                  {/* Icon with badge */}
                  <div className="relative">
                    <item.icon
                      className={`
                        w-5 h-5 transition-colors duration-300
                        ${isActive 
                          ? 'text-cyan-400' 
                          : isDisabled 
                            ? 'text-white/30' 
                            : 'text-white/70'
                        }
                      `}
                    />
                    {item.badge && (
                      <span className="absolute -top-1 -right-1 text-xs">
                        {item.badge}
                      </span>
                    )}
                  </div>

                  {/* Label */}
                  <span
                    className={`
                      text-xs transition-colors duration-300
                      ${isActive 
                        ? 'text-white' 
                        : isDisabled 
                          ? 'text-white/30' 
                          : 'text-white/70'
                      }
                    `}
                  >
                    {item.label}
                  </span>

                  {/* Glow effect when active */}
                  {isActive && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-500/10 to-lime-500/10 blur-md -z-10"
                    />
                  )}
                </button>
              );
            })}
          </nav>
        </div>
      </div>

      {/* Safe area for iOS devices */}
      <div className="h-[env(safe-area-inset-bottom)] bg-[#0A0E2A]" />
    </motion.div>
  );
}
