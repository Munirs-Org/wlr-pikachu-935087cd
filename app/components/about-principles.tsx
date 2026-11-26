import { ShieldCheck, Users, HandCoins, HeartHandshake } from "lucide-react";

const principles = [
  {
    icon: ShieldCheck,
    title: "1. Integrity",
    body: "Honoring truth and memory in virtual memorials, keeping every memory faithful to Pikachu.",
  },
  {
    icon: Users,
    title: "2. Community",
    body: "Bringing fans and comrades together, united in shared memories of Pikachu.",
  },
  {
    icon: HandCoins,
    title: "3. Compassion",
    body: "Supporting charitable causes, encountering communities and educational initiatives.",
  },
  {
    icon: HeartHandshake,
    title: "4. Inspiration",
    body: "Fostering joy by fostering memories, supportive earnest action and community.",
  },
];

export default function AboutPrinciples() {
  return (
    <section className="w-full bg-[#faf8f4] py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="font-bold text-[#1a1917] text-3xl md:text-[32px] leading-tight tracking-tight">
          Core Principles / Craft Standards Grid
        </h2>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {principles.map((p) => {
            const Icon = p.icon;
            return (
              <div
                key={p.title}
                className="rounded-lg border border-[#dcd6ca] bg-[#f2efe8] p-6 shadow-[0_2px_8px_rgba(26,25,23,0.06)]"
              >
                <Icon className="h-8 w-8 text-[#9a3412]" strokeWidth={1.75} aria-hidden="true" />
                <h3 className="mt-4 font-bold text-[#1a1917] text-lg leading-snug">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#1a1917]/80">{p.body}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
