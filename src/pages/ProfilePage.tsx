
import React from 'react';
import Layout from '@/components/layout/Layout';
import CommunityCircle from '@/components/ui/CommunityCircle';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card } from '@/components/ui/card';
import { Settings, Heart, Info, Calendar, Bell } from 'lucide-react';

const ProfilePage = () => {
  const communitySuggestions = [
    {
      name: "PCOS Warriors",
      memberCount: 8542,
      description: "Support and tips for managing PCOS symptoms naturally.",
      icon: "✨"
    },
    {
      name: "Mindful Cycles",
      memberCount: 12423,
      description: "A space for cycle awareness and mindfulness practices.",
      icon: "🧠"
    },
    {
      name: "Fertility Journey",
      memberCount: 6287,
      description: "Support for those trying to conceive or navigating fertility.",
      icon: "🌱"
    }
  ];
  
  return (
    <Layout>
      <div className="flex flex-col space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="font-serif text-2xl">Profile</h1>
          <button className="p-2 rounded-full hover:bg-gray-100">
            <Settings size={20} className="text-deepPlum" />
          </button>
        </div>
        
        <Card className="p-6 text-center">
          <div className="flex flex-col items-center">
            <Avatar className="h-20 w-20">
              <AvatarImage src="" />
              <AvatarFallback className="bg-blushRose text-deepPlum text-xl">JD</AvatarFallback>
            </Avatar>
            <h2 className="font-serif text-xl mt-3">Jane Doe</h2>
            <p className="text-gray-500 text-sm">Member since April 2023</p>
            
            <div className="flex w-full justify-around mt-6 text-sm text-gray-600">
              <div className="text-center">
                <p className="font-bold text-deepPlum">28</p>
                <p>Avg Cycle</p>
              </div>
              <div className="text-center">
                <p className="font-bold text-deepPlum">5</p>
                <p>Period Days</p>
              </div>
              <div className="text-center">
                <p className="font-bold text-deepPlum">122</p>
                <p>Insights</p>
              </div>
            </div>
          </div>
        </Card>

        <div className="grid grid-cols-1 gap-3">
          <button className="hercycle-card flex items-center">
            <div className="w-10 h-10 rounded-full bg-softLavender flex items-center justify-center mr-3">
              <Calendar size={18} className="text-deepPlum" />
            </div>
            <span>Cycle History</span>
          </button>
          
          <button className="hercycle-card flex items-center">
            <div className="w-10 h-10 rounded-full bg-blushRose flex items-center justify-center mr-3">
              <Heart size={18} className="text-deepPlum" />
            </div>
            <span>Health Insights</span>
          </button>
          
          <button className="hercycle-card flex items-center">
            <div className="w-10 h-10 rounded-full bg-forestTeal/20 flex items-center justify-center mr-3">
              <Bell size={18} className="text-deepPlum" />
            </div>
            <span>Notifications</span>
          </button>
          
          <button className="hercycle-card flex items-center">
            <div className="w-10 h-10 rounded-full bg-deepPlum/10 flex items-center justify-center mr-3">
              <Info size={18} className="text-deepPlum" />
            </div>
            <span>Help & Resources</span>
          </button>
        </div>
        
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-serif text-xl">Community Circles</h2>
            <button className="text-sm text-forestTeal font-medium">View All</button>
          </div>
          
          <div className="space-y-3">
            {communitySuggestions.map((community, index) => (
              <CommunityCircle
                key={index}
                name={community.name}
                memberCount={community.memberCount}
                description={community.description}
                icon={community.icon}
              />
            ))}
          </div>
        </div>
        
        <button className="hercycle-button bg-forestTeal text-white mx-auto">
          Invite a Friend
        </button>
      </div>
    </Layout>
  );
};

export default ProfilePage;
