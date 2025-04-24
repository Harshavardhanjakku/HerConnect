
import React from 'react';

interface WellnessCardProps {
  title: string;
  description: string;
  icon: string;
  color: string;
}

const WellnessCard = ({ title, description, icon, color }: WellnessCardProps) => {
  return (
    <div className={`hercycle-card border-l-4 ${color} animate-fade-in`}>
      <div className="flex items-start">
        <div className="mr-4 text-2xl">{icon}</div>
        <div>
          <h3 className="font-serif text-lg mb-1">{title}</h3>
          <p className="text-sm text-gray-600">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default WellnessCard;
