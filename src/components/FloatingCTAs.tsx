 "use client";

import React, { useState } from "react";
import {
  MessageCircle,
  Phone,
  X,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function FloatingCTAs() {
  const [isOpen, setIsOpen] =
    useState(false);

  const whatsappMessage =
    encodeURIComponent(
      "Hi Real Bird Netting, I am looking for Bird Netting, Invisible Grills, or Balcony Safety Net services in Gurugram. Please share more information and arrange a free site inspection. Thank you."
    );

  return (
    <>
      {/* =====================================================
          WHATSAPP POPUP
      ===================================================== */}

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
              scale: 0.95,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              y: 20,
              scale: 0.95,
            }}
            transition={{
              duration: 0.2,
            }}
            className="fixed bottom-24 right-4 z-[100] w-[calc(100%-2rem)] max-w-[340px] sm:right-6"
          >

            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl">

              {/* POPUP HEADER */}

              <div className="bg-gradient-to-r from-emerald-500 to-teal-600 p-4 text-white">

                <div className="flex items-center justify-between">

                  <div className="flex items-center gap-3">

                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20">
                      <MessageCircle className="h-5 w-5" />
                    </div>

                    <div>

                      <p className="text-sm font-bold">
                        Real Bird Netting
                      </p>

                      <p className="text-xs text-white/80">
                        Usually replies quickly
                      </p>

                    </div>

                  </div>

                  <button
                    type="button"
                    onClick={() =>
                      setIsOpen(false)
                    }
                    className="flex h-8 w-8 items-center justify-center rounded-lg hover:bg-white/10"
                    aria-label="Close WhatsApp popup"
                  >
                    <X className="h-4 w-4" />
                  </button>

                </div>

              </div>

              {/* POPUP CONTENT */}

              <div className="p-4">

                <div className="rounded-xl bg-slate-50 p-3">

                  <p className="text-sm font-medium text-slate-700">
                    👋 Hello! How can we help you?
                  </p>

                  <p className="mt-1 text-xs leading-5 text-slate-500">
                    Get a free site inspection for bird netting,
                    invisible grills and balcony safety solutions.
                  </p>

                </div>

                {/* WHATSAPP */}

                <a
                  href={`https://wa.me/919354254539?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 py-3 text-sm font-bold text-white shadow-md transition-all hover:-translate-y-0.5 hover:shadow-lg active:scale-95"
                >
                  <MessageCircle className="h-5 w-5" />

                  Chat on WhatsApp
                </a>

                {/* CALL */}

                <a
                  href="tel:+919354254539"
                  className="mt-2 flex w-full items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white py-3 text-sm font-bold text-slate-700 transition-all hover:bg-slate-50 active:scale-95"
                >
                  <Phone className="h-4 w-4" />

                  Call +91 93542 54539
                </a>

              </div>

            </div>

          </motion.div>
        )}
      </AnimatePresence>

      {/* =====================================================
          FLOATING WHATSAPP BUTTON
      ===================================================== */}

      <motion.button
        type="button"
        onClick={() =>
          setIsOpen(
            (value) => !value
          )
        }
        whileHover={{
          scale: 1.05,
        }}
        whileTap={{
          scale: 0.95,
        }}
        className="fixed bottom-5 right-4 z-[101] flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 text-white shadow-xl shadow-emerald-500/30 sm:right-6"
        aria-label={
          isOpen
            ? "Close WhatsApp"
            : "Open WhatsApp"
        }
      >

        {isOpen ? (
          <X className="h-6 w-6" />
        ) : (
          <MessageCircle className="h-7 w-7" />
        )}

        {!isOpen && (
          <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-emerald-400 opacity-30" />
        )}

      </motion.button>
    </>
  );
}