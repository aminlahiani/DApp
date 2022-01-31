// Portfolio  components
import PortfolioHero from "../components/Portfolio/PortfolioHero";
import PortfolioList from "../components/Portfolio/PortfolioList";
import ReactHelmet from "../components/ReactHelmet";
import Newsletter from "../components/Newsletter";

// Portfolio  data
import PortfolioHeroData from "../data/Portfolio/portfolio-hero-data.json";
import PortfolioListData from "../data/Portfolio/portfolio-list-data.json";

function Portfolio() {
  return (
    <>
      {/* React Helmet : src > components > ReactHelmet */}
      <ReactHelmet title="Portfolio" />

      {/* Hero Section : src > components > Portfolio > PortfolioHero */}
      <div data-aos="fade-up">
        <PortfolioHero data={PortfolioHeroData} />
      </div>

      {/* Portfolio List Section : src > components > Portfolio > PortfolioList */}
      <div data-aos="fade-up">
        <PortfolioList data={PortfolioListData} />
      </div>

      {/* Newsletter Section : src > components > Newsletter */}
      <div data-aos="fade-up">
        <Newsletter />
      </div>
    </>
  );
}

export default Portfolio;
