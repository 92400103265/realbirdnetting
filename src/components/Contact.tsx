"use client";

import { useState } from "react";
import { Phone, MessageCircle, MapPin, Mail, Clock, Send, CheckCircle } from "lucide-react";

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("Balcony Safety Nets");
  const [message, setMessage] = useState("");

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
    "All Types of Safety Nets"
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) {
      alert("Name and Phone number are required.");
      return;
    }
    
    // Trigger Google Ads Conversion
    if (typeof window !== 'undefined' && (window as any).gtag_report_conversion) {
      (window as any).gtag_report_conversion();
    }
    
    setIsSubmitted(true);
    setName("");
    setPhone("");
    setMessage("");
    setTimeout(() => {
      setIsSubmitted(false);
    }, 4000);
  };

  const whatsappUrl = "https://wa.me/919686668224?text=Hi%20BMC%20Safety%20Nets%2C%20I%20want%20to%20get%20in%20touch%20with%20you%20for%20safety%20net%20installation.";

  return (
    <section id="contact" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-primary-light">
            Contact Us
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2 font-display">
            Request a Free Inspection Today
          </h2>
          <p className="text-slate-600 mt-3 text-sm sm:text-base">
            Get in touch with us via phone, WhatsApp, or the enquiry form. We serve all areas in Bangalore.
          </p>
          <div className="h-1 bg-accent w-16 mx-auto mt-4 rounded" />
        </div>

        {/* Big Conversion Banner at Top of Contact */}
        <div className="bg-primary text-white rounded-3xl p-8 sm:p-12 shadow-xl mb-16 relative overflow-hidden border border-slate-800 text-center md:text-left">
          <div className="absolute top-0 right-0 w-80 h-80 bg-accent/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary-light/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-8 space-y-4">
              <span className="bg-accent text-white text-[10px] sm:text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full border border-accent/20">
                Direct Booking Hotline
              </span>
              <h3 className="text-2xl sm:text-4.5xl font-extrabold font-display leading-tight">
                Get Flat 10% Off on Balcony Nets & Invisible Grills
              </h3>
              <p className="text-slate-300 text-sm sm:text-base font-light">
                Call now or text us on WhatsApp to lock in the promotional discount and get a same-day free site visit.
              </p>
            </div>
            
            <div className="md:col-span-4 flex flex-col sm:flex-row md:flex-col gap-3 justify-center">
              <a
                href="tel:+919686668224"
                className="flex items-center justify-center space-x-2 bg-white text-primary hover:bg-slate-100 py-4 px-6 rounded-xl font-extrabold text-base shadow-md transition-all active:scale-98"
              >
                <Phone className="w-5 h-5 fill-primary" />
                <span>Call +91 96866 68224</span>
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-2 bg-accent hover:bg-accent-dark text-slate-900 py-4 px-6 rounded-xl font-extrabold text-base shadow-md transition-all active:scale-98"
              >
                <MessageCircle className="w-5 h-5 fill-slate-900" />
                <span>WhatsApp Quote</span>
              </a>
            </div>
          </div>
        </div>

        {/* Contact Info and Form Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Details & Map */}
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-slate-800 font-display">
                BMC Safety Nets Head Office
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3 text-slate-600 text-sm sm:text-base">
                  <MapPin className="w-5 h-5 text-primary shrink-0 mt-1" />
                  <div>
                    <span className="font-bold text-slate-800 block">Our Address</span>
                    <span>No. 45, 2nd Main Road, Near Yeshwanthpur Metro Station, Bangalore, Karnataka - 560022</span>
                  </div>
                </div>

                <div className="flex items-start space-x-3 text-slate-600 text-sm sm:text-base">
                  <Clock className="w-5 h-5 text-primary shrink-0 mt-1" />
                  <div>
                    <span className="font-bold text-slate-800 block">Business Hours</span>
                    <span>Open 24 Hours / 7 Days a week (Sunday inclusive)</span>
                  </div>
                </div>

                <div className="flex items-start space-x-3 text-slate-600 text-sm sm:text-base">
                  <Mail className="w-5 h-5 text-primary shrink-0 mt-1" />
                  <div>
                    <span className="font-bold text-slate-800 block">Email Address</span>
                    <a href="mailto:info.bmcsafetynets@gmail.com" className="hover:text-primary transition-colors">
                      info.bmcsafetynets@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Iframe */}
            <div className="relative w-full h-[280px] bg-slate-100 rounded-2xl overflow-hidden shadow-sm border border-slate-200">
              <iframe
                title="BMC Safety Nets Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d497699.9973874144!2d77.35073573610631!3d12.95384772557775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1719598200000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Right Column: Enquiry Form */}
          <div className="lg:col-span-6">
            <div className="bg-slate-50 border border-slate-150 rounded-2xl p-6 sm:p-8 shadow-sm">
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-slate-800 font-display">Send a Quick Message</h3>
                    <p className="text-slate-600 text-xs mt-1">Our customer executive will reach out to you within minutes.</p>
                  </div>

                  <div>
                    <label htmlFor="contact-name" className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-1">
                      Your Name *
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      placeholder="Enter your name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contact-phone" className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-1">
                        Phone Number *
                      </label>
                      <input
                        id="contact-phone"
                        type="tel"
                        required
                        placeholder="Enter phone number"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                      />
                    </div>
                    <div>
                      <label htmlFor="contact-service" className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-1">
                        Service Needed
                      </label>
                      <select
                        id="contact-service"
                        value={service}
                        onChange={(e) => setService(e.target.value)}
                        className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                      >
                        {servicesList.map((srv) => (
                          <option key={srv} value={srv}>
                            {srv}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="contact-message" className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-1">
                      Your Message (Optional)
                    </label>
                    <textarea
                      id="contact-message"
                      rows={4}
                      placeholder="Enter detail requirements (e.g. Balcony height, area size, preferred installation time)"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-accent hover:bg-accent-dark text-slate-900 py-3 rounded-lg text-sm font-bold flex items-center justify-center space-x-2 shadow-md hover:shadow-lg transition-all active:scale-98 cursor-pointer"
                  >
                    <Send className="w-4 h-4 fill-slate-900" />
                    <span>Submit Request</span>
                  </button>
                </form>
              ) : (
                <div className="py-16 text-center space-y-4">
                  <CheckCircle className="w-16 h-16 text-accent mx-auto animate-bounce" />
                  <h3 className="text-2xl font-bold text-slate-800 font-display">Message Sent Successfully!</h3>
                  <p className="text-slate-600 text-sm max-w-xs mx-auto">
                    Thank you. We have received your query. Our field manager will call you immediately to arrange the visit.
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
