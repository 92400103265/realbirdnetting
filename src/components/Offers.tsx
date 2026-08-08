 "use client";

import React from "react";
import {
  ArrowRight,
  Check,
  Clock,
  Gift,
  Phone,
  ShieldCheck,
  Sparkles,
  Tag,
  Users,
  Zap,
} from "lucide-react";
import { motion } from "framer-motion";

interface Offer {
  id: number;
  title: string;
  subtitle: string;
  discount: string;
  badge: string;
  description: string;
  features: string[];
  color: string;
  accent: string;
  popular?: boolean;
  icon: React.ReactNode;
}

const offers: Offer[] = [
  {
    id: 1,
    title: "Bird Netting",
    subtitle: "Balcony & Window Protection",
    discount: "UP TO 20% OFF",
    badge: "Most Popular",
    description:
      "Keep pigeons and unwanted birds away with durable, UV-resistant safety netting.",
    features: [
      "Heavy-duty bird safety net",
      "UV-resistant material",
      "Professional installation",
      "Balcony & window coverage",
      "Free site inspection",
    ],
    color: "from-orange-500 to-orange-600",
    accent: "bg-orange-50 text-orange-600",
    popular: true,
    icon: <ShieldCheck className="h-7 w-7" />,
  },
  {
    id: 2,
    title: "Invisible Grills",
    subtitle: "Modern Balcony Safety",
    discount: "UP TO 15% OFF",
    badge: "Premium",
    description:
      "Get a clean, modern safety solution without blocking your balcony view.",
    features: [
      "High-strength stainless steel",
      "Minimal visual appearance",
      "Professional fitting",
      "Balcony & window installation",
      "Free measurement",
    ],
    color: "from-blue-600 to-indigo-600",
    accent: "bg-blue-50 text-blue-600",
    icon: <Sparkles className="h-7 w-7" />,
  },
  {
    id: 3,
    title: "Cloth Hangers",
    subtitle: "Retractable Balcony System",
    discount: "UP TO 10% OFF",
    badge: "Value Offer",
    description:
      "Save balcony space with a strong and convenient retractable cloth hanger system.",
    features: [
      "Space-saving design",
      "Strong stainless-steel system",
      "Easy to operate",
      "Balcony installation",
      "Professional fitting",
    ],
    color: "from-emerald-500 to-teal-600",
    accent: "bg-emerald-50 text-emerald-600",
    icon: <Zap className="h-7 w-7" />,
  },
];

const benefits = [
  "Free site inspection",
  "Same-day installation available",
  "Experienced installation team",
  "Quality materials",
  "Transparent quotation",
  "After-installation support",
];

export default function Offers() {
  const phoneNumber = "+919354254539";

  const whatsappMessage = encodeURIComponent(
    "Hi Real Bird Netting, I want to know about your current offers and discounts for Bird Netting, Invisible Grills, and Cloth Hangers in Gurugram."
  );

  const whatsappUrl = `https://wa.me/${phoneNumber.replace(
    "+",
    ""
  )}?text=${whatsappMessage}`;

  return (
    <section
      id="offers"
      className="relative overflow-hidden bg-slate-50 py-16 sm:py-20 lg:py-24"
    >
      {/* Background Decoration */}
      <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-orange-200/30 blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-10 h-96 w-96 rounded-full bg-blue-200/30 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-12 max-w-3xl text-center"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-orange-100 px-4 py-2 text-sm font-bold text-orange-600">
            <Gift className="h-4 w-4" />
            Limited-Time Offers
          </div>

          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Save More on Your
            <span className="block text-orange-500">
              Bird Protection Services
            </span>
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg">
            Protect your balcony, windows, and home with professional
            installation from Real Bird Netting. Ask us about our current
            discounts and service packages in Gurugram.
          </p>
        </motion.div>

        {/* Offer Cards */}
        <div className="grid gap-6 lg:grid-cols-3">
          {offers.map((offer, index) => (
            <motion.article
              key={offer.id}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.55,
                delay: index * 0.12,
              }}
              whileHover={{ y: -6 }}
              className={`relative overflow-hidden rounded-3xl border bg-white shadow-lg transition-shadow duration-300 hover:shadow-2xl ${
                offer.popular
                  ? "border-orange-300 ring-2 ring-orange-100"
                  : "border-slate-200"
              }`}
            >
              {/* Popular Badge */}
              {offer.popular && (
                <div className="absolute right-4 top-4 z-10 rounded-full bg-orange-500 px-3 py-1 text-xs font-extrabold uppercase tracking-wide text-white shadow-md">
                  {offer.badge}
                </div>
              )}

              {/* Card Header */}
              <div
                className={`bg-gradient-to-r ${offer.color} p-6 text-white`}
              >
                <div className="mb-5 flex items-center justify-between">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15 backdrop-blur-sm">
                    {offer.icon}
                  </div>

                  {!offer.popular && (
                    <span className="rounded-full bg-white/15 px-3 py-1 text-xs font-bold backdrop-blur-sm">
                      {offer.badge}
                    </span>
                  )}
                </div>

                <p className="mb-1 text-sm font-semibold text-white/80">
                  {offer.subtitle}
                </p>

                <h3 className="text-2xl font-extrabold">
                  {offer.title}
                </h3>

                <div className="mt-5 inline-flex items-center gap-2 rounded-xl bg-white px-4 py-2 font-extrabold text-slate-900 shadow-md">
                  <Tag className="h-4 w-4" />
                  {offer.discount}
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6">
                <p className="min-h-[72px] text-sm leading-6 text-slate-600">
                  {offer.description}
                </p>

                <div className="my-6 h-px bg-slate-100" />

                <h4 className="mb-4 text-sm font-extrabold text-slate-900">
                  Offer Includes:
                </h4>

                <ul className="space-y-3">
                  {offer.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 text-sm text-slate-600"
                    >
                      <span
                        className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${offer.accent}`}
                      >
                        <Check className="h-3.5 w-3.5" />
                      </span>

                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Card Buttons */}
                <div className="mt-7 grid grid-cols-2 gap-3">
                  <a
                    href={`tel:${phoneNumber}`}
                    className={`flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r ${offer.color} px-4 py-3 text-sm font-bold text-white shadow-md transition-all hover:shadow-lg active:scale-95`}
                  >
                    <Phone className="h-4 w-4 fill-white" />
                    Call
                  </a>

                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-bold text-slate-800 transition-all hover:bg-slate-100 active:scale-95"
                  >
                    WhatsApp
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Limited-Time Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-10 overflow-hidden rounded-3xl bg-slate-900 shadow-xl"
        >
          <div className="relative px-6 py-8 sm:px-10 lg:px-12">
            <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-orange-500/20 blur-3xl" />

            <div className="relative flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div className="flex items-start gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-orange-500 text-white">
                  <Clock className="h-7 w-7" />
                </div>

                <div>
                  <div className="mb-1 flex flex-wrap items-center gap-2">
                    <h3 className="text-xl font-extrabold text-white sm:text-2xl">
                      Limited-Time Service Offers
                    </h3>

                    <span className="rounded-full bg-orange-500 px-3 py-1 text-xs font-bold text-white">
                      SAVE MORE
                    </span>
                  </div>

                  <p className="max-w-2xl text-sm leading-6 text-slate-300">
                    Contact Real Bird Netting today to check the latest
                    available discount for your property and service
                    requirement.
                  </p>
                </div>
              </div>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-orange-500 px-6 py-3.5 text-sm font-extrabold text-white shadow-lg transition-all hover:bg-orange-600 hover:shadow-orange-500/20 active:scale-95"
              >
                Get Offer
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12"
        >
          <div className="mb-7 text-center">
            <p className="inline-flex items-center gap-2 text-sm font-extrabold uppercase tracking-wider text-slate-500">
              <Users className="h-4 w-4" />
              Why Choose Real Bird Netting
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.06,
                }}
                className="flex min-h-[110px] flex-col items-center justify-center rounded-2xl border border-slate-200 bg-white p-4 text-center shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
              >
                <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
                  <Check className="h-5 w-5" />
                </div>

                <span className="text-xs font-bold leading-5 text-slate-700">
                  {benefit}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 text-center"
        >
          <div className="mx-auto max-w-3xl rounded-3xl border border-orange-100 bg-white p-7 shadow-lg sm:p-10">
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-100 text-orange-600">
              <Sparkles className="h-7 w-7" />
            </div>

            <h3 className="text-2xl font-extrabold text-slate-900 sm:text-3xl">
              Looking for the Best Price?
            </h3>

            <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-slate-600 sm:text-base">
              Tell us what service you need. Our team can provide a quotation
              based on your balcony, window, or property requirements.
            </p>

            <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
              <a
                href={`tel:${phoneNumber}`}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-orange-500 px-6 py-3.5 text-sm font-extrabold text-white shadow-md transition-all hover:bg-orange-600 active:scale-95"
              >
                <Phone className="h-4 w-4 fill-white" />
                Call +91 93542 54539
              </a>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-emerald-500 px-6 py-3.5 text-sm font-extrabold text-emerald-600 transition-all hover:bg-emerald-50 active:scale-95"
              >
                Ask on WhatsApp
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>

            <p className="mt-5 text-xs font-semibold text-slate-400">
              *Discount availability may vary based on service, measurement,
              and installation requirements.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}