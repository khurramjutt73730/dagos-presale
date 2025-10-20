import React from 'react';
import { Card, CardContent, CardHeader } from './ui/card';
import { Skeleton } from './ui/skeleton';

export function DashboardSkeleton() {
  return (
    <div className="space-y-6 p-4 md:p-8">
      {/* Header Skeleton */}
      <div className="space-y-2">
        <Skeleton className="h-8 w-64 bg-white/10" />
        <Skeleton className="h-4 w-96 bg-white/10" />
      </div>

      {/* Stats Grid Skeleton */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {[...Array(4)].map((_, i) => (
          <Card key={i} className="glass border-white/10">
            <CardContent className="p-4 space-y-3">
              <Skeleton className="h-4 w-20 bg-white/10" />
              <Skeleton className="h-8 w-32 bg-white/10" />
              <Skeleton className="h-3 w-24 bg-white/10" />
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Large Card Skeleton */}
      <Card className="glass-strong border-white/10">
        <CardHeader>
          <Skeleton className="h-6 w-48 bg-white/10" />
        </CardHeader>
        <CardContent className="space-y-4">
          <Skeleton className="h-32 w-full bg-white/10" />
          <div className="grid grid-cols-2 gap-4">
            <Skeleton className="h-20 bg-white/10" />
            <Skeleton className="h-20 bg-white/10" />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export function TokenomicsChartSkeleton() {
  return (
    <Card className="glass-strong border-white/10">
      <CardHeader>
        <Skeleton className="h-6 w-40 bg-white/10" />
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center justify-center">
          <Skeleton className="w-64 h-64 rounded-full bg-white/10" />
        </div>
        <div className="grid grid-cols-2 gap-4">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex items-center gap-2">
              <Skeleton className="w-4 h-4 rounded-full bg-white/10" />
              <Skeleton className="h-4 w-24 bg-white/10" />
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

export function TransactionListSkeleton() {
  return (
    <Card className="glass-strong border-white/10">
      <CardHeader>
        <Skeleton className="h-6 w-48 bg-white/10" />
      </CardHeader>
      <CardContent className="space-y-3">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="flex items-center justify-between p-3 glass rounded-lg">
            <div className="flex items-center gap-3 flex-1">
              <Skeleton className="w-10 h-10 rounded-full bg-white/10" />
              <div className="space-y-2 flex-1">
                <Skeleton className="h-4 w-32 bg-white/10" />
                <Skeleton className="h-3 w-24 bg-white/10" />
              </div>
            </div>
            <Skeleton className="h-6 w-16 bg-white/10 rounded-full" />
          </div>
        ))}
      </CardContent>
    </Card>
  );
}

export function WalletBalanceSkeleton() {
  return (
    <Card className="glass-strong border-white/10">
      <CardContent className="p-6 space-y-4">
        <div className="flex items-center justify-between">
          <Skeleton className="h-4 w-24 bg-white/10" />
          <Skeleton className="h-8 w-32 bg-white/10" />
        </div>
        <Skeleton className="h-2 w-full bg-white/10 rounded-full" />
        <div className="flex items-center justify-between text-sm">
          <Skeleton className="h-3 w-20 bg-white/10" />
          <Skeleton className="h-3 w-20 bg-white/10" />
        </div>
      </CardContent>
    </Card>
  );
}

export function ReferralStatsSkeleton() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {[...Array(4)].map((_, i) => (
        <Card key={i} className="glass border-white/10">
          <CardContent className="p-4 space-y-3">
            <div className="flex items-center justify-between">
              <Skeleton className="w-10 h-10 rounded-lg bg-white/10" />
              <Skeleton className="h-5 w-16 rounded-full bg-white/10" />
            </div>
            <Skeleton className="h-8 w-24 bg-white/10" />
            <Skeleton className="h-3 w-32 bg-white/10" />
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

export function PageLoadingSkeleton() {
  return (
    <div className="min-h-screen p-4 md:p-8 space-y-8">
      {/* Hero Section Skeleton */}
      <div className="space-y-4 text-center max-w-4xl mx-auto">
        <Skeleton className="h-12 w-3/4 mx-auto bg-white/10" />
        <Skeleton className="h-6 w-2/3 mx-auto bg-white/10" />
        <div className="flex gap-4 justify-center mt-8">
          <Skeleton className="h-12 w-32 bg-white/10 rounded-lg" />
          <Skeleton className="h-12 w-32 bg-white/10 rounded-lg" />
        </div>
      </div>

      {/* Content Grid Skeleton */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {[...Array(6)].map((_, i) => (
          <Card key={i} className="glass-strong border-white/10">
            <CardHeader>
              <Skeleton className="h-6 w-32 bg-white/10" />
            </CardHeader>
            <CardContent className="space-y-3">
              <Skeleton className="h-4 w-full bg-white/10" />
              <Skeleton className="h-4 w-5/6 bg-white/10" />
              <Skeleton className="h-4 w-4/6 bg-white/10" />
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

export function InvestPageSkeleton() {
  return (
    <div className="container mx-auto px-4 py-8 space-y-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Investment Card */}
        <div className="lg:col-span-2 space-y-6">
          <Card className="glass-strong border-white/10">
            <CardHeader>
              <Skeleton className="h-8 w-48 bg-white/10" />
            </CardHeader>
            <CardContent className="space-y-6">
              <Skeleton className="h-4 w-full bg-white/10 rounded-full" />
              <div className="grid grid-cols-2 gap-4">
                <Skeleton className="h-24 bg-white/10 rounded-lg" />
                <Skeleton className="h-24 bg-white/10 rounded-lg" />
              </div>
              <Skeleton className="h-48 bg-white/10 rounded-lg" />
              <Skeleton className="h-12 w-full bg-white/10 rounded-lg" />
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          <Card className="glass-strong border-white/10">
            <CardContent className="p-6 space-y-4">
              <Skeleton className="h-6 w-32 bg-white/10" />
              <Skeleton className="h-32 bg-white/10 rounded-lg" />
              <Skeleton className="h-10 w-full bg-white/10 rounded-lg" />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
