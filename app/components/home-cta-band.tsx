export default function HomeCtaBand() {
  return (
    <section
      className="w-full py-16 md:py-20"
      style={{ backgroundColor: "#9a3412" }}
    >
      <div className="mx-auto max-w-3xl px-6 text-center">
        <h2
          className="text-2xl md:text-[30px] font-bold leading-[1.3]"
          style={{ color: "#ffffff" }}
        >
          Help Us Keep the Memory Burning Brightly.
          <br />
          Support the Pikachu Memorial Fund.
        </h2>
        <div className="mt-8">
          <a
            href="/contact"
            className="inline-flex items-center justify-center rounded-md px-6 py-2.5 text-sm font-semibold transition-opacity hover:opacity-90"
            style={{
              backgroundColor: "#faf8f4",
              color: "#1a1917",
              borderRadius: "6px",
            }}
          >
            Donate
          </a>
        </div>
      </div>
    </section>
  );
}
