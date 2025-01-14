import { InsightCard } from "@/components/ui";
import Image from "next/image";

type Blog = {
  id: string;
  title: string;
  description: string;
  dateTime: string;
  imageUrl: string;
};

interface InsightsListPresentationProps {
  blogs: Blog[];
}

const InsightsListPresentation = ({ blogs }: InsightsListPresentationProps) => {
  return (
    <div className="px-8">
      <div className="relative col-span-12 mt-6 overflow-hidden rounded-2xl aspect-[3/5] md:aspect-[5/3] lg:aspect-banner">
        <Image
          src={blogs[0].imageUrl}
          alt="Header background"
          className="z-0 h-full w-full object-cover"
          priority
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 z-10 flex flex-col justify-end bg-gradient-to-bl from-black/40 to-black/80 md:p-8 p-6">
          <div className="md:w-10/12 w-full space-y-3 lg:w-1/2">
            <div className="w-fit rounded-md bg-background p-2 leading-none">
              {new Intl.DateTimeFormat("en-US", {
                dateStyle: "medium",
                timeStyle: "short",
              }).format(new Date(blogs[0].dateTime))}
            </div>
            <div className="font-display text-xl font-medium leading-none text-background lg:text-2xl">
              {blogs[0].title}
            </div>
            <div className="line-clamp-2 text-background opacity-60">
              {blogs[0].description}
            </div>
          </div>
        </div>
      </div>
      <div className="mt-6 grid w-full grid-cols-12 gap-4 gap-y-6">
        {blogs.slice(1).map((blog) => (
          <InsightCard key={blog.id} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default InsightsListPresentation;
