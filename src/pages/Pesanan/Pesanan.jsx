import React, { useState, useEffect } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { Input } from "@material-tailwind/react";
import api from "../../api/AxiosConfig";
export function Pesanan() {
  const [users, setUser] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const response = await api.get("/users");
    setUser(response.data);
  };

  return (
    <>
      <div className="w-[397px] h-16 relative ">
        <div className="left-10 top-5 absolute text-zinc-950 text-2xl font-bold font-['Inter']">
          Daftar Pesanan
        </div>
        <div className="w-[397px] h-[23px] left-10 top-[50px] absolute text-black text-opacity-70 text-xl font-normal font-['Inter']">
          Lihat semua informasi pesanan pelanggan
          <br />
        </div>
      </div>
      {/* <div className="w-[400px] h-[43px] relative">
        <div className="w-[355px] h-[43px] left-10 top-5 absolute bg-white rounded-[10px] border border-black" />
        <div className="w-[30px] h-[30px] left-[315px] top-[7px] absolute rounded-[10px]" />
        <div className="w-[94px] left-[45px] top-[28px] absolute text-center text-black text-opacity-60 text-lg font-normal font-['Inter']">
          Pencarian
        </div>
      </div> */}
      <div className="w-[400px] h-[43px] relative">
        <div className="w-full md:w-72 absolute left-10 top-5 text-lg font-normal font-inter">
          <Input
            label="Pencarian"
            icon={<MagnifyingGlassIcon className="h-5 w-5" />}
          />
        </div>
      </div>
      <div className="overflow-scroll">
        <div className="w-[1440px] h-[110px] relative ">
          <div className="w-[1440px] h-[90px] left-0 top-10 absolute bg-blue-500" />
          <div className="left-[150px] top-[60px] absolute text-white text-lg font-medium font-['Inter']">
            Nama
          </div>
          <div className="left-[465px] top-[60px] absolute text-white text-lg font-medium font-['Inter']">
            Status Pesanan
          </div>
          <div className="left-[1195px] top-[60px] absolute text-white text-lg font-medium font-['Inter']">
            Total Bayar
          </div>
          <div className="left-[823px] top-[60px] absolute text-white text-lg font-medium font-['Inter']">
            Paket
          </div>
        </div>
        {users.map(
          ({ id, name, status, paket, berat, total, dibayar }, index) => {
            return (
              <div className="w-[1440px] h-[110px] relative">
                <div className="w-[1440px] h-[110px] left-0 top-0 absolute bg-white border-b border-neutral-200" />
                <div className="left-[150px] top-[44px] absolute text-black text-lg font-medium font-['Inter']">
                  {name}
                </div>
                <div className="left-[498px] top-[37px] absolute text-black text-lg font-medium font-['Inter']">
                  {status}
                </div>
                <div className="left-[1195px] top-[44px] absolute text-black text-lg font-medium font-['Inter']">
                  {total}
                </div>
                <div className="left-[823px] top-[33px] absolute">
                  {paket}
                  <br />3 Hari ({berat} kg)
                </div>
                <div className="w-[50px] h-[50px] left-[80px] top-[30px] absolute bg-blue-800 rounded-full" />
              </div>
            );
          }
        )}
      </div>
    </>
  );
}

export default Pesanan;
