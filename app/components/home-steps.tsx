import { Map, MessagesSquare, HandCoins, Users } from "lucide-react";

const steps = [
  {
    icon: Map,
    title: "Explore Memorials",
    copy: "Explore Pikachu's life and memory by exploring Pikachu memorial sites and memories at Pikachu.",
  },
  {
    icon: MessagesSquare,
    title: "Share your Story",
    copy: "Share your story, memories, and experiences by sharing your story here.",
  },
  {
    icon: HandCoins,
    title: "Make a Contribution",
    copy: "Make a contribution and donate or volunteer to the memorial.",
  },
  {
    icon: Users,
    title: "Impacting the Pokemon Community",
    copy: "Impact and inspire the Pokemon Community about Pikachu.",
  },
];

export default function HomeSteps() {
  return (
    <section className="w-full bg-[#faf8f4] py-16 px-6">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-center text-3xl font-bold text-[#1a1917]">
          Process/Featured Highlights
        </h2>
        <div className="mt-10 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div key={step.title} className="flex flex-col items-start">
                <span
                  className="text-[#9a3412]"
                  style={{ width: 40, height: 40 }}
                  aria-hidden="true"
                >
                  <Icon strokeWidth={1.5} className="h-10 w-10" />
                </span>
                <h3 className="mt-4 text-lg font-bold leading-snug text-[#1a1917]">
                  <span className="text-[#9a3412]">
                    {steps.indexOf(step) + 1}.
                  </span>{" "}
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[#1a1917]/80">
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
