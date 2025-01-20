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
    <div className="px-4 md:px-8">
      <div className="relative col-span-12 mt-8 aspect-[3/4] overflow-hidden rounded-2xl md:aspect-[5/3] lg:aspect-banner">
        <Image
          src={blogs[0].imageUrl}
          alt="Header background"
          className="z-0 h-full w-full object-cover"
          priority
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 z-10 flex flex-col justify-end bg-gradient-to-bl from-black/40 to-black/80 px-4 py-6 md:p-8">
          <div className="w-full space-y-3 md:w-10/12 lg:w-1/2">
            <div className="w-fit rounded-md bg-background p-2 leading-none 2xl:text-lg">
              {new Intl.DateTimeFormat("en-US", {
                dateStyle: "medium",
                timeStyle: "short",
              }).format(new Date(blogs[0].dateTime))}
            </div>
            <div className="font-display text-xl font-medium leading-none tracking-tight text-background md:text-2xl 2xl:text-3xl">
              {blogs[0].title}
            </div>
            <div className="line-clamp-2 text-background opacity-60 2xl:text-lg 2xl:leading-normal">
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
