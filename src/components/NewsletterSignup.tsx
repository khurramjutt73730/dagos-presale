import React, { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Card, CardContent } from './ui/card';
import { toast } from 'sonner@2.0.3';
import { Mail, CheckCircle, AlertCircle } from 'lucide-react';

interface NewsletterSignupProps {
  variant?: 'default' | 'inline' | 'compact';
  className?: string;
  isDarkMode?: boolean;
}

export function NewsletterSignup({ variant = 'default', className = '', isDarkMode = true }: NewsletterSignupProps) {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email.trim()) {
      toast.error('Please enter your email address');
      return;
    }

    if (!validateEmail(email)) {
      toast.error('Please enter a valid email address');
      return;
    }

    setIsLoading(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // In a real app, this would make an API call to your newsletter service
      // await fetch('/api/newsletter/subscribe', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ email })
      // });

      setIsSubscribed(true);
      toast.success('Successfully subscribed to our newsletter!');
      setEmail('');
    } catch (error) {
      toast.error('Failed to subscribe. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  if (variant === 'compact') {
    return (
      <div className={`flex gap-2 ${className}`}>
        <div className="flex-1">
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email"
            className="bg-white/5 border-white/20 text-white placeholder-white/50"
            disabled={isLoading || isSubscribed}
          />
        </div>
        <Button
          onClick={handleSubmit}
          disabled={isLoading || isSubscribed}
          className="bg-gradient-to-r from-cyan-400 to-lime-400 text-navy-900 hover:from-cyan-300 hover:to-lime-300"
        >
          {isLoading ? '...' : isSubscribed ? <CheckCircle className="w-4 h-4" /> : 'Subscribe'}
        </Button>
      </div>
    );
  }

  if (variant === 'inline') {
    return (
      <form onSubmit={handleSubmit} className={`flex gap-2 ${className}`}>
        <div className="flex-1 md:flex-none">
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
            className="w-full md:w-64 bg-white/5 border-white/20 text-white placeholder-white/50 focus:border-cyan-400"
            disabled={isLoading || isSubscribed}
          />
        </div>
        <Button
          type="submit"
          disabled={isLoading || isSubscribed}
          className="bg-gradient-to-r from-cyan-400 to-lime-400 text-navy-900 hover:from-cyan-300 hover:to-lime-300"
        >
          {isLoading ? (
            'Subscribing...'
          ) : isSubscribed ? (
            <>
              <CheckCircle className="w-4 h-4 mr-2" />
              Subscribed
            </>
          ) : (
            <>
              <Mail className="w-4 h-4 mr-2" />
              Subscribe
            </>
          )}
        </Button>
      </form>
    );
  }

  return (
    <Card className={`glass-strong border-white/10 ${className}`}>
      <CardContent className="p-6">
        <div className="text-center space-y-4">
          <div className="mx-auto w-12 h-12 bg-gradient-to-br from-cyan-400 to-lime-400 rounded-lg flex items-center justify-center text-navy-900">
            <Mail className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-white mb-2">Stay in the Loop</h3>
            <p className="text-white/70 text-sm">
              Get exclusive updates, early access to features, and important announcements
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-3">
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your.email@example.com"
              className="bg-white/5 border-white/20 text-white placeholder-white/50 focus:border-cyan-400"
              disabled={isLoading || isSubscribed}
            />
            
            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-cyan-400 to-lime-400 text-navy-900 hover:from-cyan-300 hover:to-lime-300"
              disabled={isLoading || isSubscribed}
            >
              {isLoading ? (
                'Subscribing...'
              ) : isSubscribed ? (
                <>
                  <CheckCircle className="w-4 h-4 mr-2" />
                  Successfully Subscribed!
                </>
              ) : (
                <>
                  <Mail className="w-4 h-4 mr-2" />
                  Subscribe to Newsletter
                </>
              )}
            </Button>
          </form>

          {isSubscribed && (
            <div className="flex items-center justify-center gap-2 text-lime-400 text-sm">
              <CheckCircle className="w-4 h-4" />
              Welcome to the DAGOS community!
            </div>
          )}

          <p className="text-xs text-white/50">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </CardContent>
    </Card>
  );
}