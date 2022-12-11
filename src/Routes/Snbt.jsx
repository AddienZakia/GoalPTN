import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

import Pembatas from "../Image/pembatas.svg";
import Circle from "../Image/circle.png";
import Jb from "../Image/jb-snbt.png";
import Bd from "../Image/bd-snbt.png";
import Tn from "../Image/snbt-tentang.svg";

import Mtk from "../Image/mtk.jpg";
import Bindo from "../Image/bindo.jpg";
import Binggris from "../Image/binggris.jpg";
import { ScrollDownElement } from "../Component/Utils";

import { BsBook, BsPeople, BsPen } from "react-icons/bs";
import { MdAttachMoney } from "react-icons/md";
import { BiBookmarks } from "react-icons/bi";
import { FaChalkboardTeacher } from "react-icons/fa";

function Snbt() {
  useEffect(() => {
    Aos.init({ duration: 2000, anchorPlacement: "top-bottom" });
  });
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
      <Soal />
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
          seleksi nasional <br /> berdasarkan tes (Snbt)
        </h1>
        <p className="text-justify xl:text-left md:w-[90%]">
          Seleksi Nasional Berdasarkan Tes (SNBT) adalah jalur kedua dalam
          seleksi masuk PTN
        </p>
      </div>
      <img
        data-aos="fade-up"
        data-aos-delay="400"
        src={Jb}
        alt="test"
        className="w-[80%] sm:w-[70%] md:w-[50%] xl:w-[50%] lg:mx-20 mx-auto"
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
          apa sih itu Snbt?
        </h1>
        <p
          className="text-justify xl:text-left md:w-[100%]"
          data-aos="fade-left"
          data-aos-delay="500"
        >
          SNBT atau Seleksi Nasional Berdasarkan Tes adalah seleksi yang
          dilakukan berdasarkan hasil nilai Tes Skolastik yang berbasis
          komputer. Proses seleksi ini sebelumnya kamu kenal dengan sebutan
          SBMPTN. SNBT akan terdiri dari empat subtes yaitu Tes Potensi
          Kognitif, Penalaran Matematika, Literasi Bahasa Indonesia, dan
          Literasi Bahasa Inggris.
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
        className="hidden lg:block lg:ml-20 w-[80%] sm:w-[70%] md:w-[50%] xl:w-[40%] mx-auto"
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
          <h1>Banyak sekali mata pelajaran yang diujikan</h1>
          <p>
            Peserta didik sangat tertekan karna harus mengejar materi yang cukup
            banyak
          </p>
        </div>
        <div className="bprsnbp" data-aos="fade-right" data-aos-delay="800">
          <img src={Circle} alt="circle" className="circlebox" />

          <h2>2</h2>
          <h1>Lebih mengandalkan metode hafalan dari pada penalaran</h1>
          <p>
            Kemampuan belajar peserta didik menjadi menurun karna sangat sulit
            untuk menghafal materi yang sangat banyak
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
          skema perubahan pada snbt
        </p>
        <p className="w-[80%] mx-auto" data-aos="fade-up" data-aos-delay="300">
          Skema atau sistem pada tes seleksi nasional berdasarkan tes
        </p>
      </div>
      <div
        className="lg:mx-20 text-whitedef mt-5 divide-y-2 md:divide-y-0 divide-whitedef/50 bg-gradient-to-br from-birutua to-birumuda p-7 rounded-lg flex flex-col md:divide-x-2 md:flex-row "
        data-aos="fade-up"
        data-aos-delay="500"
      >
        <p className="py-5 md:py-0 md:px-5 md:w-[60%] lg:w-[50%]">
          Tidak ada lagi Tes Mata Pelajaran atau Tes Kemampuan Akademik (TKA)
        </p>
        <div>
          <p className="py-5 md:py-0 md:px-5">
            Hanya Tes Skolastik yang mengukur
          </p>
          <ul>
            <li>
              <p>Tes Potensi Kognitif</p>
            </li>
            <li>
              <p>Tes Penalaran Matematika</p>
            </li>
            <li>
              <p>Literasi Dalam Bahasa Indonesia</p>
            </li>
            <li>
              <p>Literasi Dalam Bahasa Inggris</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

function Dampak() {
  return (
    <div className="my-40 relative">
      <div className="blob h-40 w-40 top-[15em] -right-[3em] md:-right-[3em] -z-10"></div>
      <div className="blob h-40 w-40 top-[3em] -left-[5em] md:-left-10 -z-10"></div>

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
          tes
        </p>
      </div>
      <div className="mt-5 grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:mx-16">
        <div className="dampaktes" data-aos="fade-up" data-aos-delay="500">
          <div>
            <BsBook className="logodampak" />
          </div>
          <p>
            Peserta didik tidak tergantung pada lembaga bimbingan belajar untuk
            persiapan tes
          </p>
        </div>
        <div className="dampaktes" data-aos="fade-up" data-aos-delay="700">
          <div>
            <BsPeople className="logodampak" />
          </div>
          <p>
            Peserta didik tidak perlu khawatir akan keharusan untuk menghafal
            konten
          </p>
        </div>
        <div className="dampaktes " data-aos="fade-up" data-aos-delay="1000">
          <div>
            <MdAttachMoney className="logodampak" />
          </div>
          <p>Orang tua tidak terbebani tanggungan finansial tambahan</p>
        </div>
        <div className="dampaktes" data-aos="fade-up" data-aos-delay="1300">
          <div>
            <BiBookmarks className="logodampak" />
          </div>
          <p>
            Guru lebih fokus pada pembelajaran yang berorientasi pada penalaran,
            bukan hafalan
          </p>
        </div>
        <div className="dampaktes " data-aos="fade-up" data-aos-delay="1500">
          <div>
            <FaChalkboardTeacher className="logodampak" />
          </div>
          <p>
            Guru percaya diri bahwa pembelajaran sesuai kurikulum sudah cukup
          </p>
        </div>
        <div className="dampaktes " data-aos="fade-up" data-aos-delay="1800">
          <div>
            <BsPen className="logodampak" />
          </div>
          <p>Dapat mengasah kemampuan penalaran peserta didik</p>
        </div>
      </div>
    </div>
  );
}

function Soal() {
  return (
    <div>
      <p className="title text-3xl text-center" data-aos="fade-up">
        contoh soal
      </p>
      <div className="mt-5 lg:mx-10">
        <div className="contohsoal" data-aos="fade-zoom-in">
          <div>
            <h2>contoh soal tes potensi kognitif</h2>
            <p>
              Lima sekawan Sano, Joko, Adi, Rimba, dan Ratu selalu berangkat
              bersama menuju sekolah. Joko selalu menjemput Sano, setelah ia
              dijemput oleh Adi. Rimba menjadi anak terakhir yang dijemput.
              Sementara rumah Ratu terletak di antara rumah Joko dan rumah Adi.
              Berikut ini pernyataan yang BENAR adalah ….
            </p>
          </div>
          <ul>
            <li>
              <p>A.Rumah Ratu terletak paling jauh</p>
            </li>
            <li>
              <p>B.Rumah Adi terletak paling jauh</p>
            </li>
            <li>
              <p>C.Rumah Rimba terletak paling jauh</p>
            </li>
            <li>
              <p>D.Rumah Sano terletak paling dekat</p>
            </li>
            <li>
              <p>E.Rumah Adi terletak paling dekat</p>
            </li>
          </ul>
        </div>
        <div className="contohsoal" data-aos="fade-zoom-in">
          <h2>contoh soal tes penalaran matematika</h2>
          <div className="flex flex-col lg:flex-row">
            <img src={Mtk} alt="mtk" className="my-3 lg:w-[60%] xl:w-full" />
            <div className="lg:m-5">
              <p>
                Sampah anorganik lebih lama terurai dibandingkan dengan sampah
                organik. Waktu dekomposisi popok sekali pakai lebih lama dari
                plastik, namun kurang dari kulit sintetis. Berapa waktu
                dekomposisi yang mungkin dari popok sekali pakai?
              </p>
              <ul>
                <li>
                  <p>A.100 Tahun</p>
                </li>
                <li>
                  <p>B.250 Tahun</p>
                </li>
                <li>
                  <p>C.375 Tahun</p>
                </li>
                <li>
                  <p>D.475 Tahun</p>
                </li>
                <li>
                  <p>E.575 Tahun</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="contohsoal" data-aos="fade-zoom-in">
          <h2>contoh soal tes penalaran bahasa indonesia</h2>
          <div className="flex flex-col lg:flex-row">
            <img
              src={Bindo}
              alt="bindo"
              className="my-3 lg:w-[60%] xl:w-full"
            />
            <div className="lg:m-5">
              <p>
                Berdasarkan bacaan di samping, bila seorang temanmu, Ari,
                mengeluh bahwa ia sebenarnya ingin minum susu seperti teman
                lainnya, tetapi selalu diare ketika minum susu. Apa yang akan
                kamu sarankan?
              </p>
              <ul>
                <li>
                  <p>
                    A.Ari dapat mencoba minum susu dengan menambah sari jeruk
                  </p>
                </li>
                <li>
                  <p>
                    B.Ari dapat mencoba susu bubuk seperti susu yang diminum
                    oleh balita.
                  </p>
                </li>
                <li>
                  <p>C.Ari dapat mencoba minum yoghurt. </p>
                </li>
                <li>
                  <p>D.Ari tidak perlu minum susu sama sekali. </p>
                </li>
                <li>
                  <p>E.Ari dapat mencoba minum susu secara bertahap</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="contohsoal" data-aos="fade-zoom-in">
          <h2>contoh soal tes penalaran bahasa inggris</h2>
          <div className="flex flex-col lg:flex-row">
            <img
              src={Binggris}
              alt="binggris"
              className="my-3 lg:w-[60%] xl:w-full"
            />
            <div className="lg:m-5">
              <p>
                One of the important findings of the research on measles is that
              </p>
              <ul>
                <li>
                  <p>
                    A.children who have got measles may become difficult to
                    handle because of their behavior
                  </p>
                </li>
                <li>
                  <p>
                    B.in reality, there are no measles patients who get brain
                    damage.
                  </p>
                </li>
                <li>
                  <p>
                    C.personality changes already occur at the time a child has
                    measles.
                  </p>
                </li>
                <li>
                  <p>
                    D.measles can cause children to become physically
                    handicapped.
                  </p>
                </li>
                <li>
                  <p>
                    E.measles is the first killer of childhood disease in the
                    world.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Snbt;
