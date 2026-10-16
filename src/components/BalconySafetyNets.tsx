
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./BalconySafetyNets.module.css";

const images = [
  {
    src: "/images/balcony.webp",
    alt: "Balcony safety net installed in a residential apartment",
  },
  {
    src: "/images/balconygrill.webp",
    alt: "Balcony protection installation example",
  },
  {
    src: "/images/birdsafety.webp",
    alt: "Safety net installation example",
  },
  {
    src: "/images/bird-nets.png",
    alt: "Bird netting installation example",
  },
  {
    src: "/images/balcony-net-05.webp",
    alt: "Balcony net installation from the exterior",
  },
  {
    src: "/images/balcony-net-06.webp",
    alt: "Close-up of installed balcony netting",
  },
  {
    src: "/images/balcony-net-07.webp",
    alt: "Safety net fitted to an apartment balcony",
  },
  {
    src: "/images/balcony-net-08.webp",
    alt: "Balcony net fixing and finishing",
  },
  {
    src: "/images/balcony-net-09.webp",
    alt: "Large residential balcony net installation",
  },
  {
    src: "/images/balcony-net-10.webp",
    alt: "Completed balcony safety net installation",
  },
];

const services = [
  {
    number: "01",
    title: "Child Safety Nets",
    description:
      "A physical barrier for open balconies and windows. The appropriate net and fixing method depend on the site.",
    icon: "◈",
  },
  {
    number: "02",
    title: "Pet Safety Nets",
    description:
      "Help reduce the risk of pets accessing open balcony edges with a suitably selected and installed net.",
    icon: "♡",
  },
  {
    number: "03",
    title: "Pigeon & Bird Nets",
    description:
      "Help prevent pigeons and other birds from entering balconies and creating nesting or cleaning problems.",
    icon: "⌁",
  },
  {
    number: "04",
    title: "Window Safety Nets",
    description:
      "Custom-fit netting options for selected windows, service openings and other suitable spaces.",
    icon: "▦",
  },
];

const benefits = [
  {
    title: "Made to Measure",
    text: "Measurements and installation details are selected for your balcony.",
  },
  {
    title: "Neat Installation",
    text: "The team assesses the fixing points and access before installation.",
  },
  {
    title: "Multiple Net Options",
    text: "Choose a suitable net based on the opening, purpose and site conditions.",
  },
  {
    title: "Local Service",
    text: "Contact our Gurugram team to discuss your property and arrange an inspection.",
  },
];

const faqs = [
  {
    question: "What is the cost of balcony safety nets in Gurugram?",
    answer:
      "The cost depends on the balcony dimensions, net material, fixing method, access and installation requirements. Share your approximate measurements and photos to request a quotation.",
  },
  {
    question: "Can you install safety nets in apartments?",
    answer:
      "Yes. We can assess suitable installations for apartments, flats and residential balconies in Gurugram. The final fixing method depends on the building and site conditions.",
  },
  {
    question: "Are balcony safety nets suitable for pets?",
    answer:
      "A suitable net may help restrict access to open edges. Tell us your pet's size and behaviour so the team can discuss the appropriate mesh, strength and fixing arrangement.",
  },
  {
    question: "How do I request a free inspection?",
    answer:
      "Contact the team by phone or WhatsApp with your location, balcony dimensions and clear photos. We will confirm inspection availability and quotation details.",
  },
  {
    question: "Can you install pigeon nets as well?",
    answer:
      "Yes. Ask about balcony bird and pigeon netting. The recommended net and layout depend on the opening, the bird problem and the installation surface.",
  },
  {
    question: "How long does installation take?",
    answer:
      "Timing depends on the size of the balcony, access, fixing points and job complexity. We can provide an estimated schedule after reviewing your requirements.",
  },
];

const whatsappNumber = "919354254539";

function WhatsAppLink({ message }: { message: string }) {
  const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <a
      className={styles.button}
      href={url}
      target="_blank"
      rel="noopener noreferrer"
    >
      Get a Free Quote <span aria-hidden="true">↗</span>
    </a>
  );
}

export default function BalconySafetyNets() {
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  return (
    <main className={styles.page}>
      <nav className={styles.breadcrumb} aria-label="Breadcrumb">
        <Link href="/">Home</Link>
        <span aria-hidden="true">/</span>
        <Link href="/#services">Services</Link>
        <span aria-hidden="true">/</span>
        <span aria-current="page">Balcony Safety Nets</span>
      </nav>

      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <p className={styles.eyebrow}>
            REAL BIRD NETTING · GURUGRAM
          </p>

          <h1>
            Balcony Safety Nets in{" "}
            <span>Gurugram</span>
          </h1>

          <p className={styles.heroText}>
            Custom-fit balcony nets for homes and apartments.
            Explore options for children, pets and bird protection
            with professional installation tailored to your space.
          </p>

          <div className={styles.heroActions}>
            <WhatsAppLink message="Hello Real Bird Netting, I need a balcony safety net quotation in Gurugram." />
            <a className={styles.secondaryButton} href="#gallery">
              View Installation Gallery
            </a>
          </div>

          <div className={styles.trustRow}>
            <span>✓ Site assessment</span>
            <span>✓ Custom measurements</span>
            <span>✓ Installation quotation</span>
          </div>
        </div>

        <div className={styles.heroImage}>
          <Image
            src="/images/balcony.webp"
            alt="Balcony net installation at a residential property"
            fill
            priority
            sizes="(max-width: 800px) 100vw, 50vw"
            className={styles.coverImage}
          />
          <div className={styles.imageLabel}>
            <span className={styles.labelDot} />
            Balcony protection solutions
          </div>
        </div>
      </section>

      <section className={styles.intro} id="about-service">
        <div>
          <p className={styles.eyebrow}>A BETTER-FITTING SOLUTION</p>
          <h2>
            Practical Balcony Protection for Everyday Living
          </h2>
        </div>
        <p>
          Open balconies need a solution suited to the people, pets
          and surroundings of each home. Real Bird Netting helps
          customers in Gurugram explore suitable netting options,
          review installation requirements and request a clear quote.
          Every installation should be assessed for its intended use,
          fixing points and site conditions.
        </p>
      </section>

      <section className={styles.services} id="services">
        <div className={styles.sectionHeading}>
          <p className={styles.eyebrow}>OUR SERVICES</p>
          <h2>Balcony Netting Options</h2>
          <p>
            Discuss your needs with our team to identify an appropriate
            installation for your property.
          </p>
        </div>

        <div className={styles.serviceGrid}>
          {services.map((service) => (
            <article className={styles.serviceCard} key={service.number}>
              <div className={styles.serviceTop}>
                <span className={styles.serviceIcon} aria-hidden="true">
                  {service.icon}
                </span>
                <span className={styles.serviceNumber}>
                  {service.number}
                </span>
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <a href="#contact" className={styles.textLink}>
                Request details <span aria-hidden="true">→</span>
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.benefits}>
        <div className={styles.sectionHeading}>
          <p className={styles.eyebrow}>WHY CHOOSE US</p>
          <h2>Installation Planned Around Your Balcony</h2>
        </div>

        <div className={styles.benefitGrid}>
          {benefits.map((benefit, index) => (
            <article className={styles.benefit} key={benefit.title}>
              <span className={styles.benefitNumber}>
                0{index + 1}
              </span>
              <h3>{benefit.title}</h3>
              <p>{benefit.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.gallery} id="gallery">
        <div className={styles.sectionHeading}>
          <p className={styles.eyebrow}>OUR WORK</p>
          <h2>Balcony Safety Net Gallery</h2>
          <p>
            View examples of balcony and netting installations.
            Replace sample images with genuine photos of your work
            to show prospective customers the actual finish.
          </p>
        </div>

        <div className={styles.galleryGrid}>
          {images.map((image, index) => (
            <figure className={styles.galleryItem} key={image.src}>
              <div className={styles.galleryImage}>
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  loading="lazy"
                  sizes="(max-width: 600px) 50vw, (max-width: 1000px) 33vw, 25vw"
                  className={styles.coverImage}
                />
                <span className={styles.galleryNumber}>
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
              <figcaption>{image.alt}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className={styles.process} id="process">
        <div className={styles.sectionHeading}>
          <p className={styles.eyebrow}>HOW IT WORKS</p>
          <h2>From Enquiry to Installation</h2>
        </div>

        <div className={styles.processGrid}>
          {[
            ["01", "Contact Us", "Tell us your location and netting requirements."],
            ["02", "Share Photos", "Send clear balcony photos and approximate dimensions."],
            ["03", "Site Assessment", "Confirm the inspection, measurements and fixing requirements."],
            ["04", "Quotation & Work", "Review the quote and agree on the installation schedule."],
          ].map(([number, title, description]) => (
            <article className={styles.processStep} key={number}>
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.localSection}>
        <div>
          <p className={styles.eyebrow}>LOCAL INSTALLATION SERVICE</p>
          <h2>Balcony Safety Nets Across Gurugram</h2>
          <p>
            Contact us about balcony net installation in your
            neighbourhood. Share your sector or locality so we can
            confirm service availability and inspection arrangements.
          </p>
        </div>
        <WhatsAppLink message="Hello, I need balcony safety net installation in Gurugram. Please let me know the inspection and quotation process." />
      </section>

      <section className={styles.faq} id="faq">
        <div className={styles.sectionHeading}>
          <p className={styles.eyebrow}>HELPFUL INFORMATION</p>
          <h2>Frequently Asked Questions</h2>
        </div>

        <div className={styles.faqList}>
          {faqs.map((faq, index) => {
            const isOpen = activeFaq === index;
            const answerId = `balcony-faq-answer-${index}`;

            return (
              <article className={styles.faqItem} key={faq.question}>
                <h3 className={styles.faqQuestionHeading}>
                  <button
                    className={styles.faqQuestion}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={answerId}
                    onClick={() =>
                      setActiveFaq(isOpen ? null : index)
                    }
                  >
                    <span>{faq.question}</span>
                    <span aria-hidden="true">
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>
                </h3>

                {isOpen && (
                  <div className={styles.faqAnswer} id={answerId}>
                    <p>{faq.answer}</p>
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </section>

      <section className={styles.contact} id="contact">
        <div className={styles.contactText}>
          <p className={styles.eyebrow}>LET'S DISCUSS YOUR PROJECT</p>
          <h2>Need a Balcony Safety Net?</h2>
          <p>
            Share your location, approximate dimensions and photos
            to discuss the right solution and request a quotation.
          </p>
        </div>

        <div className={styles.contactActions}>
          <WhatsAppLink message="Hello Real Bird Netting, I would like a balcony safety net quote. I can share my location, dimensions and balcony photos." />
          <a className={styles.callButton} href="tel:+919354254539">
            Call +91 93542 54539
          </a>
        </div>
      </section>

      <section className={styles.related} aria-labelledby="related-heading">
        <h2 id="related-heading">Explore More Services</h2>
        <div className={styles.relatedLinks}>
          <Link href="/#services">Bird Net Installation</Link>
          <Link href="/#services">Invisible Grills</Link>
          <Link href="/#services">Cloth Hangers</Link>
          <Link href="/#contact">Contact Us</Link>
        </div>
      </section>
    </main>
  );
}
