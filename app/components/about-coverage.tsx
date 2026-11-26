import { MapPin } from "lucide-react";

const groups = [
  {
    title: "Memorial Sites",
    copy:
      "Pikachu memorial sites are located across different regions of the Pokemon world, each honoring his life and achievements.",
    color: "#9a3412",
  },
  {
    title: "Community Hubs",
    copy:
      "Pokemon world community hubs, including intercity areas spanning the regions, keep the memory connected and shared.",
    color: "#2f6f4f",
  },
  {
    title: "Charitable Partner Locations",
    copy:
      "Charitable partner locations stand as partners of the Pikachu and Pokemon community across the regions.",
    color: "#b7863c",
  },
];

export default function AboutCoverage() {
  return (
    <section id="about-coverage" className="w-full bg-[#faf8f4] py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-center font-[family-name:var(--font-display)] text-3xl md:text-[32px] font-bold text-[#1a1917] leading-tight">
          Service Areas / Coverage
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-12 items-start">
          {/* Left: stylized world map illustration */}
          <div className="relative overflow-hidden rounded-xl border border-[#dcd6ca] shadow-[0_2px_8px_rgba(26,25,23,0.06)]">
            <img
              src="/assets/about-coverage-world-map.png"
              alt="Stylized world map illustration showing Pikachu memorial coverage locations"
              className="h-full w-full object-cover aspect-[16/10]"
            />
            <span className="absolute left-[18%] top-[46%] text-[#9a3412]">
              <MapPin size={18} strokeWidth={2.5} />
            </span>
            <span className="absolute left-[24%] top-[58%] text-[#9a3412]">
              <MapPin size={18} strokeWidth={2.5} />
            </span>
            <span className="absolute left-[52%] top-[30%] text-[#b7863c]">
              <MapPin size={18} strokeWidth={2.5} />
            </span>
            <span className="absolute left-[63%] top-[42%] text-[#2f6f4f]">
              <MapPin size={18} strokeWidth={2.5} />
            </span>
            <span className="absolute left-[45%] top-[70%] text-[#b7863c]">
              <MapPin size={18} strokeWidth={2.5} />
            </span>
            <span className="absolute left-[82%] top-[64%] text-[#2f6f4f]">
              <MapPin size={18} strokeWidth={2.5} />
            </span>
          </div>

          {/* Right: categorized coverage list */}
          <div>
            <p className="font-[family-name:var(--font-display)] text-lg font-bold text-[#1a1917]">
              Continuum Areas
            </p>

            <div className="mt-4 space-y-4">
              {groups.map((g) => (
                <div key={g.title} className="flex gap-3">
                  <span
                    className="mt-0.5 shrink-0"
                    style={{ color: g.color }}
                    aria-hidden="true"
                  >
                    <MapPin size={18} strokeWidth={2.5} />
                  </span>
                  <div>
                    <h3 className="font-[family-name:var(--font-display)] text-[18px] font-semibold text-[#1a1917] leading-snug">
                      {g.title}
                    </h3>
                    <p className="mt-1 text-[15px] leading-relaxed text-[#1a1917]/80">
                      {g.copy}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
