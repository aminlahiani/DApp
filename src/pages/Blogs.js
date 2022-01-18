import HeroOne from "components/Hero/HeroOne";

import BlogList from "components/BlogList";
import BlogsData from "data/blog/blogs-data.json";

import { BlogsHeroData } from "data/BlogsData";
import CtaNewsletter from "components/Cta/CtaNewsletter";

function Blogs() {
  return (
    <div>
      <HeroOne
        //nomobileimg
        data={BlogsHeroData}
      />

      <BlogList data={BlogsData} />
      <CtaNewsletter />
    </div>
  );
}

export default Blogs;
