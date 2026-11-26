import Link from "next/link";
import { GeneratedImage_a53_home__hero_1 } from "../../components/generated-assets";

export default function HomeHero() {
  return (
    <section
      id="home__hero-1"
      className="w-full bg-[#f2efe8]"
      aria-label="Pikachu — Pokemon Memorial Site"
    >
      <div className="mx-auto max-w-6xl px-6 py-14 md:py-20">
        <div className="relative grid grid-cols-1 md:grid-cols-2 items-center gap-10">
          {/* Left column: text */}
          <div className="relative z-10 max-w-xl">
            <h1 className="font-display text-[40px] leading-[1.1] md:text-[52px] font-bold text-[#1a1917]">
              Pikachu — Pokemon Memorial Site
            </h1>
            <p className="mt-5 text-[15px] leading-relaxed text-[#1a1917]/80 max-w-md">
              Celebrating Pikachu&apos;s life and memory — sharing memorial
              tributes, peaceful honors, and a lasting legacy dedicated to
              Pikachu.
            </p>
            <div className="mt-7">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-md bg-[#9a3412] px-7 py-3 text-white text-sm font-semibold hover:bg-[#7c2a0e] transition-colors"
              >
                Donate
              </Link>
            </div>
          </div>

          {/* Right column: hero photo with directional left-edge gradient */}
          <div className="relative h-[320px] md:h-[420px] overflow-hidden rounded-lg">
            <div className="absolute inset-0">
              <GeneratedImage_a53_home__hero_1 className="absolute inset-0 h-full w-full object-cover object-right" />
            </div>
            {/* Directional left-edge gradient stopping partway across */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "linear-gradient(to right, #f2efe8 0%, #f2efe8 18%, rgba(242,239,232,0) 45%)",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
