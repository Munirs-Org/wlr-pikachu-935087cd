import { GeneratedImage_a53_home__other_1 } from "../../components/generated-assets";

const differentiators = [
  {
    title: "Unique Dedication for Pokemon Memorial Site",
    copy: "Pikachu — Pokemon Memorial Site is dedicated to respectfully memorializing and honoring Pikachu.",
  },
  {
    title: "Community-Focused Approach",
    copy: "Pikachu memorial experiences are community focused, meaningful, and celebrate friendship.",
  },
  {
    title: "Meaningful Causes Supports",
    copy: "Pikachu — Pokemon Memorial Site supports meaningful causes with honest reviews and community impact.",
  },
];

export default function HomeWhyChoose() {
  return (
    <section
      id="home__other-1"
      className="w-full bg-[#faf8f4] py-16 md:py-20"
      aria-labelledby="why-choose-heading"
    >
      <div className="mx-auto w-full max-w-6xl px-6">
        <h2
          id="why-choose-heading"
          className="font-[family-name:var(--font-display)] text-[26px] font-bold leading-[1.2] text-[#1a1917] md:text-[30px]"
        >
          Why Choose Pikachu for Pokemon Memorial Site
        </h2>

        <div className="mt-8 grid grid-cols-1 items-stretch gap-8 md:grid-cols-2 md:gap-10">
          <div className="overflow-hidden rounded-[8px]">
            <GeneratedImage_a53_home__other_1 className="h-full w-full object-cover" />
          </div>

          <div>
            <h3 className="font-[family-name:var(--font-display)] text-[18px] font-bold leading-[1.3] text-[#1a1917]">
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
                    <p className="text-[14px] font-bold leading-[1.4] text-[#1a1917]">
                      {item.title}
                    </p>
                    <p className="mt-1 text-[14px] font-normal leading-[1.5] text-[#1a1917]/80">
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
