 "use client";

import { useCallback, useEffect, useRef, useState } from "react";

const WHATSAPP_NUMBER = "919354254539";

const INITIAL_DELAY = 800;
const REOPEN_DELAY = 5000;
const CLOSE_ANIMATION = 400;

const WHATSAPP_MESSAGE =
  "Hello RealBirdNets Control Service, I would like to know more about your services.";

type PopupState = "hidden" | "opening" | "visible" | "closing";

export default function Poppups() {
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [popupState, setPopupState] =
    useState<PopupState>("hidden");

  const initialTimer = useRef<ReturnType<typeof setTimeout> | null>(
    null
  );

  const reopenTimer = useRef<ReturnType<typeof setTimeout> | null>(
    null
  );

  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(
    null
  );

  /*
   * ---------------------------------------------------------
   * CLEAR ALL TIMERS
   * ---------------------------------------------------------
   */

  const clearTimers = useCallback(() => {
    if (initialTimer.current !== null) {
      clearTimeout(initialTimer.current);
      initialTimer.current = null;
    }

    if (reopenTimer.current !== null) {
      clearTimeout(reopenTimer.current);
      reopenTimer.current = null;
    }

    if (closeTimer.current !== null) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  }, []);

  /*
   * ---------------------------------------------------------
   * OPEN POPUP
   * ---------------------------------------------------------
   */

  const openPopup = useCallback(() => {
    if (closeTimer.current !== null) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }

    setIsOpen(true);
    setPopupState("opening");

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setPopupState("visible");
      });
    });
  }, []);

  /*
   * ---------------------------------------------------------
   * CLOSE POPUP
   * ---------------------------------------------------------
   *
   * closePopup(true)
   *     -> close now
   *     -> reopen after 5 seconds
   *
   * closePopup(false)
   *     -> close permanently
   *
   */

  const closePopup = useCallback(
    (reopen = true) => {
      if (!isOpen) {
        return;
      }

      if (closeTimer.current !== null) {
        clearTimeout(closeTimer.current);
      }

      setPopupState("closing");

      closeTimer.current = setTimeout(() => {
        setIsOpen(false);
        setPopupState("hidden");
        closeTimer.current = null;

        if (reopen) {
          reopenTimer.current = setTimeout(() => {
            openPopup();
            reopenTimer.current = null;
          }, REOPEN_DELAY);
        }
      }, CLOSE_ANIMATION);
    },
    [isOpen, openPopup]
  );

  /*
   * ---------------------------------------------------------
   * INITIAL LOAD
   * ---------------------------------------------------------
   */

  useEffect(() => {
    setMounted(true);

    initialTimer.current = setTimeout(() => {
      openPopup();
      initialTimer.current = null;
    }, INITIAL_DELAY);

    return () => {
      clearTimers();
    };
  }, [clearTimers, openPopup]);

  /*
   * ---------------------------------------------------------
   * ESC KEY
   * ---------------------------------------------------------
   */

  useEffect(() => {
    if (!mounted) {
      return;
    }

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isOpen) {
        closePopup(true);
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, [mounted, isOpen, closePopup]);

  /*
   * ---------------------------------------------------------
   * LOCK BODY SCROLL
   * ---------------------------------------------------------
   */

  useEffect(() => {
    if (!mounted) {
      return;
    }

    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [mounted, isOpen]);

  /*
   * ---------------------------------------------------------
   * WHATSAPP
   * ---------------------------------------------------------
   */

  const openWhatsApp = () => {
    const message = encodeURIComponent(WHATSAPP_MESSAGE);

    const url =
      `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;

    window.open(
      url,
      "_blank",
      "noopener,noreferrer"
    );

    closePopup(true);
  };

  /*
   * ---------------------------------------------------------
   * BACKDROP CLICK
   * ---------------------------------------------------------
   */

  const handleBackdropClick = (
    event: React.MouseEvent<HTMLDivElement>
  ) => {
    if (event.target === event.currentTarget) {
      closePopup(true);
    }
  };

  /*
   * ---------------------------------------------------------
   * DO NOT RENDER BEFORE CLIENT
   * ---------------------------------------------------------
   */

  if (!mounted || !isOpen) {
    return null;
  }

  /*
   * ---------------------------------------------------------
   * RENDER
   * ---------------------------------------------------------
   */

  return (
    <>
      <style>{`
        @keyframes rbBackdropIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes rbBackdropOut {
          from {
            opacity: 1;
          }
          to {
            opacity: 0;
          }
        }

        @keyframes rbDesktopIn {
          from {
            opacity: 0;
            transform: translateY(40px) scale(0.92);
          }
          60% {
            opacity: 1;
            transform: translateY(-6px) scale(1.02);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes rbDesktopOut {
          from {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
          to {
            opacity: 0;
            transform: translateY(30px) scale(0.94);
          }
        }

        @keyframes rbMobileIn {
          from {
            opacity: 0;
            transform: translateY(100%);
          }
          70% {
            opacity: 1;
            transform: translateY(-8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes rbMobileOut {
          from {
            opacity: 1;
            transform: translateY(0);
          }
          to {
            opacity: 0;
            transform: translateY(100%);
          }
        }

        @keyframes rbLogo {
          from {
            opacity: 0;
            transform: scale(0.5) rotate(-15deg);
          }
          70% {
            transform: scale(1.08) rotate(3deg);
          }
          to {
            opacity: 1;
            transform: scale(1) rotate(0);
          }
        }

        @keyframes rbFloat {
          0% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-6px);
          }
          100% {
            transform: translateY(0);
          }
        }

        @keyframes rbCard {
          from {
            opacity: 0;
            transform: translateY(12px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes rbButtonPulse {
          0% {
            box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.5);
          }
          70% {
            box-shadow: 0 0 0 12px rgba(34, 197, 94, 0);
          }
          100% {
            box-shadow: 0 0 0 0 rgba(34, 197, 94, 0);
          }
        }

        .rb-backdrop.opening,
        .rb-backdrop.visible {
          animation: rbBackdropIn 400ms ease-out forwards;
        }

        .rb-backdrop.closing {
          animation: rbBackdropOut 400ms ease-in forwards;
        }

        .rb-desktop.opening {
          animation: rbDesktopIn 400ms ease-out forwards;
        }

        .rb-desktop.visible {
          opacity: 1;
          transform: translateY(0) scale(1);
        }

        .rb-desktop.closing {
          animation: rbDesktopOut 400ms ease-in forwards;
        }

        .rb-mobile.opening {
          animation: rbMobileIn 400ms ease-out forwards;
        }

        .rb-mobile.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .rb-mobile.closing {
          animation: rbMobileOut 400ms ease-in forwards;
        }

        .rb-logo {
          animation:
            rbLogo
            600ms
            cubic-bezier(0.175, 0.885, 0.32, 1.275)
            both;
        }

        .rb-bird {
          animation: rbFloat 3s ease-in-out infinite;
        }

        .rb-card-1 {
          animation: rbCard 400ms ease-out 150ms both;
        }

        .rb-card-2 {
          animation: rbCard 400ms ease-out 220ms both;
        }

        .rb-card-3 {
          animation: rbCard 400ms ease-out 290ms both;
        }

        .rb-card-4 {
          animation: rbCard 400ms ease-out 360ms both;
        }

        .rb-whatsapp {
          animation: rbButtonPulse 2s infinite;
        }

        .rb-whatsapp:hover {
          transform: translateY(-2px);
        }

        @media (prefers-reduced-motion: reduce) {
          .rb-backdrop,
          .rb-desktop,
          .rb-mobile,
          .rb-logo,
          .rb-bird,
          .rb-card-1,
          .rb-card-2,
          .rb-card-3,
          .rb-card-4,
          .rb-whatsapp {
            animation: none !important;
            transition: none !important;
          }
        }
      `}</style>

      {/* =====================================================
          DESKTOP POPUP
          ===================================================== */}

      <div
        className={
          "rb-backdrop " +
          popupState +
          " fixed inset-0 z-[9999] hidden " +
          "items-center justify-center bg-black/60 px-4 " +
          "backdrop-blur-md md:flex"
        }
        role="dialog"
        aria-modal="true"
        aria-labelledby="rb-desktop-title"
        onMouseDown={handleBackdropClick}
      >
        <div
          className={
            "rb-desktop " +
            popupState +
            " relative w-full max-w-lg overflow-hidden " +
            "rounded-3xl bg-white shadow-2xl"
          }
        >
          {/* Close */}

          <button
            type="button"
            onClick={() => closePopup(true)}
            aria-label="Close popup"
            className="
              absolute right-4 top-4 z-30
              flex h-10 w-10 items-center justify-center
              rounded-full bg-white text-2xl text-gray-700
              shadow-lg transition duration-300
              hover:scale-110 hover:bg-gray-100
              active:scale-95
            "
          >
            ×
          </button>

          {/* Header */}

          <div
            className="
              relative overflow-hidden
              bg-gradient-to-br
              from-green-600
              via-green-500
              to-emerald-600
              px-8 pb-8 pt-10 text-center text-white
            "
          >
            <div
              className="
                absolute -left-12 -top-12
                h-40 w-40 rounded-full bg-white/10
              "
            />

            <div
              className="
                absolute -bottom-20 -right-10
                h-48 w-48 rounded-full bg-white/10
              "
            />

            <div
              className="
                rb-logo relative mx-auto mb-4
                flex h-24 w-24 items-center
                justify-center rounded-full
                bg-white text-4xl shadow-xl
              "
            >
              <span className="rb-bird">🐦</span>
            </div>

            <h2
              id="rb-desktop-title"
              className="relative text-3xl font-extrabold"
            >
              RealBirdNets
            </h2>

            <p className="relative mt-1 text-xl font-semibold">
              Control Service
            </p>

            <p className="relative mx-auto mt-2 max-w-sm text-sm text-green-50">
              Professional Bird Protection & Safety Solutions
            </p>
          </div>

          {/* Content */}

          <div className="px-7 py-7 sm:px-8">
            <div className="text-center">
              <h3 className="text-2xl font-extrabold text-gray-900">
                Welcome to RealBirdNets!
              </h3>

              <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-gray-600">
                Protect your home, balcony and property from unwanted
                birds with our professional bird control solutions.
              </p>
            </div>

            {/* Services */}

            <div className="mt-6 grid grid-cols-2 gap-3">
              <div
                className="
                  rb-card-1 rounded-2xl border
                  border-gray-100 bg-gray-50 p-4
                  transition duration-300
                  hover:-translate-y-1
                  hover:bg-green-50
                  hover:shadow-md
                "
              >
                <div
                  className="
                    mb-2 flex h-10 w-10 items-center
                    justify-center rounded-xl bg-white
                    text-xl shadow-sm
                  "
                >
                  🛡️
                </div>

                <p className="font-bold text-gray-900">
                  Bird Spikes
                </p>

                <p className="mt-1 text-xs text-gray-500">
                  Professional installation
                </p>
              </div>

              <div
                className="
                  rb-card-2 rounded-2xl border
                  border-gray-100 bg-gray-50 p-4
                  transition duration-300
                  hover:-translate-y-1
                  hover:bg-green-50
                  hover:shadow-md
                "
              >
                <div
                  className="
                    mb-2 flex h-10 w-10 items-center
                    justify-center rounded-xl bg-white
                    text-xl shadow-sm
                  "
                >
                  🏠
                </div>

                <p className="font-bold text-gray-900">
                  Bird Nets
                </p>

                <p className="mt-1 text-xs text-gray-500">
                  Balcony protection
                </p>
              </div>

              <div
                className="
                  rb-card-3 rounded-2xl border
                  border-gray-100 bg-gray-50 p-4
                  transition duration-300
                  hover:-translate-y-1
                  hover:bg-green-50
                  hover:shadow-md
                "
              >
                <div
                  className="
                    mb-2 flex h-10 w-10 items-center
                    justify-center rounded-xl bg-white
                    text-xl shadow-sm
                  "
                >
                  🔒
                </div>

                <p className="font-bold text-gray-900">
                  Invisible Grill
                </p>

                <p className="mt-1 text-xs text-gray-500">
                  Safety & protection
                </p>
              </div>

              <div
                className="
                  rb-card-4 rounded-2xl border
                  border-gray-100 bg-gray-50 p-4
                  transition duration-300
                  hover:-translate-y-1
                  hover:bg-green-50
                  hover:shadow-md
                "
              >
                <div
                  className="
                    mb-2 flex h-10 w-10 items-center
                    justify-center rounded-xl bg-white
                    text-xl shadow-sm
                  "
                >
                  ☀️
                </div>

                <p className="font-bold text-gray-900">
                  Solar Protection
                </p>

                <p className="mt-1 text-xs text-gray-500">
                  Bird protection
                </p>
              </div>
            </div>

            {/* WhatsApp */}

            <button
              type="button"
              onClick={openWhatsApp}
              className="
                rb-whatsapp mt-7 flex w-full
                items-center justify-center gap-3
                rounded-2xl bg-green-500
                px-5 py-4 text-base font-extrabold
                text-white shadow-lg
                transition duration-300
                hover:bg-green-600
                hover:shadow-xl
                active:scale-[0.98]
              "
            >
              <span className="text-2xl">💬</span>

              <span>Chat on WhatsApp</span>
            </button>

            <p className="mt-3 text-center text-xs text-gray-500">
              WhatsApp: +91 93542 54539
            </p>

            <button
              type="button"
              onClick={() => closePopup(true)}
              className="
                mx-auto mt-4 block
                text-sm font-medium text-gray-500
                underline underline-offset-4
                transition hover:text-gray-900
              "
            >
              Continue to website
            </button>

            <p className="mt-3 text-center text-[10px] text-gray-400">
              Popup will appear again after 5 seconds.
            </p>
          </div>
        </div>
      </div>

      {/* =====================================================
          MOBILE POPUP
          ===================================================== */}

      <div
        className={
          "rb-backdrop " +
          popupState +
          " fixed inset-0 z-[9999] flex items-end " +
          "bg-black/60 backdrop-blur-sm md:hidden"
        }
        role="dialog"
        aria-modal="true"
        aria-labelledby="rb-mobile-title"
        onMouseDown={handleBackdropClick}
      >
        <div
          className={
            "rb-mobile " +
            popupState +
            " relative max-h-[92vh] w-full overflow-y-auto " +
            "rounded-t-[30px] bg-white shadow-2xl"
          }
        >
          {/* Handle */}

          <div className="px-4 pt-3">
            <div
              className="
                mx-auto h-1.5 w-12
                rounded-full bg-gray-300
              "
            />
          </div>

          {/* Close */}

          <button
            type="button"
            onClick={() => closePopup(true)}
            aria-label="Close popup"
            className="
              absolute right-4 top-5 z-30
              flex h-9 w-9 items-center
              justify-center rounded-full
              bg-white text-2xl text-gray-700
              shadow-md transition
              hover:scale-110 hover:bg-gray-100
              active:scale-90
            "
          >
            ×
          </button>

          {/* Mobile Header */}

          <div
            className="
              relative mt-3 overflow-hidden
              bg-gradient-to-br
              from-green-600
              via-green-500
              to-emerald-600
              px-5 pb-6 pt-5
              text-center text-white
            "
          >
            <div
              className="
                absolute -left-16 -top-16
                h-36 w-36 rounded-full bg-white/10
              "
            />

            <div
              className="
                absolute -bottom-16 -right-10
                h-40 w-40 rounded-full bg-white/10
              "
            />

            <div
              className="
                rb-logo relative mx-auto mb-3
                flex h-16 w-16 items-center
                justify-center rounded-full
                bg-white text-3xl shadow-xl
              "
            >
              <span className="rb-bird">🐦</span>
            </div>

            <h2
              id="rb-mobile-title"
              className="relative text-2xl font-extrabold"
            >
              RealBirdNets
            </h2>

            <p className="relative mt-1 text-base font-semibold">
              Control Service
            </p>

            <p className="relative mt-1 text-xs text-green-50">
              Professional Bird Protection & Safety Solutions
            </p>
          </div>

          {/* Mobile Content */}

          <div className="px-4 pb-6 pt-5">
            <div className="text-center">
              <h3 className="text-xl font-extrabold text-gray-900">
                Welcome to RealBirdNets!
              </h3>

              <p className="mt-2 text-sm leading-5 text-gray-600">
                Protect your home, balcony and property from unwanted
                birds.
              </p>
            </div>

            {/* Mobile Services */}

            <div className="mt-5 grid grid-cols-2 gap-2.5">
              <div
                className="
                  rb-card-1 flex items-center gap-2.5
                  rounded-xl border border-gray-100
                  bg-gray-50 p-3
                "
              >
                <div
                  className="
                    flex h-9 w-9 shrink-0
                    items-center justify-center
                    rounded-lg bg-white
                    text-lg shadow-sm
                  "
                >
                  🛡️
                </div>

                <div>
                  <p className="text-xs font-bold text-gray-900">
                    Bird Spikes
                  </p>

                  <p className="mt-0.5 text-[10px] text-gray-500">
                    Installation
                  </p>
                </div>
              </div>

              <div
                className="
                  rb-card-2 flex items-center gap-2.5
                  rounded-xl border border-gray-100
                  bg-gray-50 p-3
                "
              >
                <div
                  className="
                    flex h-9 w-9 shrink-0
                    items-center justify-center
                    rounded-lg bg-white
                    text-lg shadow-sm
                  "
                >
                  🏠
                </div>

                <div>
                  <p className="text-xs font-bold text-gray-900">
                    Bird Nets
                  </p>

                  <p className="mt-0.5 text-[10px] text-gray-500">
                    Balcony
                  </p>
                </div>
              </div>

              <div
                className="
                  rb-card-3 flex items-center gap-2.5
                  rounded-xl border border-gray-100
                  bg-gray-50 p-3
                "
              >
                <div
                  className="
                    flex h-9 w-9 shrink-0
                    items-center justify-center
                    rounded-lg bg-white
                    text-lg shadow-sm
                  "
                >
                  🔒
                </div>

                <div>
                  <p className="text-xs font-bold text-gray-900">
                    Invisible Grill
                  </p>

                  <p className="mt-0.5 text-[10px] text-gray-500">
                    Safety
                  </p>
                </div>
              </div>

              <div
                className="
                  rb-card-4 flex items-center gap-2.5
                  rounded-xl border border-gray-100
                  bg-gray-50 p-3
                "
              >
                <div
                  className="
                    flex h-9 w-9 shrink-0
                    items-center justify-center
                    rounded-lg bg-white
                    text-lg shadow-sm
                  "
                >
                  ☀️
                </div>

                <div>
                  <p className="text-xs font-bold text-gray-900">
                    Solar Protection
                  </p>

                  <p className="mt-0.5 text-[10px] text-gray-500">
                    Protection
                  </p>
                </div>
              </div>
            </div>

            {/* Mobile WhatsApp */}

            <button
              type="button"
              onClick={openWhatsApp}
              className="
                rb-whatsapp mt-5 flex w-full
                items-center justify-center gap-2.5
                rounded-2xl bg-green-500
                px-4 py-3.5 text-base
                font-extrabold text-white
                shadow-lg transition
                hover:bg-green-600
                active:scale-[0.97]
              "
            >
              <span className="text-xl">💬</span>

              <span>Chat on WhatsApp</span>
            </button>

            <p className="mt-2 text-center text-[11px] text-gray-500">
              +91 93542 54539
            </p>

            <button
              type="button"
              onClick={() => closePopup(true)}
              className="
                mx-auto mt-3 block
                text-sm font-medium text-gray-500
                underline underline-offset-4
                transition hover:text-gray-900
              "
            >
              Continue to website
            </button>

            <p className="mt-3 text-center text-[10px] text-gray-400">
              Popup will appear again after 5 seconds.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}