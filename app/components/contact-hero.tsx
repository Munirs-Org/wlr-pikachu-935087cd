import { GeneratedImage_a53_contact__hero_1 } from "../../components/generated-assets";

export default function ContactHero() {
  return (
    <section
      id="contact__hero-1"
      aria-label="Contact Pikachu"
      className="w-full"
      style={{ backgroundColor: "#f2efe8" }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 items-stretch">
        {/* Left: warm panel with headline */}
        <div className="flex items-center px-6 sm:px-10 lg:px-16 py-16 lg:py-24">
          <h1
            className="font-bold text-[#1a1917]"
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: "clamp(40px, 6vw, 56px)",
              lineHeight: 1.1,
            }}
          >
            Contact Pikachu
          </h1>
        </div>

        {/* Right: angled photo of stone memorial monument */}
        <div className="relative min-h-[280px] lg:min-h-[420px] overflow-hidden">
          <div className="absolute inset-0">
            <GeneratedImage_a53_contact__hero_1 />
          </div>
          {/* Directional edge gradient fading from the warm panel into the photo */}
          <div
            className="absolute inset-y-0 left-0 w-2/3 pointer-events-none"
            style={{
              background:
                "linear-gradient(to right, #f2efe8 0%, rgba(242,239,232,0.75) 30%, rgba(242,239,232,0) 100%)",
            }}
          />
        </div>
      </div>
    </section>
  );
}
