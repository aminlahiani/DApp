// Home page components
import HomeHero from "components/Home/HomeHero";
import HomeAbout from "components/Home/HomeAbout";
import HomeTestimonial from "components/Home/HomeTestimonial";
import HomeServiceList from "components/Home/HomeServiceList";
import HomeLatestPosts from "components/Home/HomeLatestPosts";
import CtaNewsletter from "components/Cta/CtaNewsletter";

// Home page data
import HomeHeroData from "data/Home/home-hero-data.json";
import HomeServicesData from "data/Home/home-services-data.json";
import HomeAboutData from "data/Home/home-about-data.json";
import HomeTestimonialData from "data/Home/home-testimonial-data.json";
import HomeLatestPostsData from "data/Home/home-latestposts-data.json";

function Home() {
  return (
    <div>
      {/* {JSON.stringify(HomeLatestPostsData)} */}

      <div data-aos="fade-up">
        <HomeHero nomobileimg data={HomeHeroData} />
      </div>

      <div data-aos="fade-up">
        <HomeServiceList data={HomeServicesData} />
      </div>

      <div data-aos="fade-up">
        <HomeAbout data={HomeAboutData} />
      </div>
      <div data-aos="fade-up">
        <HomeTestimonial data={HomeTestimonialData} />
      </div>
      <div data-aos="fade-up">
        <HomeLatestPosts data={HomeLatestPostsData} />
      </div>
      <div data-aos="fade-up">
        <CtaNewsletter />
      </div>
    </div>
  );
}

export default Home;
