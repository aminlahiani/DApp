import React, { useEffect } from "react";

// react-router-dom components
import { BrowserRouter } from "react-router-dom";

import "aos/dist/aos.css";
import AOS from "aos";

import Routers from "./routes";

export default function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <BrowserRouter>
      <Routers />
    </BrowserRouter>
  );
}
