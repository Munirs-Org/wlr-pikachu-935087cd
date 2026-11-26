import Link from "next/link";

export default function AboutCta() {
  return (
    <section className="w-full bg-[#9a3412]">
      <div className="mx-auto flex max-w-3xl flex-col items-center px-6 py-16 text-center">
        <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold leading-snug text-white md:text-3xl">
          Honor Pikachu&apos;s Legacy and Help Us Shine. Make a Contribution Today.
        </h2>
        <Link
          href="/contact"
          className="mt-8 inline-flex items-center rounded-full bg-white px-6 py-2 text-sm font-semibold text-[#9a3412] transition hover:bg-[#faf8f4]"
        >
          Donate
        </Link>
      </div>
    </section>
  );
}
