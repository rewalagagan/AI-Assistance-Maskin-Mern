import React from 'react';
import { Message } from '../types/chat';

interface MessageBubbleProps {
  message: Message;
  onClickText?: (text: string) => void;
}

const MessageBubble: React.FC<MessageBubbleProps> = ({ message, onClickText }) => {
  const isUser = message.sender === 'user';
  
  return (
    <div className={`flex mb-4 ${isUser ? 'justify-end' : 'justify-start'} animate-fadeIn`}>
      <div
        className={`max-w-xs lg:max-w-md px-4 py-2 rounded-2xl shadow-sm ${
        isUser
          ? 'bg-blue-600 text-white rounded-br-md'
          : 'bg-white text-gray-800 rounded-bl-md border border-gray-100'
      } ${onClickText ? 'cursor-pointer hover:opacity-95 active:opacity-90' : ''}`}
        onClick={() => onClickText?.(message.text)}
      >
        <p className="text-sm leading-relaxed">{message.text}</p>
        <p className={`text-xs mt-1 ${
          isUser ? 'text-blue-100' : 'text-gray-500'
        }`}>
          {message.timestamp.toLocaleTimeString([], { 
            hour: '2-digit', 
            minute: '2-digit' 
          })}
        </p>
      </div>
    </div>
  );
};

export default MessageBubble;