const Navbar = () => {
  return (
    <nav className="absolute top-0 left-0 z-50 flex w-full items-center justify-between px-6 py-6 md:px-10">

      {/* Logo */}
      <div className="text-lg font-bold tracking-[0.3em]">
        ITZFIZZ
      </div>

      {/* Navigation */}
      <div className="hidden items-center gap-10 text-xs tracking-[0.2em] text-white/70 md:flex">
        <a
          href="#"
          className="transition hover:text-white"
        >
          ABOUT
        </a>

        <a
          href="#"
          className="transition hover:text-white"
        >
          WORK
        </a>

        <a
          href="#"
          className="transition hover:text-white"
        >
          SERVICES
        </a>
      </div>

      {/* Contact */}
      <button className="rounded-full border border-white/30 px-5 py-2 text-xs tracking-wider transition hover:bg-white hover:text-black">
        CONTACT
      </button>

    </nav>
  );
};

export default Navbar;