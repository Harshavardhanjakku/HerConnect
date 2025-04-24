
import React, { useState } from 'react';
import Layout from '@/components/layout/Layout';
import SymptomTracker from '@/components/ui/SymptomTracker';
import { Calendar } from '@/components/ui/calendar';
import { Card } from '@/components/ui/card';
import CycleAIInsights from '@/components/ui/CycleAIInsights';
import { Button } from '@/components/ui/button';
import { Bell } from 'lucide-react';
import { toast } from '@/components/ui/sonner';

type Symptom = 'cramps' | 'headache' | 'bloating' | 'fatigue' | 'acne' | 'backPain' | 'breastTenderness' | 'nausea';
type FlowIntensity = 'none' | 'light' | 'medium' | 'heavy';

const CyclePage = () => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
  const [selectedSymptoms, setSelectedSymptoms] = useState<Symptom[]>([]);
  const [flowIntensity, setFlowIntensity] = useState<FlowIntensity>('medium');
  const [isRedAlertEnabled, setIsRedAlertEnabled] = useState(true);

  const toggleSymptom = (symptom: Symptom) => {
    if (selectedSymptoms.includes(symptom)) {
      setSelectedSymptoms(selectedSymptoms.filter(s => s !== symptom));
    } else {
      setSelectedSymptoms([...selectedSymptoms, symptom]);
    }
  };

  const toggleRedAlert = () => {
    setIsRedAlertEnabled(!isRedAlertEnabled);
    toast(
      isRedAlertEnabled ? 'Red Alert Disabled' : 'Red Alert Enabled',
      {
        description: isRedAlertEnabled 
          ? 'You will no longer receive advance notifications.' 
          : 'You will receive advance notifications for symptoms and cycle events.',
        position: 'top-center',
      }
    );
  };

  const saveData = () => {
    toast.success('Your cycle data has been saved', {
      description: 'We\'ve updated your AI predictions based on this information.',
    });
  };

  return (
    <Layout>
      <div className="flex flex-col space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="font-serif text-2xl">Cycle Tracking</h1>
          <Button 
            variant="outline" 
            size="sm"
            className={`flex items-center gap-2 ${isRedAlertEnabled ? 'bg-blushRose/20 text-deepPlum' : 'bg-gray-100'}`} 
            onClick={toggleRedAlert}
          >
            <Bell size={16} className={isRedAlertEnabled ? 'text-deepPlum' : 'text-gray-500'} />
            Red Alert {isRedAlertEnabled ? 'ON' : 'OFF'}
          </Button>
        </div>
        
        <Card className="p-4">
          <Calendar
            mode="single"
            selected={selectedDate}
            onSelect={setSelectedDate}
            className="rounded-md border"
          />
        </Card>
        
        <Card className="p-4">
          <h2 className="font-serif text-xl mb-4">Period Flow</h2>
          <div className="flex justify-between">
            {(['none', 'light', 'medium', 'heavy'] as FlowIntensity[]).map((intensity) => (
              <button
                key={intensity}
                onClick={() => setFlowIntensity(intensity)}
                className={`flex flex-col items-center px-3 py-2 rounded-lg transition-all ${
                  flowIntensity === intensity 
                    ? 'bg-blushRose text-deepPlum' 
                    : 'bg-white border border-gray-200'
                }`}
              >
                <span className="text-xl mb-1">
                  {intensity === 'none' ? '💧' : 
                   intensity === 'light' ? '💧💧' : 
                   intensity === 'medium' ? '💧💧💧' : '💧💧💧💧'}
                </span>
                <span className="text-xs capitalize">{intensity}</span>
              </button>
            ))}
          </div>
        </Card>
        
        <Card className="p-4">
          <SymptomTracker 
            selectedSymptoms={selectedSymptoms} 
            onToggleSymptom={toggleSymptom} 
          />
        </Card>
        
        <Card className="p-4">
          <h2 className="font-serif text-xl mb-4">AI Cycle Insights</h2>
          <CycleAIInsights />
        </Card>
        
        <Button onClick={saveData} className="hercycle-button mx-auto bg-deepPlum text-white">
          Save Today's Log
        </Button>
      </div>
    </Layout>
  );
};

export default CyclePage;
