import { Footer, Nav } from "@/components/layout";
import {
  EventsListContainer,
  EventCalendarContainer,
  PastEventsContainer,
} from "@/components/pages/events";

const Events = () => {
  return (
    <>
      <Nav />
      <EventsListContainer />
      <EventCalendarContainer />
      <PastEventsContainer />
      <Footer />
    </>
  );
};

export default Events;
