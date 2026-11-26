import { Users, MessagesSquare, UserCheck, HeartHandshake } from "lucide-react";

const cards = [
  {
    icon: Users,
    title: "Support for Families",
    copy: "Thoughtful ways to honor Pikachu's memory and support families who reach out.",
  },
  {
    icon: MessagesSquare,
    title: "Guidance & Advice",
    copy: "Share stories, offer guidance, and help keep Pikachu's memories alive.",
  },
  {
    icon: UserCheck,
    title: "Personalized Assistance",
    copy: "Encouraging personalized resources and educational initiatives.",
  },
  {
    icon: HeartHandshake,
    title: "A Community of Care",
    copy: "Supported by a caring community that celebrates Pikachu's life and legacy.",
  },
];

export default function ContactWhyChoose() {
  return (
    <section className="w-full bg-[#faf8f4] py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="font-[var(--font-display)] text-[28px] md:text-[32px] font-bold leading-[1.2] text-[#1a1917]">
          Why Choose Pikachu for Contact Pikachu
        </h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-5 max-md:max-w-md">
          {cards.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.title}
                className="rounded-[10px] border border-[#dcd6ca] bg-white p-6 shadow-[0_1px_3px_rgba(26,25,23,0.05)]"
              >
                <Icon className="h-7 w-7 text-[#9a3412]" strokeWidth={1.75} />
                <h3 className="mt-4 text-[17px] font-semibold leading-[1.3] text-[#1a1917]">
                  {card.title}
                </h3>
                <p className="mt-2 text-[14px] leading-[1.5] text-[#1a1917]/75">
                  {card.copy}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
