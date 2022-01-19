import { Container } from "@mui/material";
import FaqList from "components/FaqList";
import HeroFive from "components/Hero/HeroFive";
//import {  FaqListData } from "data/FAQData";

import FAQHeroData from "data/FAQ/faq-hero-data.json";
import FaqListData from "data/FAQ/faq-list-data.json";
function FAQ() {
  return (
    <>
      {/* {JSON.stringify(FaqListData)} */}
      <HeroFive data={FAQHeroData} />

      <Container maxWidth="md" sx={{ py: 3 }}>
        <FaqList data={FaqListData} />
      </Container>
    </>
  );
}

export default FAQ;
