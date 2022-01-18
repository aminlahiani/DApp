import HeroTwo from "components/Hero/HeroTwo";
import { useTheme } from "@mui/material/styles";
import { ServicesHeroData, ServicesData, ServiceFeaturingData } from "data/ServicesData";
import ServicesOne from "components/Services/ServicesOne";
import FeaturingOne from "components/Featuring/FeaturingOne";
import CtaNewsletter from "components/Cta/CtaNewsletter";

function Services() {
  const theme = useTheme();
  return (
    <div>
      <HeroTwo data={ServicesHeroData} />
      <ServicesOne data={ServicesData} />
      <FeaturingOne data={ServiceFeaturingData} />
      <CtaNewsletter />
    </div>
  );
}

export default Services;
