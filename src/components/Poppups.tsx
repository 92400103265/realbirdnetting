  "use client";

import { useCallback, useEffect, useRef, useState } from "react";

/* =========================================================
   CONFIGURATION
   ========================================================= */

const WHATSAPP_NUMBER = "919354254539";

const INITIAL_DELAY = 800;
const REOPEN_DELAY = 5000;
const CLOSE_ANIMATION = 400;

const WHATSAPP_MESSAGE =
  "Hello RealBirdNets Control Service, I would like to know more about your services.";

/* =========================================================
   TYPES
   ========================================================= */

type PopupState = "hidden" | "opening" | "visible" | "closing";

/* =========================================================
   WHATSAPP ICON
   ========================================================= */

function WhatsAppIcon({
  className = "h-7 w-7",
}: {
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path
        d="
        M20.52 3.48A11.86 11.86 0 0 0 12.05 0
        C5.5 0 .17 5.32.17 11.88
        c0 2.09.55 4.13 1.59 5.93L.07 24l6.34-1.66
        a11.87 11.87 0 0 0 5.64 1.43h.01
        c6.55 0 11.88-5.32 11.88-11.88
        0-3.18-1.24-6.16-3.42-8.41ZM12.06 21.78h-.01
        a9.86 9.86 0 0 1-5.03-1.37l-.36-.21-3.76.98
        1-3.66-.23-.38a9.86 9.86 0 0 1-1.51-5.26
        c0-5.45 4.44-9.88 9.89-9.88
        2.64 0 5.12 1.03 6.99 2.9
        a9.83 9.83 0 0 1 2.89 6.99
        c0 5.45-4.44 9.89-9.87 9.89Zm5.42-7.4
        c-.3-.15-1.77-.87-2.05-.97
        -.27-.1-.47-.15-.67.15
        -.2.3-.77.97-.94 1.17
        -.17.2-.35.22-.65.07
        -.3-.15-1.26-.46-2.4-1.47
        -.89-.79-1.49-1.76-1.66-2.06
        -.17-.3-.02-.46.13-.61
        .14-.14.3-.35.45-.52
        .15-.17.2-.3.3-.5
        .1-.2.05-.37-.02-.52
        -.07-.15-.67-1.62-.92-2.22
        -.24-.58-.49-.5-.67-.51h-.57
        c-.2 0-.52.07-.79.37
        -.27.3-1.04 1.02-1.04 2.49
        s1.07 2.89 1.22 3.09
        c.15.2 2.1 3.21 5.09 4.5
        .71.31 1.27.49 1.7.63
        .72.23 1.38.2 1.9.12
        .58-.09 1.77-.72 2.02-1.42
        .25-.7.25-1.3.17-1.42
        -.07-.12-.27-.2-.57-.35Z
      "
      />
    </svg>
  );
}

/* =========================================================
   MAIN COMPONENT
   ========================================================= */

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

  /* =========================================================
     CLEAR TIMERS
     ========================================================= */

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

  /* =========================================================
     OPEN POPUP
     ========================================================= */

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

  /* =========================================================
     CLOSE POPUP
     ========================================================= */

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

  /* =========================================================
     INITIAL LOAD
     ========================================================= */

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

  /* =========================================================
     ESC KEY
     ========================================================= */

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

  /* =========================================================
     BODY SCROLL LOCK
     ========================================================= */

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

  /* =========================================================
     WHATSAPP
     ========================================================= */

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

  /* =========================================================
     BACKDROP CLICK
     ========================================================= */

  const handleBackdropClick = (
    event: React.MouseEvent<HTMLDivElement>
  ) => {
    if (event.target === event.currentTarget) {
      closePopup(true);
    }
  };

  /* =========================================================
     DON'T RENDER BEFORE CLIENT
     ========================================================= */

  if (!mounted || !isOpen) {
    return null;
  }

  /* =========================================================
     RENDER
     ========================================================= */

  return (
    <>
      {/* =====================================================
          ANIMATIONS
          ===================================================== */}

      <style>{`
        /* BACKDROP */

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

        /* DESKTOP POPUP */

        @keyframes rbDesktopIn {
          0% {
            opacity: 0;
            transform:
              translateY(60px)
              scale(0.86)
              rotateX(8deg);
          }

          55% {
            opacity: 1;
            transform:
              translateY(-10px)
              scale(1.025)
              rotateX(0deg);
          }

          75% {
            transform:
              translateY(4px)
              scale(0.995);
          }

          100% {
            opacity: 1;
            transform:
              translateY(0)
              scale(1);
          }
        }

        @keyframes rbDesktopOut {
          from {
            opacity: 1;
            transform:
              translateY(0)
              scale(1);
          }

          to {
            opacity: 0;
            transform:
              translateY(45px)
              scale(0.92);
          }
        }

        /* MOBILE POPUP */

        @keyframes rbMobileIn {
          0% {
            opacity: 0;
            transform: translateY(100%);
          }

          65% {
            opacity: 1;
            transform: translateY(-12px);
          }

          82% {
            transform: translateY(4px);
          }

          100% {
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

        /* WHATSAPP HEADER ICON */

        @keyframes rbWhatsAppIcon {
          0% {
            opacity: 0;
            transform:
              scale(0.45)
              rotate(-20deg);
          }

          60% {
            opacity: 1;
            transform:
              scale(1.15)
              rotate(5deg);
          }

          80% {
            transform:
              scale(0.96)
              rotate(-2deg);
          }

          100% {
            opacity: 1;
            transform:
              scale(1)
              rotate(0deg);
          }
        }

        /* SERVICE CARDS */

        @keyframes rbCardIn {
          from {
            opacity: 0;
            transform:
              translateY(25px)
              scale(0.96);
          }

          to {
            opacity: 1;
            transform:
              translateY(0)
              scale(1);
          }
        }

        /* TEXT */

        @keyframes rbTextIn {
          from {
            opacity: 0;
            transform: translateY(15px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* WHATSAPP PULSE */

        @keyframes rbWhatsAppPulse {
          0% {
            box-shadow:
              0 0 0 0
              rgba(34, 197, 94, 0.55);
          }

          70% {
            box-shadow:
              0 0 0 15px
              rgba(34, 197, 94, 0);
          }

          100% {
            box-shadow:
              0 0 0 0
              rgba(34, 197, 94, 0);
          }
        }

        /* WHATSAPP ICON BOUNCE */

        @keyframes rbIconBounce {
          0%,
          100% {
            transform: scale(1);
          }

          50% {
            transform: scale(1.15);
          }
        }

        /* SHINE */

        @keyframes rbShine {
          from {
            transform: translateX(-130%)
              skewX(-20deg);
          }

          to {
            transform: translateX(130%)
              skewX(-20deg);
          }
        }

        /* BACKDROP */

        .rb-backdrop.opening,
        .rb-backdrop.visible {
          animation:
            rbBackdropIn
            400ms
            ease-out
            forwards;
        }

        .rb-backdrop.closing {
          animation:
            rbBackdropOut
            400ms
            ease-in
            forwards;
        }

        /* DESKTOP */

        .rb-desktop.opening {
          animation:
            rbDesktopIn
            500ms
            cubic-bezier(
              0.175,
              0.885,
              0.32,
              1.275
            )
            forwards;
        }

        .rb-desktop.visible {
          opacity: 1;
          transform:
            translateY(0)
            scale(1);
        }

        .rb-desktop.closing {
          animation:
            rbDesktopOut
            400ms
            ease-in
            forwards;
        }

        /* MOBILE */

        .rb-mobile.opening {
          animation:
            rbMobileIn
            500ms
            cubic-bezier(
              0.175,
              0.885,
              0.32,
              1.275
            )
            forwards;
        }

        .rb-mobile.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .rb-mobile.closing {
          animation:
            rbMobileOut
            400ms
            ease-in
            forwards;
        }

        /* HEADER WHATSAPP */

        .rb-header-whatsapp {
          animation:
            rbWhatsAppIcon
            650ms
            cubic-bezier(
              0.175,
              0.885,
              0.32,
              1.275
            )
            120ms
            both;
        }

        /* TEXT */

        .rb-text {
          animation:
            rbTextIn
            500ms
            ease-out
            180ms
            both;
        }

        /* CARDS */

        .rb-card-1 {
          animation:
            rbCardIn
            450ms
            ease-out
            250ms
            both;
        }

        .rb-card-2 {
          animation:
            rbCardIn
            450ms
            ease-out
            330ms
            both;
        }

        .rb-card-3 {
          animation:
            rbCardIn
            450ms
            ease-out
            410ms
            both;
        }

        .rb-card-4 {
          animation:
            rbCardIn
            450ms
            ease-out
            490ms
            both;
        }

        /* SERVICE IMAGE */

        .rb-service-image {
          transition:
            transform 500ms ease,
            filter 500ms ease;
        }

        .rb-service-icon:hover .rb-service-image {
          transform: scale(1.07);
          filter: brightness(1.05);
        }

        /* WHATSAPP BUTTON */

        .rb-whatsapp-button {
          position: relative;
          overflow: hidden;
          animation:
            rbWhatsAppPulse
            2.2s
            infinite;
        }

        .rb-whatsapp-button::before {
          content: "";
          position: absolute;
          top: 0;
          bottom: 0;
          left: -50%;
          width: 35%;
          background:
            linear-gradient(
              90deg,
              transparent,
              rgba(255,255,255,0.35),
              transparent
            );
          transform: skewX(-20deg);
        }

        .rb-whatsapp-button:hover::before {
          animation:
            rbShine
            700ms
            ease-in-out;
        }

        .rb-whatsapp-button:hover .rb-button-icon {
          animation:
            rbIconBounce
            500ms
            ease-in-out;
        }

        /* REDUCE MOTION */

        @media (prefers-reduced-motion: reduce) {
          *,
          *::before,
          *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            scroll-behavior: auto !important;
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
          "items-center justify-center " +
          "bg-black/60 px-4 backdrop-blur-md md:flex"
        }
        role="dialog"
        aria-modal="true"
        aria-labelledby="desktop-popup-title"
        onMouseDown={handleBackdropClick}
      >
        <div
          className={
            "rb-desktop " +
            popupState +
            " relative w-full max-w-xl " +
            "max-h-[90vh] overflow-y-auto " +
            "rounded-[28px] bg-white shadow-[0_30px_100px_rgba(0,0,0,0.35)]"
          }
        >
          {/* CLOSE */}

          <button
            type="button"
            onClick={() => closePopup(true)}
            aria-label="Close popup"
            className="
              absolute right-4 top-4 z-50
              flex h-10 w-10 items-center
              justify-center rounded-full
              bg-white/95 text-2xl font-light
              text-gray-700 shadow-lg
              transition duration-300
              hover:scale-110
              hover:bg-gray-100
              hover:text-gray-950
              active:scale-90
            "
          >
            ×
          </button>

          {/* =================================================
              HEADER
              ================================================= */}

          <div
            className="
              relative overflow-hidden
              bg-gradient-to-br
              from-green-600
              via-green-500
              to-emerald-600
              px-8 pb-8 pt-9
              text-center text-white
            "
          >
            {/* Decorative circle */}

            <div
              className="
                absolute -left-16 -top-16
                h-44 w-44 rounded-full
                bg-white/10
              "
            />

            <div
              className="
                absolute -bottom-24 -right-10
                h-52 w-52 rounded-full
                bg-white/10
              "
            />

            {/* WHATSAPP LOGO */}

            <div
              className="
                rb-header-whatsapp
                relative mx-auto mb-4
                flex h-20 w-20
                items-center justify-center
                rounded-full
                bg-white
                text-green-500
                shadow-2xl
              "
            >
              <WhatsAppIcon className="h-11 w-11" />
            </div>

            <div className="rb-text relative">
              <h2
                id="desktop-popup-title"
                className="
                  text-3xl
                  font-extrabold
                  tracking-tight
                "
              >
                RealBirdNets
              </h2>

              <p
                className="
                  mt-1
                  text-xl
                  font-bold
                "
              >
                Control Service
              </p>

              <p
                className="
                  mx-auto
                  mt-2
                  max-w-md
                  text-sm
                  leading-6
                  text-green-50
                "
              >
                Professional Bird Protection & Safety Solutions
              </p>
            </div>
          </div>

          {/* =================================================
              CONTENT
              ================================================= */}

          <div className="px-7 py-6 sm:px-8 sm:py-7">
            {/* WELCOME */}

            <div className="rb-text text-center">
              <h3
                className="
                  text-2xl
                  font-extrabold
                  text-gray-900
                "
              >
                Welcome to Realbirdnetting!
              </h3>

              <p
                className="
                  mx-auto
                  mt-2
                  max-w-lg
                  text-sm
                  leading-6
                  text-gray-600
                "
              >
                Protect your home, balcony and property
                from unwanted birds with our professional
                bird control solutions.
              </p>
            </div>

            {/* =================================================
                SERVICES
                ================================================= */}

            <div
              className="
                mt-6
                grid
                grid-cols-2
                gap-3
              "
            >
              {/* SERVICE 1 */}

              <div
                className="
                  rb-card-1
                  rounded-2xl
                  border
                  border-gray-100
                  bg-gray-50
                  p-4
                  transition
                  duration-300
                  hover:-translate-y-1
                  hover:bg-green-50
                  hover:shadow-md
                "
              >
                <div
                  className="
                    rb-service-card
                    rb-service-icon
                    mb-2
                    h-16
                    w-full
                    overflow-hidden
                    rounded-xl
                    bg-white
                    shadow-sm
                  "
                >
                  <img
                    src="/images/spikes.png"
                    alt="Bird Spikes"
                    className="rb-service-image h-full w-full object-cover"
                  />
                </div>

                <p className="font-bold text-gray-900">
                  Bird Spikes
                </p>

                <p className="mt-1 text-xs text-gray-500">
                  Professional installation
                </p>
              </div>

              {/* SERVICE 2 */}

<div
  className="
    rb-card-2
    rb-service-card
    rounded-2xl
    border
    border-gray-100
    bg-gray-50
    p-4
    transition
    duration-300
    hover:-translate-y-1
    hover:bg-green-50
    hover:shadow-md
  "
>
  {/* Bird Nets Image */}
  <div
    className="
      mb-3
      h-16
      w-full
      overflow-hidden
      rounded-xl
      bg-white
      shadow-sm
    "
  >
    <img
      src="/images/bird-nets.png"
      alt="Bird Nets installation"
      className="
        rb-service-image
        h-full
        w-full
        object-cover
      "
    />
  </div>

  {/* Title */}
  <p className="font-bold text-gray-900">
    Bird Nets
  </p>

  {/* Description */}
  <p className="mt-1 text-xs text-gray-500">
    Balcony protection
  </p>
</div>

              {/* SERVICE 3 */}

              <div
                className="
                  rb-card-3
                  rounded-2xl
                  border
                  border-gray-100
                  bg-gray-50
                  p-4
                  transition
                  duration-300
                  hover:-translate-y-1
                  hover:bg-green-50
                  hover:shadow-md
                "
              >
                <div
                  className="
                    rb-service-card
                    rb-service-icon
                    mb-2
                    h-16
                    w-full
                    overflow-hidden
                    rounded-xl
                    bg-white
                    shadow-sm
                  "
                >
                  <img
                    src="/images/invisible-grill.png"
                    alt="Invisible Grill"
                    className="rb-service-image h-full w-full object-cover"
                  />
                </div>

                <p className="font-bold text-gray-900">
                  Invisible Grill
                </p>

                <p className="mt-1 text-xs text-gray-500">
                  Safety & protection
                </p>
              </div>

              {/* SERVICE 4 */}

              <div
                className="
                  rb-card-4
                  rounded-2xl
                  border
                  border-gray-100
                  bg-gray-50
                  p-4
                  transition
                  duration-300
                  hover:-translate-y-1
                  hover:bg-green-50
                  hover:shadow-md
                "
              >
                <div
                  className="
                    rb-service-card
                    rb-service-icon
                    mb-2
                    h-16
                    w-full
                    overflow-hidden
                    rounded-xl
                    bg-white
                    shadow-sm
                  "
                >
                  <img
                    src="/images/solar.png"
                    alt="Solar Protection"
                    className="rb-service-image h-full w-full object-cover"
                  />
                </div>

                <p className="font-bold text-gray-900">
                  Solar Protection
                </p>

                <p className="mt-1 text-xs text-gray-500">
                  Bird protection
                </p>
              </div>
            </div>

            {/* =================================================
                WHATSAPP BUTTON
                ================================================= */}

            <button
              type="button"
              onClick={openWhatsApp}
              className="
                rb-whatsapp-button
                mt-6
                flex
                w-full
                items-center
                justify-center
                gap-3
                rounded-2xl
                bg-[#25D366]
                px-5
                py-4
                text-base
                font-extrabold
                text-white
                shadow-lg
                transition
                duration-300
                hover:-translate-y-1
                hover:bg-[#20bd5a]
                hover:shadow-xl
                active:translate-y-0
                active:scale-[0.98]
              "
            >
              <span className="rb-button-icon relative z-10">
                <WhatsAppIcon className="h-7 w-7" />
              </span>

              <span className="relative z-10">
                Chat on WhatsApp
              </span>
            </button>

            {/* PHONE */}

            <p
              className="
                mt-3
                text-center
                text-xs
                text-gray-500
              "
            >
              WhatsApp: +91 93542 54539
            </p>

            {/* CONTINUE */}

            <button
              type="button"
              onClick={() => closePopup(true)}
              className="
                mx-auto
                mt-4
                block
                text-sm
                font-medium
                text-gray-500
                underline
                underline-offset-4
                transition
                duration-200
                hover:text-gray-900
              "
            >
              Continue to website
            </button>

            <p
              className="
                mt-3
                text-center
                text-[10px]
                text-gray-400
              "
            >
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
          " fixed inset-0 z-[9999] flex " +
          "items-end bg-black/60 " +
          "backdrop-blur-sm md:hidden"
        }
        role="dialog"
        aria-modal="true"
        aria-labelledby="mobile-popup-title"
        onMouseDown={handleBackdropClick}
      >
        <div
          className={
            "rb-mobile " +
            popupState +
            " relative max-h-[92vh] " +
            "w-full overflow-y-auto " +
            "rounded-t-[30px] bg-white " +
            "shadow-[0_-20px_80px_rgba(0,0,0,0.3)]"
          }
        >
          {/* HANDLE */}

          <div className="px-4 pt-3">
            <div
              className="
                mx-auto
                h-1.5
                w-12
                rounded-full
                bg-gray-300
              "
            />
          </div>

          {/* CLOSE */}

          <button
            type="button"
            onClick={() => closePopup(true)}
            aria-label="Close popup"
            className="
              absolute
              right-4
              top-5
              z-50
              flex
              h-9
              w-9
              items-center
              justify-center
              rounded-full
              bg-white
              text-2xl
              text-gray-700
              shadow-md
              transition
              duration-300
              hover:scale-110
              hover:bg-gray-100
              active:scale-90
            "
          >
            ×
          </button>

          {/* MOBILE HEADER */}

          <div
            className="
              relative
              mt-3
              overflow-hidden
              bg-gradient-to-br
              from-green-600
              via-green-500
              to-emerald-600
              px-5
              pb-6
              pt-5
              text-center
              text-white
            "
          >
            <div
              className="
                absolute
                -left-16
                -top-16
                h-36
                w-36
                rounded-full
                bg-white/10
              "
            />

            <div
              className="
                absolute
                -bottom-16
                -right-10
                h-40
                w-40
                rounded-full
                bg-white/10
              "
            />

            {/* MOBILE WHATSAPP LOGO */}

            <div
              className="
                rb-header-whatsapp
                relative
                mx-auto
                mb-3
                flex
                h-16
                w-16
                items-center
                justify-center
                rounded-full
                bg-white
                text-green-500
                shadow-xl
              "
            >
              <WhatsAppIcon className="h-9 w-9" />
            </div>

            <h2
              id="mobile-popup-title"
              className="
                relative
                text-2xl
                font-extrabold
              "
            >
              Realbirdnetting
            </h2>

            <p
              className="
                relative
                mt-1
                text-base
                font-semibold
              "
            >
              Control Service
            </p>

            <p
              className="
                relative
                mt-1
                text-xs
                text-green-50
              "
            >
              Professional Bird Protection & Safety Solutions
            </p>
          </div>

          {/* MOBILE CONTENT */}

          <div className="px-4 pb-6 pt-5">
            <div className="rb-text text-center">
              <h3
                className="
                  text-xl
                  font-extrabold
                  text-gray-900
                "
              >
                Welcome to Realbirdnetting!
              </h3>

              <p
                className="
                  mt-2
                  text-sm
                  leading-5
                  text-gray-600
                "
              >
                Protect your home, balcony and property
                from unwanted birds.
              </p>
            </div>

            {/* SERVICES */}

             {/* MOBILE SERVICE 2 - BIRD NETS */}

<div
  className="
    rb-card-2
    flex
    items-center
    gap-2.5
    rounded-xl
    border
    border-gray-100
    bg-gray-50
    p-3
  "
>
  <div
    className="
      rb-service-icon
      h-12
      w-12
      shrink-0
      overflow-hidden
      rounded-lg
      bg-white
      shadow-sm
    "
  >
    <img
      src="/images/bird-nets.png"
      alt="Bird Nets"
      className="rb-service-image h-full w-full object-cover"
    />
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
<div>

              <div
                className="
                  rb-card-3
                  flex
                  items-center
                  gap-2.5
                  rounded-xl
                  border
                  border-gray-100
                  bg-gray-50
                  p-3
                "
              >
                <div
                  className="
                    rb-service-icon
                    h-12
                    w-12
                    shrink-0
                    overflow-hidden
                    rounded-lg
                    bg-white
                    shadow-sm
                  "
                >
                  <img
                    src="/images/invisible-grill.png"
                    alt="Invisible Grill"
                    className="rb-service-image h-full w-full object-cover"
                  />
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
                  rb-card-4
                  flex
                  items-center
                  gap-2.5
                  rounded-xl
                  border
                  border-gray-100
                  bg-gray-50
                  p-3
                "
              >
                <div
                  className="
                    rb-service-icon
                    h-12
                    w-12
                    shrink-0
                    overflow-hidden
                    rounded-lg
                    bg-white
                    shadow-sm
                  "
                >
                  <img
                    src="/images/solar.png"
                    alt="Solar Protection"
                    className="rb-service-image h-full w-full object-cover"
                  />
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

            {/* MOBILE WHATSAPP */}

            <button
              type="button"
              onClick={openWhatsApp}
              className="
                rb-whatsapp-button
                mt-5
                flex
                w-full
                items-center
                justify-center
                gap-2.5
                rounded-2xl
                bg-[#25D366]
                px-4
                py-3.5
                text-base
                font-extrabold
                text-white
                shadow-lg
                transition
                duration-300
                hover:-translate-y-1
                hover:bg-[#20bd5a]
                active:scale-[0.97]
              "
            >
              <span className="rb-button-icon relative z-10">
                <WhatsAppIcon className="h-6 w-6" />
              </span>

              <span className="relative z-10">
                Chat on WhatsApp
              </span>
            </button>

            <p
              className="
                mt-2
                text-center
                text-[11px]
                text-gray-500
              "
            >
              +91 93542 54539
            </p>

            <button
              type="button"
              onClick={() => closePopup(true)}
              className="
                mx-auto
                mt-3
                block
                text-sm
                font-medium
                text-gray-500
                underline
                underline-offset-4
                transition
                hover:text-gray-900
              "
            >
              Continue to website
            </button>

            <p
              className="
                mt-3
                text-center
                text-[10px]
                text-gray-400
              "
            >
              Popup will appear again after 5 seconds.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
