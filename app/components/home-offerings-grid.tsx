import { Ribbon, Users, GraduationCap, HeartHandshake } from "lucide-react";

const items = [
  {
    icon: Ribbon,
    title: "Virtual memorials",
    description:
      "Celebrate ways to honor his memory with peaceful memorials for Pikachu's legacy.",
  },
  {
    icon: Users,
    title: "Share memories",
    description:
      "Share memories about Pikachu, upload photos and stories, or preserve treasured moments.",
  },
  {
    icon: GraduationCap,
    title: "Educational initiatives",
    description: "Explore resources that support education and learning initiatives.",
  },
  {
    icon: HeartHandshake,
    title: "Charitable causes",
    description:
      "Support the charitable causes connected to Pikachu's memorial and community.",
  },
];

export default function HomeOfferingsGrid() {
  return (
    <section className="w-full bg-[#faf8f4] py-14">
      <div className="mx-auto max-w-5xl px-6">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => (
            <div
              key={item.title}
              className="rounded-[10px] border border-[#dcd6ca] bg-[#faf8f4] p-6"
            >
              <item.icon className="h-7 w-7" strokeWidth={1.5} style={{ color: "#9a3412" }} aria-hidden="true" />
              <h3 className="mt-5 text-[18px] font-bold leading-[1.3] text-[#1a1917]">
                {item.title}
              </h3>
              <p className="mt-2 text-[14px] leading-[1.5] text-[#1a1917]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
