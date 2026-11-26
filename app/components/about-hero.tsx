import Link from "next/link";
import { GeneratedImage_a53_about__hero_1 } from "../../components/generated-assets";

export default function AboutHero() {
  return (
    <section className="relative w-full overflow-hidden" style={{ backgroundColor: "#f2efe8" }}>
      <div className="grid lg:grid-cols-2 items-stretch">
        {/* Text panel — left */}
        <div className="relative z-10 flex flex-col justify-center px-6 py-16 sm:px-10 lg:px-16 lg:py-24">
          <h1
            className="font-bold"
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              color: "#1a1917",
              fontSize: "clamp(38px, 6vw, 52px)",
              lineHeight: 1.1,
            }}
          >
            About Pikachu
          </h1>
          <p
            className="mt-5 max-w-md"
            style={{
              fontFamily: "'Inter', sans-serif",
              color: "#1a1917",
              fontSize: "16px",
              lineHeight: 1.6,
            }}
          >
            Our Mission: To celebrate, remember, and support the everlasting memory of
            Pikachu and the Pok&eacute;mon community.
          </p>
          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center font-semibold text-white transition-opacity hover:opacity-90"
              style={{
                backgroundColor: "#9a3412",
                borderRadius: "8px",
                padding: "12px 28px",
                fontSize: "15px",
                fontFamily: "'Inter', sans-serif",
              }}
            >
              Donate
            </Link>
          </div>
        </div>

        {/* Photo panel — right, subject right with directional gradient fading from the left edge */}
        <div className="relative min-h-[320px] sm:min-h-[420px] lg:min-h-[520px]">
          <div className="absolute inset-0">
            <GeneratedImage_a53_about__hero_1 />
          </div>
          <div
            aria-hidden="true"
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "linear-gradient(to right, #f2efe8 0%, rgba(242,239,232,0) 45%)",
            }}
          />
        </div>
      </div>
    </section>
  );
}
