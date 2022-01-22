import AboutHero from "components/About/AboutHero";
import AboutOne from "components/About/AboutOne";
import AboutTwo from "components/About/AboutTwo";
import AboutThree from "components/About/AboutThree";
import AboutFeaturing from "components/About/AboutFeaturing";
import AboutTestimonial from "components/About/AboutTestimonial";
import AboutTeamList from "components/About/AboutTeamList";

import CtaNewsletter from "components/Cta/CtaNewsletter";

import AboutHeroData from "data/About/about-hero-data.json";
import AboutOneData from "data/About/about-one-data.json";
import AboutTowData from "data/About/about-tow-data.json";
import AboutThreeData from "data/About/about-three-data.json";
import AboutFeaturingData from "data/About/about-featuring-data.json";
import AboutTestimonialData from "data/About/about-testimonial-data.json";
import AboutTeamData from "data/About/about-team-data.json";

function About() {
  return (
    <>
      {/* <Hero /> */}
      {/* {JSON.stringify(AboutTestimonialData)} */}
      <div data-aos="fade-up">
        <AboutHero data={AboutHeroData} />
      </div>
      <div data-aos="fade-up">
        <AboutOne data={AboutOneData} />
      </div>
      <div data-aos="fade-up">
        <AboutTwo data={AboutTowData} />
      </div>
      <AboutThree data={AboutThreeData} />
      <div data-aos="fade-left">
        <AboutFeaturing data={AboutFeaturingData} />
      </div>
      <div data-aos="fade-up">
        <AboutTestimonial data={AboutTestimonialData} />
      </div>

      <div data-aos="fade-up">
        <AboutTeamList data={AboutTeamData} />
      </div>
      <div data-aos="fade-up">
        <CtaNewsletter />
      </div>
    </>
  );
}

export default About;
