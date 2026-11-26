import type { Metadata } from "next";
import ContactCtaBand from "../components/contact-cta-band";
import ContactDetailsMap from "../components/contact-details-map";
import ContactFaq from "../components/contact-faq";
import ContactHero from "../components/contact-hero";
import ContactProcessSteps from "../components/contact-process-steps";
import ContactWhyCards from "../components/contact-why-cards";

export const metadata: Metadata = {
  title: "Contact Pikachu by Pikachu — Certified Experts",
  description:
    "Explore contact pikachu with Pikachu. Providing trusted pikachu life achievements, certified solutions, and prompt turnaround. Call our team now.",
};

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactWhyCards />
      <ContactDetailsMap />
      <ContactProcessSteps />
      <ContactFaq />
      <ContactCtaBand />
    </>
  );
}
