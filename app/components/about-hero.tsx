import Link from "next/link";
import { GeneratedImage_a53_about__hero_1 } from "../../components/generated-assets";

export default function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-[#f2efe8]">
      {/* Photo layer, subject right */}
      <div className="absolute inset-y-0 right-0 h-full w-full md:w-[55%]">
        <GeneratedImage_a53_about__hero_1 className="absolute inset-0 h-full w-full object-cover object-right" />
        {/* directional gradient: cream edge fading toward the subject, stops partway */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, #f2efe8 0%, #f2efe8 12%, rgba(242,239,232,0.85) 28%, rgba(242,239,232,0) 55%)",
          }}
        />
      </div>

      {/* Text content over the left negative space */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 md:px-12">
        <div className="flex max-w-xl flex-col items-start justify-center py-16 md:py-24">
          <h1
            className="text-[#1a1917]"
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: "52px",
              fontWeight: 700,
              lineHeight: 1.1,
            }}
          >
            About Pikachu
          </h1>
          <p
            className="mt-5 text-[#1a1917]"
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "15px",
              fontWeight: 400,
              lineHeight: 1.6,
              maxWidth: "26rem",
            }}
          >
            Our Mission: To celebrate, remember, and support the everlasting
            memory of Pikachu and the Pokemon community.
          </p>
          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-[#9a3412] px-6 py-3 text-white transition-colors hover:bg-[#7c2a0e]"
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: "15px",
                fontWeight: 600,
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
