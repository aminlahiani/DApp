import HeroOne from "components/Hero/HeroOne";
import React from "react";
import { FAQ } from "./sections/FAQ";

import { HomeHeroData, HomeServicesData, HomeAboutData, HomeTestimonialData } from "data/HomeData";

import HomeAbout from "components/About/HomeAbout";
import SwiperTestimonial from "components/Testimonials/SwiperTestimonial";
import ServicesOne from "components/Services/ServicesOne";
import LatestPosts from "components/LatestPosts";
import { HomeLatestPostsData } from "data/HomeData";

function Index() {
  return (
    <div>
      <HeroOne nomobileimg data={HomeHeroData} />

      <ServicesOne data={HomeServicesData} />

      <HomeAbout data={HomeAboutData} />

      <SwiperTestimonial data={HomeTestimonialData} />

      <LatestPosts data={HomeLatestPostsData} />

      <FAQ />
    </div>
  );
}

export default Index;
