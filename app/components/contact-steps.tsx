import { MessageCircleQuestion, UserSearch, HandCoins } from "lucide-react";

const steps = [
  {
    number: "1.",
    icon: MessageCircleQuestion,
    title: "Submit a Question",
    copy:
      "Explore a memorial site's life and memory by sharing your question with the Pikachu memorial team.",
  },
  {
    number: "2.",
    icon: UserSearch,
    title: "Review by Our Team",
    copy:
      "Our team reviews your story and aims to share thoughtful insights into your memory.",
  },
  {
    number: "3.",
    icon: HandCoins,
    title: "Receive Guidance",
    copy:
      "Receive guidance on contributions and keep the lines of communication open with our team.",
  },
];

export default function ContactSteps() {
  return (
    <section className="w-full bg-[#faf8f4] py-16 md:py-20">
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="text-center font-[family-name:var(--font-display)] text-3xl md:text-[32px] font-bold leading-[1.2] text-[#1a1917]">
          How Reaching Out Works
        </h2>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 items-start">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div key={step.title} className="flex flex-col items-start">
                <Icon
                  className="h-10 w-10 text-[#9a3412]"
                  strokeWidth={1.5}
                  aria-hidden="true"
                />
                <div className="mt-5 flex items-start gap-3">
                  <span className="font-[family-name:var(--font-display)] text-lg font-bold text-[#1a1917]">
                    {step.number}
                  </span>
                  <div>
                    <h3 className="font-[family-name:var(--font-display)] text-[17px] font-bold leading-[1.3] text-[#1a1917]">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm leading-[1.5] text-[#1a1917]/80">
                      {step.copy}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
