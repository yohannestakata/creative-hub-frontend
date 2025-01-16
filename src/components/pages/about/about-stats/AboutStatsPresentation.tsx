const AboutStatsPresentation = () => {
  return (
    <section className="md:px-8 px-4 py-16">
      <div className="grid w-full lg:grid-cols-5 md:grid-cols-3 grid-cols-2 gap-x-8 items-center justify-between gap-4 border-b border-t border-border py-16 leading-none md:flex-row">
        <div className="flex-1">
          <div className="font-display text-xl font-medium tracking-tighter md:text-2xl lg:text-3xl">
            300+
          </div>
          <div className="">Members</div>
        </div>
        <div className="flex-1">
          <div className="font-display text-xl font-medium tracking-tighter md:text-2xl lg:text-3xl">
            30+
          </div>
          <div className="">Trainings &amp; Masterclasses</div>
        </div>
        <div className="flex-1">
          <div className="font-display text-xl font-medium tracking-tighter md:text-2xl lg:text-3xl">
            20+
          </div>
          <div className="">International Guests</div>
        </div>
        <div className="flex-1">
          <div className="font-display text-xl font-medium tracking-tighter md:text-2xl lg:text-3xl">
            48+
          </div>
          <div className="">Industry Collaborators</div>
        </div>
        <div className="flex w-full flex-1 flex-col">
          <div className="font-display text-xl font-medium tracking-tighter md:text-2xl lg:text-3xl">
            Vogue
          </div>
          <div className="">Featured on</div>
        </div>
      </div>
    </section>
  );
};

export default AboutStatsPresentation;
