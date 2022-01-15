import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import About from "./pages/About";
import ContactPage from "./pages/Contact";
import FAQ from "./pages/FAQ";

import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import PortfolioDetails from "./pages/PortfolioDetails";

import Services from "./pages/Services";
import ServiceDetails from "./pages/ServiceDetails";

import Blogs from "./pages/Blogs";
import BlogDetails from "./pages/BlogDetails";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="service-deatils" element={<ServiceDetails />} />

          <Route path="blogs" element={<Blogs />} />
          <Route path="blog-details" element={<BlogDetails />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="portfolio-deatils" element={<PortfolioDetails />} />
          <Route path="faq" element={<FAQ />} />
          <Route path="contact" element={<ContactPage />} />
        </Route>
        <Route path="/not-found" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/not-found" />} />
      </Routes>
    </BrowserRouter>
  );
}
