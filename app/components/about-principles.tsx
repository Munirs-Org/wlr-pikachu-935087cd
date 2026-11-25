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
    copy: "Bringing fans together and comrades on together and memories.",
  },
  {
    icon: HandCoins,
    title: "3. Compassion",
    copy: "Supporting charitable causes, encountering communities and educational initiatives.",
  },
  {
    icon: HandHeart,
    title: "4. Inspiration",
    copy: "Fostering joy by fostering memories, supportive earnest action and community.",
  },
];

export default function AboutPrinciples() {
  return (
    <section className="w-full bg-[#faf8f4] py-16 px-6">
      <div className="mx-auto max-w-6xl">
        <h2 className="font-[family-name:var(--font-display)] text-[32px] font-bold leading-[1.2] text-[#1a1917]">
          Core Principles / Craft Standards Grid
        </h2>
        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {principles.map(({ icon: Icon, title, copy }) => (
            <div
              key={title}
              className="rounded-lg border border-[#dcd6ca] bg-[#faf8f4] p-5 shadow-[0_2px_8px_rgba(26,25,23,0.06)]"
            >
              <Icon className="h-7 w-7 text-[#9a3412]" strokeWidth={1.75} aria-hidden="true" />
              <h3 className="mt-4 font-[family-name:var(--font-display)] text-[18px] font-semibold leading-[1.3] text-[#1a1917]">
                {title}
              </h3>
              <p className="mt-2 text-[15px] font-normal leading-[1.6] text-[#1a1917]/80">
                {copy}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
