// Blogs page components
import BlogsHero from "components/Blogs/BlogsHero";
import BlogsList from "components/Blogs/BlogsList";
import CtaNewsletter from "components/Cta/CtaNewsletter";

// Blogs page data
import BlogsHeroData from "data/Blogs/blog-hero-data.json";
import BlogsData from "data/Blogs/blogs-data.json";

function Blogs() {
  return (
    <div>
      {/* {JSON.stringify(BlogsData)} */}
      <div data-aos="fade-up">
        <BlogsHero
          // nomobileimg
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
