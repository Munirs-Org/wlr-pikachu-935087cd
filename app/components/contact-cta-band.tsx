import Link from "next/link";

export default function ContactCtaBand() {
  return (
    <section
      className="w-full py-16 px-6 text-center"
      style={{ backgroundColor: "#9a3412" }}
    >
      <h2 className="mx-auto max-w-3xl text-white font-bold text-2xl md:text-3xl leading-snug">
        Help Us Keep the Memory Burning Brightly.
        <br />
        Support the Pikachu Memorial Fund.
      </h2>
      <div className="mt-6">
        <Link
          href="/contact"
          className="inline-block rounded-md bg-white px-6 py-2.5 text-sm font-semibold text-[#1a1917] transition-colors hover:bg-[#f2efe8]"
        >
          Donate
        </Link>
      </div>
    </section>
  );
}
