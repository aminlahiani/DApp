import HeroThree from "components/Hero/HeroThree";
import React from "react";
import { Hero } from "./sections/Hero";
import { PortfolioList } from "./sections/PortfolioList";

function index() {
  return (
    <div>
      <HeroThree  heading = "Our Portfolio"
    
        shortDescription="Not just a set of tools, the package includes ready-to-deploy conceptual
                applications written in JavaScript & TypeScript."  />

      <PortfolioList />
    </div>
  );
}

export default index;
