import React from 'react';
import { GameItem } from '../types';
import { CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface GameCardProps {
  item: GameItem;
  isSelected: boolean;
  onToggle: () => void;
}

const GameCard: React.FC<GameCardProps> = ({ item, isSelected, onToggle }) => {
  const { t } = useLanguage();

  const getRarityStyles = (rarity: string) => {
    switch (rarity) {
      case 'Common': return 'bg-[#A0A3C2] text-[#1A1A2E] border-white';
      case 'Uncommon': return 'bg-[#2ed573] text-black border-white';
      case 'Rare': return 'bg-[#1e90ff] text-white border-[#8ecae6]';
      case 'Epic': return 'bg-[#9F70FD] text-white border-[#EAEBFF] shadow-[0_0_10px_rgba(159,112,253,0.4)]';
      case 'Legendary': return 'bg-gradient-to-br from-[#FFD700] to-[#FFA500] text-black border-white shadow-[0_0_10px_rgba(255,215,0,0.5)]';
      case 'Mythical': return 'bg-[linear-gradient(45deg,#FF0000,#FF00FF,#00FFFF)] bg-[length:200%_200%] animate-mythic text-white border-white shadow-[0_0_15px_rgba(255,0,255,0.6)]';
      default: return 'bg-gray-500';
    }
  };

  const translatedRarity = t.rarity[item.rarity as keyof typeof t.rarity] || item.rarity;

  return (
    <div className="col-span-6 md:col-span-4 lg:col-span-3 flex">
      <div 
        onClick={onToggle}
        role="button"
        tabIndex={0}
        aria-label={`Select ${item.name}`}
        onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                onToggle();
            }
        }}
        className={`
          flex-fill relative text-center p-5 bg-bgSecondary rounded-[1.125rem] 
          shadow-[0_0.5rem_1rem_0_rgba(0,0,0,0.4)] my-[15px] cursor-pointer 
          transition-all duration-200 ease-in-out border-[3px] overflow-hidden group w-full
          ${isSelected 
            ? 'border-success shadow-[0_0_25px_#2ed573] -translate-y-[5px]' 
            : 'border-bgElevated hover:-translate-y-[3px]'
          }
        `}
      >
        <div className={`
          absolute top-2 left-2 text-[0.7rem] font-[800] px-2 py-[3px] rounded-md 
          uppercase z-10 shadow-[0_2px_8px_rgba(0,0,0,0.6)] tracking-[0.5px] 
          pointer-events-none text-shadow-sm
          ${getRarityStyles(item.rarity)}
        `}>
          {translatedRarity}
        </div>

        {isSelected && (
          <CheckCircle2 className="absolute top-2.5 right-2.5 text-success w-6 h-6 fill-current" />
        )}

        <div className="relative mb-[10px]">
          <img 
            src={item.image} 
            alt={item.name}
            className="w-[100px] h-[100px] sm:w-[130px] sm:h-[130px] object-cover rounded-[1.125rem] border-[3px] border-bgElevated mx-auto pointer-events-none"
            onError={(e) => {
              e.currentTarget.src = 'https://placehold.co/130x130/1A1A2E/A0A3C2?text=ITEM';
            }}
          />
        </div>
        
        <div className="text-textPrimary text-[1rem] sm:text-[1.2rem] mt-[10px] font-bold whitespace-nowrap overflow-hidden text-ellipsis">
          {item.name}
        </div>
      </div>
    </div>
  );
};

export default GameCard;