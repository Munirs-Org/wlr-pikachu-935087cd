import { MessageSquareText, FileSearch, HandCoins } from "lucide-react";

const steps = [
  {
    number: "1.",
    icon: MessageSquareText,
    title: "Submit a Question",
    copy: "Explore a memorial site's life and memory by our Pikachu and memory site Pikachu.",
  },
  {
    number: "2.",
    icon: FileSearch,
    title: "Review by Our Team",
    copy: "Review your story team miners by and site aims to sharing insights into your story.",
  },
  {
    number: "3.",
    icon: HandCoins,
    title: "Receive Guidance",
    copy: "Receive contributions and receive guidance or contributions to the communication.",
  },
];

export default function ContactSteps() {
  return (
    <section className="w-full bg-[#faf8f4] py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-center font-sans text-[32px] font-bold leading-[1.2] text-[#1a1917]">
          Process Highlights / Service Tiers
        </h2>
        <div className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-3">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div key={step.title} className="flex items-start gap-4">
                <span className="text-[20px] font-bold leading-none text-[#1a1917]">
                  {step.number}
                </span>
                <div>
                  <div className="mb-3 flex h-10 w-10 items-center justify-center">
                    <Icon className="h-7 w-7 text-[#9a3412]" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-[18px] font-semibold leading-[1.3] text-[#1a1917]">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-[14px] font-normal leading-[1.5] text-[#1a1917]">
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
