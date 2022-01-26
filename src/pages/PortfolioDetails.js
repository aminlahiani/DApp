// react-router-dom components
import { useParams } from "react-router-dom";

// PortfolioDetails page components
import PortfolioDetailsHero from "components/PortfolioDetails/PortfolioDetailsHero";
import PortfolioDetailsContent from "components/PortfolioDetails/PortfolioDetailsContent";

//PortfolioDetails page data
import PortfolioListData from "data/Portfolio/portfolio-list-data.json";

function PortfolioDetails() {
  const parameter = useParams();
  const portfolioId = parameter.portfolioId;
  const data = PortfolioListData.filter((Service) => Service.id === portfolioId);

  return (
    <div>
      <PortfolioDetailsHero />
      <PortfolioDetailsContent data={data[0]} />
    </div>
  );
}

export default PortfolioDetails;
