import React, { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { User } from 'lucide-react';

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

  // Realistic comments mix
  const getMessages = () => {
    let msgs = [
      { msg: "omg i actually got the Angel unit!!!", type: 'chat' },
      { msg: "how do i verify??", type: 'question' },
      { msg: "Just complete the task, it works", type: 'chat' },
      { msg: "Claimed 5 Million", type: 'drop', item: "5 Million" },
      { msg: "is this real?", type: 'question' },
      { msg: "yes i just got my code instantly", type: 'chat' },
      { msg: "where is the code sent?", type: 'question' },
      { msg: "Claimed 100 Reroll Race", type: 'drop', item: "100 Reroll Race" }
    ];

    if (language === 'es') {
      msgs = [
        { msg: "dios mio consegui a Angel!!", type: 'chat' },
        { msg: "¿cómo verifico?", type: 'question' },
        { msg: "Reclamó 5 Millones", type: 'drop', item: "5 Million" },
        { msg: "es real esto?", type: 'question' },
        { msg: "si, me llego el codigo al toque", type: 'chat' },
      ];
    } else if (language === 'tl') {
      msgs = [
        { msg: "omg nakuha ko talaga yung Angel!!!", type: 'chat' },
        { msg: "pano mag verify guys?", type: 'question' },
        { msg: "Na-claim ang 5 Million", type: 'drop', item: "5 Million" },
        { msg: "totoo ba to?", type: 'question' },
        { msg: "oo nakuha ko agad items ko", type: 'chat' },
      ];
    } else if (language === 'ar') {
      msgs = [
        { msg: "يا إلهي حصلت على وحدة Angel!!!", type: 'chat' },
        { msg: "كيف أتحقق؟", type: 'question' },
        { msg: "تم استلام 5 مليون", type: 'drop', item: "5 Million" },
        { msg: "هل هذا حقيقي؟", type: 'question' },
        { msg: "نعم وصلني الرمز فوراً", type: 'chat' },
      ];
    } else if (language === 'th') {
      msgs = [
        { msg: "ได้ Angel จริงๆ ด้วย!!", type: 'chat' },
        { msg: "ยืนยันตัวตนยังไง?", type: 'question' },
        { msg: "ได้รับ 5 ล้านเพชร", type: 'drop', item: "5 Million" },
        { msg: "จริงไหมเนี่ย?", type: 'question' },
        { msg: "จริงครับ เพิ่งได้รหัสมา", type: 'chat' },
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
            message: "Codes are sent to your dashboard after verification.",
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
      
      <div className="flex flex-col gap-3 h-[220px] overflow-hidden relative">
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
    </div>
  );
};

export default LiveComments;