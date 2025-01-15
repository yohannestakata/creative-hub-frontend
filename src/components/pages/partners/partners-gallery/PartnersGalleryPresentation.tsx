import { Gallery } from "@/components/layout";
import { SectionTitle } from "@/components/ui";

type Image = {
  id: string;
  url: string;
  alt: string;
};

interface PartnersGalleryProps {
  images: Image[][];
}

const PartnersGalleryPresentation = ({ images }: PartnersGalleryProps) => {
  return (
    <section className="py-12">
      <SectionTitle
        sectionName="Gallery"
        sectionTitle="Celebrating Notable Guests"
      />
      <div className="mt-10">
        <Gallery images={images} />
      </div>
    </section>
  );
};

export default PartnersGalleryPresentation;
