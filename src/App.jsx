import Hero from "./components/Hero";

function App() {
  return (
    <main className="min-h-screen bg-[#080808]">
      <Hero />

      {/* Next Section */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#111111]">
        <div className="px-6 text-center">
          <p className="mb-6 text-xs uppercase tracking-[0.4em] text-white/40">
            Continue Exploring
          </p>

          <h2 className="text-5xl font-semibold tracking-tight text-white md:text-8xl">
            KEEP MOVING
          </h2>

          <p className="mx-auto mt-6 max-w-lg text-sm leading-7 text-white/40">
            A smooth scroll-driven experience built with React, GSAP and
            modern frontend technologies.
          </p>
        </div>
      </section>
    </main>
  );
}

export default App;