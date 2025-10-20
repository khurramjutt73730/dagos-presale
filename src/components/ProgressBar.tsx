import React from 'react';

interface ProgressBarProps {
  current: number;
  target: number;
  label: string;
  className?: string;
  showValues?: boolean;
}

export function ProgressBar({ 
  current, 
  target, 
  label, 
  className = '', 
  showValues = true 
}: ProgressBarProps) {
  const percentage = Math.min((current / target) * 100, 100);

  const formatNumber = (num: number) => {
    if (num >= 1000000) {
      return `${(num / 1000000).toFixed(1)}M`;
    }
    if (num >= 1000) {
      return `${(num / 1000).toFixed(1)}K`;
    }
    return num.toLocaleString();
  };

  return (
    <div className={`space-y-2 ${className}`}>
      <div className="flex justify-between items-center">
        <span className="text-white/90">{label}</span>
        {showValues && (
          <span className="text-cyan-400">
            {formatNumber(current)} / {formatNumber(target)}
          </span>
        )}
      </div>
      <div className="relative">
        <div className="w-full bg-white/10 rounded-full h-3 overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-cyan-400 to-lime-400 rounded-full transition-all duration-500 ease-out relative"
            style={{ width: `${percentage}%` }}
          >
            <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
          </div>
        </div>
        <div className="absolute right-2 top-0 text-xs text-white/70 mt-0.5">
          {percentage.toFixed(1)}%
        </div>
      </div>
    </div>
  );
}