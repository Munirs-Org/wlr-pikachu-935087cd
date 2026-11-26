import Link from "next/link";
import { GeneratedImage_a53_about__hero_1 } from "../../components/generated-assets";

export default function AboutHero() {
  return (
    <section
      aria-labelledby="about-hero-heading"
      className="relative w-full overflow-hidden"
      style={{ backgroundColor: "#f2efe8" }}
    >
      {/* Background imagery layer: memorial garden photo, subject right */}
      <div className="absolute inset-0">
        <GeneratedImage_a53_about__hero_1 className="absolute inset-0 h-full w-full object-cover object-right" />
        {/* Directional edge gradient: cream surface fading rightward into the photo, stopping partway across */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, #f2efe8 0%, #f2efe8 42%, rgba(242,239,232,0.85) 52%, rgba(242,239,232,0) 72%)",
          }}
          aria-hidden="true"
        />
      </div>

      {/* Text content over the photo's negative space */}
      <div className="relative z-10 mx-auto flex max-w-6xl flex-col justify-center px-6 py-20 sm:py-24 md:px-10 lg:py-28">
        <div className="max-w-xl">
          <h1
            id="about-hero-heading"
            className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-[52px] lg:leading-[1.1]"
            style={{ color: "#1a1917", fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            About Pikachu
          </h1>
          <p
            className="mt-5 text-base leading-relaxed sm:text-[17px]"
            style={{ color: "#1a1917", fontFamily: "Inter, sans-serif" }}
          >
            Our Mission: To celebrate, remember, and support the everlasting
            memory of Pikachu and the Pokemon community.
          </p>
          <div className="mt-8">
            <Link
              href="/donate"
              className="inline-flex items-center justify-center rounded-lg px-7 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
              style={{ backgroundColor: "#9a3412", borderRadius: "8px" }}
            >
              Donate
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
