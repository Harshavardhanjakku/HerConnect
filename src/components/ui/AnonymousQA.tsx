
import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/sonner';

const AnonymousQA = () => {
  const [question, setQuestion] = useState('');
  
  const recentQuestions = [
    {
      question: "Is it normal to have very heavy bleeding during the first two days?",
      answer: "Yes, many people experience their heaviest flow during the first 48 hours of their period. If you're soaking through protection every hour or experiencing severe pain, consult a healthcare provider.",
      expert: "Dr. Sarah Chen, OB/GYN"
    },
    {
      question: "What can help with mood swings before my period?",
      answer: "Regular exercise, adequate sleep, and foods rich in B vitamins and omega-3s can help stabilize mood. Some find cognitive behavioral techniques helpful. If mood swings significantly impact your life, consider speaking with a healthcare provider.",
      expert: "Dr. Maya Patel, Psychiatrist"
    }
  ];
  
  const handleSubmitQuestion = () => {
    if (question.trim()) {
      toast.success("Question Submitted", {
        description: "A verified expert will answer your question soon.",
      });
      setQuestion('');
    }
  };
  
  return (
    <Card className="p-4">
      <h2 className="font-serif text-xl mb-1">Anonymous Expert Q&A</h2>
      <p className="text-sm text-gray-600 mb-4">Ask our verified experts your health questions anonymously</p>
      
      <div className="bg-gray-50 p-4 rounded-lg mb-5">
        <textarea 
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="Type your question here... Your identity will remain anonymous"
          className="w-full p-3 rounded-lg border border-gray-200 mb-3 min-h-[100px] focus:outline-none focus:ring-2 focus:ring-deepPlum focus:border-transparent"
        />
        <div className="flex justify-end">
          <Button 
            onClick={handleSubmitQuestion} 
            className="bg-deepPlum hover:bg-deepPlum/90"
            disabled={!question.trim()}
          >
            Ask Anonymously
          </Button>
        </div>
      </div>
      
      <h3 className="font-medium mb-3">Recent Expert Answers</h3>
      <div className="space-y-4">
        {recentQuestions.map((item, index) => (
          <div key={index} className="bg-white border border-gray-100 rounded-lg p-3 shadow-sm">
            <p className="font-medium mb-1 text-deepPlum">Q: {item.question}</p>
            <p className="text-sm mb-2">A: {item.answer}</p>
            <p className="text-xs text-forestTeal font-medium">— {item.expert}</p>
          </div>
        ))}
      </div>
      
      <Button variant="outline" className="w-full mt-4">
        Browse All Q&A
      </Button>
    </Card>
  );
};

export default AnonymousQA;
