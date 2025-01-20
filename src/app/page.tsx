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

const Home = () => {
  return (
    <div>
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
    </div>
  );
};

export default Home;
