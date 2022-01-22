import React, { useEffect } from "react";
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
import NotFondLayout from "layout/NotFondLayout";

import "aos/dist/aos.css";
import AOS from "aos";
export default function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <BrowserRouter>
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
    </BrowserRouter>
  );
}
