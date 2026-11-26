import { MapPin, FileText, HandCoins, Users } from "lucide-react";

const steps = [
  {
    icon: MapPin,
    title: "1. Explore Memorials",
    description:
      "Explore memorial sites and memories by exploring Pikachu and memory sites at Pikachu.",
  },
  {
    icon: FileText,
    title: "2. Share your Story",
    description: "Share your story, memories, and experiences by sharing your story here.",
  },
  {
    icon: HandCoins,
    title: "3. Make a Contribution",
    description: "Make a contribution and donate or volunteer to the memorial.",
  },
  {
    icon: Users,
    title: "4. Impacting the Pokemon Community",
    description: "Impact and inspire about Pikachu and the Pokemon Community.",
  },
];

export default function HomeProcessHighlights() {
  return (
    <section className="w-full bg-[#faf8f4] py-16">
      <div className="mx-auto max-w-6xl px-6">
        <h2
          className="text-center text-[28px] md:text-[30px] font-bold text-[#1a1917]"
          style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", lineHeight: 1.2 }}
        >
          Process/Featured Highlights
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div key={step.title} className="flex flex-col items-start text-left">
                <Icon className="h-10 w-10 text-[#9a3412]" strokeWidth={1.5} />
                <h3
                  className="mt-4 text-[18px] font-bold text-[#1a1917]"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", lineHeight: 1.3 }}
                >
                  {step.title}
                </h3>
                <p className="mt-2 text-[14px] text-[#1a1917]/80" style={{ lineHeight: 1.5 }}>
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
