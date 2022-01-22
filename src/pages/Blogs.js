import BlogsList from "components/Blogs/BlogsList";
import CtaNewsletter from "components/Cta/CtaNewsletter";

import BlogsHeroData from "data/Blogs/blog-hero-data.json";
import BlogsData from "data/Blogs/blogs-data.json";
import BlogsHero from "components/Blogs/BlogsHero";

function Blogs() {
  return (
    <div>
      {/* {JSON.stringify(BlogsData)} */}
      <div data-aos="fade-up">
        <BlogsHero
          //nomobileimg
          data={BlogsHeroData}
        />
      </div>
      <div data-aos="fade-up">
        <BlogsList data={BlogsData} />
      </div>
      <div data-aos="fade-up">
        <CtaNewsletter />
      </div>
    </div>
  );
}

export default Blogs;
