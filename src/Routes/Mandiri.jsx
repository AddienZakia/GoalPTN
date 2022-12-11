import React, { useEffect } from "react";
import { ScrollDownElement } from "../Component/Utils";
import Aos from "aos";
import "aos/dist/aos.css";

import Pembatas from "../Image/pembatas.svg";
import Circle from "../Image/circle.png";
import Jb from "../Image/jb-mandiri.png";
import Bd from "../Image/bd-mandiri.png";
import Tn from "../Image/mandiri-tentang.svg";

import { BsSearch, BsPeople } from "react-icons/bs";

function Snbt() {
  useEffect(() => {
    Aos.init({ duration: 2000, anchorPlacement: "top-bottom" });
  }, []);
  return (
    <>
      <Jumbotron />
      <img
        src={Pembatas}
        alt="batas"
        className="mx-auto w-[80%] md:w-[50%] my-[10em]"
        data-aos="fade-zoom-in"
      />
      <Tentang />
      <Perbedaan />
      <Skema />
      <Dampak />
    </>
  );
}

function Jumbotron() {
  return (
    <div className="relative flex flex-col-reverse mt-20 my-5 md:flex-row md:items-center">
      <div className="blob h-60 w-60 -bottom-[20em] -right-[5em] md:-right-[10em] -z-10"></div>

      <ScrollDownElement />
      <div className="mt-5 md:mt-0" data-aos="fade-up">
        <h1 className="title text-3xl">seleksi secara mandiri oleh ptn</h1>
        <p className="text-justify xl:text-left md:w-[80%]">
          Seleksi Tes Mandiri adalah jalur ketiga dalam seleksi PTN
        </p>
      </div>
      <img
        data-aos="fade-up"
        data-aos-delay="400"
        src={Jb}
        alt="test"
        className="w-[80%] sm:w-[70%] md:w-[50%] xl:w-[40%] lg:mx-20 mx-auto"
      />
    </div>
  );
}

function Tentang() {
  return (
    <div className="relative flex flex-col md:flex-row md:items-center my-20">
      <div className="blob h-40 w-40 top-[10em] -left-[7em] md:-left-[5em] md:top-[3em] -z-10"></div>

      <img
        data-aos="fade-right"
        src={Tn}
        alt="tentang"
        className="w-full sm:w-[70%] md:w-[50%] xl:w-[40%] mx-auto lg:ml-20"
      />
      <div className="mt-10 md:mt-0 md:mx-3 xl:mx-10 lg:mx-10">
        <h1 className="text-3xl title" data-aos="fade-left">
          apa sih itu tes mandiri?
        </h1>
        <p
          className="text-justify xl:text-left md:w-[100%]"
          data-aos="fade-left"
          data-aos-delay="500"
        >
          Seleksi Mandiri atau Ujian Mandiri adalah sistem penerimaan mahasiswa
          baru di perguruan tinggi negeri di Indonesia secara mandiri. Seleksi
          mandiri dilakukan setelah pengumuman hasil jalur SBMPTN/SNBT.{" "}
          <span className="font-bold">
            Dengan persyaratan dan mekanisme yang disesuaikan dengan ketentuan
            masing-masing perguruan tinggi.
          </span>
        </p>
      </div>
    </div>
  );
}

function Perbedaan() {
  return (
    <div className="relative my-40 lg:ml-10 flex flex-col lg:flex-row-reverse lg:justify-between lg:items-center">
      <div className="blob h-40 w-40 -top-[3em] -right-[5em] md:-right-[3em] -z-10"></div>
      <div className="blob h-40 w-40 -bottom-[5em] -left-[5em] md:-left-10 -z-10"></div>

      <img
        data-aos="fade-left"
        src={Bd}
        alt="perbedaan"
        className="hidden lg:block w-[80%] sm:w-[70%] md:w-[50%] xl:w-[30%] lg:ml-20 mx-auto"
      />
      <div className="lg:w-[35em]">
        <h1 className="title text-3xl" data-aos="fade-right">
          perbedaan sebelum perubahan
        </h1>
        <p
          className="text-justify xl:text-left md:w-[100%]"
          data-aos="fade-right"
          data-aos-delay="500"
        >
          Beberapa perbedaan sistem tes seleksi masuk PTN pada sebelumnya
        </p>
        <div className="bprsnbp" data-aos="fade-right" data-aos-delay="800">
          <img src={Circle} alt="circle" className="circlebox" />
          <h2>1</h2>
          <h1>
            Banyak sekali keragaman jenis mekanisme seleksi jalur mandiri antar
            PTN
          </h1>
          <p>
            Persepsi publik bahwa jalur seleksi mandiri lebih berpihak pada
            calon mahasiswa yang memiliki kemampuan finansial tinggi
          </p>
        </div>
        <div className="bprsnbp" data-aos="fade-right" data-aos-delay="800">
          <img src={Circle} alt="circle" className="circlebox" />

          <h2>2</h2>
          <h1>
            Tidak ada standarisasi yang mengatur transparansi dan akuntabilitas
            proses seleksi
          </h1>
          <p>
            Yang dimana PTN merupakan instansi pemerintah yang harus memberikan
            pelayanan secara adil kepada masyarakat
          </p>
        </div>
      </div>
    </div>
  );
}

function Skema() {
  return (
    <div id="skema" className="my-20">
      <div className="text-center">
        <p className="title text-3xl" data-aos="fade-up">
          skema perubahan pada tes mandiri
        </p>
        <p className="w-[80%] mx-auto" data-aos="fade-up" data-aos-delay="300">
          Skema atau sistem pada tes mandiri
        </p>
      </div>
      <div
        className="lg:mx-20 text-whitedef mt-5 divide-y-2 md:divide-y-0 divide-whitedef/50 bg-gradient-to-br from-birutua to-birumuda p-7 rounded-lg flex flex-col md:divide-x-2 md:flex-row "
        data-aos="fade-up"
        data-aos-delay="300"
      >
        <p className="py-5 md:py-0 md:px-5 md:w-[90%] lg:w-[70%]">
          Mengumumkan kuota calon mahasiswa yang akan diterima di masing-masing
          program studi dan fakultas.
        </p>
        <p className="py-5 md:py-0 md:px-5">
          Mengumumkan metode yang akan digunakan untuk penilaian calon
          mahasiswa.
        </p>
        <p className="py-5 md:py-0 md:px-5">Mengumumkan besaran biaya masuk</p>
      </div>
    </div>
  );
}

function Dampak() {
  return (
    <div className="my-40 relative">
      <div className="blob h-40 w-40 top-[10em] -right-[3em] md:-right-[3em] -z-10"></div>
      <div className="blob h-40 w-40 top-[3em] -left-[5em] md:-left-10 -z-10"></div>
      <div className="mt-5 text-center">
        <p className="title text-3xl" data-aos="fade-up">
          dampak perubahan
        </p>
        <p
          className="lg:w-[80%] mx-auto"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          Beberapa dampak dari perubahan skema tes mandiri
        </p>
      </div>
      <div className="mt-5 grid gap-5 grid-cols-1 md:grid-cols-2 md:mx-16">
        <div className="dampaktes" data-aos="fade-up" data-aos-delay="300">
          <div>
            <BsPeople className="logodampak" />
          </div>
          <p className="mx-auto lg:w-[80%]">
            Masyarakat dapat berperan aktif dalam mengawasi proses seleksi
            secara mandiri di PTN
          </p>
        </div>
        <div className="dampaktes" data-aos="fade-up" data-aos-delay="700">
          <div>
            <BsSearch className="logodampak" />
          </div>
          <p className="mx-auto lg:w-[80%]">
            Terlaksananya seleksi secara mandiri yang transparan dan akuntabel
          </p>
        </div>
      </div>
    </div>
  );
}

export default Snbt;
