import Link from "next/link";

export default function ContactCta() {
  return (
    <section className="w-full bg-[#9a3412]">
      <div className="mx-auto flex max-w-3xl flex-col items-center px-6 py-16 text-center sm:py-20">
        <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold leading-snug text-white sm:text-3xl">
          Help Us Keep the Memory Burning Brightly.
          <br />
          Support the Pikachu Memorial Fund.
        </h2>
        <Link
          href="/contact"
          className="mt-6 inline-flex items-center justify-center rounded-md bg-white px-6 py-2.5 text-sm font-semibold text-[#9a3412] transition-colors hover:bg-[#faf8f4]"
        >
          Donate
        </Link>
      </div>
    </section>
  );
}
