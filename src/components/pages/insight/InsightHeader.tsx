import Image from "next/image";

interface InsightHeaderProps {
  headerImage: string;
  title: string;
  author: string;
  authorAvatar: string;
}

const InsightHeader = ({
  headerImage,
  title,
  author,
  authorAvatar,
}: InsightHeaderProps) => {
  return (
    <header className="relative grid min-h-[50vh] grid-cols-12 items-center gap-4 px-8 py-12">
      <div className="absolute inset-0">
        <Image
          src={headerImage}
          alt="Header background"
          className="h-full w-full object-cover"
          priority
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/20" />
      </div>

      <h1 className="z-10 col-span-8 col-start-3 font-display text-2xl leading-none tracking-tighter text-white">
        {title}
      </h1>
      <div className="z-10 col-span-8 col-start-3 flex items-center gap-3">
        <div className="aspect-square w-12 overflow-hidden rounded-full">
          <Image
            src={authorAvatar}
            width={80}
            height={80}
            alt={author}
            className="h-full w-full object-cover"
          />
        </div>
        <span className="text-background">{author}</span>
      </div>
    </header>
  );
};

export default InsightHeader;
