import ServiceDetailsHero from "components/ServiceDetails/ServiceDetailsHero";
import ServiceDetailsContent from "components/ServiceDetails/ServiceDetailsContent";
import { useParams } from "react-router-dom";

import ServicesData from "data/Services/services-data.json";

function ServiceDetails(props) {
  const parameter = useParams();
  const serviceId = parameter.serviceId;
  const data = ServicesData.serviceslist.filter((Service) => Service.id === serviceId);

  return (
    <>
       <ServiceDetailsHero />
       <ServiceDetailsContent data={data[0]} /> 
    </>
  );
}

export default ServiceDetails;
