import React from "react";
import { Newsletter } from "./sections/Newsletter";
import { Info } from "./sections/Info";
import { ContactForm } from "./sections/ContactForm";

import HeroOne from "components/Hero/HeroOne";
//data
import ContactHeroData from "data/Contact/contact-hero-data.json";

function index() {
  return (
    <div>
      {/* {JSON.stringify(ContactHeroData)} */}
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
