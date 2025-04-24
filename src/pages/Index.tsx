
import React, { useState } from 'react';
import Layout from '@/components/layout/Layout';
import CyclePhaseIndicator from '@/components/ui/CyclePhaseIndicator';
import MoodSelector from '@/components/ui/MoodSelector';
import WellnessCard from '@/components/ui/WellnessCard';
import { Calendar } from 'lucide-react';
import { Card } from '@/components/ui/card';

type Mood = 'happy' | 'calm' | 'tired' | 'stressed' | 'sad';

const Index = () => {
  const [selectedMood, setSelectedMood] = useState<Mood | null>(null);
  
  // Mock data - in a real app this would come from user data
  const currentDate = new Date();
  const cycleDay = 14;
  const cyclePhase = 'follicular';
  const nextPeriod = new Date(currentDate);
  nextPeriod.setDate(nextPeriod.getDate() + 14);
  
  const wellnessRecommendations = [
    {
      title: 'Follicular Phase Nutrition',
      description: 'Try incorporating leafy greens and fermented foods to support estrogen metabolism.',
      icon: '🥗',
      color: 'border-forestTeal',
    },
    {
      title: 'Gentle Movement',
      description: 'Your energy is rising! Try a light cardio workout or yoga flow today.',
      icon: '🧘‍♀️',
      color: 'border-blushRose',
    },
    {
      title: '3-Minute Meditation',
      description: 'Take a moment to breathe and center yourself with this quick practice.',
      icon: '🌿',
      color: 'border-softLavender',
    },
  ];

  return (
    <Layout>
      <div className="flex flex-col space-y-6">
        {/* Welcome header */}
        <div className="text-center mb-2">
          <h1 className="font-serif text-3xl mb-1">Welcome, Jane</h1>
          <p className="text-gray-600">Your cycle day: {cycleDay}</p>
        </div>
        
        {/* Cycle phase indicator */}
        <Card className="p-4">
          <div className="flex items-center justify-between mb-2">
            <h2 className="font-serif text-xl">Your Cycle</h2>
            <span className="bg-softLavender text-deepPlum px-3 py-1 rounded-full text-sm">
              Follicular Phase
            </span>
          </div>
          
          <CyclePhaseIndicator currentPhase={cyclePhase as 'menstrual' | 'follicular' | 'ovulation' | 'luteal'} />
          
          <div className="flex items-center justify-between text-sm mt-4">
            <div>
              <p className="text-gray-500">Next period in</p>
              <p className="font-medium flex items-center">
                <Calendar size={16} className="mr-1" />
                {Math.ceil((nextPeriod.getTime() - currentDate.getTime()) / (1000 * 60 * 60 * 24))} days
              </p>
            </div>
            <button className="hercycle-button text-sm py-2 px-4">
              Log Today
            </button>
          </div>
        </Card>
        
        {/* Mood tracker */}
        <Card className="p-4">
          <MoodSelector selectedMood={selectedMood} onSelectMood={setSelectedMood} />
        </Card>
        
        {/* Wellness recommendations */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-serif text-xl">For You Today</h2>
            <button className="text-sm text-forestTeal font-medium">View All</button>
          </div>
          
          <div className="space-y-3">
            {wellnessRecommendations.map((recommendation, index) => (
              <WellnessCard
                key={index}
                title={recommendation.title}
                description={recommendation.description}
                icon={recommendation.icon}
                color={recommendation.color}
              />
            ))}
          </div>
        </div>
        
        {/* Quick actions */}
        <div className="grid grid-cols-2 gap-3">
          <button className="hercycle-card bg-blushRose/20 flex flex-col items-center justify-center py-4">
            <span className="text-2xl mb-2">💬</span>
            <span className="font-medium">Ask Question</span>
          </button>
          <button className="hercycle-card bg-softLavender/30 flex flex-col items-center justify-center py-4">
            <span className="text-2xl mb-2">👭</span>
            <span className="font-medium">Join Community</span>
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
