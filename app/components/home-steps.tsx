import { Map, MessagesSquare, HandCoins, Users } from "lucide-react";

const steps = [
  {
    n: "1.",
    title: "Explore Memorials",
    desc: "Explore memorial sites and memories by exploring Pikachu and memory sites at Pikachu.",
    Icon: Map,
  },
  {
    n: "2.",
    title: "Share your Story",
    desc: "Share your story, memories, and experiences by sharing your story here.",
    Icon: MessagesSquare,
  },
  {
    n: "3.",
    title: "Make a Contribution",
    desc: "Make a contribution and donate or volunteer to the memorial.",
    Icon: HandCoins,
  },
  {
    n: "4.",
    title: "Impacting the Pokemon Community",
    desc: "Impact and inspire about Pikachu and the Pokemon Community.",
    Icon: Users,
  },
];

export default function HomeSteps() {
  return (
    <section className="w-full bg-[#faf8f4] py-16 px-6">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-center font-bold text-[30px] leading-[1.2] text-[#1a1917]">
          Process/Featured Highlights
        </h2>
        <div className="mt-10 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map(({ n, title, desc, Icon }) => (
            <div key={n} className="flex items-start gap-3">
              <span className="text-[20px] font-bold leading-none text-[#1a1917] pt-1">
                {n}
              </span>
              <div className="flex-1">
                <Icon
                  className="h-9 w-9 text-[#9a3412]"
                  strokeWidth={1.5}
                  aria-hidden="true"
                />
                <h3 className="mt-3 font-bold text-[18px] leading-[1.3] text-[#1a1917]">
                  {title}
                </h3>
                <p className="mt-2 text-[14px] leading-[1.5] text-[#1a1917]/70">
                  {desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
