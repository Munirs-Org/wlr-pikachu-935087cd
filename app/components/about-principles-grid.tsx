import { ShieldCheck, Users, HandCoins, HandHeart } from "lucide-react";

const principles = [
  {
    icon: ShieldCheck,
    title: "1. Integrity",
    copy: "Honoring truth and memory in virtual memorials and memory into Pikachu.",
  },
  {
    icon: Users,
    title: "2. Community",
    copy: "Bringing fans together and comaradas on together and memores.",
  },
  {
    icon: HandCoins,
    title: "3. Compassion",
    copy: "Supporting charitable causes, encountering communities and educational initiatives.",
  },
  {
    icon: HandHeart,
    title: "4. Inspiration",
    copy: "Fostering joy by fostering memories supportive earnest, action and community.",
  },
];

export default function AboutPrinciplesGrid() {
  return (
    <section className="w-full bg-[#faf8f4] py-16 px-6 md:px-10">
      <div className="mx-auto max-w-6xl">
        <h2
          className="font-bold text-[#1a1917] text-3xl md:text-[32px] leading-[1.2]"
          style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
        >
          Core Principles / Craft Standards Grid
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {principles.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="rounded-[12px] border border-[#dcd6ca] bg-[#f2efe8] p-6 shadow-[0_2px_8px_rgba(26,25,23,0.06)]"
              >
                <span className="text-[#9a3412]">
                  <Icon className="h-8 w-8" strokeWidth={1.5} aria-hidden="true" />
                </span>
                <h3
                  className="mt-5 font-semibold text-[#1a1917] text-[18px] leading-[1.3]"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                >
                  {item.title}
                </h3>
                <p className="mt-2 text-[15px] leading-[1.6] text-[#1a1917]/80">
                  {item.copy}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
