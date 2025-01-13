import Image from "next/image";
import Link from "next/link";

type Blog = {
  id: string;
  title: string;
  description: string;
  dateTime: string;
  imageUrl: string;
};

interface InsightCardProps {
  blog: Blog;
}

const InsightCard = ({ blog }: InsightCardProps) => {
  return (
    <Link href={`/insights/${blog.id}`} className="col-span-4">
      <div className="aspect-square overflow-hidden rounded-2xl">
        <Image
          src={blog.imageUrl}
          width={400}
          height={400}
          alt={blog.title}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="mt-3 flex flex-col">
        <span className="">
          {new Intl.DateTimeFormat("en-US", {
            dateStyle: "medium",
            timeStyle: "short",
          }).format(new Date(blog.dateTime))}
        </span>
        <span className="mt-2 line-clamp-2 text-lg font-semibold leading-[120%]">
          {blog.title}
        </span>
        <span className="mt-2 line-clamp-2 text-muted-foreground">
          {blog.description}
        </span>
      </div>
    </Link>
  );
};

export default InsightCard;
