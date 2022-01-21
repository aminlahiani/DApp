import HomeAbout from "components/Home/HomeAbout";
import SwiperTestimonial from "components/Testimonials/SwiperTestimonial";
import ServiceList from "components/ServiceList";
import LatestPosts from "components/LatestPosts";
import CtaNewsletter from "components/Cta/CtaNewsletter";
import HeroOne from "components/Hero/HeroOne";

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
      <HeroOne nomobileimg data={HomeHeroData} />

      <ServiceList data={HomeServicesData} />

      <HomeAbout data={HomeAboutData} />

      <SwiperTestimonial data={HomeTestimonialData} />

      <LatestPosts data={HomeLatestPostsData} />

      <CtaNewsletter />
    </div>
  );
}

export default Home;
