import HeroThree from "components/Hero/HeroThree";
import { PortfolioHeroData } from "data/PortfolioData";
import  PortfolioList  from "components/PortfolioList";

function Portfolio() {
  return (
    <div>
      <HeroThree data={PortfolioHeroData} />

      <PortfolioList />
    </div>
  );
}

export default Portfolio;
