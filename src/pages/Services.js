// Services  components
import ServisesHero from "../components/Services/ServisesHero";
import ServicesList from "../components/Services/ServicesList";
import ServiceFeaturing from "../components/Services/ServiceFeaturing";
import Newsletter from "../components/Newsletter";
import ReactHelmet from "../components/ReactHelmet";

// Services  data
import ServicesHeroData from "../data/Services/services-hero-data.json";
import ServicesData from "../data/Services/services-data.json";
import ServiceFeaturingData from "../data/Services/services-featuring-data.json";

function Services() {
  return (
    <>
      {/* React Helmet : src > components > ReactHelmet */}
      <ReactHelmet title="Services" />

      {/* Hero Section : src > components > Services > ServisesHero  */}
      <div data-aos="fade-up">
        <ServisesHero nomobileimg data={ServicesHeroData} />
      </div>

      {/* Services List Section : src > components > Services > ServicesList */}
      <div data-aos="fade-up">
        <ServicesList data={ServicesData} />
      </div>

      {/* Featuring  Section  : src > components > Services > ServiceFeaturing */}
      <div data-aos="fade-up">
        <ServiceFeaturing data={ServiceFeaturingData} />
      </div>

      {/* Newsletter Section : src > components > Newsletter */}
      <div data-aos="fade-up">
        <Newsletter />
      </div>
    </>
  );
}

export default Services;
