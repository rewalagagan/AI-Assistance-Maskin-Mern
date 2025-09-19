import { findMernAnswer, getMernCategories, getRandomMernQuestion } from './mernStackData';

interface ResponseCategory {
  keywords: string[];
  responses: string[];
}

const responseCategories: ResponseCategory[] = [
  {
    keywords: ['hello', 'hi', 'hey', 'greetings', 'good morning', 'good afternoon', 'good evening'],
    responses: [
      "Hello! How can I assist you today? 😊",
      "Hi there! What can I help you with?",
      "Hey! Great to see you here. How can I help?",
      "Greetings! I'm here to help you with any questions.",
      "Hello! Ready to chat? What's on your mind?"
    ]
  },
  {
    keywords: ['how are you', 'how do you do', 'how is it going', 'whats up'],
    responses: [
      "I'm doing wonderfully, thank you for asking! How are you doing?",
      "All systems running smoothly! 🤖 How can I help you today?",
      "I'm great and ready to help! What brings you here?",
      "Fantastic! Thanks for asking. What can I do for you?",
      "I'm doing well! Hope you're having a great day too."
    ]
  },
  {
    keywords: ['weather', 'temperature', 'forecast', 'rain', 'sunny', 'cloudy'],
    responses: [
      "I don't have access to real-time weather data, but I'd suggest checking your local weather app! ☀️",
      "For accurate weather information, try checking weather.com or your phone's weather app! 🌤️",
      "I wish I could tell you about the weather, but I recommend checking a reliable weather service! 🌈",
      "Weather updates aren't in my toolkit, but your local weather service will have the latest! ⛅"
    ]
  },
  {
    keywords: ['time', 'clock', 'date', 'today', 'now'],
    responses: [
      `The current time is ${new Date().toLocaleTimeString()}! ⏰`,
      `Today is ${new Date().toLocaleDateString()}. Time: ${new Date().toLocaleTimeString()}`,
      `Right now it's ${new Date().toLocaleString()}! 📅`,
      `Current date and time: ${new Date().toLocaleString()}`
    ]
  },
  {
    keywords: ['help', 'assistance', 'support', 'what can you do'],
    responses: [
      "I'm here to help! I can chat with you, answer questions, and provide information on various topics. What would you like to know?",
      "I can assist with general questions, have conversations, and help you explore different topics. How can I help you today?",
      "I'm a friendly chatbot ready to help with questions, provide information, or just chat! What's on your mind?",
      "I love helping out! Feel free to ask me questions or just have a casual conversation. What interests you?"
    ]
  },
  {
    keywords: ['thank you', 'thanks', 'appreciate', 'grateful'],
    responses: [
      "You're very welcome! Happy to help! 😊",
      "My pleasure! Let me know if you need anything else.",
      "Glad I could help! Feel free to ask more questions anytime.",
      "You're welcome! I'm here whenever you need assistance.",
      "Anytime! Thanks for the kind words! 🙏"
    ]
  },
  {
    keywords: ['bye', 'goodbye', 'see you', 'farewell', 'later'],
    responses: [
      "Goodbye! It was great chatting with you! 👋",
      "See you later! Hope you have a wonderful day!",
      "Farewell! Feel free to come back anytime for more chat!",
      "Take care! Thanks for the great conversation! 🌟",
      "Bye for now! Looking forward to our next chat!"
    ]
  },
  {
    keywords: ['joke', 'funny', 'humor', 'laugh'],
    responses: [
      "Why don't robots ever panic? Because they have great control-alt-delete! 🤖😄",
      "I told my computer a joke about UDP... I'm not sure if it got it! 💻😂",
      "Why do programmers prefer dark mode? Because light attracts bugs! 🐛💡",
      "How do you comfort a JavaScript bug? You console it! 😅",
      "I'm not great at jokes, but I'm fantastic at being helpful! 😊"
    ]
  }
];

const fallbackResponses = [
  "That's interesting! Tell me more about that.",
  "I appreciate you sharing that with me. What else would you like to discuss?",
  "That's a great point! I'm here to help with any questions you might have.",
  "I understand. Is there anything specific I can help you with today?",
  "Thanks for letting me know! How can I assist you further?",
  "I see what you mean. What other topics interest you?",
  "That's good to know! Feel free to ask me anything else.",
  "I'm listening! What else is on your mind?"
];

export const generateBotResponse = (userMessage: string): string => {
  const lowerMessage = userMessage.toLowerCase().trim();
  
  // Check for MERN stack related queries first
  const mernAnswer = findMernAnswer(userMessage);
  if (mernAnswer) {
    return mernAnswer;
  }
  
  // Handle MERN stack category requests
  if (lowerMessage.includes('mern categories') || lowerMessage.includes('mern topics')) {
    const categories = getMernCategories();
    return `📚 **MERN Stack Knowledge Base**\n\nI have comprehensive knowledge about:\n\n🍃 **MongoDB**: ${categories.mongodb} questions\n⚡ **Express.js**: ${categories.express} questions\n⚛️ **React**: ${categories.react} questions\n🟢 **Node.js**: ${categories.nodejs} questions\n🔧 **General MERN**: ${categories.general} questions\n\n**Total: ${Object.values(categories).reduce((a, b) => a + b, 0)} questions available!**\n\nAsk me anything about MERN stack development!`;
  }
  
  // Handle random question requests
  if (lowerMessage.includes('random mern question') || lowerMessage.includes('surprise me')) {
    return getRandomMernQuestion();
  }
  
  if (lowerMessage.includes('random mongodb question')) {
    return getRandomMernQuestion('mongodb');
  }
  
  if (lowerMessage.includes('random express question')) {
    return getRandomMernQuestion('express');
  }
  
  if (lowerMessage.includes('random react question')) {
    return getRandomMernQuestion('react');
  }
  
  if (lowerMessage.includes('random node question')) {
    return getRandomMernQuestion('nodejs');
  }
  
  // Find matching category based on keywords
  for (const category of responseCategories) {
    for (const keyword of category.keywords) {
      if (lowerMessage.includes(keyword)) {
        const randomIndex = Math.floor(Math.random() * category.responses.length);
        return category.responses[randomIndex];
      }
    }
  }
  
  // Return random fallback response
  const randomIndex = Math.floor(Math.random() * fallbackResponses.length);
  return fallbackResponses[randomIndex];
};