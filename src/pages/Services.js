//import ServiceList from "components/ServiceList";
import ServisesHero from "components/Services/ServisesHero";
import ServicesList from "components/Services/ServicesList";
import ServiceFeaturing from "components/Services/ServiceFeaturing";
import CtaNewsletter from "components/Cta/CtaNewsletter";

//data
import ServicesHeroData from "data/Services/services-hero-data.json";
import ServicesData from "data/Services/services-data.json";
import ServiceFeaturingData from "data/Services/services-featuring-data.json";

function Services() {
  return (
    <div>
      {/* {JSON.stringify(ServiceFeaturingData)} */}

      <ServisesHero data={ServicesHeroData} />
      <ServicesList data={ServicesData} />
      <ServiceFeaturing data={ServiceFeaturingData} />

      {/* <ServiceList data={ServicesData} /> */}

      <CtaNewsletter />
    </div>
  );
}

export default Services;
