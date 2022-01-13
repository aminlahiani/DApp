import React from "react";
import { AboutUs } from "./sections/AboutUs";
import { FAQ } from "./sections/FAQ";
import { Hero } from "./sections/Hero";
import { News } from "./sections/News";
import { Newsletter } from "./sections/Newsletter";
import { Services } from "./sections/Services";
import { Testimonials } from "./sections/Testimonials";

function Index() {
  return (
    <div>
      <Hero />
      <Services />
      <AboutUs />
      <Testimonials />
      <FAQ />
      <News/>
      <Newsletter />
    </div>
  );
}

export default Index;
