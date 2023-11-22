import React from "react";
import { Button } from "@material-tailwind/react";

import Hero from "../../components/Hero/Hero";
import { Kelebihan, Layanan, Testimoni } from "./data";

function Home() {
  return (
    <>
      <div className="bg-bg">
        <div className="container mx-auto p-4 lg:pt-20 lg:px-20">
          <Hero />

          {/* Mengapa */}
          <div className="w-full bg-secondary-blue py-10 text-center mt-24 mb-8 rounded-full">
            <h5 className="text-white font-inter font-bold text-[28px]">
              Mengapa Memilih Kami
            </h5>
          </div>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5 ps-5">
            {Kelebihan.map((kelebihan) => (
              <div className="flex gap-4">
                <div className="flex-none w-[33px] h-[33px] bg-secondary-blue rounded-full "></div>
                <li className="text-lg">{kelebihan}</li>
              </div>
            ))}
          </ul>

          {/* Layanan */}
          <div className="w-full bg-primary-blue py-10 text-center mt-24 mb-8 rounded-full">
            <h5 className="text-white font-inter font-bold text-[28px]">
              Layanan Kami
            </h5>
          </div>
          <ul className="grid grid-cols-2 gap-5 ps-5">
            {Layanan.map((layanan) => (
              <div className="flex gap-4">
                <div className="flex-none w-[33px] h-[33px] bg-primary-blue rounded-full "></div>
                <li className="text-lg">{layanan}</li>
              </div>
            ))}
          </ul>

          {/* Review */}
          <div className="w-full bg-secondary-blue py-10 text-center mt-24 mb-8 rounded-[40px] ">
            <h5 className="text-white font-inter font-bold text-[28px] mb-14">
              Testimoni
            </h5>
            <div className="grid grid-cols-2 lg:grid-cols-4 mx-auto gap-8 md:gap-16 lg:p-12 ps-8 lg:ps-16">
              {Testimoni.map((testi) => {
                return (
                  <div className="w-[170px] h-[240px] md:w-[190px] md:h-[250px] z-10 bg-primary-blue  rounded-[20px]  before:bg-tersier-blue relative before:absolute before:top-3 before:right-4 before:w-full before:h-full before:rounded-[20px]">
                    <img
                      src={testi.img}
                      alt=""
                      className="absolute z-10 left-4 top-8"
                      width={119}
                      height={119}
                    />
                    <h1 className="absolute top-40 right-7 ">{testi.review}</h1>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="fixed z-50 right-8 md:right-28 bottom-10 rounded-full px-6 py-5 bg-green-600">
            <i className="fab fa-whatsapp text-3xl text-white" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
