import Link from "next/link";

export default function AboutCta() {
  return (
    <section className="w-full bg-[#9a3412]">
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 px-6 py-16 text-center">
        <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold leading-snug text-white md:text-3xl">
          Honor Pikachu&apos;s Legacy and Help Us Shine. Make a Contribution
          Today.
        </h2>
        <Link
          href="/contact"
          className="inline-flex items-center justify-center rounded-md bg-[#faf8f4] px-6 py-2.5 text-sm font-semibold text-[#1a1917] transition-colors hover:bg-[#f2efe8]"
        >
          Donate
        </Link>
      </div>
    </section>
  );
}
