// react-router-dom components
import { useParams } from "react-router-dom";

// ServiceDetails page components
import ServiceDetailsHero from "components/ServiceDetails/ServiceDetailsHero";
import ServiceDetailsContent from "components/ServiceDetails/ServiceDetailsContent";

// ServiceDetails page data
import ServicesData from "data/Services/services-data.json";

function ServiceDetails() {
  const parameter = useParams();
  const { serviceId } = parameter;
  const data = ServicesData.serviceslist.filter((Service) => Service.id === serviceId);

  return (
    <>
      <ServiceDetailsHero />
      <ServiceDetailsContent data={data[0]} />
    </>
  );
}

export default ServiceDetails;
