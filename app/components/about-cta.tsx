import Link from "next/link";

export default function AboutCta() {
  return (
    <section
      className="w-full py-16 sm:py-20 px-6 text-center"
      style={{ backgroundColor: "#9a3412" }}
    >
      <h2
        className="mx-auto max-w-3xl text-white font-bold"
        style={{
          fontFamily: "var(--font-display, 'Plus Jakarta Sans'), sans-serif",
          fontSize: "clamp(24px, 4vw, 32px)",
          lineHeight: 1.2,
        }}
      >
        Honor Pikachu&apos;s Legacy and Help Us Shine. Make a Contribution
        Today.
      </h2>
      <div className="mt-6 flex justify-center">
        <Link
          href="/contact"
          className="inline-flex items-center justify-center rounded-md px-6 py-2.5 text-sm font-semibold transition-colors"
          style={{
            backgroundColor: "#faf8f4",
            color: "#9a3412",
            borderRadius: "6px",
          }}
        >
          Donate
        </Link>
      </div>
    </section>
  );
}
