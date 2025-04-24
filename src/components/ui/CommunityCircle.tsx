
import React from 'react';

interface CommunityCircleProps {
  name: string;
  memberCount: number;
  description: string;
  icon: string;
}

const CommunityCircle = ({ name, memberCount, description, icon }: CommunityCircleProps) => {
  return (
    <div className="hercycle-card flex items-start mb-4">
      <div className="w-12 h-12 rounded-full bg-softLavender flex items-center justify-center mr-4 flex-shrink-0">
        <span className="text-xl">{icon}</span>
      </div>
      <div>
        <h3 className="font-serif text-lg">{name}</h3>
        <p className="text-sm text-gray-500 mb-2">{memberCount.toLocaleString()} members</p>
        <p className="text-sm">{description}</p>
        <button className="mt-3 text-sm text-forestTeal font-medium">
          Join Circle
        </button>
      </div>
    </div>
  );
};

export default CommunityCircle;
