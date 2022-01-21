import HeroThree from "components/Hero/HeroThree";
import PortfolioList from "components/PortfolioList";

//data
import PortfolioHeroData from "data/Portfolio/portfolio-hero-data.json";

function Portfolio() {
  return (
    <div>
      {/* {JSON.stringify(PortfolioHeroData)} */}
      <HeroThree data={PortfolioHeroData} />

      <PortfolioList />
    </div>
  );
}

export default Portfolio;
