import { MessageCircleQuestion, FileSearch, HandCoins } from "lucide-react";

const steps = [
  {
    icon: MessageCircleQuestion,
    title: "1. Submit a Question",
    copy: "Explore a memorial site's life and memory by reaching out to the Pikachu memorial site team with your question.",
  },
  {
    icon: FileSearch,
    title: "2. Review by Our Team",
    copy: "Our team carefully reviews your story and aims to share thoughtful insights into your memorial submission.",
  },
  {
    icon: HandCoins,
    title: "3. Receive Guidance",
    copy: "Receive clear guidance on contributions and next steps for keeping Pikachu's memory alive.",
  },
];

export default function ContactProcessSteps() {
  return (
    <section className="w-full bg-[#faf8f4] py-16 px-6">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-center text-3xl font-bold text-[#1a1917] leading-tight font-[family-name:var(--font-display)]" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
          Process Highlights / Service Tiers
        </h2>
        <div className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-3">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div key={step.title} className="flex gap-3 items-start">
                <span className="text-xl font-bold text-[#1a1917] leading-none pt-1" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                  {step.title.charAt(0)}
                </span>
                <div>
                  <Icon className="w-8 h-8 text-[#9a3412]" strokeWidth={1.5} aria-hidden="true" />
                  <h3 className="mt-3 text-base font-bold text-[#1a1917]" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
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
