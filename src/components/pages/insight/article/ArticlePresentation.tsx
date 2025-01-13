import RichText, { BlockNode } from "@/components/layout/RichText";
import Image from "next/image";

interface ArticlePresentationProps {
  post: {
    title: string;
    headerImage: string;
    author: string;
    authorAvatar: string;
    content: BlockNode[];
  };
}

const ArticlePresentation = ({ post }: ArticlePresentationProps) => {
  return (
    <>
      <header className="relative grid min-h-[50vh] grid-cols-12 items-center px-8 py-16 md:gap-0 lg:gap-4">
        <div className="absolute inset-0">
          <Image
            src={post.headerImage}
            alt="Header background"
            className="h-full w-full object-cover"
            priority
            width={1920}
            height={1080}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-black/60" />
        </div>

        <h1 className="z-10 col-span-12 font-display text-lg font-medium leading-[2rem] tracking-tighter text-white md:col-span-10 md:col-start-2 md:text-xl md:leading-[2.5rem] lg:col-span-8 lg:col-start-3 lg:text-2xl lg:leading-none">
          {post.title}
        </h1>
        <div className="z-10 col-span-12 flex items-center gap-3 md:col-span-10 md:col-start-2 lg:col-span-8 lg:col-start-3">
          <div className="aspect-square w-10 overflow-hidden rounded-full md:w-12">
            <Image
              src={post.authorAvatar}
              width={80}
              height={80}
              alt={post.author}
              className="h-full w-full object-cover"
            />
          </div>
          <span className="text-background">{post.author}</span>
        </div>
      </header>
      <main className="grid grid-cols-12 gap-4 px-8 py-12">
        <div className="col-span-12 md:col-span-10 md:col-start-2 lg:col-span-8 lg:col-start-3">
          <RichText content={post.content} />
        </div>
      </main>
    </>
  );
};

export default ArticlePresentation;
