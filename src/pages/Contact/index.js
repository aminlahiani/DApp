import React from "react";

import { Hero } from "./sections/Hero";
import { Newsletter } from "./sections/Newsletter";
import { Info } from "./sections/Info";
import { ContactForm } from "./sections/ContactForm";
function index() {
  return (
    <div>
      <Hero />
      <ContactForm />
      <Info />
      <Newsletter />
    </div>
  );
}

export default index;
