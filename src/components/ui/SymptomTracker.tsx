
import React, { useState } from 'react';
import { Check } from 'lucide-react';

type Symptom = 'cramps' | 'headache' | 'bloating' | 'fatigue' | 'acne' | 'backPain' | 'breastTenderness' | 'nausea';

interface SymptomTrackerProps {
  selectedSymptoms: Symptom[];
  onToggleSymptom: (symptom: Symptom) => void;
}

const SymptomTracker = ({ selectedSymptoms, onToggleSymptom }: SymptomTrackerProps) => {
  const symptoms = [
    { id: 'cramps', label: 'Cramps', icon: '💫' },
    { id: 'headache', label: 'Headache', icon: '🤕' },
    { id: 'bloating', label: 'Bloating', icon: '🫨' },
    { id: 'fatigue', label: 'Fatigue', icon: '😴' },
    { id: 'acne', label: 'Acne', icon: '🫣' },
    { id: 'backPain', label: 'Back Pain', icon: '🔙' },
    { id: 'breastTenderness', label: 'Breast Tenderness', icon: '💟' },
    { id: 'nausea', label: 'Nausea', icon: '🤢' },
  ];
  
  return (
    <div className="my-4">
      <h3 className="font-serif text-lg mb-3">Track your symptoms</h3>
      <div className="grid grid-cols-4 gap-2">
        {symptoms.map((symptom) => (
          <button
            key={symptom.id}
            onClick={() => onToggleSymptom(symptom.id as Symptom)}
            className={`relative flex flex-col items-center p-2 rounded-lg border transition-all ${
              selectedSymptoms.includes(symptom.id as Symptom)
                ? 'bg-softLavender border-deepPlum'
                : 'bg-white border-gray-200 hover:border-softLavender'
            }`}
          >
            {selectedSymptoms.includes(symptom.id as Symptom) && (
              <div className="absolute -top-1 -right-1 bg-deepPlum text-white rounded-full p-0.5">
                <Check size={12} />
              </div>
            )}
            <span className="text-xl mb-1">{symptom.icon}</span>
            <span className="text-xs text-center">{symptom.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default SymptomTracker;
