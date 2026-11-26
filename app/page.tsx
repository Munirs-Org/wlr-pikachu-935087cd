import type { Metadata } from "next";
import HomeHero from "./components/home-hero";
import HomeOfferingsGrid from "./components/home-offerings-grid";
import HomeWhyChoose from "./components/home-why-choose";
import HomeProcessHighlights from "./components/home-process-highlights";
import HomeFaq from "./components/home-faq";
import HomeCtaBand from "./components/home-cta-band";

export const metadata: Metadata = {
  title: "Pikachu | Pokemon Memorial Site",
  description:
    "This is a site dedicated to Pikachu, his life achievements and remembrance.",
};

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <HomeOfferingsGrid />
      <HomeWhyChoose />
      <HomeProcessHighlights />
      <HomeFaq />
      <HomeCtaBand />
      </>
  );
}
