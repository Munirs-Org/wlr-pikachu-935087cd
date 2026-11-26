import Link from "next/link";

export default function AboutCtaBand() {
  return (
    <section className="w-full bg-[#9a3412]">
      <div className="mx-auto flex max-w-3xl flex-col items-center px-6 py-16 text-center md:py-20">
        <h2
          className="text-[#ffffff]"
          style={{
            fontFamily: "var(--font-display, 'Plus Jakarta Sans'), sans-serif",
            fontSize: "clamp(24px, 4vw, 32px)",
            fontWeight: 700,
            lineHeight: 1.25,
          }}
        >
          Honor Pikachu&apos;s Legacy and Help Us Shine.
          <br />
          Make a Contribution Today.
        </h2>
        <Link
          href="/contact"
          className="mt-8 inline-flex items-center justify-center rounded-[8px] bg-[#faf8f4] px-8 py-3 text-[15px] font-semibold text-[#1a1917] transition-colors hover:bg-[#f2efe8]"
        >
          Donate
        </Link>
      </div>
    </section>
  );
}
