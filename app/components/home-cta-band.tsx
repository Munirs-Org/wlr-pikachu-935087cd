import Link from "next/link";

export default function HomeCtaBand() {
  return (
    <section className="w-full bg-[#9a3412]">
      <div className="mx-auto max-w-5xl px-6 py-16 text-center">
        <h2
          className="text-[26px] sm:text-[30px] font-bold leading-[1.2] text-white"
          style={{ fontFamily: "var(--font-display, 'Plus Jakarta Sans', sans-serif)" }}
        >
          Help Us Keep the Memory Burning Brightly.
          <br />
          Support the Pikachu Memorial Fund.
        </h2>
        <div className="mt-6 flex justify-center">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-[6px] bg-white px-6 py-2.5 text-[14px] font-semibold text-[#9a3412] transition-colors hover:bg-[#f2efe8]"
          >
            Donate
          </Link>
        </div>
      </div>
    </section>
  );
}
