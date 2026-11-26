import { GeneratedImage_a53_home__hero_1 } from "../../components/generated-assets";

export default function HomeWhyChoose() {
  const items = [
    {
      title: "Unique Dedication for Pokemon Memorial Site",
      description:
        "Pikachu — Pokemon Memorial Site exists to respectfully memorialize and honor Pikachu.",
    },
    {
      title: "Community-Focused Approach",
      description:
        "The memorial experience is community focused, meaningful, and celebrates our friendship.",
    },
    {
      title: "Meaningful Causes Supports",
      description:
        "Pikachu — Pokemon Memorial Site supports meaningful causes with lasting community impact.",
    },
  ];

  return (
    <section
      id="home-other-1"
      className="w-full bg-[#faf8f4] py-16 md:py-20"
      aria-labelledby="home-why-choose-heading"
    >
      <div className="mx-auto w-full max-w-6xl px-6">
        <h2
          id="home-why-choose-heading"
          className="font-bold text-[#1a1917] text-2xl md:text-[30px] leading-[1.2]"
        >
          Why Choose Pikachu for Pokemon Memorial Site
        </h2>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-start">
          <div className="overflow-hidden rounded-[12px] border border-[#dcd6ca]">
            <div className="h-72 w-full md:h-80">
              <GeneratedImage_a53_home__hero_1 />
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold text-[#1a1917]">
              Differentiators
            </h3>
            <ul className="mt-5 space-y-5">
              {items.map((item) => (
                <li key={item.title} className="flex gap-3">
                  <span
                    aria-hidden="true"
                    className="mt-[9px] h-1.5 w-1.5 flex-none rounded-full bg-[#1a1917]"
                  />
                  <div>
                    <p className="text-sm font-bold text-[#1a1917]">
                      {item.title}
                    </p>
                    <p className="mt-1 text-sm leading-relaxed text-[#1a1917]/75">
                      {item.description}
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
