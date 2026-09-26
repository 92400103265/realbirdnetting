"use client";

import { useState } from "react";

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<
    { user?: string; bot?: string }[]
  >([]);

  const getReply = (text: string) => {
    const msg = text.toLowerCase();

    if (
      msg.includes("invisible grill") ||
      msg.includes("invisible safety grill")
    ) {
      return "Yes, we provide Invisible Grill installation. Please share your location and balcony/window size for a quotation.";
    }

    if (
      msg.includes("bird net") ||
      msg.includes("pigeon net") ||
      msg.includes("bird netting")
    ) {
      return "Yes, we provide Bird Net Installation for balconies, windows and other areas. Please share your location.";
    }

    if (
      msg.includes("bird spike") ||
      msg.includes("bird spikes")
    ) {
      return "Yes, we provide Bird Spike installation for pigeon and bird control. Please share your location.";
    }

    if (
      msg.includes("safety net") ||
      msg.includes("balcony safety")
    ) {
      return "Yes, we provide Balcony Safety Net installation. Please share your location and approximate balcony size.";
    }

    if (
      msg.includes("price") ||
      msg.includes("cost") ||
      msg.includes("rate")
    ) {
      return "The price depends on the size, location and type of installation. Please share your location and approximate area for a quotation.";
    }

    if (
      msg.includes("contact") ||
      msg.includes("phone") ||
      msg.includes("number")
    ) {
      return "Please contact us through WhatsApp or the Contact Us page for assistance.";
    }

    return "Thank you for contacting Real Bird Netting. Please tell me which service you need: Invisible Grill, Bird Net, Bird Spikes or Balcony Safety Net.";
  };

  const sendMessage = () => {
    if (!message.trim()) return;

    const reply = getReply(message);

    setMessages((prev) => [
      ...prev,
      {
        user: message,
      },
      {
        bot: reply,
      },
    ]);

    setMessage("");
  };

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-green-600 text-white text-2xl shadow-lg"
      >
        💬
      </button>

      {/* Chat Window */}
      {open && (
        <div className="fixed bottom-24 right-6 z-50 w-[350px] max-w-[90vw] bg-white rounded-2xl shadow-2xl border overflow-hidden">

          {/* Header */}
          <div className="bg-green-600 text-white p-4">
            <h2 className="font-bold">
              Real Bird Netting
            </h2>

            <p className="text-sm">
              How can we help you?
            </p>
          </div>

          {/* Messages */}
          <div className="h-80 overflow-y-auto p-4 space-y-3">

            {messages.length === 0 && (
              <div className="bg-gray-100 rounded-lg p-3 text-sm">
                👋 Hello! How can we help you?
                <br />
                <br />
                You can ask about:
                <br />
                • Invisible Grill
                <br />
                • Bird Net
                <br />
                • Bird Spikes
                <br />
                • Balcony Safety Net
                <br />
                • Price
              </div>
            )}

            {messages.map((item, index) => (
              <div key={index}>

                {item.user && (
                  <div className="text-right mb-2">
                    <span className="inline-block bg-green-600 text-white rounded-lg px-3 py-2 text-sm">
                      {item.user}
                    </span>
                  </div>
                )}

                {item.bot && (
                  <div className="text-left">
                    <span className="inline-block bg-gray-100 rounded-lg px-3 py-2 text-sm">
                      {item.bot}
                    </span>
                  </div>
                )}

              </div>
            ))}
          </div>

          {/* Input */}
          <div className="border-t p-3 flex gap-2">

            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  sendMessage();
                }
              }}
              placeholder="Ask about our services..."
              className="flex-1 border rounded-lg px-3 py-2 text-sm outline-none"
            />

            <button
              onClick={sendMessage}
              className="bg-green-600 text-white px-4 rounded-lg"
            >
              Send
            </button>

          </div>
        </div>
      )}
    </>
  );
}