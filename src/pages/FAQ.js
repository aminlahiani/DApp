import { Container } from "@mui/material";
import FaqList from "components/FaqList";
import HeroFive from "components/Hero/HeroFive";
import { FAQHeroData, FaqListData } from "data/FAQData";

function FAQ() {
  return (
    <>
      <HeroFive data={FAQHeroData} />

      <Container maxWidth="md" sx={{ py: 3 }}>
        <FaqList data={FaqListData} />
      </Container>
    </>
  );
}

export default FAQ;
