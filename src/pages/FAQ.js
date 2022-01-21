import { Container } from "@mui/material";
import FAQHero from "components/FAQ/FAQHero";
import FaqList from "components/FAQ/FaqList";

import FAQHeroData from "data/FAQ/faq-hero-data.json";
import FaqListData from "data/FAQ/faq-list-data.json";

function FAQ() {
  return (
    <>
      {/* {JSON.stringify(FaqListData)} */}
      <FAQHero data={FAQHeroData} />

      <Container maxWidth="md" sx={{ py: 3 }}>
        <FaqList data={FaqListData} />
      </Container>
    </>
  );
}

export default FAQ;
