import type { Metadata } from "next";
import ContactChannels from "../components/contact-channels";
import ContactFaqCta from "../components/contact-faq-cta";
import ContactFeatures from "../components/contact-features";
import ContactHero from "../components/contact-hero";
import ContactSteps from "../components/contact-steps";

export const metadata: Metadata = {
  title: "Contact Pikachu by Pikachu — Certified Experts",
  description:
    "Explore contact pikachu with Pikachu. Providing trusted pikachu life achievements, certified solutions, and prompt turnaround. Call our team now.",
};

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactFeatures />
      <ContactChannels />
      <ContactSteps />
      <ContactFaqCta />
    </>
  );
}
