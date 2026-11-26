import { Map, MessageSquareText, HandCoins, Users } from "lucide-react";

const steps = [
  {
    number: "1.",
    title: "Explore Memorials",
    copy: "Explore memorial sites and memories by exploring Pikachu and memory sites at Pikachu.",
    icon: Map,
  },
  {
    number: "2.",
    title: "Share your Story",
    copy: "Share your story, memories, and experiences by sharing your story here.",
    icon: MessageSquareText,
  },
  {
    number: "3.",
    title: "Make a Contribution",
    copy: "Make a contribution and donate or volunteer to the memorial.",
    icon: HandCoins,
  },
  {
    number: "4.",
    title: "Impacting the Pokemon Community",
    copy: "Impact and inspire about Pikachu and the Pokemon Community.",
    icon: Users,
  },
];

export default function HomeProcessSteps() {
  return (
    <section className="w-full bg-[#faf8f4] py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        <h2 className="text-center font-bold text-[#1a1917] text-3xl md:text-[30px] leading-tight" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
          Process/Featured Highlights
        </h2>
        <div className="mt-10 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div key={step.number} className="flex flex-col">
                <div className="mb-4 text-[#9a3412]">
                  <Icon className="h-9 w-9" strokeWidth={1.5} aria-hidden="true" />
                </div>
                <h3 className="flex items-start gap-2 font-bold text-[#1a1917] text-[17px] leading-snug" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                  <span className="text-[#1a1917]">{step.number}</span>
                  <span>{step.title}</span>
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[#1a1917]/70">{step.copy}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
