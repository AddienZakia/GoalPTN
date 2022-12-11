import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <div className="mt-40 body bg-gradient-to-r from-birutua to-birumuda text-whitedef font-light">
        <div className="flex flex-col py-16 lg:flex-row">
          <div>
            <h1 className="uppercase text-2xl font-bold">merdeka belajar</h1>
            <p className="w-[100%] lg:w-[60%]">
              Demi mendorong dan mengasah nalar karakter siswa yang lebih
              holistik, serta memberikan kesempatan yang lebih adil dari semua
              siswa dalam kompetensi masuk perguruan tinggi negri
            </p>
          </div>
          <Hal />
        </div>
      </div>
      <p className="text-sm bg-gradient-to-tl from-birumuda to-birutua font-light p-2 text-whitedef text-center">
        Copyright &copy; 2022, All Right Reserved
      </p>
    </>
  );
}

function Hal() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
      <div className="footerhalaman">
        <h1>Beranda</h1>
        <ul>
          <li>
            <Link to={"/"}>
              <p>Tentang</p>
            </Link>
          </li>
          <li>
            <Link to={"/"}>
              <p>Perubahan</p>
            </Link>
          </li>
          <li>
            <Link to={"/"}>
              <p>Alasan</p>
            </Link>
          </li>
          <li>
            <Link to={"/"}>
              <p>Dampak</p>
            </Link>
          </li>
        </ul>
      </div>

      <div className="footerhalaman">
        <h1>snmptn</h1>
        <ul>
          <li>
            <Link to={"/snbp"}>
              <p>Tentang</p>
            </Link>
          </li>
          <li>
            <Link to={"/snbp"}>
              <p>perbedaan</p>
            </Link>
          </li>
          <li>
            <Link to={"/snbp"}>
              <p>skema</p>
            </Link>
          </li>
          <li>
            <Link to={"/snbp"}>
              <p>dampak</p>
            </Link>
          </li>
          <li>
            <Link to={"/snbp"}>
              <p>tips sukses</p>
            </Link>
          </li>
        </ul>
      </div>

      <div className="footerhalaman">
        <h1>sbmptn</h1>
        <ul>
          <li>
            <Link to={"/snbt"}>
              <p>Tentang</p>
            </Link>
          </li>
          <li>
            <Link to={"/snbt"}>
              <p>perbedaan</p>
            </Link>
          </li>
          <li>
            <Link to={"/snbt"}>
              <p>skema</p>
            </Link>
          </li>
          <li>
            <Link to={"/snbt"}>
              <p>dampak</p>
            </Link>
          </li>
          <li>
            <Link to={"/snbt"}>
              <p>contoh soal</p>
            </Link>
          </li>
        </ul>
      </div>

      <div className="footerhalaman">
        <h1>mandiri</h1>
        <ul>
          <li>
            <Link to={"/mandiri"}>
              <p>Tentang</p>
            </Link>
          </li>
          <li>
            <Link to={"/mandiri"}>
              <p>perbedaan</p>
            </Link>
          </li>
          <li>
            <Link to={"/mandiri"}>
              <p>skema</p>
            </Link>
          </li>
          <li>
            <Link to={"/mandiri"}>
              <p>dampak</p>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
