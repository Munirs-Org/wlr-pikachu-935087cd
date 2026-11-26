import Link from "next/link";
import { GeneratedImage_a53_home__hero_1 } from "../../components/generated-assets";

export default function HomeHero() {
  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ backgroundColor: "#f2efe8" }}
    >
      <div className="relative flex min-h-[420px] w-full md:min-h-[520px]">
        {/* Background photo layer: subject right, full-bleed */}
        <div className="absolute inset-0">
          <GeneratedImage_a53_home__hero_1 className="absolute inset-0 h-full w-full object-cover object-[70%_center]" />
          {/* Directional left-edge gradient fading to transparent, stopping partway across */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(90deg, #f2efe8 0%, #f2efe8 38%, rgba(242,239,232,0.85) 52%, rgba(242,239,232,0) 72%)",
            }}
          />
        </div>

        {/* Text content over the photo's negative space */}
        <div className="relative z-10 flex w-full max-w-7xl flex-col justify-center px-6 py-16 md:px-12 lg:px-16">
          <div className="max-w-xl">
            <h1
              className="text-4xl font-bold leading-[1.1] md:text-5xl lg:text-[52px]"
              style={{ color: "#1a1917", fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              Pikachu — Pokemon Memorial Site
            </h1>
            <p
              className="mt-5 max-w-md text-sm leading-relaxed md:text-[15px]"
              style={{ color: "#1a1917" }}
            >
              Celebrating Pikachu&apos;s life and memory — sharing memorial
              tributes, peaceful honors, and a lasting legacy dedicated to
              Pikachu.
            </p>
            <div className="mt-7">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-md px-8 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
                style={{ backgroundColor: "#9a3412", borderRadius: "8px" }}
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
