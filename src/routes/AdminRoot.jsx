import React from "react";
import Icons from "../assets/css/icons";
import Footer from "../components/Footer/Footer";
import { Outlet } from "react-router-dom";
import { useAuth } from "../utils/AuthContext";
export default function AdminRoot() {
  return (
    <>
      <Icons />
      <div id="content">
        <Outlet />
      </div>
    </>
  );
  // user ? (
  //   <>
  //     <Icons />
  //     <div id="content">
  //       <Outlet />
  //     </div>
  //   </>
  // ) : (
  //   <Navigate to="/admin" />
  // );
}
