"use client";

import {
  NextButton,
  PrevButton,
  usePrevNextButtons,
} from "@/components/ui/CarouselArrowButtons";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useCallback } from "react";
import Image from "next/image";

interface Testimonial {
  id: string;
  testimonial: string;
  profileName: string;
  profilePosition: string;
  profileAvatarUrl: string;
}

interface TestimonialPresentationProps {
  testimonials: Testimonial[];
}

const TestimonialsPresentation = ({
  testimonials,
}: TestimonialPresentationProps) => {
  const autoplayOptions = {
    delay: 6000,
    rootNode: (emblaRoot: HTMLElement) => emblaRoot.parentElement,
    stopOnInteraction: true,
    stopOnMouseEnter: false,
    playOnInit: true,
  };

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay(autoplayOptions),
  ]);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  const onButtonClick = useCallback(
    (callback: () => void) => {
      callback();
      emblaApi?.plugins()?.autoplay?.reset();
    },
    [emblaApi],
  );

  return (
    <section className="relative mx-auto h-screen">
      <div className="h-full overflow-hidden px-8" ref={emblaRef}>
        <div className="-ml-4 flex h-full touch-pan-y py-6">
          {testimonials.map((testimonial) => (
            <div
              className="flex h-full min-w-0 flex-[0_0_100%] translate-x-0 transform flex-col py-16 pl-4"
              key={testimonial.id}
            >
              <p className="relative font-display text-xl font-medium leading-none tracking-tighter md:text-3xl">
                &quot;{testimonial.testimonial}&quot;
              </p>
              <div className="mt-auto flex items-end gap-4 md:w-3/4">
                <div className="aspect-square w-28 overflow-hidden rounded-2xl">
                  <Image
                    src={testimonial.profileAvatarUrl}
                    width={100}
                    height={100}
                    alt={testimonial.profileName}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="flex w-1/2 flex-col gap-2">
                  <span className="text-lg font-semibold leading-none tracking-tight">
                    {testimonial.profileName}
                  </span>
                  <span className="text-lg leading-none tracking-tight text-muted-foreground xl:leading-tight">
                    {testimonial.profilePosition}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute bottom-0 hidden w-full justify-end px-8 py-16 md:flex">
        <div className="grid grid-cols-2 items-center gap-3">
          <PrevButton
            onClick={() => onButtonClick(onPrevButtonClick)}
            disabled={prevBtnDisabled}
            className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-full border-2 border-foreground transition-colors duration-200 hover:bg-muted disabled:text-gray-400"
          />
          <NextButton
            onClick={() => onButtonClick(onNextButtonClick)}
            disabled={nextBtnDisabled}
            className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-full border-2 border-foreground transition-colors duration-200 hover:bg-muted disabled:text-gray-400"
          />
        </div>
      </div>
    </section>
  );
};

export default TestimonialsPresentation;
