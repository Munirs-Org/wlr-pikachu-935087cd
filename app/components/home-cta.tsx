import Link from "next/link";

export default function HomeCta() {
  return (
    <section className="w-full" style={{ backgroundColor: "#9a3412" }}>
      <div className="mx-auto max-w-3xl px-6 py-14 text-center">
        <h2
          className="text-white font-bold"
          style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontSize: "26px",
            lineHeight: 1.35,
          }}
        >
          Help Us Keep the Memory Burning Brightly.
          <br />
          Support the Pikachu Memorial Fund.
        </h2>
        <div className="mt-6">
          <Link
            href="/contact"
            className="inline-block rounded-md px-6 py-2 text-sm font-semibold text-[#1a1917] transition-opacity hover:opacity-90"
            style={{ backgroundColor: "#faf8f4" }}
          >
            Donate
          </Link>
        </div>
      </div>
    </section>
  );
}
