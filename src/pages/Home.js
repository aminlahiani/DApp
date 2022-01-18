import {
  HomeHeroData,
  HomeServicesData,
  HomeAboutData,
  HomeTestimonialData,
  HomeLatestPostsData,
} from "data/HomeData";

import HomeAbout from "components/About/HomeAbout";
import SwiperTestimonial from "components/Testimonials/SwiperTestimonial";
import ServiceList from "components/ServiceList";
import LatestPosts from "components/LatestPosts";
import CtaNewsletter from "components/Cta/CtaNewsletter";
import HeroOne from "components/Hero/HeroOne";

function Home() {
  return (
    <div>
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
