import { InsightCard, SectionTitle } from "@/components/ui";
import Image from "next/image";

type Events = {
  id: string;
  imageUrl: string;
  description: string;
  title: string;
  dateTime: string;
};

interface EventsListPresentationProps {
  events: Events[];
}

const EventsListPresentation = ({ events }: EventsListPresentationProps) => {
  return (
    <>
      <div className="px-8 pb-12 pt-8">
        <header className="relative col-span-12 mt-6 aspect-[3/5] overflow-hidden rounded-2xl md:aspect-[5/3] lg:aspect-banner">
          <Image
            src={events[0].imageUrl}
            alt="Header background"
            className="z-0 h-full w-full object-cover"
            priority
            width={1920}
            height={1080}
          />
          <div className="absolute inset-0 z-10 flex flex-col justify-end bg-gradient-to-bl from-black/40 to-black/80 md:p-8 p-6">
            <div className="w-full space-y-3 md:w-10/12 lg:w-1/2">
              <div className="w-fit rounded-md bg-background p-2 leading-none">
                {new Intl.DateTimeFormat("en-US", {
                  dateStyle: "medium",
                  timeStyle: "short",
                }).format(new Date(events[0].dateTime))}
              </div>
              <div className="font-display text-xl font-medium leading-none text-background lg:text-2xl">
                {events[0].title}
              </div>
              <div className="line-clamp-2 text-background opacity-60">
                {events[0].description}
              </div>
            </div>
          </div>
        </header>
      </div>

      <section className="py-12">
        <SectionTitle
          sectionTitle="Events You Don't Want to Miss"
          sectionName="Upcoming Events"
        />
        <div className="mt-10 grid grid-cols-12 gap-4 gap-y-6 px-8">
          {events.slice(1).map((event) => (
            <InsightCard blog={event} key={event.id} clickable={false} />
          ))}
        </div>
      </section>
    </>
  );
};

export default EventsListPresentation;
