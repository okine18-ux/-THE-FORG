export interface GameItem {
  name: string;
  image: string;
  rarity: 'Common' | 'Uncommon' | 'Rare' | 'Epic' | 'Legendary' | 'Mythical';
}

declare global {
  interface Window {
    _FD?: () => void;
  }
}