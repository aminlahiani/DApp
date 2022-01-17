import React from "react";

import { Services } from "./sections/Services";
import { Information } from "./sections/Information";
import HeroTwo from "components/Hero/HeroTwo";
import { useTheme } from "@mui/material/styles";
import { ServicesHeroData } from "data/ServicesData";

function index() {
  const theme = useTheme();
  return (
    <div>
      <HeroTwo 
      data={ServicesHeroData}
        heading="Organic company growth with targeted leads"
        headingtypedJS={["team", "design", "tool", "trfr"]}
        shortDescription="Not just a set of tools, the package includes ready-to-deploy conceptual
                applications written in JavaScript & TypeScript."
        imgdark="/static/contact/undraw_contact_us_dark.svg"
        imagesrc="/static/contact/undraw_contact_us_light.svg"
        buttons={[
          {
            variant: "contained",
            buttonColor: "btn-warning",
            url: "/about",
            text: "About Us",
          },
        ]}
      />
      <Services />
      <Information />
    </div>
  );
}

export default index;
