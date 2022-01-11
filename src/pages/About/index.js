import React from "react";

import { Hero } from "./sections/Hero";
import { AboutUs } from "./sections/AboutUs";
import { Team } from "./sections/Team";
import { Featuring } from "./sections/Featuring";
import { Newsletter } from "./sections/Newsletter";
import { Testimonial } from "./sections/Testimonial";

function About() {
  return (
    <>
      <Hero />
      <AboutUs />
      <Testimonial />
      <Team />
      <Featuring />
      <Newsletter />
    </>
  );
}

export default About;
