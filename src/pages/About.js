import Box from "@mui/material/Box";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
      {/* React Helmet : src > components > ReactHelmet  */}
      <ReactHelmet title="About" />

      {/* Hero Section : src > components > About > AboutHero */}
      <div data-aos="fade-up">
        <AboutHero data={AboutHeroData} />
      </div>

      {/* About One Section : src > components > About > AboutOne */}
      <div data-aos="fade-up">
        <AboutOne data={AboutOneData} />
      </div>

      {/* About Two Section : src > components > About > AboutTwo */}
      <div data-aos="fade-up">
        <AboutTwo data={AboutTowData} />
      </div>

      {/* About Three Section : src > components > About > AboutThree */}
      <div data-aos="fade-up">
        <AboutThree data={AboutThreeData} />
      </div>

      {/* Featuring Section : src > components > About > AboutFeaturing */}
      <div data-aos="fade-up">
        <AboutFeaturing data={AboutFeaturingData} />
      </div>

      {/* Testimonial Section : src > components > About > AboutTestimonial */}
      <div data-aos="fade-up">
        <AboutTestimonial data={AboutTestimonialData} />
      </div>

      {/* Team List Section  : src > components > About > AboutTeamList  */}
      <div data-aos="fade-up">
        <AboutTeamList data={AboutTeamData} />
      </div>

      {/* Newsletter Section : src > components > Newsletter */}
      <div data-aos="fade-up">
        <Newsletter />
      </div>
      <Box
        sx={{
          backgroundColor: "background.default",
          minHeight: "584px",
        }}
      >
        <FontAwesomeIcon
          icon={["fab", "facebook-square"]}
          color="Mediumslateblue"
          className="first-icon"
          size="lg"
        />
      </Box>
    </>
  );
}

export default About;
