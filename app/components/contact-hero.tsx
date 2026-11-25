import { GeneratedImage_a53_contact__hero_1 } from "../../components/generated-assets";

export default function ContactHero() {
  return (
    <section
      id="contact__hero-1"
      className="w-full"
      style={{ backgroundColor: "#f2efe8" }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 items-stretch">
        {/* Left: headline panel */}
        <div className="flex items-center px-6 sm:px-10 lg:px-16 py-14 lg:py-24">
          <div>
            <h1
              className="font-bold text-[#1a1917]"
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: "clamp(40px, 5vw, 56px)",
                lineHeight: 1.1,
              }}
            >
              Contact Pikachu
            </h1>
            <p
              className="mt-5 max-w-md text-[#1a1917]/70"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "16px",
                lineHeight: 1.5,
              }}
            >
              Whether you would like to share a memory, ask a question, or
              support the Pikachu Memorial Fund, we would be glad to hear from
              you.
            </p>
          </div>
        </div>

        {/* Right: memorial monument photo, angled edge */}
        <div className="relative min-h-[280px] lg:min-h-[380px] overflow-hidden">
          <div className="absolute inset-0">
            <GeneratedImage_a53_contact__hero_1 />
          </div>
          {/* Angled directional gradient fading the photo into the surface partway across */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "linear-gradient(to right, #f2efe8 0%, rgba(242,239,232,0) 45%)",
            }}
            aria-hidden="true"
          />
        </div>
      </div>
    </section>
  );
}
