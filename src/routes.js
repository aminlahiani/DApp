// react-router-dom components
import { Routes, Route, Navigate } from "react-router-dom";

// layouts
import NotFondLayout from "./layout/NotFondLayout";
import MainLayout from "./layout/MainLayout";

// home page
import Home from "./pages/Home";

// About page
import About from "./pages/About";

// Contact page
import ContactPage from "./pages/Contact";

import FAQ from "./pages/FAQ";

// Portfolio pages
import Portfolio from "./pages/Portfolio";
import PortfolioDetails from "./pages/PortfolioDetails";

// Services pages
import Services from "./pages/Services";
import ServiceDetails from "./pages/ServiceDetails";

// Blogs pages
import Blogs from "./pages/Blogs";
import BlogDetails from "./pages/BlogDetails";

// NotFound page
import NotFound from "./pages/NotFound";

function Routers() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="services" element={<Services />} />
        <Route path="service-deatils/:serviceId" element={<ServiceDetails />} />

        <Route path="blogs" element={<Blogs />} />
        <Route path="blog-details/:postId" element={<BlogDetails />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="portfolio-deatils/:portfolioId" element={<PortfolioDetails />} />
        <Route path="faq" element={<FAQ />} />
        <Route path="contact" element={<ContactPage />} />
      </Route>
      <Route path="/not-found" element={<NotFondLayout />}>
        <Route index element={<NotFound />} />
      </Route>
      <Route path="*" element={<Navigate to="/not-found" />} />
    </Routes>
  );
}

export default Routers;
