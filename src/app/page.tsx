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
import { Footer, Nav } from "@/components/layout";

const Home = () => {
  return (
    <div>
      <Nav />
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
