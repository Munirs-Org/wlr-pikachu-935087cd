import { MessageSquareText, UserSearch, HandCoins } from "lucide-react";

const steps = [
  {
    num: "1",
    icon: MessageSquareText,
    title: "Submit a Question",
    copy: "Explore a memorial site's life and memory by our Pikachu and memory site Pikachu.",
  },
  {
    num: "2",
    icon: UserSearch,
    title: "Review by Our Team",
    copy: "Review your story team miners by and site aims to sharing insights into your story.",
  },
  {
    num: "3",
    icon: HandCoins,
    title: "Receive Guidance",
    copy: "Receive contributions and receive guidance or contributions to the communication.",
  },
];

export default function ContactSteps() {
  return (
    <section className="w-full bg-[#faf8f4] py-16 md:py-20">
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="text-center font-[family-name:var(--font-display)] text-3xl font-bold text-[#1a1917] md:text-[32px]">
          Process Highlights / Service Tiers
        </h2>
        <div className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-8">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div key={step.num} className="flex items-start gap-4">
                <span className="mt-1 text-xl font-bold text-[#9a3412] md:text-2xl">
                  {step.num}.
                </span>
                <div>
                  <Icon
                    className="mb-3 h-8 w-8 text-[#9a3412]"
                    strokeWidth={1.5}
                    aria-hidden
                  />
                  <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold text-[#1a1917]">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#1a1917]/80">
                    {step.copy}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
