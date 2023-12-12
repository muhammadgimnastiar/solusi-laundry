import React, { useState, useEffect } from "react";

import api from "../../api/AxiosConfig";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { PencilIcon, UserPlusIcon } from "@heroicons/react/24/solid";
import {
  Card,
  CardHeader,
  Input,
  Typography,
  Button,
  CardBody,
  Chip,
  CardFooter,
  Avatar,
  IconButton,
  Tooltip,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import WhatsappFloating from "../../components/FloatingButton/WhatsappFloating";

const TABLE_HEAD = ["Nama", "Status Pesanan", "Paket", "Total Bayar"];

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
    <div className="bg-bg">
      <Card className="h-full w-full" shadow={false}>
        <CardHeader
          floated={false}
          shadow={false}
          className="rounded-none container mx-auto px-4 lg:"
        >
          <div className="mb-8 ml-6 flex items-center justify-between gap-8">
            <div>
              <Typography variant="h5" color="blue-gray">
                Daftar Pesanan
              </Typography>
              <Typography color="gray" className="mt-1 font-normal">
                Lihat semua informasi pesanan pelanggan
              </Typography>
            </div>
            <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
              <Link to={"add"}>
                <Button
                  className="flex items-center gap-3 bg-primary-blue"
                  size="sm"
                >
                  <UserPlusIcon strokeWidth={2} className="h-4 w-4" /> Tambah
                  Pesanan
                </Button>
              </Link>
            </div>
          </div>

          <div className="w-full md:w-72 ml-6">
            <Input
              label="Pencarian"
              icon={<MagnifyingGlassIcon className="h-5 w-5" />}
            />
          </div>
        </CardHeader>
        <CardBody className="overflow-scroll px-0">
          <table className="mt-4 w-full min-w-max table-auto text-left">
            <thead>
              <tr>
                {TABLE_HEAD.map((head) => (
                  <th
                    key={head}
                    className="border-y border-blue-gray-100 bg-secondary-blue p-4 my-3"
                  >
                    <Typography
                      variant="normal"
                      color="white"
                      className="font-normal leading-none ml-7"
                    >
                      {head}
                    </Typography>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {users.map(({ id, name, status, paket, berat, total }, index) => {
                const isLast = index === users.length - 1;
                const classes = isLast
                  ? "p-4"
                  : "p-4 border-b border-blue-gray-50";

                return (
                  <tr key={name}>
                    {/* name */}
                    <td className={classes}>
                      <div className="flex items-center gap-3 ml-7">
                        <Avatar
                          src={
                            "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-3.jpg"
                          }
                          alt={name}
                          size="sm"
                        />

                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {name}
                        </Typography>
                      </div>
                    </td>
                    {/* Status Pesanan */}

                    <td className={classes}>
                      <div className="w-max ml-7">
                        <Chip
                          variant="ghost"
                          size="sm"
                          value={status}
                          color={
                            status === "Selesai"
                              ? "green"
                              : status === "Proses"
                              ? "yellow"
                              : "blue-gray"
                          }
                        />
                      </div>
                    </td>

                    {/* Paket */}
                    <td className={classes}>
                      <div className="flex flex-col ml-7">
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {paket.name}
                        </Typography>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal opacity-70"
                        >
                          {paket.waktu < 24 ? paket.waktu : paket.waktu / 24}
                          {paket.waktu < 24 ? <> Jam</> : <> Hari</>} ( {berat}{" "}
                          kg )
                        </Typography>
                      </div>
                    </td>

                    {/* Total bayar */}
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal ml-7"
                      >
                        Rp {total}
                      </Typography>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </CardBody>
        <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
          <Typography variant="small" color="blue-gray" className="font-normal">
            Halaman 1 dari 1
          </Typography>
          <div className="flex gap-2">
            <Button variant="outlined" size="sm">
              Sebelumnya
            </Button>
            <Button variant="outlined" size="sm">
              Selanjutnya
            </Button>
          </div>
        </CardFooter>
        <WhatsappFloating />
      </Card>
    </div>
  );
  // return (
  //   <>
  //     <div className="w-[397px] h-16 relative ">
  //       <div className="left-10 top-5 absolute text-zinc-950 text-2xl font-bold font-['Inter']">
  //         Daftar Pesanan
  //       </div>
  //       <div className="w-[397px] h-[23px] left-10 top-[50px] absolute text-black text-opacity-70 text-xl font-normal font-['Inter']">
  //         Lihat semua informasi pesanan pelanggan
  //         <br />
  //       </div>
  //     </div>
  //     {/* <div className="w-[400px] h-[43px] relative">
  //       <div className="w-[355px] h-[43px] left-10 top-5 absolute bg-white rounded-[10px] border border-black" />
  //       <div className="w-[30px] h-[30px] left-[315px] top-[7px] absolute rounded-[10px]" />
  //       <div className="w-[94px] left-[45px] top-[28px] absolute text-center text-black text-opacity-60 text-lg font-normal font-['Inter']">
  //         Pencarian
  //       </div>
  //     </div> */}
  //     <div className="w-[400px] h-[43px] relative">
  //       <div className="w-full md:w-72 absolute left-10 top-5 text-lg font-normal font-inter">
  //         <Input
  //           label="Pencarian"
  //           icon={<MagnifyingGlassIcon className="h-5 w-5" />}
  //         />
  //       </div>
  //     </div>
  //     <div className="overflow-scroll">
  //       <div className="w-[1440px] h-[110px] relative ">
  //         <div className="w-[1440px] h-[90px] left-0 top-10 absolute bg-blue-500" />
  //         <div className="left-[150px] top-[60px] absolute text-white text-lg font-medium font-['Inter']">
  //           Nama
  //         </div>
  //         <div className="left-[465px] top-[60px] absolute text-white text-lg font-medium font-['Inter']">
  //           Status Pesanan
  //         </div>
  //         <div className="left-[1195px] top-[60px] absolute text-white text-lg font-medium font-['Inter']">
  //           Total Bayar
  //         </div>
  //         <div className="left-[823px] top-[60px] absolute text-white text-lg font-medium font-['Inter']">
  //           Paket
  //         </div>
  //       </div>
  //       {users.map(
  //         ({ id, name, status, paket, berat, total, dibayar }, index) => {
  //           return (
  //             <div className="w-[1440px] h-[110px] relative">
  //               <div className="w-[1440px] h-[110px] left-0 top-0 absolute bg-white border-b border-neutral-200" />
  //               <div className="left-[150px] top-[44px] absolute text-black text-lg font-medium font-['Inter']">
  //                 {name}
  //               </div>
  //               <div className="left-[498px] top-[37px] absolute text-black text-lg font-medium font-['Inter']">
  //                 {status}
  //               </div>
  //               <div className="left-[1195px] top-[44px] absolute text-black text-lg font-medium font-['Inter']">
  //                 {total}
  //               </div>
  //               <div className="left-[823px] top-[33px] absolute">
  //                 {paket}
  //                 <br />3 Hari ({berat} kg)
  //               </div>
  //               <div className="w-[50px] h-[50px] left-[80px] top-[30px] absolute bg-blue-800 rounded-full" />
  //             </div>
  //           );
  //         }
  //       )}
  //     </div>
  //   </>
  // );
}

export default Pesanan;
