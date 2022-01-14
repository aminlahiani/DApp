import React from "react";
import { AboutUs } from "./sections/AboutUs";
import { FAQ } from "./sections/FAQ";
import { Hero } from "./sections/Hero";
import { LatestPosts } from "./sections/LatestPosts";

import { Services } from "./sections/Services";
import { Testimonials } from "./sections/Testimonials";

function Index() {
  return (
    <div>
      <Hero />
      <Services />
      <AboutUs />
      <Testimonials />

      <LatestPosts />
      <FAQ />
    </div>
  );
}

export default Index;
