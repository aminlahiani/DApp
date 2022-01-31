// react-router-dom components
import { useParams } from "react-router-dom";

// PortfolioDetails page components
import PortfolioDetailsHero from "../components/PortfolioDetails/PortfolioDetailsHero";
import PortfolioDetailsContent from "../components/PortfolioDetails/PortfolioDetailsContent";
import Newsletter from "../components/Newsletter";
import ReactHelmet from "../components/ReactHelmet";

// PortfolioDetails page data
import PortfolioListData from "../data/Portfolio/portfolio-list-data.json";

function PortfolioDetails() {
  const parameter = useParams();
  const { portfolioId } = parameter;
  const data = PortfolioListData.filter((Service) => Service.id === portfolioId);

  return (
    <>
      {/* React Helmet to manage structured data tags */}
      <ReactHelmet title="Portfolio Details" />
      {/* Hero Section */}
      <div data-aos="fade-up">
        <PortfolioDetailsHero />
      </div>
      {/* Portfolio Details  Section */}
      <div data-aos="fade-up">
        <PortfolioDetailsContent data={data[0]} />
      </div>
      {/* Newsletter Section  */}
      <div data-aos="fade-up">
        <Newsletter />
      </div>
    </>
  );
}

export default PortfolioDetails;
