"use client";

import React from "react";
import Image from "next/image";
import {
  ShieldCheck,
  Award,
  Users,
  Clock3,
  CheckCircle2,
} from "lucide-react";

export default function About() {
  return (
    <section
      id="about"
      className="scroll-mt-24 bg-white py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* =========================
            TOP HEADING
        ========================== */}

        <div className="mx-auto max-w-3xl text-center">

          <span className="inline-flex items-center rounded-full bg-orange-50 px-4 py-2 text-sm font-bold text-orange-600">
            About Real Bird Netting
          </span>

          <h2 className="mt-5 text-3xl font-black tracking-tight text-[#0B2545] sm:text-4xl lg:text-5xl">
            Professional Bird Protection
            <span className="block text-orange-500">
              & Safety Solutions
            </span>
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg">
            Real Bird Netting provides professional bird protection,
            balcony safety and home improvement solutions in Gurugram.
            Our services are designed to protect balconies, windows,
            open areas and buildings while maintaining a clean and
            practical appearance.
          </p>

        </div>

        {/* =========================
            MAIN CONTENT
        ========================== */}

        <div className="mt-14 grid items-center gap-10 lg:grid-cols-2 lg:gap-16">

          {/* IMAGE */}

          <div className="relative overflow-hidden rounded-3xl bg-slate-100 shadow-xl">

            <div className="relative aspect-[4/3] w-full">

              <Image
                src="/images/about.jpg"
                alt="Real Bird Netting installation"
                fill
                className="object-cover"
              />

            </div>

            {/* Experience Card */}

            <div className="absolute bottom-5 left-5 rounded-2xl bg-white/95 px-5 py-4 shadow-xl backdrop-blur-sm">
              <p className="text-2xl font-black text-[#0B2545]">
                1000+
              </p>

              <p className="text-sm font-semibold text-slate-600">
                Happy Clients
              </p>
            </div>

          </div>

          {/* CONTENT */}

          <div>

            <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-500">
              Why Real Bird Netting
            </p>

            <h3 className="mt-3 text-3xl font-black text-[#0B2545] sm:text-4xl">
              Reliable protection for your
              <span className="text-orange-500">
                {" "}home & property
              </span>
            </h3>

            <p className="mt-5 leading-7 text-slate-600">
              We focus on practical, durable and professional
              installation solutions for residential and commercial
              properties. From balcony safety nets to invisible
              grills and bird protection, our goal is to provide
              solutions that fit your property and requirements.
            </p>

            <div className="mt-7 space-y-4">

              <div className="flex gap-3">
                <CheckCircle2 className="mt-0.5 h-6 w-6 shrink-0 text-emerald-500" />

                <div>
                  <h4 className="font-bold text-[#0B2545]">
                    Professional Installation
                  </h4>

                  <p className="mt-1 text-sm leading-6 text-slate-500">
                    Proper installation with attention to safety
                    and finishing.
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <CheckCircle2 className="mt-0.5 h-6 w-6 shrink-0 text-emerald-500" />

                <div>
                  <h4 className="font-bold text-[#0B2545]">
                    Quality Materials
                  </h4>

                  <p className="mt-1 text-sm leading-6 text-slate-500">
                    Solutions designed for regular outdoor and
                    balcony use.
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <CheckCircle2 className="mt-0.5 h-6 w-6 shrink-0 text-emerald-500" />

                <div>
                  <h4 className="font-bold text-[#0B2545]">
                    Free Site Inspection
                  </h4>

                  <p className="mt-1 text-sm leading-6 text-slate-500">
                    Discuss your requirements and get a suitable
                    solution for your property.
                  </p>
                </div>
              </div>

            </div>

          </div>
        </div>

        {/* =========================
            FEATURES
        ========================== */}

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

          <div className="rounded-2xl border border-slate-100 bg-slate-50 p-6">
            <ShieldCheck className="h-8 w-8 text-emerald-500" />

            <h4 className="mt-4 font-bold text-[#0B2545]">
              Safety First
            </h4>

            <p className="mt-2 text-sm leading-6 text-slate-500">
              Safety-focused solutions for balconies and open
              areas.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-100 bg-slate-50 p-6">
            <Award className="h-8 w-8 text-orange-500" />

            <h4 className="mt-4 font-bold text-[#0B2545]">
              Quality Work
            </h4>

            <p className="mt-2 text-sm leading-6 text-slate-500">
              Professional finishing and installation.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-100 bg-slate-50 p-6">
            <Users className="h-8 w-8 text-emerald-500" />

            <h4 className="mt-4 font-bold text-[#0B2545]">
              1000+ Clients
            </h4>

            <p className="mt-2 text-sm leading-6 text-slate-500">
              Serving residential and commercial customers.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-100 bg-slate-50 p-6">
            <Clock3 className="h-8 w-8 text-orange-500" />

            <h4 className="mt-4 font-bold text-[#0B2545]">
              Same Day Service
            </h4>

            <p className="mt-2 text-sm leading-6 text-slate-500">
              Quick inspection and installation options.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}