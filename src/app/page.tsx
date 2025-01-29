import {
  AboutContainer,
  EventsContainer,
  GalleryContainer,
  HeaderContainer,
  ServicesContainer,
  TestimonialsContainer,
  TeamContainer,
  PartnersContainer,
  InsightsContainer,
} from "@/components/pages/home";
import { Footer } from "@/components/layout";
import { CustomCursor, SmoothScrolling } from "@/components/ui";

const Home = () => {
  return (
    <>
      <SmoothScrolling>
        <HeaderContainer />
        <main>
          <AboutContainer />
          <EventsContainer />
          <GalleryContainer />
          <TestimonialsContainer />
          <PartnersContainer />
          <ServicesContainer />
          <TeamContainer />
          <InsightsContainer />
        </main>
        <Footer />
      </SmoothScrolling>
      <CustomCursor />
    </>
  );
};

export default Home;
