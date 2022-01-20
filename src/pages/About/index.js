import React from "react";

import { Team } from "./sections/Team";

import { Newsletter } from "./sections/Newsletter";

import HeroFour from "components/Hero/HeroFour";
import AboutOne from "components/About/AboutOne";
import AboutTwo from "components/About/AboutTwo";
import AboutThree from "components/About/AboutThree";
import AboutFeaturing from "components/About/AboutFeaturing";

import SimpleTestimonial from "components/Testimonials/SimpleTestimonial";

import AboutHeroData from "data/About/about-hero-data.json";
import AboutOneData from "data/About/about-one-data.json";
import AboutTowData from "data/About/about-tow-data.json";
import AboutThreeData from "data/About/about-three-data.json";
import AboutFeaturingData from "data/About/about-featuring-data.json";
import AboutTestimonialData from "data/About/about-testimonial-data.json";
import Card1 from "./sections/Card1";

function About() {
  return (
    <>
      {/* <Hero /> */}
      {/* {JSON.stringify(AboutTestimonialData)} */}

      <HeroFour data={AboutHeroData} />

      <AboutOne data={AboutOneData} />

      <AboutTwo data={AboutTowData} />

      <AboutThree data={AboutThreeData} />

      <AboutFeaturing data={AboutFeaturingData} />

      <SimpleTestimonial data={AboutTestimonialData} />

       <Card1/>
       
      <Team />

      <Newsletter />
    </>
  );
}

export default About;
