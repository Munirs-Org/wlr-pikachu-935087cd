import { Ribbon, Users, GraduationCap, HandHeart } from "lucide-react";

const offerings = [
  {
    icon: Ribbon,
    title: "Virtual memorials",
    copy: "Celebrate ways to honor Pikachu with many virtual memorials for his legacy.",
  },
  {
    icon: Users,
    title: "Share memories",
    copy: "Share memories about Pikachu, upload photos and stories, or preserve treasured moments.",
  },
  {
    icon: GraduationCap,
    title: "Educational initiatives",
    copy: "Explore resources that support education and learning initiatives.",
  },
  {
    icon: HandHeart,
    title: "Charitable causes",
    copy: "Support the charitable causes connected to Pikachu's memorial and community.",
  },
];

export default function HomeOfferingsGrid() {
  return (
    <section className="w-full bg-[#faf8f4] py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {offerings.map(({ icon: Icon, title, copy }) => (
            <div
              key={title}
              className="rounded-xl border border-[#dcd6ca] bg-[#f2efe8] p-6"
              style={{ borderRadius: "12px" }}
            >
              <Icon className="h-8 w-8 text-[#9a3412]" strokeWidth={1.5} aria-hidden="true" />
              <h3 className="mt-4 text-lg font-bold leading-tight text-[#1a1917]">
                {title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[#1a1917]/80">
                {copy}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
