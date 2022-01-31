// @mui material components
import Container from "@mui/material/Container";

// FAQ components
import FAQHero from "../components/FAQ/FAQHero";
import FaqList from "../components/FAQ/FaqList";
import ReactHelmet from "../components/ReactHelmet";
import Newsletter from "../components/Newsletter";

// FAQ  data
import FAQHeroData from "../data/FAQ/faq-hero-data.json";
import FaqListData from "../data/FAQ/faq-list-data.json";

function FAQ() {
  return (
    <>
      <ReactHelmet title="FAQ" />
      {/* Hero Section */}
      <div data-aos="fade-up">
        <FAQHero data={FAQHeroData} />
      </div>
      <div data-aos="fade-up">
        <Container maxWidth="md" sx={{ py: 3 }}>
          <FaqList data={FaqListData} />
        </Container>
      </div>
      {/* Newsletter  Section */}
      <div data-aos="fade-up">
        <Newsletter />
      </div>
    </>
  );
}

export default FAQ;
