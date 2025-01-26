import Image from "next/image";
import eedImg from "@/../public/eed.png";
import iadcImg from "@/../public/iadc.png";
import unidoImg from "@/../public/unido.png";
import iceAddisImg from "@/../public/iceaddis.png";

const AboutCollaboratorsPresentation = () => {
  return (
    <section className="px-4 py-8 md:px-8 md:py-16">
      <div className="grid grid-cols-12 items-center gap-6 border-b border-t py-12">
        <h2 className="col-span-full font-display text-lg font-medium uppercase leading-none tracking-tighter md:text-center lg:text-2xl">
          Global Collaborations{" "}
        </h2>
        <div className="col-span-6 md:col-span-2 md:w-11/12 lg:w-full">
          <Image
            width={400}
            height={400}
            src={iadcImg}
            alt="Italian Development Cooperation"
          />
        </div>
        <div className="col-span-6 md:col-span-2 md:col-start-4 md:w-11/12 lg:w-full">
          <Image width={400} height={400} src={eedImg} alt="UNIDO" />
        </div>
        <div className="col-span-6 md:col-span-2 md:col-start-7 md:w-11/12 lg:w-full">
          <Image
            width={400}
            height={400}
            src={unidoImg}
            alt="Ethiopian Enterprise Development"
          />
        </div>
        <div className="col-span-6 md:col-span-3 md:col-start-10 md:w-11/12 lg:w-full">
          <Image width={400} height={400} src={iceAddisImg} alt="iceaddis" />
        </div>
      </div>
    </section>
  );
};

export default AboutCollaboratorsPresentation;
