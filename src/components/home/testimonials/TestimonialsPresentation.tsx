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
              className="h-full min-w-0 flex-[0_0_100%] translate-x-0 transform pl-4"
              key={testimonial.id}
            >
              <p className="font-display text-2xl font-medium leading-none">
                {testimonial.testimonial}
              </p>
              <div className="mt-6 flex w-3/4 items-end gap-4">
                <div className="aspect-square w-32 overflow-hidden rounded-2xl">
                  <Image
                    src={testimonial.profileAvatarUrl}
                    width={100}
                    height={100}
                    alt={testimonial.profileName}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="flex w-1/2 flex-col gap-2">
                  <span className="text-lg font-semibold">
                    {testimonial.profileName}
                  </span>
                  <span className="leading-snug text-muted-foreground">
                    {testimonial.profilePosition}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute bottom-0 flex w-full justify-end px-8 py-16">
        <div className="grid grid-cols-2 items-center gap-4">
          <PrevButton
            onClick={() => onButtonClick(onPrevButtonClick)}
            disabled={prevBtnDisabled}
            className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-full hover:bg-muted disabled:text-gray-400"
          />
          <NextButton
            onClick={() => onButtonClick(onNextButtonClick)}
            disabled={nextBtnDisabled}
            className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-full hover:bg-muted disabled:text-gray-400"
          />
        </div>
      </div>
    </section>
  );
};

export default TestimonialsPresentation;