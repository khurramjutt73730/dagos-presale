import React from 'react';
import { LayoutDashboard, ShoppingCart, Gift, FileText } from 'lucide-react';

interface DashboardNavigationProps {
  activeTab: 'dashboard' | 'presale' | 'referrals' | 'transactions';
  onTabChange: (tab: 'dashboard' | 'presale' | 'referrals' | 'transactions') => void;
  isDarkMode?: boolean;
  className?: string;
}

export function DashboardNavigation({
  activeTab,
  onTabChange,
  isDarkMode = true,
  className = ''
}: DashboardNavigationProps) {
  const navItems = [
    { id: 'dashboard' as const, label: 'Dashboard', icon: LayoutDashboard },
    { id: 'presale' as const, label: 'Pre-Sale', icon: ShoppingCart },
    { id: 'referrals' as const, label: 'Referrals', icon: Gift },
    { id: 'transactions' as const, label: 'Transactions', icon: FileText }
  ];

  return (
    <nav className={`flex items-center gap-1 ${className}`}>
      {navItems.map((item) => (
        <button
          key={item.id}
          onClick={() => onTabChange(item.id)}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 ${
            activeTab === item.id
              ? isDarkMode
                ? 'bg-gradient-to-r from-cyan-500/20 to-violet-500/20 text-cyan-400 border border-cyan-500/30'
                : 'bg-gradient-to-r from-cyan-100 to-violet-100 text-cyan-700 border border-cyan-300'
              : isDarkMode
                ? 'text-white/70 hover:bg-white/5'
                : 'text-gray-600 hover:bg-gray-100'
          }`}
        >
          <item.icon className="w-4 h-4" />
          <span className="hidden sm:inline">{item.label}</span>
        </button>
      ))}
    </nav>
  );
}
