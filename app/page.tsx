import type { Metadata } from "next";

import HomeCtaBand from "./components/home-cta-band";
import HomeFaq from "./components/home-faq";
import HomeHero from "./components/home-hero";
import HomeOfferingsGrid from "./components/home-offerings-grid";
import HomeProcessSteps from "./components/home-process-steps";
import HomeWhyChoose from "./components/home-why-choose";

export const metadata: Metadata = {
  title: "Pikachu: Pokemon Memorial Site (Certified Experts)",
  description:
    "Explore pokemon memorial site with Pikachu. Providing trusted pikachu life achievements, certified solutions, and prompt turnaround. Call us now.",
};

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <HomeOfferingsGrid />
      <HomeWhyChoose />
      <HomeProcessSteps />
      <HomeFaq />
      <HomeCtaBand />
    </>
  );
}
