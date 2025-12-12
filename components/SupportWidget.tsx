import React, { useState } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const SupportWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{from: 'bot' | 'user', text: string}[]>([]);
  const { t, language } = useLanguage();

  // Initialize with welcome message when opened
  const handleOpen = () => {
    if (!isOpen && messages.length === 0) {
      setMessages([{ from: 'bot', text: t.support.welcome }]);
    }
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (type: 'claim' | 'real') => {
    // Add user question
    const userText = type === 'claim' ? t.support.howToClaim : t.support.isReal;
    const botAnswer = type === 'claim' ? t.support.howToAnswer : t.support.isRealAnswer;

    setMessages(prev => [...prev, { from: 'user', text: userText }]);

    // Fake delay for bot typing
    setTimeout(() => {
        setMessages(prev => [...prev, { from: 'bot', text: botAnswer }]);
    }, 600);
  };

  return (
    <div className={`fixed bottom-5 ${language === 'ar' ? 'left-5' : 'right-5'} z-[10000] font-kanit`}>
      {/* Trigger Button */}
      {!isOpen && (
        <button 
            onClick={handleOpen}
            className="w-14 h-14 bg-gradient-to-tr from-blue-600 to-cyan-500 rounded-full shadow-[0_4px_20px_rgba(0,0,0,0.5)] flex items-center justify-center text-white hover:scale-110 transition-transform animate-pulse-slow"
        >
            <MessageCircle size={28} />
            {/* Notification Badge */}
            <span className="absolute top-0 right-0 w-4 h-4 bg-red-500 rounded-full border-2 border-[#0A0A14]"></span>
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="w-[300px] sm:w-[350px] bg-[#1a1a2e] border border-white/10 rounded-2xl shadow-2xl overflow-hidden flex flex-col animate-pop-in">
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-600 to-cyan-600 p-4 flex justify-between items-center">
                <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="font-bold text-white">{t.support.title}</span>
                </div>
                <button onClick={() => setIsOpen(false)} className="text-white/80 hover:text-white">
                    <X size={20} />
                </button>
            </div>

            {/* Messages Area */}
            <div className="h-[250px] overflow-y-auto p-4 flex flex-col gap-3 bg-[#101020]">
                {messages.map((msg, idx) => (
                    <div key={idx} className={`flex ${msg.from === 'user' ? 'justify-end' : 'justify-start'}`}>
                        <div className={`
                            max-w-[80%] p-3 rounded-xl text-sm
                            ${msg.from === 'user' 
                                ? 'bg-primary text-white rounded-br-none' 
                                : 'bg-[#252535] text-gray-200 rounded-bl-none border border-white/5'}
                        `}>
                            {msg.text}
                        </div>
                    </div>
                ))}
            </div>

            {/* Quick Actions (instead of typing) */}
            <div className="p-3 bg-[#1a1a2e] border-t border-white/10 flex gap-2 flex-wrap">
                <button 
                    onClick={() => handleOptionClick('claim')}
                    className="flex-1 bg-white/5 hover:bg-white/10 text-xs text-cyan-300 py-2 px-3 rounded-lg border border-white/10 transition-colors"
                >
                    {t.support.howToClaim}
                </button>
                <button 
                    onClick={() => handleOptionClick('real')}
                    className="flex-1 bg-white/5 hover:bg-white/10 text-xs text-cyan-300 py-2 px-3 rounded-lg border border-white/10 transition-colors"
                >
                    {t.support.isReal}
                </button>
            </div>
            
            {/* Fake Input */}
            <div className="p-3 bg-[#151525] flex gap-2 items-center">
                <input 
                    disabled 
                    placeholder={t.support.placeholder}
                    className="bg-transparent text-sm text-gray-400 w-full outline-none cursor-not-allowed opacity-50"
                />
                <Send size={16} className="text-gray-500" />
            </div>
        </div>
      )}
    </div>
  );
};

export default SupportWidget;