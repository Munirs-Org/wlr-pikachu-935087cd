import { GeneratedImage_a53_about__content_1 } from "../../components/generated-assets";

export default function AboutStoryBand() {
  return (
    <section
      id="about-story"
      className="w-full bg-[#f2efe8] py-16 md:py-20"
      aria-labelledby="about-story-heading"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-12">
          {/* Photo left */}
          <div className="overflow-hidden rounded-[12px] border border-[#dcd6ca] bg-[#e8e3d9] shadow-[0_2px_8px_rgba(26,25,23,0.06)]">
            <div className="aspect-[4/3] w-full">
              <GeneratedImage_a53_about__content_1 className="h-full w-full object-cover" />
            </div>
          </div>

          {/* Copy right */}
          <div>
            <h2
              id="about-story-heading"
              className="font-[var(--font-display)] text-3xl font-bold leading-[1.2] text-[#1a1917] md:text-[32px]"
              style={{ fontFamily: "var(--font-display, 'Plus Jakarta Sans', sans-serif)" }}
            >
              A Journey of Light
            </h2>
            <p className="mt-4 text-[15px] leading-[1.6] text-[#1a1917]">
              Pikachu&apos;s journey to honor historical Pikachu-related memorabilia. In a
              mandarin-glow illuminated space, Pikachu-related memorabilia stands as a
              heartening feature of the Pokemon community.
            </p>
            <p className="mt-4 text-[15px] leading-[1.6] text-[#1a1917]">
              Pikachu stewards means to support the Pikachu memorial — collecting memories
              and remembrances, shared in a light-hearted tone.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
