 "use client";

import { useEffect, useState } from "react";
import {
  Phone,
  Menu,
  X,
  Mail,
  MapPin,
  Sparkles,
  Search,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "./Logo";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "Safety Nets", href: "#services" },
  { name: "Invisible Grills", href: "#invisible-grills" },
  { name: "Cloth Hangers", href: "#cloth-hangers" },
  { name: "Why Us", href: "#why-choose-us" },
  { name: "Gallery", href: "#gallery" },
  { name: "Reviews", href: "#reviews" },
  { name: "FAQ", href: "#faq" },
  { name: "Contact", href: "#contact" },
  { name: "Offers", href: "#offers" },
];

type ServiceTab = "nets" | "grills" | "hangers";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [activeTab, setActiveTab] = useState<ServiceTab>("nets");

  // -----------------------------------------
  // Scroll listener
  // -----------------------------------------
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // -----------------------------------------
  // Listen for Services tab changes
  // -----------------------------------------
  useEffect(() => {
    const handleTabChange = (event: Event) => {
      const customEvent = event as CustomEvent<ServiceTab>;

      if (customEvent.detail) {
        setActiveTab(customEvent.detail);
      }
    };

    window.addEventListener(
      "change-services-tab",
      handleTabChange
    );

    return () => {
      window.removeEventListener(
        "change-services-tab",
        handleTabChange
      );
    };
  }, []);

  // -----------------------------------------
  // Scroll spy
  // -----------------------------------------
  useEffect(() => {
    const observerOptions: IntersectionObserverInit = {
      root: null,
      rootMargin: "-25% 0px -55% 0px",
      threshold: 0.05,
    };

    const handleIntersection = (
      entries: IntersectionObserverEntry[]
    ) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute("id");

          if (id) {
            setActiveSection(id);
          }
        }
      });
    };

    const observer = new IntersectionObserver(
      handleIntersection,
      observerOptions
    );

    const sections = [
      "home",
      "services",
      "why-choose-us",
      "gallery",
      "reviews",
      "faq",
      "contact",
      "offers",
    ];

    sections.forEach((id) => {
      const element = document.getElementById(id);

      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      sections.forEach((id) => {
        const element = document.getElementById(id);

        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, []);

  // -----------------------------------------
  // Navigation click
  // -----------------------------------------
  const handleNavClick = (
    event: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    event.preventDefault();

    let targetId = href;

    // Invisible Grills
    if (href === "#invisible-grills") {
      targetId = "#services";

      window.dispatchEvent(
        new CustomEvent("change-services-tab", {
          detail: "grills",
        })
      );
    }

    // Cloth Hangers
    else if (href === "#cloth-hangers") {
      targetId = "#services";

      window.dispatchEvent(
        new CustomEvent("change-services-tab", {
          detail: "hangers",
        })
      );
    }

    // Safety Nets
    else if (href === "#services") {
      window.dispatchEvent(
        new CustomEvent("change-services-tab", {
          detail: "nets",
        })
      );
    }

    const target = document.querySelector(targetId);

    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    setIsMobileMenuOpen(false);
  };

  // -----------------------------------------
  // Active navigation item
  // -----------------------------------------
  const getIsActive = (href: string) => {
    const hash = href.slice(1);

    if (hash === "services") {
      return (
        activeSection === "services" &&
        activeTab === "nets"
      );
    }

    if (hash === "invisible-grills") {
      return (
        activeSection === "services" &&
        activeTab === "grills"
      );
    }

    if (hash === "cloth-hangers") {
      return (
        activeSection === "services" &&
        activeTab === "hangers"
      );
    }

    return activeSection === hash;
  };

  // -----------------------------------------
  // Search button
  // -----------------------------------------
  const handleSearch = () => {
    const searchElement =
      document.getElementById("site-search");

    if (searchElement) {
      searchElement.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    } else {
      console.warn(
        'Search target "#site-search" was not found.'
      );
    }
  };

  return (
    <header className="fixed top-0 left-0 z-50 w-full transition-all duration-300">
      {/* =========================================
          TOP ANNOUNCEMENT BAR
      ========================================== */}
      <div
        className={`overflow-hidden bg-gradient-to-r from-primary via-primary-light to-primary-dark text-xs text-slate-200 transition-all duration-500 ${
          isScrolled
            ? "h-0 opacity-0"
            : "flex h-[38px] items-center border-b border-white/5 opacity-100"
        }`}
      >
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Left */}
          <div className="flex items-center space-x-4">
            <span className="flex items-center gap-1.5 font-medium">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>

              Open 24/7
            </span>

            <span className="hidden text-slate-300 md:inline">
              |
            </span>

            <span className="hidden items-center gap-1 text-slate-300 md:flex">
              <MapPin className="h-3.5 w-3.5 text-accent" />
              Serving All Gurugram
            </span>
          </div>

          {/* Right */}
          <div className="flex items-center space-x-4">
            <a
              href="mailto:sachin2006simra@gmail.com"
              className="flex items-center gap-1 text-slate-300 transition-colors hover:text-white"
            >
              <Mail className="h-3.5 w-3.5 text-accent" />

              <span className="hidden sm:inline">
                sachin2006simra@gmail.com
              </span>
            </a>

            <span className="text-slate-500">|</span>

            <span className="flex items-center gap-1 font-semibold text-accent">
              <Sparkles className="h-3.5 w-3.5 animate-pulse" />
              Same Day Installation
            </span>
          </div>
        </div>
      </div>

      {/* =========================================
          NAVBAR OUTER CONTAINER
      ========================================== */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          className={`transition-all duration-500 ${
            isScrolled
              ? "mt-2 rounded-2xl border border-slate-200/80 bg-white/95 px-4 py-2.5 shadow-xl backdrop-blur-lg sm:px-6"
              : "mt-4 rounded-2xl border border-white/40 bg-white/85 px-4 py-4 shadow-lg backdrop-blur-md sm:px-6"
          }`}
        >
          {/* =========================================
              MAIN NAVBAR ROW
          ========================================== */}
          <div className="flex items-center gap-3">
            {/* Logo */}
            <a
              href="#home"
              className="flex shrink-0 items-center"
              onClick={(event) =>
                handleNavClick(event, "#home")
              }
              aria-label="Real Bird Netting Home"
            >
              <Logo
                height={isScrolled ? 48 : 56}
                isScrolled={true}
                theme="adaptive"
                className="transition-transform duration-200 hover:scale-105"
              />
            </a>

            {/* Desktop Navigation */}
            <nav className="ml-auto hidden items-center space-x-0.5 lg:flex xl:space-x-1.5">
              {navItems.map((item) => {
                const isActive = getIsActive(item.href);

                return (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={(event) =>
                      handleNavClick(event, item.href)
                    }
                    className={`group relative cursor-pointer whitespace-nowrap rounded-xl px-1.5 py-2 text-xs font-semibold transition-all duration-300 xl:px-3 xl:text-sm ${
                      isActive
                        ? "bg-primary/5 text-primary"
                        : "text-slate-600 hover:bg-slate-50 hover:text-primary"
                    }`}
                  >
                    {item.name}

                    <span
                      className={`absolute bottom-1 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-accent transition-all duration-300 ${
                        isActive
                          ? "scale-100 opacity-100"
                          : "scale-50 opacity-0 group-hover:scale-100 group-hover:opacity-100"
                      }`}
                    />
                  </a>
                );
              })}
            </nav>

            {/* Desktop Call / WhatsApp */}
            <div className="hidden items-center space-x-1.5 sm:flex xl:space-x-2.5">
              {/* Call */}
              <a
                href="tel:+919354254539"
                className="group flex items-center space-x-1.5 whitespace-nowrap rounded-xl border border-white/10 bg-gradient-to-r from-orange-500 to-orange-600 px-2.5 py-2 text-xs font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md hover:shadow-orange-500/20 xl:px-3.5 xl:py-2.5 xl:text-sm"
                aria-label="Call Real Bird Netting"
              >
                <Phone className="h-3.5 w-3.5 fill-white group-hover:animate-bounce" />

                <span className="hidden xl:inline">
                  +91 93542 54539
                </span>

                <span className="inline xl:hidden">
                  Call
                </span>
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/919354254539?text=Hi%20Real%20Bird%20Netting%2C%20I%20am%20looking%20for%20Bird%20Netting%2C%20Invisible%20Grills%2C%20or%20Balcony%20Safety%20Net%20services%20in%20Gurugram.%20Please%20share%20more%20information%20and%20arrange%20a%20free%20site%20inspection.%20Thank%20you."
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center space-x-1.5 whitespace-nowrap rounded-xl border border-white/10 bg-gradient-to-r from-emerald-500 to-teal-600 px-2.5 py-2 text-xs font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md hover:shadow-emerald-500/20 xl:px-3.5 xl:py-2.5 xl:text-sm"
                aria-label="Contact Real Bird Netting on WhatsApp"
              >
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-white" />
                </span>

                <svg
                  className="h-3.5 w-3.5 fill-white"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.248 8.477 3.517 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.625 1.451 5.403.002 9.803-4.381 9.805-9.786.002-2.618-1.01-5.074-2.854-6.921C16.38 2.052 13.933.996 11.999.996 6.596.996 2.197 5.379 2.195 10.785c-.001 1.512.409 2.99 1.182 4.298l-.994 3.63 3.731-.973-1.066.614zm11.332-6.52c-.274-.136-1.62-.8-1.87-.892-.252-.09-.435-.136-.617.137-.183.272-.708.892-.868 1.074-.16.183-.32.204-.593.068-1.579-.79-2.73-1.37-3.818-3.23-.288-.492.288-.456.822-1.52.091-.183.046-.343-.023-.48-.068-.136-.617-1.484-.846-2.033-.223-.536-.469-.463-.617-.47l-.527-.008c-.183 0-.48.069-.731.343-.252.274-.96.937-.96 2.285 0 1.348.982 2.651 1.119 2.833.137.183 1.933 2.951 4.682 4.141.654.282 1.165.451 1.564.578.658.209 1.258.18 1.732.109.528-.079 1.62-.663 1.85-1.302.23-.639.23-1.187.16-1.302-.07-.116-.275-.183-.55-.32z" />
                </svg>

                <span className="hidden xl:inline">
                  WhatsApp
                </span>

                <span className="inline xl:hidden">
                  Chat
                </span>
              </a>
            </div>

            {/* =========================================
                MOBILE CONTROLS
            ========================================== */}
            <div className="ml-auto flex items-center gap-2 lg:hidden">
              {/* Search */}
              <button
                type="button"
                onClick={handleSearch}
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 text-slate-800 shadow-sm transition-colors hover:bg-slate-100 active:scale-95"
                aria-label="Search"
              >
                <Search className="h-5 w-5" />
              </button>

              {/* Call */}
              <a
                href="tel:+919354254539"
                className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-md transition-all hover:opacity-95 active:scale-95"
                aria-label="Call Customer Care"
              >
                <Phone className="h-5 w-5 fill-white" />
              </a>

              {/* Menu */}
              <button
                type="button"
                onClick={() =>
                  setIsMobileMenuOpen(
                    (previous) => !previous
                  )
                }
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 text-slate-800 shadow-sm transition-colors hover:bg-slate-100 active:scale-95"
                aria-label={
                  isMobileMenuOpen
                    ? "Close menu"
                    : "Open menu"
                }
                aria-expanded={isMobileMenuOpen}
              >
                {isMobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>

          {/* =========================================
              MOBILE MENU
          ========================================== */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                initial={{
                  opacity: 0,
                  height: 0,
                  y: -10,
                }}
                animate={{
                  opacity: 1,
                  height: "auto",
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  height: 0,
                  y: -10,
                }}
                transition={{
                  duration: 0.25,
                  ease: "easeInOut",
                }}
                className="overflow-hidden lg:hidden"
              >
                <div className="mt-3 rounded-2xl border border-slate-200 bg-white p-3 shadow-xl">
                  {/* Mobile Navigation */}
                  <div className="grid grid-cols-1 gap-1">
                    {navItems.map((item, index) => {
                      const isActive = getIsActive(
                        item.href
                      );

                      return (
                        <motion.a
                          key={item.name}
                          initial={{
                            opacity: 0,
                            x: -10,
                          }}
                          animate={{
                            opacity: 1,
                            x: 0,
                          }}
                          transition={{
                            delay: index * 0.03,
                          }}
                          href={item.href}
                          onClick={(event) =>
                            handleNavClick(
                              event,
                              item.href
                            )
                          }
                          className={`block rounded-xl px-4 py-3 text-base font-bold transition-all ${
                            isActive
                              ? "border-l-4 border-accent bg-primary/5 pl-3 text-primary"
                              : "text-slate-700 hover:bg-slate-50 hover:text-primary"
                          }`}
                        >
                          {item.name}
                        </motion.a>
                      );
                    })}
                  </div>

                  {/* =====================================
                      MOBILE BUTTONS
                  ====================================== */}
                  <div className="mt-4 grid grid-cols-2 gap-3 border-t border-slate-100 pt-4">
                    {/* Call */}
                    <a
                      href="tel:+919354254539"
                      className="flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 py-3.5 text-sm font-bold text-white shadow-md transition-all hover:opacity-90 active:scale-95"
                      aria-label="Call Real Bird Netting"
                    >
                      <Phone className="h-4 w-4 fill-white" />
                      <span>Call Now</span>
                    </a>

                    {/* WhatsApp */}
                    <a
                      href="https://wa.me/919354254539?text=Hi%20Real%20Bird%20Netting%2C%20I%20am%20looking%20for%20Bird%20Netting%2C%20Invisible%20Grills%2C%20or%20Balcony%20Safety%20Net%20services%20in%20Gurugram.%20Please%20share%20more%20information%20and%20arrange%20a%20free%20site%20inspection.%20Thank%20you."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 py-3.5 text-sm font-bold text-white shadow-md transition-all hover:opacity-90 active:scale-95"
                      aria-label="Contact Real Bird Netting on WhatsApp"
                    >
                      <svg
                        className="h-4 w-4 fill-white"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.248 8.477 3.517 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.625 1.451 5.403.002 9.803-4.381 9.805-9.786.002-2.618-1.01-5.074-2.854-6.921C16.38 2.052 13.933.996 11.999.996 6.596.996 2.197 5.379 2.195 10.785c-.001 1.512.409 2.99 1.182 4.298l-.994 3.63 3.731-.973-1.066.614zm11.332-6.52c-.274-.136-1.62-.8-1.87-.892-.252-.09-.435-.136-.617.137-.183.272-.708.892-.868 1.074-.16.183-.32.204-.593.068-1.579-.79-2.73-1.37-3.818-3.23-.288-.492.288-.456.822-1.52.091-.183.046-.343-.023-.48-.068-.136-.617-1.484-.846-2.033-.223-.536-.469-.463-.617-.47l-.527-.008c-.183 0-.48.069-.731.343-.252.274-.96.937-.96 2.285 0 1.348.982 2.651 1.119 2.833.137.183 1.933 2.951 4.682 4.141.654.282 1.165.451 1.564.578.658.209 1.258.18 1.732.109.528-.079 1.62-.663 1.85-1.302.23-.639.23-1.187.16-1.302-.07-.116-.275-.183-.55-.32z" />
                      </svg>

                      <span>WhatsApp</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </header>
  );
}