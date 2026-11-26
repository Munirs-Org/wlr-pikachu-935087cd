import { GeneratedImage_a53_contact__hero_1 } from "../../components/generated-assets";

export default function ContactHero() {
  return (
    <section
      id="contact-hero-1"
      aria-label="Contact Pikachu"
      className="relative w-full overflow-hidden"
      style={{ backgroundColor: "#f2efe8" }}
    >
      <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-start gap-0 lg:grid-cols-2">
        {/* Left: warm surface panel with headline */}
        <div className="flex min-h-[220px] items-center px-6 py-16 sm:px-10 lg:py-24">
          <h1
            className="text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-[56px]"
            style={{ color: "#1a1917", fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            Contact Pikachu
          </h1>
        </div>

        {/* Right: photo of stone memorial monument in garden, subject right */}
        <div className="relative min-h-[260px] w-full sm:min-h-[320px] lg:min-h-[300px]">
          <div className="absolute inset-0">
            <GeneratedImage_a53_contact__hero_1 className="absolute inset-0 h-full w-full object-cover" />
            {/* Directional edge gradient: warm surface fades in from the left toward the subject, stopping partway */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(100deg, #f2efe8 0%, rgba(242,239,232,0.85) 18%, rgba(242,239,232,0.35) 40%, rgba(242,239,232,0) 62%)",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
