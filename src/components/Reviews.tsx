"use client";

import { useState, useEffect } from "react";
import { Star, MessageSquare } from "lucide-react";
import { motion } from "framer-motion";

const reviews = [
   {
  name: "Umesh Kumar",
  location: "Sector-33, Gurugram",
  rating: 5,
  date: "1 week ago",
  text: "Excellent service from Real Bird Netting. I contacted them for bird net installation at my balcony in Sector-33, Gurugram. Their team arrived on time, completed the installation professionally, and used high-quality materials. I am very satisfied with their work and highly recommend Real Bird Netting."
},
   {
  name: "Sonu Kumar",
  location: "Sector-14, Gurugram",
  rating: 5,
  date: "2 weeks ago",
  text: "I highly recommend Real Bird Netting for invisible grills and bird net installation. Their team was professional, completed the work on time, and used premium-quality materials. The installation looks neat, does not block the view, and provides excellent safety. Thank you, Real Bird Netting!"
},
   {
  name: "Rohit Patel",
  location: "DLF Phase 3, Gurugram",
  rating: 5,
  date: "3 weeks ago",
  text: "Excellent service from Real Bird Netting. I installed bird safety nets for my balcony, and the team completed the work professionally using premium-quality materials. The installation was neat, affordable, and completed on time. I highly recommend Real Bird Netting to anyone in Gurugram."
},
   {
  name: "Kajal Sharma",
  location: "Palam Vihar, Gurugram",
  rating: 5,
  date: "1 month ago",
  text: "Real Bird Netting provided excellent bird safety net installation at my home in Palam Vihar. The team was punctual, professional, and used high-quality UV-resistant bird nets. The installation was neat, affordable, and completed on time. I highly recommend Real Bird Netting for bird netting services in Gurugram."
},
   {
  name: "Shilpa Rao",
  location: "Rajiv Chowk, Gurugram",
  rating: 5,
  date: "1 month ago",
  text: "I am very happy with the service provided by Real Bird Netting. Their team installed high-quality bird safety nets at my home near Rajiv Chowk, Gurugram. The installation was completed on time, the staff was professional, and the quality of the net is excellent. I highly recommend Real Bird Netting for bird netting and balcony safety solutions."
},
  {
    name: "Shweta K.",
    location: "EPIP, Gurugram",
    rating: 5,
    date: "1 month ago",
    text: "They installed cricket practice netting on our society terrace. The netting is very strong and absorbs heavy impact shots easily. Excellent workmanship and timely completion."
  },
  {
    name: "Sandeep Kumar",
    location: "Rajiv Chowk, Gurugram",
    rating: 5,
    date: "2 months ago",
    text: "Professional safety net installation. Prompt response, quick measurement check, and neat installation. Rust-free steel hooks were used. Very satisfied with the service."
  },
  {
    name: "Karthik Raja",
    location: "Bahadurgarh, Gurugram",
    rating: 5,
    date: "2 months ago",
    text: "Very reliable and quick. Got balcony nets installed for my pets' safety. The mesh is small enough and tightly secured. Now my cat can roam the balcony safely."
  },
  {
    name: "Deepa Hegde",
    location: "Gwal Pahari, Gurugram",
    rating: 5,
    date: "2 months ago",
    text: "Top-notch customer service. From booking the free site visit to the actual installation, everything was seamless. Transparent pricing and good warranty coverage."
  },
  {
    name: "Raghavendra Rao",
    location: "Chakkarpur, Gurugram",
    rating: 5,
    date: "3 months ago",
    text: "Excellent work by the crew. We got invisible grills installed for our windows. They are clean, modern, and strong. Perfect safety solution for high rises."
  },
  {
    name: "Neha Gupta",
    location: "Sikanderpur, Gurugram",
    rating: 5,
    date: "3 months ago",
    text: "Real Bird Netting is the best in Gurugram. Prompt service, transparent rates, and highly durable nets. We had pigeon issues for years, now it is completely resolved."
  },
  {
    name: "Sunil Murthy",
    location: "Badshahpur, Gurugram",
    rating: 5,
    date: "3 months ago",
    text: "Very professional installation team. They followed all safety precautions while installing the nets in our duct area. Fast, affordable, and high-quality nets."
  }
];

export default function Reviews() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Defer the initial set to avoid synchronous cascading render warning
    const frame = requestAnimationFrame(() => {
      handleResize();
    });

    window.addEventListener("resize", handleResize);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    // Auto sliding interval
    const timer = setInterval(() => {
      setCurrentIndex((prev) => {
        const currentVisibleCount = window.innerWidth >= 1024 ? 3 : window.innerWidth >= 768 ? 2 : 1;
        const maxIndex = reviews.length - currentVisibleCount;
        return prev >= maxIndex ? 0 : prev + 1;
      });
    }, 5000);

    return () => {
      clearInterval(timer);
    };
  }, [currentIndex]);

  const getVisibleCount = () => {
    if (windowWidth >= 1024) return 3;
    if (windowWidth >= 768) return 2;
    return 1;
  };

  const visibleCount = getVisibleCount();
  const visibleReviews = reviews.slice(currentIndex, currentIndex + visibleCount);

  // If there aren't enough reviews left in the slice to fill the screen,
  // wrap around to the beginning
  const paddedReviews = [...visibleReviews];
  if (paddedReviews.length < visibleCount) {
    const needed = visibleCount - paddedReviews.length;
    paddedReviews.push(...reviews.slice(0, needed));
  }

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };

  const dotCount = reviews.length - visibleCount + 1;

  return (
    <section id="reviews" className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-primary-light">
            Customer Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2 font-display">
            Google Reviews from Happy Customers
          </h2>
          <p className="text-slate-600 mt-3 text-sm sm:text-base">
            Read real feedback from homeowners across Gurugram  who secured their spaces with us.
          </p>
          <div className="h-1 bg-accent w-16 mx-auto mt-4 rounded" />
        </div>

        {/* Reviews Slider Container */}
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {paddedReviews.map((rev, idx) => (
              <motion.div
                key={`${rev.name}-${idx}`}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="bg-slate-50 border border-slate-100 p-6 rounded-2xl shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow duration-300 h-[280px]"
              >
                <div className="flex-1 flex flex-col min-h-0">
                  {/* Google Style Header */}
                  <div className="flex items-center space-x-3 mb-4 shrink-0">
                    <div className="w-10 h-10 rounded-full bg-primary text-white font-bold flex items-center justify-center font-display shadow-sm">
                      {rev.name.charAt(0)}
                    </div>
                    <div>
                      <h3 className="font-bold text-sm text-slate-800">{rev.name}</h3>
                      <p className="text-[11px] text-slate-600">{rev.location}</p>
                    </div>
                  </div>

                  {/* Stars Rating */}
                  <div className="flex items-center space-x-1 mb-3 shrink-0">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 stroke-amber-400" />
                    ))}
                    <span className="text-slate-400 text-xs ml-1.5">{rev.date}</span>
                  </div>

                  {/* Review Text */}
                  <div className="overflow-y-auto pr-1 flex-1 min-h-0">
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed italic">
                      &ldquo;{rev.text}&rdquo;
                    </p>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-slate-100 flex items-center text-slate-400 text-xs">
                  <MessageSquare className="w-3.5 h-3.5 mr-1" />
                  <span>Posted on Google Local Business</span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Slider Dots */}
          <div className="flex justify-center items-center mt-10">
            {[...Array(Math.max(1, dotCount))].map((_, i) => (
              <button
                key={i}
                onClick={() => handleDotClick(i)}
                className="w-12 h-12 flex items-center justify-center cursor-pointer group"
                aria-label={`Go to slide ${i + 1}`}
              >
                <span className={`h-2.5 rounded-full transition-all duration-300 ${
                  currentIndex === i ? "bg-primary w-6" : "bg-slate-300 group-hover:bg-slate-400"
                }`} />
              </button>
            ))}
          </div>
        </div>

        {/* Global Summary Badge */}
        <div className="mt-12 text-center">
          <div className="inline-flex flex-wrap items-center justify-center gap-x-4 gap-y-2 bg-slate-50 border border-slate-100 px-6 py-3.5 rounded-full text-sm font-semibold shadow-sm">
            <span className="text-slate-700">Overall Google Rating:</span>
            <div className="flex items-center gap-1.5">
              <span className="text-slate-900 font-extrabold text-base">4.9 / 5.0</span>
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4.5 h-4.5 fill-amber-400 stroke-amber-400" />
                ))}
              </div>
              <span className="text-slate-600 font-normal">(1,248+ customer ratings)</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
