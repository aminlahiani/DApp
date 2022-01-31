// Blogs components
import BlogsHero from "../components/Blogs/BlogsHero";
import BlogsList from "../components/Blogs/BlogsList";
import Newsletter from "../components/Newsletter";
import ReactHelmet from "../components/ReactHelmet";

// Blogs data
import BlogsHeroData from "../data/Blogs/blog-hero-data.json";
import BlogsData from "../data/Blogs/blogs-data.json";

function Blogs() {
  return (
    <>
      {/* React Helmet : src > components > ReactHelmet  */}
      <ReactHelmet title="Blogs" />

      {/* Hero Section : src > components > Blogs > BlogsHero */}
      <div data-aos="fade-up">
        <BlogsHero nomobileimg data={BlogsHeroData} />
      </div>

      {/* Blogs List Section  : src > components > Blogs > BlogsList */}
      <div data-aos="fade-up">
        <BlogsList data={BlogsData} />
      </div>

      {/* Newsletter Section : src > components > Newsletter */}
      <div data-aos="fade-up">
        <Newsletter />
      </div>
    </>
  );
}

export default Blogs;
