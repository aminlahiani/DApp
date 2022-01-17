import React from "react";

import { Hero } from "./sections/Hero";
import { Newsletter } from "./sections/Newsletter";
import { Info } from "./sections/Info";
import { ContactForm } from "./sections/ContactForm";
import { ContactHeroData } from "data/ContactData";
import HeroOne from "components/Hero/HeroOne";
function index() {
  return (
    <div>
     <HeroOne
      //nomobileimg
      data={ContactHeroData}
      />
      <ContactForm />
      <Info />
      <Newsletter />
    </div>
  );
}

export default index;
