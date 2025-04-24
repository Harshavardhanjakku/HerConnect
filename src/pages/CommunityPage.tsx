
import React from 'react';
import Layout from '@/components/layout/Layout';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Users } from 'lucide-react';
import CommunityCircle from '@/components/ui/CommunityCircle';
import AnonymousQA from '@/components/ui/AnonymousQA';

const CommunityPage = () => {
  const topCommunities = [
    {
      name: "PCOS Warriors",
      memberCount: 8542,
      description: "Support and tips for managing PCOS symptoms naturally.",
      icon: "✨"
    },
    {
      name: "First Period Journey",
      memberCount: 3241,
      description: "Safe space for those navigating their first periods with guidance and support.",
      icon: "🌱"
    },
    {
      name: "Trying to Conceive",
      memberCount: 6729,
      description: "Community for those on the fertility journey, sharing experiences and hope.",
      icon: "🌈"
    },
    {
      name: "Endometriosis Support",
      memberCount: 4835,
      description: "Resources, treatment discussions, and emotional support for endo warriors.",
      icon: "💫"
    }
  ];
  
  const recentDiscussions = [
    {
      title: "Anyone tried seed cycling for hormone balance?",
      replies: 23,
      likes: 47,
      time: "2h ago"
    },
    {
      title: "Best exercises during luteal phase?",
      replies: 18,
      likes: 34,
      time: "5h ago"
    },
    {
      title: "Coping with PMDD - what's working for you?",
      replies: 56,
      likes: 92,
      time: "1d ago"
    }
  ];
  
  return (
    <Layout>
      <div className="flex flex-col space-y-6">
        <h1 className="font-serif text-2xl">Community</h1>
        
        <Card className="p-4">
          <div className="bg-gradient-to-r from-deepPlum to-forestTeal p-4 rounded-lg text-center text-white mb-4">
            <h2 className="font-serif text-xl mb-1">Community Circles</h2>
            <p className="text-sm text-white/90">Safe spaces to share, support, and heal together</p>
          </div>
          
          <div className="relative mb-4">
            <Input placeholder="Search communities..." className="pr-10" />
            <Button className="absolute right-1 top-1 h-8 w-8 p-0">🔍</Button>
          </div>
          
          <div className="space-y-1 mb-4">
            {topCommunities.map((community, index) => (
              <CommunityCircle
                key={index}
                name={community.name}
                memberCount={community.memberCount}
                description={community.description}
                icon={community.icon}
              />
            ))}
          </div>
          
          <Button className="w-full flex items-center justify-center gap-2 bg-forestTeal hover:bg-forestTeal/90">
            <Users size={18} />
            Discover More Circles
          </Button>
        </Card>
        
        <Card className="p-4">
          <h2 className="font-serif text-xl mb-4">Recent Discussions</h2>
          <div className="space-y-3">
            {recentDiscussions.map((discussion, index) => (
              <div key={index} className="p-3 bg-gray-50 rounded-lg hover:bg-gray-100 cursor-pointer">
                <h3 className="font-medium text-deepPlum">{discussion.title}</h3>
                <div className="flex text-xs text-gray-500 mt-2">
                  <span className="mr-4">💬 {discussion.replies} replies</span>
                  <span className="mr-4">❤️ {discussion.likes} likes</span>
                  <span>{discussion.time}</span>
                </div>
              </div>
            ))}
          </div>
        </Card>
        
        <AnonymousQA />
      </div>
    </Layout>
  );
};

export default CommunityPage;
