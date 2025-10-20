import React from 'react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Linkedin, Twitter, Award, Building2, GraduationCap } from 'lucide-react';

export function TeamSection() {
  const coreTeam = [
    {
      name: 'Dr. Michael Chen',
      title: 'Founder & CEO',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop',
      education: 'PhD Computer Science, MIT',
      experience: '15+ years',
      previousOrgs: 'Ex-Google, Ex-Ethereum Foundation',
      achievements: 'Published 30+ research papers on distributed systems',
      bio: 'Pioneering blockchain architect with expertise in DAG technology and decentralized systems.',
      linkedin: '#',
      twitter: '#'
    },
    {
      name: 'Sarah Williams',
      title: 'Chief Technology Officer',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop',
      education: 'MS Engineering, Stanford',
      experience: '12+ years',
      previousOrgs: 'Ex-Microsoft, Ex-Coinbase',
      achievements: 'Led development of 5 successful blockchain protocols',
      bio: 'Expert in scalable infrastructure and high-performance distributed systems.',
      linkedin: '#',
      twitter: '#'
    },
    {
      name: 'Dr. James Rodriguez',
      title: 'Head of Research',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop',
      education: 'PhD Cryptography, Oxford',
      experience: '10+ years',
      previousOrgs: 'Ex-IBM Research, Ex-Chainlink',
      achievements: 'Developed quantum-resistant cryptographic algorithms',
      bio: 'Leading researcher in post-quantum cryptography and blockchain security.',
      linkedin: '#',
      twitter: '#'
    }
  ];

  const advisoryBoard = [
    {
      name: 'Prof. Emily Zhang',
      title: 'Strategic Advisor',
      expertise: 'Blockchain Economics & Tokenomics',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=200&fit=crop'
    },
    {
      name: 'Robert Johnson',
      title: 'Technology Advisor',
      expertise: 'Distributed Systems Architecture',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=200&h=200&fit=crop'
    },
    {
      name: 'Dr. Lisa Park',
      title: 'Legal Advisor',
      expertise: 'Crypto Regulation & Compliance',
      image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=200&h=200&fit=crop'
    },
    {
      name: 'Marcus Thompson',
      title: 'Marketing Advisor',
      expertise: 'Web3 Growth & Community Building',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop'
    }
  ];

  return (
    <section className="py-20">
      {/* Section Header */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Meet the{' '}
          <span className="text-gradient">Visionaries</span>
        </h2>
        <p className="text-xl text-white/70 max-w-3xl mx-auto">
          World-class team of blockchain pioneers, engineers, and industry leaders
        </p>
      </div>

      {/* Core Team */}
      <div className="mb-20">
        <h3 className="text-2xl font-bold text-cyan-400 mb-8 text-center">Core Team</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {coreTeam.map((member, index) => (
            <Card
              key={index}
              className="glass-strong border-white/10 hover:glow-cyan transition-all duration-300 group"
            >
              <CardContent className="p-6">
                {/* Profile Image */}
                <div className="relative mb-6">
                  <div className="w-32 h-32 mx-auto rounded-full overflow-hidden ring-4 ring-cyan-400/30 group-hover:ring-cyan-400/60 transition-all duration-300">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* Gradient glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 to-violet-400/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Name & Title */}
                <div className="text-center mb-4">
                  <h4 className="text-xl font-bold text-white mb-1">{member.name}</h4>
                  <p className="text-cyan-400 mb-3">{member.title}</p>
                  
                  {/* Social Links */}
                  <div className="flex justify-center gap-2">
                    <a
                      href={member.linkedin}
                      className="p-2 rounded-lg bg-white/5 hover:bg-cyan-500/20 border border-white/10 hover:border-cyan-400/50 transition-all duration-300"
                    >
                      <Linkedin className="w-4 h-4 text-white/70 hover:text-cyan-400" />
                    </a>
                    <a
                      href={member.twitter}
                      className="p-2 rounded-lg bg-white/5 hover:bg-cyan-500/20 border border-white/10 hover:border-cyan-400/50 transition-all duration-300"
                    >
                      <Twitter className="w-4 h-4 text-white/70 hover:text-cyan-400" />
                    </a>
                  </div>
                </div>

                {/* Education & Experience */}
                <div className="space-y-3 mb-4">
                  <div className="flex items-start gap-2 text-sm text-white/70">
                    <GraduationCap className="w-4 h-4 text-lime-400 flex-shrink-0 mt-0.5" />
                    <span>{member.education}</span>
                  </div>
                  <div className="flex items-start gap-2 text-sm text-white/70">
                    <Award className="w-4 h-4 text-violet-400 flex-shrink-0 mt-0.5" />
                    <span>{member.experience} in blockchain & distributed systems</span>
                  </div>
                  <div className="flex items-start gap-2 text-sm text-white/70">
                    <Building2 className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                    <span>{member.previousOrgs}</span>
                  </div>
                </div>

                {/* Bio */}
                <p className="text-sm text-white/60 mb-3 leading-relaxed">
                  {member.bio}
                </p>

                {/* Achievements Badge */}
                <Badge className="w-full justify-center bg-gradient-to-r from-cyan-500/20 to-violet-500/20 text-cyan-400 border-cyan-500/30 text-xs py-2">
                  {member.achievements}
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Advisory Board */}
      <div>
        <h3 className="text-2xl font-bold text-violet-400 mb-8 text-center">Advisory Board</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {advisoryBoard.map((advisor, index) => (
            <Card
              key={index}
              className="glass-strong border-white/10 hover:glow-violet transition-all duration-300 group"
            >
              <CardContent className="p-6 text-center">
                {/* Profile Image */}
                <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden ring-4 ring-violet-400/30 group-hover:ring-violet-400/60 transition-all duration-300">
                  <img
                    src={advisor.image}
                    alt={advisor.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Name & Title */}
                <h4 className="text-lg font-bold text-white mb-1">{advisor.name}</h4>
                <p className="text-violet-400 text-sm mb-3">{advisor.title}</p>

                {/* Expertise */}
                <p className="text-xs text-white/60 leading-relaxed">
                  {advisor.expertise}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
