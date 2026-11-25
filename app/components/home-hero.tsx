import Link from "next/link";
import { GeneratedImage_a53_home__hero_1 } from "../../components/generated-assets";

export default function HomeHero() {
  return (
    <section
      id="home__hero-1"
      className="relative w-full overflow-hidden bg-[#f2efe8]"
    >
      <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-6 py-16 md:grid-cols-2 md:py-20">
        {/* Left: text content */}
        <div className="relative z-10 max-w-xl">
          <h1 className="font-[family-name:var(--font-display)] text-4xl font-bold leading-[1.1] text-[#1a1917] md:text-[52px]">
            Pikachu — Pokemon Memorial Site
          </h1>
          <p className="mt-6 text-base leading-relaxed text-[#1a1917]/80">
            Celebrating Pikachu&apos;s life and memory — sharing memorial
            tributes, peaceful honors, and a lasting legacy dedicated to
            Pikachu.
          </p>
          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-lg bg-[#9a3412] px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#7c2a0e]"
            >
              Donate
            </Link>
          </div>
        </div>

        {/* Right: full-bleed garden headstone photo */}
        <div className="relative min-h-[320px] md:min-h-[420px]">
          <div className="absolute inset-y-0 right-0 w-full md:w-[115%]">
            <GeneratedImage_a53_home__hero_1 />
          </div>
          {/* Diagonal left-edge gradient fading to transparent partway across */}
          <div
            className="pointer-events-none absolute inset-y-0 left-0 w-full md:w-[55%]"
            style={{
              background:
                "linear-gradient(105deg, #f2efe8 0%, #f2efe8 18%, rgba(242,239,232,0.75) 38%, rgba(242,239,232,0) 70%)",
            }}
          />
        </div>
      </div>
    </section>
  );
}
