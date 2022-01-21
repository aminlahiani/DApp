import BlogsList from "components/Blogs/BlogsList";
import CtaNewsletter from "components/Cta/CtaNewsletter";

import BlogsHeroData from "data/Blogs/blog-hero-data.json";
import BlogsData from "data/Blogs/blogs-data.json";
import BlogsHero from "components/Blogs/BlogsHero";

function Blogs() {
  return (
    <div>
      {/* {JSON.stringify(BlogsData)} */}
      <BlogsHero
        //nomobileimg
        data={BlogsHeroData}
      />
      
      <BlogsList data={BlogsData} />
      <CtaNewsletter />
    </div>
  );
}

export default Blogs;
