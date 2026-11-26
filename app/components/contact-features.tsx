import { Users, UserRound, HeartHandshake, Heart } from "lucide-react";

const features = [
  {
    icon: Users,
    title: "Support for Families",
    copy: "Celebrate ways to honor and warmly remember families for Pikachu.",
  },
  {
    icon: UserRound,
    title: "Guidance & Advice",
    copy: "Share memories about Pikachu, virtual memorials, and remembrance.",
  },
  {
    icon: HeartHandshake,
    title: "Personalized Assistance",
    copy: "Encouraged resources, memorials, celebrations, educational initiatives.",
  },
  {
    icon: Heart,
    title: "A Community of Care",
    copy: "Supported by the memorial community that honors Pikachu.",
  },
];

export default function ContactFeatures() {
  return (
    <section className="w-full bg-[#faf8f4] py-16 px-6 md:px-10">
      <div className="mx-auto max-w-6xl">
        <h2 className="font-[family-name:var(--font-display)] text-[28px] md:text-[32px] font-bold leading-[1.2] text-[#1a1917]">
          Why Choose Pikachu for Contact Pikachu
        </h2>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-start">
          {features.map(({ icon: Icon, title, copy }) => (
            <div
              key={title}
              className="rounded-[10px] border border-[#dcd6ca] bg-[#f2efe8] p-5 shadow-[0_1px_3px_rgba(26,25,23,0.05)]"
            >
              <Icon className="h-6 w-6 text-[#9a3412]" strokeWidth={1.5} aria-hidden="true" />
              <h3 className="mt-4 font-[family-name:var(--font-display)] text-[18px] font-semibold leading-[1.3] text-[#1a1917]">
                {title}
              </h3>
              <p className="mt-2 text-[14px] leading-[1.5] text-[#1a1917]/80">{copy}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
