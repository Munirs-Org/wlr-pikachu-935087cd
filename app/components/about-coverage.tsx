import { MapPin } from "lucide-react";

const coverageItems = [
  {
    title: "Memorial Sites",
    region: "Fictional Regions",
    copy: "Pikachu memorial and Pikachu Pokemon Memorial Site are in different regions of Pokemon world kind regions.",
  },
  {
    title: "Community Hubs",
    region: "Fictional Regions",
    copy: "Pokemon world supershine community hubs including intercity areas regarding on the regions.",
  },
  {
    title: "Charitable Partner Locations",
    region: "",
    copy: "Charitable Partner Locations stand partner or Pikachu and Pokemon community torunites regions.",
  },
];

const pinColors = ["#9a3412", "#9a3412", "#9a3412"];

export default function AboutCoverage() {
  return (
    <section
      id="coverage"
      className="w-full bg-[#faf8f4] py-16 px-6"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      <div className="mx-auto max-w-5xl">
        <h2
          className="text-center text-[#1a1917] mb-10"
          style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontSize: "32px",
            fontWeight: 700,
            lineHeight: 1.2,
          }}
        >
          Service Areas / Coverage
        </h2>

        <div className="grid gap-10 md:grid-cols-[3fr_2fr] items-start">
          {/* Left: stylized world map illustration */}
          <div
            className="rounded-lg overflow-hidden w-full"
            style={{
              background: "#a8d8e8",
              border: "1px solid #dcd6ca",
              boxShadow: "0 2px 8px rgba(26,25,23,0.06)",
            }}
          >
            <svg
              viewBox="0 0 640 380"
              className="w-full h-auto block"
              role="img"
              aria-label="Stylized world map of Pikachu memorial coverage regions"
            >
              {/* North America */}
              <path
                d="M40 60 Q90 30 160 45 Q210 55 215 95 Q220 130 185 155 Q160 185 130 200 Q110 230 90 215 Q60 190 50 150 Q30 110 40 60 Z"
                fill="#8f9fbc"
              />
              {/* Greenland */}
              <ellipse cx="265" cy="40" rx="45" ry="22" fill="#eef0ea" />
              {/* South America */}
              <path
                d="M150 230 Q185 215 200 245 Q215 285 195 330 Q180 365 160 350 Q140 320 138 275 Q138 250 150 230 Z"
                fill="#8fc79a"
              />
              {/* Europe */}
              <path
                d="M300 65 Q345 45 385 60 Q400 80 390 100 Q365 115 330 115 Q300 105 295 85 Z"
                fill="#d9e3b2"
              />
              {/* Africa */}
              <path
                d="M305 140 Q345 120 380 140 Q400 170 395 210 Q385 260 350 285 Q325 290 315 260 Q295 215 300 175 Z"
                fill="#e8c96a"
              />
              {/* Asia */}
              <path
                d="M400 55 Q480 30 550 55 Q600 75 605 115 Q605 150 560 165 Q510 175 470 160 Q425 140 405 110 Q395 80 400 55 Z"
                fill="#e0b98a"
              />
              {/* Southeast Asia islands */}
              <ellipse cx="530" cy="200" rx="28" ry="12" fill="#e8c96a" />
              <ellipse cx="575" cy="215" rx="22" ry="10" fill="#d9a86a" />
              {/* Australia */}
              <path
                d="M520 275 Q560 255 595 275 Q615 295 605 320 Q580 340 545 330 Q515 315 515 295 Z"
                fill="#c99bb8"
              />
              {/* New Zealand */}
              <ellipse cx="628" cy="345" rx="10" ry="16" fill="#c99bb8" />

              {/* Location pins */}
              {[
                [110, 110],
                [150, 95],
                [165, 130],
                [120, 160],
                [175, 180],
                [350, 90],
                [345, 165],
                [480, 105],
                [510, 135],
                [555, 300],
                [170, 270],
              ].map(([x, y], i) => (
                <g key={i} transform={`translate(${x} ${y})`}>
                  <path
                    d="M0 0 C-6 -8 -6 -14 0 -16 C6 -14 6 -8 0 0 Z"
                    fill="#9a3412"
                    stroke="#ffffff"
                    strokeWidth="1"
                  />
                  <circle cx="0" cy="-11" r="2.4" fill="#ffffff" />
                </g>
              ))}
            </svg>
          </div>

          {/* Right: Continuum Areas list */}
          <div>
            <h3
              className="text-[#1a1917] mb-5"
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: "18px",
                fontWeight: 700,
              }}
            >
              Continuum Areas
            </h3>

            <ul className="space-y-5">
              {coverageItems.map((item, i) => (
                <li key={item.title}>
                  <div className="flex items-start gap-2">
                    <MapPin
                      className="mt-0.5 h-4 w-4 shrink-0"
                      style={{ color: pinColors[i] }}
                      aria-hidden="true"
                    />
                    <p
                      className="text-[#1a1917]"
                      style={{ fontSize: "15px", fontWeight: 700 }}
                    >
                      {item.title}
                    </p>
                  </div>
                  <div className="pl-6">
                    {item.region ? (
                      <p className="text-[#1a1917]" style={{ fontSize: "13px" }}>
                        {item.region}
                      </p>
                    ) : null}
                    <p
                      className="text-[#1a1917]/80"
                      style={{ fontSize: "13px", lineHeight: 1.5 }}
                    >
                      {item.copy}
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
