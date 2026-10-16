
"use client";

import {
  useEffect,
  useRef,
  useState,
  type FormEvent,
} from "react";

/* =========================================================
   REAL BIRD NETTING CHATBOT
   Bilingual customer support assistant
   ========================================================= */

type Language = "en" | "hi";
type Sender = "bot" | "user";

type ChatMessage = {
  id: number;
  sender: Sender;
  text: string;
};

type ChatbotProps = {
  phoneNumber?: string;
};

type Service = {
  id: string;
  name: string;
  hindi: string;
  description: string;
  keywords: string[];
};

const BUSINESS = {
  name: "Real Bird Netting",
  phone: "919354254539",
  areas: ["Gurugram", "Faridabad"],
  tagline: "Professional Bird Protection & Safety Solutions",
};

/* =========================================================
   SERVICE DATABASE
   ========================================================= */

const SERVICES: Service[] = [
  {
    id: "pigeon-net",
    name: "Pigeon Net Installation",
    hindi: "कबूतर रोकने के लिए पिजन नेट",
    description:
      "Professional pigeon net installation for balconies, windows, and open areas.",
    keywords: [
      "pigeon",
      "pigeons",
      "pigeon net",
      "pigeon nets",
      "kabutar",
      "kabootar",
      "कबूतर",
      "पिजन नेट",
    ],
  },
  {
    id: "balcony-net",
    name: "Balcony Bird Net",
    hindi: "बालकनी बर्ड नेट",
    description:
      "Bird netting solutions for balconies and open spaces.",
    keywords: [
      "balcony net",
      "balcony bird net",
      "bird net",
      "balcony",
      "बालकनी नेट",
      "बालकनी जाली",
    ],
  },
  {
    id: "children-safety",
    name: "Children Safety Nets",
    hindi: "बच्चों की सुरक्षा के लिए सेफ्टी नेट",
    description:
      "Safety net installation for balconies, windows, and suitable open areas.",
    keywords: [
      "children safety",
      "child safety",
      "kids safety",
      "children net",
      "child net",
      "baby safety",
      "बच्चों की सुरक्षा",
      "बच्चों का नेट",
      "सेफ्टी नेट",
    ],
  },
  {
    id: "balcony-safety",
    name: "Balcony Safety Nets",
    hindi: "बालकनी सेफ्टी नेट",
    description:
      "Balcony safety net solutions based on site measurements and requirements.",
    keywords: [
      "balcony safety",
      "safety balcony",
      "safety net",
      "balcony protection",
      "बालकनी सेफ्टी",
      "बालकनी सुरक्षा",
    ],
  },
  {
    id: "window-net",
    name: "Window Safety Nets",
    hindi: "खिड़की सेफ्टी नेट",
    description:
      "Netting for windows and suitable ventilation openings.",
    keywords: [
      "window net",
      "window safety",
      "window bird net",
      "खिड़की नेट",
      "खिड़की जाली",
    ],
  },
  {
    id: "invisible-grill",
    name: "Invisible Grill Installation",
    hindi: "इनविजिबल ग्रिल इंस्टॉलेशन",
    description:
      "Professional invisible grill installation for balconies and windows.",
    keywords: [
      "invisible grill",
      "invisible grille",
      "balcony grill",
      "balcony grille",
      "safety grill",
      "इनविजिबल ग्रिल",
      "बालकनी ग्रिल",
    ],
  },
  {
    id: "bird-spikes",
    name: "Bird Spikes Installation",
    hindi: "बर्ड स्पाइक्स इंस्टॉलेशन",
    description:
      "Bird spikes for suitable ledges, parapets, and bird-landing locations.",
    keywords: [
      "bird spikes",
      "bird spike",
      "pigeon spikes",
      "anti bird spikes",
      "spikes",
      "बर्ड स्पाइक्स",
      "कबूतर स्पाइक्स",
    ],
  },
  {
    id: "solar-protection",
    name: "Solar Panel Bird Protection",
    hindi: "सोलर पैनल बर्ड प्रोटेक्शन",
    description:
      "Bird protection solutions for suitable solar panel installations.",
    keywords: [
      "solar panel",
      "solar bird",
      "solar protection",
      "सोलर पैनल",
    ],
  },
  {
    id: "terrace-net",
    name: "Terrace and Duct Nets",
    hindi: "टेरेस और डक्ट नेट",
    description:
      "Netting solutions for suitable terrace, duct, and open areas.",
    keywords: [
      "terrace net",
      "duct net",
      "shaft net",
      "terrace",
      "duct",
      "टेरेस नेट",
      "डक्ट नेट",
    ],
  },
  {
    id: "bird-control",
    name: "Bird Control Services",
    hindi: "बर्ड कंट्रोल सर्विस",
    description:
      "Bird management solutions using suitable netting and deterrent systems.",
    keywords: [
      "bird control",
      "pigeon control",
      "bird problem",
      "bird protection",
      "बर्ड कंट्रोल",
      "कबूतर कंट्रोल",
    ],
  },
];

 
/* =========================================================
   REAL BIRD NETTING
   BILINGUAL CHATBOT CONTENT
   English + Hindi
   ========================================================= */

type ChatLanguage = "en" | "hi";

type ChatContent = {
  title: string;
  subtitle: string;
  welcome: string;
  online: string;
  placeholder: string;
  send: string;
  whatsapp: string;
  call: string;
  typing: string;
  clear: string;
  close: string;
  open: string;
  services: string;
  priceLabel: string;
  location: string;
  photos: string;
  contact: string;
  greeting: string;
  serviceAnswer: string;
  area: string;
  pigeon: string;
  children: string;
  balcony: string;
  spikes: string;
  invisible: string;
  birdControl: string;
  solar: string;
  price: string;
  professional: string;
  thanks: string;
  goodbye: string;
  fallback: string;
};

const CONTENT: Record<ChatLanguage, ChatContent> = {

  // =======================================================
  // ENGLISH
  // =======================================================

  en: {
    title: "Real Bird Netting",
    subtitle: "Professional Customer Support",

    welcome:
      "Hello sir! Welcome to Real Bird Netting. How can I help you today?",

    online: "Online • Ready to help",
    placeholder: "Type your message...",
    send: "Send",
    whatsapp: "WhatsApp",
    call: "Call Us",
    typing: "Typing...",
    clear: "Clear chat",
    close: "Close chat",
    open: "Open chat",

    services: "Our Services",

    // Button label (renamed to prevent duplicate key)
    priceLabel: "Price / Quotation",

    location: "Service Areas",
    photos: "Send Photos",
    contact: "Contact Us",

    // =====================================================
    // CUSTOMER RESPONSES
    // =====================================================

    greeting:
      "Hello sir! How can I help you today? We provide professional pigeon nets, balcony safety nets, children safety nets, bird spikes, invisible grills, and bird control services.",

    serviceAnswer:
      "We provide professional installation of pigeon nets, balcony bird nets, children safety nets, window safety nets, invisible grills, bird spikes, terrace nets, and solar panel bird protection.",

    area:
      "We provide services in Gurugram and Faridabad. Which area do you need service in, sir? Please share your location or sector.",

    pigeon:
      "Yes sir! We provide professional Pigeon Net Installation and Balcony Bird Net services. Please send us 2–3 clear balcony photos, your location, and approximate measurements on WhatsApp. Our team will review your requirements and provide a quotation.",

    children:
      "Yes sir! We provide Children Safety Nets and Balcony Safety Nets for suitable locations. Please share your balcony or window photos, location, and approximate measurements so our team can suggest a suitable solution.",

    balcony:
      "Yes sir! We provide Balcony Bird Nets and Balcony Safety Nets. Please send us your balcony photos and location on WhatsApp for a quotation.",

    spikes:
      "Yes sir! We provide professional Bird Spikes Installation for suitable ledges, parapets, and bird-landing areas. Please share photos and your location so our team can review the requirements.",

    invisible:
      "Yes sir! We provide Invisible Grill and Balcony Invisible Grill installation. Please share your balcony photos, approximate measurements, and location for a quotation.",

    birdControl:
      "We provide bird control solutions using suitable bird nets, bird spikes, and other protection systems. Please share photos of the affected area and your location.",

    solar:
      "We provide bird protection solutions for suitable solar panel installations. Please share photos of your solar panel area and location for an assessment.",

    // Actual price response
    price:
      "Our price depends on the area, measurements, material, and installation requirements. Sir, please send your balcony photos, approximate width and height, and location on WhatsApp. We will review your requirements and provide a quotation.",

    photos:
      "Sir, please send 2–3 clear photos of your balcony, window, terrace, or installation area on WhatsApp. Also share your location (Gurugram or Faridabad) and approximate measurements.",

    professional:
      "Yes sir! We provide professional installation services. Our team can review your site photos, location, and requirements before confirming the installation details.",

    contact:
      "You can contact our team by WhatsApp or phone using the buttons below. Please share your name, location, service required, and photos.",

    thanks:
      "You're welcome sir! Thank you for contacting Real Bird Netting. We look forward to helping you.",

    goodbye:
      "Thank you for contacting Real Bird Netting. Have a great day, sir!",

    fallback:
      "Thank you for your enquiry, sir. Are you looking for Pigeon Nets, Children Safety Nets, Balcony Safety Nets, Bird Spikes, Invisible Grills, or Bird Control Services? Please tell me your location and service requirement."
  },

  // =======================================================
  // HINDI
  // =======================================================

  hi: {
    title: "Real Bird Netting",
    subtitle: "प्रोफेशनल ग्राहक सहायता",

    welcome:
      "नमस्ते सर! Real Bird Netting में आपका स्वागत है। मैं आपकी क्या सहायता कर सकता हूँ?",

    online: "ऑनलाइन • सहायता के लिए उपलब्ध",
    placeholder: "अपना संदेश लिखें...",
    send: "भेजें",
    whatsapp: "WhatsApp",
    call: "कॉल करें",
    typing: "लिख रहा है...",
    clear: "चैट साफ करें",
    close: "चैट बंद करें",
    open: "चैट खोलें",

    services: "हमारी सर्विस",

    // Button label
    priceLabel: "कीमत / कोटेशन",

    location: "सर्विस एरिया",
    photos: "फोटो भेजें",
    contact: "संपर्क करें",

    // =====================================================
    // CUSTOMER RESPONSES
    // =====================================================

    greeting:
      "नमस्ते सर! मैं आपकी क्या सहायता कर सकता हूँ? हम प्रोफेशनल पिजन नेट, बालकनी सेफ्टी नेट, बच्चों के सेफ्टी नेट, बर्ड स्पाइक्स, इनविजिबल ग्रिल और बर्ड कंट्रोल सर्विस प्रदान करते हैं।",

    serviceAnswer:
      "हम पिजन नेट, बालकनी बर्ड नेट, बच्चों के सेफ्टी नेट, विंडो नेट, इनविजिबल ग्रिल, बर्ड स्पाइक्स, टेरेस नेट और सोलर पैनल बर्ड प्रोटेक्शन की प्रोफेशनल इंस्टॉलेशन करते हैं।",

    area:
      "हम गुरुग्राम और फरीदाबाद में सर्विस प्रदान करते हैं। सर, आपको किस एरिया में सर्विस चाहिए? कृपया अपनी लोकेशन या सेक्टर बताएं।",

    pigeon:
      "जी सर! हम प्रोफेशनल पिजन नेट और बालकनी बर्ड नेट इंस्टॉलेशन करते हैं। कृपया अपनी बालकनी की 2–3 साफ फोटो, लोकेशन और अनुमानित माप WhatsApp पर भेजें। हमारी टीम आपकी जरूरत देखकर कोटेशन देगी।",

    children:
      "जी सर! हम बच्चों की सुरक्षा के लिए चिल्ड्रन सेफ्टी नेट और बालकनी सेफ्टी नेट इंस्टॉलेशन करते हैं। कृपया बालकनी या खिड़की की फोटो, लोकेशन और अनुमानित माप भेजें।",

    balcony:
      "जी सर! हम बालकनी बर्ड नेट और बालकनी सेफ्टी नेट इंस्टॉलेशन करते हैं। कृपया अपनी बालकनी की फोटो और लोकेशन WhatsApp पर भेजें।",

    spikes:
      "जी सर! हम बालकनी की मुंडेर, किनारों और पक्षियों के बैठने वाली उपयुक्त जगहों पर बर्ड स्पाइक्स इंस्टॉलेशन करते हैं। कृपया फोटो और लोकेशन WhatsApp पर भेजें।",

    invisible:
      "जी सर! हम इनविजिबल ग्रिल और बालकनी इनविजिबल ग्रिल की प्रोफेशनल इंस्टॉलेशन करते हैं। कृपया बालकनी की फोटो, अनुमानित माप और लोकेशन भेजें।",

    birdControl:
      "हम बर्ड कंट्रोल के लिए उपयुक्त बर्ड नेट, बर्ड स्पाइक्स और अन्य प्रोटेक्शन सिस्टम प्रदान करते हैं। कृपया प्रभावित जगह की फोटो और लोकेशन भेजें।",

    solar:
      "हम उपयुक्त सोलर पैनल इंस्टॉलेशन के लिए बर्ड प्रोटेक्शन समाधान प्रदान करते हैं। कृपया सोलर पैनल की फोटो और लोकेशन भेजें।",

    // Actual price response
    price:
      "सर, कीमत एरिया, माप, मटेरियल और इंस्टॉलेशन की जरूरत पर निर्भर करती है। कृपया अपनी बालकनी की फोटो, अनुमानित चौड़ाई और ऊंचाई तथा लोकेशन WhatsApp पर भेजें। हम आपकी जरूरत देखकर कोटेशन देंगे।",

    photos:
      "सर, कृपया अपनी बालकनी, खिड़की, टेरेस या इंस्टॉलेशन वाली जगह की 2–3 साफ फोटो WhatsApp पर भेजें। साथ में गुरुग्राम या फरीदाबाद की लोकेशन और अनुमानित माप भी बताएं।",

    professional:
      "जी सर! हम प्रोफेशनल इंस्टॉलेशन सर्विस प्रदान करते हैं। इंस्टॉलेशन की जानकारी तय करने से पहले हमारी टीम आपकी फोटो, लोकेशन और जरूरत देख सकती है।",

    contact:
      "सर, नीचे दिए गए WhatsApp या कॉल बटन से हमारी टीम से संपर्क करें। कृपया अपना नाम, लोकेशन, सर्विस और फोटो साझा करें।",

    thanks:
      "आपका स्वागत है सर! Real Bird Netting से संपर्क करने के लिए धन्यवाद। हम आपकी सहायता करके खुश होंगे।",

    goodbye:
      "Real Bird Netting से संपर्क करने के लिए धन्यवाद सर! आपका दिन शुभ हो।",

    fallback:
      "धन्यवाद सर! कृपया बताएं कि आपको कौन-सी सर्विस चाहिए: पिजन नेट, बच्चों का सेफ्टी नेट, बालकनी सेफ्टी नेट, बर्ड स्पाइक्स, इनविजिबल ग्रिल या बर्ड कंट्रोल? कृपया अपनी लोकेशन भी बताएं।"
  }
};

// =========================================================
// END OF BILINGUAL CHATBOT CONTENT
// =========================================================
 
/* =========================================================
   LANGUAGE DETECTION
   ========================================================= */

function detectLanguage(
  message: string,
  selectedLanguage: Language
): Language {
  const containsHindi = /[\u0900-\u097F]/.test(message);

  return containsHindi ? "hi" : selectedLanguage;
}

/* =========================================================
   KEYWORD MATCHING
   ========================================================= */

function includesAny(
  text: string,
  keywords: string[]
): boolean {
  return keywords.some((keyword) =>
    text.includes(keyword.toLowerCase())
  );
}

function findService(message: string): Service | undefined {
  const normalized = message.toLowerCase().trim();

  return SERVICES.find((service) =>
    includesAny(normalized, service.keywords)
  );
}

/* =========================================================
   RESPONSE ENGINE
   ========================================================= */

function getBotResponse(
  message: string,
  language: Language
): string {
  const text = message.toLowerCase().trim();
  const response = CONTENT[language];

  if (
    includesAny(text, [
      "hello",
      "hi",
      "hey",
      "नमस्ते",
      "नमस्कार",
      "हेलो",
    ])
  ) {
    return response.greeting;
  }

  if (
    includesAny(text, [
      "price",
      "pricing",
      "cost",
      "rate",
      "quotation",
      "quote",
      "how much",
      "kitna",
      "कितना",
      "कीमत",
      "रेट",
      "प्राइस",
      "खर्च",
      "कोटेशन",
    ])
  ) {
    return response.price;
  }

  if (
    includesAny(text, [
      "gurugram",
      "gurgaon",
      "faridabad",
      "location",
      "sector",
      "near me",
      "nearby",
      "गुरुग्राम",
      "गुड़गांव",
      "फरीदाबाद",
      "लोकेशन",
      "सेक्टर",
    ])
  ) {
    return response.area;
  }

  if (
    includesAny(text, [
      "children",
      "child",
      "kids",
      "baby",
      "बाल सुरक्षा",
      "बच्चों",
      "चिल्ड्रन",
    ])
  ) {
    return response.children;
  }

  if (
    includesAny(text, [
      "balcony safety",
      "safety net",
      "balcony protection",
      "बालकनी सेफ्टी",
      "बालकनी सुरक्षा",
    ])
  ) {
    return response.balcony;
  }

  if (
    includesAny(text, [
      "pigeon",
      "pigeons",
      "pigeon net",
      "bird net",
      "kabutar",
      "kabootar",
      "कबूतर",
      "पिजन",
    ])
  ) {
    return response.pigeon;
  }

  if (
    includesAny(text, [
      "bird spike",
      "bird spikes",
      "pigeon spikes",
      "spikes",
      "बर्ड स्पाइक्स",
    ])
  ) {
    return response.spikes;
  }

  if (
    includesAny(text, [
      "invisible grill",
      "invisible grille",
      "बालकनी ग्रिल",
      "इनविजिबल ग्रिल",
    ])
  ) {
    return response.invisible;
  }

  if (
    includesAny(text, [
      "solar panel",
      "solar bird",
      "सोलर पैनल",
    ])
  ) {
    return response.solar;
  }

  if (
    includesAny(text, [
      "bird control",
      "pigeon control",
      "बर्ड कंट्रोल",
    ])
  ) {
    return response.birdControl;
  }

  if (
    includesAny(text, [
      "photo",
      "photos",
      "picture",
      "image",
      "measurement",
      "width",
      "height",
      "फोटो",
      "तस्वीर",
      "माप",
    ])
  ) {
    return response.photos;
  }

  if (
    includesAny(text, [
      "professional",
      "installation",
      "install",
      "fitting",
      "प्रोफेशनल",
      "इंस्टॉलेशन",
      "फिटिंग",
    ])
  ) {
    return response.professional;
  }

  if (
    includesAny(text, [
      "service",
      "services",
      "what do you provide",
      "सर्विस",
      "सेवाएं",
    ])
  ) {
    return response.serviceAnswer;
  }

  if (
    includesAny(text, [
      "contact",
      "phone",
      "call",
      "whatsapp",
      "संपर्क",
      "फोन",
      "कॉल",
    ])
  ) {
    return response.contact;
  }

  if (
    includesAny(text, [
      "thank",
      "thanks",
      "धन्यवाद",
      "शुक्रिया",
    ])
  ) {
    return response.thanks;
  }

  if (
    text === "bye" ||
    includesAny(text, ["goodbye", "अलविदा", "बाय"])
  ) {
    return response.goodbye;
  }

  return response.fallback;
}

/* =========================================================
   MAIN CHATBOT COMPONENT
   ========================================================= */

export default function Chatbot({
  phoneNumber = BUSINESS.phone,
}: ChatbotProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [language, setLanguage] = useState<Language>("en");
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [isTyping, setIsTyping] = useState(false);

  const nextId = useRef(1);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(
    null
  );

  const bottomRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const t = CONTENT[language];

  /* -----------------------------------------
     Scroll automatically to latest message
     ----------------------------------------- */

  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "end",
    });
  }, [messages, isTyping]);

  /* -----------------------------------------
     Clean up pending response on unmount
     ----------------------------------------- */

  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, []);

  /* -----------------------------------------
     Add message to conversation
     ----------------------------------------- */

  function addMessage(
    sender: Sender,
    text: string
  ) {
    const id = nextId.current++;

    setMessages((previous) => [
      ...previous,
      {
        id,
        sender,
        text,
      },
    ]);
  }

  /* -----------------------------------------
     Send user message and show typing
     ----------------------------------------- */

  function processMessage(message: string) {
    const cleaned = message.trim();

    if (!cleaned || isTyping) return;

    const responseLanguage = detectLanguage(
      cleaned,
      language
    );

    const answer = getBotResponse(
      cleaned,
      responseLanguage
    );

    addMessage("user", cleaned);

    setIsTyping(true);

    timerRef.current = setTimeout(() => {
      addMessage("bot", answer);
      setIsTyping(false);
      timerRef.current = null;
    }, 900 + Math.min(cleaned.length * 12, 900));
  }

  /* -----------------------------------------
     Form submission
     ----------------------------------------- */

  function handleSubmit(
    event: FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    if (!input.trim()) return;

    processMessage(input);
    setInput("");
  }

  /* -----------------------------------------
     Quick reply
     ----------------------------------------- */

  function handleQuickReply(message: string) {
    processMessage(message);
  }

  /* -----------------------------------------
     Clear conversation
     ----------------------------------------- */

  function clearChat() {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }

    setMessages([]);
    setIsTyping(false);
    nextId.current = 1;
  }

  /* -----------------------------------------
     WhatsApp link
     ----------------------------------------- */

  const whatsappNumber = phoneNumber.replace(/\D/g, "");

  const whatsappMessage = encodeURIComponent(
    "Hello Real Bird Netting, I need a quotation. My service requirement and location are: "
  );

  const whatsappLink =
    `https://wa.me/${whatsappNumber}` +
    `?text=${whatsappMessage}`;

  /* -----------------------------------------
     Quick question list
     ----------------------------------------- */

  const quickReplies = [
    {
      label: t.services,
      message: "What services do you provide?",
    },
    {
      label: t.price,
      message: "How much is the price?",
    },
    {
      label: t.location,
      message: "Do you provide services in Gurugram or Faridabad?",
    },
    {
      label: t.photos,
      message: "How can I send balcony photos?",
    },
  ];

  /* =====================================================
     RENDER
     ===================================================== */

  return (
    <div className="rb-chat-widget">

      {/* CHAT WINDOW */}

      {isOpen && (
        <section
          className="rb-chat-window"
          aria-label="Real Bird Netting customer support"
          aria-live="polite"
        >

          {/* HEADER */}

          <header className="rb-chat-header">
            <div className="rb-chat-brand">
              <div className="rb-chat-avatar">
                🐦
              </div>

              <div className="rb-chat-brand-text">
                <strong>{t.title}</strong>

                <span className="rb-chat-online">
                  <span className="rb-online-dot" />
                  {t.online}
                </span>
              </div>
            </div>

            <div className="rb-chat-header-actions">
              <button
                type="button"
                onClick={clearChat}
                className="rb-header-action"
                aria-label={t.clear}
                title={t.clear}
              >
                ↻
              </button>

              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="rb-header-action"
                aria-label={t.close}
                title={t.close}
              >
                ×
              </button>
            </div>
          </header>

          {/* LANGUAGE SELECTOR */}

          <div className="rb-language-bar">
            <button
              type="button"
              onClick={() => setLanguage("en")}
              className={
                language === "en"
                  ? "rb-language-button active"
                  : "rb-language-button"
              }
            >
              English
            </button>

            <button
              type="button"
              onClick={() => setLanguage("hi")}
              className={
                language === "hi"
                  ? "rb-language-button active"
                  : "rb-language-button"
              }
            >
              हिंदी
            </button>
          </div>

          {/* MESSAGE AREA */}

          <div className="rb-chat-messages">

            {/* Welcome message */}

            <div className="rb-message-row bot-row">
              <div className="rb-message-avatar">
                🐦
              </div>

              <div className="rb-message bot-message">
                {t.welcome}
              </div>
            </div>

            {/* Conversation messages */}

            {messages.map((message) => (
              <div
                key={message.id}
                className={
                  message.sender === "user"
                    ? "rb-message-row user-row"
                    : "rb-message-row bot-row"
                }
              >
                {message.sender === "bot" && (
                  <div className="rb-message-avatar">
                    🐦
                  </div>
                )}

                <div
                  className={
                    message.sender === "user"
                      ? "rb-message user-message"
                      : "rb-message bot-message"
                  }
                >
                  {message.text}
                </div>
              </div>
            ))}

            {/* TYPING INDICATOR */}

            {isTyping && (
              <div className="rb-message-row bot-row">
                <div className="rb-message-avatar">
                  🐦
                </div>

                <div
                  className="rb-message bot-message rb-typing-bubble"
                  aria-label={t.typing}
                >
                  <span className="rb-typing-dot" />
                  <span className="rb-typing-dot" />
                  <span className="rb-typing-dot" />
                  <span className="rb-typing-label">
                    {t.typing}
                  </span>
                </div>
              </div>
            )}

            <div ref={bottomRef} />
          </div>

          {/* QUICK REPLIES */}

          <div className="rb-quick-replies">
            {quickReplies.map((item) => (
              <button
                key={item.label}
                type="button"
                className="rb-quick-button"
                disabled={isTyping}
                onClick={() =>
                  handleQuickReply(item.message)
                }
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* CONTACT BUTTONS */}

          <div className="rb-contact-actions">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="rb-whatsapp-button"
            >
              <span>☘</span>
              {t.whatsapp}
            </a>

            <a
              href={`tel:+${whatsappNumber}`}
              className="rb-call-button"
            >
              <span>☎</span>
              {t.call}
            </a>
          </div>

          {/* MESSAGE INPUT */}

          <form
            onSubmit={handleSubmit}
            className="rb-chat-input-form"
          >
            <input
              ref={inputRef}
              value={input}
              onChange={(event) =>
                setInput(event.target.value)
              }
              placeholder={t.placeholder}
              aria-label={t.placeholder}
              autoComplete="off"
              className="rb-chat-input"
            />

            <button
              type="submit"
              disabled={!input.trim() || isTyping}
              className="rb-send-button"
              aria-label={t.send}
            >
              ➤
            </button>
          </form>

          <div className="rb-chat-footer">
            Powered by Real Bird Netting
          </div>
        </section>
      )}

      {/* FLOATING CHAT LAUNCHER */}

      <button
        type="button"
        className="rb-chat-launcher"
        onClick={() => {
          setIsOpen((previous) => !previous);

          if (!isOpen) {
            setTimeout(() => {
              inputRef.current?.focus();
            }, 100);
          }
        }}
        aria-label={isOpen ? t.close : t.open}
        title={isOpen ? t.close : t.open}
      >
        {isOpen ? (
          <span className="rb-launcher-close">×</span>
        ) : (
          <>
            <span className="rb-launcher-icon">☏</span>
            <span className="rb-launcher-notification" />
          </>
        )}
      </button>
    </div>
  );
}