import Image from "next/image";

interface AboutHeaderPresentation {
  title: string;
  copy: string;
  imageUrl: string;
}

const AboutHeaderPresentation = ({
  title,
  copy,
  imageUrl,
}: AboutHeaderPresentation) => {
  return (
    <header className="px-8 pb-16 pt-8">
      <div className="relative lg:aspect-banner md:aspect-[5/3] aspect-[3/5] overflow-hidden rounded-2xl bg-black">
        <Image
          width={1920}
          height={1080}
          alt=""
          src={imageUrl}
          className="h-full w-full object-cover"
        />

        <div className="absolute left-0 top-0 z-10 grid h-full w-full grid-cols-12 items-center gap-x-4 rounded-2xl bg-foreground/70 text-background">
          <div className="col-span-8 col-start-3">
            <h1 className="font-display md:text-2xl text-xl lg:text-3xl font-medium leading-none tracking-tighter">
              {title}
            </h1>
            <p className="mt-4">{copy} </p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default AboutHeaderPresentation;
