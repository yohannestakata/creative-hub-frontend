import {
  AboutContainer,
  EventsContainer,
  GalleryContainer,
  HeaderContainer,
  ServicesContainer,
  TestimonialsContainer,
  TeamContainer,
  PartnersContainer,
} from "@/components/pages/home";
import { Footer } from "@/components/layout";
import { BlogsContainer } from "@/components/pages/home/blogs";

const Home = () => {
  return (
    <div>
      <HeaderContainer />
      <main>
        <AboutContainer />
        <EventsContainer />
        <GalleryContainer />
        <TestimonialsContainer />
        <PartnersContainer />
        <ServicesContainer />
        <TeamContainer />
        <BlogsContainer />
      </main>

      <Footer />
    </div>
  );
};

export default Home;
