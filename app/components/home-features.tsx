import { Ribbon, Users, GraduationCap, HandHeart } from "lucide-react";

const features = [
  {
    icon: Ribbon,
    title: "Virtual memorials",
    description:
      "Celebrate ways to honor his memory with peaceful virtual memorials for Pikachu's legacy.",
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
    description:
      "Explore resources that support education and learning initiatives.",
  },
  {
    icon: HandHeart,
    title: "Charitable causes",
    description:
      "Support the charitable causes connected to Pikachu's memorial and community.",
  },
];

export default function HomeFeatures() {
  return (
    <section className="w-full bg-[#faf8f4] py-14">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="rounded-[10px] border border-[#dcd6ca] bg-[#faf8f4] p-6"
              >
                <Icon className="h-7 w-7 text-[#9a3412]" strokeWidth={1.5} />
                <h3 className="mt-4 font-display text-[18px] font-bold leading-[1.3] text-[#1a1917]">
                  {feature.title}
                </h3>
                <p className="mt-2 text-[14px] leading-[1.5] text-[#1a1917]/80">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
