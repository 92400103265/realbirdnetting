 "use client";

import { useState } from "react";
import type { FormEvent } from "react";
import {
  Phone,
  MessageCircle,
  MapPin,
  Mail,
  Clock,
  CheckCircle,
} from "lucide-react";

/* =========================================================
   GOOGLE ADS TYPES
   ========================================================= */

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    dataLayer?: any[];
  }
}

/* =========================================================
   GOOGLE ADS CONTACT CONVERSION
   ========================================================= */

const GOOGLE_ADS_CONVERSION_ID = "18388085912";
const GOOGLE_ADS_CONVERSION_LABEL = "RunLCKu9oulcEjZj8BE";

const trackContactConversion = () => {
  if (
    typeof window !== "undefined" &&
    typeof window.gtag === "function"
  ) {
    window.gtag("event", "conversion", {
      send_to: `AW-${GOOGLE_ADS_CONVERSION_ID}/${GOOGLE_ADS_CONVERSION_LABEL}`,
      value: 1.0,
      currency: "INR",
    });

    console.log("Google Ads contact conversion sent.");
  } else {
    console.warn(
      "Google Ads gtag was not found. Check your layout.tsx Google tag."
    );
  }
};

/* =========================================================
   CONTACT COMPONENT
   ========================================================= */

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("Balcony Safety Nets");
  const [message, setMessage] = useState("");

  /* =========================================================
     SERVICES
     ========================================================= */

  const servicesList = [
    "Balcony Safety Nets",
    "Pigeon Safety Nets",
    "Bird Protection Nets",
    "Monkey Safety Nets",
    "Children Safety Nets",
    "Sports Safety Nets / Cricket Nets",
    "Invisible Grills (Balcony/Window)",
    "Ceiling Cloth Hangers",
    "Pet Safety Nets",
    "Duct Area Safety Nets",
    "Anti-Bird Spikes",
    "All Types of Safety Nets",
  ];

  /* =========================================================
     FORM SUBMIT
     ========================================================= */

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    /* -------------------------------------------------------
       1. VALIDATION
       ------------------------------------------------------- */

    const cleanName = name.trim();
    const cleanPhone = phone.trim();
    const cleanMessage = message.trim();

    if (!cleanName || !cleanPhone) {
      alert("Name and Phone number are required.");
      return;
    }

    /* -------------------------------------------------------
       2. CREATE WHATSAPP MESSAGE
       ------------------------------------------------------- */

    const whatsappMessage = `
Hello Real Bird Netting,

I have a new enquiry from your website.

Name: ${cleanName}
Phone: ${cleanPhone}
Service: ${service}
Message: ${cleanMessage || "No message provided"}

Please contact me regarding my enquiry.

Website:
https://www.realbirdnetting.in/
    `.trim();

    /* -------------------------------------------------------
       3. CREATE WHATSAPP URL
       ------------------------------------------------------- */

    const encodedMessage =
      encodeURIComponent(whatsappMessage);

    const whatsappUrl =
      `https://wa.me/919354254539?text=${encodedMessage}`;

    /* -------------------------------------------------------
       4. GOOGLE ADS CONVERSION
       ------------------------------------------------------- */

    trackContactConversion();

    /* -------------------------------------------------------
       5. OPEN WHATSAPP
       
       We open WhatsApp after firing the conversion,
       while keeping the current website page open.
       This gives Google Ads time to send the event.
       ------------------------------------------------------- */

    window.open(
      whatsappUrl,
      "_blank",
      "noopener,noreferrer"
    );

    /* -------------------------------------------------------
       6. SHOW SUCCESS MESSAGE
       ------------------------------------------------------- */

    setIsSubmitted(true);

    /* -------------------------------------------------------
       7. CLEAR FORM
       ------------------------------------------------------- */

    setName("");
    setPhone("");
    setService("Balcony Safety Nets");
    setMessage("");

    /* -------------------------------------------------------
       8. RESET SUCCESS MESSAGE
       ------------------------------------------------------- */

    setTimeout(() => {
      setIsSubmitted(false);
    }, 4000);
  };

  /* =========================================================
     DIRECT WHATSAPP BUTTON
     ========================================================= */

  const directWhatsappMessage = encodeURIComponent(
    "Hi Real Bird Netting, I want to get in touch with you regarding bird netting and safety solutions. Please contact me."
  );

  const whatsappUrl =
    `https://wa.me/919354254539?text=${directWhatsappMessage}`;

  /* =========================================================
     JSX
     ========================================================= */

  return (
    <section
      id="contact"
      className="py-20 bg-white relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* =====================================================
            HEADING
        ===================================================== */}

        <div className="text-center max-w-3xl mx-auto mb-16">

          <span className="text-xs font-bold uppercase tracking-widest text-primary-light">
            Contact Us
          </span>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2 font-display">
            Request a Free Inspection Today
          </h2>

          <p className="text-slate-600 mt-3 text-sm sm:text-base">
            Get in touch with us via phone, WhatsApp, or the
            enquiry form. We serve all areas in Gurugram.
          </p>

          <div className="h-1 bg-accent w-16 mx-auto mt-4 rounded" />

        </div>

        {/* =====================================================
            DIRECT BOOKING
        ===================================================== */}

        <div className="bg-primary text-white rounded-3xl p-8 sm:p-12 shadow-xl mb-16 relative overflow-hidden border border-slate-800 text-center md:text-left">

          <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">

            <div className="md:col-span-8 space-y-4">

              <span className="bg-accent text-white text-[10px] sm:text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                Direct Booking Hotline
              </span>

              <h3 className="text-2xl sm:text-4xl font-extrabold font-display leading-tight">
                Get Flat 10% Off on Balcony Nets & Invisible Grills
              </h3>

              <p className="text-slate-300 text-sm sm:text-base font-light">
                Call now or text us on WhatsApp to lock in the
                promotional discount and get a same-day free
                site visit.
              </p>

            </div>

            <div className="md:col-span-4 flex flex-col sm:flex-row md:flex-col gap-3 justify-center">

              {/* CALL BUTTON */}

              <a
                href="tel:+919354254539"
                className="flex items-center justify-center space-x-2 bg-white text-primary hover:bg-slate-100 py-4 px-6 rounded-xl font-extrabold text-base shadow-md transition-all"
              >
                <Phone className="w-5 h-5 fill-primary" />
                <span>Call +91 93542 54539</span>
              </a>

              {/* WHATSAPP BUTTON */}

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-2 bg-accent hover:bg-accent-dark text-slate-900 py-4 px-6 rounded-xl font-extrabold text-base shadow-md transition-all"
              >
                <MessageCircle className="w-5 h-5 fill-slate-900" />
                <span>WhatsApp Quote</span>
              </a>

            </div>

          </div>

        </div>

        {/* =====================================================
            CONTACT GRID
        ===================================================== */}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

          {/* ===================================================
              LEFT SIDE
          =================================================== */}

          <div className="lg:col-span-6 space-y-8">

            <div className="space-y-6">

              <h3 className="text-2xl font-bold text-slate-800 font-display">
                Real Bird Netting, Near Rajiv Chowk, Gurugram
              </h3>

              <div className="space-y-4">

                {/* ADDRESS */}

                <div className="flex items-start space-x-3 text-slate-600 text-sm sm:text-base">

                  <MapPin className="w-5 h-5 text-primary shrink-0 mt-1" />

                  <div>

                    <span className="font-bold text-slate-800 block">
                      Our Address
                    </span>

                    <span>
                      Shop No.165F, Gali No.-7, Hans Enclave,
                      Sector-33, Near Rajiv Chowk,
                      Gurugram-122001
                    </span>

                  </div>

                </div>

                {/* BUSINESS HOURS */}

                <div className="flex items-start space-x-3 text-slate-600 text-sm sm:text-base">

                  <Clock className="w-5 h-5 text-primary shrink-0 mt-1" />

                  <div>

                    <span className="font-bold text-slate-800 block">
                      Business Hours
                    </span>

                    <span>
                      Open 24 Hours / 7 Days a week
                    </span>

                  </div>

                </div>

                {/* EMAIL */}

                <div className="flex items-start space-x-3 text-slate-600 text-sm sm:text-base">

                  <Mail className="w-5 h-5 text-primary shrink-0 mt-1" />

                  <div>

                    <span className="font-bold text-slate-800 block">
                      Email Address
                    </span>

                    <a
                      href="mailto:sachin2006simra@gmail.com"
                      className="hover:text-primary transition-colors"
                    >
                      sachin2006simra@gmail.com
                    </a>

                  </div>

                </div>

              </div>

            </div>

            {/* =================================================
                GOOGLE MAP
            ================================================= */}

            <div className="relative w-full h-[280px] bg-slate-100 rounded-2xl overflow-hidden shadow-sm border border-slate-200">

              <iframe
                title="Real Bird Netting Location Map"
                src="https://www.google.com/maps?q=Shop+No.+165F,+Gali+No.+7,+Hans+Enclave,+Sector-33,+Gurugram,+Haryana+122001&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />

            </div>

          </div>

          {/* ===================================================
              RIGHT SIDE - CONTACT FORM
          =================================================== */}

          <div className="lg:col-span-6">

            <div className="bg-slate-50 border border-slate-150 rounded-2xl p-6 sm:p-8 shadow-sm">

              {!isSubmitted ? (

                <form
                  onSubmit={handleSubmit}
                  className="space-y-4"
                >

                  {/* FORM TITLE */}

                  <div>

                    <h3 className="text-xl font-bold text-slate-800 font-display">
                      Send a Quick Message
                    </h3>

                    <p className="text-slate-600 text-xs mt-1">
                      Fill in your details and WhatsApp will open
                      with your enquiry automatically prepared.
                    </p>

                  </div>

                  {/* NAME */}

                  <div>

                    <label
                      htmlFor="contact-name"
                      className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-1"
                    >
                      Your Name *
                    </label>

                    <input
                      id="contact-name"
                      type="text"
                      required
                      placeholder="Enter your name"
                      value={name}
                      onChange={(e) =>
                        setName(e.target.value)
                      }
                      className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                    />

                  </div>

                  {/* PHONE + SERVICE */}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                    {/* PHONE */}

                    <div>

                      <label
                        htmlFor="contact-phone"
                        className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-1"
                      >
                        Phone Number *
                      </label>

                      <input
                        id="contact-phone"
                        type="tel"
                        required
                        placeholder="Enter phone number"
                        value={phone}
                        onChange={(e) =>
                          setPhone(e.target.value)
                        }
                        className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                      />

                    </div>

                    {/* SERVICE */}

                    <div>

                      <label
                        htmlFor="contact-service"
                        className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-1"
                      >
                        Service Needed
                      </label>

                      <select
                        id="contact-service"
                        value={service}
                        onChange={(e) =>
                          setService(e.target.value)
                        }
                        className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                      >
                        {servicesList.map((srv) => (
                          <option
                            key={srv}
                            value={srv}
                          >
                            {srv}
                          </option>
                        ))}
                      </select>

                    </div>

                  </div>

                  {/* MESSAGE */}

                  <div>

                    <label
                      htmlFor="contact-message"
                      className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-1"
                    >
                      Your Message (Optional)
                    </label>

                    <textarea
                      id="contact-message"
                      rows={4}
                      placeholder="Enter detail requirements"
                      value={message}
                      onChange={(e) =>
                        setMessage(e.target.value)
                      }
                      className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-none"
                    />

                  </div>

                  {/* SUBMIT */}

                  <button
                    type="submit"
                    className="w-full bg-accent hover:bg-accent-dark text-slate-900 py-3 rounded-lg text-sm font-bold flex items-center justify-center space-x-2 shadow-md hover:shadow-lg transition-all cursor-pointer"
                  >

                    <MessageCircle className="w-4 h-4" />

                    <span>
                      Submit & Continue to WhatsApp
                    </span>

                  </button>

                  <p className="text-center text-xs text-slate-500">
                    After submitting, WhatsApp will open with
                    your enquiry details. Tap Send to send the
                    message.
                  </p>

                </form>

              ) : (

                /* =================================================
                   SUCCESS MESSAGE
                ================================================= */

                <div className="py-16 text-center space-y-4">

                  <CheckCircle className="w-16 h-16 text-accent mx-auto animate-bounce" />

                  <h3 className="text-2xl font-bold text-slate-800 font-display">
                    WhatsApp Opened Successfully!
                  </h3>

                  <p className="text-slate-600 text-sm max-w-xs mx-auto">
                    Your enquiry has been prepared in WhatsApp.
                    Please tap Send to contact Real Bird Netting.
                  </p>

                </div>

              )}

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}