import Link from "next/link";

export default function HomeCtaBand() {
  return (
    <section className="w-full bg-[#9a3412]">
      <div className="mx-auto flex max-w-3xl flex-col items-center px-6 py-14 text-center">
        <h2 className="font-display text-[26px] font-bold leading-[1.3] text-white md:text-[30px]">
          Help Us Keep the Memory Burning Brightly.
          <br />
          Support the Pikachu Memorial Fund.
        </h2>
        <Link
          href="/contact"
          className="mt-6 inline-flex items-center justify-center rounded-[6px] bg-[#faf8f4] px-5 py-2 text-sm font-semibold text-[#1a1917] transition-colors hover:bg-white"
        >
          Donate
        </Link>
      </div>
    </section>
  );
}
