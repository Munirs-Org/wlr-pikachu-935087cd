import { Ribbon, Users, GraduationCap, HandHeart } from "lucide-react";

const items = [
  {
    icon: Ribbon,
    title: "Virtual memorials",
    desc: "Celebrate ways to honor his memory with peaceful memorials for Pikachu's legacy.",
  },
  {
    icon: Users,
    title: "Share memories",
    desc: "Share memories about Pikachu, upload photos and stories, or preserve treasured moments.",
  },
  {
    icon: GraduationCap,
    title: "Educational initiatives",
    desc: "Explore resources that support education and learning initiatives.",
  },
  {
    icon: HandHeart,
    title: "Charitable causes",
    desc: "Support the charitable causes connected to Pikachu's memorial and community.",
  },
];

export default function HomeFeatures() {
  return (
    <section className="w-full bg-[#faf8f4] py-12">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="rounded-[10px] border border-[#dcd6ca] bg-[#f2efe8] p-5"
            >
              <Icon className="h-7 w-7 text-[#9a3412]" strokeWidth={1.5} aria-hidden />
              <h3 className="mt-4 text-[18px] font-bold leading-[1.3] text-[#1a1917]">
                {title}
              </h3>
              <p className="mt-2 text-[14px] leading-[1.5] text-[#1a1917]/80">
                {desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
