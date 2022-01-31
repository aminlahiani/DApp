// react Hooks
import { useEffect } from "react";

// react-router-dom components
import { BrowserRouter } from "react-router-dom";

// aos
import "aos/dist/aos.css";
import AOS from "aos";

// routes
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
