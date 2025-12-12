import React, { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { User, Star } from 'lucide-react';

interface Comment {
  id: number;
  user: string;
  message: string;
  time: string;
  type: 'drop' | 'chat' | 'question';
  item?: string;
  isAdmin?: boolean;
}

const USERNAMES = [
  "BloxKing_99", "Sarah_Plays", "NoobSlayer", "AnimeGod_X", "FreeUnitHunter", 
  "GojoFan22", "RerollMaster", "CuteGamerGirl", "ShadowNinja", "ProGamer123",
  "RobloxLegend", "UnitHunter99", "GamerBoy_2024", "Kai_Cenat_Fan"
];

const ADMIN_NAME = "System_Mod";

const LiveComments: React.FC = () => {
  const { t, language } = useLanguage();
  const [comments, setComments] = useState<Comment[]>([]);
  const [onlineCount, setOnlineCount] = useState(245);

  // Fluctuating realistic online count
  useEffect(() => {
    const interval = setInterval(() => {
      setOnlineCount(prev => {
        const change = Math.floor(Math.random() * 7) - 3; // -3 to +3
        const newValue = prev + change;
        return newValue < 180 ? 180 : newValue > 420 ? 420 : newValue;
      });
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Realistic comments mix with new "gift" and "items" vocabulary
  const getMessages = () => {
    let msgs = [
      { msg: "omg i actually got my gift!!!", type: 'chat' },
      { msg: "how do i get the items?", type: 'question' },
      { msg: "Just check below and follow steps", type: 'chat' },
      { msg: "Claimed 5 Million", type: 'drop', item: "5 Million" },
      { msg: "is this items in my page real?", type: 'question' },
      { msg: "yes i just got the items in my page instantly", type: 'chat' },
      { msg: "where is the gift sent?", type: 'question' },
      { msg: "Claimed 100 Reroll Race", type: 'drop', item: "100 Reroll Race" }
    ];

    if (language === 'es') {
      msgs = [
        { msg: "dios mio consegui mi regalo!!", type: 'chat' },
        { msg: "¿cómo obtengo los items?", type: 'question' },
        { msg: "Reclamó 5 Millones", type: 'drop', item: "5 Million" },
        { msg: "es real esto?", type: 'question' },
        { msg: "si, me llegaron los items de la pagina", type: 'chat' },
      ];
    } else if (language === 'tl') {
      msgs = [
        { msg: "omg nakuha ko talaga yung gift!!!", type: 'chat' },
        { msg: "pano kunin yung items?", type: 'question' },
        { msg: "Na-claim ang 5 Million", type: 'drop', item: "5 Million" },
        { msg: "totoo ba items sa page na to?", type: 'question' },
        { msg: "oo nakuha ko agad items ko", type: 'chat' },
      ];
    } else if (language === 'ar') {
      msgs = [
        { msg: "يا إلهي حصلت على هديتي!!!", type: 'chat' },
        { msg: "كيف أحصل على العناصر؟", type: 'question' },
        { msg: "تم استلام 5 مليون", type: 'drop', item: "5 Million" },
        { msg: "هل هذه العناصر في صفحتي حقيقية؟", type: 'question' },
        { msg: "نعم وصلتني العناصر فوراً", type: 'chat' },
      ];
    } else if (language === 'th') {
      msgs = [
        { msg: "ได้ของขวัญจริงๆ ด้วย!!", type: 'chat' },
        { msg: "รับไอเทมยังไง?", type: 'question' },
        { msg: "ได้รับ 5 ล้านเพชร", type: 'drop', item: "5 Million" },
        { msg: "ไอเทมในหน้านี้จริงไหม?", type: 'question' },
        { msg: "จริงครับ เพิ่งได้ของมาเลย", type: 'chat' },
      ];
    }
    
    return msgs;
  };

  useEffect(() => {
    // Initial population
    const initialComments: Comment[] = [];
    for(let i=0; i<4; i++) {
        addRandomComment(initialComments);
    }
    setComments(initialComments);

    const interval = setInterval(() => {
      setComments(prev => {
        const newComments = [...prev];
        if (newComments.length > 5) newComments.shift(); // Keep list short
        addRandomComment(newComments);
        return newComments;
      });
    }, 2800); // New comment every ~3 seconds

    return () => clearInterval(interval);
  }, [language]);

  const addRandomComment = (arr: Comment[]) => {
    const msgs = getMessages();
    const randomMsg = msgs[Math.floor(Math.random() * msgs.length)];
    
    // Sometimes add a mod reply to a question
    const isModReply = Math.random() > 0.85;

    if (isModReply) {
        arr.push({
            id: Date.now() + Math.random(),
            user: ADMIN_NAME,
            message: "Gifts are sent to your account automatically.",
            time: "just now",
            type: 'chat',
            isAdmin: true
        });
        return;
    }

    const randomUser = USERNAMES[Math.floor(Math.random() * USERNAMES.length)];
    
    arr.push({
      id: Date.now() + Math.random(),
      user: randomUser,
      message: randomMsg.msg,
      time: "just now",
      type: randomMsg.type as any,
      item: randomMsg.item
    });
  };

  return (
    <div className="w-full bg-[#0A0A14] border-t border-white/10 p-4 mt-8 rounded-xl shadow-lg">
      <div className="flex items-center gap-2 mb-4">
        <div className="w-3 h-3 rounded-full bg-success animate-pulse"></div>
        <h3 className="font-kanit font-bold text-white uppercase tracking-wider text-sm sm:text-base">{t.liveFeedTitle}</h3>
        <div className="ml-auto flex items-center gap-1 bg-white/5 px-2 py-1 rounded-lg">
            <User size={12} className="text-textSecondary" />
            <span className="text-xs text-textSecondary font-mono">{onlineCount} {t.onlineUsers}</span>
        </div>
      </div>
      
      <div className="flex flex-col gap-3 h-[220px] overflow-hidden relative mb-2">
        {/* Fade overlay */}
        <div className="absolute top-0 left-0 right-0 h-10 bg-gradient-to-b from-[#0A0A14] to-transparent z-10 pointer-events-none"></div>
        
        {comments.slice().reverse().map((comment) => (
          <div key={comment.id} className="flex gap-3 animate-pop-in items-start">
            {/* Simple Generic Profile Icon */}
            <div className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 ${comment.isAdmin ? 'bg-error/20 border border-error' : 'bg-white/10 border border-white/10'}`}>
                <User size={18} className={comment.isAdmin ? 'text-error' : 'text-gray-400'} />
            </div>

            <div className="flex flex-col min-w-0">
               <div className="flex items-center gap-2 flex-wrap">
                 <span className={`font-bold text-xs sm:text-sm ${
                    comment.isAdmin ? 'text-error' : 
                    comment.type === 'drop' ? 'text-secondary' : 'text-primary'
                 }`}>
                    {comment.user}
                    {comment.isAdmin && <span className="ml-1 text-[10px] bg-error text-white px-1 rounded">MOD</span>}
                 </span>
                 <span className="text-[10px] text-textSecondary">{comment.time}</span>
               </div>
               
               {comment.type === 'drop' ? (
                 <div className="text-xs text-white">
                    Successfully claimed <span className="text-success font-bold">{comment.item}</span>
                 </div>
               ) : (
                 <div className={`text-xs ${comment.type === 'question' ? 'text-yellow-200/80 italic' : 'text-gray-300'}`}>
                   {comment.message}
                 </div>
               )}
            </div>
          </div>
        ))}
      </div>

      {/* User Rating Section */}
      <div className="mt-4 pt-3 border-t border-white/10 flex flex-col items-center justify-center gap-1 animate-pulse-slow">
         <div className="flex gap-1">
            {[1,2,3,4,5].map(i => <Star key={i} size={16} className="text-yellow-400 fill-yellow-400" />)}
         </div>
         <div className="text-xs text-textSecondary font-medium font-kanit">
           Rated <span className="text-white font-bold">4.9/5</span> by users
         </div>
      </div>
    </div>
  );
};

export default LiveComments;