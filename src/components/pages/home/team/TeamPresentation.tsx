import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Image from "next/image";
import { useRef } from "react";

type Team = {
  id: string;
  name: string;
  avatarUrl: string;
  position: string;
};

interface TeamPresentationProps {
  team: Team[];
}

const TeamPresentation = ({ team }: TeamPresentationProps) => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const cardContainerRef = useRef<HTMLUListElement | null>(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (!cardContainerRef.current || !sectionRef.current) return;

    const totalMovement = -(
      cardContainerRef.current.scrollWidth - window.innerWidth
    );

    const scrollTween = gsap.to(cardContainerRef.current, {
      x: totalMovement,
      ease: "none",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: () => `+=${Math.abs(totalMovement)}`,
        pin: true,
        scrub: 1,
        anticipatePin: 1,
        invalidateOnRefresh: true,
      },
    });

    document.querySelectorAll(".card").forEach((card) => {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: card,
          containerAnimation: scrollTween,
          start: "center right",
          end: "center left",
          scrub: 1,
        },
      });

      timeline
        .fromTo(
          card,
          {
            rotate: 12,
            scale: 0.5,
            ease: "power1.out",
          },
          {
            rotate: 0,
            scale: 1,
            ease: "power1.out",
            duration: 1,
          },
        )
        .to(
          card,
          {
            rotate: -12,
            scale: 0.5,
            ease: "power1.in",
            duration: 1,
          },
          ">",
        );
    });
  });

  return (
    <section className="py-16">
      <div className="grid grid-cols-12 gap-4">
        <h2 className="col-span-6 col-start-4 text-center font-display text-2xl font-medium uppercase leading-none">
          The Team Behind Creative Hub
        </h2>
      </div>
      <section
        ref={sectionRef}
        className="flex h-screen items-center overflow-hidden"
      >
        <div className="relative">
          <ul
            className="flex gap-4 px-8"
            ref={cardContainerRef}
            style={{
              width: "fit-content",
            }}
          >
            <div className="card w-[calc(100vw-4rem)] flex-shrink-0 rotate-12 scale-50 opacity-0 sm:w-[calc((100vw-4rem-32px)/3)]" />
            {team.map((person) => (
              <li
                key={person.id}
                className="card w-[calc(100vw-4rem)] flex-shrink-0 rotate-12 scale-50 sm:w-[calc((100vw-4rem-32px)/3)]"
              >
                <div className="aspect-square overflow-hidden rounded-xl">
                  <Image
                    src={person.avatarUrl}
                    width={250}
                    height={250}
                    alt={person.name}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="mt-4 flex flex-col gap-2 leading-none">
                  <span className="text-lg font-semibold">{person.name}</span>
                  <span className="text-muted-foreground">
                    {person.position}
                  </span>
                </div>
              </li>
            ))}
            <div className="card w-[calc(100vw-4rem)] flex-shrink-0 rotate-12 scale-50 opacity-0 sm:w-[calc((100vw-4rem-32px)/3)]" />
          </ul>
        </div>
      </section>
    </section>
  );
};

export default TeamPresentation;