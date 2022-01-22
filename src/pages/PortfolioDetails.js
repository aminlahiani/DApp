import PortfolioDetailsHero from "components/PortfolioDetails/PortfolioDetailsHero";
import PortfolioDetailsContent from "components/PortfolioDetails/PortfolioDetailsContent";

import PortfolioListData from "data/Portfolio/portfolio-list-data.json";

import { useParams } from "react-router-dom";

function PortfolioDetails() {
  const parameter = useParams();
  const portfolioId = parameter.portfolioId;
  const data = PortfolioListData.filter((Service) => Service.id === portfolioId);
  console.log(data);
  return (
    <div>
      <PortfolioDetailsHero />
      <PortfolioDetailsContent data={data[0]} />
    </div>
  );
}

export default PortfolioDetails;
