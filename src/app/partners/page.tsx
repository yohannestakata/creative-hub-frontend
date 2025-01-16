import { Footer, Nav } from "@/components/layout";
import {
  PartnersGalleryContainer,
  PartnersHeaderContainer,
} from "@/components/pages/partners";
import { PartnersArticleContainer } from "@/components/pages/partners/partners-article";
import PartnersInsightListConainer from "@/components/pages/partners/partners-insight-list/PartnersInsightListContainer";

const Partners = () => {
  return (
    <>
      <Nav />
      <PartnersHeaderContainer />
      <PartnersArticleContainer />
      <PartnersGalleryContainer />
      <PartnersInsightListConainer />
      <Footer />
    </>
  );
};

export default Partners;
