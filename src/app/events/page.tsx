import { Footer } from "@/components/layout";
import {
  EventsListContainer,
  EventCalendarContainer,
  PastEventsContainer,
} from "@/components/pages/events";

const Events = () => {
  return (
    <>
      <EventsListContainer />
      <EventCalendarContainer />
      <PastEventsContainer />
      <Footer />
    </>
  );
};

export default Events;
