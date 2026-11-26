import Link from "next/link";
import GeneratedImage_a53_home__hero_1 from "../../components/generated-assets";

export default function HomeHero() {
  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ backgroundColor: "#f2efe8" }}
    >
      {/* Right-side hero photo with directional cream gradient from the left, stopping partway across */}
      <div className="absolute inset-y-0 right-0 hidden w-[48%] md:block">
        <div className="absolute inset-0">
          <GeneratedImage_a53_home__hero_1 />
        </div>
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, #f2efe8 0%, rgba(242,239,232,0.85) 14%, rgba(242,239,232,0) 55%)",
          }}
        />
      </div>

      {/* Left content column */}
      <div className="relative mx-auto flex max-w-6xl flex-col justify-center px-6 py-16 md:min-h-[460px] md:w-[52%] md:px-10 md:py-24">
        <h1
          className="font-bold"
          style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            color: "#1a1917",
            fontSize: "clamp(38px, 5vw, 52px)",
            lineHeight: 1.1,
          }}
        >
          Pikachu — Pokemon Memorial Site
        </h1>
        <p
          className="mt-5 max-w-md"
          style={{
            fontFamily: "'Inter', sans-serif",
            color: "#1a1917",
            fontSize: "15px",
            lineHeight: 1.6,
          }}
        >
          Celebrating Pikachu&apos;s life and memory — sharing memorial
          tributes, peaceful honors, and a lasting legacy dedicated to Pikachu.
        </p>
        <div className="mt-8">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-lg px-7 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
            style={{
              backgroundColor: "#9a3412",
              borderRadius: "8px",
              fontFamily: "'Inter', sans-serif",
            }}
          >
            Donate
          </Link>
        </div>
      </div>
    </section>
  );
}
