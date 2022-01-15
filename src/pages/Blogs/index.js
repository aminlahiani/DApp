import React from "react";
import { BlogList } from "./sections/BlogList";
import { Hero } from "./sections/Hero";
import { Newsletter } from "./sections/Newsletter";

function index() {
  return (
    <div>
      <Hero />
      <BlogList />
      <Newsletter />
    </div>
  );
}

export default index;
