
import React from 'react';

const CycleAIInsights = () => {
  return (
    <div className="space-y-4">
      <div className="p-3 bg-softLavender/30 rounded-lg animate-fade-in">
        <h3 className="font-medium mb-1">Follicular Phase</h3>
        <p className="text-sm text-gray-600">Your estrogen levels are rising, which may give you more energy and a boost in mood.</p>
      </div>
      
      <div className="p-3 bg-softLavender/30 rounded-lg animate-fade-in">
        <h3 className="font-medium mb-1">Upcoming Ovulation</h3>
        <p className="text-sm text-gray-600">Your ovulation is predicted in 2 days. You may notice increased energy and libido.</p>
      </div>
      
      <div className="p-3 bg-blushRose/20 rounded-lg border-l-2 border-blushRose animate-fade-in">
        <div className="flex items-center gap-2 mb-1">
          <span className="text-lg">⚠️</span>
          <h3 className="font-medium">Red Alert: PMS Symptoms Predicted</h3>
        </div>
        <p className="text-sm text-gray-600">Based on your past cycles, you may experience mood changes and fatigue in 5-7 days. Consider scheduling lighter workloads and self-care time.</p>
      </div>
      
      <div className="p-3 bg-forestTeal/10 rounded-lg animate-fade-in">
        <h3 className="font-medium mb-1">Wearable Insights</h3>
        <p className="text-sm text-gray-600">Your sleep quality has improved by 15% this week. Continue your current bedtime routine for optimal hormonal balance.</p>
      </div>
    </div>
  );
};

export default CycleAIInsights;
