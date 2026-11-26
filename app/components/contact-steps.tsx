import { MessageSquareText, FileCheck2, HandHeart } from "lucide-react";

const steps = [
  {
    number: "1.",
    icon: MessageSquareText,
    title: "Submit a Question",
    copy: "Explore a memorial site's life and memory by our Pikachu and memory site Pikachu.",
  },
  {
    number: "2.",
    icon: FileCheck2,
    title: "Review by Our Team",
    copy: "Review your story team miners by and site aims to sharing insights into your story.",
  },
  {
    number: "3.",
    icon: HandHeart,
    title: "Receive Guidance",
    copy: "Receive contributions and receive guidance or contributions to the communication.",
  },
];

export default function ContactSteps() {
  return (
    <section className="w-full bg-[#faf8f4] py-16 px-6 md:px-10">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center font-[family-name:var(--font-display)] text-[28px] md:text-[32px] font-bold leading-[1.2] text-[#1a1917]">
          How Reaching Out Works
        </h2>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-8 items-start">
          {steps.map(({ number, icon: Icon, title, copy }) => (
            <div key={title} className="flex gap-3">
              <span className="font-[family-name:var(--font-display)] text-[20px] font-bold text-[#1a1917]">
                {number}
              </span>
              <div>
                <Icon
                  className="h-6 w-6 text-[#9a3412]"
                  strokeWidth={1.5}
                  aria-hidden="true"
                />
                <h3 className="mt-3 font-[family-name:var(--font-display)] text-[17px] font-semibold text-[#1a1917]">
                  {title}
                </h3>
                <p className="mt-2 text-[14px] leading-[1.6] text-[#1a1917]/80">
                  {copy}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
