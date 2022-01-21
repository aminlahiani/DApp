import PortfolioHero from "components/Portfolio/PortfolioHero";
import PortfolioList from "components/Portfolio/PortfolioList";

//data
import PortfolioHeroData from "data/Portfolio/portfolio-hero-data.json";
import PortfolioListData from "data/Portfolio/portfolio-list-data.json";

function Portfolio() {
  return (
    <div>
      {/* {JSON.stringify(posts)}  */}
      <PortfolioHero data={PortfolioHeroData} />
      <PortfolioList data={PortfolioListData} />
    </div>
  );
}

export default Portfolio;
