
import React from 'react';

type Mood = 'happy' | 'calm' | 'tired' | 'stressed' | 'sad';

interface MoodSelectorProps {
  selectedMood: Mood | null;
  onSelectMood: (mood: Mood) => void;
}

const MoodSelector = ({ selectedMood, onSelectMood }: MoodSelectorProps) => {
  const moods = [
    { id: 'happy', emoji: '😊', label: 'Happy', bgColor: 'bg-yellow-100' },
    { id: 'calm', emoji: '😌', label: 'Calm', bgColor: 'bg-blue-100' },
    { id: 'tired', emoji: '😴', label: 'Tired', bgColor: 'bg-purple-100' },
    { id: 'stressed', emoji: '😰', label: 'Stressed', bgColor: 'bg-red-100' },
    { id: 'sad', emoji: '😢', label: 'Sad', bgColor: 'bg-gray-100' },
  ];
  
  return (
    <div className="my-4">
      <h3 className="font-serif text-lg mb-3">How are you feeling today?</h3>
      <div className="flex justify-between space-x-2">
        {moods.map((mood) => (
          <button
            key={mood.id}
            onClick={() => onSelectMood(mood.id as Mood)}
            className={`flex flex-col items-center p-2 rounded-lg transition-all ${
              selectedMood === mood.id 
                ? `${mood.bgColor} ring-2 ring-deepPlum scale-105` 
                : 'bg-white hover:bg-gray-50'
            }`}
          >
            <span className="text-2xl">{mood.emoji}</span>
            <span className="text-xs mt-1">{mood.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default MoodSelector;
