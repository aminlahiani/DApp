// Services page components

import ServisesHero from "components/Services/ServisesHero";
import ServicesList from "components/Services/ServicesList";
import ServiceFeaturing from "components/Services/ServiceFeaturing";
import CtaNewsletter from "components/Cta/CtaNewsletter";

// Services page data
import ServicesHeroData from "data/Services/services-hero-data.json";
import ServicesData from "data/Services/services-data.json";
import ServiceFeaturingData from "data/Services/services-featuring-data.json";

function Services() {
  return (
    <div>
      {/* {JSON.stringify(ServiceFeaturingData)} */}
      <div data-aos="fade-up">
        <ServisesHero nomobileimg data={ServicesHeroData} />
      </div>
      <div data-aos="fade-up">
        <ServicesList data={ServicesData} />
      </div>
      <div data-aos="fade-up">
        <ServiceFeaturing data={ServiceFeaturingData} />
      </div>

      <div data-aos="fade-up">
        <CtaNewsletter />
      </div>
    </div>
  );
}

export default Services;
