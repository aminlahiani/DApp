import HeroThree from "components/Hero/HeroThree";
import { PortfolioHeroData } from "data/PortfolioData";
import React from "react";

import { PortfolioList } from "./sections/PortfolioList";

function index() {
  return (
    <div>
      <HeroThree data={PortfolioHeroData} />

      <PortfolioList />
    </div>
  );
}

export default index;
