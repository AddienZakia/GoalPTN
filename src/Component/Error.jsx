import React from "react";
import { useRouteError, Link } from "react-router-dom";
import Header from "./Header";

function Error() {
  let { status } = useRouteError();
  return (
    <div className="body text-birudef">
      <Header />
      <NotFound status={status} />
    </div>
  );
}

function NotFound({ status }) {
  let text = "Halaman tidak ditemukan";
  if (status !== 404) text = "Terdapat kesalahan";

  return (
    <div className="text-center my-20">
      <h1 className="text-[10em] text-birumuda font-bold">404</h1>
      <p className="text-lg">{text}</p>
      <p className="text-lg">
        Kembali ke{" "}
        <Link to="/">
          <span className="transition duration-500 font-bold underline decoration-cyan-500 decoration-2 hover:opacity-75">
            Halaman Utama
          </span>
        </Link>
      </p>
    </div>
  );
}

export default Error;
