"use client";

import { useState } from "react";
import { X, ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const categories = ["All", "Apartment", "Balcony", "Invisible Grill", "Monkey Net", "Bird Net", "Sports Net"];

const galleryItems = [
  {
    id: 1,
    title: "Balcony Protection Net",
    category: "Balcony",
    image: "/images/balcony.webp"
  },
  {
    id: 2,
    title: "Invisible Grills for Windows",
    category: "Invisible Grill",
    image: "/images/windowgrill.webp"
  },
  {
    id: 3,
    title: "Apartment Pigeon Netting",
    category: "Apartment",
    image: "/images/pigeonnet.webp"
  },
  {
    id: 4,
    title: "Heavy Duty Monkey Protection",
    category: "Monkey Net",
    image: "/images/monkey.jpeg"
  },
  {
    id: 5,
    title: "Cricket Practice Net Installation",
    category: "Sports Net",
    image: "/images/cricket.jpeg"
  },
  {
    id: 6,
    title: "High-Rise Balcony Grill",
    category: "Invisible Grill",
    image: "/images/balconygrill.webp"
  },
  {
    id: 7,
    title: "Residential Balcony Nylon Net",
    category: "Balcony",
    image: "/images/pigeon-safety-nets.webp"
  },
  {
    id: 8,
    title: "Pigeon Protection Mesh",
    category: "Bird Net",
    image: "/images/birdsafety.webp"
  },
  {
    id: 9,
    title: "Full Duct Area Safety Netting",
    category: "Apartment",
    image: "/images/ductarea1.webp"
  }
];

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredItems = activeFilter === "All"
    ? galleryItems
    : galleryItems.filter(item => item.category === activeFilter);

  const openLightbox = (itemIndex: number) => {
    // Find index of the clicked item in the FILTERED list
    setLightboxIndex(itemIndex);
  };

  const handlePrev = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => (prev === 0 ? filteredItems.length - 1 : prev! - 1));
  };

  const handleNext = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => (prev === filteredItems.length - 1 ? 0 : prev! + 1));
  };

  return (
    <section id="gallery" className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-primary-light">
            Our Work Showcase
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2 font-display">
            Completed Projects Gallery
          </h2>
          <p className="text-slate-600 mt-3 text-sm sm:text-base">
            Take a look at some of our premium safety net and invisible grill installations across Bangalore.
          </p>
          <div className="h-1 bg-accent w-16 mx-auto mt-4 rounded" />
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setActiveFilter(cat);
                setLightboxIndex(null);
              }}
              className={`px-4 py-3 rounded-lg text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer min-h-[48px] ${
                activeFilter === cat
                  ? "bg-primary text-white shadow-sm"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-800"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid Area (rendered exactly once per image, optimized) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => {
            return (
              <button
                key={item.id}
                className="relative group rounded-2xl overflow-hidden aspect-[4/3] w-full bg-slate-100 shadow-sm cursor-pointer hover:shadow-lg transition-all focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 text-left"
                onClick={() => openLightbox(index)}
                aria-label={`View larger image of ${item.title}`}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  width={400}
                  height={300}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                
                {/* Black Overlay on Hover */}
                <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                  <span className="text-white/80 text-[10px] uppercase font-bold tracking-wider mb-1">
                    {item.category}
                  </span>
                  <h3 className="text-white font-bold text-sm sm:text-base font-display">
                    {item.title}
                  </h3>
                  <div className="absolute top-4 right-4 bg-white/20 p-2 rounded-lg text-white backdrop-blur-sm">
                    <Maximize2 className="w-4 h-4" />
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Full Screen Lightbox Modal */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/95 backdrop-blur-sm select-none p-4">
            
            {/* Close button */}
            <button
              onClick={() => setLightboxIndex(null)}
              className="absolute top-6 right-6 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 w-12 h-12 flex items-center justify-center rounded-lg transition-colors z-20 cursor-pointer"
              aria-label="Close Lightbox"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Left navigation arrow */}
            <button
              onClick={handlePrev}
              className="absolute left-4 sm:left-6 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center rounded-full transition-colors z-20 cursor-pointer"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8" />
            </button>

            {/* Central Image Wrapper */}
            <motion.div
              key={lightboxIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.25 }}
              className="relative max-w-4xl max-h-[75vh] w-full aspect-[4/3] z-10"
            >
              <Image
                src={filteredItems[lightboxIndex].image}
                alt={filteredItems[lightboxIndex].title}
                width={1200}
                height={900}
                className="w-full h-full object-contain"
                loading="lazy"
              />
            </motion.div>

            {/* Right navigation arrow */}
            <button
              onClick={handleNext}
              className="absolute right-4 sm:right-6 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center rounded-full transition-colors z-20 cursor-pointer"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8" />
            </button>

            {/* Caption Banner */}
            <div className="absolute bottom-6 left-0 w-full text-center text-white z-20">
              <span className="text-accent text-[10px] sm:text-xs font-bold uppercase tracking-widest">
                {filteredItems[lightboxIndex].category}
              </span>
              <h4 className="text-base sm:text-xl font-bold font-display mt-0.5">
                {filteredItems[lightboxIndex].title}
              </h4>
              <p className="text-slate-400 text-xs mt-1">
                Image {lightboxIndex + 1} of {filteredItems.length}
              </p>
            </div>

          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
