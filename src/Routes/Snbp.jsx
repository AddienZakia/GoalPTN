import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Thumbs } from "swiper";
import Aos from "aos";
import "aos/dist/aos.css";
import "swiper/swiper-bundle.css";
import "swiper/swiper.min.css";

import Pembatas from "../Image/pembatas.svg";
import Vektor from "../Image/vektor.svg";
import Jb from "../Image/jb-snbp.png";
import Bd from "../Image/bd-snbp.png";
import Tn from "../Image/snbp-tentang.svg";

import { BsBook, BsTrophy, BsPeople } from "react-icons/bs";
import { CiMedal, CiBasketball } from "react-icons/ci";
import { BiSearchAlt2 } from "react-icons/bi";
import { SlGraph } from "react-icons/sl";
import { ScrollDownElement } from "../Component/Utils";
import { IoMusicalNotesOutline } from "react-icons/io5";

function Snbp() {
  useEffect(() => {
    Aos.init({ duration: 1700, anchorPlacement: "top-bottom" });
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
      <Persiapan />
    </>
  );
}

function Jumbotron() {
  return (
    <div className="relative flex flex-col-reverse mt-20 my-5 md:flex-row md:items-center">
      <div className="blob h-60 w-60 -bottom-[20em] -right-[5em] md:-right-[10em] -z-10"></div>

      <ScrollDownElement />
      <div className="mt-5 md:mt-0" data-aos="fade-up">
        <h1 className="title text-3xl">
          seleksi nasional <br /> berdasarkan prestasi (snbp)
        </h1>
        <p className="text-justify xl:text-left md:w-[80%]">
          Seleksi Nasional Berdasarkan Prestasi (SNBP) adalah jalur pertama
          dalam seleksi masuk PTN
        </p>
      </div>
      <img
        data-aos="fade-up"
        data-aos-delay="400"
        src={Jb}
        alt="test"
        className="w-[70%] sm:w-[70%] md:w-[50%] xl:w-[30%] mx-auto lg:mx-20"
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
        className="w-full sm:w-[70%] md:w-[50%] xl:w-[40%] mx-auto lg:ml-10"
      />
      <div className="mt-10 md:mt-0 md:mx-3 xl:mx-10 lg:mx-5">
        <h1 className="text-3xl title" data-aos="fade-left">
          apa sih itu snbp?
        </h1>
        <p
          className="text-justify xl:text-left md:w-[100%]"
          data-aos="fade-left"
          data-aos-delay="500"
        >
          SNBP atau Seleksi Nasional Berdasarkan Prestasi adalah proses seleksi
          berdasarkan nilai rapor, portofolio dan prestasi lainnya. Proses
          seleksinya ini sebelumnya dikenal dengan nama SNMPTN.
        </p>
      </div>
    </div>
  );
}

function Perbedaan() {
  return (
    <div className="relative my-40 lg:mx-10 flex flex-col lg:flex-row-reverse lg:justify-between lg:items-center">
      <div className="blob h-40 w-40 -top-[3em] -right-[5em] md:-right-[3em] -z-10"></div>
      <div className="blob h-40 w-40 -bottom-[5em] -left-[5em] md:-left-10 -z-10"></div>
      <img
        src={Bd}
        alt="perbedaan"
        className="hidden lg:block  w-[80%] sm:w-[70%] md:w-[50%] xl:w-[40%] mx-auto"
        data-aos="fade-left"
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
          <div className="before:absolute before:-top-7 before:-left-9 before:bg-gradient-to-r before:from-birutua before:to-birumuda before:w-24 before:h-24 before:rounded-full"></div>
          <h2>1</h2>
          <h1>
            Pilihan program studi dibatasi berdasarkan jurusan di pendidikan
            menengah
          </h1>
          <p>
            Peserta didik tidak punya kesempatan untuk mengeksplorasi minat dan
            aspirasi kariernya
          </p>
        </div>
        <div className="bprsnbp" data-aos="fade-right" data-aos-delay="1000">
          <div className="before:absolute before:-top-7 before:-left-9 before:bg-gradient-to-r before:from-birutua before:to-birumuda before:w-24 before:h-24 before:rounded-full"></div>
          <h2>2</h2>
          <h1>
            Hanya mata pelajaran tertentu yang dipertimbangkan dalam seleksi
          </h1>
          <p>
            Peserta didik lebih berfokus ke pelajaran tertentu dan mengganggap
            mata pelajaran lain tidak terlalu penting
          </p>
        </div>
        <div className="bprsnbp" data-aos="fade-right" data-aos-delay="1300">
          <div className="before:absolute before:-top-7 before:-left-9 before:bg-gradient-to-r before:from-birutua before:to-birumuda before:w-24 before:h-24 before:rounded-full"></div>
          <h2>3</h2>
          <h1>Perubahan pada logo dan nama pada seleksi</h1>
          <p>
            Seleksi nasional masuk perguruan tinggi (SNMPTN) kini juga berganti
            nama menjadi Seleksi nasional berdasarkan prestasi (SNBP).
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
          skema perubahan pada snbp
        </p>
        <p className="w-[80%] mx-auto" data-aos="fade-up" data-aos-delay="300">
          Skema atau sistem pada tes seleksi nasional berdasarkan prestasi
        </p>
      </div>
      <div
        className="lg:mx-20 text-whitedef mt-5 divide-y-2 md:divide-y-0 divide-whitedef/50 bg-gradient-to-br from-birutua to-birumuda p-7 rounded-lg flex flex-col md:divide-x-2 md:flex-row "
        data-aos="fade-up"
        data-aos-delay="500"
      >
        <p className="py-5 md:py-0 md:px-5">
          Minimal 50% rata-rata nilai rapor seluruh mata pelajaran
        </p>
        <div>
          <p className="py-5 md:py-0 md:px-5">
            Maksimal 50% komponen penggali minat dan bakat, yang mencakup:
          </p>
          <ul>
            <li>
              <p>Nilai rapor dari maksimal 2 mata pelajaran pendukung</p>
            </li>
            <li>
              <p>Prestasi</p>
            </li>
            <li>
              <p>Portofolio (untuk program studi Seni dan Olahraga)</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

function Dampak() {
  return (
    <div className="my-40 ">
      <div className="mt-5 text-center">
        <p className="title text-3xl" data-aos="fade-up">
          dampak perubahan
        </p>
        <p
          className="lg:w-[70%] mx-auto"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          Beberapa dampak dari perubahan skema tes seleksi nasional berdasarkan
          prestasi
        </p>
      </div>
      <div className="mt-5 grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:mx-16">
        <div className="dampaktes" data-aos="fade-up" data-aos-delay="500">
          <div>
            <BsTrophy className="logodampak" />
          </div>
          <p>
            Peserta didik terdorong untuk berprestasi di seluruh mata pelajaran
            secara holistik
          </p>
        </div>
        <div className="dampaktes" data-aos="fade-up" data-aos-delay="800">
          <div>
            <CiBasketball className="logodampak" />
          </div>
          <p>
            Peserta didik terdorong untuk mengeksplorasi minat dan bakatnya
            secara lebih mendalam
          </p>
        </div>
        <div
          className="dampaktes md:col-span-2 lg:col-span-1"
          data-aos="fade-up"
          data-aos-delay="1000"
        >
          <div>
            <BsPeople className="logodampak" />
          </div>
          <p className="md:w-[60%] md:mx-auto lg:w-full">
            Memberikan peluang besar bagi pelajar yang memilki prestasi baik di
            bidang akademik maupun non akademik
          </p>
        </div>
      </div>
    </div>
  );
}

function Persiapan() {
  return (
    <div className="my-20 relative">
      <div className="blob h-40 w-40 top-[10em] -right-[3em] md:-right-[3em] -z-10"></div>
      <div className="blob h-40 w-40 top-[3em] -left-[5em] md:-left-10 -z-10"></div>

      <div className="text-center">
        <p className="title text-3xl" data-aos="fade-up">
          mulai persiapkan dirimu !
        </p>
        <p
          className="lg:w-[60%] mx-auto"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          Persiapan yang harus kamu hadapi demi menghadapi tes seleksi nasional
          berdasarkan prestasi
        </p>
      </div>
      <div className="my-5" data-aos="fade-zoom-in" data-aos-delay="500">
        <Swiper
          spaceBetween={5}
          slidesPerView={1}
          modules={[Navigation, Thumbs, Pagination]}
          navigation={true}
          loop={true}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          <SwiperSlide>
            <div className="bxpr">
              <img src={Vektor} alt="vektor" className="vektorbox" />
              <span>1</span>
              <BsBook className="iconpersiapan" />
              <p>Fokus untuk belajar secara menyeluruh</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bxpr">
              <img src={Vektor} alt="vektor" className="vektorbox" />
              <span>2</span>
              <IoMusicalNotesOutline className="iconpersiapan" />
              <p>Gali minat dan bakat secara tekun</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bxpr">
              <img src={Vektor} alt="vektor" className="vektorbox" />
              <span>3</span>
              <CiMedal className="iconpersiapan" />
              <p>Tingkatkan prestasi sesuai minat dan bakat</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bxpr">
              <img src={Vektor} alt="vektor" className="vektorbox" />
              <span>4</span>
              <BiSearchAlt2 className="iconpersiapan" />
              <p>Eksplorasi pilihan prodi sesuai minat dan bakat</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bxpr">
              <img src={Vektor} alt="vektor" className="vektorbox" />
              <span>5</span>
              <SlGraph className="iconpersiapan" />
              <p>Cari tahu komponen penilaian untuk prodi yang diminati</p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default Snbp;
