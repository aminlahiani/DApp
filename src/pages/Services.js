import HeroTwo from "components/Hero/HeroTwo";
import { useTheme } from "@mui/material/styles";
import { ServicesHeroData, ServicesData, ServiceFeaturingData } from "data/ServicesData";
import ServiceList from "components/ServiceList";
import FeaturingOne from "components/Featuring/FeaturingOne";
import CtaNewsletter from "components/Cta/CtaNewsletter";

function Services() {
  const theme = useTheme();
  return (
    <div>
      <HeroTwo data={ServicesHeroData} />
      <ServiceList data={ServicesData} />
      <FeaturingOne data={ServiceFeaturingData} />
      <CtaNewsletter />
    </div>
  );
}

export default Services;
