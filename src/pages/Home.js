import HomeHero from "components/Home/HomeHero";
import HomeAbout from "components/Home/HomeAbout";
import HomeTestimonial from "components/Home/HomeTestimonial";
import HomeServiceList from "components/Home/HomeServiceList";
import HomeLatestPosts from "components/Home/HomeLatestPosts";
import CtaNewsletter from "components/Cta/CtaNewsletter";

//data
import HomeHeroData from "data/Home/home-hero-data.json";
import HomeServicesData from "data/Home/home-services-data.json";
import HomeAboutData from "data/Home/home-about-data.json";
import HomeTestimonialData from "data/Home/home-testimonial-data.json";
import HomeLatestPostsData from "data/Home/home-latestposts-data.json";

function Home() {
  return (
    <div>
      {/* {JSON.stringify(HomeLatestPostsData)} */}

      <HomeHero nomobileimg data={HomeHeroData} />

      <HomeServiceList data={HomeServicesData} />

      <HomeAbout data={HomeAboutData} />

      <HomeTestimonial data={HomeTestimonialData} />

      <HomeLatestPosts data={HomeLatestPostsData} />

      <CtaNewsletter />
    </div>
  );
}

export default Home;
