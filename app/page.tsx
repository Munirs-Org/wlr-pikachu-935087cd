import type { Metadata } from "next";
import HomeCta from "./components/home-cta";
import HomeFaq from "./components/home-faq";
import HomeFeatures from "./components/home-features";
import HomeHero from "./components/home-hero";
import HomeSteps from "./components/home-steps";
import HomeWhyChoose from "./components/home-why-choose";

export const metadata: Metadata = {
  title: "Pikachu: Pokemon Memorial Site (Certified Experts)",
  description:
    "Explore pokemon memorial site with Pikachu. Providing trusted pikachu life achievements, certified solutions, and prompt turnaround. Call us now.",
  keywords: ["pokemon memorial site", "Pikachu memorial"],
};

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <HomeFeatures />
      <HomeWhyChoose />
      <HomeSteps />
      <HomeFaq />
      <HomeCta />
    </>
  );
}
