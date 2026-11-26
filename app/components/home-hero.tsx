import Link from "next/link";
import { GeneratedImage_a53_home__hero_1 } from "../../components/generated-assets";

export default function HomeHero() {
  return (
    <section
      id="home__hero-1"
      aria-label="Pikachu — Pokemon Memorial Site"
      className="relative w-full overflow-hidden bg-[#f2efe8]"
    >
      <div className="relative mx-auto flex w-full max-w-6xl flex-col items-stretch md:min-h-[520px] md:flex-row">
        {/* Left column — headline, paragraph, CTA */}
        <div className="relative z-10 flex w-full flex-col justify-center px-6 pb-12 pt-14 md:w-[55%] md:py-20 md:pl-8 md:pr-0">
          <h1
            className="font-[family-name:var(--font-display)] text-[40px] font-bold leading-[1.1] text-[#1a1917] md:text-[52px]"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            Pikachu — Pokemon Memorial Site
          </h1>
          <p className="mt-5 max-w-md text-[15px] leading-[1.6] text-[#1a1917]/80">
            Celebrating Pikachu&apos;s life and memory — sharing memorial
            tributes, peaceful honors, and a lasting legacy dedicated to
            Pikachu.
          </p>
          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-[8px] bg-[#9a3412] px-8 py-3 text-[15px] font-semibold text-white transition-colors hover:bg-[#7c2a0e]"
            >
              Donate
            </Link>
          </div>
        </div>

        {/* Right column — angled-edge photo, subject framed right */}
        <div className="relative w-full md:w-[45%]">
          <div className="absolute inset-0 md:clip-path-[polygon(18%_0,100%_0,100%_100%,0_100%)]">
            <div className="absolute inset-0">
              <GeneratedImage_a53_home__hero_1 />
            </div>
            {/* Directional cream gradient fading from the left, stopping partway across */}
            <div
              className="absolute inset-0 md:hidden"
              style={{
                background:
                  "linear-gradient(to bottom, rgba(242,239,232,0.85), rgba(242,239,232,0) 55%)",
              }}
            />
            <div
              className="absolute inset-0 hidden md:block"
              style={{
                background:
                  "linear-gradient(to right, #f2efe8 0%, rgba(242,239,232,0) 45%)",
              }}
            />
          </div>
          {/* Angled left edge on desktop */}
          <style>{`
            @media (min-width: 768px) {
              #home__hero-1 .angled-photo {
                clip-path: polygon(22% 0, 100% 0, 100% 100%, 0 100%);
              }
            }
          `}</style>
        </div>
      </div>
    </section>
  );
}
