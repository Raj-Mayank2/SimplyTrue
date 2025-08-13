import React, { useState } from 'react';
import { MessageSquareText, X, Send } from 'lucide-react';

const ChatbotMockup = () => {
  // State to manage the visibility of the chatbot window.
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');

  // Dummy messages to simulate a conversation.
  const mockMessages = [
    { type: 'bot', text: "Hello there! I'm your SimplyTrue assistant. How can I help you today?" },
    { type: 'bot', text: "I can answer questions about our snacks, ingredients, or help with your order." },
    { type: 'user', text: "What's the calorie count for your mixed nuts?" },
    { type: 'bot', text: "Our Mixed Nuts Premium contains 185 kcal per serving. Would you like to know more about our other products?" },
  ];

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      // In a real application, you would send this message to a server.
      console.log(`User sent: ${inputValue}`);
      setInputValue('');
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 font-['Inter']">
      {/* --- Chatbot Window --- */}
      {isOpen && (
        <div className="w-80 h-[400px] bg-white rounded-2xl shadow-2xl border border-slate-200 flex flex-col overflow-hidden transform transition-all duration-300 scale-100 mb-4">
          
          {/* Header */}
          <div className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white p-4 flex items-center justify-between">
            <h3 className="font-semibold text-lg">SimplyTrue Assistant</h3>
            <button onClick={() => setIsOpen(false)} className="p-1 rounded-full hover:bg-white/20 transition-colors">
              <X size={20} />
            </button>
          </div>
          
          {/* Messages */}
          <div className="flex-grow p-4 space-y-4 overflow-y-auto">
            {mockMessages.map((msg, index) => (
              <div 
                key={index} 
                className={`flex ${msg.type === 'bot' ? 'justify-start' : 'justify-end'}`}
              >
                <div 
                  className={`max-w-[75%] rounded-xl p-3 text-sm shadow-sm ${
                    msg.type === 'bot' 
                      ? 'bg-slate-100 text-slate-800 rounded-bl-none' 
                      : 'bg-emerald-500 text-white rounded-br-none'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
          </div>

          {/* Input Area */}
          <form onSubmit={handleSendMessage} className="border-t border-slate-200 p-3 flex items-center bg-slate-50">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Type your message..."
              className="flex-grow bg-transparent outline-none text-slate-700 placeholder-slate-500 text-sm"
            />
            <button type="submit" className="ml-3 p-2 rounded-full bg-emerald-500 hover:bg-emerald-600 transition-colors text-white">
              <Send size={18} />
            </button>
          </form>
        </div>
      )}

      {/* --- Floating Chat Button --- */}
      {!isOpen && (
        <button 
          onClick={() => setIsOpen(true)}
          className="w-14 h-14 rounded-full bg-gradient-to-r from-emerald-500 to-teal-600 text-white flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
        >
          <MessageSquareText size={28} />
        </button>
      )}
    </div>
  );
};

export default ChatbotMockup;
