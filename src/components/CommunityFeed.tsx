import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Avatar, AvatarFallback } from './ui/avatar';
import { 
  Twitter, 
  MessageCircle, 
  Send, 
  Heart, 
  MessageSquare, 
  Share, 
  ExternalLink,
  Users,
  TrendingUp,
  Calendar
} from 'lucide-react';

interface CommunityPost {
  id: string;
  platform: 'twitter' | 'discord' | 'telegram';
  author: string;
  content: string;
  timestamp: string;
  likes: number;
  replies: number;
  url?: string;
}

interface CommunityStats {
  twitter: number;
  discord: number;
  telegram: number;
  totalMembers: number;
}

export function CommunityFeed() {
  const [posts, setPosts] = useState<CommunityPost[]>([]);
  const [stats, setStats] = useState<CommunityStats>({
    twitter: 12453,
    discord: 8921,
    telegram: 15234,
    totalMembers: 36608
  });
  const [activeTab, setActiveTab] = useState<'all' | 'twitter' | 'discord' | 'telegram'>('all');

  // Mock community posts
  useEffect(() => {
    const mockPosts: CommunityPost[] = [
      {
        id: '1',
        platform: 'twitter',
        author: 'DAGOSOfficial',
        content: '🚀 DAGOS presale milestone achieved! Over $1.3M raised with strong community support. The future of #DeFi is here! #DAGOS #Blockchain',
        timestamp: '2h ago',
        likes: 247,
        replies: 89,
        url: 'https://twitter.com/dagosofficial/status/123'
      },
      {
        id: '2',
        platform: 'discord',
        author: 'CryptoEnthusiast_42',
        content: 'Just participated in the DAGOS presale! The DAG technology looks promising for scalability. Excited to be part of this project! 💎',
        timestamp: '4h ago',
        likes: 56,
        replies: 23
      },
      {
        id: '3',
        platform: 'telegram',
        author: 'DeFiTrader_Pro',
        content: 'The DAGOS referral program is genius! 5% commission with no limits. Already shared with my network. This is how you build a community! 🔥',
        timestamp: '6h ago',
        likes: 134,
        replies: 67
      },
      {
        id: '4',
        platform: 'twitter',
        author: 'BlockchainNews',
        content: 'DAGOS implements revolutionary DAG Network technology for 100,000+ TPS. Could this be the blockchain killer we\'ve been waiting for? 🤔',
        timestamp: '8h ago',
        likes: 189,
        replies: 145,
        url: 'https://twitter.com/blockchainnews/status/124'
      },
      {
        id: '5',
        platform: 'discord',
        author: 'TechAnalyst_Sarah',
        content: 'Reviewed the DAGOS whitepaper - impressed by the technical approach to scalability and security. The audit results look solid too. DYOR but this looks promising! 📊',
        timestamp: '12h ago',
        likes: 78,
        replies: 34
      }
    ];

    setPosts(mockPosts);
  }, []);

  const getPlatformIcon = (platform: string) => {
    switch (platform) {
      case 'twitter': return <Twitter className="w-4 h-4" />;
      case 'discord': return <MessageCircle className="w-4 h-4" />;
      case 'telegram': return <Send className="w-4 h-4" />;
      default: return <MessageSquare className="w-4 h-4" />;
    }
  };

  const getPlatformColor = (platform: string) => {
    switch (platform) {
      case 'twitter': return 'text-blue-400 border-blue-400/50';
      case 'discord': return 'text-indigo-400 border-indigo-400/50';
      case 'telegram': return 'text-cyan-400 border-cyan-400/50';
      default: return 'text-white/70 border-white/30';
    }
  };

  const filteredPosts = activeTab === 'all' ? posts : posts.filter(post => post.platform === activeTab);

  return (
    <div className="space-y-6">
      {/* Community Stats */}
      <Card className="glass-strong border-white/10">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-white">
            <Users className="w-5 h-5 text-cyan-400" />
            Community Growth
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="text-center space-y-1">
              <div className="text-2xl font-bold text-cyan-400">{stats.totalMembers.toLocaleString()}</div>
              <div className="text-sm text-white/70">Total Members</div>
            </div>
            <div className="text-center space-y-1">
              <div className="text-2xl font-bold text-blue-400">{stats.twitter.toLocaleString()}</div>
              <div className="text-sm text-white/70">Twitter</div>
            </div>
            <div className="text-center space-y-1">
              <div className="text-2xl font-bold text-indigo-400">{stats.discord.toLocaleString()}</div>
              <div className="text-sm text-white/70">Discord</div>
            </div>
            <div className="text-center space-y-1">
              <div className="text-2xl font-bold text-cyan-400">{stats.telegram.toLocaleString()}</div>
              <div className="text-sm text-white/70">Telegram</div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="glass-strong border-white/10">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-white">
            <TrendingUp className="w-5 h-5 text-lime-400" />
            Community Feed
          </CardTitle>
          
          {/* Filter Tabs */}
          <div className="flex gap-2 mt-4">
            {(['all', 'twitter', 'discord', 'telegram'] as const).map((tab) => (
              <Button
                key={tab}
                variant={activeTab === tab ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveTab(tab)}
                className={
                  activeTab === tab
                    ? "bg-gradient-to-r from-cyan-400 to-lime-400 text-navy-900"
                    : "border-white/30 text-white/70 hover:text-white hover:border-white/50"
                }
              >
                {tab === 'all' ? (
                  <>
                    <MessageSquare className="w-4 h-4 mr-1" />
                    All
                  </>
                ) : (
                  <>
                    {getPlatformIcon(tab)}
                    <span className="ml-1 capitalize">{tab}</span>
                  </>
                )}
              </Button>
            ))}
          </div>
        </CardHeader>
        
        <CardContent className="space-y-4">
          {filteredPosts.map((post) => (
            <div key={post.id} className="glass p-4 rounded-lg border border-white/5">
              <div className="flex items-start gap-3">
                <Avatar className="w-10 h-10">
                  <AvatarFallback className="bg-gradient-to-br from-cyan-400 to-lime-400 text-navy-900 text-sm font-semibold">
                    {post.author.charAt(0).toUpperCase()}
                  </AvatarFallback>
                </Avatar>
                
                <div className="flex-1 space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="font-medium text-white">{post.author}</span>
                    <Badge variant="outline" className={`text-xs ${getPlatformColor(post.platform)}`}>
                      {getPlatformIcon(post.platform)}
                      <span className="ml-1 capitalize">{post.platform}</span>
                    </Badge>
                    <div className="flex items-center gap-1 text-xs text-white/50">
                      <Calendar className="w-3 h-3" />
                      {post.timestamp}
                    </div>
                  </div>
                  
                  <p className="text-white/80 text-sm leading-relaxed">{post.content}</p>
                  
                  <div className="flex items-center gap-4 text-sm text-white/60">
                    <div className="flex items-center gap-1">
                      <Heart className="w-4 h-4" />
                      {post.likes}
                    </div>
                    <div className="flex items-center gap-1">
                      <MessageSquare className="w-4 h-4" />
                      {post.replies}
                    </div>
                    {post.url && (
                      <a
                        href={post.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-cyan-400 hover:text-cyan-300 transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                        View Original
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
          
          <div className="text-center pt-4">
            <Button variant="outline" className="border-white/30 text-white/70 hover:text-white hover:border-white/50">
              <ExternalLink className="w-4 h-4 mr-2" />
              View All Community Posts
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Community Links */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="glass-strong border-white/10 hover:border-blue-400/30 transition-colors cursor-pointer">
          <CardContent className="p-6 text-center space-y-3">
            <Twitter className="w-8 h-8 text-blue-400 mx-auto" />
            <div>
              <h3 className="font-semibold text-white">Follow on Twitter</h3>
              <p className="text-sm text-white/70">Latest news and updates</p>
            </div>
            <Button variant="outline" size="sm" className="border-blue-400/50 text-blue-400 hover:bg-blue-400/10">
              Follow @DAGOSOfficial
            </Button>
          </CardContent>
        </Card>

        <Card className="glass-strong border-white/10 hover:border-indigo-400/30 transition-colors cursor-pointer">
          <CardContent className="p-6 text-center space-y-3">
            <MessageCircle className="w-8 h-8 text-indigo-400 mx-auto" />
            <div>
              <h3 className="font-semibold text-white">Join Discord</h3>
              <p className="text-sm text-white/70">Community discussions</p>
            </div>
            <Button variant="outline" size="sm" className="border-indigo-400/50 text-indigo-400 hover:bg-indigo-400/10">
              Join Server
            </Button>
          </CardContent>
        </Card>

        <Card className="glass-strong border-white/10 hover:border-cyan-400/30 transition-colors cursor-pointer">
          <CardContent className="p-6 text-center space-y-3">
            <Send className="w-8 h-8 text-cyan-400 mx-auto" />
            <div>
              <h3 className="font-semibold text-white">Telegram Group</h3>
              <p className="text-sm text-white/70">Real-time chat</p>
            </div>
            <Button variant="outline" size="sm" className="border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/10">
              Join Group
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}