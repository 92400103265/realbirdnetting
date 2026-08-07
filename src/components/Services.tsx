"use client";

import { useState, useEffect } from "react";
import { Phone, MessageCircle, Info, Check, ShieldCheck, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

// Services Data
const servicesData = {
  nets: {
    title: "Premium Safety Nets",
    desc: "UV-resistant, heavy-duty safety nets designed for complete protection against birds, pigeons, and fall hazards.",
    items: [
      {
        id: "balcony-nets",
        name: "Real bird netting ",
        img: "/images/balcony.webp",
        tags: ["UV Resistant", "High Tensile", "5 Yr Warranty"],
        bulletPoints: ["100% child & pet safety", "Premium Nylon materials", "Professional anchors", "Protects balconies from monkeys & falling items"],
        description: "Secure your balconies from accidental falls without blocking airflow. Our balcony safety nets are made of high-density polyethylene (HDPE), UV-stabilized to withstand extreme sun, rain, and winds. Professionally anchored with rust-proof stainless steel hooks."
      },
      {
        id: "pigeon-nets",
        name: "Pigeon & Bird Protection Nets",
        img: "/images/pigeonsafetynet.webp",
        tags: ["No Bird Harm", "Hygienic", "Rust Proof"],
        bulletPoints: ["Blocks all bird entries", "Keep balconies clean & hygienic", "High visibility netting", "No harm to birds"],
        description: "Keep your spaces clean, hygienic, and free from bird droppings. Our bird prevention nets block pigeon entries permanently. Ideal for balconies, window alcoves, duct areas, and high-rise shafts. Available in transparent nylon or heavy-duty wire mesh."
      },
      {
        id: "monkey-nets",
        name: "Monkey Safety Nets",
        img: "/images/monkey.jpeg",
        tags: ["Thick Nylon", "Impact Proof", "Heavy Duty"],
        bulletPoints: ["Extra-thick grid mesh", "High impact resistance", "Secured with heavy wall anchors", "Blocks aggressive monkey intrusions"],
        description: "Designed specifically to withstand aggressive monkey intrusions. These nets are woven with extra-thick braided nylon twine and reinforced with heavy-duty anchors. Ideal for ground floor houses, high-rise buildings near forest areas, and terraces."
      },
      {
        id: "sports-nets",
        name: "Cricket & Sports Netting",
        img: "/images/cricket.jpeg",
        tags: ["Heavy Ply", "Custom Sizes", "Indoor/Outdoor"],
        bulletPoints: ["Cricket practice pitches", "Football & soccer court netting", "Highly durable HDPE twines", "Custom layout designs"],
        description: "Professional sports court netting for schools, clubs, residential societies, and terraces. Built with thick braided, multi-ply HDPE yarn to absorb high-impact shots. Custom designs for cricket nets, football nets, and basketball boundaries."
      },
      {
        id: "industrial-nets",
        name: "Industrial & Construction Nets",
        img: "/images/constructionnets.webp",
        tags: ["ISI Marked", "Debris Protection", "Worker Safety"],
        bulletPoints: ["Falls prevention for workers", "Captures falling debris", "ISI standard high-grade nets", "Duct area coverage"],
        description: "High-grade fall protection netting for construction sites, duct areas, factories, and warehouses. Meets Indian safety standards (ISI) and ensures high load-bearing capacity to prevent accidents at height."
      },
      {
        id: "pet-nets",
        name: "Pet Safety Nets",
        img: "/images/petsafetynet.webp",
        tags: ["Extra Durable", "Bite Resistant", "Safe for Cats"],
        bulletPoints: ["Prevent pets from falling", "Tighter 25mm to 30mm mesh", "Extra thick bite-resistant twine", "Maintains airflow and visibility"],
        description: "Specifically designed to keep cats, dogs, and other pets safe on high-rise balconies, windows, and open terraces. Our pet nets feature a smaller grid size and chew-resistant materials to prevent pets from squeezing through or cutting the threads."
      },
      {
        id: "duct-nets",
        name: "Duct Area Safety Nets",
        img: "/images/ductarea1.webp",
        tags: ["Pigeon Blockage", "High Altitude Fitting", "Heavy Duty"],
        bulletPoints: ["Covers building ventilation ducts", "Prevents pigeon nesting & odour", "Professional high-altitude crew", "Rust-proof steel anchor hooks"],
        description: "Ventilation shafts and duct areas between apartments are primary breeding grounds for pigeons. We cover these vertical voids using heavy-duty, UV-stabilized bird nets. Installed by our trained high-altitude rope-access specialists."
      },
      {
        id: "bird-spikes",
        name: "Anti-Bird & Pigeon Spikes",
        img: "/images/service-spikes.png",
        tags: ["Polycarbonate Base", "SS Spikes", "Weather Proof"],
        bulletPoints: ["Prevent birds from landing", "100% humane (no harm to birds)", "Installs on railings & AC units", "Highly durable and transparent"],
        description: "Perfect for narrow ledges, pipes, window sills, and air conditioner outdoor units where safety nets cannot be easily anchored. Our premium stainless steel spikes on polycarbonate bases discourage birds from landing or nesting without causing them harm."
      }
    ]
  },
  grills: {
    title: "Modern Invisible Grills",
    desc: "Unobstructed views combined with premium high-tensile safety. Ideal for balconies and windows in high-rise apartments.",
    items: [
      {
        id: "balcony-grills",
        name: "Balcony Invisible Grills",
        img: "/images/balconygrill.webp",
        tags: ["SS 316 Grade", "Nylon Coated", "Modern View"],
        bulletPoints: ["Rust-proof stainless steel cables", "Does not block view or ventilation", "Can bear up to 400kg load", "Modern look for premium flats"],
        description: "The ultimate modern replacement for bulky iron grills. Made from Marine Grade 316 Stainless Steel cables coated with nylon, these thin invisible grills provide full safety for kids and pets while maintaining an open, luxurious view of Bangalore."
      },
      {
        id: "window-grills",
        name: "Window & Staircase Grills",
        img: "/images/windowgrill.webp",
        tags: ["Anti-Rust", "Child Safe", "Minimalist"],
        bulletPoints: ["Child-safe window protection", "Perfect for staircases & voids", "Sleek and clean installation", "Easy emergency escape cuts"],
        description: "Secure your sliding or openable windows and staircases. Our custom-spaced invisible grills prevent accidental falls. The grid spacing can be customized to prevent pets from passing through. Features quick-release capabilities for fire emergencies."
      }
    ]
  },
  hangers: {
    title: "Smart Cloth Hangers",
    desc: "Space-saving ceiling cloth drying systems. Perfect for narrow balconies, galleries, and laundry rooms.",
    items: [
      {
        id: "pulley-hangers",
        name: "Ceiling Pulley Cloth Hangers",
        img: "/images/clothhanger.jpg",
        tags: ["Rust Proof", "Independently Movable", "Space Saver"],
        bulletPoints: ["Independently lowered rods", "Rust-free aluminum pipes", "High-tensile nylon pulleys", "Zero floor-space occupancy"],
        description: "Save space with our premium ceiling-mounted cloth hangers. Lower and raise individual rods easily using smooth nylon pulleys and durable metal brackets. Keeps clothes dry near the ceiling and frees up floor space on your balcony."
      },
      {
        id: "motorized-hangers",
        name: "Motorized Cloth Drying Systems",
        img: "/images/service-hanger-motor.jpg",
        tags: ["Remote Control", "UV Air Dryers", "Premium Luxury"],
        bulletPoints: ["Wireless remote control operation", "Integrated warm air blower & UV", "Built-in LED lighting", "Saves time and manual labor"],
        description: "Experience luxury and convenience with remote-controlled ceiling hangers. Features built-in warm air blowers and UV sanitizing lamps to speed up drying during rainy Bangalore monsoons. Heavy load-bearing capacity with obstacle detection."
      }
    ]
  }
};

interface ServiceItem {
  id: string;
  name: string;
  img: string;
  tags: string[];
  bulletPoints: string[];
  description: string;
}

export default function Services() {
  const [activeTab, setActiveTab] = useState<"nets" | "grills" | "hangers">("nets");
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  useEffect(() => {
    const handleTabChange = (e: Event) => {
      const customEvent = e as CustomEvent<"nets" | "grills" | "hangers">;
      if (customEvent.detail) {
        setActiveTab(customEvent.detail);
      }
    };
    window.addEventListener("change-services-tab", handleTabChange);
    return () => window.removeEventListener("change-services-tab", handleTabChange);
  }, []);

  const activeCategory = servicesData[activeTab];

  const whatsappUrl = (serviceName: string) =>
    `https://wa.me/919354254539?text=Hi%20Real%20Bird%20Netting%2C%20I%20am%20interested%20in%20a%20free%20quote%20for%20${encodeURIComponent(serviceName)}.%20Please%20contact%20me.`;

  return (
    <section id="services" className="py-20 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-primary-light">
            Our Services
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2 font-display">
            High-Quality Safety & Space Solutions
          </h2>
          <p className="text-slate-600 mt-3 text-sm sm:text-base">
            Protect your home, block pigeons, and save space with our premium installations. Click on any service to learn details.
          </p>
          <div className="h-1 bg-accent w-16 mx-auto mt-4 rounded" />
        </div>

        {/* Tab Buttons */}
        <div className="flex justify-center mb-12">
          <div className="bg-white p-1.5 rounded-2xl shadow-sm border border-slate-100 flex space-x-1" role="tablist" aria-label="Services Categories">
            {(Object.keys(servicesData) as Array<"nets" | "grills" | "hangers">).map((key) => (
              <button
                key={key}
                role="tab"
                aria-selected={activeTab === key}
                aria-controls={`panel-${key}`}
                id={`tab-${key}`}
                onClick={() => setActiveTab(key)}
                className={`px-5 py-3.5 rounded-xl text-sm font-bold transition-all duration-300 relative cursor-pointer min-h-[48px] ${
                  activeTab === key
                    ? "bg-primary text-white shadow-md"
                    : "text-slate-600 hover:text-primary hover:bg-slate-50"
                }`}
              >
                {servicesData[key].title}
              </button>
            ))}
          </div>
        </div>

        {/* Active Tab description */}
        <div className="text-center max-w-2xl mx-auto mb-10 -mt-4 text-xs sm:text-sm text-slate-600 italic">
          &ldquo;{activeCategory.desc}&rdquo;
        </div>

        {/* Services Grid */}
        <motion.div
          layout
          id={`panel-${activeTab}`}
          role="tabpanel"
          aria-labelledby={`tab-${activeTab}`}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {activeCategory.items.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-2xl shadow-md border border-slate-100 overflow-hidden flex flex-col group hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative h-64 w-full overflow-hidden bg-slate-100">
                  <Image
                    src={item.img}
                    alt={item.name}
                    width={600}
                    height={400}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 flex flex-wrap gap-1">
                    {item.tags.slice(0, 2).map((tg) => (
                      <span key={tg} className="bg-slate-900/85 backdrop-blur-sm text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
                        {tg}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-bold text-xl text-slate-900 font-display mb-3 group-hover:text-primary transition-colors">
                      {item.name}
                    </h3>
                    <ul className="space-y-2 mb-6">
                      {item.bulletPoints.map((pt, i) => (
                        <li key={i} className="flex items-start text-slate-600 text-xs sm:text-sm">
                          <Check className="w-4.5 h-4.5 text-accent shrink-0 mr-2 mt-0.5" />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Buttons & Learn More Link */}
                  <div className="space-y-3">
                    <button
                      onClick={() => setSelectedService(item)}
                      className="w-full flex items-center justify-center space-x-1.5 py-3 border border-slate-200 hover:border-primary text-slate-700 hover:text-primary font-semibold text-xs rounded-lg transition-all cursor-pointer min-h-[48px]"
                    >
                      <Info className="w-4 h-4" />
                      <span>Learn Technical Details</span>
                    </button>

                    <div className="grid grid-cols-2 gap-2">
                      <a
                        href="tel:+919354254539"
                        className="flex items-center justify-center space-x-1 bg-primary text-white py-3 px-3 rounded-lg text-xs font-bold shadow-sm hover:bg-primary-light transition-colors min-h-[48px]"
                      >
                        <Phone className="w-3.5 h-3.5 fill-white" />
                        <span>Call</span>
                      </a>
                      <a
                        href={whatsappUrl(item.name)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center space-x-1 bg-accent text-slate-900 py-3 px-3 rounded-lg text-xs font-bold shadow-sm hover:bg-accent-dark transition-colors min-h-[48px]"
                      >
                        <MessageCircle className="w-3.5 h-3.5 fill-slate-900" />
                        <span>WhatsApp</span>
                      </a>
                    </div>
                  </div>

                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Section CTA */}
        <div className="mt-12 text-center bg-slate-900 text-white rounded-2xl p-6 sm:p-8 shadow-xl max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 border border-white/10">
          <div className="text-left">
            <h4 className="text-lg sm:text-xl font-bold font-display">Need custom sizing or help?</h4>
            <p className="text-slate-300 text-xs sm:text-sm mt-1">Book a free inspection. No charges for measurements or visits.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href="tel:+919354254539"
              className="bg-white text-slate-900 hover:bg-slate-100 py-3 px-5 rounded-lg text-sm font-bold transition-all shadow-sm"
            >
              📞 Call +91  9354254539
            </a>
            <a
              href={whatsappUrl("General Inquiry")}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-accent hover:bg-accent-dark text-white py-3 px-5 rounded-lg text-sm font-bold transition-all shadow-sm"
            >
              💬 WhatsApp Quote
            </a>
          </div>
        </div>

      </div>

      {/* Learn More Details Modal */}
      <AnimatePresence>
        {selectedService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Modal Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedService(null)}
              className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
            />
            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative bg-white rounded-2xl shadow-2xl max-w-lg w-full overflow-hidden z-10 border border-slate-100"
            >
              <div className="relative h-72 w-full">
                <Image
                  src={selectedService.img}
                  alt={selectedService.name}
                  width={800}
                  height={600}
                  className="w-full h-72 object-cover"
                  sizes="(max-width: 768px) 100vw, 800px"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
                <button
                  onClick={() => setSelectedService(null)}
                  className="absolute top-4 right-4 bg-white/20 hover:bg-white/40 w-12 h-12 flex items-center justify-center rounded-lg text-white transition-colors cursor-pointer"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
                <div className="absolute bottom-4 left-6 pr-6">
                  <span className="bg-accent text-slate-900 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
                    {selectedService.tags[0]}
                  </span>
                  <h3 className="text-2xl font-bold text-white font-display mt-1">
                    {selectedService.name}
                  </h3>
                </div>
              </div>

              <div className="p-6 space-y-4">
                <p className="text-slate-600 text-sm leading-relaxed">
                  {selectedService.description}
                </p>

                <div className="border-t border-slate-100 pt-4 space-y-3">
                  <div className="flex items-center gap-2 text-xs font-semibold text-slate-600 uppercase tracking-wide">
                    <ShieldCheck className="w-4 h-4 text-primary" />
                    <span>Quality Specifications</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-slate-600 text-xs sm:text-sm">
                    {selectedService.tags.map((tg: string) => (
                      <span key={tg} className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                        {tg}
                      </span>
                    ))}
                    <span className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                      Anti-Sag Twine
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 pt-4 border-t border-slate-100">
                  <a
                    href="tel:+919354254539"
                    className="flex items-center justify-center space-x-2 bg-primary text-white py-3 rounded-lg text-sm font-bold shadow-md hover:bg-primary-light min-h-[48px]"
                  >
                    <Phone className="w-4 h-4 fill-white" />
                    <span>Call to Order</span>
                  </a>
                  <a
                    href={whatsappUrl(selectedService.name)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center space-x-2 bg-accent text-slate-900 py-3 rounded-lg text-sm font-bold shadow-md hover:bg-accent-dark min-h-[48px]"
                  >
                    <MessageCircle className="w-4 h-4 fill-slate-900" />
                    <span>Send Message</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
