"use client";

import React, { useEffect, useMemo, useState } from "react";
import {
  Phone,
  Menu,
  X,
  Mail,
  MapPin,
  Sparkles,
  Search,
  ArrowRight,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "./Logo";

type ServiceTab = "nets" | "grills" | "hangers";

interface SearchItem {
  name: string;
  keywords: string;
  description: string;
  target: string;
  tab?: ServiceTab;
}

/* =========================================================
   NAVIGATION
========================================================= */

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Safety Nets", href: "#services" },
  {
    name: "Invisible Grills",
    href: "#invisible-grills",
  },
  {
    name: "Cloth Hangers",
    href: "#cloth-hangers",
  },
  {
    name: "Why Us",
    href: "#why-choose-us",
  },
  { name: "Gallery", href: "#gallery" },
  { name: "Reviews", href: "#reviews" },
  { name: "FAQ", href: "#faq" },
  { name: "Contact", href: "#contact" },
  { name: "Offers", href: "#offers" },
];

/* =========================================================
   SEARCH ITEMS
========================================================= */

const searchItems: SearchItem[] = [
  {
    name: "Bird Netting",
    keywords:
      "bird netting birds pigeon pigeon net balcony window protection",
    description:
      "Bird and pigeon protection for balconies and windows",
    target: "#services",
    tab: "nets",
  },
  {
    name: "Safety Nets",
    keywords:
      "safety nets balcony safety balcony net child safety",
    description:
      "Strong safety nets for balconies and open areas",
    target: "#services",
    tab: "nets",
  },
  {
    name: "Pigeon Net",
    keywords:
      "pigeon net pigeon control bird control",
    description:
      "Pigeon protection and balcony bird control",
    target: "#services",
    tab: "nets",
  },
  {
    name: "Invisible Grills",
    keywords:
      "invisible grills invisible grill balcony grill safety grill",
    description:
      "Modern and low-visibility balcony safety grills",
    target: "#services",
    tab: "grills",
  },
  {
    name: "Cloth Hangers",
    keywords:
      "cloth hangers cloth hanger clothes hanger drying hanger",
    description:
      "Space-saving balcony cloth drying solutions",
    target: "#services",
    tab: "hangers",
  },
  {
    name: "Why Choose Us",
    keywords:
      "why us why choose trusted quality service",
    description:
      "Learn why customers choose Real Bird Netting",
    target: "#why-choose-us",
  },
  {
    name: "Gallery",
    keywords:
      "gallery photos images projects work",
    description:
      "View our completed installation work",
    target: "#gallery",
  },
  {
    name: "Reviews",
    keywords:
      "reviews review ratings customer feedback",
    description:
      "See customer reviews and feedback",
    target: "#reviews",
  },
  {
    name: "FAQ",
    keywords:
      "faq frequently asked questions questions",
    description:
      "Frequently asked questions",
    target: "#faq",
  },
  {
    name: "Contact",
    keywords:
      "contact call phone whatsapp location enquiry",
    description:
      "Contact Real Bird Netting",
    target: "#contact",
  },
  {
    name: "Offers",
    keywords:
      "offers offer discount discounts deals deal price",
    description:
      "Current offers and discounts",
    target: "#offers",
  },
];

/* =========================================================
   HEADER
========================================================= */

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [activeSection, setActiveSection] = useState("home");
  const [activeTab, setActiveTab] =
    useState<ServiceTab>("nets");

  /* =========================================================
     SCROLL
  ========================================================= */

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    handleScroll();

    window.addEventListener(
      "scroll",
      handleScroll,
      { passive: true }
    );

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll
      );
    };
  }, []);

  /* =========================================================
     CLOSE MOBILE MENU ON DESKTOP
  ========================================================= */

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener(
        "resize",
        handleResize
      );
    };
  }, []);

  /* =========================================================
     SECTION OBSERVER
  ========================================================= */

  useEffect(() => {
    const sectionIds = [
      "home",
      "about",
      "services",
      "why-choose-us",
      "gallery",
      "reviews",
      "faq",
      "contact",
      "offers",
    ];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (
            entry.isIntersecting &&
            entry.target.id
          ) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-20% 0px -60% 0px",
        threshold: 0.01,
      }
    );

    sectionIds.forEach((id) => {
      const element =
        document.getElementById(id);

      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  /* =========================================================
     SERVICE TAB LISTENER
  ========================================================= */

  useEffect(() => {
    const handleServiceTab = (event: Event) => {
      const customEvent =
        event as CustomEvent<ServiceTab>;

      if (customEvent.detail) {
        setActiveTab(customEvent.detail);
      }
    };

    window.addEventListener(
      "change-services-tab",
      handleServiceTab
    );

    return () => {
      window.removeEventListener(
        "change-services-tab",
        handleServiceTab
      );
    };
  }, []);

  /* =========================================================
     ACTIVE NAV
  ========================================================= */

  const isActive = (href: string) => {
    if (href === "#services") {
      return (
        activeSection === "services" &&
        activeTab === "nets"
      );
    }

    if (href === "#invisible-grills") {
      return (
        activeSection === "services" &&
        activeTab === "grills"
      );
    }

    if (href === "#cloth-hangers") {
      return (
        activeSection === "services" &&
        activeTab === "hangers"
      );
    }

    return activeSection === href.slice(1);
  };

  /* =========================================================
     GO TO SECTION
  ========================================================= */

  const goToSection = (
    target: string,
    tab?: ServiceTab
  ) => {
    if (tab) {
      setActiveTab(tab);

      window.dispatchEvent(
        new CustomEvent(
          "change-services-tab",
          {
            detail: tab,
          }
        )
      );
    }

    const element =
      document.querySelector(target);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    setIsSearchOpen(false);
    setIsMobileMenuOpen(false);
    setSearchText("");
  };

  /* =========================================================
     NAVIGATION CLICK
  ========================================================= */

  const handleNavClick = (
    event: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    event.preventDefault();

    if (href === "#invisible-grills") {
      goToSection(
        "#services",
        "grills"
      );
      return;
    }

    if (href === "#cloth-hangers") {
      goToSection(
        "#services",
        "hangers"
      );
      return;
    }

    if (href === "#services") {
      goToSection(
        "#services",
        "nets"
      );
      return;
    }

    goToSection(href);
  };

  /* =========================================================
     SEARCH
  ========================================================= */

  const filteredResults = useMemo(() => {
    const query =
      searchText.toLowerCase().trim();

    if (!query) {
      return [];
    }

    const words = query.split(/\s+/);

    return searchItems.filter((item) => {
      const searchableText =
        `${item.name} ${item.keywords} ${item.description}`
          .toLowerCase();

      return words.every((word) =>
        searchableText.includes(word)
      );
    });
  }, [searchText]);

  const openSearch = () => {
    setIsSearchOpen(true);
    setIsMobileMenuOpen(false);
  };

  const closeSearch = () => {
    setIsSearchOpen(false);
    setSearchText("");
  };

  const handleSearchResult = (
    item: SearchItem
  ) => {
    goToSection(
      item.target,
      item.tab
    );
  };

  /* =========================================================
     RENDER
  ========================================================= */

  return (
    <header className="fixed left-0 top-0 z-50 w-full">

      {/* =====================================================
          TOP BAR
      ===================================================== */}

      <div
        className={`overflow-hidden bg-gradient-to-r from-primary via-primary-light to-primary-dark text-xs text-slate-200 transition-all duration-300 ${
          isScrolled
            ? "h-0 opacity-0"
            : "flex h-[34px] items-center opacity-100"
        }`}
      >
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

          {/* LEFT */}
          <div className="flex items-center gap-3">

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

          {/* RIGHT */}
          <div className="flex items-center gap-3">

            <a
              href="mailto:sachin2006simra@gmail.com"
              className="hidden items-center gap-1 text-slate-300 transition-colors hover:text-white sm:flex"
            >
              <Mail className="h-3.5 w-3.5 text-accent" />
              sachin2006simra@gmail.com
            </a>

            <span className="hidden text-slate-500 sm:inline">
              |
            </span>

            <span className="flex items-center gap-1 font-semibold text-accent">
              <Sparkles className="h-3.5 w-3.5" />
              Same Day Installation
            </span>
          </div>
        </div>
      </div>

      {/* =====================================================
          NAVBAR CONTAINER
      ===================================================== */}

      <div className="mx-auto max-w-7xl px-2.5 sm:px-5 lg:px-8">

        <div
          className={`transition-all duration-300 ${
            isScrolled
              ? "mt-1.5 rounded-2xl border border-slate-200/80 bg-white/95 px-2.5 py-2 shadow-xl backdrop-blur-lg sm:px-5 sm:py-2.5"
              : "mt-2.5 rounded-2xl border border-white/50 bg-white/95 px-2.5 py-2.5 shadow-lg backdrop-blur-md sm:px-5 sm:py-3"
          }`}
        >

          {/* =================================================
              MAIN ROW
          ================================================= */}

          <div className="flex min-h-[52px] w-full items-center gap-2 sm:min-h-[60px] sm:gap-3">

            {/* =================================================
                DESKTOP LOGO
            ================================================= */}

            <a
              href="#home"
              onClick={(event) =>
                handleNavClick(
                  event,
                  "#home"
                )
              }
              className="hidden shrink-0 items-center lg:flex"
              aria-label="Real Bird Netting Home"
            >
              <Logo
                height={64}
                theme="light"
                className="transition-transform duration-200 hover:scale-[1.02]"
              />
            </a>

            {/* =================================================
                MOBILE LOGO
            ================================================= */}

            <a
              href="#home"
              onClick={(event) =>
                handleNavClick(
                  event,
                  "#home"
                )
              }
              className="flex min-w-0 shrink-0 items-center lg:hidden"
              aria-label="Real Bird Netting Home"
            >
              <Logo
                height={48}
                theme="light"
              />
            </a>

            {/* =================================================
                DESKTOP NAV
            ================================================= */}

            <nav className="ml-auto hidden items-center gap-0.5 lg:flex">

              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(event) =>
                    handleNavClick(
                      event,
                      item.href
                    )
                  }
                  className={`whitespace-nowrap rounded-lg px-2 py-2 text-xs font-semibold transition-all xl:px-2.5 xl:text-sm ${
                    isActive(item.href)
                      ? "bg-primary/5 text-primary"
                      : "text-slate-600 hover:bg-slate-50 hover:text-primary"
                  }`}
                >
                  {item.name}
                </a>
              ))}
            </nav>

            {/* =================================================
                DESKTOP SEARCH
            ================================================= */}

            <div className="relative hidden lg:block">

              <button
                type="button"
                onClick={() => {
                  if (isSearchOpen) {
                    closeSearch();
                  } else {
                    openSearch();
                  }
                }}
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 text-slate-700 transition-all hover:bg-slate-100 active:scale-95"
                aria-label="Search"
              >
                {isSearchOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Search className="h-5 w-5" />
                )}
              </button>

              {/* DESKTOP SEARCH DROPDOWN */}

              <AnimatePresence>
                {isSearchOpen && (
                  <motion.div
                    initial={{
                      opacity: 0,
                      y: -8,
                      scale: 0.98,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                      scale: 1,
                    }}
                    exit={{
                      opacity: 0,
                      y: -8,
                      scale: 0.98,
                    }}
                    className="absolute right-0 top-12 z-[100] w-[360px] rounded-2xl border border-slate-200 bg-white p-3 shadow-2xl"
                  >

                    <div className="relative">

                      <Search className="pointer-events-none absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />

                      <input
                        type="search"
                        value={searchText}
                        onChange={(event) =>
                          setSearchText(
                            event.target.value
                          )
                        }
                        placeholder="Search services..."
                        autoFocus
                        autoComplete="off"
                        className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3 pl-10 pr-10 text-sm text-slate-800 outline-none focus:border-primary focus:bg-white focus:ring-2 focus:ring-primary/10"
                      />

                      {searchText && (
                        <button
                          type="button"
                          onClick={() =>
                            setSearchText("")
                          }
                          className="absolute right-2 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-lg text-slate-400 hover:bg-slate-100"
                          aria-label="Clear search"
                        >
                          <X className="h-4 w-4" />
                        </button>
                      )}
                    </div>

                    {searchText.trim() !== "" && (
                      <div className="mt-3 max-h-72 overflow-y-auto">

                        {filteredResults.length > 0 ? (
                          filteredResults.map(
                            (item) => (
                              <button
                                key={item.name}
                                type="button"
                                onClick={() =>
                                  handleSearchResult(
                                    item
                                  )
                                }
                                className="flex w-full items-center gap-3 rounded-xl p-3 text-left transition-colors hover:bg-slate-50"
                              >
                                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/5 text-primary">
                                  <Search className="h-4 w-4" />
                                </div>

                                <div className="min-w-0 flex-1">
                                  <p className="text-sm font-bold text-slate-800">
                                    {item.name}
                                  </p>

                                  <p className="text-xs text-slate-500">
                                    {item.description}
                                  </p>
                                </div>

                                <ArrowRight className="h-4 w-4 text-primary" />
                              </button>
                            )
                          )
                        ) : (
                          <div className="p-4 text-center text-sm text-slate-500">
                            No service found.
                          </div>
                        )}
                      </div>
                    )}

                    {searchText.trim() === "" && (
                      <div className="mt-3">

                        <p className="mb-2 text-xs font-bold uppercase tracking-wide text-slate-400">
                          Popular Searches
                        </p>

                        <div className="flex flex-wrap gap-2">

                          {[
                            "Bird Netting",
                            "Invisible Grills",
                            "Cloth Hangers",
                            "Offers",
                            "Gallery",
                          ].map((item) => (
                            <button
                              key={item}
                              type="button"
                              onClick={() =>
                                setSearchText(item)
                              }
                              className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-semibold text-slate-700 hover:border-primary hover:bg-primary/5 hover:text-primary"
                            >
                              {item}
                            </button>
                          ))}

                        </div>
                      </div>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* =================================================
                DESKTOP CALL / WHATSAPP
            ================================================= */}

            <div className="hidden items-center gap-2 xl:flex">

              <a
                href="tel:+919354254539"
                className="flex items-center gap-1.5 rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 px-3 py-2 text-sm font-bold text-white shadow-md transition-all hover:-translate-y-0.5"
              >
                <Phone className="h-4 w-4 fill-white" />

                <span>
                  +91 93542 54539
                </span>
              </a>

              <a
                href="https://wa.me/919354254539"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 px-3 py-2 text-sm font-bold text-white shadow-md transition-all hover:-translate-y-0.5"
              >
                <span className="h-2 w-2 animate-pulse rounded-full bg-white" />

                WhatsApp
              </a>

            </div>

            {/* =================================================
                MOBILE CONTROLS
            ================================================= */}

            <div className="ml-auto flex shrink-0 items-center gap-1.5 lg:hidden">

              {/* SEARCH */}

              <button
                type="button"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  setIsSearchOpen(
                    (value) => !value
                  );
                }}
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 text-slate-800 shadow-sm active:scale-95"
                aria-label={
                  isSearchOpen
                    ? "Close search"
                    : "Open search"
                }
              >
                {isSearchOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Search className="h-5 w-5" />
                )}
              </button>

              {/* CALL */}

              <a
                href="tel:+919354254539"
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-md active:scale-95"
                aria-label="Call"
              >
                <Phone className="h-5 w-5 fill-white" />
              </a>

              {/* MENU */}

              <button
                type="button"
                onClick={() => {
                  setIsMobileMenuOpen(
                    (value) => !value
                  );

                  setIsSearchOpen(false);
                  setSearchText("");
                }}
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 text-slate-800 shadow-sm active:scale-95"
                aria-label={
                  isMobileMenuOpen
                    ? "Close menu"
                    : "Open menu"
                }
              >
                {isMobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>

            </div>

          </div>

          {/* =================================================
              MOBILE MENU
          ================================================= */}

          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                initial={{
                  opacity: 0,
                  height: 0,
                }}
                animate={{
                  opacity: 1,
                  height: "auto",
                }}
                exit={{
                  opacity: 0,
                  height: 0,
                }}
                className="overflow-hidden lg:hidden"
              >

                <div className="mt-3 border-t border-slate-100 pt-3">

                  <div className="grid grid-cols-1 gap-1">

                    {navItems.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        onClick={(event) =>
                          handleNavClick(
                            event,
                            item.href
                          )
                        }
                        className={`rounded-xl px-4 py-3 text-[15px] font-bold transition-all ${
                          isActive(item.href)
                            ? "border-l-4 border-accent bg-primary/5 pl-3 text-primary"
                            : "text-slate-700 hover:bg-slate-50 hover:text-primary"
                        }`}
                      >
                        {item.name}
                      </a>
                    ))}

                  </div>

                  {/* MOBILE ACTIONS */}

                  <div className="mt-3 grid grid-cols-2 gap-2 border-t border-slate-100 pt-3">

                    <a
                      href="tel:+919354254539"
                      className="flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 py-3 text-sm font-bold text-white shadow-md active:scale-95"
                    >
                      <Phone className="h-4 w-4 fill-white" />
                      Call Now
                    </a>

                    <a
                      href="https://wa.me/919354254539"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 py-3 text-sm font-bold text-white shadow-md active:scale-95"
                    >
                      <span className="h-2 w-2 rounded-full bg-white" />
                      WhatsApp
                    </a>

                  </div>

                </div>

              </motion.div>
            )}
          </AnimatePresence>

        </div>
      </div>

      {/* =====================================================
          MOBILE SEARCH
      ===================================================== */}

      <AnimatePresence>
        {isSearchOpen && (
          <motion.div
            initial={{
              opacity: 0,
              y: -15,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -15,
            }}
            transition={{
              duration: 0.2,
            }}
            className="fixed left-0 right-0 top-0 z-[60] lg:hidden"
          >

            <div className="mx-auto w-full max-w-7xl px-2.5 pt-2.5 sm:px-5">

              <div className="rounded-2xl border border-slate-200 bg-white p-3 shadow-2xl">

                <div className="mb-3 flex items-center justify-between">

                  <p className="text-sm font-bold text-slate-800">
                    Search Services
                  </p>

                  <button
                    type="button"
                    onClick={closeSearch}
                    className="flex h-9 w-9 items-center justify-center rounded-lg text-slate-500 hover:bg-slate-100"
                    aria-label="Close search"
                  >
                    <X className="h-5 w-5" />
                  </button>

                </div>

                <div className="relative">

                  <Search className="pointer-events-none absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />

                  <input
                    type="search"
                    value={searchText}
                    onChange={(event) =>
                      setSearchText(
                        event.target.value
                      )
                    }
                    onKeyDown={(event) => {
                      if (
                        event.key ===
                        "Escape"
                      ) {
                        closeSearch();
                      }

                      if (
                        event.key ===
                          "Enter" &&
                        filteredResults.length > 0
                      ) {
                        handleSearchResult(
                          filteredResults[0]
                        );
                      }
                    }}
                    placeholder="Search Bird Netting..."
                    autoFocus
                    autoComplete="off"
                    className="h-12 w-full rounded-xl border border-slate-200 bg-slate-50 pl-10 pr-10 text-sm font-medium text-slate-800 outline-none focus:border-primary focus:bg-white focus:ring-2 focus:ring-primary/10"
                  />

                  {searchText && (
                    <button
                      type="button"
                      onClick={() =>
                        setSearchText("")
                      }
                      className="absolute right-2 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-lg text-slate-400 hover:bg-slate-100"
                      aria-label="Clear search"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  )}

                </div>

                {/* POPULAR */}

                {searchText.trim() === "" && (
                  <div className="mt-4">

                    <p className="mb-2 text-xs font-bold uppercase tracking-wide text-slate-400">
                      Popular Searches
                    </p>

                    <div className="flex flex-wrap gap-2">

                      {[
                        "Bird Netting",
                        "Safety Nets",
                        "Invisible Grills",
                        "Cloth Hangers",
                        "Offers",
                      ].map((item) => (
                        <button
                          key={item}
                          type="button"
                          onClick={() => {
                            const result =
                              searchItems.find(
                                (searchItem) =>
                                  searchItem.name ===
                                  item
                              );

                            if (result) {
                              handleSearchResult(
                                result
                              );
                            }
                          }}
                          className="rounded-full border border-slate-200 bg-slate-50 px-3 py-2 text-xs font-semibold text-slate-700 transition-all hover:border-primary hover:bg-primary/5 hover:text-primary active:scale-95"
                        >
                          {item}
                        </button>
                      ))}

                    </div>
                  </div>
                )}

                {/* RESULTS */}

                {searchText.trim() !== "" && (
                  <div className="mt-4 max-h-[55vh] overflow-y-auto">

                    {filteredResults.length > 0 ? (
                      <div className="space-y-1">

                        {filteredResults.map(
                          (item) => (
                            <button
                              key={item.name}
                              type="button"
                              onClick={() =>
                                handleSearchResult(
                                  item
                                )
                              }
                              className="flex w-full items-center gap-3 rounded-xl p-3 text-left transition-all hover:bg-slate-50 active:bg-slate-100"
                            >

                              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/5 text-primary">
                                <Search className="h-4 w-4" />
                              </div>

                              <div className="min-w-0 flex-1">

                                <p className="text-sm font-bold text-slate-800">
                                  {item.name}
                                </p>

                                <p className="mt-0.5 text-xs text-slate-500">
                                  {item.description}
                                </p>

                              </div>

                              <ArrowRight className="h-4 w-4 shrink-0 text-primary" />

                            </button>
                          )
                        )}

                      </div>
                    ) : (
                      <div className="rounded-xl bg-slate-50 p-5 text-center">

                        <Search className="mx-auto h-6 w-6 text-slate-400" />

                        <p className="mt-2 text-sm font-bold text-slate-700">
                          No service found
                        </p>

                        <p className="mt-1 text-xs text-slate-500">
                          Try Bird Netting,
                          Invisible Grills,
                          Cloth Hangers
                          or Offers.
                        </p>

                      </div>
                    )}

                  </div>
                )}

              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </header>
  );
}