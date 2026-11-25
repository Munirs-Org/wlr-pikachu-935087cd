import Link from "next/link";

export default function HomeCta() {
  return (
    <section
      className="w-full py-14 px-6"
      style={{ backgroundColor: "#9a3412" }}
      aria-labelledby="home-cta-heading"
    >
      <div className="mx-auto max-w-3xl text-center">
        <h2
          id="home-cta-heading"
          className="text-white font-bold"
          style={{
            fontFamily: "'Plus Jakarta Sans', Inter, sans-serif",
            fontSize: "clamp(22px, 3vw, 30px)",
            lineHeight: 1.3,
          }}
        >
          Help Us Keep the Memory Burning Brightly.
          <br />
          Support the Pikachu Memorial Fund.
        </h2>
        <div className="mt-6">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-md px-6 py-2.5 text-sm font-semibold transition-colors hover:bg-[#f2efe8]"
            style={{
              backgroundColor: "#faf8f4",
              color: "#1a1917",
              borderRadius: "6px",
            }}
          >
            Donate
          </Link>
        </div>
      </div>
    </section>
  );
}
