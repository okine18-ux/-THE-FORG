export type Language = 'en' | 'es' | 'pt' | 'fr' | 'de' | 'ar' | 'tl' | 'th';

export interface Translation {
  itemsSelected: string;
  noItems: string;
  rewardsSelected: string;
  enterUsername: string;
  cancel: string;
  submit: string;
  next: string;
  connecting: string;
  reserving: string;
  almostThere: string;
  successReserved: string;
  accountConnected: string;
  antiBotDescription: string;
  safePlatform: string;
  sentInstantly: string;
  noPassword: string;
  verifyClaim: string;
  cancelRelease: string;
  liveFeedTitle: string;
  onlineUsers: string;
  support: {
    title: string;
    welcome: string;
    howToClaim: string;
    isReal: string;
    howToAnswer: string;
    isRealAnswer: string;
    placeholder: string;
  };
  guidance: {
    select: string;
    clickBelow: string;
    fillHere: string;
  };
  rarity: {
    Common: string;
    Uncommon: string;
    Rare: string;
    Epic: string;
    Legendary: string;
    Mythical: string;
  };
}

export const translations: Record<Language, Translation> = {
  en: {
    itemsSelected: "Items Selected",
    noItems: "No items found.",
    rewardsSelected: "REWARDS SELECTED",
    enterUsername: "ENTER YOUR USERNAME",
    cancel: "CANCEL",
    submit: "SUBMIT",
    next: "NEXT",
    connecting: "CONNECTING TO SERVER...",
    reserving: "Reserving items for user:",
    almostThere: "ALMOST THERE,",
    successReserved: "Items successfully reserved.",
    accountConnected: "Account connected securely.",
    antiBotDescription: "To prevent automated bot spam and ensure fair distribution to real players, we require a quick manual verification.",
    safePlatform: "This helps us keep the platform safe and free for everyone.",
    sentInstantly: "Your items will be sent instantly after this final step.",
    noPassword: "No password required. We only verify that you are a human completing a simple task.",
    verifyClaim: "VERIFY & CLAIM ITEMS",
    cancelRelease: "Cancel and release reserved items",
    liveFeedTitle: "LIVE ACTIVITY FEED",
    onlineUsers: "Online Players",
    support: {
      title: "Live Support",
      welcome: "Hi! How can I help you today?",
      howToClaim: "How do I claim items?",
      isReal: "Is this legit?",
      howToAnswer: "Select 3 items from the list, click the bottom bar, and complete the anti-bot verification.",
      isRealAnswer: "Yes! We are sponsored by advertisers. You complete a simple task, and they pay for your items.",
      placeholder: "Ask a question..."
    },
    guidance: {
      select: "Select 3 items",
      clickBelow: "Click here to Claim!",
      fillHere: "Enter Username"
    },
    rarity: {
      Common: "Common",
      Uncommon: "Uncommon",
      Rare: "Rare",
      Epic: "Epic",
      Legendary: "Legendary",
      Mythical: "Mythical"
    }
  },
  es: {
    itemsSelected: "Objetos Seleccionados",
    noItems: "No se encontraron objetos.",
    rewardsSelected: "RECOMPENSAS",
    enterUsername: "INGRESA TU USUARIO",
    cancel: "CANCELAR",
    submit: "ENVIAR",
    next: "SIGUIENTE",
    connecting: "CONECTANDO...",
    reserving: "Reservando objetos para:",
    almostThere: "CASI LISTO,",
    successReserved: "Objetos reservados con éxito.",
    accountConnected: "Cuenta conectada de forma segura.",
    antiBotDescription: "Para evitar el spam de bots y asegurar una distribución justa, requerimos una rápida verificación manual.",
    safePlatform: "Esto nos ayuda a mantener la plataforma segura y gratuita para todos.",
    sentInstantly: "Tus objetos se enviarán al instante tras este paso.",
    noPassword: "No requerimos contraseña. Solo verificamos que eres humano.",
    verifyClaim: "VERIFICAR Y RECLAMAR",
    cancelRelease: "Cancelar y liberar objetos",
    liveFeedTitle: "ACTIVIDAD EN VIVO",
    onlineUsers: "Jugadores en línea",
    support: {
      title: "Soporte en vivo",
      welcome: "¡Hola! ¿En qué puedo ayudarte?",
      howToClaim: "¿Cómo reclamo?",
      isReal: "¿Es real?",
      howToAnswer: "Selecciona 3 objetos, haz clic en la barra inferior y completa la verificación.",
      isRealAnswer: "¡Sí! Los anunciantes pagan por tus objetos cuando completas una tarea simple.",
      placeholder: "Escribe una duda..."
    },
    guidance: {
      select: "Elige 3 objetos",
      clickBelow: "¡Clic para reclamar!",
      fillHere: "Pon tu usuario"
    },
    rarity: {
      Common: "Común",
      Uncommon: "Poco Común",
      Rare: "Raro",
      Epic: "Épico",
      Legendary: "Legendario",
      Mythical: "Mítico"
    }
  },
  pt: {
    itemsSelected: "Itens Selecionados",
    noItems: "Nenhum item encontrado.",
    rewardsSelected: "RECOMPENSAS",
    enterUsername: "DIGITE SEU USUÁRIO",
    cancel: "CANCELAR",
    submit: "ENVIAR",
    next: "PRÓXIMO",
    connecting: "CONECTANDO...",
    reserving: "Reservando itens para:",
    almostThere: "QUASE LÁ,",
    successReserved: "Itens reservados com sucesso.",
    accountConnected: "Conta conectada com segurança.",
    antiBotDescription: "Para evitar spam de bots e garantir distribuição justa, precisamos de uma rápida verificação manual.",
    safePlatform: "Isso nos ajuda a manter a plataforma segura e gratuita para todos.",
    sentInstantly: "Seus itens serão enviados instantaneamente após esta etapa.",
    noPassword: "Sem senha. Apenas verificamos se você é humano.",
    verifyClaim: "VERIFICAR E RESGATAR",
    cancelRelease: "Cancelar e liberar itens",
    liveFeedTitle: "ATIVIDADE AO VIVO",
    onlineUsers: "Jogadores Online",
    support: {
      title: "Suporte Ao Vivo",
      welcome: "Olá! Como posso ajudar?",
      howToClaim: "Como pegar os itens?",
      isReal: "É verdade isso?",
      howToAnswer: "Escolha 3 itens, clique na barra inferior e complete a verificação antibot.",
      isRealAnswer: "Sim! Patrocinadores pagam pelos itens quando você completa a tarefa.",
      placeholder: "Faça uma pergunta..."
    },
    guidance: {
      select: "Escolha 3 itens",
      clickBelow: "Clique para pegar!",
      fillHere: "Seu nick aqui"
    },
    rarity: {
      Common: "Comum",
      Uncommon: "Incomum",
      Rare: "Raro",
      Epic: "Épico",
      Legendary: "Lendário",
      Mythical: "Mítico"
    }
  },
  fr: {
    itemsSelected: "Objets Sélectionnés",
    noItems: "Aucun objet trouvé.",
    rewardsSelected: "RÉCOMPENSES",
    enterUsername: "NOM D'UTILISATEUR",
    cancel: "ANNULER",
    submit: "SOUMETTRE",
    next: "SUIVANT",
    connecting: "CONNEXION...",
    reserving: "Réservation pour:",
    almostThere: "PRESQUE FINI,",
    successReserved: "Objets réservés avec succès.",
    accountConnected: "Compte connecté en toute sécurité.",
    antiBotDescription: "Pour éviter les robots et assurer une distribution équitable, une vérification manuelle est requise.",
    safePlatform: "Cela nous aide à garder la plateforme sûre et gratuite.",
    sentInstantly: "Vos objets seront envoyés instantanément après cette étape.",
    noPassword: "Pas de mot de passe requis. Vérification humaine uniquement.",
    verifyClaim: "VÉRIFIER ET RÉCLAMER",
    cancelRelease: "Annuler et libérer les objets",
    liveFeedTitle: "ACTIVITÉ EN DIRECT",
    onlineUsers: "Joueurs en ligne",
    support: {
      title: "Support en direct",
      welcome: "Salut! Besoin d'aide?",
      howToClaim: "Comment réclamer?",
      isReal: "C'est réel?",
      howToAnswer: "Sélectionnez 3 objets, cliquez en bas et complétez la vérification.",
      isRealAnswer: "Oui! Les sponsors paient vos objets contre une simple tâche.",
      placeholder: "Posez une question..."
    },
    guidance: {
      select: "Choisis 3 objets",
      clickBelow: "Cliquez ici !",
      fillHere: "Votre pseudo"
    },
    rarity: {
      Common: "Commun",
      Uncommon: "Peu Commun",
      Rare: "Rare",
      Epic: "Épique",
      Legendary: "Légendaire",
      Mythical: "Mythique"
    }
  },
  de: {
    itemsSelected: "Ausgewählte Items",
    noItems: "Keine Items gefunden.",
    rewardsSelected: "BELOHNUNGEN",
    enterUsername: "BENUTZERNAME EINGEBEN",
    cancel: "ABBRECHEN",
    submit: "ABSENDEN",
    next: "WEITER",
    connecting: "VERBINDEN...",
    reserving: "Reserviere Items für:",
    almostThere: "FAST GESCHAFFT,",
    successReserved: "Items erfolgreich reserviert.",
    accountConnected: "Konto sicher verbunden.",
    antiBotDescription: "Um Bots zu vermeiden und Fairness zu garantieren, ist eine kurze manuelle Überprüfung erforderlich.",
    safePlatform: "Dies hilft uns, die Plattform sicher und kostenlos zu halten.",
    sentInstantly: "Deine Items werden sofort nach diesem Schritt gesendet.",
    noPassword: "Kein Passwort erforderlich. Nur menschliche Überprüfung.",
    verifyClaim: "ÜBERPRÜFEN & EINFORDERN",
    cancelRelease: "Abbrechen und Items freigeben",
    liveFeedTitle: "LIVE-AKTIVITÄT",
    onlineUsers: "Online-Spieler",
    support: {
      title: "Live-Support",
      welcome: "Hallo! Wie kann ich helfen?",
      howToClaim: "Wie bekomme ich Items?",
      isReal: "Ist das echt?",
      howToAnswer: "Wähle 3 Items, klicke unten und schließe die Verifizierung ab.",
      isRealAnswer: "Ja! Sponsoren bezahlen die Items für eine kleine Aufgabe.",
      placeholder: "Frage stellen..."
    },
    guidance: {
      select: "Wähle 3 Items",
      clickBelow: "Hier klicken!",
      fillHere: "Dein Name"
    },
    rarity: {
      Common: "Gewöhnlich",
      Uncommon: "Ungewöhnlich",
      Rare: "Selten",
      Epic: "Episch",
      Legendary: "Legendär",
      Mythical: "Mythisch"
    }
  },
  ar: {
    itemsSelected: "العناصر المحددة",
    noItems: "لم يتم العثور على عناصر.",
    rewardsSelected: "المكافآت المختارة",
    enterUsername: "أدخل اسم المستخدم",
    cancel: "إلغاء",
    submit: "إرسال",
    next: "التالي",
    connecting: "جاري الاتصال...",
    reserving: "جاري حجز العناصر للمستخدم:",
    almostThere: "أوشكت على الانتهاء،",
    successReserved: "تم حجز العناصر بنجاح.",
    accountConnected: "تم ربط الحساب بأمان.",
    antiBotDescription: "لمنع البرامج التلقائية وضمان التوزيع العادل للاعبين الحقيقيين، نطلب تحققًا يدويًا سريعًا.",
    safePlatform: "هذا يساعدنا في الحفاظ على المنصة آمنة ومجانية للجميع.",
    sentInstantly: "سيتم إرسال عناصرك فورًا بعد هذه الخطوة الأخيرة.",
    noPassword: "لا حاجة لكلمة المرور. نتحقق فقط من أنك إنسان.",
    verifyClaim: "التحقق والمطالبة",
    cancelRelease: "إلغاء وتحرير العناصر",
    liveFeedTitle: "نشاط مباشر",
    onlineUsers: "لاعب متصل",
    support: {
      title: "الدعم المباشر",
      welcome: "مرحباً! كيف يمكنني مساعدتك؟",
      howToClaim: "كيف أحصل على العناصر؟",
      isReal: "هل هذا حقيقي؟",
      howToAnswer: "اختر 3 عناصر، اضغط في الأسفل وأكمل التحقق.",
      isRealAnswer: "نعم! الرعاة يدفعون ثمن العناصر مقابل مهمة بسيطة.",
      placeholder: "اطرح سؤالاً..."
    },
    guidance: {
      select: "اختر 3 عناصر",
      clickBelow: "اضغط هنا!",
      fillHere: "اسم المستخدم"
    },
    rarity: {
      Common: "شائع",
      Uncommon: "غير شائع",
      Rare: "نادر",
      Epic: "ملحمي",
      Legendary: "أسطوري",
      Mythical: "خرافي"
    }
  },
  tl: {
    itemsSelected: "Mga Napiling Item",
    noItems: "Walang nakitang item.",
    rewardsSelected: "MGA NAPILING GANTIMPALA",
    enterUsername: "ILAGAY ANG USERNAME",
    cancel: "KANSELAHIN",
    submit: "IPASA",
    next: "SUNOD",
    connecting: "KONEKTADO SA SERVER...",
    reserving: "Nirereserba ang mga item para kay:",
    almostThere: "MALAPIT NA,",
    successReserved: "Matagumpay na na-reserve ang mga item.",
    accountConnected: "Ligtas na konektado ang account.",
    antiBotDescription: "Upang maiwasan ang mga bot at masiguro ang patas na pamamahagi sa mga tunay na manlalaro, kailangan namin ng mabilis na manu-manong beripikasyon.",
    safePlatform: "Nakatutulong ito upang manatiling ligtas at libre ang platform para sa lahat.",
    sentInstantly: "Ipapadala agad ang iyong mga item pagkatapos ng huling hakbang na ito.",
    noPassword: "Hindi kailangan ng password. Tinitiyak lang namin na tao ka.",
    verifyClaim: "IPERIEPIKA AT KUNIN",
    cancelRelease: "Kanselahin at bitawan ang mga item",
    liveFeedTitle: "LIVE ACTIVITY FEED",
    onlineUsers: "Online na Manlalaro",
    support: {
      title: "Live Support",
      welcome: "Hi! Anong maitutulong ko?",
      howToClaim: "Paano kumuha?",
      isReal: "Totoo ba to?",
      howToAnswer: "Pumili ng 3 item, i-click ang nasa baba, at tapusin ang verification.",
      isRealAnswer: "Oo! Binabayaran ng sponsors ang items mo kapalit ng task.",
      placeholder: "Magtanong..."
    },
    guidance: {
      select: "Pumili ng 3",
      clickBelow: "I-click ito!",
      fillHere: "Username mo"
    },
    rarity: {
      Common: "Karaniwan",
      Uncommon: "Di-karaniwan",
      Rare: "Bihira",
      Epic: "Epiko",
      Legendary: "Maalamat",
      Mythical: "Mitikal"
    }
  },
  th: {
    itemsSelected: "รายการที่เลือก",
    noItems: "ไม่พบรายการ",
    rewardsSelected: "รางวัลที่เลือก",
    enterUsername: "ใส่ชื่อผู้ใช้",
    cancel: "ยกเลิก",
    submit: "ยืนยัน",
    next: "ถัดไป",
    connecting: "กำลังเชื่อมต่อ...",
    reserving: "กำลังจองไอเทมสำหรับ:",
    almostThere: "เกือบเสร็จแล้ว,",
    successReserved: "จองไอเทมสำเร็จ",
    accountConnected: "เชื่อมต่อบัญชีอย่างปลอดภัย",
    antiBotDescription: "เพื่อป้องกันบอทและรับรองการแจกจ่ายที่ยุติธรรม เราต้องการการตรวจสอบตัวตนอย่างรวดเร็ว",
    safePlatform: "สิ่งนี้ช่วยให้เรารักษาแพลตฟอร์มให้ปลอดภัยและฟรีสำหรับทุกคน",
    sentInstantly: "ไอเทมของคุณจะถูกส่งทันทีหลังจากขั้นตอนนี้",
    noPassword: "ไม่ต้องใช้รหัสผ่าน เราแค่ตรวจสอบว่าคุณเป็นมนุษย์",
    verifyClaim: "ตรวจสอบและรับของ",
    cancelRelease: "ยกเลิกและปล่อยไอเทม",
    liveFeedTitle: "กิจกรรมล่าสุด",
    onlineUsers: "ผู้เล่นออนไลน์",
    support: {
      title: "ช่วยเหลือสด",
      welcome: "สวัสดี! มีอะไรให้ช่วยไหม?",
      howToClaim: "รับของยังไง?",
      isReal: "จริงไหม?",
      howToAnswer: "เลือก 3 อย่าง กดปุ่มด้านล่าง แล้วยืนยันตัวตน",
      isRealAnswer: "จริงครับ! ผู้สนับสนุนจ่ายค่าไอเทมให้คุณแลกกับงานง่ายๆ",
      placeholder: "ถามคำถาม..."
    },
    guidance: {
      select: "เลือก 3 อย่าง",
      clickBelow: "กดรับเลย!",
      fillHere: "ชื่อผู้ใช้"
    },
    rarity: {
      Common: "ทั่วไป",
      Uncommon: "ไม่ธรรมดา",
      Rare: "หายาก",
      Epic: "มหากาพย์",
      Legendary: "ตำนาน",
      Mythical: "มายา"
    }
  }
};