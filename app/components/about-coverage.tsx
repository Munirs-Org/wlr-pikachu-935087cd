const REGIONS = [
  {
    title: "Memorial Sites",
    description:
      "Pikachu memorial sites and the Pikachu Pokemon Memorial Site span different regions of the Pokemon world.",
    tone: "#9a3412",
  },
  {
    title: "Community Hubs",
    description:
      "Pokemon world community hubs, including intercity areas, across every connected region.",
    tone: "#5c6f52",
  },
  {
    title: "Charitable Partner Locations",
    description:
      "Charitable partner locations standing alongside Pikachu and the wider Pokemon community across regions.",
    tone: "#b98a2f",
  },
];

function WorldMapIllustration() {
  return (
    <svg
      viewBox="0 0 760 420"
      className="h-auto w-full"
      role="img"
      aria-label="Stylized world map showing Pikachu memorial and community coverage regions"
    >
      <rect width="760" height="420" rx="10" fill="#7fa8bd" />
      {/* North America */}
      <path
        d="M60 90 Q120 60 190 80 Q250 90 260 130 Q270 170 230 190 Q200 210 190 250 Q180 285 150 270 Q120 250 110 210 Q70 190 55 150 Q45 110 60 90 Z"
        fill="#7c8ab8"
        stroke="#5f6d9a"
        strokeWidth="2"
      />
      {/* South America */}
      <path
        d="M190 285 Q225 275 245 300 Q265 325 255 360 Q245 395 220 390 Q200 385 195 350 Q185 315 190 285 Z"
        fill="#6fae7f"
        stroke="#568a63"
        strokeWidth="2"
      />
      {/* Greenland */}
      <path
        d="M280 55 Q315 45 340 60 Q350 80 330 95 Q300 100 285 85 Q272 68 280 55 Z"
        fill="#f4f2ec"
        stroke="#d8d3c6"
        strokeWidth="2"
      />
      {/* Europe */}
      <path
        d="M360 85 Q400 70 435 85 Q455 100 445 125 Q430 145 400 150 Q370 150 358 130 Q348 105 360 85 Z"
        fill="#8fb4a0"
        stroke="#6f9480"
        strokeWidth="2"
      />
      {/* Africa */}
      <path
        d="M370 165 Q415 155 445 180 Q465 205 450 240 Q435 275 410 290 Q385 285 375 250 Q360 205 370 165 Z"
        fill="#e2c46a"
        stroke="#c2a44e"
        strokeWidth="2"
      />
      {/* Asia */}
      <path
        d="M455 70 Q540 50 615 80 Q670 105 665 150 Q655 190 605 205 Q560 220 515 205 Q470 190 455 150 Q440 105 455 70 Z"
        fill="#9a8fb5"
        stroke="#7a6f95"
        strokeWidth="2"
      />
      {/* South Asia subcontinent */}
      <path
        d="M520 210 Q555 205 570 230 Q580 255 560 275 Q535 285 520 265 Q508 235 520 210 Z"
        fill="#e0a75e"
        stroke="#c08a44"
        strokeWidth="2"
      />
      {/* Australia */}
      <path
        d="M615 300 Q655 290 685 315 Q700 340 680 360 Q650 375 625 360 Q605 335 615 300 Z"
        fill="#d98a96"
        stroke="#b56e7a"
        strokeWidth="2"
      />
      {/* Island arc */}
      <path
        d="M480 320 Q520 315 555 330 Q590 345 585 365 Q560 380 520 370 Q485 355 480 320 Z"
        fill="#b98a5c"
        stroke="#986e42"
        strokeWidth="2"
      />
      {/* Coverage pins */}
      {[
        [130, 140],
        [155, 165],
        [185, 120],
        [205, 175],
        [110, 200],
        [405, 120],
        [430, 110],
        [560, 120],
        [590, 160],
        [540, 245],
        [420, 215],
        [650, 330],
        [230, 320],
        [640, 130],
      ].map(([x, y], i) => (
        <g key={i} transform={`translate(${x} ${y})`}>
          <path
            d="M0 -12 C6 -12 10 -8 10 -3 C10 3 0 12 0 12 C0 12 -10 3 -10 -3 C-10 -8 -6 -12 0 -12 Z"
            fill="#9a3412"
            stroke="#faf8f4"
            strokeWidth="1.5"
          />
          <circle cx="0" cy="-3" r="3" fill="#faf8f4" />
        </g>
      ))}
    </svg>
  );
}

export default function AboutCoverage() {
  return (
    <section
      className="w-full bg-[#faf8f4] py-16 md:py-20"
      aria-labelledby="about-coverage-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2
          id="about-coverage-heading"
          className="text-center font-[family-name:var(--font-display)] text-[32px] font-bold leading-[1.2] text-[#1a1917] md:text-[36px]"
        >
          Service Areas / Coverage
        </h2>

        <div className="mt-10 grid grid-cols-1 items-start gap-10 md:mt-14 md:grid-cols-[3fr_2fr] md:gap-14">
          <div className="overflow-hidden rounded-[12px] border border-[#dcd6ca] shadow-[0_2px_8px_rgba(26,25,23,0.06)]">
            <WorldMapIllustration />
          </div>

          <div>
            <h3 className="font-[family-name:var(--font-display)] text-[22px] font-bold leading-[1.3] text-[#1a1917]">
              Continuum Areas
            </h3>

            <ul className="mt-6 space-y-7">
              {REGIONS.map((region) => (
                <li key={region.title} className="flex items-start gap-3">
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    className="mt-1 h-5 w-5 shrink-0"
                    fill="none"
                    stroke={region.tone}
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 21s-7-6.1-7-11a7 7 0 1 1 14 0c0 4.9-7 11-7 11Z" />
                    <circle cx="12" cy="10" r="2.5" />
                  </svg>
                  <div>
                    <p className="font-[family-name:var(--font-display)] text-[16px] font-semibold leading-[1.3] text-[#1a1917]">
                      {region.title}
                    </p>
                    <p className="mt-1.5 text-[14px] leading-[1.6] text-[#4a4640]">
                      {region.description}
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
