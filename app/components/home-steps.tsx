import { Map, UserRoundPlus, HandCoins, Users } from "lucide-react";

const steps = [
  {
    icon: Map,
    title: "1. Explore Memorials",
    copy: "Explore memorial sites and memories by exploring Pikachu and memory sites at Pikachu.",
  },
  {
    icon: UserRoundPlus,
    title: "2. Share your Story",
    copy: "Share your story, memories, and experiences by sharing your story here.",
  },
  {
    icon: HandCoins,
    title: "3. Make a Contribution",
    copy: "Make a contribution and donate or volunteer to the memorial.",
  },
  {
    icon: Users,
    title: "4. Impacting the Pokemon Community",
    copy: "Impact and inspire about Pikachu and the Pokemon Community.",
  },
];

export default function HomeSteps() {
  return (
    <section className="w-full bg-[#faf8f4] py-14">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-center text-3xl font-bold text-[#1a1917]">
          Process/Featured Highlights
        </h2>
        <div className="mt-10 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div key={step.title}>
                <Icon className="h-8 w-8 text-[#9a3412]" strokeWidth={1.5} aria-hidden="true" />
                <h3 className="mt-4 text-lg font-bold leading-snug text-[#1a1917]">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[#1a1917]/70">
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
