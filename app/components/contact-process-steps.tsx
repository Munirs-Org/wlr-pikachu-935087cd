import { MessageSquareText, UserRoundSearch, HandCoins } from "lucide-react";

const steps = [
  {
    number: "1.",
    icon: MessageSquareText,
    title: "Submit a Question",
    copy: "Explore a memorial site's life and memory. Reach out to the Pikachu memorial team with your question or inquiry.",
  },
  {
    number: "2.",
    icon: UserRoundSearch,
    title: "Review by Our Team",
    copy: "Review your story with our team, who carefully consider it and share thoughtful insights into your story.",
  },
  {
    number: "3.",
    icon: HandCoins,
    title: "Receive Guidance",
    copy: "Receive contributions and guidance, along with clear communication about ways to support the memorial.",
  },
];

export default function ContactProcessSteps() {
  return (
    <section
      id="how-reaching-out-works"
      className="w-full py-16 md:py-20"
      style={{ backgroundColor: "#faf8f4" }}
    >
      <div className="mx-auto max-w-6xl px-6">
        <h2
          className="text-center font-bold text-[28px] md:text-[32px] leading-[1.2]"
          style={{ color: "#1a1917", fontFamily: "'Plus Jakarta Sans', sans-serif" }}
        >
          Process Highlights / Service Tiers
        </h2>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 items-start">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div key={step.number} className="flex items-start gap-4">
                <span
                  className="text-[18px] font-bold shrink-0 mt-5"
                  style={{ color: "#1a1917", fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                >
                  {step.number}
                </span>
                <div className="flex-1">
                  <Icon
                    className="w-8 h-8 mb-3"
                    strokeWidth={1.5}
                    style={{ color: "#9a3412" }}
                    aria-hidden="true"
                  />
                  <h3
                    className="text-[18px] font-semibold leading-[1.3] mb-2"
                    style={{ color: "#1a1917", fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                  >
                    {step.title}
                  </h3>
                  <p
                    className="text-[14px] leading-[1.5]"
                    style={{ color: "#5c564d" }}
                  >
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
