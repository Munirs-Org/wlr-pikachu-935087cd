import type { Metadata } from "next";
import HomeCtaBand from "./components/home-cta-band";
import HomeFaq from "./components/home-faq";
import HomeHero from "./components/home-hero";
import HomeOfferingsGrid from "./components/home-offerings-grid";
import HomeProcessHighlights from "./components/home-process-highlights";
import HomeWhyChoose from "./components/home-why-choose";
import { GeneratedImage_a53_home__other_1 } from "../components/generated-assets";

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
      <div className="mx-auto w-full max-w-5xl px-6 pb-12">
        <GeneratedImage_a53_home__other_1 />
      </div>
      <HomeProcessHighlights />
      <HomeFaq />
      <HomeCtaBand />
    </>
  );
}
