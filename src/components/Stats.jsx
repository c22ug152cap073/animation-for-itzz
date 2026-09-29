const stats = [
  {
    number: "87%",
    title: "Engagement",
    description: "Better user interaction",
  },
  {
    number: "92%",
    title: "Performance",
    description: "Optimized experience",
  },
  {
    number: "76%",
    title: "Satisfaction",
    description: "Positive user response",
  },
];

const Stats = () => {
  return (
    <div
      className="
        stats
        absolute
        bottom-[9%]
        left-1/2
        z-20
        flex
        w-full
        max-w-5xl
        -translate-x-1/2
        flex-col
        gap-8
        px-8
        md:flex-row
        md:justify-between
        md:gap-0
      "
    >
      {stats.map((stat, index) => (
        <div
          key={index}
          className="stat-item text-center md:text-left"
        >
          <h2 className="text-4xl font-semibold tracking-tight text-white md:text-6xl">
            {stat.number}
          </h2>

          <h3 className="mt-2 text-xs uppercase tracking-[0.25em] text-white/80">
            {stat.title}
          </h3>

          <p className="mt-2 text-xs text-white/40">
            {stat.description}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Stats;