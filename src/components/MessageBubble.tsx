import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
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
        {isUser ? (
          <p className="text-sm leading-relaxed">{message.text}</p>
        ) : (
          <div className="text-sm leading-relaxed prose prose-sm max-w-none">
            <ReactMarkdown 
              remarkPlugins={[remarkGfm]}
              components={{
                p: ({ children }) => <p className="mb-2 last:mb-0">{children}</p>,
                ul: ({ children }) => <ul className="list-disc list-inside mb-2">{children}</ul>,
                ol: ({ children }) => <ol className="list-decimal list-inside mb-2">{children}</ol>,
                li: ({ children }) => <li className="mb-1">{children}</li>,
                code: ({ children }) => (
                  <code className="bg-gray-100 px-1 py-0.5 rounded text-xs font-mono">
                    {children}
                  </code>
                ),
                pre: ({ children }) => (
                  <pre className="bg-gray-100 p-3 rounded-lg overflow-x-auto text-xs mb-2">
                    {children}
                  </pre>
                ),
                strong: ({ children }) => <strong className="font-semibold">{children}</strong>,
                em: ({ children }) => <em className="italic">{children}</em>,
              }}
            >
              {message.text}
            </ReactMarkdown>
          </div>
        )}
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