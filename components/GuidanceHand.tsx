import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Hand } from 'lucide-react';

interface GuidanceHandProps {
  step: 'select' | 'claim' | 'fill' | 'none';
}

const GuidanceHand: React.FC<GuidanceHandProps> = ({ step }) => {
  const { t, language } = useLanguage();

  if (step === 'none') return null;

  // Determine positions based on step
  let positionClasses = "";
  let text = "";
  let rotation = 0;

  // Right to left adjustment
  const isRtl = language === 'ar';

  if (step === 'select') {
    // Pointing at the first item
    positionClasses = isRtl ? "top-[280px] right-[15%]" : "top-[280px] left-[15%]";
    text = t.guidance.select;
    rotation = 180; // Point down
  } else if (step === 'claim') {
    // Pointing at the bottom toast
    positionClasses = "bottom-[110px] left-1/2 -translate-x-1/2";
    text = t.guidance.clickBelow;
    rotation = 180; // Point down
  } else if (step === 'fill') {
    // Logic handled inside modal for z-index reasons, but if used:
    return null; 
  }

  return (
    <div className={`fixed ${positionClasses} z-[9000] pointer-events-none flex flex-col items-center animate-bounce duration-1000`}>
       <div className="bg-primary text-white text-sm font-bold px-3 py-1 rounded-full shadow-[0_0_15px_rgba(159,112,253,0.6)] mb-2 whitespace-nowrap uppercase tracking-wide border border-white/20">
         {text}
       </div>
       {/* Styled Vector Hand */}
       <div className="filter drop-shadow-[0_0_10px_rgba(247,37,133,0.5)]">
         <Hand 
            size={64} 
            className="text-primary fill-primary/20" 
            style={{ transform: `rotate(${rotation}deg)` }}
            strokeWidth={1.5}
         />
       </div>
    </div>
  );
};

export default GuidanceHand;