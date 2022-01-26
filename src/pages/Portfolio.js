// Portfolio page components
import PortfolioHero from "components/Portfolio/PortfolioHero";
import PortfolioList from "components/Portfolio/PortfolioList";

// Portfolio page data
import PortfolioHeroData from "data/Portfolio/portfolio-hero-data.json";
import PortfolioListData from "data/Portfolio/portfolio-list-data.json";

function Portfolio() {
  return (
    <div>
      <PortfolioHero data={PortfolioHeroData} />

      <PortfolioList data={PortfolioListData} />
    </div>
  );
}

export default Portfolio;
