import { Outlet } from "react-router-dom";
import NotFondFooter from "../components/Footers/NotFondFooter";
import NotFondNav from "../components/Navbars/NotFondNav";

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
