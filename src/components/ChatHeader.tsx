import React from 'react';
import { Code2, RotateCcw } from 'lucide-react';

interface ChatHeaderProps {
  onClearChat: () => void;
}

const ChatHeader: React.FC<ChatHeaderProps> = ({ onClearChat }) => {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-4 shadow-lg">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-white bg-opacity-20 rounded-full">
            <Code2 size={24} />
          </div>
          <div>
            <h1 className="text-xl font-semibold">MERN Stack Assistant</h1>
            <p className="text-blue-100 text-sm">MongoDB • Express • React • Node.js</p>
          </div>
        </div>
        <button
          onClick={onClearChat}
          className="p-2 hover:bg-white hover:bg-opacity-20 rounded-full 
                   transition-all duration-200 focus:outline-none focus:ring-2 
                   focus:ring-white focus:ring-opacity-50"
          title="Clear conversation"
        >
          <RotateCcw size={20} />
        </button>
      </div>
    </div>
  );
};

export default ChatHeader;