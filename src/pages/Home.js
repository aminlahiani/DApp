// Home  components
import HomeHero from "../components/Home/HomeHero";
import HomeAbout from "../components/Home/HomeAbout";
import HomeTestimonial from "../components/Home/HomeTestimonial";
import HomeServiceList from "../components/Home/HomeServiceList";
import HomeLatestPosts from "../components/Home/HomeLatestPosts";
import Newsletter from "../components/Newsletter";
import ReactHelmet from "../components/ReactHelmet";

// Home  data
import HomeHeroData from "../data/Home/home-hero-data.json";
import HomeServicesData from "../data/Home/home-services-data.json";
import HomeAboutData from "../data/Home/home-about-data.json";
import HomeTestimonialData from "../data/Home/home-testimonial-data.json";
import HomeLatestPostsData from "../data/Home/home-latestposts-data.json";

function Home() {
  return (
    <>
      {/* React Helmet to manage structured data tags */}
      <ReactHelmet title="Home" />
      {/* Hero Section */}
      <div data-aos="fade-up">
        <HomeHero nomobileimg data={HomeHeroData} />
      </div>
      {/* Services List Section  */}
      <div data-aos="fade-up">
        <HomeServiceList data={HomeServicesData} />
      </div>
      {/* About Us  Section  */}
      <div data-aos="fade-up">
        <HomeAbout data={HomeAboutData} />
      </div>
      {/* Testimonial Section  */}
      <div data-aos="fade-up">
        <HomeTestimonial data={HomeTestimonialData} />
      </div>
      {/* Latest Posts Section  */}
      <div data-aos="fade-up">
        <HomeLatestPosts data={HomeLatestPostsData} />
      </div>
      {/* Newsletter Section  */}
      <div data-aos="fade-up">
        <Newsletter />
      </div>
    </>
  );
}

export default Home;
