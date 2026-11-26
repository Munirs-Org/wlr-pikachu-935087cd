import { Map, MessageSquare, HandCoins, Users } from "lucide-react";

const steps = [
  {
    n: "1.",
    title: "Explore Memorials",
    copy: "Explore memorial sites and memories by exploring Pikachu and memory sites at Pikachu.",
    icon: Map,
  },
  {
    n: "2.",
    title: "Share your Story",
    copy: "Share your story, memories, and experiences by sharing your story here.",
    icon: MessageSquare,
  },
  {
    n: "3.",
    title: "Make a Contribution",
    copy: "Make a contribution and donate or volunteer to the memorial.",
    icon: HandCoins,
  },
  {
    n: "4.",
    title: "Impacting the Pokemon Community",
    copy: "Impact and inspire about Pikachu and the Pokemon Community.",
    icon: Users,
  },
];

export default function HomeSteps() {
  return (
    <section className="w-full bg-[#faf8f4] py-16">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-center font-bold text-[30px] leading-[1.2] text-[#1a1917]">
          Process/Featured Highlights
        </h2>
        <div className="mt-10 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div key={step.n} className="flex flex-col items-start">
                <Icon className="h-10 w-10 text-[#9a3412]" strokeWidth={1.5} aria-hidden="true" />
                <p className="mt-4 flex items-start gap-2">
                  <span className="font-bold text-[#1a1917]">{step.n}</span>
                  <span className="font-bold text-[18px] leading-[1.3] text-[#1a1917]">
                    {step.title}
                  </span>
                </p>
                <p className="mt-2 text-[14px] leading-[1.5] text-[#1a1917]">
                  {step.copy}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
