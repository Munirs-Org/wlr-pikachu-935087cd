import Link from "next/link";

export default function ContactCtaBand() {
  return (
    <section
      className="w-full py-14 px-6"
      style={{ backgroundColor: "#9a3412" }}
    >
      <div className="mx-auto max-w-3xl text-center">
        <h2
          className="font-semibold text-white"
          style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontSize: "clamp(22px, 3vw, 30px)",
            lineHeight: 1.35,
          }}
        >
          Help Us Keep the Memory Burning Brightly.
          <br />
          Support the Pikachu Memorial Fund.
        </h2>
        <div className="mt-6 flex justify-center">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-md px-6 py-2.5 text-sm font-semibold text-[#1a1917] transition-colors hover:bg-[#f2efe8]"
            style={{
              backgroundColor: "#ffffff",
              fontFamily: "'Inter', sans-serif",
            }}
          >
            Donate
          </Link>
        </div>
      </div>
    </section>
  );
}
