import NotFondFooter from "components/Footers/NotFondFooter";
import NotFondNav from "components/Navbars/NotFondNav";
import React from "react";
import { Outlet } from "react-router-dom";

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
