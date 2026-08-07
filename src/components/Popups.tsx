"use client";

import { useState, useEffect } from "react";
import { X, CheckCircle, Send, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Popups() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formType, setFormType] = useState<"exit" | "timed">("timed");

  // Form Fields
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("Balcony Safety Nets");
  const [message, setMessage] = useState("");

  const servicesList = [
    "Balcony Safety Nets",
    "Pigeon Safety Nets",
    "Bird Protection Nets",
    "Monkey Safety Nets",
    "Children Safety Nets",
    "Sports Safety Nets / Cricket Nets",
    "Invisible Grills (Balcony/Window)",
    "Ceiling Cloth Hangers",
    "All Types of Safety Nets"
  ];

  useEffect(() => {
    // Check if user already submitted or dismissed the popup recently
    const hasBeenShown = localStorage.getItem("bmc_popup_dismissed");
    if (hasBeenShown === "true") return;

    // 1. Timed Popup after 20 seconds
    const timedTimer = setTimeout(() => {
      setFormType("timed");
      setIsOpen(true);
    }, 20000); // 20 seconds

    // 2. Exit Intent Popup (desktop only)
    const handleMouseLeave = (e: MouseEvent) => {
      // e.clientY < 20 means mouse moved near/above address bar
      if (e.clientY < 20) {
        setFormType("exit");
        setIsOpen(true);
        clearTimeout(timedTimer);
      }
    };

    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      clearTimeout(timedTimer);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  const closePopup = () => {
    setIsOpen(false);
    localStorage.setItem("bmc_popup_dismissed", "true");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) {
      alert("Please fill out your Name and Phone number.");
      return;
    }
    
    // Trigger Google Ads Conversion
    if (typeof window !== 'undefined' && (window as any).gtag_report_conversion) {
      (window as any).gtag_report_conversion();
    }
    
    // Simulate API submission
    setIsSubmitted(true);
    localStorage.setItem("bmc_popup_dismissed", "true");
    
    // Clear fields
    setName("");
    setPhone("");
    setMessage("");

    // Close success popup after 3 seconds
    setTimeout(() => {
      setIsOpen(false);
      setIsSubmitted(false);
    }, 3000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closePopup}
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
          />

          {/* Modal Box */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-100 z-10"
          >
            {/* Header / Offer Banner */}
            <div className="bg-primary text-white p-5 pr-12 relative">
              <h3 className="font-bold text-xl font-display leading-tight">
                {formType === "exit" 
                  ? "Wait! Get a Free Inspection Today 🏷️" 
                  : "Book Free Site Inspection & Quote"}
              </h3>
              <p className="text-blue-100 text-xs mt-1">
                Same Day Service. Premium UV-Resistant Nets & Professional Fitting.
              </p>
              <button
                onClick={closePopup}
                className="absolute top-4 right-4 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 p-1.5 rounded-lg transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content Area */}
            <div className="p-6">
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="popup-name" className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-1">
                      Your Name *
                    </label>
                    <input
                      id="popup-name"
                      type="text"
                      required
                      placeholder="Enter your name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="popup-phone" className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-1">
                      Phone Number *
                    </label>
                    <input
                      id="popup-phone"
                      type="tel"
                      required
                      placeholder="Enter 10-digit phone number"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="popup-service" className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-1">
                      Service Needed
                    </label>
                    <select
                      id="popup-service"
                      value={service}
                      onChange={(e) => setService(e.target.value)}
                      className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                    >
                      {servicesList.map((srv) => (
                        <option key={srv} value={srv}>
                          {srv}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="popup-message" className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-1">
                      Message (Optional)
                    </label>
                    <textarea
                      id="popup-message"
                      rows={2}
                      placeholder="Any specific instructions..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-none"
                    />
                  </div>

                  {/* Trust Factors inside popup */}
                  <div className="grid grid-cols-2 gap-2 text-[11px] text-slate-600 pt-1">
                    <span className="flex items-center space-x-1">
                      <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                      <span>Same-Day Inspection</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                      <span>No Obligation Quote</span>
                    </span>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-accent hover:bg-accent-dark text-slate-900 py-3 rounded-lg text-sm font-bold flex items-center justify-center space-x-2 shadow-md hover:shadow-lg transition-all active:scale-98"
                  >
                    <Send className="w-4 h-4 fill-slate-900" />
                    <span>Get Free Quote Now</span>
                  </button>

                  <div className="text-center pt-1">
                    <span className="text-xs text-slate-400">Or connect instantly via</span>
                    <div className="flex justify-center space-x-4 mt-2">
                      <a
                        href="tel:+919686668224"
                        className="flex items-center space-x-1 text-primary hover:text-primary-light font-bold text-xs"
                      >
                        <Phone className="w-3 h-3 fill-primary" />
                        <span>Call +91 96866 68224</span>
                      </a>
                    </div>
                  </div>
                </form>
              ) : (
                <div className="py-8 flex flex-col items-center justify-center text-center space-y-3">
                  <CheckCircle className="w-16 h-16 text-accent animate-bounce" />
                  <h4 className="font-bold text-lg text-slate-800 font-display">Enquiry Submitted!</h4>
                  <p className="text-sm text-slate-600 max-w-xs">
                    Thank you. Our executive will call you in the next 15 minutes to schedule the visit.
                  </p>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
