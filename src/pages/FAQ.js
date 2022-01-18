import { Box, Container } from "@mui/material";
import FaqList from "components/FaqList";
import HeroFive from "components/Hero/HeroFive";
import { FAQHeroData, FaqListData } from "data/FAQData";

import React from "react";
//import { FAQ } from "./sections/FAQ";

function index() {
  console.log(FaqListData);
  return (
    <>
      <HeroFive data={FAQHeroData} />

      <Container maxWidth="md" sx={{ py:3}}>
        <FaqList data={FaqListData} />
      </Container>

   
    </>
  );
}

export default index;
