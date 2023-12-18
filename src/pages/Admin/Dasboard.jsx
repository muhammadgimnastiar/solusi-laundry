import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { PencilIcon, UserPlusIcon } from "@heroicons/react/24/solid";
import {
  Card,
  CardHeader,
  Input,
  Typography,
  Button,
  CardBody,
  Tabs,
  TabsHeader,
  Tab,
  Chip,
  CardFooter,
  Avatar,
  IconButton,
  Tooltip,
} from "@material-tailwind/react";
import { useAuth } from "../../utils/AuthContext";
import React, { useState, useEffect } from "react";
import api from "../../api/AxiosConfig";
import { Link } from "react-router-dom";

const TABS = [
  {
    label: "Semua",
    value: "semua",
  },
  {
    label: "Baru",
    value: "baru",
  },
  {
    label: "Proses",
    value: "proses",
  },
  {
    label: "Selesai",
    value: "selesai",
  },
];
const TABLE_HEAD = [
  "Nama",
  "Status Pesanan",
  "Paket",
  "Status Pembayaran",
  "Total Bayar",
  "",
];

export function Dashboard() {
  const [users, setUser] = useState([]);
  const [search, setSearch] = useState("");
  const [statusCategory, setStatusCategory] = useState("");
  console.log(statusCategory);
  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const response = await api.get("/users");
    setUser(response.data);
  };

  const deleteUser = async (id) => {
    try {
      await api.delete(`/users/${id}`);
      getUsers();
    } catch (error) {
      console.log(error);
    }
  };
  const { logoutUser } = useAuth();
  return (
    <div className="bg-bg">
      <Card className="h-full w-full" shadow={false}>
        <CardHeader
          floated={false}
          shadow={false}
          className="rounded-none container mx-auto"
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
              <Button variant="outlined" size="sm" onClick={() => logoutUser()}>
                Keluar
              </Button>
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

          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="w-full md:w-72 ml-6">
              <Input
                label="Pencarian"
                icon={<MagnifyingGlassIcon className="h-5 w-5" />}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            <Tabs value="all" className="w-full md:w-max">
              <TabsHeader>
                {TABS.map(({ label, value, color }) => (
                  <Tab
                    key={value}
                    value={value}
                    onClick={(e) => {
                      setStatusCategory(value);
                    }}
                  >
                    &nbsp;&nbsp;{label}&nbsp;&nbsp;
                  </Tab>
                ))}
              </TabsHeader>
            </Tabs>
          </div>
        </CardHeader>
        <CardBody className="overflow-scroll px-0">
          <table className="mt-4 w-full min-w-max table-auto text-left ">
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
              {users
                .filter((user) => {
                  return search.toLowerCase() === ""
                    ? user
                    : user.name.toLowerCase().includes(search);
                })
                .filter((user) => {
                  return statusCategory === "semua"
                    ? user
                    : user.status.toLowerCase().includes(statusCategory);
                })
                .map(
                  (
                    { id, name, status, paket, berat, total, dibayar },
                    index
                  ) => {
                    const isLast = index === users.length - 1;
                    const classes = isLast
                      ? "p-4"
                      : "p-4 border-b border-blue-gray-50";

                    return (
                      <tr key={id}>
                        {/* name */}
                        <td className={classes}>
                          <div className="flex items-center gap-3 ml-7">
                            <Avatar
                              src={`/icons/profile-${Math.floor(
                                Math.random() * 4
                              )}.png`}
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
                          <div className="w-max">
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
                          <div className="flex flex-col">
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal ml-7"
                            >
                              {paket.name}
                            </Typography>
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal opacity-70 ml-7"
                            >
                              {paket.waktu < 24
                                ? paket.waktu
                                : paket.waktu / 24}
                              {paket.waktu < 24 ? <> Jam</> : <> Hari</>} ({" "}
                              {berat} kg )
                            </Typography>
                          </div>
                        </td>

                        <td className={classes}>
                          <div className="w-max ml-7">
                            <Chip
                              variant="ghost"
                              size="sm"
                              value={dibayar ? "Lunas" : "Belum Lunas"}
                              color={dibayar ? "green" : "blue-gray"}
                            />
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
                        {/* Edit User */}
                        <td className={classes}>
                          <Tooltip content="Edit User">
                            <Link to={`edit/${id}`}>
                              <IconButton variant="text">
                                <PencilIcon className="h-4 w-4" />
                              </IconButton>
                            </Link>
                          </Tooltip>
                        </td>
                      </tr>
                    );
                  }
                )}
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
      </Card>
    </div>
  );
}
