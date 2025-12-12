import React, { useState, useEffect } from 'react';
import { GameItem } from '../types';
import { ShieldCheck, Lock, UserCheck, Loader2, CheckCircle2 } from 'lucide-react';
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

  // Reset state when modal opens
  useEffect(() => {
    if (isOpen) {
      setStep('input');
      setUsername('');
    }
  }, [isOpen]);

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
    }, 1500);
  };

  const handleFinalVerify = () => {
    onSubmit(username);
  };

  return (
    <div className="fixed inset-0 bg-black/95 backdrop-blur-md z-[100000] flex flex-col justify-center items-center animate-[opacity_0.3s_ease] overflow-y-auto py-10">
      
      {/* STEP 1: INPUT USERNAME */}
      {step === 'input' && (
        <div className="w-[95%] max-w-[700px] text-center animate-pop-in relative">
          
          <div className="text-[1.8rem] sm:text-[2.5rem] font-[900] text-white uppercase mb-5 sm:mb-10 text-shadow-lg drop-shadow-[0_0_20px_rgba(255,255,255,0.2)]" style={{ WebkitTextStroke: '1px black' }}>
            {t.rewardsSelected}
          </div>
          
          <div className="flex justify-center gap-5 mb-10 flex-wrap">
            {selectedItems.map((item, idx) => (
              <div key={idx} className="bg-[#252525] border-[3px] border-[#555] rounded-[15px] p-[10px] sm:p-[15px] w-[100px] sm:w-[140px] flex flex-col items-center relative shadow-[0_10px_20px_rgba(0,0,0,0.5)]">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-[70px] h-[70px] sm:w-[90px] sm:h-[90px] object-cover rounded-[10px] mb-[10px] border-2 border-[#333]"
                />
                <div className="bg-gradient-to-b from-blue-500 to-blue-700 text-white font-[800] text-[0.7rem] sm:text-[0.85rem] px-2 py-1 rounded-[5px] mt-[5px] w-full border-2 border-blue-900 shadow-sm whitespace-nowrap overflow-hidden text-ellipsis">
                  {item.name}
                </div>
              </div>
            ))}
          </div>

          {/* Input Section */}
          <div className="mb-[30px] flex justify-center relative">
            <input 
              id="username-input"
              type="text" 
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full max-w-[450px] bg-white border-4 border-black rounded-xl p-3 sm:p-[15px] text-[1.1rem] sm:text-[1.4rem] font-[900] text-center font-kanit shadow-[0_6px_0_rgba(0,0,0,0.3)] uppercase placeholder-[#bbb] focus:outline-none focus:border-secondary focus:-translate-y-[2px] focus:shadow-[0_8px_0_rgba(0,0,0,0.3)] transition-transform"
              placeholder={t.enterUsername}
              aria-label="Enter your username"
              autoFocus
            />
          </div>

          <div className="flex justify-center gap-5">
            <button 
              onClick={onCancel}
              className="py-3 w-[130px] sm:w-[160px] border-none rounded-xl text-[1.1rem] sm:text-[1.3rem] font-[900] text-white uppercase cursor-pointer text-shadow-md font-kanit relative bg-gradient-to-b from-[#ff6b6b] to-[#ee5253] shadow-[0_6px_0_#b33939] active:translate-y-[6px] active:shadow-none transition-transform"
            >
              {t.cancel}
            </button>
            <button 
              onClick={handleUsernameSubmit}
              className="py-3 w-[130px] sm:w-[160px] border-none rounded-xl text-[1.1rem] sm:text-[1.3rem] font-[900] text-white uppercase cursor-pointer text-shadow-md font-kanit relative bg-gradient-to-b from-[#55efc4] to-[#00b894] shadow-[0_6px_0_#008c70] active:translate-y-[6px] active:shadow-none transition-transform"
            >
              {t.next}
            </button>
          </div>
        </div>
      )}

      {/* STEP 2: PROCESSING */}
      {step === 'processing' && (
        <div className="text-center animate-pop-in">
          <Loader2 className="w-20 h-20 text-primary animate-spin mx-auto mb-6" />
          <h2 className="text-2xl font-bold text-white mb-2">{t.connecting}</h2>
          <p className="text-textSecondary">{t.reserving} <span className="text-success font-bold">{username}</span></p>
        </div>
      )}

      {/* STEP 3: PSYCHOLOGICAL VERIFICATION */}
      {step === 'verify' && (
        <div className="w-[95%] max-w-[600px] bg-bgElevated border border-white/10 rounded-2xl p-6 sm:p-8 animate-pop-in shadow-[0_0_50px_rgba(159,112,253,0.3)] relative overflow-hidden">
          {/* Decorative background glow */}
          <div className="absolute -top-20 -right-20 w-40 h-40 bg-secondary blur-[80px] opacity-20 pointer-events-none"></div>
          
          <div className="flex flex-col items-center text-center">
            <div className="bg-success/20 p-4 rounded-full mb-6 border border-success/50 shadow-[0_0_20px_rgba(46,213,115,0.3)]">
               <ShieldCheck className="w-12 h-12 text-success" />
            </div>

            <h2 className="text-2xl sm:text-3xl font-[900] text-white uppercase mb-2">
              {t.almostThere} <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">{username}</span>!
            </h2>
            
            <div className="bg-bgSecondary/50 rounded-lg p-4 w-full mb-6 border border-white/5">
              <div className="flex items-center gap-3 text-left mb-2">
                <CheckCircle2 className="w-5 h-5 text-success shrink-0" />
                <span className="text-sm sm:text-base text-gray-300">{t.successReserved}</span>
              </div>
              <div className="flex items-center gap-3 text-left">
                <CheckCircle2 className="w-5 h-5 text-success shrink-0" />
                <span className="text-sm sm:text-base text-gray-300">{t.accountConnected}</span>
              </div>
            </div>

            <p className="text-textSecondary mb-6 text-sm sm:text-base leading-relaxed">
              {t.antiBotDescription}
              <br/><br/>
              <span className="text-white font-semibold">{t.safePlatform}</span> 
              {" "} {t.sentInstantly}
            </p>

            <div className="w-full bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-3 mb-8 flex items-start gap-3 text-left">
               <Lock className="w-5 h-5 text-yellow-500 shrink-0 mt-0.5" />
               <p className="text-xs text-yellow-200/80">
                 {t.noPassword}
               </p>
            </div>

            <button 
              onClick={handleFinalVerify}
              className="w-full py-4 rounded-xl text-xl font-[900] text-white uppercase tracking-wider relative overflow-hidden group shadow-[0_0_20px_rgba(46,213,115,0.4)] transition-all hover:scale-[1.02]"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-success to-emerald-600"></div>
              <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.3)_50%,transparent_75%)] bg-[length:250%_250%] animate-[shimmer_2s_infinite]"></div>
              <span className="relative z-10 flex items-center justify-center gap-2">
                <UserCheck className="w-6 h-6" />
                {t.verifyClaim}
              </span>
            </button>
            
            <button onClick={onCancel} className="mt-4 text-sm text-gray-500 hover:text-white transition-colors">
              {t.cancelRelease}
            </button>
          </div>
        </div>
      )}

    </div>
  );
};

export default RewardsModal;