import { Users, MessagesSquare, UserCheck, HandHeart } from "lucide-react";

const cards = [
  {
    icon: Users,
    title: "Support for Families",
    copy: "Celebrate ways to honor and warmly remember families for Pikachu.",
  },
  {
    icon: MessagesSquare,
    title: "Guidance & Advice",
    copy: "Share memories about Pikachu, virtual memorials, and remembrance.",
  },
  {
    icon: UserCheck,
    title: "Personalized Assistance",
    copy: "Encouraged resources, memorials, celebrations, educational initiatives.",
  },
  {
    icon: HandHeart,
    title: "A Community of Care",
    copy: "Supported by the memorial community that honors Pikachu.",
  },
];

export default function ContactFeatures() {
  return (
    <section className="w-full bg-[#faf8f4] py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h2
          className="text-[28px] md:text-[32px] font-bold leading-[1.2] text-[#1a1917]"
          style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
        >
          Why Choose Pikachu for Contact Pikachu
        </h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 items-start">
          {cards.map(({ icon: Icon, title, copy }) => (
            <div
              key={title}
              className="rounded-[10px] border border-[#dcd6ca] bg-[#f2efe8] p-5 shadow-[0_1px_3px_rgba(26,25,23,0.05)]"
            >
              <Icon className="h-7 w-7 text-[#9a3412]" strokeWidth={1.75} aria-hidden="true" />
              <h3
                className="mt-4 text-[18px] font-semibold leading-[1.3] text-[#1a1917]"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                {title}
              </h3>
              <p className="mt-2 text-[14px] leading-[1.5] text-[#1a1917]/80">
                {copy}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
