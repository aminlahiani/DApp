import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";

import { Header1 } from "../components/header";
import { HomeDesigners } from "../components/home-designers";
import MainLayout from "../layout/MainLayout";
import { HomeHero } from "../components/home-hero";
import { Contact } from "../components/contact";
import { HomeServices } from "../components/home-services";
import { HomeAbout } from "../components/home-about";
import { HomeTestimonials } from "../components/home-testimonials";
import FQS from "../components/fqs";
import { HomeHero1 } from "../components/home/home-hero";
import { HomeNewsletter } from "../components/home/home-newsletter";

export default function Home() {
  return (
    <>
    <HomeHero1/>
     
      <div id="services">
        <HomeServices />
      </div>

      <div id="about">
        <HomeAbout />
      </div>

      <div id="testimonial">
        <HomeTestimonials />
      </div>
      <div id="fqs">
        <FQS />
      </div>
      <HomeNewsletter/>
    </>
  );
}
