import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { ScrollDownElement } from "../Component/Utils";
import Aos from "aos";
import "aos/dist/aos.css";

import { TfiWrite } from "react-icons/tfi";
import { IoSchoolOutline } from "react-icons/io5";
import { BsBook } from "react-icons/bs";
import { IoDocumentsOutline } from "react-icons/io5";
import { SlGraph, SlBookOpen } from "react-icons/sl";
import { BiSearchAlt2 } from "react-icons/bi";

import PakNadiem from "../Image/pakk.png";
import FotoTentang from "../Image/tentang.png";
import Pembatas from "../Image/pembatas.svg";

function Beranda() {
  useEffect(() => {
    Aos.init({ duration: 1500, anchorPlacement: "top-bottom", mirror: true });
  }, []);

  return (
    <div>
      <Jumbotron />
      <img
        src={Pembatas}
        alt="batas"
        className="mx-auto w-[80%] md:w-[50%] my-[10em]"
        data-aos="fade-zoom-in"
      />
      <Tentang />
      <Perubahan />
      <Prinsip />
      <Alasan />
      <Dampak />
    </div>
  );
}

function Jumbotron() {
  return (
    <div className="relative flex flex-col mt-20 my-5 md:flex-row-reverse md:items-center">
      <div className="blob h-60 w-60 -bottom-[20em] -right-[5em] md:-right-[10em] -z-10"></div>

      <ScrollDownElement />
      <img
        src={PakNadiem}
        alt="paknadiem"
        className="w-[80%] sm:w-[70%] md:w-[50%] xl:w-[40%] mx-auto"
        data-aos="fade-up"
        data-aos-delay="300"
      />
      <div className="mt-5 md:mt-0" data-aos="fade-up">
        <p className="opacity-60">Episode 22</p>
        <h1 className="title text-3xl lg:w-[80%]">
          transformasi seleksi masuk perguruan tinggi negeri 2023
        </h1>
        <p className="text-justify xl:text-left md:w-[80%]">
          Demi mendorong dan mengasah nalar karakter siswa yang lebih holistik,
          serta memberikan kesempatan yang lebih adil dari semua siswa dalam
          kompetensi masuk PTN (Perguruan Tinggi Negeri)
        </p>
      </div>
    </div>
  );
}

function Tentang() {
  return (
    <div
      id="tentang"
      className="relative flex flex-col md:flex-row md:items-center my-20"
    >
      <div className="blob h-40 w-40 top-[10em] -left-[7em] md:-left-[5em] md:top-[3em] -z-10"></div>

      <img
        src={FotoTentang}
        alt="tentang"
        className="w-full sm:w-[70%] md:w-[50%] xl:w-[40%] mx-auto"
        data-aos="fade-right"
      />
      <div className="mt-10 md:mt-0 md:mx-3 xl:mx-10">
        <h1 className="text-3xl title" data-aos="fade-left">
          tentang perubahan
        </h1>
        <p
          className="text-justify xl:text-left md:w-[100%]"
          data-aos="fade-left"
          data-aos-delay="300"
        >
          Aturan baru seleksi masuk PTN ini dibuat untuk memfasilitasi tujuan
          tadi. Kebijakan ini tidak akan merubah 180 derajat sistem yang udah
          ada, justru aturan ini diharapkan bisa menyempurnakan mekanisme yang
          selama ini dilakukan. Harapannya, seleksi masuk PTN menjadi lebih
          inklusif, transparan, dan terintegrasi dengan transformasi belajar di
          segala jenjang.
        </p>
      </div>
    </div>
  );
}

function Perubahan() {
  return (
    <div
      id="perubahan"
      className="relative mt-24 my-20 xl:mx-20 flex flex-col md:flex-row md:items-start rounded-[1.5em] md:rounded-xl p-7 md:px-10 bg-gradient-to-br from-birutua to-birumuda"
      data-aos="fade-zoom-in"
      data-aos-delay="500"
    >
      <div className="text-whitedef">
        <h1 className="uppercase text-2xl font-bold ">perubahan</h1>
        <p className="font-light text-lg xl:w-[90%]">
          Beberapa macam tes seleksi masuk{" "}
          <span className="font-bold">Perguruan Tinggi Negeri</span>
        </p>
      </div>
      <div className="mt-5 md:mt-0 md:flex md:space-x-3">
        <Link to={"/snbp#"}>
          <div className="boxperubahan">
            <IoSchoolOutline className="isiboxperubahan" />
            <h3>snmptn</h3>
          </div>
        </Link>
        <Link to={"/snbt#"}>
          <div className="boxperubahan">
            <BsBook className="isiboxperubahan" />
            <h3>sbmptn</h3>
          </div>
        </Link>
        <Link to={"/mandiri#"}>
          <div className="boxperubahan">
            <TfiWrite className="isiboxperubahan" />
            <h3>mandiri</h3>
          </div>
        </Link>
      </div>
    </div>
  );
}

function Alasan() {
  return (
    <div id="alasan" className="my-48 relative">
      <div className="blob h-52 w-52 -bottom-[17em] -right-[5em] md:-right-[3em] -z-30"></div>
      <p className="title text-3xl" data-aos="fade-right">
        alasan perubahan
      </p>
      <p
        className="text-justify md:w-[50%]"
        data-aos="fade-right"
        data-aos-delay="300"
      >
        Alasan adanya perubahan Tes Seleksi masuk Perguruan Tinggi Negeri
      </p>
      <div className="my-5 space-y-5 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-3">
        <div className="boxalasan" data-aos="fade-up" data-aos-delay="500">
          <div className="before:absolute before:-top-5 before:-left-5 before:bg-whitedef/30 before:w-28 before:h-28 before:rounded-full"></div>
          <div className="before:absolute before:-bottom-5 before:-right-5 before:bg-whitedef/30 before:w-28 before:h-28 before:rounded-full"></div>
          <p className="font-bold">
            Memperkecil kesenjangan antara murid dengan latar ekonomi keluarga
          </p>
          <p className="font-light">
            Banyak peserta didik yang tertekan, orang tua juga tertekan untuk
            harus mengikuti berbagai macam bimbingan belajar per mata pelajaran
            yang harus diambil di tes SBMPTN
          </p>
        </div>
        <div className="boxalasan" data-aos="fade-up" data-aos-delay="700">
          <div className="before:absolute before:-top-5 before:-left-5 before:bg-whitedef/30 before:w-28 before:h-28 before:rounded-full"></div>
          <div className="before:absolute before:-bottom-5 before:-right-5 before:bg-whitedef/30 before:w-28 before:h-28 before:rounded-full"></div>
          <p className="font-bold">Dukung Output Kampus yang Diharapkan</p>
          <p className="font-light">
            Merdeka Belajar di pendidikan dasar menengah dan pendidikan tinggi
            sudah dilakukan, tetapi belum ada jembatan di antara keduanya.
            Akibatnya, antara output yang ingin dihasilkan di perguruan tinggi
            belum selaras dengan seleksi inputnya
          </p>
        </div>
        <div className="boxalasan" data-aos="fade-up" data-aos-delay="900">
          <div className="before:absolute before:-top-5 before:-left-5 before:bg-whitedef/30 before:w-28 before:h-28 before:rounded-full"></div>
          <div className="before:absolute before:-bottom-5 before:-right-5 before:bg-whitedef/30 before:w-28 before:h-28 before:rounded-full"></div>
          <p className="font-bold">
            Dukung Transformasi Pembelajaran di Sekolah
          </p>
          <p className="font-light">
            transformasi di sekolah juga berhubungan dengan perubahan seleksi
            masuk PTN ini. Contohnya yakni dengan Asesmen Nasional dan Kurikulum
            Merdeka di sekolah.
          </p>
        </div>
        <div className="boxalasan" data-aos="fade-up" data-aos-delay="1200">
          <div className="before:absolute before:-top-5 before:-left-5 before:bg-whitedef/30 before:w-28 before:h-28 before:rounded-full"></div>
          <div className="before:absolute before:-bottom-5 before:-right-5 before:bg-whitedef/30 before:w-28 before:h-28 before:rounded-full"></div>
          <p className="font-bold">
            Dukung Pelajaran di Sekolah sesuai dengan Tuntutan Belajar di Kampus
          </p>
          <p className="font-light">
            Guru perlu yakin bahwa pembelajaran di sekolah dalam rangka
            mengembangkan karakter dan kompetensi siswa juga dapat menyiapkan
            siswa untuk masuk perguruan tinggi.
          </p>
        </div>
      </div>
    </div>
  );
}

function Dampak() {
  return (
    <div
      id="dampak"
      className="relative my-16 py-8 px-7 lg:py-5 lg:px-8 flex flex-col lg:flex-row lg:items-start bg-gradient-to-br from-birutua to-birumuda rounded-xl"
      data-aos="fade-zoom-in"
      data-aos-delay="500"
    >
      <div className="text-whitedef lg:my-5 ">
        <h1 className="!text-whitedef title text-2xl">pro dan kontra</h1>
        <p className="font-light md:w-[90%]">
          Terjadinya kebijakan mengenai permasalahan perubahan jalur masuk PTN
          2023 tentunya memiliki pro dan kontra
        </p>
      </div>
      <div className="my-3 lg:my-0 space-y-2 md:grid md:grid-cols-2 md:space-y-0 md:gap-3 lg:w-[90%]">
        <div className="boxdampak">
          <p className="uppercase font-bold">pro</p>
          <p>
            Mendorong pembelajaran secara menyeluruh dan merata tidak hanya
            difokuskan pada beberapa bidang tertentu saja.
          </p>
        </div>
        <div className="boxdampak">
          <p className="uppercase font-bold">pro</p>
          <p>
            Para pelajar di Indonesia diharapkan memilih jurusan yang sesuai
            dengan bakat dan minat, dengan syarat diperbolehkan pelajar untuk
            lintas jurusan bagi soshum ke saintek maupun sebaliknya.
          </p>
        </div>
        <div className="boxdampak">
          <p className="uppercase font-bold">kontra</p>
          <p>
            Banyak pelajar yang merasa bahwa kebijakan tersebut seharusnya tidak
            diterapkan secara langsung melainkan menunggu priode setelahnya.
          </p>
        </div>
        <div className="boxdampak">
          <p className="uppercase font-bold">kontra</p>
          <p>
            Kesiapan dalam menyambut kebijakan ini khususnya para pelajar belum
            dirasa maksimal. Apalagi antara juknis perubahan seleksi masuk PTN
            antara tahun sebelumnnya dengan tahun 2023 sangatlah jauh berbeda.
          </p>
        </div>
      </div>
    </div>
  );
}

function Prinsip() {
  return (
    <div id="prinsip" className="mt-40 mb-20 relative">
      <div className="blob h-40 w-40 -top-[3em] -right-[5em] md:-right-[3em] -z-10"></div>
      <div className="blob h-40 w-40 -bottom-[5em] -left-[5em] md:-left-4 -z-10"></div>

      <div className="text-left md:text-center">
        <h1 className="title text-3xl" data-aos="fade-up">
          prinsip perubahan
        </h1>
        <p
          className="text-justify md:text-center md:w-[80%] md:mx-auto"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          Beberapa prinsip perubahan tes seleksi masuk Perguruan Tinggi Negeri
        </p>
      </div>
      <div className="space-y-5 mt-10 md:grid md:grid-cols-2 md:gap-3 md:space-y-0 lg:mx-20">
        <div className="boxprinsip" data-aos="fade-up" data-aos-delay="500">
          <p>Mendorong pembelajaran yang menyeluruh</p>
          <span>
            <BsBook className="iconprinsip" />
          </span>
        </div>
        <div className="boxprinsip" data-aos="fade-up" data-aos-delay="800">
          <p>Lebih berfokus pada kemampuan penalaran</p>
          <span>
            <SlGraph className="iconprinsip" />
          </span>
        </div>
        <div className="boxprinsip" data-aos="fade-up" data-aos-delay="1100">
          <p>Lebih inklusif dan lebih mengakomodasi keragaman peserta didik</p>
          <span>
            <IoDocumentsOutline className="iconprinsip" />
          </span>
        </div>
        <div className="boxprinsip" data-aos="fade-up" data-aos-delay="1500">
          <p>Lebih transparan</p>
          <span>
            <BiSearchAlt2 className="iconprinsip" />
          </span>
        </div>
        <div className="boxprinsip" data-aos="fade-up" data-aos-delay="1800">
          <p>
            Lebih terintegrasi dengan mencakup bukan hanya program
            sarjana,tetapi juga diploma tiga dan diploma empat/sarjana terapan
          </p>
          <span>
            <SlBookOpen className="iconprinsip" />
          </span>
        </div>
      </div>
    </div>
  );
}

export default Beranda;
