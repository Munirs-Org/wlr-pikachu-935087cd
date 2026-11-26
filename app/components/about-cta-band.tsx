export default function AboutCtaBand() {
  return (
    <section className="w-full bg-[#9a3412]">
      <div className="mx-auto max-w-3xl px-6 py-14 text-center sm:py-16">
        <h2
          className="text-white text-2xl font-bold leading-snug sm:text-3xl"
          style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
        >
          Honor Pikachu&apos;s Legacy and Help Us Shine.
          <br className="hidden sm:block" /> Make a Contribution Today.
        </h2>
        <div className="mt-6">
          <a
            href="/contact"
            className="inline-flex items-center justify-center rounded-md bg-white px-6 py-2.5 text-sm font-semibold text-[#1a1917] transition-colors hover:bg-[#f2efe8]"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Donate
          </a>
        </div>
      </div>
    </section>
  );
}
