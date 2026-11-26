import { GeneratedImage_a53_home__other_1 } from "../../components/generated-assets";

const differentiators = [
  {
    title: "Unique Dedication for Pokemon Memorial Site",
    body: "Pikachu — Pokemon Memorial Site is dedicated to respectfully memorializing and honoring Pikachu.",
  },
  {
    title: "Community-Focused Approach",
    body: "Pikachu — Pokemon Memorial Site keeps the memorial experience community focused, meaningful, and celebrating our friendship.",
  },
  {
    title: "Meaningful Causes Supports",
    body: "Pikachu — Pokemon Memorial Site supports meaningful causes, reviews, and lasting community impact.",
  },
];

export default function HomeWhyChoose() {
  return (
    <section
      id="why-choose"
      className="w-full bg-[#faf8f4]"
      aria-labelledby="why-choose-heading"
    >
      <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 md:py-20">
        <h2
          id="why-choose-heading"
          className="font-[family-name:var(--font-display)] text-3xl font-bold leading-tight text-[#1a1917] md:text-[30px]"
        >
          Why Choose Pikachu for Pokemon Memorial Site
        </h2>

        <div className="mt-10 grid grid-cols-1 items-start gap-10 md:grid-cols-2 md:gap-12">
          <div className="overflow-hidden rounded-lg border border-[#dcd6ca]">
            <div className="aspect-[29/16] w-full">
              <GeneratedImage_a53_home__other_1 className="h-full w-full object-cover" />
            </div>
          </div>

          <div>
            <h3 className="font-[family-name:var(--font-display)] text-lg font-bold leading-snug text-[#1a1917]">
              Differentiators
            </h3>
            <ul className="mt-4 space-y-5">
              {differentiators.map((item) => (
                <li key={item.title} className="flex gap-3">
                  <span
                    aria-hidden="true"
                    className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#9a3412]"
                  />
                  <div>
                    <p className="text-sm font-bold leading-snug text-[#1a1917]">
                      {item.title}
                    </p>
                    <p className="mt-1 text-sm leading-relaxed text-[#1a1917]/80">
                      {item.body}
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
