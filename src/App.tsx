import React from 'react';
import ChatInterface from './components/ChatInterface';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto h-screen shadow-xl bg-white">
        <ChatInterface />
      </div>
    </div>
  );
}

export default App;