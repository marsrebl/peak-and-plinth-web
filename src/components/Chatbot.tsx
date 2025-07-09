
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { MessageCircle, X, Minus, Send } from 'lucide-react';

export const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { id: 1, text: "Hello! How can I help you today?", sender: "bot" }
  ]);
  const [inputMessage, setInputMessage] = useState("");

  // Auto-open chatbot when website loads
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 2000); // Opens after 2 seconds

    return () => clearTimeout(timer);
  }, []);

  const handleSendMessage = () => {
    if (inputMessage.trim()) {
      const newMessage = {
        id: messages.length + 1,
        text: inputMessage,
        sender: "user"
      };
      setMessages([...messages, newMessage]);
      setInputMessage("");

      // Auto-reply from bot
      setTimeout(() => {
        const botReply = {
          id: messages.length + 2,
          text: "Thanks for your message! Our team will get back to you soon.",
          sender: "bot"
        };
        setMessages(prev => [...prev, botReply]);
      }, 1000);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  if (!isOpen) {
    return (
      <Button
        onClick={() => setIsOpen(true)}
        className="w-14 h-14 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white shadow-2xl hover:shadow-emerald-500/25 transition-all duration-300 hover:scale-110 flex items-center justify-center"
        title="Open chat"
      >
        <MessageCircle size={20} />
      </Button>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-2xl border border-gray-200 w-80 h-96 flex flex-col animate-fade-in">
      {/* Header */}
      <div className="bg-gradient-to-r from-emerald-600 to-emerald-700 text-white p-4 rounded-t-lg flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <MessageCircle size={20} />
          <span className="font-semibold">Chat Support</span>
        </div>
        <div className="flex space-x-2">
          <Button
            onClick={() => setIsOpen(false)}
            className="w-6 h-6 p-0 bg-transparent hover:bg-emerald-800 text-white"
            title="Minimize"
          >
            <Minus size={14} />
          </Button>
          <Button
            onClick={() => setIsOpen(false)}
            className="w-6 h-6 p-0 bg-transparent hover:bg-emerald-800 text-white"
            title="Close"
          >
            <X size={14} />
          </Button>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 p-4 overflow-y-auto space-y-3">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-xs px-3 py-2 rounded-lg text-sm ${
                message.sender === 'user'
                  ? 'bg-emerald-600 text-white'
                  : 'bg-gray-100 text-gray-800'
              }`}
            >
              {message.text}
            </div>
          </div>
        ))}
      </div>

      {/* Input */}
      <div className="p-4 border-t border-gray-200">
        <div className="flex space-x-2">
          <input
            type="text"
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Type your message..."
            className="flex-1 px-3 py-2 border border-gray-300 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />
          <Button
            onClick={handleSendMessage}
            className="w-10 h-10 p-0 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full"
          >
            <Send size={16} />
          </Button>
        </div>
      </div>
    </div>
  );
};
