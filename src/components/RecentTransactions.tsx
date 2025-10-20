import React, { useState, useEffect } from 'react';
import { Activity, ExternalLink } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { ScrollArea } from './ui/scroll-area';

interface Transaction {
  hash: string;
  address: string;
  amount: number;
  tokens: number;
  timestamp: Date;
  status: 'completed' | 'pending' | 'failed';
}

interface RecentTransactionsProps {
  className?: string;
  limit?: number;
}

export function RecentTransactions({ className = '', limit = 10 }: RecentTransactionsProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    // Generate mock transactions
    const generateTransactions = () => {
      const mockTransactions: Transaction[] = [];
      const addresses = [
        '0x742d35Cc6634C0532925a3b8C17f2E8E3a5fee32',
        '0x8Ba1f109551bD432803012645Hac136c9c00B906',
        '0x123456789abcdef123456789abcdef123456789a',
        '0xdef123456789abcdef123456789abcdef12345678',
        '0x987654321fedcba987654321fedcba9876543210'
      ];

      for (let i = 0; i < limit; i++) {
        const amount = Math.floor(Math.random() * 5000) + 100;
        const tokens = Math.floor(amount / 0.03);
        mockTransactions.push({
          hash: `0x${Math.random().toString(16).substring(2, 66)}`,
          address: addresses[Math.floor(Math.random() * addresses.length)],
          amount,
          tokens,
          timestamp: new Date(Date.now() - Math.random() * 3600000), // Random time within last hour
          status: Math.random() > 0.1 ? 'completed' : (Math.random() > 0.5 ? 'pending' : 'failed')
        });
      }

      return mockTransactions.sort((a, b) => b.timestamp.getTime() - a.timestamp.getTime());
    };

    setTransactions(generateTransactions());

    // Simulate new transactions
    const interval = setInterval(() => {
      const newTransaction: Transaction = {
        hash: `0x${Math.random().toString(16).substring(2, 66)}`,
        address: '0x742d35Cc6634C0532925a3b8C17f2E8E3a5fee32',
        amount: Math.floor(Math.random() * 2000) + 50,
        tokens: 0,
        timestamp: new Date(),
        status: 'completed'
      };
      newTransaction.tokens = Math.floor(newTransaction.amount / 0.03);

      setTransactions(prev => [newTransaction, ...prev.slice(0, limit - 1)]);
    }, 45000); // New transaction every 45 seconds

    return () => clearInterval(interval);
  }, [limit]);

  const formatTime = (date: Date) => {
    const now = new Date();
    const diff = now.getTime() - date.getTime();
    const minutes = Math.floor(diff / 60000);
    
    if (minutes < 1) return 'Just now';
    if (minutes < 60) return `${minutes}m ago`;
    const hours = Math.floor(minutes / 60);
    if (hours < 24) return `${hours}h ago`;
    return `${Math.floor(hours / 24)}d ago`;
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'pending':
        return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      case 'failed':
        return 'bg-red-500/20 text-red-400 border-red-500/30';
      default:
        return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  return (
    <Card className={`glass-strong border-white/10 ${className}`}>
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2 text-white">
          <Activity className="w-5 h-5 text-cyan-400" />
          Recent Transactions
          <div className="ml-auto">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <ScrollArea className="h-64">
          <div className="px-6 pb-6 space-y-3">
            {transactions.map((tx, index) => (
              <div key={tx.hash} className="flex items-center justify-between p-3 glass rounded-lg hover:bg-white/10 transition-colors">
                <div className="flex items-center gap-3 flex-1 min-w-0">
                  <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-lime-400 rounded-full flex items-center justify-center text-xs font-bold text-navy-900">
                    {tx.address.slice(2, 4).toUpperCase()}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="text-white font-medium truncate max-w-[120px]">
                        {tx.address.slice(0, 6)}...{tx.address.slice(-4)}
                      </span>
                      <ExternalLink className="w-3 h-3 text-white/50 cursor-pointer hover:text-cyan-400" />
                    </div>
                    <div className="text-sm text-white/70">
                      ${tx.amount.toLocaleString()} • {tx.tokens.toLocaleString()} DAGOS
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Badge className={getStatusColor(tx.status)}>
                    {tx.status}
                  </Badge>
                  <div className="text-xs text-white/50 min-w-[60px] text-right">
                    {formatTime(tx.timestamp)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
}