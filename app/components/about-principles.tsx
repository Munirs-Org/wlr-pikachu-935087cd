import { ShieldCheck, Users, HandCoins, HandHeart } from "lucide-react";

const principles = [
  {
    title: "1. Integrity",
    copy: "Honoring truth and memory in virtual memorials and memory into Pikachu.",
    Icon: ShieldCheck,
  },
  {
    title: "2. Community",
    copy: "Bringing fans together and comrades on together and memories.",
    Icon: Users,
  },
  {
    title: "3. Compassion",
    copy: "Supporting charitable causes, encountering communities and educational initiatives.",
    Icon: HandCoins,
  },
  {
    title: "4. Inspiration",
    copy: "Fostering joy by fostering memories supportive earnest action and community.",
    Icon: HandHeart,
  },
];

export default function AboutPrinciples() {
  return (
    <section className="w-full bg-[#faf8f4] py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-left font-display text-3xl font-bold leading-tight text-[#1a1917] md:text-[32px]">
          Core Principles / Craft Standards Grid
        </h2>
        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {principles.map(({ title, copy, Icon }) => (
            <div
              key={title}
              className="rounded-lg border border-[#dcd6ca] bg-[#f2efe8] p-6 shadow-[0_2px_8px_rgba(26,25,23,0.06)]"
            >
              <Icon className="h-7 w-7 text-[#9a3412]" strokeWidth={1.75} aria-hidden="true" />
              <h3 className="mt-4 font-display text-lg font-semibold leading-snug text-[#1a1917]">
                {title}
              </h3>
              <p className="mt-2 text-[15px] leading-relaxed text-[#1a1917]/80">{copy}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
