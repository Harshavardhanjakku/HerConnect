
import React from 'react';

type CyclePhase = 'menstrual' | 'follicular' | 'ovulation' | 'luteal';

interface CyclePhaseIndicatorProps {
  currentPhase: CyclePhase;
}

const CyclePhaseIndicator = ({ currentPhase }: CyclePhaseIndicatorProps) => {
  const phases = [
    { id: 'menstrual', label: 'Menstrual', color: 'bg-blushRose' },
    { id: 'follicular', label: 'Follicular', color: 'bg-softLavender' },
    { id: 'ovulation', label: 'Ovulation', color: 'bg-forestTeal' },
    { id: 'luteal', label: 'Luteal', color: 'bg-deepPlum' },
  ];
  
  return (
    <div className="w-full my-4">
      <div className="flex justify-between mb-2">
        {phases.map((phase) => (
          <div key={phase.id} className="text-center">
            <div 
              className={`h-3 w-3 rounded-full mx-auto mb-1 ${
                currentPhase === phase.id 
                  ? `${phase.color} animate-pulse-gentle` 
                  : 'bg-gray-200'
              }`} 
            />
            <span className={`text-xs ${currentPhase === phase.id ? 'font-medium' : 'text-gray-500'}`}>
              {phase.label}
            </span>
          </div>
        ))}
      </div>
      <div className="h-1 w-full bg-gray-200 rounded-full">
        <div 
          className={`h-1 rounded-full ${
            currentPhase === 'menstrual' ? 'bg-blushRose w-1/4' :
            currentPhase === 'follicular' ? 'bg-softLavender w-2/4' :
            currentPhase === 'ovulation' ? 'bg-forestTeal w-3/4' :
            'bg-deepPlum w-full'
          }`} 
        />
      </div>
    </div>
  );
};

export default CyclePhaseIndicator;
