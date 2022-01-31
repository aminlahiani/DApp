// react-router-dom components
import { useParams } from "react-router-dom";

// ServiceDetails  components
import ServiceDetailsHero from "../components/ServiceDetails/ServiceDetailsHero";
import ServiceDetailsContent from "../components/ServiceDetails/ServiceDetailsContent";
import Newsletter from "../components/Newsletter";
import ReactHelmet from "../components/ReactHelmet";

// ServiceDetails data
import ServicesData from "../data/Services/services-data.json";

function ServiceDetails() {
  const parameter = useParams();
  const { serviceId } = parameter;
  const data = ServicesData.serviceslist.filter((Service) => Service.id === serviceId);

  return (
    <>
      {/* React Helmet : src > components > ReactHelmet */}
      <ReactHelmet title="Portfolio Details" />

      {/* Hero Section  : src > components > ServiceDetails > ServiceDetailsHero */}
      <div data-aos="fade-up">
        <ServiceDetailsHero />
      </div>

      {/* Service Details  Section : src > components > ServiceDetails > ServiceDetailsContent */}
      <div data-aos="fade-up">
        <ServiceDetailsContent data={data[0]} />
      </div>

      {/* Newsletter Section : src > components > Newsletter */}
      <div data-aos="fade-up">
        <Newsletter />
      </div>
    </>
  );
}

export default ServiceDetails;
