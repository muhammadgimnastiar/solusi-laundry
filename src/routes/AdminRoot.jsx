import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Icons from "../assets/css/icons";
import Footer from "../components/Footer/Footer";
import Home from "../pages/Home/Home";
import { Outlet } from "react-router-dom";
export default function AdminRoot() {
  return (
    <>
      <Icons />
      <div id="content">
        <Outlet />
      </div>

      <Footer />
    </>
  );
}
