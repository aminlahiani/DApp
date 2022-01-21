import HeroTwo from "components/Hero/HeroTwo";
import ServiceList from "components/ServiceList";
import FeaturingOne from "components/Featuring/FeaturingOne";
import CtaNewsletter from "components/Cta/CtaNewsletter";

//data
import ServicesHeroData from "data/Services/services-hero-data.json";
import ServicesData from "data/Services/services-data.json";
import ServiceFeaturingData from "data/Services/services-featuring-data.json";

function Services() {
  return (
    <div>
      {/* {JSON.stringify(ServiceFeaturingData)} */}
      <HeroTwo data={ServicesHeroData} />
      <ServiceList data={ServicesData} />
      <FeaturingOne data={ServiceFeaturingData} />
      <CtaNewsletter />
    </div>
  );
}

export default Services;
