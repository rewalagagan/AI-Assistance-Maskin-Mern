import React, { useState } from 'react';
import { Send } from 'lucide-react';
import SuggestedPrompts from './SuggestedPrompts';
import { Message } from '../types/chat';

interface ChatInputProps {
  onSendMessage: (message: string) => void;
  disabled?: boolean;
  messages?: Message[];
}

const ChatInput: React.FC<ChatInputProps> = ({ onSendMessage, disabled, messages = [] }) => {
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim() && !disabled) {
      onSendMessage(message.trim());
      setMessage('');
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  return (
    <div className="border-t border-gray-200 bg-white">
      <SuggestedPrompts 
        messages={messages} 
        onSelectPrompt={onSendMessage}
        disabled={disabled}
      />
      <form onSubmit={handleSubmit} className="p-4">
        <div className="flex items-center space-x-3">
          <div className="flex-1 relative">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Type your message..."
              disabled={disabled}
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-full 
                       focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
                       disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200
                       text-gray-800 placeholder-gray-500"
            />
          </div>
          <button
            type="submit"
            disabled={!message.trim() || disabled}
            className="p-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 
                     focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
                     disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-blue-600
                     transition-all duration-200 shadow-sm hover:shadow-md"
          >
            <Send size={18} />
          </button>
        </div>
      </form>
    </div>
  );
};

export default ChatInput;