// react Hooks
import { useEffect } from "react";

// react-router-dom components
import { BrowserRouter } from "react-router-dom";

// fortawesome components
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
// aos
import "aos/dist/aos.css";
import AOS from "aos";

// routes
import Routers from "./routes";

// add library fortawesome
library.add(fab, fas, far);

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
