import type { Metadata } from "next";
import ContactHero from "../components/contact-hero";
import ContactWhyChoose from "../components/contact-why-choose";
import ContactDetailsMap from "../components/contact-details-map";
import ContactSteps from "../components/contact-steps";
import ContactFaq from "../components/contact-faq";
import ContactCtaBand from "../components/contact-cta-band";

export const metadata: Metadata = {
  title: "Contact Pikachu by Pikachu — Certified Experts",
  description:
    "Explore contact pikachu with Pikachu. Providing trusted pikachu life achievements, certified solutions, and prompt turnaround. Call our team now.",
};

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactWhyChoose />
      <ContactDetailsMap />
      <ContactSteps />
      <ContactFaq />
      <ContactCtaBand />
    </>
  );
}
