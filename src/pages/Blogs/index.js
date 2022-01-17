import HeroOne from "components/Hero/HeroOne";
import React from "react";
import { BlogList } from "./sections/BlogList";

import { Newsletter } from "./sections/Newsletter";
import { useTheme } from "@mui/material/styles";
function index() {
  const theme = useTheme();
  return (
    <div>    
     <HeroOne
      //nomobileimg
        heading="  Organic company growth with targeted leads"
        shortDescription="Not just a set of tools, the package includes ready-to-deploy conceptual
        applications written in JavaScript & TypeScript."
       imagesrc = {`/static/contact/undraw_contact_us_${theme.palette.mode}.svg`}
        buttons={[
          {
            variant: "contained",
            buttonColor: "btn-warning",
            url: "/about",
            text: "Browse Components",
          },
        ]}
      />
      <BlogList />
      <Newsletter />
    </div>
  );
}

export default index;
