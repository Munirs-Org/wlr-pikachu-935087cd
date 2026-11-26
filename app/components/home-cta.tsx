import Link from "next/link";

export default function HomeCta() {
  return (
    <section className="w-full bg-[#9a3412]">
      <div className="mx-auto max-w-5xl px-6 py-16 text-center">
        <h2 className="font-display text-2xl md:text-3xl font-bold leading-snug text-white">
          Help Us Keep the Memory Burning Brightly.
          <br />
          Support the Pikachu Memorial Fund.
        </h2>
        <div className="mt-6">
          <Link
            href="/contact"
            className="inline-block rounded-md bg-white px-6 py-2 text-sm font-semibold text-[#9a3412] transition-colors hover:bg-[#faf8f4]"
          >
            Donate
          </Link>
        </div>
      </div>
    </section>
  );
}
