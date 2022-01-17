import React from "react";

import { Services } from "./sections/Services";
import { Information } from "./sections/Information";
import HeroTwo from "components/Hero/HeroTwo";
import { useTheme } from "@mui/material/styles";

function index() {
  const theme = useTheme();
  return (
    <div>
      <HeroTwo
      heading = "Organic company growth with targeted leads"
        headingtypedJS={["team", "design", "tool", "trfr"]}
        shortDescription="Not just a set of tools, the package includes ready-to-deploy conceptual
                applications written in JavaScript & TypeScript."
                imagesrc = {`/static/contact/undraw_contact_us_${theme.palette.mode}.svg`}
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
