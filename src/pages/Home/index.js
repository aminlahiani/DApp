import HeroOne from "components/Hero/HeroOne";
import React from "react";
import { FAQ } from "./sections/FAQ";
import { LatestPosts } from "./sections/LatestPosts";
import { Testimonials } from "./sections/Testimonials";
import { useTheme } from "@mui/material/styles";
import { HomeHeroData, HomeServicesData, HomeAboutData, HomeTestimonialData } from "data/HomeData";
import ServicesOne from "components/Services/ServicesOne";
import HomeAbout from "components/About/HomeAbout";
import { SwiperTestimonial } from "components/Testimonials/SwiperTestimonial";

function Index() {
  const theme = useTheme();
  return (
    <div>
      <HeroOne nomobileimg data={HomeHeroData} />

      <ServicesOne data={HomeServicesData} />
      <HomeAbout data={HomeAboutData} />

      <SwiperTestimonial data={HomeTestimonialData} />

      <LatestPosts />
      <FAQ />
    </div>
  );
}

export default Index;
