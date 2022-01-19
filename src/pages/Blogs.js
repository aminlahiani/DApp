import HeroOne from "components/Hero/HeroOne";

import BlogList from "components/BlogList";

import BlogsHeroData from "data/Blogs/blog-hero-data.json";
import BlogsData from "data/Blogs/blogs-data.json";

import CtaNewsletter from "components/Cta/CtaNewsletter";

function Blogs() {
  return (
    <div>
      {/* {JSON.stringify(BlogsData)} */}
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
