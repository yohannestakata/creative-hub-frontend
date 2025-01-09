interface SectionTitleProps {
  sectionName: string;
  sectionTitle: string;
}

const SectionTitle = ({ sectionName, sectionTitle }: SectionTitleProps) => (
  <div className="px-8">
    <div className="grid grid-cols-12 justify-between border-b border-border pb-6">
      <span className="col-span-3 text-lg">{sectionName}</span>
      <span className="col-span-5 col-start-8 font-display text-2xl font-medium uppercase leading-none tracking-tighter">
        {sectionTitle}
      </span>
    </div>
  </div>
);

export default SectionTitle;
