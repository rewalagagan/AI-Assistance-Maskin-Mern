import React, { useState, useEffect, useRef } from 'react';
import { Message } from '../types/chat';
import { generateBotResponse } from '../utils/botResponses';
import { saveChatHistory, loadChatHistory, clearChatHistory } from '../utils/storage';
import ChatHeader from './ChatHeader';
import MessageBubble from './MessageBubble';
import TypingIndicator from './TypingIndicator';
import ChatInput from './ChatInput';
import EmptyState from './EmptyState';

const ChatInterface: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>(() => loadChatHistory());
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  // messages are initialized from storage synchronously above to avoid race conditions on first load

  // Save chat history whenever messages change
  useEffect(() => {
    saveChatHistory(messages);
  }, [messages]);

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const generateMessageId = () => {
    return Date.now().toString() + Math.random().toString(36).substr(2, 9);
  };

  const handleSendMessage = (messageText: string) => {
    // Add user message
    const userMessage: Message = {
      id: generateMessageId(),
      text: messageText,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    
    // Simulate typing delay
    setIsTyping(true);
    
    const typingDelay = Math.random() * 1500 + 800; // 800-2300ms delay
    
    setTimeout(() => {
      // Generate and add bot response
      const botResponseText = generateBotResponse(messageText);
      const botMessage: Message = {
        id: generateMessageId(),
        text: botResponseText,
        sender: 'bot',
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, typingDelay);
  };

  const handleClearChat = () => {
    setMessages([]);
    setIsTyping(false);
    clearChatHistory();
  };

  return (
    <div className="flex flex-col h-screen bg-gray-50">
      <ChatHeader onClearChat={handleClearChat} />
      
      <div 
        ref={chatContainerRef}
        className="flex-1 overflow-y-auto p-4 space-y-2"
      >
        {messages.length === 0 && !isTyping ? (
          <EmptyState onSelectSuggestion={handleSendMessage} />
        ) : (
          <>
            {messages.map((message) => (
              <MessageBubble 
                key={message.id} 
                message={message}
                onClickText={(text) => handleSendMessage(text)}
              />
            ))}
            {isTyping && <TypingIndicator />}
          </>
        )}
        <div ref={messagesEndRef} />
      </div>

      <ChatInput 
        onSendMessage={handleSendMessage} 
        disabled={isTyping}
      />
    </div>
  );
};

export default ChatInterface;