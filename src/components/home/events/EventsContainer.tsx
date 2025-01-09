import { EventsPresentation } from "./";

const EventsContainer = () => {
  const sampleEvents = [
    {
      id: "1",
      title: "Flexible Workspace",
      copy: "Find your perfect spot in our open-plan areas, dedicated desks, or private offices. Whether you're a solo creator or a growing team, we adapt to how you work best.",
      imageUrl:
        "https://plus.unsplash.com/premium_photo-1683880731495-ae0f4bf18c7e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHdvcmtzcGFjZXxlbnwwfDB8MHx8fDA%3D",
      dateTime: "2025-02-15T10:00:00",
    },
    {
      id: "2",
      title: "Community Events",
      copy: "Connect with like-minded professionals through our weekly workshops, networking sessions, and social gatherings. Build relationships that go beyond just sharing a space.",
      imageUrl:
        "https://images.unsplash.com/photo-1531058020387-3be344556be6?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      dateTime: "2025-03-10T18:30:00",
    },
    {
      id: "3",
      title: "Premium Amenities",
      copy: "Enjoy barista-quality coffee, high-speed internet, fully equipped meeting rooms, and 24/7 access. We take care of the details so you can focus on what matters.",
      imageUrl:
        "https://images.unsplash.com/photo-1583372907808-417fb7797ca9?q=80&w=2558&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      dateTime: "2025-04-05T14:00:00",
    },
  ];

  return <EventsPresentation services={sampleEvents} />;
};

export default EventsContainer;
