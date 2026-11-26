import { MapPin } from "lucide-react";

const pins: Array<{ x: number; y: number }> = [
  { x: 150, y: 90 },
  { x: 180, y: 70 },
  { x: 205, y: 95 },
  { x: 170, y: 110 },
  { x: 320, y: 60 },
  { x: 340, y: 75 },
  { x: 455, y: 65 },
  { x: 130, y: 160 },
  { x: 150, y: 200 },
  { x: 430, y: 110 },
  { x: 300, y: 30 },
];

const details = [
  {
    title: "Memorial Sites",
    tone: "text-[#9a3412]",
    description:
      "Pikachu memorial and Pikachu Pokemon Memorial Site are in different regions of the Pokemon world.",
  },
  {
    title: "Community Hubs",
    tone: "text-[#5b7a3f]",
    description:
      "Pokemon world community hubs, including intercity areas, spanning the regions.",
  },
  {
    title: "Charitable Partner Locations",
    tone: "text-[#b07d3a]",
    description:
      "Charitable partner locations stand as partners of the Pikachu and Pokemon community across regions.",
  },
];

export default function AboutCoverage() {
  return (
    <section className="w-full bg-[#faf8f4] py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-center font-[family-name:var(--font-display)] text-3xl font-bold text-[#1a1917] md:text-[32px]">
          Service Areas / Coverage
        </h2>

        <div className="mt-10 grid grid-cols-1 items-start gap-10 md:grid-cols-2">
          {/* Stylized world map illustration */}
          <div className="overflow-hidden rounded-lg border border-[#dcd6ca] shadow-[0_2px_8px_rgba(26,25,23,0.06)]">
            <svg
              viewBox="0 0 520 280"
              className="h-auto w-full"
              role="img"
              aria-label="Stylized world map with location pins marking service coverage"
            >
              <rect width="520" height="280" fill="#7fb6d9" />
              {/* North America */}
              <path
                d="M40 55 Q90 25 140 45 Q175 60 165 95 Q155 120 120 130 Q95 140 80 120 Q45 100 40 55 Z"
                fill="#a9b8e8"
                stroke="#ffffff"
                strokeWidth="2"
              />
              {/* Greenland */}
              <path
                d="M195 25 Q225 15 245 30 Q250 45 230 55 Q200 55 195 25 Z"
                fill="#eef2f4"
                stroke="#ffffff"
                strokeWidth="2"
              />
              {/* South America */}
              <path
                d="M115 165 Q150 150 170 175 Q180 205 160 240 Q145 265 130 240 Q110 200 115 165 Z"
                fill="#8fc79a"
                stroke="#ffffff"
                strokeWidth="2"
              />
              {/* Europe */}
              <path
                d="M290 45 Q320 30 345 45 Q355 65 335 80 Q305 85 290 45 Z"
                fill="#f0d98c"
                stroke="#ffffff"
                strokeWidth="2"
              />
              {/* Africa */}
              <path
                d="M290 105 Q330 90 355 115 Q370 150 350 195 Q335 230 315 205 Q290 160 290 105 Z"
                fill="#f2c97d"
                stroke="#ffffff"
                strokeWidth="2"
              />
              {/* Asia */}
              <path
                d="M360 40 Q420 20 475 50 Q500 75 480 110 Q455 140 420 130 Q385 120 365 90 Q350 60 360 40 Z"
                fill="#a9d0a0"
                stroke="#ffffff"
                strokeWidth="2"
              />
              {/* Central Asia highlight */}
              <path
                d="M370 70 Q400 55 430 75 Q440 95 415 105 Q385 100 370 70 Z"
                fill="#e8a06b"
                stroke="#ffffff"
                strokeWidth="2"
              />
              {/* Australia */}
              <path
                d="M430 195 Q465 180 495 200 Q505 225 480 240 Q450 245 435 225 Q425 205 430 195 Z"
                fill="#d9a0c9"
                stroke="#ffffff"
                strokeWidth="2"
              />
              {/* Location pins */}
              {pins.map((p, i) => (
                <g key={i} transform={`translate(${p.x}, ${p.y})`}>
                  <path
                    d="M0 0 C -7 -12 -7 -18 0 -22 C 7 -18 7 -12 0 0 Z"
                    fill="#9a3412"
                    stroke="#ffffff"
                    strokeWidth="1.5"
                  />
                  <circle cx="0" cy="-15" r="3" fill="#faf8f4" />
                </g>
              ))}
            </svg>
          </div>

          {/* Continuum Areas list */}
          <div>
            <h3 className="font-[family-name:var(--font-display)] text-xl font-bold text-[#1a1917]">
              Continuum Areas
            </h3>

            <div className="mt-5 space-y-6">
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-[#9a3412]" aria-hidden="true" />
                <div>
                  <p className="font-semibold text-[#1a1917]">Memorial Sites</p>
                  <p className="text-sm text-[#1a1917]/70">Fictional Regions</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-[#9a3412]" aria-hidden="true" />
                <div>
                  <p className="font-semibold text-[#1a1917]">Community Hubs</p>
                  <p className="text-sm text-[#1a1917]/70">Fictional Regions</p>
                </div>
              </div>

              {details.map((d) => (
                <div key={d.title} className="flex items-start gap-3">
                  <MapPin
                    className={`mt-0.5 h-5 w-5 shrink-0 ${d.tone}`}
                    aria-hidden="true"
                  />
                  <div>
                    <p className="font-semibold text-[#1a1917]">{d.title}</p>
                    <p className="mt-1 text-sm leading-relaxed text-[#1a1917]/70">
                      {d.description}
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
