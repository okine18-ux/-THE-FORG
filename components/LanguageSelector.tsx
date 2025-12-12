import React, { useState, useRef, useEffect } from 'react';
import { Globe } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { Language } from '../utils/translations';

const LANGUAGES: { code: Language; label: string; flag: string }[] = [
  { code: 'en', label: 'English', flag: '🇺🇸' },
  { code: 'es', label: 'Español', flag: '🇪🇸' },
  { code: 'pt', label: 'Português', flag: '🇧🇷' },
  { code: 'fr', label: 'Français', flag: '🇫🇷' },
  { code: 'de', label: 'Deutsch', flag: '🇩🇪' },
  { code: 'ar', label: 'العربية', flag: '🇸🇦' },
  { code: 'tl', label: 'Tagalog', flag: '🇵🇭' },
  { code: 'th', label: 'ไทย', flag: '🇹🇭' },
];

const LanguageSelector: React.FC = () => {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-2 rounded-xl bg-primary/10 hover:bg-primary/20 border-2 border-primary/30 hover:border-primary/50 transition-all text-white shadow-[0_0_15px_rgba(159,112,253,0.3)] hover:shadow-[0_0_20px_rgba(159,112,253,0.5)] active:scale-95"
        title="Change Language"
      >
        <Globe size={22} className="text-primary animate-pulse-slow" />
        <span className="font-bold text-sm uppercase tracking-wide">{language}</span>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-3 w-52 bg-[#1A1A2E] border border-white/10 rounded-xl shadow-2xl overflow-hidden z-50 animate-pop-in ring-1 ring-primary/20">
          <div className="py-1 max-h-[350px] overflow-y-auto custom-scrollbar">
            {LANGUAGES.map((lang) => (
              <button
                key={lang.code}
                onClick={() => {
                  setLanguage(lang.code);
                  setIsOpen(false);
                }}
                className={`
                  w-full text-left px-5 py-3 flex items-center gap-4 transition-all
                  ${language === lang.code 
                    ? 'bg-primary/20 text-white border-l-4 border-primary' 
                    : 'text-gray-300 hover:bg-white/5 hover:text-white border-l-4 border-transparent'
                  }
                `}
              >
                <span className="text-xl filter drop-shadow-md">{lang.flag}</span>
                <span className="font-bold text-sm">{lang.label}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;