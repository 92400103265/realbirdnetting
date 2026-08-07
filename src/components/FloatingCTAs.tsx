"use client";

import { useState, useEffect } from "react";
import { Phone, ArrowUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function FloatingCTAs() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const whatsappUrl = "https://wa.me/919686668224?text=Hi%20BMC%20Safety%20Nets%2C%20I%20want%20to%20book%20a%20free%20inspection%20for%20my%20balcony%20safety%20nets.";

  return (
    <>
      {/* Floating Buttons on Right (Desktop & Mobile) */}
      <div className="fixed bottom-24 right-5 z-40 flex flex-col space-y-3 items-end">
        {/* WhatsApp Floating */}
        <motion.a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="flex items-center justify-center w-14 h-14 bg-accent hover:bg-accent-dark text-white rounded-full shadow-lg cursor-pointer transition-colors duration-200 animate-pulse-subtle relative group"
          aria-label="Chat on WhatsApp"
        >
          <svg className="w-7 h-7 fill-white" viewBox="0 0 24 24">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.248 8.477 3.517 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.625 1.451 5.403.002 9.803-4.381 9.805-9.786.002-2.618-1.01-5.074-2.854-6.921C16.38 2.052 13.933.996 11.999.996 6.596.996 2.197 5.379 2.195 10.785c-.001 1.512.409 2.99 1.182 4.298l-.994 3.63 3.731-.973-1.066.614zm11.332-6.52c-.274-.136-1.62-.8-1.87-.892-.252-.09-.435-.136-.617.137-.183.272-.708.892-.868 1.074-.16.183-.32.204-.593.068-1.579-.79-2.73-1.37-3.818-3.23-.288-.492.288-.456.822-1.52.091-.183.046-.343-.023-.48-.068-.136-.617-1.484-.846-2.033-.223-.536-.469-.463-.617-.47l-.527-.008c-.183 0-.48.069-.731.343-.252.274-.96.937-.96 2.285 0 1.348.982 2.651 1.119 2.833.137.183 1.933 2.951 4.682 4.141.654.282 1.165.451 1.564.578.658.209 1.258.18 1.732.109.528-.079 1.62-.663 1.85-1.302.23-.639.23-1.187.16-1.302-.07-.116-.275-.183-.55-.32z"/>
          </svg>
          <span className="absolute right-16 bg-slate-900 text-white text-xs px-2.5 py-1 rounded shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
            WhatsApp Enquiry
          </span>
        </motion.a>

        {/* Call Floating */}
        <motion.a
          href="tel:+919686668224"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="flex items-center justify-center w-14 h-14 bg-call-red hover:bg-call-red-hover text-white rounded-full shadow-lg cursor-pointer transition-colors duration-200 group"
          aria-label="Call Customer Care"
        >
          <Phone className="w-6 h-6 fill-white" />
          <span className="absolute right-16 bg-slate-900 text-white text-xs px-2.5 py-1 rounded shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
            Call BMC Safety Nets
          </span>
        </motion.a>

        {/* Scroll To Top */}
        <AnimatePresence>
          {isVisible && (
            <motion.button
              onClick={scrollToTop}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              whileHover={{ scale: 1.1 }}
              className="flex items-center justify-center w-12 h-12 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-full shadow-md border border-slate-200 cursor-pointer transition-colors duration-200"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-5 h-5" />
            </motion.button>
          )}
        </AnimatePresence>
      </div>

      {/* Sticky Bottom Call + WhatsApp Bar (Mobile Only) */}
      <div className="sm:hidden fixed bottom-0 left-0 w-full bg-white border-t border-slate-200 shadow-[0_-4px_12px_rgba(0,0,0,0.08)] grid grid-cols-2 p-3 gap-3 z-50">
        <a
          href="tel:+919686668224"
          className="flex items-center justify-center space-x-2 bg-[#f97316] text-white py-3.5 px-4 rounded-xl text-base font-bold active:scale-95 transition-transform min-h-[48px]"
        >
          <Phone className="w-5 h-5 fill-white" />
          <span>Call Now</span>
        </a>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center space-x-2 bg-accent text-slate-900 py-3.5 px-4 rounded-xl text-base font-bold active:scale-95 transition-transform min-h-[48px]"
        >
          <svg className="w-5 h-5 fill-slate-900" viewBox="0 0 24 24">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.248 8.477 3.517 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.625 1.451 5.403.002 9.803-4.381 9.805-9.786.002-2.618-1.01-5.074-2.854-6.921C16.38 2.052 13.933.996 11.999.996 6.596.996 2.197 5.379 2.195 10.785c-.001 1.512.409 2.99 1.182 4.298l-.994 3.63 3.731-.973-1.066.614zm11.332-6.52c-.274-.136-1.62-.8-1.87-.892-.252-.09-.435-.136-.617.137-.183.272-.708.892-.868 1.074-.16.183-.32.204-.593.068-1.579-.79-2.73-1.37-3.818-3.23-.288-.492.288-.456.822-1.52.091-.183.046-.343-.023-.48-.068-.136-.617-1.484-.846-2.033-.223-.536-.469-.463-.617-.47l-.527-.008c-.183 0-.48.069-.731.343-.252.274-.96.937-.96 2.285 0 1.348.982 2.651 1.119 2.833.137.183 1.933 2.951 4.682 4.141.654.282 1.165.451 1.564.578.658.209 1.258.18 1.732.109.528-.079 1.62-.663 1.85-1.302.23-.639.23-1.187.16-1.302-.07-.116-.275-.183-.55-.32z"/>
          </svg>
          <span>WhatsApp</span>
        </a>
      </div>
    </>
  );
}
