 "use client";

import { useEffect, useState } from "react";

const WHATSAPP_NUMBER = "919354254539";

export default function Poppups() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Show popup after the website loads
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  const openWhatsApp = () => {
    const message = encodeURIComponent(
      "Hello RealBirdNets Control Service, I would like to know more about your services."
    );

    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 px-4 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="popup-title"
    >
      <div className="relative w-full max-w-md overflow-hidden rounded-2xl bg-white shadow-2xl">

        {/* Close Button */}
        <button
          type="button"
          onClick={() => setIsOpen(false)}
          aria-label="Close popup"
          className="absolute right-3 top-3 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-xl text-gray-700 shadow-md transition hover:bg-gray-100"
        >
          ×
        </button>

        {/* Top Section */}
        <div className="bg-green-600 px-6 py-8 text-center text-white">
          <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-white text-3xl shadow-lg">
            🐦
          </div>

          <h2
            id="popup-title"
            className="text-2xl font-bold sm:text-3xl"
          >
            RealBirdNets
          </h2>

          <p className="mt-1 text-lg font-medium">
            Control Service
          </p>

          <p className="mt-2 text-sm text-green-50">
            Professional Bird Protection & Safety Solutions
          </p>
        </div>

        {/* Content */}
        <div className="px-6 py-6 text-center">

          <h3 className="text-xl font-bold text-gray-900">
            Welcome to RealBirdNets!
          </h3>

          <p className="mt-3 text-sm leading-6 text-gray-600">
            Protect your home, balcony and property from unwanted birds
            with our professional bird control solutions.
          </p>

          {/* Services */}
          <div className="mt-5 grid grid-cols-2 gap-3 text-left">

            <div className="rounded-xl bg-gray-50 p-3">
              <p className="font-semibold text-gray-900">
                🛡️ Bird Spikes
              </p>
              <p className="mt-1 text-xs text-gray-500">
                Professional installation
              </p>
            </div>

            <div className="rounded-xl bg-gray-50 p-3">
              <p className="font-semibold text-gray-900">
                🏠 Bird Nets
              </p>
              <p className="mt-1 text-xs text-gray-500">
                Balcony protection
              </p>
            </div>

            <div className="rounded-xl bg-gray-50 p-3">
              <p className="font-semibold text-gray-900">
                🔒 Invisible Grill
              </p>
              <p className="mt-1 text-xs text-gray-500">
                Safety & protection
              </p>
            </div>

            <div className="rounded-xl bg-gray-50 p-3">
              <p className="font-semibold text-gray-900">
                ☀️ Solar Protection
              </p>
              <p className="mt-1 text-xs text-gray-500">
                Bird protection
              </p>
            </div>

          </div>

          {/* WhatsApp Button */}
          <button
            type="button"
            onClick={openWhatsApp}
            className="mt-6 flex w-full items-center justify-center gap-3 rounded-xl bg-green-500 px-5 py-3.5 font-bold text-white shadow-md transition hover:bg-green-600 hover:shadow-lg"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-6 w-6"
              aria-hidden="true"
            >
              <path d="M20.52 3.48A11.86 11.86 0 0 0 12.05 0C5.5 0 .17 5.32.17 11.88c0 2.09.55 4.13 1.59 5.93L.07 24l6.34-1.66a11.87 11.87 0 0 0 5.64 1.43h.01c6.55 0 11.88-5.32 11.88-11.88 0-3.18-1.24-6.16-3.42-8.41ZM12.06 21.78h-.01a9.86 9.86 0 0 1-5.03-1.37l-.36-.21-3.76.98 1-3.66-.23-.38a9.86 9.86 0 0 1-1.51-5.26c0-5.45 4.44-9.88 9.89-9.88 2.64 0 5.12 1.03 6.99 2.9a9.83 9.83 0 0 1 2.89 6.99c0 5.45-4.44 9.89-9.87 9.89Zm5.42-7.4c-.3-.15-1.77-.87-2.05-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.47-.89-.79-1.49-1.76-1.66-2.06-.17-.3-.02-.46.13-.61.14-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.49s1.07 2.89 1.22 3.09c.15.2 2.1 3.21 5.09 4.5.71.31 1.27.49 1.7.63.72.23 1.38.2 1.9.12.58-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z" />
            </svg>

            Chat on WhatsApp
          </button>

          <p className="mt-3 text-xs text-gray-500">
            WhatsApp: +91 93542 54539
          </p>

          {/* Continue Button */}
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            className="mt-4 text-sm font-medium text-gray-500 underline underline-offset-4 transition hover:text-gray-800"
          >
            Continue to website
          </button>
        </div>
      </div>
    </div>
  );
}