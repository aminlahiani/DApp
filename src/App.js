import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import About from "./pages/About";
import ContactPage from "./pages/Contact";
import FAQ from "./pages/FAQ";

import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Services from "./pages/Services";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="faq" element={<FAQ />} />
          <Route path="contact" element={<ContactPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}