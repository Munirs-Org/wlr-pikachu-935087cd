import type { Metadata } from "next";

import AboutCoverage from "../components/about-coverage";
import AboutCta from "../components/about-cta";
import AboutHero from "../components/about-hero";
import AboutPrinciples from "../components/about-principles";
import AboutStory from "../components/about-story";

export const metadata: Metadata = {
  title: "About Pikachu | Pikachu Official Guide Overview Online",
  description:
    "Discover about pikachu by Pikachu. this is a site dedicated to Pikachu his life achievements and remembrance. Connect with our team online today.",
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <AboutStory />
      <AboutPrinciples />
      <AboutCoverage />
      <AboutCta />
    </>
  );
}
