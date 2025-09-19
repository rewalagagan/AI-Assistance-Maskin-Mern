import React from 'react';
import { MessageSquare, Sparkles, MessageCircle, Database, Server, Code, Layers } from 'lucide-react';

interface EmptyStateProps {
  onSelectSuggestion?: (text: string) => void;
}

const EmptyState: React.FC<EmptyStateProps> = ({ onSelectSuggestion }) => {
  const suggestions = [
    { icon: MessageSquare, text: "What is the MERN stack?" },
    { icon: Database, text: "How do I connect to MongoDB?" },
    { icon: Server, text: "Create an Express server" },
    { icon: Code, text: "React hooks explained" },
    { icon: Layers, text: "MERN categories" },
    { icon: Sparkles, text: "Random MERN question" }
  ];

  return (
    <div className="flex-1 flex flex-col items-center justify-center p-8 text-center">
      <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
        <MessageCircle className="w-8 h-8 text-blue-600" />
      </div>
      
      <h2 className="text-2xl font-semibold text-gray-800 mb-2">
        MERN Stack Learning Assistant
      </h2>
      
      <p className="text-gray-600 mb-8 max-w-md">
        I'm your comprehensive MERN stack learning companion! Ask me anything about MongoDB, Express.js, React, and Node.js. 
        I have over 200 detailed questions and answers ready for you.
      </p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full max-w-lg">
        {suggestions.map((suggestion, index) => (
          <div
            key={index}
            className="flex items-center space-x-3 p-3 bg-white rounded-lg border border-gray-200 
                     hover:border-blue-300 hover:bg-blue-50 transition-all duration-200 cursor-pointer"
            onClick={() => onSelectSuggestion?.(suggestion.text)}
          >
            <suggestion.icon className="w-5 h-5 text-blue-600" />
            <span className="text-sm text-gray-700">{suggestion.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EmptyState;