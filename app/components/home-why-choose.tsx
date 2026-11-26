import GeneratedImage_a53_home__other_1 from "../../components/generated-assets";

export default function HomeWhyChoose() {
  const items = [
    {
      title: "Unique Dedication for Pokemon Memorial Site",
      body: "A Pokemon memorial site selected to respectfully memorialize honor to Pikachu.",
    },
    {
      title: "Community-Focused Approach",
      body: "The memorial experience is community-focused, meaningful, and celebrates our male friendship.",
    },
    {
      title: "Meaningful causes Supports",
      body: "The Pikachu Memorial Site supports causes with meaningful reviews and community impact.",
    },
  ];

  return (
    <section id="home-other-1" className="w-full bg-[#faf8f4] py-16">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-[30px] font-bold leading-tight text-[#1a1917]">
          Why Choose Pikachu for Pokemon Memorial Site
        </h2>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          {/* Photo — left column */}
          <div className="overflow-hidden rounded-lg" style={{ aspectRatio: "29 / 16" }}>
            <GeneratedImage_a53_home__other_1 className="h-full w-full object-cover" />
          </div>

          {/* Differentiators — right column */}
          <div>
            <h3 className="font-[family-name:var(--font-display)] text-lg font-bold text-[#1a1917]">
              Differentiators
            </h3>
            <ul className="mt-5 space-y-5 list-disc pl-5 marker:text-[#9a3412]">
              {items.map((item) => (
                <li key={item.title} className="text-sm leading-relaxed text-[#1a1917]">
                  <span className="font-bold">{item.title}</span>
                  <span className="block mt-1 font-normal">{item.body}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
