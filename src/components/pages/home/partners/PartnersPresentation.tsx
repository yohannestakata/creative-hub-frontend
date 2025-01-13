import eedImg from "@/../public/eed.png";
import iadcImg from "@/../public/iadc.png";
import unidoImg from "@/../public/unido.png";
import iceAddisImg from "@/../public/iceaddis.png";
import Image from "next/image";

const PartnersPresentation = () => {
  return (
    <section className="p-16">
      <div className="grid grid-cols-12 items-center gap-6 border-b border-t py-12">
        <h2 className="col-span-full text-center font-display text-xl font-medium uppercase leading-none tracking-tighter">
          Empowering creativity through global partnerships
        </h2>
        <div className="col-span-2">
          <Image
            width={400}
            height={400}
            src={iadcImg}
            alt="Italian Development Cooperation"
          />
        </div>
        <div className="col-span-2 col-start-4">
          <Image width={400} height={400} src={eedImg} alt="UNIDO" />
        </div>
        <div className="col-span-2 col-start-7">
          <Image
            width={400}
            height={400}
            src={unidoImg}
            alt="Ethiopian Enterprise Development"
          />
        </div>
        <div className="col-span-3 col-start-10">
          <Image width={400} height={400} src={iceAddisImg} alt="iceaddis" />
        </div>
      </div>
    </section>
  );
};

export default PartnersPresentation;
