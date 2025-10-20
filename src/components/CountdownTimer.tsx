import React, { useState, useEffect } from 'react';

interface CountdownTimerProps {
  targetDate: Date;
  className?: string;
  onSaleEnd?: () => void;
}

export function CountdownTimer({ targetDate, className = '', onSaleEnd }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        if (onSaleEnd) {
          onSaleEnd();
        }
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const timeUnits = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds }
  ];

  return (
    <div className={`flex justify-center gap-3 lg:gap-6 ${className}`}>
      {timeUnits.map((unit, index) => (
        <div key={unit.label} className="text-center group">
          <div className="glass-strong rounded-xl lg:rounded-2xl p-4 lg:p-6 min-w-[70px] lg:min-w-[100px] border border-cyan-400/30 hover:border-cyan-400/60 transition-all duration-500 relative overflow-hidden group-hover:scale-105">
            {/* Animated background */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 via-transparent to-lime-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            {/* Pulsing border animation */}
            <div className="absolute inset-0 rounded-xl lg:rounded-2xl border-2 border-cyan-400/50 animate-pulse opacity-50"></div>
            
            <div className="relative z-10">
              <div className="text-2xl lg:text-4xl font-bold bg-gradient-to-br from-cyan-400 to-lime-400 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                {unit.value.toString().padStart(2, '0')}
              </div>
              <div className="text-xs lg:text-sm text-white/70 uppercase tracking-wider group-hover:text-white/90 transition-colors">
                {unit.label}
              </div>
            </div>
            
            {/* Bottom accent line */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 to-lime-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
          </div>
          
          {/* Separator colon (except for last item) */}
          {index < timeUnits.length - 1 && (
            <div className="absolute top-1/2 -right-3 lg:-right-6 transform -translate-y-1/2 text-cyan-400/50 text-2xl lg:text-3xl font-bold animate-pulse">
              :
            </div>
          )}
        </div>
      ))}
    </div>
  );
}