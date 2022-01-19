import React from "react";

import { AboutUs } from "./sections/AboutUs";
import { Team } from "./sections/Team";
import { Featuring } from "./sections/Featuring";
import { Newsletter } from "./sections/Newsletter";

import { About2 } from "./sections/About2";

import HeroFour from "components/Hero/HeroFour";
import SimpleTestimonial from "components/Testimonials/SimpleTestimonial";

import AboutHeroData from "data/About/about-hero-data.json";
import AboutTestimonialData from "data/About/about-testimonial-data.json";

function About() {
  return (
    <>
      {/* <Hero /> */}
      {JSON.stringify(AboutTestimonialData)}

      <HeroFour data={AboutHeroData} />

      <AboutUs />
      <About2 />

      <SimpleTestimonial data={AboutTestimonialData} />
      <Featuring />
      <Team />

      <Newsletter />
    </>
  );
}

export default About;
