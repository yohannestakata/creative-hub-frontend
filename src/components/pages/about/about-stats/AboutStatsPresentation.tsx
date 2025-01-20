const AboutStatsPresentation = () => {
  return (
    <section className="px-4 py-16 md:px-8">
      <div className="grid w-full grid-cols-2 items-start justify-between gap-4 gap-x-8 border-b border-t border-border py-16 leading-none md:grid-cols-3 md:flex-row lg:grid-cols-5">
        <div className="flex-1">
          <div className="font-display text-2xl font-medium tracking-tighter lg:text-3xl 2xl:text-3xl">
            300+
          </div>
          <div className="2xl:text-lg 2xl:leading-normal">Members</div>
        </div>
        <div className="flex-1">
          <div className="font-display text-2xl font-medium tracking-tighter lg:text-3xl 2xl:text-3xl">
            30+
          </div>
          <div className="2xl:text-lg 2xl:leading-normal">
            Trainings &amp; Masterclasses
          </div>
        </div>
        <div className="flex-1">
          <div className="font-display text-2xl font-medium tracking-tighter lg:text-3xl 2xl:text-3xl">
            20+
          </div>
          <div className="2xl:text-lg 2xl:leading-normal">
            International Guests
          </div>
        </div>
        <div className="flex-1">
          <div className="font-display text-2xl font-medium tracking-tighter lg:text-3xl 2xl:text-3xl">
            48+
          </div>
          <div className="2xl:text-lg 2xl:leading-normal">
            Industry Collaborators
          </div>
        </div>
        <div className="flex w-full flex-1 flex-col">
          <div className="font-display text-2xl font-medium tracking-tighter lg:text-3xl 2xl:text-3xl">
            Vogue
          </div>
          <div className="2xl:text-lg 2xl:leading-normal">Featured on</div>
        </div>
      </div>
    </section>
  );
};

export default AboutStatsPresentation;
