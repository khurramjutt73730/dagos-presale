import React from "react";
import {
  Card,
  CardContent,
} from "../ui/card";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { SocialProofCommunityEngagement } from "../SocialProofCommunityEngagement";
import { VerifiedInvestorStories } from "../VerifiedInvestorStories";
import { PressCoverage } from "../PressCoverage";
import { UpcomingAMAs } from "../UpcomingAMAs";
import { SocialBuzz } from "../SocialBuzz";
import {
  MessageCircle,
  Twitter,
  Send,
  Users,
  Globe,
  Star,
  ExternalLink,
  Hash,
  Play,
} from "lucide-react";

export function CommunityPage() {
  const socialChannels = [
    {
      name: "Discord",
      icon: <MessageCircle className="w-6 h-6" />,
      members: "15.2K",
      description:
        "Join our vibrant community for real-time discussions and support",
      link: "#",
      color: "from-indigo-500 to-purple-600",
    },
    {
      name: "Telegram",
      icon: <Send className="w-6 h-6" />,
      members: "28.5K",
      description:
        "Get instant updates and connect with fellow DAGOS enthusiasts",
      link: "#",
      color: "from-blue-500 to-cyan-500",
    },
    {
      name: "Twitter/X",
      icon: <Twitter className="w-6 h-6" />,
      members: "42.1K",
      description:
        "Follow us for the latest news, updates, and community highlights",
      link: "#",
      color: "from-gray-700 to-black",
    },
    {
      name: "Medium",
      icon: <Hash className="w-6 h-6" />,
      members: "8.9K",
      description:
        "In-depth articles about our technology and industry insights",
      link: "#",
      color: "from-green-600 to-teal-600",
    },
    {
      name: "YouTube",
      icon: <Play className="w-6 h-6" />,
      members: "12.3K",
      description:
        "Educational content, AMAs, and behind-the-scenes videos",
      link: "#",
      color: "from-red-600 to-red-700",
    },
    {
      name: "Reddit",
      icon: <Globe className="w-6 h-6" />,
      members: "6.7K",
      description:
        "Community-driven discussions and ecosystem updates",
      link: "#",
      color: "from-orange-500 to-red-500",
    },
  ];

  const communityStats = [
    {
      label: "Community Members",
      value: "125K+",
      icon: <Users className="w-6 h-6" />,
    },
    {
      label: "Countries Worldwide",
      value: "89",
      icon: <Globe className="w-6 h-6" />,
    },
    {
      label: "Daily Active Users",
      value: "2.4K",
      icon: <MessageCircle className="w-6 h-6" />,
    },
    {
      label: "Community Rating",
      value: "4.9/5",
      icon: <Star className="w-6 h-6" />,
    },
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-gradient-to-r from-cyan-400 to-lime-400 text-navy-900">
            Join Our Community
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Connect with the
            <span className="block gradient-cyber bg-clip-text text-transparent">
              DAGOS Ecosystem
            </span>
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Join thousands of developers, investors, and
            blockchain enthusiasts building the future of
            decentralized finance together.
          </p>
        </div>

        {/* Community Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {communityStats.map((stat, index) => (
            <Card
              key={index}
              className="glass-strong border-white/10 hover:border-cyan-400/50 transition-all duration-300 text-center group"
            >
              <CardContent className="p-6">
                <div className="flex items-center justify-center mb-3 text-cyan-400 group-hover:scale-110 transition-transform">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-gradient mb-2">
                  {stat.value}
                </div>
                <div className="text-white/70 text-sm">
                  {stat.label}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Social Channels */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Connect Across{' '}
              <span className="text-gradient">Platforms</span>
            </h2>
            <p className="text-white/80 text-lg">
              Choose your preferred platform to stay connected
              with our community
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {socialChannels.map((channel, index) => (
              <Card
                key={index}
                className="glass-strong border-white/10 hover:glow-cyan transition-all duration-300 group"
              >
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div
                      className={`p-3 rounded-lg bg-gradient-to-r ${channel.color}`}
                    >
                      {channel.icon}
                    </div>
                    <Badge className="bg-lime-500/20 text-lime-400 border-lime-400/50">
                      {channel.members}
                    </Badge>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    {channel.name}
                  </h3>
                  <p className="text-white/70 text-sm mb-4">
                    {channel.description}
                  </p>
                  <Button
                    className="w-full bg-white/10 hover:bg-white/20 text-white border border-white/20 group-hover:border-cyan-400/50 transition-all duration-200"
                    onClick={() =>
                      window.open(channel.link, "_blank")
                    }
                  >
                    Join Community
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Social Proof & Community Engagement */}
      
        {/* Verified Investor Stories */}
        <VerifiedInvestorStories />

        {/* Press Coverage */}
        <PressCoverage />

        {/* Upcoming AMAs */}
        <UpcomingAMAs />

        {/* Social Buzz */}
        <SocialBuzz />
      </div>
    </div>
  );
}