"use client";

import { motion } from "framer-motion";
import { CheckCircle2, ShieldCheck, PhoneCall, Zap } from "lucide-react";

const benefits = [
  { title: "Premium Quality Nets", desc: "We use ISO-standard materials with high load capacities." },
  { title: "UV Resistant Twines", desc: "Long-lasting protection that won't fade or sag in heat." },
  { title: "Strong Installation", desc: "We use rust-proof stainless steel hooks & wall plugs." },
  { title: "Affordable Prices", desc: "Direct manufacturing rates with zero agent commissions." },
  { title: "Same Day Inspection", desc: "We arrive within hours of your call to inspect the site." },
  { title: "Quick Fitting", desc: "Most installations are completed within 2 to 4 hours." },
  { title: "Professional Technicians", desc: "Certified installers with years of high-rise experience." },
  { title: "Warranty Card Provided", desc: "Up to 5 years warranty on all premium product lines." },
  { title: "Free Measurements", desc: "Absolutely no charges for site inspection & sizing visits." },
  { title: "Hassle-Free Booking", desc: "One-click call or WhatsApp to confirm your appointment." }
];

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-light/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Heading & Callout */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs font-bold uppercase tracking-widest text-accent">
              Unmatched Standards
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-display leading-tight">
              {"Why BMC is Bangalore's #1 Choice"}
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              {"We don't believe in cheap temporary fixes. At BMC Safety Nets, we use marine-grade stainless steel wire ropes, 100% pure virgin HDPE netting, and heavy double-walled anchor expansions. Your family's safety is our highest priority."}
            </p>

            {/* Graphic Trust Banner */}
            <div className="glass-card-dark rounded-2xl p-6 border border-white/10 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-accent/25 flex items-center justify-center text-accent">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-sm uppercase text-slate-300 tracking-wider">Certified Safety</h4>
                  <p className="text-xs text-slate-400">100% Non-Toxic & Pet-Friendly Materials</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary-light/25 flex items-center justify-center text-primary-light">
                  <Zap className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-sm uppercase text-slate-300 tracking-wider">Same Day Service</h4>
                  <p className="text-xs text-slate-400">Call before 12 PM for same-day completion</p>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <a
                href="tel:+919686668224"
                className="inline-flex items-center gap-2 bg-accent hover:bg-accent-dark text-white font-bold py-3 px-6 rounded-lg text-sm transition-all shadow-md"
              >
                <PhoneCall className="w-4 h-4 fill-white" />
                <span>Call +91 96866 68224</span>
              </a>
            </div>
          </div>

          {/* Right Column: Grid List */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: index * 0.05, duration: 0.3 }}
                  className="flex items-start space-x-3 bg-white/5 hover:bg-white/10 border border-white/5 rounded-xl p-4 transition-colors"
                >
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold text-sm sm:text-base text-white font-display">
                      {benefit.title}
                    </h3>
                    <p className="text-slate-400 text-xs sm:text-sm mt-1 leading-relaxed">
                      {benefit.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
