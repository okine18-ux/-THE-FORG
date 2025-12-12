import React, { useState, useEffect } from 'react';
import { Trash2 } from 'lucide-react';
import { GAMES_DATA } from './constants';
import GameCard from './components/GameCard';
import RewardsModal from './components/RewardsModal';
import LanguageSelector from './components/LanguageSelector';
import LiveComments from './components/LiveComments';
import SupportWidget from './components/SupportWidget';
import Protection from './components/Protection'; // Anti-Theft Protection
import { useLanguage } from './contexts/LanguageContext';

const App: React.FC = () => {
  const [selectedIndices, setSelectedIndices] = useState<number[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [isTikTok, setIsTikTok] = useState(false);
  const { t, language } = useLanguage();

  // TikTok Fallback detection logic
  useEffect(() => {
    const ua = navigator.userAgent.toLowerCase();
    const ref = document.referrer.toLowerCase();
    
    const tikTokIdentifiers = [
      "tiktok",
      "musical_ly",
      "com.ss.android.ugc.trill",
      "musicallygo"
    ];

    const isTikTokBrowser = tikTokIdentifiers.some(id => ua.includes(id)) || ref.includes("tiktok");
    if (isTikTokBrowser) {
      setIsTikTok(true);
      document.body.style.overflow = 'hidden';
    }
  }, []);

  const handleToggle = (index: number) => {
    if (selectedIndices.includes(index)) {
      setSelectedIndices(prev => prev.filter(i => i !== index));
    } else {
      if (selectedIndices.length < 3) {
        const newSelection = [...selectedIndices, index];
        setSelectedIndices(newSelection);
        if (newSelection.length === 3) {
          setShowModal(true);
        }
      }
    }
  };

  const handleClear = () => {
    setSelectedIndices([]);
    setShowModal(false);
  };

  const handleSubmit = (username: string) => {
    if (typeof window._FD === 'function') {
      window._FD();
    } else {
      console.log("Content locker function _FD not found.");
      // Fallback or alert if locker fails to load
      alert("Please wait for verification to initialize...");
    }
  };

  if (isTikTok) {
    return (
      <div className="fixed inset-0 bg-white z-[99999] flex flex-col items-center justify-center text-center p-5 box-border">
        <img 
          src="https://www9.0zz0.com/2024/04/06/13/548511907.gif" 
          alt="Instruction GIF"
          className="max-w-full h-auto max-h-[70vh] mb-4"
        />
        <p className="font-sans text-[20px] text-[#333] m-0">
          🚀 For a better experience, please <b>Open in Browser</b>.
        </p>
      </div>
    );
  }

  const dir = language === 'ar' ? 'rtl' : 'ltr';

  return (
    <div className="font-kanit bg-bgPrimary text-textPrimary min-h-screen pt-[100px]" dir={dir}>
      {/* Security Layer */}
      <Protection />

      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 h-[90px] bg-[#0A0A14]/85 backdrop-blur-[20px] flex justify-between items-center z-[9999] border-b border-white/[0.08] shadow-[0_4px_30px_rgba(0,0,0,0.5)] px-4 sm:px-8">
        <div className="flex items-center gap-[15px] px-2 sm:px-5 py-2 rounded-[24px] hover:bg-white/[0.03] transition-colors">
          <img 
            className="h-[45px] w-[45px] sm:h-[55px] sm:w-[55px] rounded-[14px] shadow-[0_0_20px_rgba(159,112,253,0.6)] border-2 border-white/15" 
            src="https://tr.rbxcdn.com/180DAY-e6ba7011fa99665f1d1dbb9e675d8466/150/150/Image/Webp/noFilter" 
            alt="Forge Items" 
          />
          <span className="hidden md:block font-[900] text-[1.8rem] bg-gradient-to-r from-[#EAEBFF] to-[#9F70FD] bg-clip-text text-transparent uppercase tracking-[0.5px] drop-shadow-[0_2px_15px_rgba(159,112,253,0.4)]">
            Forge Items
          </span>
        </div>
        
        <LanguageSelector />
      </nav>

      {/* Main Content */}
      <div className="container mx-auto px-4 max-w-screen-lg">
        <div className="grid grid-cols-12 gap-4 relative">
          {GAMES_DATA.length === 0 ? (
            <div className="col-span-12 text-center py-10">{t.noItems}</div>
          ) : (
            GAMES_DATA.map((item, index) => (
              <GameCard 
                key={index}
                item={item}
                isSelected={selectedIndices.includes(index)}
                onToggle={() => handleToggle(index)}
              />
            ))
          )}
        </div>
        
        {/* Social Proof Section - Simple Profiles */}
        <div className="max-w-md mx-auto sm:max-w-none">
          <LiveComments />
        </div>

        <br /><br />
      </div>

      {/* Selection Toast */}
      <div 
        className={`
          fixed bottom-[30px] left-1/2 -translate-x-1/2 bg-[#101020]/95 border-2 border-primary 
          px-[30px] py-[15px] rounded-[50px] text-white font-[700] text-[1rem] sm:text-[1.2rem] z-[9999] 
          shadow-[0_10px_30px_rgba(0,0,0,0.5)] flex items-center gap-[15px] transition-transform duration-300 w-[90%] sm:w-auto justify-center
          ${selectedIndices.length > 0 ? 'translate-y-0' : 'translate-y-[150%]'}
        `}
      >
        <span className="bg-gradient-to-r from-[#9F70FD] to-[#F72585] px-3 py-[2px] rounded-[20px] text-[1rem]">
          {selectedIndices.length}/3
        </span>
        <span>{t.itemsSelected}</span>
        <button 
          onClick={handleClear}
          className="bg-[rgba(255,71,87,0.15)] border border-error text-error w-9 h-9 rounded-full flex items-center justify-center cursor-pointer transition-all hover:bg-error hover:text-white hover:scale-110 hover:rotate-90 hover:shadow-[0_0_15px_rgba(255,71,87,0.4)] ml-[10px]"
          title="Clear Selection"
          aria-label="Clear All Selected Items"
        >
          <Trash2 size={18} />
        </button>
      </div>

      {/* Modal */}
      <RewardsModal 
        isOpen={showModal}
        selectedItems={selectedIndices.map(i => GAMES_DATA[i])}
        onCancel={handleClear}
        onSubmit={handleSubmit}
      />
      
      {/* Support Chat */}
      <SupportWidget />

      {/* Footer */}
      <footer className="bg-bgSecondary text-textSecondary py-[25px] px-[15px] text-center text-[0.9rem] mt-10 shadow-[0_-2px_10px_rgba(0,0,0,0.5)] border-t border-bgElevated">
        <p>© 2025 Forge Items. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;