import Link from "next/link";

export default function ContactCta() {
  return (
    <section className="w-full bg-[#9a3412] py-14 px-6 text-center">
      <h2 className="font-[family-name:var(--font-display)] text-2xl md:text-3xl font-bold leading-snug text-white max-w-3xl mx-auto">
        Help Us Keep the Memory Burning Brightly.
        <br />
        Support the Pikachu Memorial Fund.
      </h2>
      <div className="mt-6">
        <Link
          href="/contact"
          className="inline-flex items-center justify-center rounded-md bg-white px-8 py-3 text-sm font-semibold text-[#1a1917] transition-colors hover:bg-[#f2efe8]"
        >
          Donate
        </Link>
      </div>
    </section>
  );
}
