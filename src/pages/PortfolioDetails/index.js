import { Details } from "./sections/Details";
import PortfolioDetailsHero from "components/PortfolioDetails/PortfolioDetailsHero";
import PortfolioListData from "data/Portfolio/portfolio-list-data.json";

import { useParams } from "react-router-dom";
function index() {
  const parameter = useParams();
  const portfolioId = parameter.portfolioId;
  const data = PortfolioListData.filter((Service) => Service.id === portfolioId);
  console.log(data)
  return (
    <div>
      <PortfolioDetailsHero  />
      <Details data={data[0]} />
    </div>
  );
}

export default index;
