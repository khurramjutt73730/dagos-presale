import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from './ui/table';
import { 
  ChevronLeft, 
  ChevronRight, 
  Download, 
  Filter,
  ExternalLink 
} from 'lucide-react';
import { Tabs, TabsList, TabsTrigger } from './ui/tabs';

interface Transaction {
  id: string;
  date: string;
  type: 'Purchase' | 'Referral' | 'Claim' | 'Stake';
  amount: number;
  token: string;
  status: 'Completed' | 'Pending' | 'Failed';
  txHash?: string;
}

interface TransactionHistoryTableProps {
  isDarkMode?: boolean;
  className?: string;
}

export function TransactionHistoryTable({ 
  isDarkMode = true, 
  className = '' 
}: TransactionHistoryTableProps) {
  const [filter, setFilter] = useState<'all' | 'purchase' | 'referral' | 'claim'>('all');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const cardBg = isDarkMode ? 'bg-[#0B0C10] border-white/10' : 'bg-white border-gray-200';
  const textPrimary = isDarkMode ? 'text-white' : 'text-gray-900';
  const textSecondary = isDarkMode ? 'text-white/60' : 'text-gray-600';
  const rowHover = isDarkMode ? 'hover:bg-white/5' : 'hover:bg-gray-50';

  // Mock transaction data
  const allTransactions: Transaction[] = [
    {
      id: '1',
      date: 'Oct 10, 2024 14:32',
      type: 'Purchase',
      amount: 25000,
      token: 'DAGOS',
      status: 'Completed',
      txHash: '0x742d35...5fee32'
    },
    {
      id: '2',
      date: 'Oct 9, 2024 18:45',
      type: 'Referral',
      amount: 0.125,
      token: 'ETH',
      status: 'Completed',
      txHash: '0x123abc...def456'
    },
    {
      id: '3',
      date: 'Oct 8, 2024 09:12',
      type: 'Claim',
      amount: 1250,
      token: 'DAGOS',
      status: 'Completed',
      txHash: '0x456def...789ghi'
    },
    {
      id: '4',
      date: 'Oct 7, 2024 16:28',
      type: 'Purchase',
      amount: 50000,
      token: 'DAGOS',
      status: 'Completed',
      txHash: '0x789ghi...012jkl'
    },
    {
      id: '5',
      date: 'Oct 6, 2024 11:55',
      type: 'Referral',
      amount: 0.085,
      token: 'ETH',
      status: 'Completed',
      txHash: '0x012jkl...345mno'
    },
    {
      id: '6',
      date: 'Oct 5, 2024 20:10',
      type: 'Purchase',
      amount: 30000,
      token: 'DAGOS',
      status: 'Pending',
      txHash: '0x345mno...678pqr'
    },
    {
      id: '7',
      date: 'Oct 4, 2024 13:42',
      type: 'Stake',
      amount: 10000,
      token: 'DAGOS',
      status: 'Completed',
      txHash: '0x678pqr...901stu'
    }
  ];

  const filteredTransactions = allTransactions.filter(tx => {
    if (filter === 'all') return true;
    return tx.type.toLowerCase() === filter;
  });

  const totalPages = Math.ceil(filteredTransactions.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedTransactions = filteredTransactions.slice(startIndex, startIndex + itemsPerPage);

  const getStatusColor = (status: Transaction['status']) => {
    switch (status) {
      case 'Completed':
        return isDarkMode 
          ? 'bg-green-500/20 text-green-400 border-green-500/30' 
          : 'bg-green-100 text-green-600 border-green-200';
      case 'Pending':
        return isDarkMode 
          ? 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30' 
          : 'bg-yellow-100 text-yellow-600 border-yellow-200';
      case 'Failed':
        return isDarkMode 
          ? 'bg-red-500/20 text-red-400 border-red-500/30' 
          : 'bg-red-100 text-red-600 border-red-200';
    }
  };

  const getTypeColor = (type: Transaction['type']) => {
    switch (type) {
      case 'Purchase':
        return isDarkMode ? 'text-cyan-400' : 'text-cyan-600';
      case 'Referral':
        return isDarkMode ? 'text-violet-400' : 'text-violet-600';
      case 'Claim':
        return isDarkMode ? 'text-lime-400' : 'text-lime-600';
      case 'Stake':
        return isDarkMode ? 'text-purple-400' : 'text-purple-600';
    }
  };

  return (
    <Card className={`${cardBg} ${className}`}>
      <CardHeader>
        <div className="flex items-center justify-between flex-wrap gap-4">
          <CardTitle className={textPrimary}>Transaction History</CardTitle>
          
          <div className="flex items-center gap-3">
            <Tabs value={filter} onValueChange={(v) => setFilter(v as any)}>
              <TabsList className={isDarkMode ? 'bg-white/5' : 'bg-gray-100'}>
                <TabsTrigger value="all" className={isDarkMode ? 'data-[state=active]:bg-cyan-500/20 data-[state=active]:text-cyan-400' : ''}>
                  All
                </TabsTrigger>
                <TabsTrigger value="purchase" className={isDarkMode ? 'data-[state=active]:bg-cyan-500/20 data-[state=active]:text-cyan-400' : ''}>
                  Purchase
                </TabsTrigger>
                <TabsTrigger value="referral" className={isDarkMode ? 'data-[state=active]:bg-cyan-500/20 data-[state=active]:text-cyan-400' : ''}>
                  Referral
                </TabsTrigger>
                <TabsTrigger value="claim" className={isDarkMode ? 'data-[state=active]:bg-cyan-500/20 data-[state=active]:text-cyan-400' : ''}>
                  Claim
                </TabsTrigger>
              </TabsList>
            </Tabs>
            
            <Button 
              variant="outline" 
              size="sm"
              className={`${isDarkMode ? 'border-white/20 text-white/70 hover:bg-white/5' : 'border-gray-300'}`}
            >
              <Download className="w-4 h-4 mr-2" />
              Export
            </Button>
          </div>
        </div>
      </CardHeader>
      
      <CardContent>
        {/* Desktop Table */}
        <div className="hidden md:block overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className={isDarkMode ? 'border-white/10 hover:bg-transparent' : 'border-gray-200'}>
                <TableHead className={textSecondary}>Date</TableHead>
                <TableHead className={textSecondary}>Type</TableHead>
                <TableHead className={textSecondary}>Token Amount</TableHead>
                <TableHead className={textSecondary}>Status</TableHead>
                <TableHead className={textSecondary}>Transaction</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {paginatedTransactions.map((tx) => (
                <TableRow 
                  key={tx.id} 
                  className={`${isDarkMode ? 'border-white/10' : 'border-gray-200'} ${rowHover} transition-colors`}
                >
                  <TableCell className={textSecondary}>{tx.date}</TableCell>
                  <TableCell>
                    <span className={getTypeColor(tx.type)}>{tx.type}</span>
                  </TableCell>
                  <TableCell className={textPrimary}>
                    {tx.amount.toLocaleString()} {tx.token}
                  </TableCell>
                  <TableCell>
                    <Badge className={getStatusColor(tx.status)}>
                      {tx.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    {tx.txHash && (
                      <button 
                        className={`flex items-center gap-1 ${isDarkMode ? 'text-cyan-400 hover:text-cyan-300' : 'text-cyan-600 hover:text-cyan-700'} transition-colors`}
                        onClick={() => window.open(`https://etherscan.io/tx/${tx.txHash}`, '_blank')}
                      >
                        <span className="text-sm">{tx.txHash}</span>
                        <ExternalLink className="w-3 h-3" />
                      </button>
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        {/* Mobile Cards */}
        <div className="md:hidden space-y-3">
          {paginatedTransactions.map((tx) => (
            <div 
              key={tx.id}
              className={`p-4 rounded-lg border ${isDarkMode ? 'bg-white/5 border-white/10' : 'bg-gray-50 border-gray-200'}`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className={getTypeColor(tx.type)}>{tx.type}</span>
                <Badge className={getStatusColor(tx.status)}>{tx.status}</Badge>
              </div>
              <div className={`text-sm ${textSecondary} mb-1`}>{tx.date}</div>
              <div className={`${textPrimary} mb-2`}>
                {tx.amount.toLocaleString()} {tx.token}
              </div>
              {tx.txHash && (
                <button 
                  className={`flex items-center gap-1 text-xs ${isDarkMode ? 'text-cyan-400' : 'text-cyan-600'}`}
                  onClick={() => window.open(`https://etherscan.io/tx/${tx.txHash}`, '_blank')}
                >
                  {tx.txHash}
                  <ExternalLink className="w-3 h-3" />
                </button>
              )}
            </div>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex items-center justify-between mt-6 pt-4 border-t border-white/10">
            <p className={`text-sm ${textSecondary}`}>
              Page {currentPage} of {totalPages}
            </p>
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                disabled={currentPage === 1}
                className={isDarkMode ? 'border-white/20 text-white/70 hover:bg-white/5' : ''}
              >
                <ChevronLeft className="w-4 h-4" />
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                disabled={currentPage === totalPages}
                className={isDarkMode ? 'border-white/20 text-white/70 hover:bg-white/5' : ''}
              >
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
