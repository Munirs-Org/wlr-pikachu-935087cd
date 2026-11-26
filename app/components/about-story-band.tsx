import { GeneratedImage_a53_about__content_1 } from "../../components/generated-assets";

export default function AboutStoryBand() {
  return (
    <section
      aria-label="A Journey of Light"
      className="w-full bg-[#f2efe8]"
      data-region="about-content-1"
    >
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-6 py-16 md:grid-cols-2 md:gap-12 md:py-20">
        {/* Left: museum display photo */}
        <div className="overflow-hidden rounded-lg border border-[#dcd6ca] bg-[#e8e3d9]">
          <div className="h-full min-h-[280px]">
            <GeneratedImage_a53_about__content_1 className="h-full w-full object-cover" />
          </div>
        </div>

        {/* Right: heading + two paragraphs */}
        <div className="flex flex-col justify-center">
          <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold leading-tight text-[#1a1917] md:text-[32px]">
            A Journey of Light
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-[#1a1917]/80">
            Pikachu&rsquo;s journey to honor historical Pikachu-related
            memorabilia. In a warm, mandarin-glow collection, framed art and
            figurines preserve every cherished chapter of the beloved
            character and stand as a heartfelt tribute to the fans who
            carried him into legend.
          </p>
          <p className="mt-4 text-[15px] leading-relaxed text-[#1a1917]/80">
            The memorial gathers keepsakes, stories, and support for the
            Pikachu Memorial Fund, celebrating community memories in a light,
            hopeful tone that keeps his spark burning bright for generations
            to come.
          </p>
        </div>
      </div>
    </section>
  );
}
