"use client";

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
        <TeamContainer />
        <PartnersContainer />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
