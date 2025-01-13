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
      <header className="relative grid min-h-[50vh] grid-cols-12 items-center gap-4 px-8 py-16">
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

        <h1 className="z-10 col-span-8 col-start-3 font-display text-2xl font-medium leading-none tracking-tighter text-white">
          {post.title}
        </h1>
        <div className="z-10 col-span-8 col-start-3 flex items-center gap-3">
          <div className="aspect-square w-12 overflow-hidden rounded-full">
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
        <div className="col-span-8 col-start-3">
          <RichText content={post.content} />
        </div>
      </main>
    </>
  );
};

export default ArticlePresentation;
