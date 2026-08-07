"use client";

import { motion } from "framer-motion";
import { PhoneCall, Ruler, FileCheck, ShieldAlert, Smile } from "lucide-react";

const steps = [
  {
    step: "1",
    icon: PhoneCall,
    title: "Call/WhatsApp Us",
    desc: "Contact us and share your requirement. We schedule a convenient time for a site visit."
  },
  {
    step: "2",
    icon: Ruler,
    title: "Free Site Inspection",
    desc: "Our field executive visits your site to take precise measurements and check structure requirements."
  },
  {
    step: "3",
    icon: FileCheck,
    title: "Instant Quote",
    desc: "Get an immediate price quote on-site with zero obligation. Choose your material preference."
  },
  {
    step: "4",
    icon: ShieldAlert,
    title: "Professional Fitting",
    desc: "Our skilled technicians install safety nets or invisible grills with premium fixtures."
  },
  {
    step: "5",
    icon: Smile,
    title: "Enjoy Safe Home",
    desc: "Double-checked for security, you receive your warranty card. Enjoy complete peace of mind!"
  }
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15
    }
  }
};

const stepVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring" as const,
      stiffness: 80,
      damping: 15
    }
  }
};

export default function Process() {
  return (
    <section className="py-20 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-primary-light">
            Working Process
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2 font-display">
            How It Works in 5 Easy Steps
          </h2>
          <p className="text-slate-600 mt-3 text-sm sm:text-base">
            From your first call to a fully secured home, we make the entire process quick and seamless.
          </p>
          <div className="h-1 bg-accent w-16 mx-auto mt-4 rounded" />
        </div>

        {/* Desktop timeline horizontal layout */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="hidden lg:grid grid-cols-5 gap-4 relative"
        >
          {steps.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                variants={stepVariants}
                className="flex flex-col items-center text-center relative group"
              >
                {/* Connecting arrows between items */}
                {index < 4 && (
                  <div className="absolute top-10 left-[calc(50%+45px)] w-[calc(100%-90px)] h-0.5 border-t-2 border-dashed border-slate-300 group-hover:border-primary-light transition-colors z-0" />
                )}

                {/* Step Circle with Icon */}
                <div className="relative z-10 w-20 h-20 bg-white rounded-2xl border border-slate-200 shadow-sm flex items-center justify-center text-primary group-hover:border-primary group-hover:shadow-md transition-all duration-300">
                  <div className="absolute -top-2.5 -right-2.5 w-6 h-6 bg-accent text-white text-xs font-bold rounded-full flex items-center justify-center border-2 border-white">
                    {item.step}
                  </div>
                  <Icon className="w-9 h-9 stroke-[1.5]" />
                </div>

                <h3 className="font-bold text-lg text-slate-800 mt-6 mb-2 font-display">
                  {item.title}
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm px-2 leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Mobile timeline vertical layout */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="lg:hidden flex flex-col space-y-8 relative"
        >
          {/* Vertical connecting line */}
          <div className="absolute top-8 left-8 bottom-8 w-0.5 border-l-2 border-dashed border-slate-200 z-0" />

          {steps.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                variants={stepVariants}
                className="flex items-start space-x-4 relative z-10"
              >
                {/* Step Circle with Icon */}
                <div className="w-16 h-16 bg-white rounded-xl border border-slate-200 shadow-sm flex items-center justify-center text-primary shrink-0 relative">
                  <div className="absolute -top-1.5 -right-1.5 w-5 h-5 bg-accent text-white text-[10px] font-bold rounded-full flex items-center justify-center border border-white">
                    {item.step}
                  </div>
                  <Icon className="w-7 h-7 stroke-[1.5]" />
                </div>

                {/* Text Content */}
                <div className="pt-1.5">
                  <h3 className="font-bold text-base text-slate-800 font-display">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm mt-1 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
