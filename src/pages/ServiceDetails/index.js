import React from "react";
import { Hero } from "./sections/Hero";
import { useParams } from "react-router-dom";

import { ServiceDetails } from "./sections/Details";
import ServicesData from "data/Services/services-data.json";

function index(props) {
  const parameter = useParams();
  const serviceId = parameter.serviceId;
  const data = ServicesData.serviceslist.filter((Service) => Service.id === serviceId);

  return (
    <>
      <Hero />
      <ServiceDetails data={data[0]} />
    </>
  );
}

export default index;
