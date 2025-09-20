import React from 'react';
import { Message } from '../types/chat';

interface SuggestedPromptsProps {
  messages: Message[];
  onSelectPrompt: (prompt: string) => void;
  disabled?: boolean;
}

const SuggestedPrompts: React.FC<SuggestedPromptsProps> = ({ 
  messages, 
  onSelectPrompt, 
  disabled 
}) => {
  // Don't show suggestions if no messages or if disabled
  if (messages.length === 0 || disabled) {
    return null;
  }

  // Get the last few messages to generate contextual suggestions
  const recentMessages = messages.slice(-3);
  const lastUserMessage = recentMessages
    .reverse()
    .find(msg => msg.sender === 'user')?.text.toLowerCase() || '';

  // Generate contextual suggestions based on conversation
  const getContextualSuggestions = (): string[] => {
    const suggestions: string[] = [];
    
    // Check for specific topics in recent conversation
    if (lastUserMessage.includes('mongodb') || lastUserMessage.includes('database')) {
      suggestions.push(
        "Show me MongoDB connection examples",
        "Explain MongoDB indexing",
        "MongoDB aggregation pipeline basics",
        "MongoDB vs SQL differences"
      );
    } else if (lastUserMessage.includes('express') || lastUserMessage.includes('server')) {
      suggestions.push(
        "Create Express.js middleware",
        "Express routing best practices",
        "Express error handling",
        "Express authentication setup"
      );
    } else if (lastUserMessage.includes('react') || lastUserMessage.includes('component')) {
      suggestions.push(
        "React hooks explained",
        "React state management",
        "React component lifecycle",
        "React performance optimization"
      );
    } else if (lastUserMessage.includes('node') || lastUserMessage.includes('backend')) {
      suggestions.push(
        "Node.js file system operations",
        "Node.js event loop",
        "Node.js streams",
        "Node.js debugging techniques"
      );
    } else if (lastUserMessage.includes('mern') || lastUserMessage.includes('stack')) {
      suggestions.push(
        "MERN stack project structure",
        "MERN deployment guide",
        "MERN best practices",
        "MERN vs MEAN stack"
      );
    } else {
      // General suggestions based on conversation context
      suggestions.push(
        "Explain the MERN stack",
        "Show me a React component example",
        "How to connect MongoDB to Express?",
        "Node.js vs Express.js differences",
        "MERN stack deployment options"
      );
    }

    // Return 4-5 suggestions
    return suggestions.slice(0, 5);
  };

  const suggestions = getContextualSuggestions();

  if (suggestions.length === 0) {
    return null;
  }

  return (
    <div className="border-t border-gray-200 bg-gray-50 p-3">
      <div className="text-xs text-gray-600 mb-2 font-medium">Suggested prompts:</div>
      <div className="flex flex-wrap gap-2">
        {suggestions.map((suggestion, index) => (
          <button
            key={index}
            onClick={() => onSelectPrompt(suggestion)}
            disabled={disabled}
            className="px-3 py-1.5 bg-white border border-gray-200 rounded-full 
                     text-xs text-gray-700 hover:border-blue-300 hover:bg-blue-50 
                     transition-all duration-200 cursor-pointer
                     disabled:opacity-50 disabled:cursor-not-allowed
                     hover:shadow-sm"
          >
            {suggestion}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SuggestedPrompts;
