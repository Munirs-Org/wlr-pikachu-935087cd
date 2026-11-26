import Link from "next/link";
import { GeneratedImage_a53_home__hero_1 } from "../../components/generated-assets";

export default function HomeHero() {
  return (
    <section className="relative w-full overflow-hidden bg-[#f2efe8]">
      <div className="relative isolate min-h-[520px] w-full lg:min-h-[600px]">
        {/* Photo layer: subject framed right, diagonal left edge, gradient stops partway across */}
        <div
          className="absolute inset-y-0 right-0 w-full lg:w-[58%]"
          style={{ clipPath: "polygon(18% 0, 100% 0, 100% 100%, 0% 100%)" }}
        >
          <GeneratedImage_a53_home__hero_1 />
        </div>
        {/* Directional gradient: solid surface on the left fading to transparent, stopping partway across */}
        <div
          aria-hidden="true"
          className="absolute inset-y-0 left-0 w-full lg:w-[55%]"
          style={{
            background:
              "linear-gradient(100deg, #f2efe8 0%, #f2efe8 45%, rgba(242,239,232,0.85) 60%, rgba(242,239,232,0) 82%)",
          }}
        />
        {/* Text content as separate DOM over the image's negative space */}
        <div className="relative z-10 flex max-w-7xl flex-col justify-center px-6 py-16 sm:px-10 lg:px-16 lg:py-24">
          <div className="max-w-xl">
            <h1 className="font-[family-name:var(--font-display)] text-4xl font-bold leading-[1.1] tracking-tight text-[#1a1917] sm:text-5xl lg:text-[52px]">
              Pikachu — Pokemon Memorial Site
            </h1>
            <p className="mt-6 max-w-md text-[15px] leading-[1.6] text-[#1a1917]/80">
              Celebrating Pikachu&apos;s life and memory — sharing memorial
              tributes, peaceful honors, and a lasting legacy dedicated to
              Pikachu.
            </p>
            <div className="mt-8">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-md bg-[#9a3412] px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#7c2a0e]"
              >
                Donate
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
