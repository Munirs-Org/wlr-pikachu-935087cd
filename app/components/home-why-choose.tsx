const differentiators = [
  {
    title: "Unique Dedication for Pokemon Memorial Site",
    body: "Pikachu — a Pokemon memorial site selected to respectfully memorialize honor to Pikachu.",
  },
  {
    title: "Community-Focused Approach",
    body: "Pikachu memorial site's approach was community focused, meaningful and celebrating our male friendship.",
  },
  {
    title: "Meaningful causes Supports",
    body: "Pikachu — Pokemon Memorial Site causes supporting by meaningful causes; hasininity meaningfulite reviews and causes.",
  },
];

export default function HomeWhyChoose() {
  return (
    <section
      id="home__other-1"
      className="w-full bg-[#faf8f4] py-16"
      aria-labelledby="why-choose-heading"
    >
      <div className="mx-auto max-w-6xl px-6">
        <h2
          id="why-choose-heading"
          className="font-[family-name:var(--font-display)] text-3xl font-bold leading-tight text-[#1a1917] md:text-[30px]"
        >
          Why Choose Pikachu for Pokemon Memorial Site
        </h2>

        <div className="mt-8 grid grid-cols-1 items-start gap-10 md:grid-cols-2">
          <div className="overflow-hidden rounded-lg border border-[#dcd6ca]">
            <div className="aspect-[4/3] h-full w-full">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <GeneratedImageSlot />
            </div>
          </div>

          <div>
            <h3 className="font-[family-name:var(--font-display)] text-lg font-bold text-[#1a1917]">
              Differentiators
            </h3>
            <ul className="mt-4 space-y-5 list-disc pl-5">
              {differentiators.map((item) => (
                <li key={item.title} className="text-sm leading-relaxed text-[#1a1917]">
                  <span className="block font-semibold">{item.title}</span>
                  <span className="mt-1 block text-[#1a1917]/80">{item.body}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

import { GeneratedImage_a53_home__other_1 } from "../../components/generated-assets";

function GeneratedImageSlot() {
  return (
    <GeneratedImage_a53_home__other_1 className="h-full w-full object-cover" />
  );
}
