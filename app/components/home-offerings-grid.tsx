import { HandHeart, HeartHandshake, GraduationCap, Users } from "lucide-react";

const offerings = [
  {
    title: "Virtual memorials",
    description:
      "Celebrate ways to honor his memory with peaceful memorials for Pikachu's legacy.",
    icon: HandHeart,
  },
  {
    title: "Share memories",
    description:
      "Share memories about Pikachu, upload photos and stories, or preserve treasured moments.",
    icon: Users,
  },
  {
    title: "Educational initiatives",
    description:
      "Explore resources that support education and learning initiatives.",
    icon: GraduationCap,
  },
  {
    title: "Charitable causes",
    description:
      "Support the charitable causes connected to Pikachu's memorial and community.",
    icon: HeartHandshake,
  },
];

export default function HomeOfferingsGrid() {
  return (
    <section className="w-full bg-[#faf8f4] py-12">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
          {offerings.map(({ title, description, icon: Icon }) => (
            <div
              key={title}
              className="rounded-xl border border-[#dcd6ca] bg-[#faf8f4] p-6"
            >
              <Icon className="h-8 w-8 text-[#9a3412]" strokeWidth={1.5} aria-hidden="true" />
              <h3 className="mt-4 text-lg font-bold leading-tight text-[#1a1917]">
                {title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[#1a1917]/80">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
