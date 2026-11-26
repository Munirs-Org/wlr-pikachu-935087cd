import type { Metadata } from "next";
import ContactCta from "../components/contact-cta";
import ContactDetails from "../components/contact-details";
import ContactFaq from "../components/contact-faq";
import ContactFeatures from "../components/contact-features";
import ContactHero from "../components/contact-hero";
import ContactSteps from "../components/contact-steps";

export const metadata: Metadata = {
  title: "Contact Pikachu by Pikachu — Certified Experts",
  description:
    "Explore contact pikachu with Pikachu. Providing trusted pikachu life achievements, certified solutions, and prompt turnaround. Call our team now.",
  keywords: ["contact pikachu"],
  openGraph: {
    title: "Contact Pikachu by Pikachu — Certified Experts",
    description:
      "Explore contact pikachu with Pikachu. Providing trusted pikachu life achievements, certified solutions, and prompt turnaround. Call our team now.",
  },
};

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactFeatures />
      <ContactDetails />
      <ContactSteps />
      <ContactFaq />
      <ContactCta />
    </>
  );
}
