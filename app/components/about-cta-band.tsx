import Link from "next/link";

export default function AboutCtaBand() {
  return (
    <section
      className="w-full"
      style={{ backgroundColor: "#9a3412" }}
      aria-labelledby="about-cta-heading"
    >
      <div className="mx-auto flex max-w-3xl flex-col items-center px-6 py-14 text-center sm:py-16">
        <h2
          id="about-cta-heading"
          className="text-2xl font-bold leading-snug text-white sm:text-3xl"
          style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
        >
          Honor Pikachu&apos;s Legacy and Help Us Shine. Make a Contribution Today.
        </h2>
        <Link
          href="/contact"
          className="mt-6 inline-flex items-center justify-center rounded-md bg-white px-6 py-2.5 text-sm font-semibold transition-colors hover:bg-[#f2efe8]"
          style={{
            color: "#9a3412",
            fontFamily: "'Inter', sans-serif",
          }}
        >
          Donate
        </Link>
      </div>
    </section>
  );
}
