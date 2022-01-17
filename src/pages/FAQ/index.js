import HeroFive from "components/Hero/HeroFive";
import { FAQHeroData } from "data/FAQData";
import React from "react";
import { FAQ } from "./sections/FAQ";

function index() {
  return (
    <>
      <HeroFive
        data={FAQHeroData}
      />
      <FAQ />
    </>
  );
}

export default index;
