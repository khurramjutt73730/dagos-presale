import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Progress } from '../ui/progress';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '../ui/dialog';
import {
  Home,
  ShoppingCart,
  TrendingUp,
  Calculator,
  Code,
  Trophy,
  Users,
  BarChart2,
  Award,
  User,
  Bell,
  ChevronRight,
  X,
  Upload,
  CheckCircle,
  AlertCircle,
  Clock,
  Star,
  Zap,
  Shield,
  Gift,
  Target,
  Activity,
  Wallet,
  Menu,
  ChevronDown,
  FileCheck,
  Lock,
  Globe,
  Sparkles,
  Megaphone
} from 'lucide-react';
import { toast } from 'sonner@2.0.3';
import { CommunityChallenges } from '../CommunityChallenges';
import { CommunityLeaderboard } from '../CommunityLeaderboard';
import { ContentCreationChallenge } from '../ContentCreationChallenge';
import { AmbassadorProgram } from '../AmbassadorProgram';

interface DashboardPageProps {
  onPageChange?: (page: string) => void;
}

interface Achievement {
  id: string;
  title: string;
  description: string;
  xp: number;
  status: 'not-started' | 'in-progress' | 'completed';
  icon: string;
  progress?: number;
  total?: number;
}

interface Notification {
  id: string;
  title: string;
  message: string;
  type: 'info' | 'success' | 'warning';
  time: string;
  read: boolean;
}

export function DashboardPage({ onPageChange }: DashboardPageProps) {
  const [activePage, setActivePage] = useState('home');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const [rankDetailsOpen, setRankDetailsOpen] = useState(false);
  const [selectedAchievement, setSelectedAchievement] = useState<Achievement | null>(null);
  const [kycStatus, setKycStatus] = useState<'pending' | 'verified' | 'rejected'>('pending');
  const [uploadedDocument, setUploadedDocument] = useState<string | null>(null);

  // User Data
  const userData = {
    rank: 'Turtle',
    level: 2,
    currentXP: 6460,
    nextLevelXP: 8000,
    totalBalance: 1250000,
    tokenWorth: 425000,
    transactions: 47,
    walletAddress: '0x742d...ee32'
  };

  // Notifications
  const [notifications, setNotifications] = useState<Notification[]>([
    {
      id: '1',
      title: 'Welcome to DAGOS Dashboard!',
      message: 'Your investment journey begins here. Explore all features.',
      type: 'info',
      time: '2 hours ago',
      read: false
    },
    {
      id: '2',
      title: 'Purchase Complete',
      message: 'Successfully purchased 15,000 DAGOS tokens.',
      type: 'success',
      time: '1 day ago',
      read: false
    },
    {
      id: '3',
      title: 'Reward Unlocked',
      message: 'You earned 1,000 XP for your first purchase!',
      type: 'success',
      time: '1 day ago',
      read: true
    },
    {
      id: '4',
      title: 'KYC Verification Pending',
      message: 'Complete your KYC to unlock higher investment tiers.',
      type: 'warning',
      time: '3 days ago',
      read: false
    }
  ]);

  // Achievements
  const achievements: Achievement[] = [
    {
      id: '1',
      title: 'First Steps',
      description: 'Make your first DAGOS token purchase',
      xp: 1000,
      status: 'completed',
      icon: '🚀',
      progress: 1,
      total: 1
    },
    {
      id: '2',
      title: 'Bonus Hunter',
      description: 'Purchase 3 times to unlock reward XP',
      xp: 1500,
      status: 'in-progress',
      icon: '🎯',
      progress: 1,
      total: 3
    },
    {
      id: '3',
      title: 'Global Launch',
      description: 'Participate in the global presale launch',
      xp: 2000,
      status: 'completed',
      icon: '🌍',
      progress: 1,
      total: 1
    },
    {
      id: '4',
      title: 'FinalCall700',
      description: 'Invest before Stage 700 ends',
      xp: 1000,
      status: 'not-started',
      icon: '⏰',
      progress: 0,
      total: 1
    },
    {
      id: '5',
      title: 'Ultimate Reward Bonus',
      description: 'Reach VIP investor tier status',
      xp: 5000,
      status: 'in-progress',
      icon: '💎',
      progress: 2,
      total: 5
    },
    {
      id: '6',
      title: 'Before the Listing',
      description: 'Complete investment before exchange listing',
      xp: 2500,
      status: 'not-started',
      icon: '📈',
      progress: 0,
      total: 1
    },
    {
      id: '7',
      title: 'Golden Ticket',
      description: 'Refer 10 investors to earn golden status',
      xp: 3000,
      status: 'in-progress',
      icon: '🎫',
      progress: 4,
      total: 10
    },
    {
      id: '8',
      title: 'Epic Reward',
      description: 'Hold 50,000+ DAGOS tokens',
      xp: 4000,
      status: 'not-started',
      icon: '⚡',
      progress: 0,
      total: 1
    },
    {
      id: '9',
      title: 'Special Price',
      description: 'Buy during special promotional stages',
      xp: 1200,
      status: 'completed',
      icon: '🏆',
      progress: 1,
      total: 1
    }
  ];

  // Menu Items
  const menuItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'buy', label: 'Buy Now', icon: ShoppingCart },
    { id: 'trade', label: 'Trade DAG', icon: TrendingUp },
    { id: 'roi', label: 'ROI Calculator', icon: Calculator },
    { id: 'dev', label: 'Dev Releases', icon: Code },
    { id: 'battles', label: 'Buyer Battles', icon: Trophy },
    { id: 'referral', label: 'Referral', icon: Users },
    { id: 'leaderboard', label: 'Top Referrers', icon: BarChart2 },
    { id: 'challenges', label: 'Challenges', icon: Target },
    { id: 'content-creator', label: 'Content Creator', icon: Sparkles },
    { id: 'ambassador', label: 'Ambassador', icon: Megaphone },
    { id: 'transactions', label: 'Transactions', icon: Activity },
    { id: 'achievements', label: 'Achievements', icon: Award },
    { id: 'kyc', label: 'KYC Verification', icon: FileCheck },
    { id: 'profile', label: 'Profile', icon: User }
  ];

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setUploadedDocument(file.name);
      toast.success('Document uploaded successfully!');
    }
  };

  const handleKYCSubmit = () => {
    if (!uploadedDocument) {
      toast.error('Please upload a document first');
      return;
    }
    setKycStatus('pending');
    toast.success('KYC verification submitted. We will review within 24-48 hours.');
  };

  const handlePageChange = (pageId: string) => {
    setActivePage(pageId);
    setSidebarOpen(false);
  };

  const markAllAsRead = () => {
    setNotifications(prev => prev.map(n => ({ ...n, read: true })));
    toast.success('All notifications marked as read');
  };

  const progressPercentage = (userData.currentXP / userData.nextLevelXP) * 100;
  const unreadCount = notifications.filter(n => !n.read).length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0A0E2A] via-[#1a1035] to-black">
      {/* Mobile Sidebar Overlay */}
      <AnimatePresence>
        {sidebarOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 z-40 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}
      </AnimatePresence>

      <div className="flex">
        {/* Left Sidebar */}
        <motion.aside
          initial={false}
          animate={{ x: sidebarOpen ? 0 : '-100%' }}
          className="fixed lg:sticky top-0 left-0 h-screen w-64 bg-gradient-to-b from-[#0A0E2A] to-[#1a1035] border-r border-white/10 z-50 lg:translate-x-0 transition-transform duration-300 flex flex-col"
        >
          {/* Logo */}
          <div className="p-6 border-b border-white/10">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-lime-400 rounded-lg flex items-center justify-center">
                  <Zap className="w-6 h-6 text-navy-900" />
                </div>
                <div>
                  <h2 className="font-bold text-white">DAGOS</h2>
                  <p className="text-xs text-white/60">Dashboard V1</p>
                </div>
              </div>
              <button
                onClick={() => setSidebarOpen(false)}
                className="lg:hidden text-white/60 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Menu Items */}
          <nav className="flex-1 overflow-y-auto py-4 px-3">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const isActive = activePage === item.id;
              
              return (
                <button
                  key={item.id}
                  onClick={() => handlePageChange(item.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg mb-1 transition-all duration-200 ${
                    isActive
                      ? 'bg-gradient-to-r from-cyan-400/20 to-lime-400/20 border border-cyan-400/50 text-white'
                      : 'text-white/70 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span className="text-sm font-medium">{item.label}</span>
                  {item.id === 'kyc' && kycStatus === 'pending' && (
                    <Badge className="ml-auto bg-yellow-500/20 text-yellow-400 text-xs">
                      Pending
                    </Badge>
                  )}
                  {item.id === 'kyc' && kycStatus === 'verified' && (
                    <CheckCircle className="ml-auto w-4 h-4 text-lime-400" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Rank Footer */}
          <div className="p-4 border-t border-white/10">
            <div className="bg-white/5 rounded-lg p-4">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-gradient-to-br from-lime-400 to-cyan-400 rounded-full flex items-center justify-center text-xl">
                  🐢
                </div>
                <div className="flex-1">
                  <div className="text-white font-semibold text-sm">
                    {userData.rank}
                  </div>
                  <div className="text-white/60 text-xs">
                    Level {userData.level}
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-xs text-white/70">
                  <span>XP Progress</span>
                  <span>{userData.currentXP.toLocaleString()}/{userData.nextLevelXP.toLocaleString()}</span>
                </div>
                <Progress value={progressPercentage} className="h-2" />
              </div>
            </div>
          </div>
        </motion.aside>

        {/* Main Content */}
        <div className="flex-1 min-h-screen">
          {/* Top Header */}
          <header className="sticky top-0 z-30 bg-gradient-to-r from-[#0A0E2A]/95 to-[#1a1035]/95 backdrop-blur-lg border-b border-white/10">
            <div className="flex items-center justify-between px-4 lg:px-8 py-4">
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setSidebarOpen(true)}
                  className="lg:hidden text-white/70 hover:text-white"
                >
                  <Menu className="w-6 h-6" />
                </button>
                <div>
                  <h1 className="text-xl lg:text-2xl font-bold text-white">
                    DAGOS Dashboard V1
                  </h1>
                  <p className="text-sm text-white/60 hidden sm:block">
                    Welcome back, Investor
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                {/* Notification Icon */}
                <div className="relative">
                  <button
                    onClick={() => setNotificationsOpen(!notificationsOpen)}
                    className="relative p-2 rounded-lg hover:bg-white/10 transition-colors"
                  >
                    <Bell className="w-6 h-6 text-white/70 hover:text-white transition-colors" />
                    {unreadCount > 0 && (
                      <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                    )}
                  </button>

                  {/* Notifications Dropdown */}
                  <AnimatePresence>
                    {notificationsOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="absolute right-0 mt-2 w-80 sm:w-96 glass-strong rounded-lg border border-white/20 shadow-2xl"
                      >
                        <div className="p-4 border-b border-white/10 flex items-center justify-between">
                          <h3 className="font-semibold text-white">Notifications</h3>
                          <div className="flex items-center gap-2">
                            {unreadCount > 0 && (
                              <Badge className="bg-red-500/20 text-red-400 text-xs">
                                {unreadCount} New
                              </Badge>
                            )}
                            <button
                              onClick={markAllAsRead}
                              className="text-xs text-cyan-400 hover:text-cyan-300"
                            >
                              Mark all read
                            </button>
                          </div>
                        </div>
                        <div className="max-h-96 overflow-y-auto">
                          {notifications.map((notification) => (
                            <div
                              key={notification.id}
                              className={`p-4 border-b border-white/5 hover:bg-white/5 transition-colors ${
                                !notification.read ? 'bg-cyan-400/5' : ''
                              }`}
                            >
                              <div className="flex items-start gap-3">
                                <div
                                  className={`w-2 h-2 rounded-full mt-2 ${
                                    notification.type === 'success'
                                      ? 'bg-lime-400'
                                      : notification.type === 'warning'
                                      ? 'bg-yellow-400'
                                      : 'bg-cyan-400'
                                  }`}
                                />
                                <div className="flex-1">
                                  <h4 className="text-white font-medium text-sm">
                                    {notification.title}
                                  </h4>
                                  <p className="text-white/70 text-xs mt-1">
                                    {notification.message}
                                  </p>
                                  <span className="text-white/50 text-xs mt-1 block">
                                    {notification.time}
                                  </span>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Rank Badge */}
                <button
                  onClick={() => setRankDetailsOpen(true)}
                  className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-lime-400/20 to-cyan-400/20 border border-lime-400/50 hover:border-lime-400 transition-all"
                >
                  <div className="w-6 h-6 bg-gradient-to-br from-lime-400 to-cyan-400 rounded-full flex items-center justify-center text-sm">
                    🐢
                  </div>
                  <span className="text-white font-semibold text-sm">
                    {userData.rank}
                  </span>
                  <Badge className="bg-white/10 text-white text-xs">
                    Lvl {userData.level}
                  </Badge>
                </button>
              </div>
            </div>
          </header>

          {/* Page Content */}
          <main className="p-4 lg:p-8">
            {/* Home/Dashboard Overview */}
            {activePage === 'home' && (
              <div className="space-y-8">
                {/* Statistics Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                  >
                    <Card className="glass-strong border-cyan-400/30 hover:border-cyan-400/50 transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between mb-4">
                          <div className="w-12 h-12 bg-cyan-400/20 rounded-lg flex items-center justify-center">
                            <Wallet className="w-6 h-6 text-cyan-400" />
                          </div>
                          <Badge className="bg-cyan-400/20 text-cyan-400">
                            +12.5%
                          </Badge>
                        </div>
                        <div className="text-3xl font-bold text-white mb-1">
                          ${(userData.totalBalance / 1000).toFixed(1)}K
                        </div>
                        <div className="text-white/60 text-sm">Total Balance</div>
                      </CardContent>
                    </Card>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <Card className="glass-strong border-lime-400/30 hover:border-lime-400/50 transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between mb-4">
                          <div className="w-12 h-12 bg-lime-400/20 rounded-lg flex items-center justify-center">
                            <TrendingUp className="w-6 h-6 text-lime-400" />
                          </div>
                          <Badge className="bg-lime-400/20 text-lime-400">
                            +8.3%
                          </Badge>
                        </div>
                        <div className="text-3xl font-bold text-white mb-1">
                          ${(userData.tokenWorth / 1000).toFixed(1)}K
                        </div>
                        <div className="text-white/60 text-sm">Token Worth</div>
                      </CardContent>
                    </Card>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <Card className="glass-strong border-purple-400/30 hover:border-purple-400/50 transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between mb-4">
                          <div className="w-12 h-12 bg-purple-400/20 rounded-lg flex items-center justify-center">
                            <Activity className="w-6 h-6 text-purple-400" />
                          </div>
                          <Badge className="bg-purple-400/20 text-purple-400">
                            Active
                          </Badge>
                        </div>
                        <div className="text-3xl font-bold text-white mb-1">
                          {userData.transactions}
                        </div>
                        <div className="text-white/60 text-sm">Transactions</div>
                      </CardContent>
                    </Card>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    <Card className="glass-strong border-yellow-400/30 hover:border-yellow-400/50 transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between mb-4">
                          <div className="w-12 h-12 bg-yellow-400/20 rounded-lg flex items-center justify-center">
                            <Star className="w-6 h-6 text-yellow-400" />
                          </div>
                          <Badge className="bg-yellow-400/20 text-yellow-400">
                            Rank
                          </Badge>
                        </div>
                        <div className="text-3xl font-bold text-white mb-1">
                          {userData.rank}
                        </div>
                        <div className="text-white/60 text-sm">
                          Lvl {userData.level} • {Math.round(progressPercentage)}%
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </div>

                {/* Charts Row */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <Card className="glass-strong border-white/10">
                    <CardHeader>
                      <CardTitle className="text-white flex items-center gap-2">
                        <BarChart2 className="w-5 h-5 text-cyan-400" />
                        Investment Growth
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="h-64 flex items-center justify-center text-white/50">
                        <div className="text-center">
                          <TrendingUp className="w-16 h-16 mx-auto mb-4 text-lime-400" />
                          <p>Chart visualization coming soon</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="glass-strong border-white/10">
                    <CardHeader>
                      <CardTitle className="text-white flex items-center gap-2">
                        <Target className="w-5 h-5 text-lime-400" />
                        Token Distribution
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="h-64 flex items-center justify-center text-white/50">
                        <div className="text-center">
                          <Target className="w-16 h-16 mx-auto mb-4 text-cyan-400" />
                          <p>Donut chart visualization coming soon</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            )}

            {/* Achievements Page */}
            {activePage === 'achievements' && (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-3xl font-bold text-white mb-2">
                      Getting Started – Participation & First Steps
                    </h2>
                    <p className="text-white/70">
                      Complete achievements to earn XP and unlock rewards
                    </p>
                  </div>
                </div>

                {/* XP Progress Bar */}
                <Card className="glass-strong border-cyan-400/30">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <div className="text-white font-semibold mb-1">
                          XP Progress
                        </div>
                        <div className="text-white/60 text-sm">
                          {userData.currentXP.toLocaleString()} / {userData.nextLevelXP.toLocaleString()} XP
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-cyan-400">
                          {userData.rank}
                        </div>
                        <div className="text-white/60 text-sm">
                          Level {userData.level}
                        </div>
                      </div>
                    </div>
                    <Progress value={progressPercentage} className="h-3" />
                  </CardContent>
                </Card>

                {/* Achievement Cards */}
                <div className="space-y-4">
                  {achievements.map((achievement, index) => (
                    <motion.div
                      key={achievement.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <Card
                        onClick={() => setSelectedAchievement(achievement)}
                        className={`glass-strong border transition-all duration-300 cursor-pointer ${
                          achievement.status === 'completed'
                            ? 'border-lime-400/50 bg-lime-400/5'
                            : achievement.status === 'in-progress'
                            ? 'border-cyan-400/50 bg-cyan-400/5'
                            : 'border-white/10 hover:border-white/30'
                        }`}
                      >
                        <CardContent className="p-6">
                          <div className="flex items-center gap-4">
                            <div className="text-5xl">{achievement.icon}</div>
                            <div className="flex-1">
                              <div className="flex items-center gap-3 mb-2">
                                <h3 className="text-lg font-semibold text-white">
                                  {achievement.title}
                                </h3>
                                <Badge
                                  className={`${
                                    achievement.status === 'completed'
                                      ? 'bg-lime-400/20 text-lime-400 border-lime-400/50'
                                      : achievement.status === 'in-progress'
                                      ? 'bg-cyan-400/20 text-cyan-400 border-cyan-400/50'
                                      : 'bg-white/10 text-white/70 border-white/20'
                                  }`}
                                >
                                  {achievement.status === 'completed'
                                    ? 'Completed'
                                    : achievement.status === 'in-progress'
                                    ? 'In Progress'
                                    : 'Not Started'}
                                </Badge>
                              </div>
                              <p className="text-white/70 text-sm mb-3">
                                {achievement.description}
                              </p>
                              {achievement.progress !== undefined && achievement.total && (
                                <div className="space-y-1">
                                  <div className="flex justify-between text-xs text-white/60">
                                    <span>Progress</span>
                                    <span>
                                      {achievement.progress}/{achievement.total}
                                    </span>
                                  </div>
                                  <Progress
                                    value={(achievement.progress / achievement.total) * 100}
                                    className="h-2"
                                  />
                                </div>
                              )}
                            </div>
                            <div className="text-right">
                              <div className="text-2xl font-bold text-cyan-400 mb-1">
                                {achievement.xp.toLocaleString()}
                              </div>
                              <div className="text-white/60 text-xs">XP</div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {/* Community Challenges Page */}
            {activePage === 'challenges' && (
              <div className="space-y-6">
                <CommunityChallenges />
              </div>
            )}

            {/* Top Referrers Leaderboard Page */}
            {activePage === 'leaderboard' && (
              <div className="space-y-6">
                <CommunityLeaderboard />
              </div>
            )}

            {/* Content Creator Challenge Page */}
            {activePage === 'content-creator' && (
              <div className="space-y-6">
                <ContentCreationChallenge />
              </div>
            )}

            {/* Ambassador Program Page */}
            {activePage === 'ambassador' && (
              <div className="space-y-6">
                <AmbassadorProgram />
              </div>
            )}

            {/* Buy Now Page */}
            {activePage === 'buy' && (
              <div className="space-y-6">
                <div className="text-center mb-8">
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    Buy <span className="text-gradient">DAGOS</span> Tokens
                  </h2>
                  <p className="text-white/70 text-lg">
                    Current presale price: <span className="text-cyan-400 font-semibold">$0.03</span> per token
                  </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  {/* Purchase Card */}
                  <div className="lg:col-span-2">
                    <Card className="glass-strong border-white/10">
                      <CardHeader>
                        <CardTitle className="text-white flex items-center gap-2">
                          <ShoppingCart className="w-5 h-5 text-cyan-400" />
                          Purchase DAGOS
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-6">
                        <div>
                          <Label className="text-white/80 mb-2 block">Amount (USD)</Label>
                          <Input
                            type="number"
                            placeholder="100"
                            className="bg-white/5 border-white/20 text-white"
                          />
                          <p className="text-sm text-white/50 mt-2">Minimum: $50</p>
                        </div>

                        <div className="bg-cyan-400/10 border border-cyan-400/30 rounded-lg p-4">
                          <div className="flex justify-between mb-2">
                            <span className="text-white/70">You will receive:</span>
                            <span className="text-white font-semibold">~3,333 DAGOS</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-white/70">Bonus tokens:</span>
                            <span className="text-lime-400 font-semibold">+167 DAGOS (5%)</span>
                          </div>
                        </div>

                        <Button className="w-full bg-gradient-to-r from-cyan-400 to-lime-400 text-navy-900 hover:from-cyan-300 hover:to-lime-300 py-6 text-lg">
                          Connect Wallet to Purchase
                        </Button>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Info Card */}
                  <Card className="glass-strong border-white/10">
                    <CardHeader>
                      <CardTitle className="text-white">Presale Info</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <div className="text-white/70 text-sm mb-1">Current Stage</div>
                        <div className="text-xl font-bold text-cyan-400">Stage 700</div>
                      </div>
                      <div>
                        <div className="text-white/70 text-sm mb-1">Tokens Sold</div>
                        <div className="text-xl font-bold text-white">485M / 1B</div>
                        <Progress value={48.5} className="h-2 mt-2" />
                      </div>
                      <div>
                        <div className="text-white/70 text-sm mb-1">Next Price</div>
                        <div className="text-xl font-bold text-lime-400">$0.035</div>
                      </div>
                      <div className="bg-yellow-400/10 border border-yellow-400/30 rounded p-3">
                        <p className="text-yellow-400 text-sm">
                          ⚡ Price increases in next stage!
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            )}

            {/* Trade DAG Page */}
            {activePage === 'trade' && (
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-white mb-6">
                  Trade <span className="text-gradient">DAG Network</span>
                </h2>

                <Card className="glass-strong border-white/10">
                  <CardContent className="p-8 text-center">
                    <TrendingUp className="w-20 h-20 mx-auto mb-6 text-lime-400" />
                    <h3 className="text-2xl font-bold text-white mb-4">
                      Trading Coming Soon
                    </h3>
                    <p className="text-white/70 mb-6 max-w-2xl mx-auto">
                      DAG Network trading will be available after the presale concludes. 
                      We'll be listing on major DEXs in Q4 2024 and CEXs in Q1 2025.
                    </p>
                    <div className="flex gap-4 justify-center">
                      <Button variant="outline" className="border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/10">
                        Join Waitlist
                      </Button>
                      <Button variant="outline" className="border-lime-400/50 text-lime-400 hover:bg-lime-400/10">
                        View Roadmap
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}

            {/* ROI Calculator Page */}
            {activePage === 'roi' && (
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-white mb-6">
                  <span className="text-gradient">ROI</span> Calculator
                </h2>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <Card className="glass-strong border-white/10">
                    <CardHeader>
                      <CardTitle className="text-white flex items-center gap-2">
                        <Calculator className="w-5 h-5 text-cyan-400" />
                        Calculate Your Returns
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div>
                        <Label className="text-white/80 mb-2 block">Investment Amount (USD)</Label>
                        <Input
                          type="number"
                          placeholder="1000"
                          defaultValue="1000"
                          className="bg-white/5 border-white/20 text-white"
                        />
                      </div>

                      <div>
                        <Label className="text-white/80 mb-2 block">Expected Price Multiplier</Label>
                        <div className="grid grid-cols-4 gap-2">
                          {['2x', '5x', '10x', '20x'].map(multiplier => (
                            <Button
                              key={multiplier}
                              variant="outline"
                              className="border-cyan-400/30 text-cyan-400 hover:bg-cyan-400/20"
                            >
                              {multiplier}
                            </Button>
                          ))}
                        </div>
                      </div>

                      <div className="bg-gradient-to-r from-cyan-400/10 to-lime-400/10 border border-cyan-400/30 rounded-lg p-6">
                        <div className="text-center">
                          <div className="text-white/70 text-sm mb-2">Potential Return</div>
                          <div className="text-4xl font-bold text-gradient mb-4">$10,000</div>
                          <div className="text-lime-400 text-xl">+900% ROI</div>
                        </div>
                      </div>

                      <p className="text-xs text-white/50 text-center">
                        * This calculator provides estimates only and should not be considered financial advice.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="glass-strong border-white/10">
                    <CardHeader>
                      <CardTitle className="text-white">Historical Performance</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {[
                          { stage: 'Stage 1', price: '$0.01', roi: '+200%', status: 'completed' },
                          { stage: 'Stage 350', price: '$0.02', roi: '+50%', status: 'completed' },
                          { stage: 'Stage 700', price: '$0.03', roi: 'Current', status: 'active' },
                          { stage: 'Stage 1000', price: '$0.05', roi: '+67%', status: 'upcoming' },
                        ].map((item, idx) => (
                          <div key={idx} className="flex items-center justify-between p-3 rounded-lg bg-white/5">
                            <div>
                              <div className="text-white font-medium">{item.stage}</div>
                              <div className="text-white/60 text-sm">{item.price}</div>
                            </div>
                            <Badge className={
                              item.status === 'active' 
                                ? 'bg-lime-400/20 text-lime-400' 
                                : item.status === 'completed'
                                ? 'bg-cyan-400/20 text-cyan-400'
                                : 'bg-white/10 text-white/70'
                            }>
                              {item.roi}
                            </Badge>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            )}

            {/* Dev Releases Page */}
            {activePage === 'dev' && (
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-white mb-6">
                  <span className="text-gradient">Development</span> Releases
                </h2>

                <div className="space-y-4">
                  {[
                    {
                      version: 'v2.1.0',
                      title: 'Smart Contract Optimization',
                      date: 'Oct 15, 2024',
                      status: 'Latest',
                      features: ['Gas optimization -40%', 'Enhanced security audits', 'Multi-sig wallet integration']
                    },
                    {
                      version: 'v2.0.5',
                      title: 'Dashboard Upgrade',
                      date: 'Oct 10, 2024',
                      status: 'Stable',
                      features: ['New investor dashboard', 'Real-time analytics', 'Mobile responsive design']
                    },
                    {
                      version: 'v2.0.0',
                      title: 'Major Platform Update',
                      date: 'Oct 1, 2024',
                      status: 'Major',
                      features: ['DAG network integration', 'Staking mechanisms', 'Governance voting']
                    },
                  ].map((release, idx) => (
                    <Card key={idx} className="glass-strong border-white/10 hover:border-cyan-400/30 transition-all">
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <div className="flex items-center gap-3 mb-2">
                              <h3 className="text-xl font-bold text-white">{release.title}</h3>
                              <Badge className={
                                release.status === 'Latest'
                                  ? 'bg-lime-400/20 text-lime-400'
                                  : release.status === 'Major'
                                  ? 'bg-purple-400/20 text-purple-400'
                                  : 'bg-cyan-400/20 text-cyan-400'
                              }>
                                {release.status}
                              </Badge>
                            </div>
                            <div className="flex items-center gap-3 text-white/60 text-sm">
                              <Code className="w-4 h-4" />
                              <span>{release.version}</span>
                              <span>•</span>
                              <Clock className="w-4 h-4" />
                              <span>{release.date}</span>
                            </div>
                          </div>
                        </div>
                        <div className="space-y-2">
                          {release.features.map((feature, fidx) => (
                            <div key={fidx} className="flex items-center gap-2 text-white/80">
                              <CheckCircle className="w-4 h-4 text-lime-400" />
                              <span className="text-sm">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}

            {/* Buyer Battles Page */}
            {activePage === 'battles' && (
              <div className="space-y-6">
                <div className="text-center mb-8">
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    <span className="text-gradient">Buyer</span> Battles
                  </h2>
                  <p className="text-white/70 text-lg">
                    Compete with other investors and climb the leaderboard!
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <Card className="glass-strong border-yellow-400/30">
                    <CardContent className="p-6 text-center">
                      <div className="text-5xl mb-3">🥇</div>
                      <div className="text-2xl font-bold text-yellow-400 mb-1">1st Place</div>
                      <div className="text-white/70 text-sm mb-2">0x8f3d...a21c</div>
                      <div className="text-white font-semibold">$2.5M Invested</div>
                    </CardContent>
                  </Card>

                  <Card className="glass-strong border-gray-400/30">
                    <CardContent className="p-6 text-center">
                      <div className="text-5xl mb-3">🥈</div>
                      <div className="text-2xl font-bold text-gray-400 mb-1">2nd Place</div>
                      <div className="text-white/70 text-sm mb-2">0x7b2e...f89d</div>
                      <div className="text-white font-semibold">$1.8M Invested</div>
                    </CardContent>
                  </Card>

                  <Card className="glass-strong border-orange-400/30">
                    <CardContent className="p-6 text-center">
                      <div className="text-5xl mb-3">🥉</div>
                      <div className="text-2xl font-bold text-orange-400 mb-1">3rd Place</div>
                      <div className="text-white/70 text-sm mb-2">0x9c4f...b76a</div>
                      <div className="text-white font-semibold">$1.2M Invested</div>
                    </CardContent>
                  </Card>
                </div>

                <Card className="glass-strong border-white/10">
                  <CardHeader>
                    <CardTitle className="text-white flex items-center gap-2">
                      <Trophy className="w-5 h-5 text-lime-400" />
                      Current Battle Rankings
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {Array.from({length: 7}, (_, i) => i + 4).map(rank => (
                        <div key={rank} className="flex items-center justify-between p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
                          <div className="flex items-center gap-4">
                            <div className="w-8 h-8 rounded-full bg-cyan-400/20 flex items-center justify-center">
                              <span className="text-cyan-400 font-bold text-sm">{rank}</span>
                            </div>
                            <div>
                              <div className="text-white font-medium text-sm">
                                0x{Math.random().toString(16).substr(2, 4)}...{Math.random().toString(16).substr(2, 4)}
                              </div>
                            </div>
                          </div>
                          <div className="text-white/70">
                            ${(Math.random() * 500 + 100).toFixed(0)}K
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}

            {/* Referral Page */}
            {activePage === 'referral' && (
              <div className="space-y-6">
                <div className="text-center mb-8">
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    <span className="text-gradient">Referral</span> Program
                  </h2>
                  <p className="text-white/70 text-lg">
                    Earn 5% commission on every referral + 2% bonus for your friends
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <Card className="glass-strong border-cyan-400/30">
                    <CardContent className="p-6 text-center">
                      <Users className="w-12 h-12 mx-auto mb-4 text-cyan-400" />
                      <div className="text-3xl font-bold text-white mb-2">24</div>
                      <div className="text-white/70">Total Referrals</div>
                    </CardContent>
                  </Card>

                  <Card className="glass-strong border-lime-400/30">
                    <CardContent className="p-6 text-center">
                      <Gift className="w-12 h-12 mx-auto mb-4 text-lime-400" />
                      <div className="text-3xl font-bold text-white mb-2">$2,450</div>
                      <div className="text-white/70">Total Earned</div>
                    </CardContent>
                  </Card>

                  <Card className="glass-strong border-purple-400/30">
                    <CardContent className="p-6 text-center">
                      <Zap className="w-12 h-12 mx-auto mb-4 text-purple-400" />
                      <div className="text-3xl font-bold text-white mb-2">8</div>
                      <div className="text-white/70">Active This Month</div>
                    </CardContent>
                  </Card>
                </div>

                <Card className="glass-strong border-white/10">
                  <CardHeader>
                    <CardTitle className="text-white">Your Referral Link</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex gap-2">
                      <Input
                        value="https://dagos.io/presale?ref=DAG-REF-USER123"
                        readOnly
                        className="bg-white/5 border-white/20 text-white font-mono"
                      />
                      <Button
                        onClick={() => {
                          navigator.clipboard.writeText('https://dagos.io/presale?ref=DAG-REF-USER123');
                          toast.success('Referral link copied!');
                        }}
                        variant="outline"
                        className="border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/10"
                      >
                        Copy
                      </Button>
                    </div>
                    <div className="bg-lime-400/10 border border-lime-400/30 rounded-lg p-4">
                      <p className="text-lime-400 text-sm">
                        💡 Share on social media to maximize your earnings!
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}

            {/* Transactions Page */}
            {activePage === 'transactions' && (
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-white mb-6">
                  Transaction <span className="text-gradient">History</span>
                </h2>

                <Card className="glass-strong border-white/10">
                  <CardHeader>
                    <CardTitle className="text-white flex items-center gap-2">
                      <Activity className="w-5 h-5 text-cyan-400" />
                      Recent Transactions
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {[
                        { type: 'Purchase', amount: '15,000 DAGOS', value: '$450', date: '2 hours ago', status: 'completed' },
                        { type: 'Purchase', amount: '25,000 DAGOS', value: '$750', date: '1 day ago', status: 'completed' },
                        { type: 'Referral Bonus', amount: '1,250 DAGOS', value: '$37.50', date: '2 days ago', status: 'completed' },
                        { type: 'Purchase', amount: '50,000 DAGOS', value: '$1,500', date: '5 days ago', status: 'completed' },
                        { type: 'Purchase', amount: '10,000 DAGOS', value: '$300', date: '1 week ago', status: 'completed' },
                      ].map((tx, idx) => (
                        <div key={idx} className="flex items-center justify-between p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
                          <div className="flex items-center gap-4">
                            <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                              tx.type === 'Purchase' ? 'bg-cyan-400/20' : 'bg-lime-400/20'
                            }`}>
                              {tx.type === 'Purchase' ? (
                                <ShoppingCart className="w-5 h-5 text-cyan-400" />
                              ) : (
                                <Gift className="w-5 h-5 text-lime-400" />
                              )}
                            </div>
                            <div>
                              <div className="text-white font-medium">{tx.type}</div>
                              <div className="text-white/60 text-sm">{tx.date}</div>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-white font-semibold">{tx.amount}</div>
                            <div className="text-white/60 text-sm">{tx.value}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}

            {/* Profile Page */}
            {activePage === 'profile' && (
              <div className="space-y-6 max-w-3xl">
                <h2 className="text-3xl font-bold text-white mb-6">
                  Your <span className="text-gradient">Profile</span>
                </h2>

                <Card className="glass-strong border-white/10">
                  <CardHeader>
                    <CardTitle className="text-white">Account Information</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="flex items-center gap-6">
                      <div className="w-20 h-20 rounded-full bg-gradient-to-br from-cyan-400 to-lime-400 flex items-center justify-center text-3xl">
                        👤
                      </div>
                      <div>
                        <div className="text-white font-semibold text-lg mb-1">Investor</div>
                        <div className="text-white/60 text-sm font-mono">{userData.walletAddress}</div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label className="text-white/80 mb-2 block">Email Address</Label>
                        <Input
                          type="email"
                          placeholder="investor@example.com"
                          className="bg-white/5 border-white/20 text-white"
                        />
                      </div>
                      <div>
                        <Label className="text-white/80 mb-2 block">Display Name</Label>
                        <Input
                          placeholder="Anonymous Investor"
                          className="bg-white/5 border-white/20 text-white"
                        />
                      </div>
                    </div>

                    <div>
                      <Label className="text-white/80 mb-2 block">Telegram Username (Optional)</Label>
                      <Input
                        placeholder="@yourusername"
                        className="bg-white/5 border-white/20 text-white"
                      />
                    </div>

                    <Button className="w-full bg-gradient-to-r from-cyan-400 to-lime-400 text-navy-900 hover:from-cyan-300 hover:to-lime-300">
                      Save Changes
                    </Button>
                  </CardContent>
                </Card>

                <Card className="glass-strong border-white/10">
                  <CardHeader>
                    <CardTitle className="text-white flex items-center gap-2">
                      <Shield className="w-5 h-5 text-cyan-400" />
                      Security Settings
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-white/5 rounded-lg">
                      <div>
                        <div className="text-white font-medium mb-1">Two-Factor Authentication</div>
                        <div className="text-white/60 text-sm">Add an extra layer of security</div>
                      </div>
                      <Badge className="bg-yellow-400/20 text-yellow-400">
                        Not Enabled
                      </Badge>
                    </div>

                    <div className="flex items-center justify-between p-4 bg-white/5 rounded-lg">
                      <div>
                        <div className="text-white font-medium mb-1">KYC Verification</div>
                        <div className="text-white/60 text-sm">Complete identity verification</div>
                      </div>
                      <Badge className={
                        kycStatus === 'verified' 
                          ? 'bg-lime-400/20 text-lime-400' 
                          : 'bg-yellow-400/20 text-yellow-400'
                      }>
                        {kycStatus === 'verified' ? 'Verified' : 'Pending'}
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}

            {/* KYC Verification Page */}
            {activePage === 'kyc' && (
              <div className="max-w-3xl">
                <h2 className="text-3xl font-bold text-white mb-6">
                  KYC Verification
                </h2>

                <Card className="glass-strong border-white/10">
                  <CardHeader>
                    <CardTitle className="text-xl text-white flex items-center gap-3">
                      <FileCheck className="w-6 h-6 text-cyan-400" />
                      Complete Your KYC
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {/* Status Badge */}
                    <div className="flex items-center justify-between p-4 rounded-lg bg-white/5">
                      <span className="text-white font-medium">
                        Verification Status:
                      </span>
                      <Badge
                        className={`${
                          kycStatus === 'verified'
                            ? 'bg-lime-400/20 text-lime-400 border-lime-400/50'
                            : kycStatus === 'rejected'
                            ? 'bg-red-400/20 text-red-400 border-red-400/50'
                            : 'bg-yellow-400/20 text-yellow-400 border-yellow-400/50'
                        }`}
                      >
                        {kycStatus === 'verified' && <CheckCircle className="w-4 h-4 mr-1" />}
                        {kycStatus === 'rejected' && <AlertCircle className="w-4 h-4 mr-1" />}
                        {kycStatus === 'pending' && <Clock className="w-4 h-4 mr-1" />}
                        {kycStatus.charAt(0).toUpperCase() + kycStatus.slice(1)}
                      </Badge>
                    </div>

                    {/* Info Box */}
                    <div className="bg-cyan-400/10 border border-cyan-400/30 rounded-lg p-4">
                      <div className="flex items-start gap-3">
                        <Shield className="w-5 h-5 text-cyan-400 mt-0.5" />
                        <div>
                          <h4 className="text-white font-semibold mb-1">
                            Why KYC is Important
                          </h4>
                          <p className="text-white/70 text-sm">
                            KYC verification protects both you and the DAGOS ecosystem. It prevents fraud, ensures compliance with regulations, and unlocks higher investment tiers.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Upload Section */}
                    <div className="space-y-4">
                      <Label className="text-white">
                        Upload Document (ID, Passport, or Driver's License)
                      </Label>
                      <div className="border-2 border-dashed border-white/20 rounded-lg p-8 text-center hover:border-cyan-400/50 transition-colors">
                        <input
                          type="file"
                          id="kyc-upload"
                          className="hidden"
                          accept="image/*,.pdf"
                          onChange={handleFileUpload}
                        />
                        <label
                          htmlFor="kyc-upload"
                          className="cursor-pointer"
                        >
                          <Upload className="w-12 h-12 text-white/40 mx-auto mb-4" />
                          {uploadedDocument ? (
                            <div className="text-lime-400 font-medium">
                              ✓ {uploadedDocument}
                            </div>
                          ) : (
                            <>
                              <div className="text-white/70 mb-2">
                                Click to upload or drag and drop
                              </div>
                              <div className="text-white/50 text-sm">
                                PNG, JPG, or PDF (max 10MB)
                              </div>
                            </>
                          )}
                        </label>
                      </div>
                    </div>

                    {/* Submit Button */}
                    <Button
                      onClick={handleKYCSubmit}
                      disabled={!uploadedDocument || kycStatus === 'verified'}
                      className="w-full bg-gradient-to-r from-cyan-400 to-lime-400 text-navy-900 hover:from-cyan-300 hover:to-lime-300 text-lg py-6 disabled:opacity-50"
                    >
                      {kycStatus === 'verified' ? (
                        <>
                          <CheckCircle className="w-5 h-5 mr-2" />
                          Verified
                        </>
                      ) : (
                        <>
                          <Upload className="w-5 h-5 mr-2" />
                          Submit Verification
                        </>
                      )}
                    </Button>
                  </CardContent>
                </Card>
              </div>
            )}

            {/* Other Pages Placeholders */}
            {!['home', 'achievements', 'kyc', 'challenges', 'leaderboard', 'content-creator', 'ambassador'].includes(activePage) && (
              <div className="text-center py-20">
                <div className="text-6xl mb-6">🚧</div>
                <h2 className="text-2xl font-bold text-white mb-4">
                  {menuItems.find(m => m.id === activePage)?.label}
                </h2>
                <p className="text-white/70">
                  This section is under development
                </p>
              </div>
            )}
          </main>
        </div>
      </div>

      {/* Rank Details Modal */}
      <Dialog open={rankDetailsOpen} onOpenChange={setRankDetailsOpen}>
        <DialogContent className="glass-strong border-white/20 text-white max-w-md">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-white flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-lime-400 to-cyan-400 rounded-full flex items-center justify-center text-2xl">
                🐢
              </div>
              Investor Rank Details
            </DialogTitle>
            <DialogDescription className="text-white/70">
              View your current rank progress and XP details
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-6 pt-4">
            <div className="text-center">
              <div className="text-3xl font-bold text-lime-400 mb-2">
                {userData.rank}
              </div>
              <div className="text-white/70">Level {userData.level}</div>
            </div>

            <div className="space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-white/70">Current XP:</span>
                <span className="text-white font-semibold">
                  {userData.currentXP.toLocaleString()}
                </span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-white/70">Next Level:</span>
                <span className="text-white font-semibold">
                  {userData.nextLevelXP.toLocaleString()}
                </span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-white/70">Remaining:</span>
                <span className="text-cyan-400 font-semibold">
                  {(userData.nextLevelXP - userData.currentXP).toLocaleString()} XP
                </span>
              </div>
            </div>

            <div>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-white/70">Progress</span>
                <span className="text-lime-400 font-semibold">
                  {Math.round(progressPercentage)}%
                </span>
              </div>
              <Progress value={progressPercentage} className="h-3" />
            </div>

            <div className="bg-cyan-400/10 border border-cyan-400/30 rounded-lg p-4">
              <p className="text-sm text-white/80">
                Earn XP by completing achievements, making purchases, referring friends, and participating in community challenges!
              </p>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Achievement Detail Modal */}
      <Dialog
        open={!!selectedAchievement}
        onOpenChange={() => setSelectedAchievement(null)}
      >
        <DialogContent className="glass-strong border-white/20 text-white max-w-md">
          {selectedAchievement && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold text-white flex items-center gap-3">
                  <div className="text-5xl">{selectedAchievement.icon}</div>
                  {selectedAchievement.title}
                </DialogTitle>
                <DialogDescription className="text-white/70">
                  Achievement details and progress
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-6 pt-4">
                <p className="text-white/80">{selectedAchievement.description}</p>

                {selectedAchievement.progress !== undefined && selectedAchievement.total && (
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-white/70">Progress:</span>
                      <span className="text-white font-semibold">
                        {selectedAchievement.progress}/{selectedAchievement.total}
                      </span>
                    </div>
                    <Progress
                      value={(selectedAchievement.progress / selectedAchievement.total) * 100}
                      className="h-3"
                    />
                  </div>
                )}

                <div className="flex items-center justify-between p-4 bg-cyan-400/10 border border-cyan-400/30 rounded-lg">
                  <span className="text-white/80">Reward:</span>
                  <div className="text-2xl font-bold text-cyan-400">
                    {selectedAchievement.xp.toLocaleString()} XP
                  </div>
                </div>

                <div className="flex items-center justify-center">
                  <Badge
                    className={`text-sm px-4 py-2 ${
                      selectedAchievement.status === 'completed'
                        ? 'bg-lime-400/20 text-lime-400 border-lime-400/50'
                        : selectedAchievement.status === 'in-progress'
                        ? 'bg-cyan-400/20 text-cyan-400 border-cyan-400/50'
                        : 'bg-white/10 text-white/70 border-white/20'
                    }`}
                  >
                    {selectedAchievement.status === 'completed'
                      ? '✓ Completed'
                      : selectedAchievement.status === 'in-progress'
                      ? 'In Progress'
                      : 'Not Started'}
                  </Badge>
                </div>

                {selectedAchievement.status !== 'completed' && (
                  <Button
                    onClick={() => onPageChange?.('buy')}
                    className="w-full bg-gradient-to-r from-cyan-400 to-lime-400 text-navy-900 hover:from-cyan-300 hover:to-lime-300 glow-cyan"
                  >
                    Buy More DAG
                  </Button>
                )}
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
