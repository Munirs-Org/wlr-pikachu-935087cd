import type { Metadata } from "next";
import HomeHero from "./components/home-hero";
import HomeFeatures from "./components/home-features";
import HomeWhyChoose from "./components/home-why-choose";
import HomeSteps from "./components/home-steps";
import HomeFaq from "./components/home-faq";
import HomeCta from "./components/home-cta";

export const metadata: Metadata = {
  title: "Pikachu: Pokemon Memorial Site (Certified Experts)",
  description:
    "Explore pokemon memorial site with Pikachu. Providing trusted pikachu life achievements, certified solutions, and prompt turnaround. Call us now.",
  keywords: ["pokemon memorial site", "pikachu memorial", "pikachu life achievements"],
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
