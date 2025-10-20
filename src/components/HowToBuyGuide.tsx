import React from 'react';
import { Wallet, CreditCard, Coins, CheckCircle, ArrowRight } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger } from './ui/dialog';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';

interface HowToBuyGuideProps {
  trigger?: React.ReactNode;
}

export function HowToBuyGuide({ trigger }: HowToBuyGuideProps) {
  const steps = [
    {
      number: 1,
      title: 'Connect Your Wallet',
      description: 'Connect your MetaMask, Trust Wallet, or Phantom wallet to get started',
      icon: <Wallet className="w-6 h-6" />,
      details: [
        'Click the "Connect Wallet" button',
        'Select your preferred wallet provider',
        'Approve the connection in your wallet app',
        'Your wallet address will appear in the top right'
      ]
    },
    {
      number: 2,
      title: 'Choose Payment Method',
      description: 'Select ETH, USDT, or BNB to purchase DAGOS tokens',
      icon: <CreditCard className="w-6 h-6" />,
      details: [
        'ETH (Ethereum) - Most popular option',
        'USDT (Tether) - Stable cryptocurrency',
        'BNB (Binance Coin) - Lower fees',
        'Credit Card - Coming soon'
      ]
    },
    {
      number: 3,
      title: 'Enter Purchase Amount',
      description: 'Specify how much you want to invest and see tokens received',
      icon: <Coins className="w-6 h-6" />,
      details: [
        'Enter amount in USD or crypto',
        'View real-time token calculation',
        'Check current bonus percentage',
        'Review transaction details'
      ]
    },
    {
      number: 4,
      title: 'Complete Purchase',
      description: 'Confirm the transaction and receive your DAGOS tokens',
      icon: <CheckCircle className="w-6 h-6" />,
      details: [
        'Review final transaction details',
        'Approve transaction in your wallet',
        'Wait for blockchain confirmation',
        'Tokens will appear in your dashboard'
      ]
    }
  ];

  const paymentMethods = [
    { name: 'Ethereum (ETH)', fee: '~$15', time: '2-5 min', popular: true },
    { name: 'Tether (USDT)', fee: '~$12', time: '1-3 min', popular: false },
    { name: 'Binance Coin (BNB)', fee: '~$3', time: '30 sec', popular: false }
  ];

  return (
    <Dialog>
      <DialogTrigger asChild>
        {trigger || (
          <Button variant="outline" className="border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/10">
            How to Buy DAGOS
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto glass-strong border-white/20">
        <DialogHeader>
          <DialogTitle className="text-2xl text-white flex items-center gap-2">
            <Coins className="w-6 h-6 text-cyan-400" />
            How to Buy DAGOS Tokens
          </DialogTitle>
          <DialogDescription className="text-white/70">
            Follow these simple steps to participate in the DAGOS token presale and secure your tokens.
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-6">
          {/* Steps */}
          <div className="grid gap-4">
            {steps.map((step, index) => (
              <Card key={step.number} className="glass border-white/10">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-lime-400 rounded-full flex items-center justify-center text-navy-900 font-bold">
                        {step.number}
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="p-2 bg-white/10 rounded-lg text-cyan-400">
                          {step.icon}
                        </div>
                        <h3 className="text-xl font-semibold text-white">{step.title}</h3>
                      </div>
                      <p className="text-white/70 mb-4">{step.description}</p>
                      <ul className="space-y-2">
                        {step.details.map((detail, detailIndex) => (
                          <li key={detailIndex} className="flex items-center gap-2 text-sm text-white/80">
                            <ArrowRight className="w-5 h-4 text-lime-400" />
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Payment Methods */}
          <Card className="glass border-white/10">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold text-white mb-4">Supported Payment Methods</h3>
              <div className="grid gap-3">
                {paymentMethods.map((method, index) => (
                  <div key={index} className="flex items-center justify-between p-3 glass rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-lime-400 rounded-full"></div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-white font-medium">{method.name}</span>
                          {method.popular && (
                            <Badge className="bg-lime-500/20 text-lime-400 border-lime-500/30 text-xs">
                              Popular
                            </Badge>
                          )}
                        </div>
                        <div className="text-sm text-white/70">
                          Network fee: {method.fee} • Confirmation: {method.time}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Important Notes */}
          <Card className="glass border-yellow-500/30">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold text-yellow-400 mb-4">Important Notes</h3>
              <ul className="space-y-2 text-sm text-white/80">
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-4 h-4 text-yellow-400 mt-0.5 flex-shrink-0" />
                  Minimum purchase: $50 USD equivalent
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-4 h-4 text-yellow-400 mt-0.5 flex-shrink-0" />
                  Maximum purchase per wallet: $10,000 USD equivalent
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-4 h-4 text-yellow-400 mt-0.5 flex-shrink-0" />
                  Tokens are locked until presale ends (vesting schedule applies)
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-4 h-4 text-yellow-400 mt-0.5 flex-shrink-0" />
                  Early bird bonuses decrease as presale phases progress
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </DialogContent>
    </Dialog>
  );
}