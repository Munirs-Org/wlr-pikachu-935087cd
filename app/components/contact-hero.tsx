import GeneratedImage_a53_contact__hero_1 from "../../components/generated-assets";

export default function ContactHero() {
  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ backgroundColor: "#f2efe8" }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 items-start">
        {/* Left: headline over warm surface panel */}
        <div className="flex items-center px-6 py-16 sm:px-12 lg:py-28">
          <h1
            className="font-bold"
            style={{
              color: "#1a1917",
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: "clamp(2.5rem, 6vw, 3.5rem)",
              lineHeight: 1.1,
            }}
          >
            Contact Pikachu
          </h1>
        </div>

        {/* Right: angled photo of memorial monument */}
        <div className="relative hidden lg:block">
          <div
            className="relative h-[300px] w-full overflow-hidden"
            style={{
              clipPath: "polygon(18% 0, 100% 0, 100% 100%, 0 100%)",
            }}
          >
            <GeneratedImage_a53_contact__hero_1 />
            {/* Directional gradient fading the left edge into the warm surface */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "linear-gradient(90deg, #f2efe8 0%, rgba(242,239,232,0) 45%)",
              }}
            />
          </div>
        </div>

        {/* Mobile photo (stacked below headline) */}
        <div className="relative lg:hidden h-64 w-full overflow-hidden">
          <GeneratedImage_a53_contact__hero_1 />
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "linear-gradient(180deg, #f2efe8 0%, rgba(242,239,232,0) 40%)",
            }}
          />
        </div>
      </div>
    </section>
  );
}
