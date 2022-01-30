// Portfolio  components
import PortfolioHero from "components/Portfolio/PortfolioHero";
import PortfolioList from "components/Portfolio/PortfolioList";
import ReactHelmet from "components/ReactHelmet";
import Newsletter from "components/Newsletter";

// Portfolio  data
import PortfolioHeroData from "data/Portfolio/portfolio-hero-data.json";
import PortfolioListData from "data/Portfolio/portfolio-list-data.json";

function Portfolio() {
  return (
    <>
      <ReactHelmet title="Portfolio" />
      {/* Hero Section */}
      <div data-aos="fade-up">
        <PortfolioHero data={PortfolioHeroData} />
      </div>
      {/* Hero Section */}
      <div data-aos="fade-up">
        <PortfolioList data={PortfolioListData} />
      </div>
      {/* Newsletter  Section */}
      <div data-aos="fade-up">
        <Newsletter />
      </div>
    </>
  );
}

export default Portfolio;
