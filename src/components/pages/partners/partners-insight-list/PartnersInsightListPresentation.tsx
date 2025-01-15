import { InsightCard, SectionTitle } from "@/components/ui";

type Blog = {
  id: string;
  title: string;
  description: string;
  dateTime: string;
  imageUrl: string;
};

interface PartnersInsightPresentationProps {
  blogs: Blog[];
}

const PartnersInsightListPresentation = ({
  blogs,
}: PartnersInsightPresentationProps) => {
  return (
    <section className="py-12">
      <SectionTitle
        sectionName="Insights"
        sectionTitle="Events With Out Partners"
      />
      <div className="mt-10 grid grid-cols-12 gap-4 px-16">
        {blogs.map((blog) => (
          <InsightCard blog={blog} key={blog.id} />
        ))}
      </div>
    </section>
  );
};

export default PartnersInsightListPresentation;
