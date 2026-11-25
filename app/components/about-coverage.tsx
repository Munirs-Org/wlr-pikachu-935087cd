import { MapPin } from "lucide-react";

type Category = {
  title: string;
  body: string;
  pinColor: string;
};

const categories: Category[] = [
  {
    title: "Memorial Sites",
    body: "Pikachu memorial and Pikachu Pokemon Memorial Site are in different regions of the Pokemon world kind regions.",
    pinColor: "#9a3412",
  },
  {
    title: "Community Hubs",
    body: "Pokemon world supershine community hubs including intercity areas regarding on the regions.",
    pinColor: "#2f6f4f",
  },
  {
    title: "Charitable Partner Locations",
    body: "Charitable Partner Locations stand partner of Pikachu and Pokemon community torunites regions.",
    pinColor: "#b98a2f",
  },
];

function WorldMapIllustration() {
  const pins: Array<[string, string, number, number]> = [
    ["#9a3412", "#ffffff", 18, 30],
    ["#9a3412", "#ffffff", 26, 38],
    ["#9a3412", "#ffffff", 14, 44],
    ["#9a3412", "#ffffff", 30, 22],
    ["#2f6f4f", "#ffffff", 55, 26],
    ["#2f6f4f", "#ffffff", 62, 20],
    ["#2f6f4f", "#ffffff", 70, 32],
    ["#b98a2f", "#ffffff", 48, 44],
    ["#b98a2f", "#ffffff", 58, 52],
    ["#b98a2f", "#ffffff", 40, 60],
    ["#9a3412", "#ffffff", 78, 42],
    ["#2f6f4f", "#ffffff", 84, 58],
  ];

  return (
    <svg
      viewBox="0 0 100 75"
      className="h-auto w-full"
      role="img"
      aria-label="Stylized world map showing Pikachu memorial coverage areas"
      preserveAspectRatio="xMidYMid meet"
    >
      <rect width="100" height="75" rx="3" fill="#7fb3c8" />
      {/* North America */}
      <path d="M10 14 L24 10 L30 16 L28 24 L24 30 L28 36 L22 44 L16 40 L12 32 L8 22 Z" fill="#8d93c4" stroke="#5e6394" strokeWidth="0.6" />
      {/* Greenland */}
      <path d="M32 8 L40 7 L41 12 L35 14 Z" fill="#e8e3d9" stroke="#c9c2b2" strokeWidth="0.5" />
      {/* South America */}
      <path d="M24 46 L30 46 L33 54 L30 66 L26 68 L24 58 Z" fill="#7fae6f" stroke="#5c8750" strokeWidth="0.6" />
      {/* Europe */}
      <path d="M45 12 L53 10 L56 16 L52 20 L46 19 Z" fill="#8d93c4" stroke="#5e6394" strokeWidth="0.6" />
      {/* Africa */}
      <path d="M46 24 L55 22 L60 30 L58 42 L52 52 L48 44 L44 32 Z" fill="#d9b64f" stroke="#a98a35" strokeWidth="0.6" />
      {/* Asia */}
      <path d="M57 10 L74 9 L84 16 L80 26 L72 30 L64 26 L58 20 Z" fill="#c98a4b" stroke="#9c6a38" strokeWidth="0.6" />
      {/* India / SE Asia */}
      <path d="M60 30 L66 30 L68 38 L63 40 Z" fill="#d9b64f" stroke="#a98a35" strokeWidth="0.5" />
      {/* Australia */}
      <path d="M78 52 L86 52 L88 60 L80 62 L77 57 Z" fill="#c77b8e" stroke="#9a5c6d" strokeWidth="0.6" />
      {/* Small islands */}
      <path d="M88 44 L92 43 L93 47 L89 48 Z" fill="#c98a4b" stroke="#9c6a38" strokeWidth="0.4" />
      <path d="M66 58 L72 56 L74 61 L67 62 Z" fill="#7fae6f" stroke="#5c8750" strokeWidth="0.4" />
      {/* Pins */}
      {pins.map(([fill, stroke, x, y], i) => (
        <g key={i} transform={`translate(${x} ${y})`}>
          <circle cx="0" cy="0" r="2.2" fill={fill} stroke={stroke} strokeWidth="0.7" />
        </g>
      ))}
    </svg>
  );
}

export default function AboutCoverage() {
  return (
    <section id="about__other-1" className="w-full bg-[#faf8f4] py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-center font-[family-name:var(--font-display)] text-[32px] font-bold leading-[1.2] text-[#1a1917]">
          Service Areas / Coverage
        </h2>

        <div className="mt-10 grid grid-cols-1 items-start gap-10 md:grid-cols-2 md:gap-12">
          {/* Left: stylized world-map illustration card */}
          <div className="overflow-hidden rounded-[12px] border border-[#dcd6ca] bg-[#7fb3c8] shadow-[0_2px_8px_rgba(26,25,23,0.06)]">
            <WorldMapIllustration />
          </div>

          {/* Right: Continuum Areas */}
          <div>
            <h3 className="font-[family-name:var(--font-display)] text-[18px] font-semibold leading-[1.3] text-[#1a1917]">
              Continuum Areas
            </h3>

            <div className="mt-5 space-y-6">
              {categories.map((cat) => (
                <div key={cat.title} className="flex items-start gap-3">
                  <span
                    className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center"
                    style={{ color: cat.pinColor }}
                  >
                    <MapPin className="h-4 w-4" strokeWidth={2} />
                  </span>
                  <div>
                    <p className="font-[family-name:var(--font-display)] text-[15px] font-semibold leading-[1.3] text-[#1a1917]">
                      {cat.title}
                    </p>
                    <p className="mt-1 text-[15px] leading-[1.6] text-[#1a1917]/80">
                      {cat.body}
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
