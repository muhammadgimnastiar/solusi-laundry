import React from "react";

export function Pesanan() {
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
      <div className="w-[400px] h-[43px] relative">
        <div className="w-[355px] h-[43px] left-10 top-5 absolute bg-white rounded-[10px] border border-black" />
        <div className="w-[30px] h-[30px] left-[315px] top-[7px] absolute rounded-[10px]" />
        <div className="w-[94px] left-[45px] top-[28px] absolute text-center text-black text-opacity-60 text-lg font-normal font-['Inter']">
          Pencarian
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
        <div className="w-[1440px] h-[110px] relative">
          <div className="w-[1440px] h-[110px] left-0 top-0 absolute bg-white border-b border-neutral-200" />
          <div className="left-[150px] top-[44px] absolute text-black text-lg font-medium font-['Inter']">
            Kartika
          </div>
          <div className="left-[498px] top-[37px] absolute text-black text-lg font-medium font-['Inter']">
            Baru
          </div>
          <div className="left-[1195px] top-[44px] absolute text-black text-lg font-medium font-['Inter']">
            Rp 18.000
          </div>
          <div className="left-[823px] top-[33px] absolute">
            Regular Setrika
            <br />2 Hari (3 kg)
          </div>
          <div className="w-[50px] h-[50px] left-[80px] top-[30px] absolute bg-blue-800 rounded-full" />
        </div>
        <div className="w-[1440px] h-[110px] relative">
          <div className="w-[1440px] h-[110px] left-0 top-0 absolute bg-white border-b border-neutral-200" />
          <div className="w-[50px] h-[50px] left-[80px] top-[30px] absolute bg-indigo-800 rounded-full" />
          <div className="left-[150px] top-[44px] absolute text-black text-lg font-medium font-['Inter']">
            Dandi
          </div>
          <div className="left-[480px] top-[44px] absolute text-black text-lg font-medium font-['Inter']">
            Diproses
          </div>
          <div className="left-[823px] top-[33px] absolute">
            Kilat
            <br />8 Jam (1 kg)
          </div>
          <div className="left-[1197px] top-[40px] absolute text-black text-lg font-medium font-['Inter']">
            Rp 10.000
          </div>
        </div>
        <div className="w-[1440px] h-[110px] relative">
          <div className="w-[1440px] h-[110px] left-0 top-0 absolute bg-white border-b border-neutral-200" />
          <div className="w-[50px] h-[50px] left-[80px] top-[30px] absolute bg-indigo-800 rounded-full" />
          <div className="left-[150px] top-[44px] absolute text-black text-lg font-medium font-['Inter']">
            Nana
          </div>
          <div className="left-[487px] top-[44px] absolute text-black text-lg font-medium font-['Inter']">
            Selesai
          </div>
          <div className="left-[822px] top-[33px] absolute">
            Paket 1 Hari
            <br />1 Hari (5 kg)
          </div>
          <div className="left-[1196px] top-[44px] absolute text-black text-lg font-medium font-['Inter']">
            Rp 40.000
          </div>
        </div>
        <div className="w-[1440px] h-[110px] relative">
          <div className="w-[1440px] h-[110px] left-0 top-0 absolute bg-white border-b border-neutral-200" />
          <div className="w-[50px] h-[50px] left-[80px] top-[30px] absolute bg-indigo-800 rounded-full" />
          <div className="left-[150px] top-[44px] absolute text-black text-lg font-medium font-['Inter']">
            Nunu
          </div>
          <div className="left-[480px] top-[44px] absolute text-black text-lg font-medium font-['Inter']">
            Diproses
          </div>
          <div className="left-[820px] top-[33px] absolute">
            Bulanan
            <br />
            30 Hari (18 kg)
          </div>
          <div className="left-[1197px] top-[44px] absolute text-black text-lg font-medium font-['Inter']">
            Rp 100.000
          </div>
        </div>
      </div>
    </>
  );
}

export default Pesanan;
