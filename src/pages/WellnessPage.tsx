
import React, { useState } from 'react';
import Layout from '@/components/layout/Layout';
import WellnessCard from '@/components/ui/WellnessCard';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import SymptomNavigator from '@/components/ui/SymptomNavigator';
import VirtualWellnessRoom from '@/components/ui/VirtualWellnessRoom';

const WellnessPage = () => {
  const [activeTab, setActiveTab] = useState('mindfulness');
  
  const wellnessCategories = [
    {
      id: 'mindfulness',
      items: [
        {
          title: '3-Minute Breathing Space',
          description: 'A quick meditation to center yourself during a busy day.',
          icon: '🧘‍♀️',
          color: 'border-softLavender'
        },
        {
          title: 'Body Scan Practice',
          description: 'Release tension with this guided relaxation technique.',
          icon: '✨',
          color: 'border-blushRose'
        },
        {
          title: 'Affirmations',
          description: 'Positive statements to boost your confidence and mood.',
          icon: '💫',
          color: 'border-forestTeal'
        }
      ]
    },
    {
      id: 'nutrition',
      items: [
        {
          title: 'Follicular Phase Foods',
          description: 'Foods that support estrogen production and energy.',
          icon: '🥗',
          color: 'border-blushRose'
        },
        {
          title: 'Magnesium-Rich Recipe',
          description: 'Help reduce cramps with this delicious smoothie.',
          icon: '🥤',
          color: 'border-forestTeal'
        },
        {
          title: 'Iron Boosters',
          description: 'Foods to prevent fatigue during your period.',
          icon: '🍲',
          color: 'border-softLavender'
        }
      ]
    },
    {
      id: 'movement',
      items: [
        {
          title: 'Low-Impact Cardio',
          description: '15-minute workout that\'s gentle on your joints.',
          icon: '🚶‍♀️',
          color: 'border-forestTeal'
        },
        {
          title: 'Yoga for Cramps',
          description: '10-minute sequence to ease menstrual discomfort.',
          icon: '🧘‍♀️',
          color: 'border-blushRose'
        },
        {
          title: 'Energizing Stretch',
          description: '5-minute morning routine to wake up your body.',
          icon: '💪',
          color: 'border-softLavender'
        }
      ]
    }
  ];
  
  const activeCategory = wellnessCategories.find(category => category.id === activeTab) || wellnessCategories[0];
  
  return (
    <Layout>
      <div className="flex flex-col space-y-6">
        <h1 className="font-serif text-2xl">Wellness</h1>

        <Card className="p-4">
          <div className="bg-gradient-to-r from-softLavender to-blushRose p-4 rounded-lg text-center mb-4">
            <h2 className="font-serif text-xl mb-1">Cycle-Synced Wellness</h2>
            <p className="text-sm">Personalized recommendations for your follicular phase</p>
          </div>
          
          <Tabs defaultValue="mindfulness" className="w-full" onValueChange={setActiveTab}>
            <TabsList className="w-full bg-muted mb-4">
              <TabsTrigger value="mindfulness" className="flex-1">Mind</TabsTrigger>
              <TabsTrigger value="nutrition" className="flex-1">Nutrition</TabsTrigger>
              <TabsTrigger value="movement" className="flex-1">Movement</TabsTrigger>
            </TabsList>
            
            {wellnessCategories.map(category => (
              <TabsContent key={category.id} value={category.id} className="space-y-3 mt-2">
                {category.items.map((item, index) => (
                  <WellnessCard
                    key={index}
                    title={item.title}
                    description={item.description}
                    icon={item.icon}
                    color={item.color}
                  />
                ))}
              </TabsContent>
            ))}
          </Tabs>
        </Card>
        
        <VirtualWellnessRoom />

        <Card className="p-4">
          <h2 className="font-serif text-xl mb-4">Symptom Navigator</h2>
          <SymptomNavigator />
        </Card>
        
        <div className="bg-white rounded-2xl shadow-md p-5">
          <div className="flex justify-between items-center mb-4">
            <h2 className="font-serif text-xl">Need Support?</h2>
            <button className="text-sm text-forestTeal font-medium">View All</button>
          </div>
          
          <button className="w-full bg-deepPlum text-white rounded-xl p-4 mb-3 text-left flex items-center">
            <div className="mr-4 bg-white/20 w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-white text-lg">💬</span>
            </div>
            <div>
              <h3 className="font-medium">Talk to a Professional</h3>
              <p className="text-xs text-white/80">Access our network of verified experts</p>
            </div>
          </button>
          
          <button className="w-full bg-blushRose/80 text-deepPlum rounded-xl p-4 text-left flex items-center">
            <div className="mr-4 bg-deepPlum/10 w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-lg">❓</span>
            </div>
            <div>
              <h3 className="font-medium">Ask Anonymous Question</h3>
              <p className="text-xs text-deepPlum/80">Get answers from gynecologists & experts</p>
            </div>
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default WellnessPage;
