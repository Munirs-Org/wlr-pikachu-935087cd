import Link from "next/link";
import { GeneratedImage_a53_about__hero_1 } from "../../components/generated-assets";

export default function AboutHero() {
  return (
    <section
      id="about-hero-1"
      className="relative w-full overflow-hidden bg-[#f2efe8]"
    >
      {/* Right-side photo layer */}
      <div className="absolute inset-y-0 right-0 w-full md:w-[55%]">
        <div className="relative h-full w-full">
          <GeneratedImage_a53_about__hero_1 className="absolute inset-0 h-full w-full object-cover object-[70%_center] md:object-right" />
          {/* Angled cream edge gradient fading to transparent, stopping partway across */}
          <div
            className="absolute inset-y-0 left-0 w-2/3 md:w-1/2"
            style={{
              background:
                "linear-gradient(to right, #f2efe8 0%, #f2efe8 45%, rgba(242,239,232,0.85) 60%, rgba(242,239,232,0) 100%)",
              clipPath: "polygon(0 0, 100% 0, 55% 100%, 0 100%)",
            }}
            aria-hidden="true"
          />
        </div>
      </div>

      {/* Text content over the photo's negative space */}
      <div className="relative mx-auto flex min-h-[380px] max-w-6xl flex-col justify-center px-6 py-16 md:min-h-[460px] md:px-10 md:py-20">
        <div className="max-w-lg md:max-w-xl">
          <h1
            className="font-bold text-[#1a1917]"
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: "clamp(2.5rem, 6vw, 3.25rem)",
              lineHeight: 1.1,
            }}
          >
            About Pikachu
          </h1>
          <p
            className="mt-5 max-w-md text-[15px] leading-relaxed text-[#1a1917]"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Our Mission: To celebrate, remember, and support the everlasting
            memory of Pikachu and the Pokemon community.
          </p>
          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-[8px] bg-[#9a3412] px-6 py-3 text-[15px] font-semibold text-white transition-colors hover:bg-[#7c2a0e]"
              style={{
                fontFamily: "Inter, sans-serif",
                borderRadius: "8px",
              }}
            >
              Donate
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
