import { ShieldCheck, Users, HandCoins, HeartHandshake } from "lucide-react";

const principles = [
  {
    icon: ShieldCheck,
    title: "1. Integrity",
    description:
      "Honoring truth and memory in virtual memorials and memory into Pikachu.",
  },
  {
    icon: Users,
    title: "2. Community",
    description:
      "Bringing fans together and comrades together and memories.",
  },
  {
    icon: HandCoins,
    title: "3. Compassion",
    description:
      "Supporting charitable causes, encountering communities and educational initiatives.",
  },
  {
    icon: HeartHandshake,
    title: "4. Inspiration",
    description:
      "Fostering joy by fostering memories, supportive earnest action and community.",
  },
];

export default function AboutPrinciplesGrid() {
  return (
    <section className="w-full bg-[#faf8f4] py-16 px-6">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-left font-bold text-[#1a1917] text-[28px] md:text-[32px] leading-[1.2] font-[family-name:var(--font-display,ui-sans-serif)] mb-10">
          Core Principles / Craft Standards Grid
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
          {principles.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="rounded-[10px] border border-[#dcd6ca] bg-[#faf8f4] p-6"
            >
              <Icon className="h-8 w-8 text-[#9a3412]" strokeWidth={1.75} aria-hidden="true" />
              <h3 className="mt-4 text-[18px] font-semibold leading-[1.3] text-[#1a1917] font-[family-name:var(--font-display,ui-sans-serif)]">
                {title}
              </h3>
              <p className="mt-2 text-[14px] leading-[1.6] text-[#1a1917]/80 font-[family-name:var(--font-body,ui-sans-serif)]">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
