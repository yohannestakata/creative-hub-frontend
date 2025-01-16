import { Footer } from "@/components/layout";
import {
  AboutContainer,
  AboutHeaderContainer,
  AboutMapContainer,
  AboutPassageContainer,
  AboutServicesContainer,
  AboutStatsContainer,
  AboutCollaboratorsContainer,
} from "@/components/pages/about";

const About = () => {
  return (
    <>
      <AboutHeaderContainer />
      <AboutContainer />
      <AboutStatsContainer />
      <AboutPassageContainer />
      <AboutCollaboratorsContainer />
      <AboutServicesContainer />
      <AboutMapContainer />
      <Footer />
    </>
  );
};

export default About;
