import React from "react";

import { Hero } from "./sections/Hero";
import { AboutUs } from "./sections/AboutUs";
import { Team } from "./sections/Team";
import { Featuring } from "./sections/Featuring";
import { Newsletter } from "./sections/Newsletter";
import { Testimonial } from "./sections/Testimonial";
import { About2 } from "./sections/About2";
import HeroFour from "components/Hero/HeroFour";

function About() {
  return (
    <>
      {/* <Hero /> */}
      <HeroFour/>
      <AboutUs />
      <About2 />
      <Featuring />
      <Testimonial />
      <Team />

      <Newsletter />
    </>
  );
}

export default About;
