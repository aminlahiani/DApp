import HeroOne from "components/Hero/HeroOne";
import React from "react";
import { BlogList } from "./sections/BlogList";

import { Newsletter } from "./sections/Newsletter";
import { BlogsHeroData } from "data/BlogsData";
function index() {

  return (
    <div>    
     <HeroOne
      //nomobileimg
      data={BlogsHeroData}
      />
      <BlogList />
      <Newsletter />
    </div>
  );
}

export default index;
