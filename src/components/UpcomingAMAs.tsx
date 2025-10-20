import React from 'react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { MessageCircle, Bell, MessageSquare, Calendar, Users } from 'lucide-react';
import { motion } from 'framer-motion';

export function UpcomingAMAs() {
  const amas = [
    {
      title: 'Team AMA',
      subtitle: 'Monthly Community Q&A',
      date: 'October 15, 2024',
      time: '3:00 PM UTC',
      gradient: 'from-cyan-500 to-teal-500',
      icon: <MessageCircle className="w-8 h-8" />,
      speakers: [
        {
          name: 'Dr. Michael Chen',
          role: 'CEO & Founder',
          avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop'
        },
        {
          name: 'Sarah Williams',
          role: 'CTO',
          avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop'
        },
        {
          name: 'James Rodriguez',
          role: 'Head of Research',
          avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop'
        }
      ],
      topics: [
        'Q4 Roadmap updates and milestones',
        'New partnership announcements',
        'Community questions and feedback',
        'Technical development progress'
      ]
    },
    {
      title: 'Community AMA',
      subtitle: 'Special Guest: Crypto Influencer Panel',
      date: 'October 20, 2024',
      time: '5:00 PM UTC',
      gradient: 'from-purple-500 to-pink-500',
      icon: <Users className="w-8 h-8" />,
      speakers: [
        {
          name: 'Alex "CryptoKing"',
          role: 'Crypto Analyst',
          avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop'
        },
        {
          name: 'Emily Chen',
          role: 'Community Manager',
          avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop'
        },
        {
          name: 'David Park',
          role: 'Ambassador Lead',
          avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=80&h=80&fit=crop'
        }
      ],
      topics: [
        'Market analysis and DAGOS positioning',
        'Ambassador program expansion',
        'Community challenges and rewards',
        'Social media growth strategies'
      ]
    }
  ];

  return (
    <section className="py-20 relative">
      {/* Section Header */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Upcoming{' '}
          <span className="text-gradient">AMAs</span>
        </h2>
        <p className="text-xl text-white/80 max-w-3xl mx-auto">
          Join our Ask Me Anything sessions with the DAGOS team and special guests
        </p>
      </div>

      {/* AMAs Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {amas.map((ama, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
          >
            <Card className="glass-strong border-white/10 hover:border-cyan-400/50 transition-all duration-300 group h-full">
              <CardContent className="p-8">
                {/* Header */}
                <div className="flex items-start gap-4 mb-6">
                  <div className={`p-4 rounded-2xl bg-gradient-to-br ${ama.gradient} flex-shrink-0 group-hover:scale-110 transition-transform`}>
                    <div className="text-white">
                      {ama.icon}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-1">
                      {ama.title}
                    </h3>
                    <p className="text-cyan-400 text-sm mb-3">
                      {ama.subtitle}
                    </p>
                    <div className="flex flex-wrap gap-3">
                      <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/30">
                        <Calendar className="w-3 h-3 mr-1" />
                        {ama.date}
                      </Badge>
                      <Badge className="bg-purple-500/20 text-purple-400 border-purple-500/30">
                        {ama.time}
                      </Badge>
                    </div>
                  </div>
                </div>

                {/* Speakers */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-white/70 uppercase tracking-wider mb-4">
                    Speakers
                  </h4>
                  <div className="space-y-3">
                    {ama.speakers.map((speaker, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <img
                          src={speaker.avatar}
                          alt={speaker.name}
                          className="w-10 h-10 rounded-full ring-2 ring-cyan-400/30"
                        />
                        <div>
                          <div className="text-white font-medium">{speaker.name}</div>
                          <div className="text-xs text-white/60">{speaker.role}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Topics */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-white/70 uppercase tracking-wider mb-3">
                    Topics to be Covered
                  </h4>
                  <ul className="space-y-2">
                    {ama.topics.map((topic, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-white/80">
                        <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5 flex-shrink-0" />
                        <span>{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Buttons */}
                <div className="grid grid-cols-2 gap-3">
                  <Button className={`bg-gradient-to-r ${ama.gradient} hover:opacity-90 text-white`}>
                    <Bell className="w-4 h-4 mr-2" />
                    Set Reminder
                  </Button>
                  <Button variant="outline" className="border-white/20 text-white hover:bg-white/10">
                    <MessageSquare className="w-4 h-4 mr-2" />
                    Submit Question
                  </Button>
                </div>

                {/* Gradient Glow on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${ama.gradient} opacity-0 group-hover:opacity-5 rounded-lg transition-opacity duration-300 pointer-events-none`} />
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Bottom Info */}
      <div className="mt-12 text-center">
        <p className="text-white/60 mb-4">
          Can't make it live? All AMAs are recorded and available on our YouTube channel
        </p>
        <Button variant="outline" className="border-white/30 text-white hover:bg-white/10">
          View Past AMAs
        </Button>
      </div>
    </section>
  );
}
