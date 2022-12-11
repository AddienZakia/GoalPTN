import React, { useState } from "react";
import { HeaderRoutes, ScrollTop, buttonSkema } from "./Utils";
import { Link, useLocation } from "react-router-dom";

import { HiMenuAlt3 } from "react-icons/hi";

function Header() {
  ScrollTop();
  let [hidenav, sethidenav] = useState("left-[-100%]");
  let [bg, setbg] = useState("hidden");
  let [burger, setburger] = useState("");
  let { pathname } = useLocation();
  let buttonBg = bg === "hidden" ? "hidden" : "";
  let route = {
    beranda: ["Tentang", "Prinsip", "Alasan", "Dampak"],
    lainnya: ["Beranda", "SNBP", "SNBT", "Mandiri"],
  };

  let resize = hidenav === "left-0" ? "hidden" : "";
  window.addEventListener("resize", (e) => {
    if (window.innerWidth <= 768) {
      document.body.style.overflow = resize;
    } else if (window.innerWidth > 768) {
      document.body.style.overflow = "unset";
    }
  });

  pathname = pathname.replace("/", "");
  let buttonText;
  if (pathname === "") buttonText = "Perubahan";
  else if (["snbp", "snbt", "mandiri"].includes(pathname)) buttonText = "Skema";
  else buttonText = "Beranda";

  function clickNav() {
    let setOverflow = bg === "hidden" ? bg : "";

    if (window.innerWidth > 768) return;
    document.body.style.overflow = setOverflow;
    if (hidenav === "left-0") {
      sethidenav("left-[-100%]");
      setbg("hidden");
      setburger("");
    } else {
      sethidenav("left-0");
      setbg("bg-black opacity-25");
      setburger("!text-whitedef");
    }
  }

  return (
    <header className="flex justify-between items-center mt-5">
      <div className="blob h-40 w-40 -top-10 -left-10 md:-left-4 -z-10"></div>
      <Link to={"/#"}>
        <h1 className="text-birudef uppercase text-2xl font-semibold leading-5">
          Merdeka <br />
          <span className="tracking-widest">Belajar</span>
        </h1>
      </Link>
      <div
        className={bg + " absolute top-0 w-full h-full md:hidden z-10"}
        onClick={clickNav}
      ></div>
      <ul
        className={`md:static md:flex-row absolute top-0 ${hidenav} bg-whitedef h-full w-[70%] p-[3em] md:w-auto md:p-0 md:bg-none text-center flex flex-col z-10 `}
      >
        <HeaderRoutes routes={route} fungsi={clickNav} />
        <p
          className={buttonBg + " md:hidden buttonheader px-5"}
          onClick={() => {
            buttonSkema(buttonText);
            clickNav();
          }}
        >
          {buttonText}
        </p>
      </ul>
      <p
        className="hidden md:block buttonheader px-5"
        onClick={() => {
          buttonSkema(buttonText);
        }}
      >
        {buttonText}
      </p>
      <HiMenuAlt3
        className={
          "md:hidden text-[2em] cursor-pointer z-20 text-birudef " + burger
        }
        onClick={clickNav}
      />
    </header>
  );
}

export default Header;
