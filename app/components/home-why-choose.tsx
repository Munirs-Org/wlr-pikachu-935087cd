export default function HomeWhyChoose() {
  const points = [
    {
      title: "Unique Dedication for Pokemon Memorial Site",
      body: "A Pokemon memorial site created to respectfully memorialize and honor Pikachu.",
    },
    {
      title: "Community-Focused Approach",
      body: "The memorial experience is community-focused, meaningful, and celebrates friendship.",
    },
    {
      title: "Meaningful Causes Support",
      body: "The Pikachu memorial site supports meaningful causes, reviews, and community impact.",
    },
  ];

  return (
    <section className="w-full bg-[#faf8f4] py-16 md:py-20">
      <div className="mx-auto w-full max-w-6xl px-6">
        <h2
          className="text-[#1a1917]"
          style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontSize: "30px",
            fontWeight: 700,
            lineHeight: 1.2,
          }}
        >
          Why Choose Pikachu for Pokemon Memorial Site
        </h2>

        <div className="mt-10 grid grid-cols-1 items-start gap-10 md:grid-cols-2">
          {/* Photo: family gathered beside Pikachu at a memorial garden (product role) */}
          <div className="overflow-hidden rounded-lg">
            <img
              src="/assets/home-why-choose.jpg"
              alt="Family gathered beside Pikachu at a memorial garden"
              className="h-64 w-full object-cover md:h-72"
            />
          </div>

          {/* Differentiators list */}
          <div>
            <h3
              className="text-[#1a1917]"
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: "18px",
                fontWeight: 700,
                lineHeight: 1.3,
              }}
            >
              Differentiators
            </h3>
            <ul className="mt-4 space-y-5">
              {points.map((p) => (
                <li key={p.title} className="flex gap-3">
                  <span
                    aria-hidden="true"
                    className="mt-[7px] h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#9a3412]"
                  />
                  <div>
                    <p className="text-[14px] font-bold leading-[1.4] text-[#1a1917]">
                      {p.title}
                    </p>
                    <p className="mt-1 text-[14px] leading-[1.5] text-[#1a1917]/80">
                      {p.body}
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
