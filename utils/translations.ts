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
    rewardsSelected: "Confirm Selection",
    enterUsername: "Enter Username",
    cancel: "Cancel",
    submit: "Submit",
    next: "Next",
    connecting: "Connecting...",
    reserving: "Locating account:",
    almostThere: "Verification Step",
    successReserved: "Items reserved successfully",
    accountConnected: "Secure connection established",
    antiBotDescription: "Please complete one quick task from the list to verify your device. This helps us fund the rewards and prevents bot abuse.",
    safePlatform: "This process keeps the platform safe for real players.",
    sentInstantly: "Rewards are released immediately upon completion.",
    noPassword: "No password required. We never ask for your login details.",
    verifyClaim: "Complete 1 Task to Verify",
    cancelRelease: "Cancel and release items",
    liveFeedTitle: "Recent Activity",
    onlineUsers: "Users Online",
    support: {
      title: "Help Center",
      welcome: "Hello. How can we assist you?",
      howToClaim: "How does this work?",
      isReal: "Is this safe?",
      howToAnswer: "Select your items and complete the verification step to confirm you are human.",
      isRealAnswer: "Yes. We use sponsored tasks to fund the items. No personal data is stored.",
      placeholder: "Type a message..."
    },
    guidance: {
      select: "Select 3 items",
      clickBelow: "Claim Rewards",
      fillHere: "Username"
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
    rewardsSelected: "Confirmar Selección",
    enterUsername: "Ingresa tu Usuario",
    cancel: "Cancelar",
    submit: "Enviar",
    next: "Siguiente",
    connecting: "Conectando...",
    reserving: "Buscando cuenta:",
    almostThere: "Paso de Verificación",
    successReserved: "Objetos reservados con éxito.",
    accountConnected: "Conexión segura establecida.",
    antiBotDescription: "Por favor completa una tarea rápida de la lista para verificar tu dispositivo.",
    safePlatform: "Este proceso mantiene la plataforma segura.",
    sentInstantly: "Las recompensas se liberan al completar.",
    noPassword: "No requerimos contraseña. Nunca pedimos tus datos de acceso.",
    verifyClaim: "Completa 1 Tarea para Verificar",
    cancelRelease: "Cancelar operación",
    liveFeedTitle: "Actividad Reciente",
    onlineUsers: "Usuarios en línea",
    support: {
      title: "Ayuda",
      welcome: "Hola. ¿En qué podemos ayudarte?",
      howToClaim: "¿Cómo funciona?",
      isReal: "¿Es seguro?",
      howToAnswer: "Selecciona tus objetos y completa la verificación para confirmar que eres humano.",
      isRealAnswer: "Sí. Usamos tareas patrocinadas. No guardamos datos personales.",
      placeholder: "Escribe un mensaje..."
    },
    guidance: {
      select: "Elige 3 objetos",
      clickBelow: "Reclamar",
      fillHere: "Usuario"
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
    rewardsSelected: "Confirmar Seleção",
    enterUsername: "Digite seu Usuário",
    cancel: "Cancelar",
    submit: "Enviar",
    next: "Próximo",
    connecting: "Conectando...",
    reserving: "Localizando conta:",
    almostThere: "Etapa de Verificação",
    successReserved: "Itens reservados com sucesso.",
    accountConnected: "Conexão segura estabelecida.",
    antiBotDescription: "Complete uma tarefa rápida da lista para verificar seu dispositivo.",
    safePlatform: "Este processo mantém a plataforma segura.",
    sentInstantly: "Recompensas liberadas após conclusão.",
    noPassword: "Sem senha. Nunca pedimos seus dados de login.",
    verifyClaim: "Complete 1 Tarefa para Verificar",
    cancelRelease: "Cancelar operação",
    liveFeedTitle: "Atividade Recente",
    onlineUsers: "Usuários Online",
    support: {
      title: "Ajuda",
      welcome: "Olá. Como podemos ajudar?",
      howToClaim: "Como funciona?",
      isReal: "É seguro?",
      howToAnswer: "Escolha os itens e complete a verificação para confirmar que é humano.",
      isRealAnswer: "Sim. Usamos tarefas patrocinadas. Não salvamos dados pessoais.",
      placeholder: "Digite uma mensagem..."
    },
    guidance: {
      select: "Escolha 3 itens",
      clickBelow: "Resgatar",
      fillHere: "Seu nick"
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
    rewardsSelected: "Confirmer la Sélection",
    enterUsername: "Nom d'utilisateur",
    cancel: "Annuler",
    submit: "Soumettre",
    next: "Suivant",
    connecting: "Connexion...",
    reserving: "Localisation du compte:",
    almostThere: "Étape de Vérification",
    successReserved: "Objets réservés avec succès.",
    accountConnected: "Connexion sécurisée établie.",
    antiBotDescription: "Veuillez compléter une tâche rapide pour vérifier votre appareil.",
    safePlatform: "Ce processus garde la plateforme sécurisée.",
    sentInstantly: "Récompenses libérées après validation.",
    noPassword: "Pas de mot de passe requis. Nous ne demandons jamais vos identifiants.",
    verifyClaim: "Complétez 1 Tâche pour Vérifier",
    cancelRelease: "Annuler l'opération",
    liveFeedTitle: "Activité Récente",
    onlineUsers: "Utilisateurs en ligne",
    support: {
      title: "Aide",
      welcome: "Bonjour. Comment pouvons-nous aider?",
      howToClaim: "Comment ça marche?",
      isReal: "Est-ce sûr?",
      howToAnswer: "Sélectionnez vos objets et complétez la vérification humaine.",
      isRealAnswer: "Oui. Nous utilisons des tâches sponsorisées. Aucune donnée personnelle stockée.",
      placeholder: "Écrivez un message..."
    },
    guidance: {
      select: "Choisis 3 objets",
      clickBelow: "Réclamer",
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
    rewardsSelected: "Auswahl Bestätigen",
    enterUsername: "Benutzername eingeben",
    cancel: "Abbrechen",
    submit: "Absenden",
    next: "Weiter",
    connecting: "Verbinden...",
    reserving: "Konto wird gesucht:",
    almostThere: "Verifizierungsschritt",
    successReserved: "Items erfolgreich reserviert.",
    accountConnected: "Sichere Verbindung hergestellt.",
    antiBotDescription: "Bitte erledigen Sie eine kurze Aufgabe, um Ihr Gerät zu verifizieren.",
    safePlatform: "Dieser Prozess hält die Plattform sicher.",
    sentInstantly: "Belohnungen werden nach Abschluss freigegeben.",
    noPassword: "Kein Passwort erforderlich. Wir fragen niemals nach Login-Daten.",
    verifyClaim: "1 Aufgabe erledigen zum Verifizieren",
    cancelRelease: "Vorgang abbrechen",
    liveFeedTitle: "Aktuelle Aktivität",
    onlineUsers: "Benutzer Online",
    support: {
      title: "Hilfe",
      welcome: "Hallo. Wie können wir helfen?",
      howToClaim: "Wie funktioniert es?",
      isReal: "Ist das sicher?",
      howToAnswer: "Wähle Items und schließe die Verifizierung ab.",
      isRealAnswer: "Ja. Wir nutzen gesponserte Aufgaben. Keine persönlichen Daten gespeichert.",
      placeholder: "Nachricht eingeben..."
    },
    guidance: {
      select: "Wähle 3 Items",
      clickBelow: "Anfordern",
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
    rewardsSelected: "تأكيد الاختيار",
    enterUsername: "أدخل اسم المستخدم",
    cancel: "إلغاء",
    submit: "إرسال",
    next: "التالي",
    connecting: "جاري الاتصال...",
    reserving: "جاري تحديد الحساب:",
    almostThere: "خطوة التحقق",
    successReserved: "تم حجز العناصر بنجاح.",
    accountConnected: "تم إنشاء اتصال آمن.",
    antiBotDescription: "يرجى إكمال مهمة سريعة واحدة من القائمة للتحقق من جهازك.",
    safePlatform: "هذه العملية تحافظ على أمان المنصة.",
    sentInstantly: "يتم تحرير المكافآت فور الانتهاء.",
    noPassword: "لا حاجة لكلمة المرور. لا نطلب أبداً بيانات الدخول.",
    verifyClaim: "أكمل مهمة واحدة للتحقق",
    cancelRelease: "إلغاء العملية",
    liveFeedTitle: "النشاط الحديث",
    onlineUsers: "مستخدم متصل",
    support: {
      title: "مركز المساعدة",
      welcome: "مرحباً. كيف يمكننا مساعدتك؟",
      howToClaim: "كيف يعمل هذا؟",
      isReal: "هل هذا آمن؟",
      howToAnswer: "اختر عناصرك وأكمل التحقق لتأكيد أنك إنسان.",
      isRealAnswer: "نعم. نستخدم مهام مدعومة. لا يتم تخزين بيانات شخصية.",
      placeholder: "اكتب رسالة..."
    },
    guidance: {
      select: "اختر 3 عناصر",
      clickBelow: "المطالبة",
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
    rewardsSelected: "Kumpirmahin",
    enterUsername: "Ilagay ang Username",
    cancel: "Kanselahin",
    submit: "Ipasa",
    next: "Sunod",
    connecting: "Konektado sa server...",
    reserving: "Hinahanap ang account:",
    almostThere: "Beripikasyon",
    successReserved: "Matagumpay na na-reserve ang mga item.",
    accountConnected: "Ligtas na konektado.",
    antiBotDescription: "Pakikumpleto ang isang gawain mula sa listahan upang ma-verify ang iyong device.",
    safePlatform: "Pinapanatili nitong ligtas ang platform.",
    sentInstantly: "Makukuha ang gantimpala pagkatapos nito.",
    noPassword: "Hindi kailangan ng password. Hindi namin hinihingi ang login details mo.",
    verifyClaim: "Kumpletuhin ang 1 Task para Mag-verify",
    cancelRelease: "Kanselahin",
    liveFeedTitle: "Recent Activity",
    onlineUsers: "Online na Users",
    support: {
      title: "Tulong",
      welcome: "Hi! Paano kami makakatulong?",
      howToClaim: "Paano ito gumagana?",
      isReal: "Ligtas ba ito?",
      howToAnswer: "Pumili ng items at tapusin ang verification.",
      isRealAnswer: "Oo. Gumagamit kami ng sponsored tasks. Walang personal data na itinatago.",
      placeholder: "Mag-type ng mensahe..."
    },
    guidance: {
      select: "Pumili ng 3",
      clickBelow: "Kunin",
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
    rewardsSelected: "ยืนยันการเลือก",
    enterUsername: "ใส่ชื่อผู้ใช้",
    cancel: "ยกเลิก",
    submit: "ยืนยัน",
    next: "ถัดไป",
    connecting: "กำลังเชื่อมต่อ...",
    reserving: "กำลังค้นหาบัญชี:",
    almostThere: "ขั้นตอนการตรวจสอบ",
    successReserved: "จองไอเทมสำเร็จ",
    accountConnected: "เชื่อมต่ออย่างปลอดภัย",
    antiBotDescription: "โปรดทำภารกิจด่วนหนึ่งรายการจากรายการเพื่อยืนยันอุปกรณ์ของคุณ",
    safePlatform: "กระบวนการนี้ช่วยรักษาความปลอดภัย",
    sentInstantly: "รางวัลจะถูกส่งทันทีที่เสร็จสิ้น",
    noPassword: "ไม่ต้องใช้รหัสผ่าน เราไม่ขอข้อมูลเข้าสู่ระบบ",
    verifyClaim: "ทำภารกิจ 1 อย่างเพื่อยืนยัน",
    cancelRelease: "ยกเลิก",
    liveFeedTitle: "กิจกรรมล่าสุด",
    onlineUsers: "ผู้ใช้งานออนไลน์",
    support: {
      title: "ช่วยเหลือ",
      welcome: "สวัสดี มีอะไรให้ช่วยไหม?",
      howToClaim: "ทำงานยังไง?",
      isReal: "ปลอดภัยไหม?",
      howToAnswer: "เลือกไอเทมและยืนยันตัวตน",
      isRealAnswer: "ปลอดภัยครับ เราไม่เก็บข้อมูลส่วนตัว",
      placeholder: "พิมพ์ข้อความ..."
    },
    guidance: {
      select: "เลือก 3 อย่าง",
      clickBelow: "กดรับเลย",
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