import { HeartHandshake, MessagesSquare, UserCheck, Heart } from "lucide-react";

const items = [
  {
    icon: MessagesSquare,
    title: "Support for Families",
    copy: "Celebrate ways to honor and warmly include virtual families for Pikachu.",
  },
  {
    icon: HeartHandshake,
    title: "Guidance & Advice",
    copy: "Share memories about Pikachu, visit your own memorials, and add tributes.",
  },
  {
    icon: UserCheck,
    title: "Personalized Assistance",
    copy: "Encountering resource materials, celebrations, and educational initiatives.",
  },
  {
    icon: Heart,
    title: "A Community of Care",
    copy: "Supported by the memorial community, celebrating and remembering Pikachu.",
  },
];

export default function ContactWhyChoose() {
  return (
    <section className="w-full bg-[#faf8f4] py-16">
      <div className="mx-auto w-full max-w-6xl px-6">
        <h2
          className="text-[#1a1917]"
          style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontSize: "32px",
            fontWeight: 700,
            lineHeight: 1.2,
          }}
        >
          Why Choose Pikachu for Contact Pikachu
        </h2>
        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map(({ icon: Icon, title, copy }) => (
            <div
              key={title}
              className="rounded-xl border border-[#dcd6ca] bg-[#f2efe8] p-5 shadow-[0_1px_3px_rgba(26,25,23,0.05)]"
            >
              <Icon className="h-7 w-7 text-[#9a3412]" strokeWidth={1.75} aria-hidden="true" />
              <h3
                className="mt-4 text-[#1a1917]"
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontSize: "18px",
                  fontWeight: 600,
                  lineHeight: 1.3,
                }}
              >
                {title}
              </h3>
              <p
                className="mt-2 text-[#1a1917]/80"
                style={{ fontFamily: "Inter, sans-serif", fontSize: "14px", lineHeight: 1.5 }}
              >
                {copy}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
