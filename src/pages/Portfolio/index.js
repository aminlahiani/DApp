import React from "react";
import { Hero } from "./sections/Hero";
import { PortfolioList } from "./sections/PortfolioList";

function index() {
  return (
    <div>
      <Hero />

      <PortfolioList />
    </div>
  );
}

export default index;
