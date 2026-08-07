"use client";

import { Phone, Mail, MapPin, Clock } from "lucide-react";
import Logo from "./Logo";

export default function Footer() {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Bio */}
          <div>
            <div className="flex items-center mb-4">
              <Logo height={56} theme="dark" />
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              {"Real Bird Netting is Gurugram's trusted bird netting and safety solution provider, offering premium bird nets, invisible grills, balcony safety nets, and professional installation with high-quality, UV-resistant materials."}
            </p>
            <div className="flex space-x-3">
              <a
                href="tel:+919354254539"
                className="flex items-center justify-center w-12 h-12 rounded-full bg-slate-800 hover:bg-primary-light text-white transition-colors duration-200"
                aria-label="Call Us"
              >
                <Phone className="w-5 h-5 fill-white" />
              </a>
              <a
                 href="https://wa.me/919354254539?text=Hi%20Real%20Bird%20Netting%2C%20I%20am%20looking%20for%20Bird%20Netting%2C%20Invisible%20Grills%2C%20or%20Balcony%20Safety%20Net%20services%20in%20Gurugram.%20Please%20share%20more%20information%20and%20arrange%20a%20free%20site%20inspection.%20Thank%20you."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 rounded-full bg-slate-800 hover:bg-accent hover:text-slate-900 text-white transition-colors duration-200"
                aria-label="WhatsApp Us"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.248 8.477 3.517 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.625 1.451 5.403.002 9.803-4.381 9.805-9.786.002-2.618-1.01-5.074-2.854-6.921C16.38 2.052 13.933.996 11.999.996 6.596.996 2.197 5.379 2.195 10.785c-.001 1.512.409 2.99 1.182 4.298l-.994 3.63 3.731-.973-1.066.614zm11.332-6.52c-.274-.136-1.62-.8-1.87-.892-.252-.09-.435-.136-.617.137-.183.272-.708.892-.868 1.074-.16.183-.32.204-.593.068-1.579-.79-2.73-1.37-3.818-3.23-.288-.492.288-.456.822-1.52.091-.183.046-.343-.023-.48-.068-.136-.617-1.484-.846-2.033-.223-.536-.469-.463-.617-.47l-.527-.008c-.183 0-.48.069-.731.343-.252.274-.96.937-.96 2.285 0 1.348.982 2.651 1.119 2.833.137.183 1.933 2.951 4.682 4.141.654.282 1.165.451 1.564.578.658.209 1.258.18 1.732.109.528-.079 1.62-.663 1.85-1.302.23-.639.23-1.187.16-1.302-.07-.116-.275-.183-.55-.32z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-white text-base mb-4 font-display">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#home"
                  onClick={(e) => handleNavClick(e, "#home")}
                  className="hover:text-primary-light hover:underline transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  onClick={(e) => handleNavClick(e, "#services")}
                  className="hover:text-primary-light hover:underline transition-colors"
                >
                  Safety Nets
                </a>
              </li>
              <li>
                <a
                  href="#invisible-grills"
                  onClick={(e) => handleNavClick(e, "#invisible-grills")}
                  className="hover:text-primary-light hover:underline transition-colors"
                >
                  Invisible Grills
                </a>
              </li>
              <li>
                <a
                  href="#cloth-hangers"
                  onClick={(e) => handleNavClick(e, "#cloth-hangers")}
                  className="hover:text-primary-light hover:underline transition-colors"
                >
                  Cloth Hangers
                </a>
              </li>
              <li>
                <a
                  href="#why-choose-us"
                  onClick={(e) => handleNavClick(e, "#why-choose-us")}
                  className="hover:text-primary-light hover:underline transition-colors"
                >
                  Why Choose Us
                </a>
              </li>
              <li>
                <a
                  href="#gallery"
                  onClick={(e) => handleNavClick(e, "#gallery")}
                  className="hover:text-primary-light hover:underline transition-colors"
                >
                  Gallery
                </a>
              </li>
              <li>
                <a
                  href="#reviews"
                  onClick={(e) => handleNavClick(e, "#reviews")}
                  className="hover:text-primary-light hover:underline transition-colors"
                >
                  Reviews
                </a>
              </li>
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h3 className="font-bold text-white text-base mb-4 font-display">Services</h3>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>Balcony Safety Nets</li>
              <li>Pigeon Safety Nets</li>
              <li>Monkey Safety Nets</li>
              <li>Children Safety Nets</li>
              <li>Cricket Practice Nets</li>
              <li>Invisible Grills (Windows & Balcony)</li>
              <li>Ceiling Pulley Cloth Hangers</li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="font-bold text-white text-base mb-4 font-display">Contact Info</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-2">
                <MapPin className="w-5 h-5 text-primary-light shrink-0 mt-0.5" />
                <span> Shop No. 165F, Gali No. 7, Hans Enclave, Sector-33, Near Rajiv Chowk, Gurugram, Haryana - 122001</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-primary-light shrink-0" />
                <a href="tel:+919354254539" className="hover:text-white transition-colors font-semibold">
                  +91  9354254539
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-primary-light shrink-0" />
                <a href="mailto:sachins006simra@gmail.com" className="hover:text-white transition-colors">
                  sachins006simra@gmail.com
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Clock className="w-4 h-4 text-primary-light shrink-0" />
                <span>Open 24 Hours / 7 Days</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="border-t border-slate-800 pt-8 mt-8 flex flex-col md:flex-row items-center justify-between text-xs text-slate-400">
          <p>© {new Date().getFullYear()} Real bird netting services. All Rights Reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-slate-350 hover:underline">Privacy Policy</a>
            <a href="#" className="hover:text-slate-350 hover:underline">Terms & Conditions</a>
            <a href="#faq" onClick={(e) => handleNavClick(e, "#faq")} className="hover:text-slate-350 hover:underline">FAQ</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
