
import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { AlertCircle } from 'lucide-react';
import { toast } from '@/components/ui/sonner';

type MeditationState = 'ready' | 'active' | 'paused' | 'complete';

const VirtualWellnessRoom = () => {
  const [meditationState, setMeditationState] = useState<MeditationState>('ready');
  const [currentTime, setCurrentTime] = useState(180); // 3 minutes in seconds
  const [intervalId, setIntervalId] = useState<number | null>(null);
  
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };
  
  const startMeditation = () => {
    setMeditationState('active');
    const id = window.setInterval(() => {
      setCurrentTime(prev => {
        if (prev <= 1) {
          clearInterval(id);
          setMeditationState('complete');
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    setIntervalId(id);
  };
  
  const pauseMeditation = () => {
    if (intervalId) {
      clearInterval(intervalId);
      setIntervalId(null);
    }
    setMeditationState('paused');
  };
  
  const resumeMeditation = () => {
    startMeditation();
  };
  
  const resetMeditation = () => {
    if (intervalId) {
      clearInterval(intervalId);
      setIntervalId(null);
    }
    setCurrentTime(180);
    setMeditationState('ready');
  };

  const activateSosMode = () => {
    toast(
      <div className="flex items-center gap-2">
        <AlertCircle className="text-red-500" />
        <span className="font-bold">SOS Mode Activated</span>
      </div>,
      {
        description: "Would you like to contact emergency support or your trusted contacts?",
        action: {
          label: "Get Help Now",
          onClick: () => {
            // In a real app, this would connect to crisis services
            console.log("Connecting to crisis services...");
          },
        },
        position: "top-center",
        duration: 10000,
      }
    );
  };
  
  return (
    <Card className="p-4">
      <h2 className="font-serif text-xl mb-2">Virtual Wellness Room</h2>
      
      <div className="bg-softLavender/30 rounded-lg p-4 mb-4">
        <div className="text-center mb-4">
          <p className="text-lg font-medium mb-1">3-Minute Breathing Space</p>
          <p className="text-sm text-gray-600">A quick meditation to center yourself</p>
        </div>
        
        {meditationState === 'ready' && (
          <Button 
            onClick={startMeditation} 
            className="w-full bg-deepPlum hover:bg-deepPlum/90"
          >
            Begin Meditation
          </Button>
        )}
        
        {(meditationState === 'active' || meditationState === 'paused') && (
          <div className="text-center">
            <div className="text-3xl font-medium mb-4">{formatTime(currentTime)}</div>
            <div className="flex justify-center gap-3">
              {meditationState === 'active' ? (
                <Button variant="outline" onClick={pauseMeditation}>Pause</Button>
              ) : (
                <Button variant="outline" onClick={resumeMeditation}>Resume</Button>
              )}
              <Button variant="outline" onClick={resetMeditation}>Reset</Button>
            </div>
          </div>
        )}
        
        {meditationState === 'complete' && (
          <div className="text-center">
            <p className="text-lg mb-3">Meditation Complete</p>
            <p className="text-sm text-gray-600 mb-4">How do you feel now?</p>
            <Button onClick={resetMeditation} variant="outline">
              Start Again
            </Button>
          </div>
        )}
      </div>
      
      <div className="flex justify-between gap-3">
        <Button className="flex-1 bg-blushRose hover:bg-blushRose/90 text-deepPlum">
          Breathing Exercise
        </Button>
        <Button 
          className="flex-1 bg-forestTeal hover:bg-forestTeal/90 text-white"
          onClick={() => {
            toast.success("Professional Support", {
              description: "Connecting you with a wellness specialist...",
            });
          }}
        >
          Talk to Someone
        </Button>
      </div>
      
      <Button 
        onClick={activateSosMode}
        variant="destructive" 
        className="w-full mt-3 bg-red-500 hover:bg-red-600 flex items-center justify-center gap-2"
      >
        <AlertCircle size={18} />
        SOS Mode
      </Button>
    </Card>
  );
};

export default VirtualWellnessRoom;
