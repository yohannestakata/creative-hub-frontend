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
import { NavPresentation } from "@/components/pages/home/nav";
import { SmoothScrolling } from "@/components/ui";

const Home = () => {
  return (
    <SmoothScrolling>
      <NavPresentation />
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
  );
};

export default Home;
