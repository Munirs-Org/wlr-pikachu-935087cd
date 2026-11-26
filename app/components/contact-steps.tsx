import { MessageSquareText, Users, HandCoins } from "lucide-react";

const steps = [
  {
    number: "1.",
    title: "Submit a Question",
    copy: "Explore a memorial site's life and memory by our Pikachu memorial site. Submit your question to begin.",
    icon: MessageSquareText,
  },
  {
    number: "2.",
    title: "Review by Our Team",
    copy: "Review your story with our team, and site aims to sharing insights into your own story.",
    icon: Users,
  },
  {
    number: "3.",
    title: "Receive Guidance",
    copy: "Receive contributions and receive guidance or contributions to the communication.",
    icon: HandCoins,
  },
];

export default function ContactSteps() {
  return (
    <section className="w-full bg-[#faf8f4] py-16">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-center font-[family-name:var(--font-display)] text-3xl font-bold text-[#1a1917]">
          How Reaching Out Works
        </h2>
        <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-3">
          {steps.map((step) => (
            <div key={step.number} className="flex flex-col">
              <step.icon
                className="h-10 w-10 self-center text-[#9a3412]"
                strokeWidth={1.5}
                aria-hidden="true"
              />
              <div className="mt-4 flex items-start gap-3">
                <span className="text-xl font-bold text-[#1a1917]">
                  {step.number}
                </span>
                <div>
                  <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold text-[#1a1917]">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#1a1917]/70">
                    {step.copy}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
