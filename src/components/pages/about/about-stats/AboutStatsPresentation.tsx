interface AboutStatsPresentationProps {
  stats: { title: string; count: string }[];
}

const AboutStatsPresentation = ({ stats }: AboutStatsPresentationProps) => {
  return (
    <section className="px-4 py-16 md:px-8">
      <div className="grid w-full grid-cols-2 items-start justify-between gap-4 gap-x-8 border-b border-t border-border py-16 leading-none md:grid-cols-3 md:flex-row lg:grid-cols-5">
        {stats.map((stat) => (
          <div className="flex-1" key={stat.title}>
            <div className="font-display text-2xl font-medium tracking-tighter lg:text-5xl">
              {stat.count}
            </div>
            <div className="2xl:leading-normal">{stat.title}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutStatsPresentation;
