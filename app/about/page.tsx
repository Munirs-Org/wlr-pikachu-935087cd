import type { Metadata } from "next";

import AboutCoverage from "../components/about-coverage";
import AboutCtaBand from "../components/about-cta-band";
import AboutHero from "../components/about-hero";
import AboutPrinciples from "../components/about-principles";
import AboutStoryBand from "../components/about-story-band";

export const metadata: Metadata = {
  title: "About Pikachu | Pikachu Official Guide Overview Online",
  description:
    "Discover about pikachu by Pikachu. this is a site dedicated to Pikachu his life achievements and remembrance. Connect with our team online today.",
  keywords: "about pikachu",
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <AboutStoryBand />
      <AboutPrinciples />
      <AboutCoverage />
      <AboutCtaBand />
    </>
  );
}
