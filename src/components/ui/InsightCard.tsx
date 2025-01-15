import Image from "next/image";
import Link from "next/link";
import { twJoin } from "tailwind-merge";

type Blog = {
  id: string;
  title: string;
  description: string;
  dateTime: string;
  imageUrl: string;
};

interface InsightCardProps {
  blog: Blog;
  clickable?: boolean;
  grayscale?: boolean;
}

const InsightCard = ({
  blog,
  clickable = true,
  grayscale = false,
}: InsightCardProps) => {
  const CardContent = (
    <>
      <div className="aspect-square overflow-hidden rounded-2xl">
        <Image
          src={blog.imageUrl}
          width={400}
          height={400}
          alt={blog.title}
          className={twJoin(
            "h-full w-full object-cover",
            grayscale && "grayscale",
          )}
        />
      </div>
      <div className="mt-3 flex flex-col">
        <span>
          {new Intl.DateTimeFormat("en-US", {
            dateStyle: "medium",
            timeStyle: "short",
          }).format(new Date(blog.dateTime))}
        </span>
        <span className="mt-2 line-clamp-2 text-[20px] font-semibold leading-[120%] md:text-lg">
          {blog.title}
        </span>
        <span className="mt-2 line-clamp-2 text-muted-foreground">
          {blog.description}
        </span>
      </div>
    </>
  );

  return clickable ? (
    <Link
      href={`/insights/${blog.id}`}
      className="col-span-full md:col-span-6 lg:col-span-4"
    >
      {CardContent}
    </Link>
  ) : (
    <div className="col-span-full md:col-span-6 lg:col-span-4">
      {CardContent}
    </div>
  );
};

export default InsightCard;
