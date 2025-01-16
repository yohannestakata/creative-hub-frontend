import { SectionTitle } from "@/components/ui";
import Image from "next/image";
import { twJoin } from "tailwind-merge";

type Image = {
  id: string;
  url: string;
  alt: string;
};

interface PartnersGalleryProps {
  images: Image[];
}

const PartnersGalleryPresentation = ({ images }: PartnersGalleryProps) => {
  return (
    <section className="py-12">
      <SectionTitle
        sectionName="Gallery"
        sectionTitle="Celebrating Notable Guests"
      />
      <div className="mt-10 grid grid-cols-12 gap-4 px-8">
        {images.map((image, index) => {
          const isSquare = index % 4 === 0 || index % 4 === 3;
          return (
            <div
              className={twJoin(
                "overflow-hidden rounded-2xl bg-black",
                isSquare ? "col-span-4 aspect-square" : "col-span-8",
                "relative",
              )}
              key={image.id}
            >
              <Image
                src={image.url}
                layout="fill"
                objectFit="cover"
                alt={image.alt}
                className={isSquare ? "object-cover" : "object-contain"}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default PartnersGalleryPresentation;
