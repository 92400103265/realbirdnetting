"use client";

import { useState, useEffect } from "react";
import { Phone, Star, CheckCircle, Shield, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const slides = [
  {
    image: "/images/carousel_pigeon_net.png",
    title: "Bangalore's #1 Pigeon Safety Nets",
    titlePrefix: "Bangalore's #1 ",
    titleHighlight: "Pigeon Safety Nets",
    titleSuffix: "",
    subtitle: "Keep your balcony clean, hygienic, and pigeon-free with heavy-duty UV-resistant netting.",
    tagline: "Same Day Installation"
  },
  {
    image: "/images/carousel_invisible_grill.png",
    title: "Premium Invisible Grills for Modern Apartments",
    titlePrefix: "Premium ",
    titleHighlight: "Invisible Grills",
    titleSuffix: " for Modern Apartments",
    subtitle: "Enjoy unobstructed scenic views of the city skyline with zero compromise on safety.",
    tagline: "High-Tensile Stainless Steel"
  },
  {
    image: "/images/carousel_child_safety.png",
    title: "Heavy-Duty Balcony Child Safety Nets",
    titlePrefix: "Heavy-Duty Balcony ",
    titleHighlight: "Child Safety Nets",
    titleSuffix: "",
    subtitle: "Specifically engineered white safety netting to secure open balconies and keep children safe.",
    tagline: "100% Child Proof"
  },
  {
    image: "/images/carousel_cricket_net.png",
    title: "Professional Cricket & Sports Practice Nets",
    titlePrefix: "Professional ",
    titleHighlight: "Cricket & Sports Practice Nets",
    titleSuffix: "",
    subtitle: "Custom-sized heavy-duty outdoor netting systems perfect for terrace cricket pitches and backyards.",
    tagline: "UV-Stabilized Nets"
  },
  {
    image: "/images/carousel_monkey_net.png",
    title: "Robust Wire-Reinforced Monkey Safety Nets",
    titlePrefix: "Robust Wire-Reinforced ",
    titleHighlight: "Monkey Safety Nets",
    titleSuffix: "",
    subtitle: "Bite-proof and tear-resistant thick safety nets that block monkeys while maintaining ventilation.",
    tagline: "Bite-Resistant & Sturdy"
  },
  {
    image: "/images/carousel_bird_protection.png",
    title: "Building Duct & Open Shaft Bird Protection",
    titlePrefix: "Building Duct & Open Shaft ",
    titleHighlight: "Bird Protection Nets",
    titleSuffix: "",
    subtitle: "Block birds from nesting in vertical duct areas and building voids with industrial-grade netting.",
    tagline: "Industrial-Grade Quality"
  },
  {
    image: "/images/carousel_cloth_hanger.png",
    title: "Ceiling-Mounted Space-Saving Cloth Hangers",
    titlePrefix: "Ceiling-Mounted Space-Saving ",
    titleHighlight: "Cloth Hangers",
    titleSuffix: "",
    subtitle: "Premium pulley-operated stainless steel drying rods for efficient balcony space management.",
    tagline: "Heavy-Duty Pulley System"
  }
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Form states
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("");
  const [service, setService] = useState("Balcony Safety Nets");
  const [message, setMessage] = useState("");

  // Touch Swipe coordinates
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const minSwipeDistance = 50;

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

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000); // 5 seconds per slide
    return () => clearInterval(timer);
  }, []);

  const handleTouchStart = (e: React.TouchEvent) => {
    const target = e.target as HTMLElement;
    // Don't trigger swipe changes if user is interacting with form elements or buttons
    if (target.closest("form") || target.closest("button") || target.closest("a")) {
      return;
    }
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }

    setTouchStart(null);
    setTouchEnd(null);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) {
      alert("Please fill in Name and Phone.");
      return;
    }
    
    // Trigger Google Ads Conversion
    if (typeof window !== 'undefined' && (window as any).gtag_report_conversion) {
      (window as any).gtag_report_conversion();
    }
    
    setIsSubmitted(true);
    setName("");
    setPhone("");
    setLocation("");
    setMessage("");
    setTimeout(() => {
      setIsSubmitted(false);
    }, 4000);
  };

  const whatsappUrl = "https://wa.me/919686668224?text=Hi%20BMC%20Safety%20Nets%2C%20I%20want%20to%20book%20a%20free%20inspection%20and%20quote.";

  return (
    <>
      <section
        id="home"
        className="relative min-h-[75vh] lg:min-h-screen flex items-center pt-36 pb-8 sm:pt-40 lg:pt-48 lg:pb-12 overflow-hidden bg-slate-50"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
      {/* Standard HTML style tag to inject responsive styles for background overlay */}
      <style>{`
        .hero-gradient-overlay {
          background: linear-gradient(to bottom, rgba(0,0,0,0.75) 50%, rgba(0,0,0,0.3) 100%);
        }
        @media (min-width: 1024px) {
          .hero-gradient-overlay {
            background: linear-gradient(to right, rgba(0,0,0,0.65) 60%, rgba(0,0,0,0.2) 100%);
          }
        }
      `}</style>

      {/* Background Image Carousel (Smooth continuous Ken Burns and crossfade) */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <AnimatePresence initial={false}>
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1 }}
            animate={{ opacity: 1, scale: 1.08 }}
            exit={{ opacity: 0 }}
            transition={{
              opacity: { duration: 0.8, ease: "easeInOut" },
              scale: { duration: 5.2, ease: "linear" }
            }}
            className="absolute inset-0 w-full h-full"
          >
            <Image
              src={slides[currentSlide].image}
              alt={slides[currentSlide].title}
              width={1920}
              height={1080}
              priority={currentSlide === 0}
              className="w-full h-full object-cover object-center"
              style={{ filter: "saturate(1.4) brightness(0.85)" }}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 1920px"
            />
          </motion.div>
        </AnimatePresence>
        {/* Dark gradient overlay */}
        <div className="absolute inset-0 z-10 hero-gradient-overlay pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

          {/* Hero Left Content */}
          <div className="lg:col-span-8 space-y-6">
            <div className="min-h-[36px] sm:min-h-[40px] flex items-center">
              <motion.span
                key={`tag-${currentSlide}`}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-1.5 px-3 py-1 sm:px-4 sm:py-1.5 rounded-full text-xs sm:text-sm font-extrabold uppercase tracking-wider bg-[#f97316] text-white shadow-md whitespace-nowrap"
              >
                <Shield className="w-4 h-4 text-white" />
                {slides[currentSlide].tagline}
              </motion.span>
            </div>

            <div className="min-h-[140px] sm:min-h-[170px] lg:min-h-[200px] flex flex-col justify-center text-left">
              <AnimatePresence mode="wait">
                <motion.h1
                  key={`title-${currentSlide}`}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3 }}
                  className="text-3xl sm:text-5.5xl lg:text-6.5xl font-extrabold tracking-tight font-display leading-[1.1] text-white"
                  style={{ textShadow: "0px 2px 10px rgba(0,0,0,0.4)" }}
                >
                  {slides[currentSlide].titlePrefix}
                  <span className="text-[#f97316]">
                    {slides[currentSlide].titleHighlight}
                  </span>
                  {slides[currentSlide].titleSuffix}
                </motion.h1>
              </AnimatePresence>
            </div>

            <div className="min-h-[60px] sm:min-h-[70px] lg:min-h-[80px]">
              <AnimatePresence mode="wait">
                <motion.p
                  key={`desc-${currentSlide}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-base sm:text-xl lg:text-2xl text-slate-100 font-medium leading-relaxed max-w-2xl"
                  style={{ textShadow: "0px 1px 4px rgba(0,0,0,0.5)" }}
                >
                  {slides[currentSlide].subtitle}
                </motion.p>
              </AnimatePresence>
            </div>

            {/* Ratings & Trust Indicators */}
            <div className="flex flex-wrap gap-y-3 gap-x-5 pt-4 text-sm sm:text-base text-slate-200 border-t border-white/20">
              <div className="flex items-center space-x-2">
                <div className="flex text-[#FACC15]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#FACC15] stroke-[#FACC15]" />
                  ))}
                </div>
                <span className="font-extrabold text-slate-100" style={{ textShadow: "0px 1px 2px rgba(0,0,0,0.6)" }}>5.0 / 5.0 Rating</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-emerald-400 fill-emerald-950/50" />
                <span className="font-extrabold text-slate-100" style={{ textShadow: "0px 1px 2px rgba(0,0,0,0.6)" }}>1000+ Happy Clients</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-emerald-400 fill-emerald-950/50" />
                <span className="font-extrabold text-slate-100" style={{ textShadow: "0px 1px 2px rgba(0,0,0,0.6)" }}>Free Site Inspection</span>
              </div>
            </div>

            {/* Carousel navigation indicators & arrows */}
            <div className="flex items-center space-x-4 pt-2">
              <div className="flex space-x-1.5">
                <button
                  onClick={prevSlide}
                  className="w-11 h-11 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/20 shadow-sm transition-colors cursor-pointer"
                  aria-label="Previous Slide"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextSlide}
                  className="w-11 h-11 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/20 shadow-sm transition-colors cursor-pointer"
                  aria-label="Next Slide"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

              <div className="flex space-x-1 items-center">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className="w-8 h-8 flex items-center justify-center cursor-pointer group"
                    aria-label={`Go to slide ${index + 1}`}
                  >
                    <span
                      className={`h-2 rounded-full transition-all duration-300 ${
                        currentSlide === index ? "bg-[#f97316] w-7" : "bg-white/40 w-2 group-hover:bg-white/60"
                      }`}
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Hero Right Content - Enquiry Form (Desktop Only) */}
          <div className="lg:col-span-4 w-full hidden lg:block">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="glass-card-dark rounded-xl p-4 sm:p-5 shadow-2xl relative border border-white/10"
            >
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-3.5">
                  <div className="text-center pb-0.5">
                    <h2 className="text-lg sm:text-xl font-bold text-white font-display">
                      Book Free Inspection
                    </h2>
                    <p className="text-slate-300 text-xs mt-0.5">
                      Get quote & site visit in 15 mins!
                    </p>
                  </div>

                  <div>
                    <label htmlFor="hero-name" className="sr-only">Your Name</label>
                    <input
                      id="hero-name"
                      type="text"
                      required
                      placeholder="Your Name *"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-3 py-2 bg-slate-900/60 border border-slate-700 rounded-lg text-sm text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent transition-all"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label htmlFor="hero-phone" className="sr-only">Phone Number</label>
                      <input
                        id="hero-phone"
                        type="tel"
                        required
                        placeholder="Phone Number *"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full px-3 py-2 bg-slate-900/60 border border-slate-700 rounded-lg text-sm text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent transition-all"
                      />
                    </div>
                    <div>
                      <label htmlFor="hero-location" className="sr-only">Your Location</label>
                      <input
                        id="hero-location"
                        type="text"
                        placeholder="Your Location"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        className="w-full px-3 py-2 bg-slate-900/60 border border-slate-700 rounded-lg text-sm text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="hero-service" className="sr-only">Service Needed</label>
                    <select
                      id="hero-service"
                      value={service}
                      onChange={(e) => setService(e.target.value)}
                      className="w-full px-3 py-2 bg-slate-900/90 border border-slate-700 rounded-lg text-sm text-white focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent transition-all"
                    >
                      {servicesList.map((srv) => (
                        <option key={srv} value={srv} className="bg-slate-950 text-white text-sm">
                          {srv}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="hero-message" className="sr-only">Message (Optional)</label>
                    <textarea
                      id="hero-message"
                      rows={1}
                      placeholder="Message (e.g. dimensions)"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full px-3 py-2 bg-slate-900/60 border border-slate-700 rounded-lg text-sm text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-accent hover:bg-accent-dark text-white py-2.5 rounded-lg text-sm font-bold flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transition-all cursor-pointer"
                  >
                    <span>Submit Enquiry</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <div className="grid grid-cols-2 gap-3 pt-1">
                    <a
                      href="tel:+919686668224"
                      className="flex items-center justify-center space-x-1.5 bg-[#f97316] hover:bg-[#d96510] text-white py-2 rounded-lg text-xs font-semibold border border-white/10 transition-colors"
                    >
                      <Phone className="w-3.5 h-3.5 fill-white" />
                      <span>Call Now</span>
                    </a>
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center space-x-1.5 bg-emerald-600 hover:bg-emerald-500 text-white py-2 rounded-lg text-xs font-semibold border border-white/10 transition-colors"
                    >
                      <svg className="w-3.5 h-3.5 fill-white" viewBox="0 0 24 24">
                        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.248 8.477 3.517 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.625 1.451 5.403.002 9.803-4.381 9.805-9.786.002-2.618-1.01-5.074-2.854-6.921C16.38 2.052 13.933.996 11.999.996 6.596.996 2.197 5.379 2.195 10.785c-.001 1.512.409 2.99 1.182 4.298l-.994 3.63 3.731-.973-1.066.614zm11.332-6.52c-.274-.136-1.62-.8-1.87-.892-.252-.09-.435-.136-.617.137-.183.272-.708.892-.868 1.074-.16.183-.32.204-.593.068-1.579-.79-2.73-1.37-3.818-3.23-.288-.492.288-.456.822-1.52.091-.183.046-.343-.023-.48-.068-.136-.617-1.484-.846-2.033-.223-.536-.469-.463-.617-.47l-.527-.008c-.183 0-.48.069-.731.343-.252.274-.96.937-.96 2.285 0 1.348.982 2.651 1.119 2.833.137.183 1.933 2.951 4.682 4.141.654.282 1.165.451 1.564.578.658.209 1.258.18 1.732.109.528-.079 1.62-.663 1.85-1.302.23-.639.23-1.187.16-1.302-.07-.116-.275-.183-.55-.32z" />
                      </svg>
                      <span>WhatsApp</span>
                    </a>
                  </div>
                </form>
              ) : (
                <div className="py-10 text-center space-y-4">
                  <CheckCircle className="w-16 h-16 text-accent mx-auto animate-bounce" />
                  <h3 className="text-xl font-bold text-white font-display">Thank you!</h3>
                  <p className="text-slate-300 text-xs max-w-xs mx-auto">
                    Your request has been received. Our team will contact you shortly.
                  </p>
                </div>
              )}
            </motion.div>
          </div>

        </div>
      </div>
    </section>

    {/* Mobile Enquiry Form - Rendered outside the hero section only on mobile */}
    <div className="lg:hidden bg-slate-900 border-t border-slate-800 py-10 px-4">
      <div className="max-w-md mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="glass-card-dark rounded-2xl p-6 shadow-xl relative border border-white/10"
        >
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="text-center pb-1">
                <h3 className="text-xl font-bold text-white font-display">
                  Book Free Inspection
                </h3>
                <p className="text-slate-300 text-xs mt-1">
                  Get a quotation and site visit call-back in 15 mins!
                </p>
              </div>

              <div>
                <label htmlFor="mobile-hero-name" className="sr-only">Your Name *</label>
                <input
                  id="mobile-hero-name"
                  type="text"
                  required
                  placeholder="Your Name *"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-slate-900/60 border border-slate-700 rounded-lg text-sm text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent transition-all"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="mobile-hero-phone" className="sr-only">Phone Number *</label>
                  <input
                    id="mobile-hero-phone"
                    type="tel"
                    required
                    placeholder="Phone Number *"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-slate-900/60 border border-slate-700 rounded-lg text-sm text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent transition-all"
                  />
                </div>
                <div>
                  <label htmlFor="mobile-hero-location" className="sr-only">Your Location</label>
                  <input
                    id="mobile-hero-location"
                    type="text"
                    placeholder="Your Location"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-slate-900/60 border border-slate-700 rounded-lg text-sm text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent transition-all"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="mobile-hero-service" className="sr-only">Service Needed</label>
                <select
                  id="mobile-hero-service"
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-slate-900/90 border border-slate-700 rounded-lg text-sm text-white focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent transition-all"
                >
                  {servicesList.map((srv) => (
                    <option key={srv} value={srv} className="bg-slate-950 text-white text-sm">
                      {srv}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="mobile-hero-message" className="sr-only">Message (Optional)</label>
                <textarea
                  id="mobile-hero-message"
                  rows={2}
                  placeholder="Message (e.g. dimensions)"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-slate-900/60 border border-slate-700 rounded-lg text-sm text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-accent hover:bg-accent-dark text-white py-3 rounded-lg text-sm font-bold flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transition-all cursor-pointer"
              >
                <span>Submit Enquiry</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="grid grid-cols-2 gap-3 pt-1">
                <a
                  href="tel:+919686668224"
                  className="flex items-center justify-center space-x-1.5 bg-[#f97316] hover:bg-[#d96510] text-white py-2.5 rounded-lg text-xs font-semibold border border-white/10 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 fill-white" />
                  <span>Call Now</span>
                </a>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-1.5 bg-emerald-600 hover:bg-emerald-500 text-white py-2.5 rounded-lg text-xs font-semibold border border-white/10 transition-colors"
                >
                  <svg className="w-3.5 h-3.5 fill-white" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.248 8.477 3.517 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.625 1.451 5.403.002 9.803-4.381 9.805-9.786.002-2.618-1.01-5.074-2.854-6.921C16.38 2.052 13.933.996 11.999.996 6.596.996 2.197 5.379 2.195 10.785c-.001 1.512.409 2.99 1.182 4.298l-.994 3.63 3.731-.973-1.066.614zm11.332-6.52c-.274-.136-1.62-.8-1.87-.892-.252-.09-.435-.136-.617.137-.183.272-.708.892-.868 1.074-.16.183-.32.204-.593.068-1.579-.79-2.73-1.37-3.818-3.23-.288-.492.288-.456.822-1.52.091-.183.046-.343-.023-.48-.068-.136-.617-1.484-.846-2.033-.223-.536-.469-.463-.617-.47l-.527-.008c-.183 0-.48.069-.731.343-.252.274-.96.937-.96 2.285 0 1.348.982 2.651 1.119 2.833.137.183 1.933 2.951 4.682 4.141.654.282 1.165.451 1.564.578.658.209 1.258.18 1.732.109.528-.079 1.62-.663 1.85-1.302.23-.639.23-1.187.16-1.302-.07-.116-.275-.183-.55-.32z" />
                  </svg>
                  <span>WhatsApp</span>
                </a>
              </div>
            </form>
          ) : (
            <div className="py-12 text-center space-y-4">
              <CheckCircle className="w-16 h-16 text-accent mx-auto animate-bounce" />
              <h3 className="text-2xl font-bold text-white font-display">Thank you!</h3>
              <p className="text-slate-300 text-sm max-w-xs mx-auto">
                Your request has been received. Our team will contact you shortly.
              </p>
            </div>
          )}
        </motion.div>
          </div>
        </div>
      </>
    );
  }
