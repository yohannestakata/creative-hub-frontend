"use client";

import {
  AboutContainer,
  EventsContainer,
  GalleryContainer,
  HeaderContainer,
  ServicesContainer,
  TestimonialsContainer,
} from "@/components/home";
import Footer from "@/components/ui/Footer";

const Home = () => {
  return (
    <div>
      <HeaderContainer />
      <main>
        <AboutContainer />
        <ServicesContainer />
        <TestimonialsContainer />
        <GalleryContainer />
        <EventsContainer />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
