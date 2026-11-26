import { HeartHandshake, MessagesSquare, UserCheck, Heart } from "lucide-react";

const cards = [
  {
    icon: HeartHandshake,
    title: "Support for Families",
    body: "Heartfelt ways to honor and remember Pikachu for families and friends.",
  },
  {
    icon: MessagesSquare,
    title: "Guidance & Advice",
    body: "Share memories about Pikachu, visit your own memorials, and connect with others.",
  },
  {
    icon: UserCheck,
    title: "Personalized Assistance",
    body: "Encouraging resources, support, and educational initiatives.",
  },
  {
    icon: Heart,
    title: "A Community of Care",
    body: "Supported by the community, celebrated by all who remember Pikachu.",
  },
];

export default function ContactWhyCards() {
  return (
    <section className="w-full bg-[#faf8f4] py-16">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold text-[#1a1917]">
          Why Choose Pikachu for Contact Pikachu
        </h2>
        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((card) => (
            <div
              key={card.title}
              className="rounded-xl border border-[#dcd6ca] bg-white p-6 shadow-[0_1px_3px_rgba(26,25,23,0.05)]"
            >
              <card.icon className="h-8 w-8 text-[#9a3412]" strokeWidth={1.5} />
              <h3 className="mt-4 font-[family-name:var(--font-display)] text-lg font-semibold leading-snug text-[#1a1917]">
                {card.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[#1a1917]/70">
                {card.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
