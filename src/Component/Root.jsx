import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

function Root() {
  return (
    <>
      <div className="body">
        <Header />
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default Root;
