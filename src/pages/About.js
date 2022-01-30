// About components
import AboutHero from "../components/About/AboutHero";
import AboutOne from "../components/About/AboutOne";
import AboutTwo from "../components/About/AboutTwo";
import AboutThree from "../components/About/AboutThree";
import AboutFeaturing from "../components/About/AboutFeaturing";
import AboutTestimonial from "../components/About/AboutTestimonial";
import AboutTeamList from "../components/About/AboutTeamList";
import Newsletter from "../components/Newsletter";
import ReactHelmet from "../components/ReactHelmet";

// About data
import AboutHeroData from "../data/About/about-hero-data.json";
import AboutOneData from "../data/About/about-one-data.json";
import AboutTowData from "../data/About/about-tow-data.json";
import AboutThreeData from "../data/About/about-three-data.json";
import AboutFeaturingData from "../data/About/about-featuring-data.json";
import AboutTestimonialData from "../data/About/about-testimonial-data.json";
import AboutTeamData from "../data/About/about-team-data.json";

function About() {
  return (
    <>
      <ReactHelmet title="About" />
      {/* Hero Section */}
      <div data-aos="fade-up">
        <AboutHero data={AboutHeroData} />
      </div>
      {/* About One Section */}
      <div data-aos="fade-up">
        <AboutOne data={AboutOneData} />
      </div>
      {/* About Two Section */}
      <div data-aos="fade-up">
        <AboutTwo data={AboutTowData} />
      </div>
      {/* About Three Section */}
      <div data-aos="fade-up">
        <AboutThree data={AboutThreeData} />
      </div>
      {/* Featuring Section */}
      <div data-aos="fade-up">
        <AboutFeaturing data={AboutFeaturingData} />
      </div>
      {/* Testimonial Section */}
      <div data-aos="fade-up">
        <AboutTestimonial data={AboutTestimonialData} />
      </div>
      {/* Team List Section */}
      <div data-aos="fade-up">
        <AboutTeamList data={AboutTeamData} />
      </div>
      {/* Newsletter Section  */}
      <div data-aos="fade-up">
        <Newsletter />
      </div>
    </>
  );
}

export default About;
