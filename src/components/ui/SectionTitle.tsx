interface SectionTitleProps {
  sectionName: string;
  sectionTitle: string;
}

const SectionTitle = ({ sectionName, sectionTitle }: SectionTitleProps) => (
  <div className="px-8">
    <div className="grid lg:grid-cols-12 justify-between border-b border-border pb-6 gap-4 lg:gap-0">
      <span className="col-span-3 lg:text-lg ">{sectionName}</span>
      <span className="lg:col-span-5 lg:col-start-8 font-display lg:text-2xl md:text-xl text-lg font-medium uppercase leading-none tracking-tighter">
        {sectionTitle}
      </span>
    </div>
  </div>
);

export default SectionTitle;
