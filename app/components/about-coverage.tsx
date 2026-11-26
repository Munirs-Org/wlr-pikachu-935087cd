import { MapPin } from "lucide-react";

const categories = [
  {
    title: "Memorial Sites",
    regions: "Fictional Regions",
    description:
      "Pikachu's memorial sites and the Pikachu Pokémon Memorial Site are honored across different regions of the Pokémon world.",
    tone: "text-[#9a3412]",
  },
  {
    title: "Community Hubs",
    regions: "Fictional Regions",
    description:
      "Pokémon world community hubs, including intercity areas, extend across the regions celebrating Pikachu's memory.",
    tone: "text-[#1a1917]",
  },
  {
    title: "Charitable Partner Locations",
    regions: "",
    description:
      "Charitable partner locations stand with Pikachu and the Pokémon community through tribute and memorial regions.",
    tone: "text-[#e8a13a]",
  },
];

function WorldMapIllustration() {
  const pins: Array<[number, number]> = [
    [110, 128],
    [128, 118],
    [142, 140],
    [158, 112],
    [96, 168],
    [168, 150],
    [186, 176],
    [318, 120],
    [342, 132],
    [356, 152],
    [370, 118],
    [390, 142],
    [404, 122],
    [420, 150],
    [440, 118],
    [460, 136],
    [130, 218],
    [150, 244],
  ];
  return (
    <div className="rounded-xl overflow-hidden border border-[#dcd6ca] bg-[#7fb5d6] shadow-[0_2px_8px_rgba(26,25,23,0.06)]">
      <svg
        viewBox="0 0 520 300"
        className="w-full h-auto"
        role="img"
        aria-label="Stylized world map showing Pikachu memorial coverage areas"
      >
        {/* Greenland */}
        <path
          d="M232 30 L268 22 L296 34 L288 58 L262 66 L238 54 Z"
          fill="#f5f2ea"
        />
        {/* North America */}
        <path
          d="M60 70 L120 56 L170 66 L186 90 L172 112 L150 118 L142 142 L120 132 L96 148 L76 132 L60 104 Z"
          fill="#7f8bc0"
        />
        {/* South America */}
        <path
          d="M128 176 L164 172 L184 196 L176 232 L156 266 L140 250 L128 212 Z"
          fill="#d8c25a"
        />
        {/* Europe */}
        <path
          d="M296 62 L338 54 L356 74 L344 92 L318 100 L300 88 Z"
          fill="#e0a24c"
        />
        {/* Africa */}
        <path
          d="M296 110 L348 104 L376 132 L364 176 L344 214 L326 196 L304 154 Z"
          fill="#e5c468"
        />
        {/* Asia */}
        <path
          d="M362 56 L452 50 L496 72 L488 104 L460 126 L432 118 L404 140 L378 118 L358 92 Z"
          fill="#e0a24c"
        />
        {/* Southeast Asia */}
        <path
          d="M448 150 L478 146 L494 162 L478 178 L456 170 Z"
          fill="#8bbf6a"
        />
        {/* Australia */}
        <path
          d="M452 200 L500 196 L512 224 L494 246 L462 240 L448 220 Z"
          fill="#d98fb0"
        />
        {/* New Zealand-ish islands */}
        <path d="M510 254 L520 250 L522 262 L512 266 Z" fill="#d98fb0" />
        {/* Antarctica strip */}
        <path
          d="M40 282 L480 282 L480 296 L40 296 Z"
          fill="#c9b98e"
          opacity="0.7"
        />
        {/* Location pins */}
        {pins.map(([x, y], i) => (
          <g key={i} transform={`translate(${x} ${y})`}>
            <path
              d="M0 -9 C4.4 -9 8 -5.4 8 -1 C8 4 0 11 0 11 C0 11 -8 4 -8 -1 C-8 -5.4 -4.4 -9 0 -9 Z"
              fill={i % 3 === 0 ? "#9a3412" : i % 3 === 1 ? "#e8a13a" : "#7f8bc0"}
            />
            <circle cx="0" cy="-1.5" r="3" fill="#faf8f4" />
          </g>
        ))}
      </svg>
    </div>
  );
}

export default function AboutCoverage() {
  return (
    <section className="w-full bg-[#faf8f4] py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-center font-[family-name:var(--font-display)] text-[32px] font-bold leading-[1.2] text-[#1a1917] mb-10">
          Service Areas / Coverage
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-[1.55fr_1fr] gap-8 md:gap-12 items-start">
          <WorldMapIllustration />
          <div>
            <h3 className="font-[family-name:var(--font-display)] text-[18px] font-semibold text-[#1a1917] mb-5">
              Continuum Areas
            </h3>
            <ul className="space-y-5">
              {categories.map((cat) => (
                <li key={cat.title} className="flex gap-2.5">
                  <MapPin
                    className={`h-4 w-4 shrink-0 mt-0.5 ${cat.tone}`}
                    strokeWidth={2}
                  />
                  <div>
                    <p className="font-[family-name:var(--font-display)] text-[15px] font-semibold text-[#1a1917] leading-[1.3]">
                      {cat.title}
                      {cat.regions ? (
                        <span className="block font-[family-name:var(--font-body)] text-[13px] font-normal text-[#1a1917]/70">
                          {cat.regions}
                        </span>
                      ) : null}
                    </p>
                    <p className="font-[family-name:var(--font-body)] text-[13px] leading-[1.6] text-[#1a1917]/75 mt-1">
                      {cat.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
