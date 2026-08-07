"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    q: "How much do safety nets cost in Bangalore?",
    a: "The price of safety nets in Bangalore starts from ₹12 to ₹35 per square foot. The exact rate depends on the mesh thickness, brand (like Garware), UV stabilization levels, and warranty period chosen (ranging from 1 to 5 years)."
  },
  {
    q: "How long does the safety net installation process take?",
    a: "Normally, installation is quick. A standard balcony or window installation takes between 1.5 to 3 hours. Larger areas like terraces, sports court netting, or duct areas can take 4 to 8 hours."
  },
  {
    q: "Are invisible grills safe for high-rise apartment balconies?",
    a: "Yes, invisible grills are extremely safe. Made of high-tensile 316 Marine Grade Stainless Steel cables coated in nylon, they can easily withstand loads up to 400kg. They are widely recommended for high-rise balcony and window installations."
  },
  {
    q: "Can monkeys tear or damage safety nets?",
    a: "Monkeys cannot easily damage our heavy-duty monkey safety nets. We use 2.5mm to 4.0mm thick braided nylon twines with stainless steel cores or tight grid HDPE nets specifically built for high impact resistance to prevent monkey intrusions."
  },
  {
    q: "Do you provide a warranty on safety nets?",
    a: "Yes, we provide an official warranty card on our premium safety nets ranging from 3 to 5 years. The warranty covers manufacturing defects, sag issues, and premature UV degradation under normal outdoor weather conditions."
  },
  {
    q: "How long do premium safety nets typically last?",
    a: "Premium UV-stabilized safety nets (like Garware HDPE nets) last between 5 to 8 years in Bangalore's weather conditions. Standard nets last around 2 to 3 years."
  },
  {
    q: "Which type of safety net is best for balcony protection?",
    a: "For balconies with children and pet safety needs, a 0.7mm or 1mm transparent nylon net or a 2.5mm HDPE net is recommended. For pigeon blockage, a 30mm/50mm mesh transparent net works best as it keeps birds out without blocking ventilation."
  },
  {
    q: "Do you offer a free site inspection and measurements?",
    a: "Yes, BMC Safety Nets offers a 100% free site inspection, measurement check, and cost estimation anywhere in Bangalore. There are no hidden call-out fees or charges if you choose not to proceed."
  },
  {
    q: "Is same-day installation available in Bangalore?",
    a: "Yes, we offer same-day inspection and installation services across Bangalore. If you book an inspection before 12 PM, we can complete the installation on the same day."
  },
  {
    q: "Are invisible grills rust-proof?",
    a: "Yes, we use Marine Grade 316 Stainless Steel wire ropes that are coated in specialized protective nylon. This makes them 100% rust-proof, corrosion-resistant, and ideal for long-term outdoor exposure in rainy monsoons."
  },
  {
    q: "Can bird nets block light and air in the balcony?",
    a: "No, our transparent nylon and light-colored HDPE bird nets have a high open-area grid (typically 30mm to 50mm) which allows 98% of natural light and airflow to pass through easily, keeping your balcony bright and ventilated."
  },
  {
    q: "How are the safety nets anchored to the walls?",
    a: "We anchor safety nets using heavy-duty, rust-proof metal expansion bolts or high-grade PVC wall plugs. We drill at close intervals (approx. 1 to 1.5 feet) and secure the net twines tightly with stainless steel hooks to avoid gaps."
  },
  {
    q: "Are the safety nets safe for pets like cats?",
    a: "Yes, we have specialized Pet Safety Nets (cat protection nets). They feature a tighter 25mm to 30mm mesh size and reinforced cords to prevent cats from slipping through or chewing through the netting twines."
  },
  {
    q: "Can invisible grills be easily removed during fire emergencies?",
    a: "Yes. In the event of a fire or emergency, invisible grills can be quickly cut using a standard wire-cutter. This is a critical advantage over traditional iron grills which lock you in during fires."
  },
  {
    q: "Do you cover industrial areas, warehouses, and factories?",
    a: "Yes, we provide heavy-duty industrial safety netting, warehouse bird control mesh, and factory ceiling protection nets. Our team is fully trained and equipped with safety harnesses for high-height fittings."
  },
  {
    q: "What is the difference between Nylon and HDPE safety nets?",
    a: "Nylon nets are highly flexible, elastic, and offer good impact absorption. HDPE (High Density Polyethylene) nets are stiffer, highly resistant to UV rays, chemically inert, and absorb zero moisture, making them extremely durable outdoors."
  },
  {
    q: "How much weight can a balcony safety net support?",
    a: "Our premium child-safety balcony nets can easily support a localized impact load of 100kg to 150kg when anchored correctly, which is more than enough to safely stop an adult, child, or pet from falling."
  },
  {
    q: "Do you install cloth drying hangers, and what types are available?",
    a: "Yes, we install premium space-saving cloth hangers. We offer Ceiling-Mounted Pulley Hangers (independently movable metal rods) and Motorized Dryers (remote controlled, featuring warm air blowers and UV sterilizers)."
  },
  {
    q: "How do I maintain and clean the safety nets?",
    a: "Our nets require zero maintenance. They are dust-repellent and do not absorb water. If needed, you can lightly spray them with water or wipe them down with a damp cloth to clean off any accumulated dust."
  },
  {
    q: "What areas in Bangalore do you service?",
    a: "We service all locations in Bangalore, including Whitefield, HSR Layout, Indiranagar, Electronic City, Jayanagar, Koramangala, Hebbal, Yeshwanthpur, Marathahalli, Bellandur, Bannerghatta Road, Malleshwaram, and surrounding suburbs."
  }
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  // Generate FAQ JSON-LD Schema Markup
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }))
  };

  return (
    <section id="faq" className="py-20 bg-slate-50 relative">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-primary-light">
            Frequently Asked Questions
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2 font-display">
            Got Questions? We Have Answers
          </h2>
          <p className="text-slate-600 mt-3 text-sm sm:text-base">
            Read through our 20 detailed FAQs to learn everything about installation, durability, and cost.
          </p>
          <div className="h-1 bg-accent w-16 mx-auto mt-4 rounded" />
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white border border-slate-150 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              {/* Accordion Trigger */}
              <button
                id={`faq-trigger-${index}`}
                onClick={() => toggleAccordion(index)}
                aria-expanded={activeIndex === index}
                aria-controls={`faq-answer-${index}`}
                className="w-full flex items-center justify-between p-5 text-left text-slate-800 hover:text-primary font-bold text-sm sm:text-base font-display transition-colors duration-200 cursor-pointer"
              >
                <span className="flex items-center space-x-3 pr-4">
                  <HelpCircle className="w-5 h-5 text-primary shrink-0" />
                  <span>{faq.q}</span>
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-300 ${
                    activeIndex === index ? "rotate-185 text-primary" : ""
                  }`}
                />
              </button>

              {/* Accordion Content */}
              <AnimatePresence initial={false}>
                {activeIndex === index && (
                  <motion.div
                    id={`faq-answer-${index}`}
                    role="region"
                    aria-labelledby={`faq-trigger-${index}`}
                    initial={{ height: 0 }}
                    animate={{ height: "auto" }}
                    exit={{ height: 0 }}
                    transition={{ duration: 0.25 }}
                    className="overflow-hidden"
                  >
                    <div className="px-5 pb-5 pt-1 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-50 pl-13">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* FAQ CTA */}
        <div className="text-center mt-12 bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
          <p className="text-slate-600 text-xs sm:text-sm">
            Still have an unanswered question? Call us directly for immediate support!
          </p>
          <a
            href="tel:+919686668224"
            className="inline-flex items-center space-x-1.5 text-primary hover:text-primary-light font-bold text-sm sm:text-base mt-2"
          >
            <span>Call Customer Support:</span>
            <span className="underline">+91 96866 68224</span>
          </a>
        </div>

      </div>
    </section>
  );
}
