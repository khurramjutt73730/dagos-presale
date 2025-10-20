import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Badge } from './ui/badge';
import { 
  Calculator, 
  TrendingUp, 
  DollarSign, 
  Target,
  Info,
  BarChart3
} from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './ui/tooltip';

interface ROICalculatorProps {
  className?: string;
}

export function ROICalculator({ className = '' }: ROICalculatorProps) {
  const [investmentAmount, setInvestmentAmount] = useState<string>('1000');
  const [holdingPeriod, setHoldingPeriod] = useState<string>('12');
  const [priceScenario, setPriceScenario] = useState<string>('moderate');
  const [calculations, setCalculations] = useState({
    tokensReceived: 0,
    futureValue: 0,
    profit: 0,
    roi: 0,
    monthlyReturn: 0
  });

  // Price scenarios (multipliers of current price)
  const scenarios = {
    conservative: { multiplier: 1.5, label: 'Conservative', description: '50% price increase' },
    moderate: { multiplier: 3, label: 'Moderate', description: '200% price increase' },
    optimistic: { multiplier: 5, label: 'Optimistic', description: '400% price increase' },
    bullish: { multiplier: 10, label: 'Bull Market', description: '900% price increase' }
  };

  const currentPrice = 0.03; // $0.03
  const stakingAPY = 0.12; // 12% APY

  useEffect(() => {
    const investment = parseFloat(investmentAmount) || 0;
    const months = parseInt(holdingPeriod) || 1;
    const scenario = scenarios[priceScenario as keyof typeof scenarios];

    if (investment > 0) {
      // Calculate tokens received
      const tokens = investment / currentPrice;
      
      // Calculate staking rewards (compounding monthly)
      const monthlyStakingRate = stakingAPY / 12;
      const stakingMultiplier = Math.pow(1 + monthlyStakingRate, months);
      const tokensWithStaking = tokens * stakingMultiplier;
      
      // Calculate future value
      const futurePrice = currentPrice * scenario.multiplier;
      const futureValue = tokensWithStaking * futurePrice;
      
      // Calculate profit and ROI
      const profit = futureValue - investment;
      const roi = (profit / investment) * 100;
      const monthlyReturn = Math.pow(futureValue / investment, 1 / months) - 1;

      setCalculations({
        tokensReceived: tokensWithStaking,
        futureValue,
        profit,
        roi,
        monthlyReturn: monthlyReturn * 100
      });
    }
  }, [investmentAmount, holdingPeriod, priceScenario]);

  const formatNumber = (num: number, decimals = 2) => {
    return num.toLocaleString(undefined, { 
      minimumFractionDigits: decimals, 
      maximumFractionDigits: decimals 
    });
  };

  const formatCurrency = (amount: number) => {
    return `$${formatNumber(amount)}`;
  };

  return (
    <TooltipProvider>
      <Card className={`glass-strong border-white/10 hover:border-cyan-400/50 transition-all duration-500 ${className}`}>
        <CardHeader className="pb-4">
          <CardTitle className="text-xl text-white flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-lime-400 rounded-lg flex items-center justify-center">
              <Calculator className="w-5 h-5 text-navy-900" />
            </div>
            ROI Calculator
            <Tooltip>
              <TooltipTrigger>
                <Info className="w-4 h-4 text-white/60 hover:text-cyan-400 transition-colors" />
              </TooltipTrigger>
              <TooltipContent className="glass-strong border-white/20">
                <p className="text-sm">Calculate potential returns including staking rewards</p>
              </TooltipContent>
            </Tooltip>
          </CardTitle>
          <p className="text-white/60 text-sm">
            Estimate your potential returns with different market scenarios
          </p>
        </CardHeader>
        
        <CardContent className="space-y-6">
          {/* Input Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label htmlFor="investment" className="text-white/80">
                Investment Amount
              </Label>
              <div className="relative">
                <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-white/60" />
                <Input
                  id="investment"
                  type="number"
                  value={investmentAmount}
                  onChange={(e) => setInvestmentAmount(e.target.value)}
                  className="pl-10 glass border-white/20 text-white placeholder:text-white/50"
                  placeholder="1000"
                  min="1"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="period" className="text-white/80">
                Holding Period
              </Label>
              <Select value={holdingPeriod} onValueChange={setHoldingPeriod}>
                <SelectTrigger className="glass border-white/20 text-white">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="glass-strong border-white/20">
                  <SelectItem value="3">3 Months</SelectItem>
                  <SelectItem value="6">6 Months</SelectItem>
                  <SelectItem value="9">9 Months</SelectItem>
                  <SelectItem value="12">12 Months</SelectItem>
                  <SelectItem value="18">18 Months</SelectItem>
                  <SelectItem value="24">24 Months</SelectItem>
                  <SelectItem value="36">36 Months</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="scenario" className="text-white/80">
                Price Scenario
              </Label>
              <Select value={priceScenario} onValueChange={setPriceScenario}>
                <SelectTrigger className="glass border-white/20 text-white">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="glass-strong border-white/20">
                  {Object.entries(scenarios).map(([key, scenario]) => (
                    <SelectItem key={key} value={key}>
                      {scenario.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Quick Amount Buttons */}
          <div className="flex flex-wrap gap-2">
            <span className="text-white/60 text-sm self-center mr-2">Quick amounts:</span>
            {[100, 500, 1000, 2500, 5000, 10000].map((amount) => (
              <Button
                key={amount}
                variant="outline"
                size="sm"
                onClick={() => setInvestmentAmount(amount.toString())}
                className="border-white/30 text-white/70 hover:bg-cyan-400/20 hover:border-cyan-400/50 hover:text-cyan-400 text-xs"
              >
                ${amount}
              </Button>
            ))}
          </div>

          {/* Results Section */}
          {parseFloat(investmentAmount) > 0 && (
            <div className="space-y-4 pt-4 border-t border-white/20">
              <div className="flex items-center gap-2 mb-4">
                <BarChart3 className="w-5 h-5 text-cyan-400" />
                <h3 className="text-lg font-semibold text-white">
                  Projected Results
                </h3>
                <Badge className="bg-gradient-to-r from-cyan-400/20 to-lime-400/20 text-cyan-400 border-cyan-400/50">
                  {scenarios[priceScenario as keyof typeof scenarios].description}
                </Badge>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="glass rounded-lg p-4 text-center group hover:bg-white/5 transition-all duration-300">
                  <div className="text-sm text-white/60 mb-1">Tokens + Staking</div>
                  <div className="text-lg font-bold text-cyan-400 group-hover:scale-105 transition-transform">
                    {formatNumber(calculations.tokensReceived, 0)}
                  </div>
                  <div className="text-xs text-white/50 mt-1">DAGOS</div>
                </div>

                <div className="glass rounded-lg p-4 text-center group hover:bg-white/5 transition-all duration-300">
                  <div className="text-sm text-white/60 mb-1">Future Value</div>
                  <div className="text-lg font-bold text-lime-400 group-hover:scale-105 transition-transform">
                    {formatCurrency(calculations.futureValue)}
                  </div>
                  <div className="text-xs text-white/50 mt-1">USD</div>
                </div>

                <div className="glass rounded-lg p-4 text-center group hover:bg-white/5 transition-all duration-300">
                  <div className="text-sm text-white/60 mb-1">Total Profit</div>
                  <div className="text-lg font-bold text-lime-400 group-hover:scale-105 transition-transform">
                    {formatCurrency(calculations.profit)}
                  </div>
                  <div className="text-xs text-white/50 mt-1">USD</div>
                </div>

                <div className="glass rounded-lg p-4 text-center group hover:bg-white/5 transition-all duration-300">
                  <div className="text-sm text-white/60 mb-1">Total ROI</div>
                  <div className="text-lg font-bold text-gradient bg-gradient-to-r from-cyan-400 to-lime-400 bg-clip-text text-transparent group-hover:scale-105 transition-transform">
                    {formatNumber(calculations.roi, 1)}%
                  </div>
                  <div className="text-xs text-white/50 mt-1">Return</div>
                </div>
              </div>

              {/* Additional Metrics */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-white/10">
                <div className="flex items-center justify-between p-3 glass rounded-lg">
                  <span className="text-white/70">Monthly Return:</span>
                  <span className="text-cyan-400 font-medium">
                    {formatNumber(calculations.monthlyReturn, 2)}%
                  </span>
                </div>
                <div className="flex items-center justify-between p-3 glass rounded-lg">
                  <span className="text-white/70">Includes Staking APY:</span>
                  <span className="text-lime-400 font-medium">12%</span>
                </div>
              </div>

              {/* Disclaimer */}
              <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-3">
                <div className="flex items-start gap-2">
                  <Info className="w-4 h-4 text-yellow-400 mt-0.5 flex-shrink-0" />
                  <div className="text-xs text-yellow-200">
                    <strong>Disclaimer:</strong> These calculations are estimates based on assumptions and should not be considered as financial advice. 
                    Cryptocurrency investments carry significant risks, and actual returns may differ substantially from projections.
                  </div>
                </div>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </TooltipProvider>
  );
}