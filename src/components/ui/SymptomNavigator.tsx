
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/sonner';

type SymptomCategory = 'cramps' | 'mood' | 'energy' | 'bloating' | 'headache';

interface SolutionItem {
  title: string;
  description: string;
  icon: string;
}

const SymptomNavigator = () => {
  const [selectedSymptom, setSelectedSymptom] = useState<SymptomCategory | null>(null);
  
  const symptoms = [
    { id: 'cramps', label: 'Cramps', icon: '💫' },
    { id: 'mood', label: 'Mood Swings', icon: '🎭' },
    { id: 'energy', label: 'Low Energy', icon: '🔋' },
    { id: 'bloating', label: 'Bloating', icon: '🫨' },
    { id: 'headache', label: 'Headache', icon: '🤕' },
  ];
  
  const symptomSolutions: Record<SymptomCategory, SolutionItem[]> = {
    cramps: [
      { title: 'Heat Therapy', description: 'Apply a heating pad to your lower abdomen for 15-20 minutes.', icon: '🔥' },
      { title: 'Gentle Stretching', description: 'Try child\'s pose or cat-cow stretches to relieve tension.', icon: '🧘‍♀️' },
      { title: 'Magnesium Foods', description: 'Dark chocolate, bananas, and almonds can help relieve cramps.', icon: '🍌' },
    ],
    mood: [
      { title: '5-Minute Journaling', description: 'Write down your thoughts to process emotions.', icon: '📓' },
      { title: 'B Vitamin Boost', description: 'Foods like avocados and legumes can stabilize mood.', icon: '🥑' },
      { title: 'Sensory Grounding', description: 'Focus on 5 things you can see, 4 touch, 3 hear, 2 smell, 1 taste.', icon: '👁️' },
    ],
    energy: [
      { title: 'Power Nap', description: '20 minutes of rest can restore energy without grogginess.', icon: '😴' },
      { title: 'Iron-Rich Snack', description: 'Try hummus, spinach, or a small piece of lean meat.', icon: '🥗' },
      { title: 'Gentle Movement', description: 'A short walk can increase circulation and energy.', icon: '🚶‍♀️' },
    ],
    bloating: [
      { title: 'Anti-Inflammatory Tea', description: 'Ginger or peppermint tea can reduce gas and bloating.', icon: '🍵' },
      { title: 'Avoid Salt', description: 'Reduce sodium intake to prevent water retention.', icon: '🧂' },
      { title: 'Abdominal Massage', description: 'Gentle clockwise massage can help relieve gas.', icon: '✋' },
    ],
    headache: [
      { title: 'Hydration', description: 'Drink a full glass of water, as dehydration can cause headaches.', icon: '💧' },
      { title: 'Temple Massage', description: 'Massage your temples in small circles for 2 minutes.', icon: '💆‍♀️' },
      { title: 'Eye Rest', description: 'Close your eyes and place a cool cloth over them for 10 minutes.', icon: '👁️' },
    ],
  };
  
  const handleSymptomSelect = (symptom: SymptomCategory) => {
    setSelectedSymptom(symptom);
    
    // Show toast when symptom is selected
    toast(`${symptoms.find(s => s.id === symptom)?.label} Selected`, {
      description: "Here are some solutions that might help you feel better.",
    });
  };
  
  return (
    <div>
      <p className="text-gray-600 mb-4">Select a symptom to get personalized solutions:</p>
      
      <div className="flex flex-wrap gap-2 mb-6">
        {symptoms.map((symptom) => (
          <Button
            key={symptom.id}
            onClick={() => handleSymptomSelect(symptom.id as SymptomCategory)}
            variant="outline"
            className={`flex items-center gap-2 ${
              selectedSymptom === symptom.id ? 'bg-softLavender border-deepPlum' : ''
            }`}
          >
            <span className="text-lg">{symptom.icon}</span>
            <span>{symptom.label}</span>
          </Button>
        ))}
      </div>
      
      {selectedSymptom && (
        <div className="space-y-3 animate-fade-in">
          <h3 className="font-medium text-lg mb-2">Solutions for {symptoms.find(s => s.id === selectedSymptom)?.label}</h3>
          
          {symptomSolutions[selectedSymptom].map((solution, index) => (
            <div key={index} className="p-3 bg-white rounded-lg border-l-2 border-forestTeal shadow-sm">
              <div className="flex items-start">
                <div className="mr-3 text-2xl">{solution.icon}</div>
                <div>
                  <h4 className="font-medium">{solution.title}</h4>
                  <p className="text-sm text-gray-600">{solution.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SymptomNavigator;
