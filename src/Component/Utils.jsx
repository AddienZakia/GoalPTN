import React, { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";

function HeaderRoutes({ routes, fungsi }) {
  let { pathname } = useLocation();
  let dup = pathname;
  pathname = pathname.replace("/", "");

  if (pathname === "") pathname = "beranda";
  else pathname = "lainnya";

  function clickToView(item) {
    if (pathname !== "beranda") return;
    document.querySelector(`#${item.toLowerCase()}`).scrollIntoView();
  }

  function PilihRoute(item) {
    let path = "#";
    if (item === "Beranda") path = "/";
    else if (pathname === "lainnya")
      path =
        "/" +
        item
          .split(" ")
          .pop()
          .toLowerCase();
    else path = dup + "#";

    return path;
  }

  return (
    <>
      {routes[pathname].map((item, i) => {
        return (
          <li className="lineheader" key={i}>
            <Link to={PilihRoute(item)} onClick={() => clickToView(item)}>
              <p href="#" className="textheader" onClick={fungsi}>
                {item}
              </p>
            </Link>
          </li>
        );
      })}
    </>
  );
}

function ScrollTop() {
  let { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
}

function ScrollDownElement() {
  return (
    <div className="animate-bounce absolute hidden md:bottom-16 md:-right-24 md:flex md:items-center text-birudef">
      <p className="rotate-90 text-sm">
        Scroll down <span>&#8594;</span>
      </p>
    </div>
  );
}

function buttonSkema(text) {
  document.querySelector(`#${text.toLowerCase()}`).scrollIntoView();
}

export { HeaderRoutes, ScrollTop, ScrollDownElement, buttonSkema };
