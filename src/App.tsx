import React, { useState, Suspense, lazy } from 'react';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { HomePage } from './components/pages/HomePage';
import { MobileNavBar } from './components/MobileNavBar';
import { Toaster } from './components/ui/sonner';
import { PageLoadingSkeleton } from './components/SkeletonLoaders';

// Lazy load non-critical pages for better performance
const TechnologyPage = lazy(() => import('./components/pages/TechnologyPage').then(m => ({ default: m.TechnologyPage })));
const TokenomicsPage = lazy(() => import('./components/pages/TokenomicsPage').then(m => ({ default: m.TokenomicsPage })));
const RoadmapPage = lazy(() => import('./components/pages/RoadmapPage').then(m => ({ default: m.RoadmapPage })));
const CommunityPage = lazy(() => import('./components/pages/CommunityPage').then(m => ({ default: m.CommunityPage })));
const InvestPage = lazy(() => import('./components/pages/InvestPage').then(m => ({ default: m.InvestPage })));
const DashboardPage = lazy(() => import('./components/pages/DashboardPage').then(m => ({ default: m.DashboardPage })));

type PageType = 'home' | 'technology' | 'tokenomics' | 'roadmap' | 'community' | 'invest' | 'dashboard';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('home');
  const [isWalletConnected, setIsWalletConnected] = useState(false);
  const [walletAddress, setWalletAddress] = useState('');

  const handleConnectWallet = () => {
    // Simulate wallet connection
    setIsWalletConnected(true);
    setWalletAddress('0x742d35Cc6634C0532925a3b8C17f2E8E3a5fee32');
    
    // In a real app, this would integrate with Web3 providers like MetaMask
    if (typeof window !== 'undefined' && (window as any).ethereum) {
      // Real wallet connection logic would go here
    }
  };

  const handleDisconnectWallet = () => {
    // Clear wallet state
    setIsWalletConnected(false);
    setWalletAddress('');
    
    // Navigate to home page if currently on dashboard
    if (currentPage === 'dashboard') {
      setCurrentPage('home');
    }
    
    // In a real app, this would also disconnect from Web3 providers
    if (typeof window !== 'undefined' && (window as any).ethereum) {
      // Real wallet disconnection logic would go here
    }
  };

  const handlePageChange = (page: string) => {
    setCurrentPage(page as PageType);
    // Scroll to top when changing pages
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'home':
        return (
          <HomePage 
            onPageChange={handlePageChange}
            onConnectWallet={handleConnectWallet}
          />
        );
      case 'technology':
        return (
          <Suspense fallback={<PageLoadingSkeleton />}>
            <TechnologyPage />
          </Suspense>
        );
      case 'tokenomics':
        return (
          <Suspense fallback={<PageLoadingSkeleton />}>
            <TokenomicsPage />
          </Suspense>
        );
      case 'roadmap':
        return (
          <Suspense fallback={<PageLoadingSkeleton />}>
            <RoadmapPage />
          </Suspense>
        );
      case 'community':
        return (
          <Suspense fallback={<PageLoadingSkeleton />}>
            <CommunityPage />
          </Suspense>
        );
      case 'invest':
        return (
          <Suspense fallback={<PageLoadingSkeleton />}>
            <InvestPage 
              onConnectWallet={handleConnectWallet}
              onDisconnectWallet={handleDisconnectWallet}
              isWalletConnected={isWalletConnected}
              walletAddress={walletAddress}
            />
          </Suspense>
        );
      case 'dashboard':
        return (
          <Suspense fallback={<PageLoadingSkeleton />}>
            <DashboardPage 
              walletAddress={walletAddress}
              isWalletConnected={isWalletConnected}
              onDisconnectWallet={handleDisconnectWallet}
              onPageChange={handlePageChange}
            />
          </Suspense>
        );
      default:
        return (
          <HomePage 
            onPageChange={handlePageChange}
            onConnectWallet={handleConnectWallet}
          />
        );
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Background Effects */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 via-transparent to-lime-400/5"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-400/10 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-lime-400/10 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        <Navigation 
          currentPage={currentPage}
          onPageChange={handlePageChange}
          onConnectWallet={handleConnectWallet}
          onDisconnectWallet={handleDisconnectWallet}
          isWalletConnected={isWalletConnected}
          walletAddress={walletAddress}
        />
        
        <main>
          {renderCurrentPage()}
        </main>
        
        <Footer onPageChange={handlePageChange} />
      </div>

      {/* Mobile Navigation Bar - Hidden on Dashboard */}
      {currentPage !== 'dashboard' && (
        <MobileNavBar 
          currentPage={currentPage}
          onPageChange={handlePageChange}
          isWalletConnected={isWalletConnected}
        />
      )}

      {/* Toast Notifications */}
      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            background: 'rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            color: 'white'
          }
        }}
      />
    </div>
  );
}