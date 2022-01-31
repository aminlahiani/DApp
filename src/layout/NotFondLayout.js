// react-router-dom components
import { Outlet } from "react-router-dom";

// NotFond Navbar
import NotFondNav from "../components/Navbars/NotFondNav";

// NotFond  Footer
import NotFondFooter from "../components/Footers/NotFondFooter";

function NotFondLayout() {
  return (
    <div>
      <NotFondNav />
      <Outlet />
      <NotFondFooter />
    </div>
  );
}

export default NotFondLayout;
