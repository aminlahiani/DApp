import HeroOne from "components/Hero/HeroOne";
import React from "react";
import { AboutUs } from "./sections/AboutUs";
import { FAQ } from "./sections/FAQ";
import { LatestPosts } from "./sections/LatestPosts";
import { Services } from "./sections/Services";
import { Testimonials } from "./sections/Testimonials";
import { useTheme } from "@mui/material/styles";
import { HomeHeroData } from "data/HomeData";
function Index() {
  const theme = useTheme();
  return (
    <div>
      <HeroOne
      nomobileimg
      data={HomeHeroData}
        heading="Digital Agency UI React template with MUI"
        shortDescription="  Not just a set of tools, the package includes ready-to-deploy conceptualapplications written in JavaScript & TypeScript."
        imagesrc = {`/static/contact/undraw_contact_us_${theme.palette.mode}.svg`}
        buttons={[
          {
            variant: "contained",
            buttonColor: "btn-warning",
            url: "/about",
            text: "About Us",
          },
          {
            buttonColor: "btn-light",
            url: "/contact",
            text: "Contact Us",
            variant: "outlined",
          },
        ]}
      />

      <Services />
      <AboutUs />
      <Testimonials />

      <LatestPosts />
      <FAQ />
    </div>
  );
}

export default Index;
