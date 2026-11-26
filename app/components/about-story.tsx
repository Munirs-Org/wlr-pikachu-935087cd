import { GeneratedImage_a53_about__content_1 } from "../../components/generated-assets";

export default function AboutStory() {
  return (
    <section
      id="about__content-1"
      aria-label="A Journey of Light"
      className="w-full bg-[#f2efe8]"
    >
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-6 py-16 md:grid-cols-2 md:gap-14 md:px-10">
        <div className="relative flex items-center">
          <div
            aria-hidden="true"
            className="absolute inset-x-4 inset-y-8 rounded-[12px] bg-[#e8e3d9]"
          />
          <div className="relative w-full overflow-hidden rounded-[12px] shadow-[0_2px_8px_rgba(26,25,23,0.06)]">
            <GeneratedImage_a53_about__content_1 className="h-full w-full object-cover" />
          </div>
        </div>

        <div className="flex flex-col justify-center">
          <h2 className="text-[32px] font-bold leading-[1.2] text-[#1a1917] [font-family:var(--font-display)] md:text-[36px]">
            A Journey of Light
          </h2>
          <p className="mt-5 text-[15px] leading-[1.6] text-[#1a1917]">
            Pikachu&rsquo;s journey to honor historical Pikachu-related
            memorabilia, in a warm and glowing spirit, is a heartfelt
            remembrance of the joy these treasures brought to fans and the
            broader Pokemon community.
          </p>
          <p className="mt-4 text-[15px] leading-[1.6] text-[#1a1917]">
            Through shared memories and community support, the Pikachu Memorial
            Fund keeps those moments alive — honoring collectibles,
            achievements, and the light-hearted tone Pikachu brought to every
            generation.
          </p>
        </div>
      </div>
    </section>
  );
}
