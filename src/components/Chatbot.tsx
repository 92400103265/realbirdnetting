
"use client";

import { useState, type FormEvent } from "react";

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

const BUSINESS = {
  name: "Real Bird Netting",
  phone: "919354254539",
  areas: ["Gurugram", "Faridabad"],
  services: [
    "Pigeon Net Installation",
    "Balcony Bird Nets",
    "Bird Spikes Installation",
    "Invisible Grill Installation",
    "Balcony Invisible Grill",
    "Bird Control Services",
    "Solar Panel Bird Protection",
    "Professional Installation",
  ],
};

const TEXT = {
  en: {
    title: "Real Bird Netting",
    subtitle: "Customer Support",
    welcome:
      "Hello sir! Welcome to Real Bird Netting. How can I help you today?",
    placeholder: "Type your message...",
    send: "Send",
    whatsapp: "WhatsApp",
    call: "Call Us",
    online: "Online • Ready to help",
    greeting:
      "Hello sir! How can I help you today? We provide professional bird netting, bird spikes, invisible grills, and bird control services.",
    services:
      "We provide professional installation of Pigeon Nets, Balcony Bird Nets, Bird Spikes, Invisible Grills, Balcony Safety Grills, and Solar Panel Bird Protection.",
    area:
      "We provide services in Gurugram and Faridabad. Which area do you need service in, sir? Please share your location or sector.",
    pigeon:
      "Yes sir! We provide professional Pigeon Net Installation and Balcony Bird Net services. Please send us your balcony photos, location, and approximate measurements on WhatsApp. Our team can review your requirements and provide a quotation.",
    spikes:
      "Yes sir! We provide Bird Spikes Installation for suitable areas such as ledges and other bird-landing points. Please share photos and your location so we can understand your requirements.",
    invisible:
      "Yes sir! We provide Invisible Grill and Balcony Invisible Grill installation. Please share your balcony photos, approximate measurements, and location for a quotation.",
    price:
      "Our price depends on the area, measurements, material, and installation requirements. Sir, please send your balcony photos, approximate width and height, and location on WhatsApp. We will review your requirements and provide a quotation.",
    photo:
      "Sir, please send 2–3 clear photos of your balcony, window, or installation area on WhatsApp. Also share your location (Gurugram or Faridabad) and approximate measurements. This will help us understand your requirements.",
    professional:
      "Yes sir! We provide professional installation services. Our team can review your site photos, location, and requirements before confirming the installation details.",
    contact:
      "You can contact our team by WhatsApp or phone using the buttons below. Please share your name, location, service required, and photos.",
    thanks:
      "You're welcome sir! Thank you for contacting Real Bird Netting. We look forward to helping you.",
    goodbye:
      "Thank you for contacting Real Bird Netting. Have a great day, sir!",
    fallback:
      "Thank you for your message, sir. Could you please tell me which service you need: Pigeon Net, Bird Spikes, Invisible Grill, or Bird Control? You can also share your location and balcony photos on WhatsApp.",
    quickServices: "Our Services",
    quickPrice: "Price / Quotation",
    quickArea: "Service Areas",
    quickContact: "Contact Us",
    quickPhoto: "Send Photos",
  },

  hi: {
    title: "Real Bird Netting",
    subtitle: "ग्राहक सहायता",
    welcome:
      "नमस्ते सर! Real Bird Netting में आपका स्वागत है। मैं आपकी क्या सहायता कर सकता हूँ?",
    placeholder: "अपना संदेश लिखें...",
    send: "भेजें",
    whatsapp: "WhatsApp",
    call: "कॉल करें",
    online: "ऑनलाइन • सहायता के लिए उपलब्ध",
    greeting:
      "नमस्ते सर! मैं आपकी क्या सहायता कर सकता हूँ? हम प्रोफेशनल पिजन नेट, बर्ड स्पाइक्स, इनविजिबल ग्रिल और बर्ड कंट्रोल सर्विस प्रदान करते हैं।",
    services:
      "हम पिजन नेट, बालकनी बर्ड नेट, बर्ड स्पाइक्स, इनविजिबल ग्रिल, बालकनी सेफ्टी ग्रिल और सोलर पैनल बर्ड प्रोटेक्शन की प्रोफेशनल इंस्टॉलेशन करते हैं।",
    area:
      "हम गुरुग्राम और फरीदाबाद में सर्विस प्रदान करते हैं। सर, आपको किस एरिया में सर्विस चाहिए? कृपया अपनी लोकेशन या सेक्टर बताएं।",
    pigeon:
      "जी सर! हम प्रोफेशनल पिजन नेट और बालकनी बर्ड नेट इंस्टॉलेशन करते हैं। कृपया अपनी बालकनी की फोटो, लोकेशन और अनुमानित माप WhatsApp पर भेजें। हमारी टीम आपकी जरूरत देखकर कोटेशन देगी।",
    spikes:
      "जी सर! हम बालकनी की मुंडेर, किनारों और पक्षियों के बैठने वाली उपयुक्त जगहों पर बर्ड स्पाइक्स इंस्टॉलेशन करते हैं। कृपया फोटो और लोकेशन WhatsApp पर भेजें।",
    invisible:
      "जी सर! हम इनविजिबल ग्रिल और बालकनी इनविजिबल ग्रिल की प्रोफेशनल इंस्टॉलेशन करते हैं। कृपया बालकनी की फोटो, अनुमानित माप और लोकेशन भेजें।",
    price:
      "सर, कीमत एरिया, माप, मटेरियल और इंस्टॉलेशन की जरूरत पर निर्भर करती है। कृपया अपनी बालकनी की फोटो, अनुमानित चौड़ाई और ऊंचाई तथा लोकेशन WhatsApp पर भेजें। हम आपकी जरूरत देखकर कोटेशन देंगे।",
    photo:
      "सर, कृपया अपनी बालकनी, खिड़की या इंस्टॉलेशन वाली जगह की 2–3 साफ फोटो WhatsApp पर भेजें। साथ में गुरुग्राम या फरीदाबाद की लोकेशन और अनुमानित माप भी बताएं।",
    professional:
      "जी सर! हम प्रोफेशनल इंस्टॉलेशन सर्विस प्रदान करते हैं। इंस्टॉलेशन की जानकारी तय करने से पहले हमारी टीम आपकी फोटो, लोकेशन और जरूरत देख सकती है।",
    contact:
      "सर, नीचे दिए गए WhatsApp या कॉल बटन से हमारी टीम से संपर्क करें। कृपया अपना नाम, लोकेशन, सर्विस और फोटो साझा करें।",
    thanks:
      "आपका स्वागत है सर! Real Bird Netting से संपर्क करने के लिए धन्यवाद। हम आपकी सहायता करके खुश होंगे।",
    goodbye:
      "Real Bird Netting से संपर्क करने के लिए धन्यवाद सर! आपका दिन शुभ हो।",
    fallback:
      "धन्यवाद सर! कृपया बताएं कि आपको कौन-सी सर्विस चाहिए: पिजन नेट, बर्ड स्पाइक्स, इनविजिबल ग्रिल या बर्ड कंट्रोल? आप WhatsApp पर अपनी लोकेशन और बालकनी की फोटो भी भेज सकते हैं।",
    quickServices: "हमारी सर्विस",
    quickPrice: "कीमत / कोटेशन",
    quickArea: "सर्विस एरिया",
    quickContact: "संपर्क करें",
    quickPhoto: "फोटो भेजें",
  },
};

function detectLanguage(message: string): Language {
  return /[\u0900-\u097F]/.test(message) ? "hi" : "en";
}

function getResponse(message: string, language: Language): string {
  const value = message.toLowerCase().trim();

  const has = (...words: string[]) =>
    words.some((word) => value.includes(word));

  if (
    has("hello", "hi", "hey", "नमस्ते", "नमस्कार", "हेलो")
  ) {
    return TEXT[language].greeting;
  }

  if (
    has(
      "service",
      "services",
      "what do you provide",
      "क्या सर्विस",
      "कौन सी सर्विस",
      "सेवाएं"
    )
  ) {
    return TEXT[language].services;
  }

  if (
    has(
      "gurugram",
      "gurgaon",
      "faridabad",
      "location",
      "area",
      "sector",
      "near me",
      "nearby",
      "मेरे पास",
      "गुरुग्राम",
      "गुड़गांव",
      "फरीदाबाद",
      "लोकेशन",
      "एरिया",
      "सेक्टर"
    )
  ) {
    return TEXT[language].area;
  }

  if (
    has(
      "pigeon",
      "pigeons",
      "pigeon net",
      "bird net",
      "balcony net",
      "pigeon nets near me",
      "kabutar",
      "कबूतर",
      "पिजन",
      "जाली",
      "पिजन नेट",
      "बालकनी नेट"
    )
  ) {
    return TEXT[language].pigeon;
  }

  if (
    has(
      "spike",
      "spikes",
      "bird spike",
      "bird spikes",
      "anti bird",
      "बर्ड स्पाइक",
      "स्पाइक्स",
      "कांटे"
    )
  ) {
    return TEXT[language].spikes;
  }

  if (
    has(
      "invisible grill",
      "invisible grille",
      "balcony grill",
      "safety grill",
      "child safety",
      "इनविजिबल ग्रिल",
      "अदृश्य ग्रिल",
      "बालकनी ग्रिल"
    )
  ) {
    return TEXT[language].invisible;
  }

  if (
    has(
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
      "कोटेशन"
    )
  ) {
    return TEXT[language].price;
  }

  if (
    has(
      "photo",
      "photos",
      "picture",
      "image",
      "send image",
      "फोटो",
      "तस्वीर",
      "माप",
      "measurement",
      "measurements",
      "width",
      "height"
    )
  ) {
    return TEXT[language].photo;
  }

  if (
    has(
      "professional",
      "installation",
      "install",
      "fitting",
      "लगवाना",
      "इंस्टॉलेशन",
      "प्रोफेशनल",
      "फिटिंग"
    )
  ) {
    return TEXT[language].professional;
  }

  if (
    has(
      "contact",
      "phone",
      "call",
      "whatsapp",
      "number",
      "संपर्क",
      "फोन",
      "कॉल",
      "नंबर"
    )
  ) {
    return TEXT[language].contact;
  }

  if (
    has(
      "thank",
      "thanks",
      "धन्यवाद",
      "शुक्रिया"
    )
  ) {
    return TEXT[language].thanks;
  }

  if (
    value === "bye" ||
    has("goodbye", "अलविदा", "बाय")
  ) {
    return TEXT[language].goodbye;
  }

  return TEXT[language].fallback;
}

export default function Chatbot({
  phoneNumber = BUSINESS.phone,
}: ChatbotProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [language, setLanguage] = useState<Language>("en");
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [messageId, setMessageId] = useState(0);

  const t = TEXT[language];

  function addMessage(sender: Sender, text: string) {
    setMessages((previous) => [
      ...previous,
      {
        id: messageId,
        sender,
        text,
      },
    ]);

    setMessageId((previous) => previous + 1);
  }

  function sendMessage(
    event: FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    const userMessage = input.trim();

    if (!userMessage) return;

    const responseLanguage = detectLanguage(userMessage);
    const response = getResponse(
      userMessage,
      responseLanguage
    );

    setMessages((previous) => [
      ...previous,
      {
        id: messageId,
        sender: "user",
        text: userMessage,
      },
      {
        id: messageId + 1,
        sender: "bot",
        text: response,
      },
    ]);

    setMessageId((previous) => previous + 2);
    setInput("");
  }

  function sendQuickMessage(message: string) {
    const response = getResponse(message, language);

    setMessages((previous) => [
      ...previous,
      {
        id: messageId,
        sender: "user",
        text: message,
      },
      {
        id: messageId + 1,
        sender: "bot",
        text: response,
      },
    ]);

    setMessageId((previous) => previous + 2);
  }

  const whatsappText = encodeURIComponent(
    "Hello Real Bird Netting, I need a quotation for your services. My location is: "
  );

  const whatsappLink =
    `https://wa.me/${phoneNumber.replace(/\D/g, "")}` +
    `?text=${whatsappText}`;

  const quickQuestions = [
    { label: t.quickServices, message: "services" },
    { label: t.quickPrice, message: "price" },
    { label: t.quickArea, message: "location" },
    { label: t.quickPhoto, message: "send photos" },
  ];

  return (
    <div
      style={{
        position: "fixed",
        right: 24,
        bottom: 24,
        zIndex: 99999,
        fontFamily: "Arial, sans-serif",
      }}
    >
      {isOpen && (
        <section
          aria-label="Real Bird Netting chatbot"
          style={{
            width: 360,
            maxWidth: "calc(100vw - 32px)",
            height: 550,
            maxHeight: "calc(100dvh - 110px)",
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
            borderRadius: 18,
            background: "#ffffff",
            boxShadow: "0 12px 45px rgba(0,0,0,0.22)",
            border: "1px solid #e5e7eb",
            marginBottom: 14,
          }}
        >
          {/* Header */}
          <header
            style={{
              background: "#09264a",
              color: "#ffffff",
              padding: 16,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div>
              <strong style={{ fontSize: 17 }}>
                {t.title}
              </strong>

              <div
                style={{
                  fontSize: 12,
                  marginTop: 5,
                  color: "#d1fae5",
                }}
              >
                ● {t.online}
              </div>
            </div>

            <button
              type="button"
              onClick={() => setIsOpen(false)}
              aria-label="Close chatbot"
              style={iconButtonStyle}
            >
              ×
            </button>
          </header>

          {/* Language selector */}
          <div
            style={{
              display: "flex",
              gap: 8,
              padding: 10,
              background: "#f8fafc",
              borderBottom: "1px solid #e5e7eb",
            }}
          >
            <button
              type="button"
              onClick={() => setLanguage("en")}
              style={language === "en" ? activeLanguageStyle : languageStyle}
            >
              English
            </button>

            <button
              type="button"
              onClick={() => setLanguage("hi")}
              style={language === "hi" ? activeLanguageStyle : languageStyle}
            >
              हिंदी
            </button>
          </div>

          {/* Conversation */}
          <div
            aria-live="polite"
            style={{
              flex: 1,
              overflowY: "auto",
              padding: 14,
              background: "#f8fafc",
            }}
          >
            <div
              style={{
                background: "#ffffff",
                padding: 12,
                borderRadius: 14,
                fontSize: 14,
                lineHeight: 1.6,
                color: "#172033",
                boxShadow: "0 1px 5px rgba(0,0,0,0.06)",
                marginBottom: 12,
              }}
            >
              {t.welcome}
            </div>

            {messages.map((message) => (
              <div
                key={message.id}
                style={{
                  display: "flex",
                  justifyContent:
                    message.sender === "user"
                      ? "flex-end"
                      : "flex-start",
                  marginBottom: 12,
                }}
              >
                <div
                  style={{
                    maxWidth: "88%",
                    padding: "11px 13px",
                    borderRadius: 14,
                    fontSize: 14,
                    lineHeight: 1.6,
                    whiteSpace: "pre-wrap",
                    overflowWrap: "anywhere",
                    background:
                      message.sender === "user"
                        ? "#0b6bcb"
                        : "#ffffff",
                    color:
                      message.sender === "user"
                        ? "#ffffff"
                        : "#172033",
                    boxShadow: "0 1px 5px rgba(0,0,0,0.06)",
                  }}
                >
                  {message.text}
                </div>
              </div>
            ))}

            {/* Quick question buttons */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: 7,
                marginTop: 12,
              }}
            >
              {quickQuestions.map((question) => (
                <button
                  key={question.message}
                  type="button"
                  onClick={() =>
                    sendQuickMessage(question.message)
                  }
                  style={quickButtonStyle}
                >
                  {question.label}
                </button>
              ))}
            </div>
          </div>

          {/* Contact actions */}
          <div
            style={{
              display: "flex",
              gap: 8,
              padding: 10,
              borderTop: "1px solid #e5e7eb",
              background: "#ffffff",
            }}
          >
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              style={whatsappButtonStyle}
            >
              {t.whatsapp}
            </a>

            <a
              href={`tel:+${phoneNumber.replace(/\D/g, "")}`}
              style={callButtonStyle}
            >
              {t.call}
            </a>
          </div>

          {/* Message form */}
          <form
            onSubmit={sendMessage}
            style={{
              display: "flex",
              gap: 8,
              padding: 10,
              background: "#ffffff",
              borderTop: "1px solid #e5e7eb",
            }}
          >
            <input
              value={input}
              onChange={(event) => setInput(event.target.value)}
              placeholder={t.placeholder}
              aria-label={t.placeholder}
              style={inputStyle}
            />

            <button
              type="submit"
              style={sendButtonStyle}
            >
              {t.send}
            </button>
          </form>
        </section>
      )}

      {/* Floating launcher */}
      <button
        type="button"
        onClick={() => setIsOpen((previous) => !previous)}
        aria-label={isOpen ? "Close chat" : "Open chat"}
        style={{
          width: 62,
          height: 62,
          borderRadius: "50%",
          border: "none",
          background: "#08a982",
          color: "#ffffff",
          fontSize: 28,
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginLeft: "auto",
          boxShadow: "0 5px 20px rgba(0,0,0,0.25)",
        }}
      >
        {isOpen ? "×" : "☏"}
      </button>
    </div>
  );
}

const iconButtonStyle = {
  border: "none",
  background: "transparent",
  color: "#ffffff",
  fontSize: 28,
  cursor: "pointer",
  lineHeight: 1,
};

const languageStyle = {
  flex: 1,
  border: "1px solid #d1d5db",
  background: "#ffffff",
  color: "#334155",
  borderRadius: 8,
  padding: "8px 10px",
  cursor: "pointer",
  fontSize: 13,
};

const activeLanguageStyle = {
  ...languageStyle,
  background: "#09264a",
  color: "#ffffff",
  border: "1px solid #09264a",
};

const quickButtonStyle = {
  border: "1px solid #b6d7f5",
  background: "#ffffff",
  color: "#0759a5",
  borderRadius: 20,
  padding: "7px 10px",
  fontSize: 12,
  cursor: "pointer",
};

const whatsappButtonStyle = {
  flex: 1,
  textAlign: "center" as const,
  textDecoration: "none",
  background: "#0aa878",
  color: "#ffffff",
  padding: 11,
  borderRadius: 9,
  fontSize: 13,
  fontWeight: 600,
};

const callButtonStyle = {
  flex: 1,
  textAlign: "center" as const,
  textDecoration: "none",
  background: "#09264a",
  color: "#ffffff",
  padding: 11,
  borderRadius: 9,
  fontSize: 13,
  fontWeight: 600,
};

const inputStyle = {
  flex: 1,
  minWidth: 0,
  border: "1px solid #d1d5db",
  borderRadius: 9,
  padding: "11px 12px",
  fontSize: 14,
  outline: "none",
  color: "#172033",
  background: "#ffffff",
};

const sendButtonStyle = {
  border: "none",
  borderRadius: 9,
  padding: "0 15px",
  background: "#09264a",
  color: "#ffffff",
  fontSize: 13,
  fontWeight: 600,
  cursor: "pointer",
};