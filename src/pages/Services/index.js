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
      <HeroTwo data={ServicesHeroData} />
      <Services />
      <Information />
    </div>
  );
}

export default index;
