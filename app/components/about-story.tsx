import { GeneratedImage_a53_about__content_1 } from "../../components/generated-assets";

export default function AboutStory() {
  return (
    <section
      id="about__content"
      aria-labelledby="about-story-heading"
      className="w-full"
      style={{ backgroundColor: "#f2efe8" }}
    >
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-6 py-16 md:grid-cols-2 md:items-center md:gap-12">
        <div
          className="overflow-hidden rounded-lg"
          style={{ border: "1px solid #dcd6ca", boxShadow: "0 2px 8px rgba(26,25,23,0.06)" }}
        >
          <div className="relative w-full" style={{ aspectRatio: "7 / 4" }}>
            <GeneratedImage_a53_about__content_1 className="h-full w-full object-cover" />
          </div>
        </div>

        <div>
          <h2
            id="about-story-heading"
            className="text-3xl font-bold leading-tight md:text-4xl"
            style={{ color: "#1a1917", fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            A Journey of Light
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed" style={{ color: "#1a1917", fontFamily: "Inter, sans-serif" }}>
            Pikachu&apos;s journey to honor historical Pikachu-related memorabilia — in a warm, mandarin-lit glow —
            celebrates a cherished gathering of Pikachu-related keepsakes that stands as a heartwarming feature of the
            Pokemon community.
          </p>
          <p className="mt-4 text-[15px] leading-relaxed" style={{ color: "#1a1917", fontFamily: "Inter, sans-serif" }}>
            Every display is cared for with a gentle, light-hearted tone — preserving precious memories and supporting
            the Pikachu Memorial so that the joy Pikachu brought continues to shine for everyone who visits.
          </p>
        </div>
      </div>
    </section>
  );
}
