import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import About from "./pages/About";
import ContactPage from "./pages/Contact";
import FQS from "./pages/FQS";

import Home from "./pages/Home";
import Services from "./pages/Services";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="services" element={<Services />} />
          <Route path="about" element={<About />} />
          <Route path="fqs" element={<FQS />} />
          
        </Route>
      </Routes>
    </BrowserRouter>
  );
}