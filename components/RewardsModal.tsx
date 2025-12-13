import React, { useState, useEffect } from 'react';
import { GameItem } from '../types';
import { ShieldCheck, Lock, User, Loader2, Check, UserCheck } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface RewardsModalProps {
  isOpen: boolean;
  selectedItems: GameItem[];
  onCancel: () => void;
  onSubmit: (username: string) => void;
}

const RewardsModal: React.FC<RewardsModalProps> = ({ isOpen, selectedItems, onCancel, onSubmit }) => {
  const { t } = useLanguage();
  const [username, setUsername] = useState('');
  const [step, setStep] = useState<'input' | 'processing' | 'verify'>('input');
  const [progress, setProgress] = useState(0);

  // Reset state when modal opens
  useEffect(() => {
    if (isOpen) {
      setStep('input');
      setUsername('');
      setProgress(0);
    }
  }, [isOpen]);

  // Animate progress bar in verify step
  useEffect(() => {
    if (step === 'verify') {
      const timer = setTimeout(() => setProgress(98), 100);
      return () => clearTimeout(timer);
    }
  }, [step]);

  if (!isOpen) return null;

  const handleUsernameSubmit = () => {
    if (!username.trim()) {
      const input = document.getElementById('username-input');
      input?.focus();
      return;
    }
    
    setStep('processing');
    setTimeout(() => {
      setStep('verify');
    }, 2000); // Slightly longer for dramatic effect
  };

  const handleFinalVerify = () => {
    onSubmit(username);
  };

  return (
    <div className="fixed inset-0 bg-[#000000]/95 backdrop-blur-[10px] z-[100000] flex flex-col justify-center items-center animate-[opacity_0.3s_ease] overflow-y-auto py-10 px-4">
      
      {/* STEP 1: INPUT USERNAME */}
      {step === 'input' && (
        <div className="w-full max-w-[600px] text-center animate-pop-in relative bg-[#0A0A14] border-2 border-primary/20 rounded-[30px] p-6 sm:p-10 shadow-[0_0_50px_rgba(159,112,253,0.15)]">
          
          <h2 className="text-[1.8rem] sm:text-[2.2rem] font-medium bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent mb-8 tracking-wide">
            {t.rewardsSelected}
          </h2>
          
          <div className="flex justify-center gap-4 mb-8 flex-wrap">
            {selectedItems.map((item, idx) => (
              <div key={idx} className="bg-[#151525] border border-white/10 rounded-2xl p-3 w-[100px] sm:w-[120px] flex flex-col items-center relative shadow-lg transform hover:scale-105 transition-transform">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-[60px] h-[60px] sm:w-[80px] sm:h-[80px] object-cover rounded-xl mb-2 border border-white/5"
                />
                <div className="bg-primary/10 text-primary font-normal text-[0.65rem] sm:text-[0.75rem] px-2 py-1 rounded-[6px] w-full border border-primary/20 whitespace-nowrap overflow-hidden text-ellipsis">
                  {item.name}
                </div>
              </div>
            ))}
          </div>

          {/* Input Section */}
          <div className="mb-8 flex justify-center relative flex-col items-center gap-2">
            <label className="text-gray-400 text-sm font-normal tracking-wide mb-1">{t.enterUsername}</label>
            <input 
              id="username-input"
              type="text" 
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full max-w-[400px] bg-white border-2 border-gray-300 focus:border-primary rounded-xl p-4 text-xl font-normal text-black text-center font-sans shadow-none placeholder-gray-400 outline-none transition-all"
              placeholder="Username"
            />
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button 
              onClick={onCancel}
              className="py-4 px-8 rounded-2xl text-lg font-normal text-gray-400 hover:text-white hover:bg-white/5 transition-colors tracking-wide"
            >
              {t.cancel}
            </button>
            <button 
              onClick={handleUsernameSubmit}
              className="flex-1 py-4 px-8 bg-gradient-to-r from-primary to-secondary text-white rounded-2xl text-xl font-medium shadow-[0_10px_30px_rgba(159,112,253,0.4)] hover:shadow-[0_10px_40px_rgba(247,37,133,0.5)] transition-all transform hover:-translate-y-1 active:scale-95 border border-white/20 relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              {t.next}
            </button>
          </div>
        </div>
      )}

      {/* STEP 2: PROCESSING */}
      {step === 'processing' && (
        <div className="text-center animate-pop-in p-10 bg-[#0A0A14] border border-white/5 rounded-[30px] shadow-2xl max-w-sm w-full">
          <div className="relative mb-8 inline-block">
            <div className="absolute inset-0 bg-primary blur-[40px] opacity-40 rounded-full animate-pulse"></div>
            <Loader2 className="w-20 h-20 text-white animate-spin relative z-10" />
            <User className="w-8 h-8 text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20" />
          </div>
          <h2 className="text-2xl font-medium text-white mb-2 tracking-wide">{t.connecting}</h2>
          <div className="h-1 w-32 bg-gray-800 rounded-full mx-auto overflow-hidden mt-4">
            <div className="h-full bg-gradient-to-r from-primary to-secondary w-full animate-[shimmer_1.5s_infinite_linear] -translate-x-full"></div>
          </div>
        </div>
      )}

      {/* STEP 3: FINAL VERIFICATION */}
      {step === 'verify' && (
        <div className="w-full max-w-[500px] bg-[#0F0F1A] border-2 border-primary/30 rounded-[25px] animate-pop-in shadow-[0_0_60px_rgba(159,112,253,0.25)] relative overflow-hidden font-kanit">
          
          {/* Header */}
          <div className="bg-[#151525] p-6 border-b border-white/5 relative overflow-hidden">
             <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10"></div>
             <div className="relative z-10 flex justify-between items-end">
                <div>
                   <h3 className="text-white font-medium text-xl sm:text-2xl tracking-wide leading-none">{t.almostThere}</h3>
                   <p className="text-gray-400 text-sm mt-2 font-normal">Action Required</p>
                </div>
                <div className="text-secondary font-medium text-3xl">98%</div>
             </div>
             {/* Progress Bar */}
             <div className="h-3 bg-[#0A0A14] rounded-full mt-4 overflow-hidden border border-white/5">
                <div 
                    className="h-full bg-gradient-to-r from-primary to-secondary relative"
                    style={{ width: `${progress}%`, transition: 'width 1s ease-out' }}
                >
                    <div className="absolute inset-0 bg-white/30 w-full animate-[shimmer_1s_infinite]"></div>
                </div>
             </div>
          </div>

          <div className="p-6 sm:p-8 flex flex-col gap-6">
            
            {/* User Info Card */}
            <div className="flex items-center gap-4 bg-[#1A1A2E] rounded-2xl p-4 border border-white/5 shadow-inner">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center shrink-0 border-2 border-white/10 shadow-lg relative">
                    <User className="text-white w-7 h-7" />
                    <div className="absolute -bottom-1 -right-1 bg-secondary rounded-full p-1 border border-[#1A1A2E]">
                        <Lock className="w-3 h-3 text-white" />
                    </div>
                </div>
                <div className="flex-1 min-w-0">
                    <div className="text-white font-medium text-lg leading-tight truncate">{username}</div>
                    <div className="flex items-center gap-2 mt-1">
                        <span className="w-2 h-2 rounded-full bg-success animate-pulse"></span>
                        <span className="text-success text-sm font-normal tracking-wide">{t.accountConnected}</span>
                    </div>
                </div>
            </div>

            <div className="text-center px-2">
                <p className="text-gray-300 text-sm leading-relaxed font-normal">
                    {t.antiBotDescription}
                </p>
            </div>

            {/* MAIN CTA BUTTON */}
            <div className="relative group mt-2">
                <button 
                  onClick={handleFinalVerify}
                  className="w-full py-5 rounded-2xl text-xl font-medium text-white bg-gradient-to-r from-primary to-secondary hover:brightness-110 transition-all shadow-[0_0_30px_rgba(159,112,253,0.5)] hover:shadow-[0_0_50px_rgba(247,37,133,0.6)] active:scale-[0.98] flex items-center justify-center gap-3 relative overflow-hidden border-2 border-white/20 animate-pulse-slow"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    <UserCheck className="w-7 h-7" />
                    {t.verifyClaim}
                  </span>
                  {/* Glossy Effect */}
                  <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent opacity-50"></div>
                </button>
            </div>
            
            <button 
                onClick={onCancel} 
                className="mt-2 text-center text-xs text-gray-500 hover:text-white transition-colors tracking-wide font-normal"
            >
              {t.cancelRelease}
            </button>
          </div>
        </div>
      )}

    </div>
  );
};

export default RewardsModal;