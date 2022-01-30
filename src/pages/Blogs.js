// Blogs page components
import BlogsHero from "components/Blogs/BlogsHero";
import BlogsList from "components/Blogs/BlogsList";
import Newsletter from "components/Newsletter";
import ReactHelmet from "components/ReactHelmet";

// Blogs page data
import BlogsHeroData from "data/Blogs/blog-hero-data.json";
import BlogsData from "data/Blogs/blogs-data.json";

function Blogs() {
  return (
    <>
      <ReactHelmet title="Blogs" />
      {/* Hero Section */}
      <div data-aos="fade-up">
        <BlogsHero nomobileimg data={BlogsHeroData} />
      </div>
      {/* Blogs List Section */}
      <div data-aos="fade-up">
        <BlogsList data={BlogsData} />
      </div>
      {/* Newsletter Section */}
      <div data-aos="fade-up">
        <Newsletter />
      </div>
    </>
  );
}

export default Blogs;
