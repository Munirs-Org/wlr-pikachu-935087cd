import { ShieldCheck, Users, HandCoins, HandHeart } from "lucide-react";

const principles = [
  {
    icon: ShieldCheck,
    title: "1. Integrity",
    copy: "Honoring truth and memory through virtual memorials and memory into Pikachu.",
  },
  {
    icon: Users,
    title: "2. Community",
    copy: "Bringing fans together and camaradas on together and memores.",
  },
  {
    icon: HandCoins,
    title: "3. Compassion",
    copy: "Supporting charitable causes, enountering communities and educational initiatives.",
  },
  {
    icon: HandHeart,
    title: "4. Inspiration",
    copy: "Fostering joy by fostering memories supportive, earnest action and community.",
  },
];

export default function AboutPrinciples() {
  return (
    <section className="w-full bg-[#faf8f4] py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h2
          className="font-bold text-[#1a1917]"
          style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontSize: "32px",
            lineHeight: 1.2,
          }}
        >
          Core Principles / Craft Standards Grid
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {principles.map((p) => {
            const Icon = p.icon;
            return (
              <div
                key={p.title}
                className="rounded-xl border border-[#dcd6ca] bg-white p-6 shadow-[0_2px_8px_rgba(26,25,23,0.06)]"
              >
                <Icon
                  className="h-9 w-9 text-[#9a3412]"
                  strokeWidth={1.5}
                  aria-hidden="true"
                />
                <h3
                  className="mt-5 font-bold text-[#1a1917]"
                  style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontSize: "18px",
                    lineHeight: 1.3,
                  }}
                >
                  {p.title}
                </h3>
                <p
                  className="mt-2 text-[#1a1917]"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "15px",
                    lineHeight: 1.6,
                  }}
                >
                  {p.copy}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
