import { HeartHandshake, GraduationCap, Users, Ribbon } from "lucide-react";

const features = [
  {
    icon: Ribbon,
    title: "Virtual memorials",
    copy: "Celebrate ways to honor his memory with peaceful memorials for Pikachu's legacy.",
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
    icon: HeartHandshake,
    title: "Charitable causes",
    copy: "Support the charitable causes connected to Pikachu's memorial and community.",
  },
];

export default function HomeFeatures() {
  return (
    <section
      className="w-full px-6 py-12 md:px-10"
      style={{ backgroundColor: "#faf8f4" }}
    >
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-5 md:grid-cols-4">
        {features.map((f) => (
          <div
            key={f.title}
            className="rounded-xl border p-6"
            style={{ borderColor: "#dcd6ca", borderRadius: "12px" }}
          >
            <f.icon
              className="mb-5 h-7 w-7"
              strokeWidth={1.5}
              style={{ color: "#9a3412" }}
              aria-hidden="true"
            />
            <h3
              className="mb-2 text-[18px] font-bold leading-[1.3]"
              style={{ color: "#1a1917" }}
            >
              {f.title}
            </h3>
            <p
              className="text-[14px] leading-[1.5]"
              style={{ color: "#1a1917" }}
            >
              {f.copy}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
