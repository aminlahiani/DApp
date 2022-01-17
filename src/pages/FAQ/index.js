import HeroFive from "components/Hero/HeroFive";
import React from "react";
import { FAQ } from "./sections/FAQ";

function index() {
  return (
    <>
      <HeroFive
        heading="Have any Question?"
        shortDescription="Search our FAQ for answers to ."
        headingtypedJS={[
          "anything you might ask.",
          "anything you might ask.",
          "anything you might ask.",
          "anything you might ask.",
        ]}
      />
      <FAQ />
    </>
  );
}

export default index;
